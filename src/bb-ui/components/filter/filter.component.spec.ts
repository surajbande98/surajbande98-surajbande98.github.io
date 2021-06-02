import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('-------------should create------------------------', () => {
    expect(component).toBeTruthy();
  });

  it('-------------onInputChange - should trigger event -----------------', () => {
    spyOn(component.inputChange, 'emit');

    component.onInputChange('backbase');

    expect(component.inputChange.emit).toHaveBeenCalledWith('backbase');
  });
});
