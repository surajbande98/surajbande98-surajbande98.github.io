import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Beneficiary } from 'src/shared/models/beneficiary';
import { TrasactionsService } from 'src/bb-ui/servies/trasactions.service';

// This lets me use jquery
declare var $: any;

@Component({
  selector: 'app-review-transfer',
  templateUrl: './review-transfer.component.html',
  styleUrls: ['./review-transfer.component.scss']
})
export class ReviewTransferComponent implements OnChanges {

  @Input() data: Beneficiary = null;

  @Output() moneySend: EventEmitter<boolean> = new EventEmitter(false);

  constructor(private transactionService: TrasactionsService) { }

  ngOnChanges() {
    $('#ReviewTransferModal').modal('show');
  }

  sendMoney() {
    $('#ReviewTransferModal').modal('hide');
    this.transactionService.resetForm();

    this.emitEvent();
  }

  emitEvent() {
    this.moneySend.emit(true);
  }

}
