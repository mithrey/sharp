import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User, Transaction } from '@/_models';
import { UserService, AuthenticationService, TransactionService } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];
    transactions = [];
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private transactionService: TransactionService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.transactionService.getHistory()
            .pipe(first())
            .subscribe((data : Array<Transaction>) => this.transactions = data);
        //this.loadAllUsers();
    }

    /*deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }*/

    /*private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }*/
}