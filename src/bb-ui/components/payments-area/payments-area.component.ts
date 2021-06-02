import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Beneficiary } from 'src/shared/models/beneficiary';
import { Transaction } from 'src/bb-ui/models/transaction.model';


@Component({
  selector: 'app-payments-area',
  templateUrl: './payments-area.component.html',
  styleUrls: ['./payments-area.component.scss']
})
export class PaymentsAreaComponent implements OnInit {

  beneficiaryDetails: Beneficiary = null;

  addedTransaction: Transaction;

  constructor() { }

  ngOnInit() {
  }

  showReviewPage(beneficiaryData: Beneficiary) {
    console.log(beneficiaryData);

    this.beneficiaryDetails = beneficiaryData;
  }

  sendMoney(isSend: boolean = false) {

    if (isSend) {
      const transaction = new Transaction();

      transaction.dates = { valueDate: new Date().getTime() };
      transaction.transaction = {
        amountCurrency: {
          amount: this.beneficiaryDetails.amount,
          currencyCode: 'EUR'
        }
      };

      transaction.transaction.creditDebitIndicator = 'DBT';
      transaction.transaction.type = 'Card Payment';

      transaction.merchant = { name: this.beneficiaryDetails.name, accountNumber: '' };

      this.addedTransaction = transaction;
    }
  }

}
