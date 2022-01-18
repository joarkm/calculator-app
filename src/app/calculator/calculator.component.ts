import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  @HostListener('keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    alert(event.key);
    if (event.key === '1') {
      console.log('1 pressed');
    }
  }

  public buttonKeys = [
    '÷',
    '7',
    '8',
    '9',
    '×',
    '4',
    '5',
    '6',
    '−',
    '1',
    '2',
    '3',
    '+',
    '0',
    ',',
    '=',
  ];

  constructor(private element: ElementRef) {}

  ngOnInit() {
    fromEvent(this.element.nativeElement, 'keydown').subscribe((e) => alert(e));
  }
}
