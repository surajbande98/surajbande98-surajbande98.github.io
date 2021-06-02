import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { TransferMoneyFormComponent } from './components/transfer-money-form/transfer-money-form.component';
import { PaymentsAreaComponent } from './components/payments-area/payments-area.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';

import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared/shared.module';
import { ReviewTransferComponent } from './components/review-transfer/review-transfer.component';
import { TrasactionsService } from './servies/trasactions.service';

const COMPONENTS = [
  FooterComponent,
  LogoComponent,
  SubmitButtonComponent,
  FilterComponent,
  TransactionItemComponent,

  TransferMoneyFormComponent,
  PaymentsAreaComponent,
  ReviewTransferComponent,
  TransactionsListComponent
];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: COMPONENTS,
  providers: [TrasactionsService],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class BbUIModule { }
