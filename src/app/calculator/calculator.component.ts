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
      this.onSupportedButtonKey(key);
    }
  }

  public buttonKeys = [
    { label: '÷', value: '/' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '×', value: '*' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '−', value: '-' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '+', value: '+' },
    { label: '0', value: '0' },
    { label: ',', value: '.' },
    { label: '=', value: '=' },
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

  public onButtonPressed(buttonKey: string): void {
    this.onSupportedButtonKey(buttonKey);
  }

  private onSupportedButtonKey(buttonKey: string): void {
    if (buttonKey !== '=') {
      this.expression += buttonKey;
    }
    if (this.isNumeric(buttonKey) || buttonKey === '=') {
      try {
        this.evaluatedValue = eval(this.expression);
      } catch {}
    }
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
