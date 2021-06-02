import { TestBed } from '@angular/core/testing';

import { TrasactionsService } from './trasactions.service';
import { FETCH_TRANSACTIONS } from 'src/test/mocks/transactions.mock';
import { of } from 'rxjs';

describe('TrasactionsService', () => {
  let service: TrasactionsService;

  let storedTransactions = sessionStorage.getItem('TRANSACTIONS') ? JSON.parse(sessionStorage.getItem('TRANSACTIONS')) : null;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(TrasactionsService);
  }
  );

  it('--------should be created--------', () => {
    const Trservice: TrasactionsService = TestBed.get(TrasactionsService);
    expect(Trservice).toBeTruthy();
  });

  it('-------checks getTransactions method-----------', () => {

    if (!storedTransactions) {
      storedTransactions = FETCH_TRANSACTIONS;
    }

    spyOn(service, 'getTransactions').and.returnValue(of(storedTransactions));
    service.getTransactions().subscribe((data) => {
      expect(data.length).toBe(11);

    });
  });
});
