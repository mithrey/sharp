import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { PlatformLocation } from '@angular/common';
import { User, Transaction } from '@/_models';
import { UserService, AuthenticationService, TransactionService } from '@/_services';
import { Router } from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];
    transactions = [];
    socket: WebSocket;
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private router: Router,
        private transactionService: TransactionService,
        private platformLocation: PlatformLocation
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.transactionService.getHistory()
            .pipe(first())
            .subscribe((data : Array<Transaction>) => this.transactions = data);
        this.handleSocket();

    }

    copyTransaction(recipient: string, amount: number){
        this.router.navigate(['/transaction'], { queryParams: { r: recipient, a: amount } });
    }
    
    handleSocket(){
        let wsUrl = "ws://" + this.platformLocation.hostname + ":8091/socket";
        this.socket = new WebSocket(wsUrl);
        let that = this;
        this.socket.onmessage = function(id){

            if(id.data == that.currentUser.id){

            }
            that.userService.getBalance()
            .pipe(first())
            .subscribe((balance : number) => that.currentUser.balance = balance);
        }
        this.socket.onopen = function () {
            console.log("connected to " + wsUrl);
        }
    }

}