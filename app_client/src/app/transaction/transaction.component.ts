import { Component, OnInit } from '@angular/core';
import { first, startWith, map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, Transaction } from '@/_models';
import { UserService, AuthenticationService, TransactionService, AlertService } from '@/_services';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({ templateUrl: 'transaction.component.html' })
export class TransactionComponent implements OnInit {
    currentUser: User;
    transactionForm: FormGroup;
    users = [];
    recipients: Array<string> = [];
    filtered: Observable<string[]>;
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private transactionService: TransactionService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        var recipient = this.route.snapshot.queryParams['r'] || '';
        var amount = this.route.snapshot.queryParams['a'] || '';

        this.transactionForm = this.formBuilder.group({
            recipient: [recipient, Validators.required],
            amount: [amount, [Validators.required, Validators.max(this.currentUser.balance), Validators.min(0)]]
        });

        this.userService.getAll()
        .pipe(first())
        .subscribe((data : Array<string>) => this.recipients = data);

        
        this.filtered = this.transactionForm.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
          );
    }

    get f() { return this.transactionForm.controls; }

    private _filter(value: string): string[] {
        const filterValue = this._normalizeValue(value);
        return this.recipients.filter(street => this._normalizeValue(street).includes(filterValue));
      }
    
      private _normalizeValue(value: string): string {
        return value.toLowerCase().replace(/\s/g, '');
      }

    onSubmit() {

        // reset alerts on submit
        this.alertService.clear();

        console.log(this.transactionForm);
        // stop here if form is invalid
        if (this.transactionForm.invalid) {
            return;
        }

        this.transactionService.pay(this.f.amount.value, this.f.recipient.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Transfer successful', true);
                    
                },
                error => {
                    this.alertService.error(error);
                });
                
    }
}