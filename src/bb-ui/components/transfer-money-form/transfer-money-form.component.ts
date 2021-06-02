import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Beneficiary } from 'src/shared/models/beneficiary';
import { TrasactionsService } from 'src/bb-ui/servies/trasactions.service';

// This lets me use jquery
declare var $: any;

@Component({
  selector: 'app-transfer-money-form',
  templateUrl: './transfer-money-form.component.html',
  styleUrls: ['./transfer-money-form.component.scss']
})
export class TransferMoneyFormComponent implements OnInit {

  transferForm: FormGroup;

  amountConfig: any = environment.amountConfig;

  isEnoughBalance: boolean = false;

  totalBalance: number = 5824.76;

  minBalance: number = (this.totalBalance - 500);

  @Output() transfterInitiated: EventEmitter<Beneficiary> = new EventEmitter();

  constructor(
    private builder: FormBuilder,
    private transactionService: TrasactionsService
  ) { }

  ngOnInit() {
    this.initialiseForm();

    this.transactionService.resetTransferMoneyFormSubject
      .subscribe((isReset: boolean) => {
        if (isReset) {
          this.getMinBalance();
          this.transferForm.reset();
          this.transferForm.patchValue({
            FromAccount: `My Personal Account: € ${this.totalBalance}`,
            Amount: 0
          });
          this.transferForm.get('Amount').reset();
          this.transferForm.value.Amount = '0.00';
          $('#Amount').val('0.00');
          this.transferForm.get('Amount').setValidators([Validators.required, this.validateAmount(this.minBalance)]);
        }
      });
  }

/*
* This is the getMinBalance function
* @param No
* @returns void
*/
  getMinBalance() {
    this.totalBalance = Number((this.totalBalance - this.transferForm.value.Amount).toFixed(2));
    this.minBalance = this.totalBalance - 500;
  }

  /*
 * This is the initialiseForm function
 * @param No
 * @returns void
*/
  initialiseForm(): void {
    this.transferForm = this.builder.group({
      FromAccount: [`My Personal Account € ${this.totalBalance}`, [Validators.required]],
      ToAccount: ['', [Validators.required]],
      Amount: ['', [Validators.required, this.validateAmount(this.minBalance)]]
    });
  }

  /*
 * factory function to validate the min balance
 * @param No
 * @returns void
*/
  validateAmount(maxBalance: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value && control.value > maxBalance) {
        return { InsufficientBalance: true };
      }
      return null;
    };
  }

  /*
   * This is the checkValidUser function
   * @param No
   * @returns void
   */
  checkValidation(): void | boolean {
    if (!this.transferForm.valid) {
      return this.makeFormDirty();
    }
    this.onSubmit();
  }

  /*
  * This is the makeFormDirty function
  * @param No
  * @returns void
  */
  makeFormDirty(): boolean {
    const controls = Object.keys(this.transferForm.controls).map(control => this.transferForm.controls[control]) as any;

    controls.forEach(control => {
      control.markAsTouched();
      control.markAsDirty();
    });

    return false;
  }

  /*
  * This is the onSubmit function
  * @param No
  * @returns void
  */
  onSubmit() {
    // Show review page
    const beneficiaryData: Beneficiary = {
      name: this.transferForm.value.ToAccount,
      amount: this.transferForm.value.Amount
    };

    // Emit event
    this.transfterInitiated.emit(beneficiaryData);
  }

}
