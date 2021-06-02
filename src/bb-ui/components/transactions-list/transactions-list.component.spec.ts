import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsListComponent } from './transactions-list.component';
import { TestModule } from 'src/test/test.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TrasactionsService } from 'src/bb-ui/servies/trasactions.service';

describe('TransactionsListComponent', () => {
  let component: TransactionsListComponent;
  let service;
  let fixture: ComponentFixture<TransactionsListComponent>;
  let inputElement: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsListComponent],
      imports: [
        TestModule
      ],
      providers: [
        TrasactionsService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsListComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.nativeElement.querySelector('INPUT') as HTMLInputElement;
    service = TestBed.get(TrasactionsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('-------------1.Get transactions:-- method-----------------', () => {
    spyOn(component, 'getTransactions');
    component.getTransactions();
    expect(component.getTransactions).toHaveBeenCalled();
  });

  it('-------------2.filterTransactions by name method-----------------', () => {
    // given
    spyOn(component, 'filterTransactions');

    component.filterTransactions('backbase');

    // then
    expect(component.tempTransactions.length).toEqual(11); // define expected value here
  });
});
