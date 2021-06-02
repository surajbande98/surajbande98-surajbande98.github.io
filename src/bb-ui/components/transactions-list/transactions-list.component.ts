import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transaction } from 'src/bb-ui/models/transaction.model';
import { TrasactionsService } from 'src/bb-ui/servies/trasactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit, OnChanges {

  @Input() newTransaction: Transaction;

  transactions: Array<Transaction> = [];

  tempTransactions: Array<Transaction> = [];

  searchStr: string = '';

  constructor(private trasactionService: TrasactionsService) { }

  ngOnInit() {
    this.getTransactions();
  }

  ngOnChanges() {
    console.log('changes', this.newTransaction);

    if (this.newTransaction) {
      this.transactions = [this.newTransaction].concat(this.transactions);
      this.tempTransactions = [...this.transactions];

      sessionStorage.setItem('TRANSACTIONS', JSON.stringify(this.tempTransactions));
    }
  }

  getTransactions() {
    this.trasactionService.getTransactions()
      .subscribe((res: Transaction[]) => {
        this.transactions = [...res];
        this.tempTransactions = [...res];

        this.tempTransactions = this.transactions.sort((transA: Transaction, transB: Transaction) => {
          return transB.dates.valueDate - transA.dates.valueDate;
        });

        sessionStorage.setItem('TRANSACTIONS', JSON.stringify(this.tempTransactions));
      });
  }

  filterTransactions(filterStr: any = '') {
    this.searchStr = filterStr;

    if (this.searchStr && this.searchStr.trim()) {
      this.tempTransactions = Object.assign([], this.transactions).filter(item =>
        item.merchant.name.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1
      );
    } else {
      this.tempTransactions = [...this.transactions];
    }

  }

}
