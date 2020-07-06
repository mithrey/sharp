(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t){function r(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=156},157:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(225))},158:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(231))},159:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(233))},160:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(235))},161:function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(237)),n(r(238)),n(r(239))},167:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(168);var n=r(222),i=r(223);n.platformBrowserDynamic().bootstrapModule(i.AppModule)},168:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(169),r(221)},223:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),o=r(59),a=r(98),s=r(99),c=r(224),u=r(161),l=r(240),f=r(157),p=r(158),d=r(159),h=r(160),v=r(265),m=function(){function e(){}return e=n([i.NgModule({exports:[],imports:[o.BrowserModule,a.ReactiveFormsModule,s.HttpClientModule,c.appRoutingModule],declarations:[l.AppComponent,f.HomeComponent,p.LoginComponent,d.RegisterComponent,v.AlertComponent,h.TransactionComponent],providers:[{provide:s.HTTP_INTERCEPTORS,useClass:u.JwtInterceptor,multi:!0},{provide:s.HTTP_INTERCEPTORS,useClass:u.ErrorInterceptor,multi:!0}],bootstrap:[l.AppComponent]})],e)}();t.AppModule=m},224:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(57),i=r(157),o=r(158),a=r(159),s=r(160),c=r(161),u=[{path:"",component:i.HomeComponent,canActivate:[c.AuthGuard]},{path:"login",component:o.LoginComponent},{path:"register",component:a.RegisterComponent},{path:"transaction",component:s.TransactionComponent},{path:"**",redirectTo:""}];t.appRoutingModule=n.RouterModule.forRoot(u)},225:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=r(41),s=r(8),c=r(51),u=r(57),l=function(){function e(e,t,r,n,i){this.authenticationService=e,this.userService=t,this.router=r,this.transactionService=n,this.platformLocation=i,this.users=[],this.transactions=[],this.currentUser=this.authenticationService.currentUserValue}return e.prototype.ngOnInit=function(){var e=this;this.transactionService.getHistory().pipe(a.first()).subscribe((function(t){return e.transactions=t})),this.handleSocket()},e.prototype.copyTransaction=function(e,t){this.router.navigate(["/transaction"],{queryParams:{r:e,a:t}})},e.prototype.handleSocket=function(){var e="ws://"+this.platformLocation.hostname+":8091/socket";this.socket=new WebSocket(e);var t=this;this.socket.onmessage=function(e){e.data,t.currentUser.id,t.userService.getBalance().pipe(a.first()).subscribe((function(e){return t.currentUser.balance=e}))},this.socket.onopen=function(){console.log("connected to "+e)}},e=n([o.Component({template:r(230)}),i("design:paramtypes",[c.AuthenticationService,c.UserService,u.Router,c.TransactionService,s.PlatformLocation])],e)}();t.HomeComponent=l},226:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=r(57),s=r(66),c=function(){function e(e){var t=this;this.router=e,this.subject=new s.Subject,this.keepAfterRouteChange=!1,this.router.events.subscribe((function(e){e instanceof a.NavigationStart&&(t.keepAfterRouteChange?t.keepAfterRouteChange=!1:t.clear())}))}return e.prototype.getAlert=function(){return this.subject.asObservable()},e.prototype.success=function(e,t){void 0===t&&(t=!1),this.keepAfterRouteChange=t,this.subject.next({type:"success",text:e})},e.prototype.error=function(e,t){void 0===t&&(t=!1),this.keepAfterRouteChange=t,this.subject.next({type:"error",text:e})},e.prototype.clear=function(){this.subject.next()},e=n([o.Injectable({providedIn:"root"}),i("design:paramtypes",[a.Router])],e)}();t.AlertService=c},227:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=r(99),s=r(66),c=r(41),u=function(){function e(e){this.http=e,this.currentUserSubject=new s.BehaviorSubject(JSON.parse(localStorage.getItem("currentUser"))),this.currentUser=this.currentUserSubject.asObservable()}return Object.defineProperty(e.prototype,"currentUserValue",{get:function(){return this.currentUserSubject.value},enumerable:!0,configurable:!0}),e.prototype.login=function(e,t){var r=this;return this.http.post("/api/login",{email:e,password:t}).pipe(c.map((function(e){return localStorage.setItem("currentUser",JSON.stringify(e)),r.currentUserSubject.next(e),e})))},e.prototype.logout=function(){localStorage.removeItem("currentUser"),this.currentUserSubject.next(null)},e=n([o.Injectable({providedIn:"root"}),i("design:paramtypes",[a.HttpClient])],e)}();t.AuthenticationService=u},228:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=r(99),s=function(){function e(e){this.http=e}return e.prototype.getAll=function(){return this.http.get("/api/users")},e.prototype.register=function(e){return this.http.post("/api/register",e)},e.prototype.delete=function(e){return this.http.delete("http://localhost:4000/users/"+e)},e.prototype.getBalance=function(){return this.http.get("/api/user/balance")},e=n([o.Injectable({providedIn:"root"}),i("design:paramtypes",[a.HttpClient])],e)}();t.UserService=s},229:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=r(99),s=function(){function e(e){this.http=e}return e.prototype.getHistory=function(){return this.http.get("api/history")},e.prototype.register=function(e){return this.http.post("/api/register",e)},e.prototype.pay=function(e,t){return this.http.post("/api/pay",{amount:e,recipient:t})},e.prototype.delete=function(e){return this.http.delete("/users/${id}")},e=n([o.Injectable({providedIn:"root"}),i("design:paramtypes",[a.HttpClient])],e)}();t.TransactionService=s},230:function(e,t){e.exports='<h1>Hi {{currentUser.name}}!</h1>\n<h3>Transaction history:</h3>\n<table class="table">\n    <thead>\n      <tr>\n        <th scope="col">#</th>\n        <th scope="col">Type</th>\n        <th scope="col">Sender</th>\n        <th scope="col">Recipient</th>\n        <th scope="col">Amount</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor="let tr of transactions">\n        <th scope="row">{{tr.id}}</th>\n        <td>{{tr.recipient == currentUser.id?\'Credit\':\'Debit\'}}</td>\n        <td>{{tr.senderEmail}}</td>\n        <td>{{tr.recipientEmail}}</td>\n        <td>{{tr.amount}}</td>\n        \n        <td><a  *ngIf="tr.recipient != currentUser.id" (click)="copyTransaction(tr.recipient, tr.amount)" class="btn btn-link">Copy</a></td>\n      </tr>\n\n    </tbody>\n  </table>'},231:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=r(57),s=r(98),c=r(41),u=r(51),l=function(){function e(e,t,r,n,i){this.formBuilder=e,this.route=t,this.router=r,this.authenticationService=n,this.alertService=i,this.loading=!1,this.submitted=!1,this.authenticationService.currentUserValue&&this.router.navigate(["/"])}return e.prototype.ngOnInit=function(){this.loginForm=this.formBuilder.group({email:["",s.Validators.required],password:["",s.Validators.required]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"},Object.defineProperty(e.prototype,"f",{get:function(){return this.loginForm.controls},enumerable:!0,configurable:!0}),e.prototype.onSubmit=function(){var e=this;this.submitted=!0,this.alertService.clear(),this.loginForm.invalid||(this.loading=!0,this.authenticationService.login(this.f.email.value,this.f.password.value).pipe(c.first()).subscribe((function(t){e.router.navigate([e.returnUrl])}),(function(t){e.alertService.error(t),e.loading=!1})))},e=n([o.Component({template:r(232)}),i("design:paramtypes",[s.FormBuilder,a.ActivatedRoute,a.Router,u.AuthenticationService,u.AlertService])],e)}();t.LoginComponent=l},232:function(e,t){e.exports='<h2>Login</h2>\n<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n    <div class="form-group">\n        <label for="email">E-mail</label>\n        <input type="text" formControlName="email" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.email.errors }" />\n        <div *ngIf="submitted && f.email.errors" class="invalid-feedback">\n            <div *ngIf="f.email.errors.required">E-mail is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="password">Password</label>\n        <input type="password" formControlName="password" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.password.errors }" />\n        <div *ngIf="submitted && f.password.errors" class="invalid-feedback">\n            <div *ngIf="f.password.errors.required">Password is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <button [disabled]="loading" class="btn btn-primary">\n            <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>\n            Login\n        </button>\n        <a routerLink="/register" class="btn btn-link">Register</a>\n    </div>\n</form>'},233:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=r(57),s=r(98),c=r(41),u=r(51),l=function(){function e(e,t,r,n,i){this.formBuilder=e,this.router=t,this.authenticationService=r,this.userService=n,this.alertService=i,this.loading=!1,this.submitted=!1,this.authenticationService.currentUserValue&&this.router.navigate(["/"])}return e.prototype.ngOnInit=function(){this.registerForm=this.formBuilder.group({name:["",s.Validators.required],email:["",s.Validators.required],password:["",[s.Validators.required,s.Validators.minLength(6)]]})},Object.defineProperty(e.prototype,"f",{get:function(){return this.registerForm.controls},enumerable:!0,configurable:!0}),e.prototype.onSubmit=function(){var e=this;this.submitted=!0,this.alertService.clear(),this.registerForm.invalid||(this.loading=!0,this.userService.register(this.registerForm.value).pipe(c.first()).subscribe((function(t){e.alertService.success("Registration successful",!0),e.router.navigate(["/login"])}),(function(t){e.alertService.error(t),e.loading=!1})))},e=n([o.Component({template:r(234)}),i("design:paramtypes",[s.FormBuilder,a.Router,u.AuthenticationService,u.UserService,u.AlertService])],e)}();t.RegisterComponent=l},234:function(e,t){e.exports='<h2>Register</h2>\n<form [formGroup]="registerForm" (ngSubmit)="onSubmit()">\n    <div class="form-group">\n        <label for="name">Name</label>\n        <input type="text" formControlName="name" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.name.errors }" />\n        <div *ngIf="submitted && f.name.errors" class="invalid-feedback">\n            <div *ngIf="f.name.errors.required">Name is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="email">E-mail</label>\n        <input type="text" formControlName="email" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.email.errors }" />\n        <div *ngIf="submitted && f.email.errors" class="invalid-feedback">\n            <div *ngIf="f.email.errors.required">E-mail is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="password">Password</label>\n        <input type="password" formControlName="password" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.password.errors }" />\n        <div *ngIf="submitted && f.password.errors" class="invalid-feedback">\n            <div *ngIf="f.password.errors.required">Password is required</div>\n            <div *ngIf="f.password.errors.minlength">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <button [disabled]="loading" class="btn btn-primary">\n            <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>\n            Register\n        </button>\n        <a routerLink="/login" class="btn btn-link">Cancel</a>\n    </div>\n</form>\n'},235:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=r(41),s=r(98),c=r(51),u=r(57),l=function(){function e(e,t,r,n,i,o,a){this.authenticationService=e,this.userService=t,this.transactionService=r,this.formBuilder=n,this.route=i,this.router=o,this.alertService=a,this.users=[],this.recipients=[],this.currentUser=this.authenticationService.currentUserValue}return e.prototype.ngOnInit=function(){var e=this,t=this.route.snapshot.queryParams.r||"",r=this.route.snapshot.queryParams.a||"";this.transactionForm=this.formBuilder.group({recipient:[t,s.Validators.required],amount:[r,[s.Validators.required,s.Validators.max(this.currentUser.balance),s.Validators.min(0)]]}),this.userService.getAll().pipe(a.first()).subscribe((function(t){return e.recipients=t}))},Object.defineProperty(e.prototype,"f",{get:function(){return this.transactionForm.controls},enumerable:!0,configurable:!0}),e.prototype._filter=function(e){var t=e.toLowerCase();return this.recipients.filter((function(e){return e.toLowerCase().includes(t)}))},e.prototype.onSubmit=function(){var e=this;this.alertService.clear(),console.log(this.transactionForm),this.transactionForm.invalid||this.transactionService.pay(this.f.amount.value,this.f.recipient.value).pipe(a.first()).subscribe((function(t){e.alertService.success("Transfer successful",!0)}),(function(t){e.alertService.error(t)}))},e=n([o.Component({template:r(236)}),i("design:paramtypes",[c.AuthenticationService,c.UserService,c.TransactionService,s.FormBuilder,u.ActivatedRoute,u.Router,c.AlertService])],e)}();t.TransactionComponent=l},236:function(e,t){e.exports='<h2>Register</h2>\n<form [formGroup]="transactionForm" (ngSubmit)="onSubmit()">\n    <div class="form-group">\n        <label for="recipient">Recipient</label>\n        <input type="text" formControlName="recipient" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.recipient.errors }" />\n        <div *ngIf="submitted && f.recipient.errors" class="invalid-feedback">\n            <div *ngIf="f.recipient.errors.required">Recipient is required</div>\n        </div>\n    </div>\n\n    <div class="form-group">\n        <label for="amount">Amount</label>\n        <input type="amount" formControlName="amount" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.amount.errors }" />\n        <div *ngIf="submitted && f.amount.errors" class="invalid-feedback">\n            <div *ngIf="f.amount.errors.required">Amount is required</div>\n            <div *ngIf="f.amount.errors.max">Amount can\'t be greater than your balance</div>\n            <div *ngIf="f.amount.errors.required">Amount should be greater than 0</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <button [disabled]="loading" class="btn btn-primary">\n            <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>\n            Transfer money\n        </button>\n    </div>\n</form>'},237:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=r(57),s=r(51),c=function(){function e(e,t){this.router=e,this.authenticationService=t}return e.prototype.canActivate=function(e,t){return!!this.authenticationService.currentUserValue||(this.router.navigate(["/login"],{queryParams:{returnUrl:t.url}}),!1)},e=n([o.Injectable({providedIn:"root"}),i("design:paramtypes",[a.Router,s.AuthenticationService])],e)}();t.AuthGuard=c},238:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=r(66),s=r(41),c=r(51),u=function(){function e(e){this.authenticationService=e}return e.prototype.intercept=function(e,t){var r=this;return t.handle(e).pipe(s.catchError((function(e){401===e.status&&(r.authenticationService.logout(),location.reload(!0));var t=e.error.message||e.statusText;return a.throwError(t)})))},e=n([o.Injectable(),i("design:paramtypes",[c.AuthenticationService])],e)}();t.ErrorInterceptor=u},239:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=r(51),s=function(){function e(e){this.authenticationService=e}return e.prototype.intercept=function(e,t){var r=this.authenticationService.currentUserValue;return r&&r.token&&(e=e.clone({setHeaders:{Authorization:"Bearer "+r.token}})),t.handle(e)},e=n([o.Injectable(),i("design:paramtypes",[a.AuthenticationService])],e)}();t.JwtInterceptor=s},240:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=r(57),s=r(51);r(241);var c=r(246),u=function(){function e(e,t,r){var n=this;this.router=e,this.authenticationService=t,this.userService=r,this.authenticationService.currentUser.subscribe((function(e){return n.currentUser=e})),this.userService.getBalance().pipe(c.first()).subscribe((function(e){return n.currentUser.balance=e}))}return e.prototype.logout=function(){this.authenticationService.logout(),this.router.navigate(["/login"])},e=n([o.Component({selector:"app",template:r(264)}),i("design:paramtypes",[a.Router,s.AuthenticationService,s.UserService])],e)}();t.AppComponent=u},241:function(e,t,r){var n=r(242);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(244)(n,i);n.locals&&(e.exports=n.locals)},242:function(e,t,r){(e.exports=r(243)(!1)).push([e.i,"a {\n  cursor: pointer;\n}\n",""])},264:function(e,t){e.exports='\x3c!-- nav --\x3e\n<nav class="navbar navbar-expand navbar-dark bg-dark" *ngIf="currentUser">\n    <div class="navbar-nav">\n        <a class="nav-item nav-link" routerLink="/">Home</a>\n        <a class="nav-item nav-link" routerLink="/transaction">Send Money</a>\n        <span class="navbar-text">\n            {{currentUser.name}}: {{currentUser.balance}} PW\n        </span>\n        <a class="nav-item nav-link" (click)="logout()">Logout</a>\n\n    </div> \n\n    \n</nav>\n\n\x3c!-- main app container --\x3e\n<div class="jumbotron">\n    <div class="container">\n        <div class="row">\n            <div class="col-sm-6 offset-sm-3">\n                <alert></alert>\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n\n'},265:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(266))},266:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=r(51),s=function(){function e(e){this.alertService=e}return e.prototype.ngOnInit=function(){var e=this;this.subscription=this.alertService.getAlert().subscribe((function(t){switch(t&&t.type){case"success":t.cssClass="alert alert-success";break;case"error":t.cssClass="alert alert-danger"}e.message=t}))},e.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},e=n([o.Component({selector:"alert",template:r(267)}),i("design:paramtypes",[a.AlertService])],e)}();t.AlertComponent=s},267:function(e,t){e.exports='<div *ngIf="message" [ngClass]="message.cssClass">{{message.text}}</div>'},51:function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(226)),n(r(227)),n(r(228)),n(r(229))}},[[167,1,2]]]);