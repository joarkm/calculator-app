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
    const { key } = event;
    const buttonKeyIndex = this.findKeyIndex(key);
    if (buttonKeyIndex !== -1) {
      this.launchRipple(buttonKeyIndex);
      this.expression += key;
      if (this.isNumeric(key)) {
        try {
          this.evaluatedValue = eval(this.expression);
        } catch {}
      }
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
    /,|\./,
    /=/,
  ];

  public expression = '';
  public evaluatedValue: number | undefined;

  constructor() {}

  ngOnInit() {
  }

  private isNumeric(key: string): boolean {
    return /[\d]/.test(key);
  }

  private launchRipple(index: number): void {
    this.ripples.find((_,idx) => index === idx)?.launch({ centered: true });
  }

  private findKeyIndex(key: string): number {
    return this.buttonKeyRegexes.findIndex(buttonKeyRegex => buttonKeyRegex.test(key));
  }
}
