import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsAreaComponent } from './payments-area.component';
import { Beneficiary } from 'src/shared/models/beneficiary';
import { TransferMoneyFormComponent } from '../transfer-money-form/transfer-money-form.component';
import { ReviewTransferComponent } from '../review-transfer/review-transfer.component';
import { TransactionsListComponent } from '../transactions-list/transactions-list.component';
import { TrasactionsService } from 'src/bb-ui/servies/trasactions.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestModule } from 'src/test/test.module';
import { NgAutonumericModule } from '@angularfy/ng-autonumeric';
import { FormBuilder } from '@angular/forms';

describe('PaymentsAreaComponent', () => {
  let component: PaymentsAreaComponent;
  let fixture: ComponentFixture<PaymentsAreaComponent>;
  const formBuilder: FormBuilder = new FormBuilder();


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsAreaComponent,
      TransferMoneyFormComponent,
      ReviewTransferComponent,
      TransactionsListComponent
      ],
      providers: [
        TrasactionsService,
        { provide: FormBuilder, useValue: formBuilder }
      ],
      imports: [
        TestModule,
        NgAutonumericModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('----------Should create----------------', () => {
    expect(component).toBeTruthy();
  });

  it('----------showReviewPage method----------------', () => {
    const beneficiaryData = {
      name: 'Suraj Bande',
      amount: 100
    };

    component.showReviewPage(beneficiaryData);

    expect(component.beneficiaryDetails).toBe(beneficiaryData);
  });
});
