import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTransferComponent } from './review-transfer.component';
import { TestModule } from 'src/test/test.module';

import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TrasactionsService } from 'src/bb-ui/servies/trasactions.service';

declare var $: any;

describe('ReviewTransferComponent', () => {
  let component: ReviewTransferComponent;
  let fixture: ComponentFixture<ReviewTransferComponent>;
  let service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewTransferComponent],
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
    fixture = TestBed.createComponent(ReviewTransferComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TrasactionsService);
    fixture.detectChanges();
  });

  it('--------------Should create----------------', () => {
    expect(component).toBeTruthy();
  });

  it('-------------emitEvent method-----------------', () => {
    spyOn(component.moneySend, 'emit');

    component.emitEvent();

    expect(component.moneySend.emit).toHaveBeenCalledWith(true);

  });


});
