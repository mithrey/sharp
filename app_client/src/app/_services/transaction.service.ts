import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class TransactionService {
    constructor(private http: HttpClient) { }

    getHistory() {
        return this.http.get('api/history');
    }

    register(user: User) {
        return this.http.post('/api/register', user);
    }

    pay(amount: number, recipient: string) {
        return this.http.post('/api/pay', { amount: amount, recipient: recipient });
    }

    delete(id: number) {
        return this.http.delete('/users/${id}');
    }
}