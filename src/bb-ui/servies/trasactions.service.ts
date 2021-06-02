import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction.model';

import { FETCH_TRANSACTIONS } from '../../test/mocks/transactions.mock';

@Injectable({
  providedIn: 'root'
})
export class TrasactionsService {

  resetTransferMoneyFormSubject: Subject<boolean> = new Subject();

  constructor() { }

  getTransactions(): Observable<Transaction[]> {

    // If in store, get from store
    const storedTransactions = sessionStorage.getItem('TRANSACTIONS') ? JSON.parse(sessionStorage.getItem('TRANSACTIONS')) : null;

    if (storedTransactions) {
      return of(storedTransactions);
    }

    return of({
      FETCH_TRANSACTIONS
    }).pipe(map((res: any) => res.FETCH_TRANSACTIONS));
  }

  resetForm() {
    this.resetTransferMoneyFormSubject.next(true);
  }
}
