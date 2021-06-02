import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgAutonumericModule } from '@angularfy/ng-autonumeric';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgAutonumericModule,

    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    NgAutonumericModule,

    ReactiveFormsModule
  ]
})
export class SharedModule { }
