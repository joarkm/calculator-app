import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from "@angular/material/core";

import { CalculatorComponent } from './calculator.component';


@NgModule({
  imports: [
    CommonModule,
    MatRippleModule
  ],
  declarations: [CalculatorComponent],
  exports: [CalculatorComponent],
})
export class CalculatorModule {}
