import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionItemComponent } from './transaction-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestModule } from 'src/test/test.module';
import { NgAutonumericModule } from '@angularfy/ng-autonumeric';
import { TrasactionsService } from 'src/bb-ui/servies/trasactions.service';

describe('TransactionItemComponent', () => {
  let component: TransactionItemComponent;
  let fixture: ComponentFixture<TransactionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionItemComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        TestModule
      ],
      providers: [TrasactionsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
