import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMoneyFormComponent } from './transfer-money-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TrasactionsService } from 'src/bb-ui/servies/trasactions.service';
import { TestModule } from 'src/test/test.module';
import { NgAutonumericModule } from '@angularfy/ng-autonumeric';

describe('TransferMoneyFormComponent', () => {
  let component: TransferMoneyFormComponent;
  let fixture: ComponentFixture<TransferMoneyFormComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransferMoneyFormComponent],
      providers: [
        TrasactionsService,
        { provide: FormBuilder, useValue: formBuilder }
      ],
      imports: [
        TestModule,
        ReactiveFormsModule,
        NgAutonumericModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferMoneyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
