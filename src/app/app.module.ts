import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator/calculator.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalculatorModule,
    FormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
