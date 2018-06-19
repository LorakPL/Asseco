import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  result: string = '0';
  operationResult: number = 0;
  error: string = 'Error';
  hide: number = 0;
  operations = new Array<string>();

  constructor() { }

  ngOnInit() {
  }

  addToScreen(value: string) {
    if(this.result.includes('=') || this.result === '0') {
      this.result = value;
    } else {
      this.result += value;
    }
  }

  addOperator(value: string) {
    if(!(this.result.includes('/') || this.result.includes('*'))) {
      this.result += ' ' + value + ' ';
    }
  }

  showResult() {
    if(!this.result.includes('=')) {
      let parts;
      if(this.result.includes('/')) {
        parts = this.result.split(' / ');
        if(parts.length > 1) {
          if(parts[1] === '0') {
            this.result += ' = ' + this.error;
          } else if(!(parts[1] === '')) {
            this.operationResult = Number(parts[0]) / Number(parts[1]);
            this.result += ' = ' + this.operationResult.toString();
            this.addToArray();
          }
        }
      } else if(this.result.includes('*')) {
        parts = this.result.split(' * ');
        if(!(parts[1] === '')) {
          this.operationResult = Number(parts[0]) * Number(parts[1]);
          this.result += ' = ' + this.operationResult.toString();
          this.addToArray();
        }
      }
    }
  }

  clear() {
    this.result = '0';
  }

  showDiv() {
    this.hide = 1;
  }

  hideDiv() {
    this.hide = 0;
    this.operations = [];
  }

  addToArray() {
    this.operations.reverse();
    this.operations.push(this.result.toString());
    this.operations.reverse();
  }

  buttonState() {
    if(this.hide === 0) {
      return false;
    } else {
      return true;
    }
  }

}
