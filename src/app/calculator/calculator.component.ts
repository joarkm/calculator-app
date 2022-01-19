import { Component, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  @ViewChildren(MatRipple) ripples!: QueryList<MatRipple>;

  @HostListener('window:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const buttonKeyIndex = this.findKeyIndex(event.key);
    if (buttonKeyIndex !== -1) {
      this.launchRipple(buttonKeyIndex);
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

  public buttonKeyRegexes: RegExp[] = [
    /÷|\//,
    /7/,
    /8/,
    /9/,
    /x|\*/,
    /4/,
    /5/,
    /6/,
    /-/,
    /1/,
    /2/,
    /3/,
    /\+/,
    /0/,
    /,/,
    /=/,
  ];

  constructor() {}

  ngOnInit() {
  }

  private launchRipple(index: number): void {
    this.ripples.find((_,idx) => index === idx)?.launch({ centered: true });
  }

  private findKeyIndex(key: string): number {
    return this.buttonKeyRegexes.findIndex(buttonKeyRegex => buttonKeyRegex.test(key));
  }
}
