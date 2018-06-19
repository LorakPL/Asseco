import { Component, OnInit } from '@angular/core';
import { ArithmeticOperationsService } from '../arithmeticOperations.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  result: string = '0';
  error: string = 'Error';
  hide: number = 0;
  operations = new Array<string>();

  arithmeticOperations = new ArithmeticOperationsService();

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
    } else if(this.result.includes('/')) {
      this.result = this.result.replace('/', value);
    } else if(this.result.includes('*')) {
      this.result = this.result.replace('*', value);
    }
  }

  showResult() {
    if(!this.result.includes('=')) {
      let parts;
      if(this.result.includes('/')) {
        parts = this.result.split(' / ');
        if(parts[1] === '0') {
          this.result += ' = ' + this.error;
          alert("You can't divide by 0");
        } else if(!(parts[1] === '')) {
          this.result += ' = ' + this.arithmeticOperations.divide(Number(parts[0]), Number(parts[1]));
          if(this.hide === 1) {
            this.operations = this.arithmeticOperations.addToArray(this.operations, this.result);
          }
        } else {
          alert("You must specified second number");
        }
      } else if(this.result.includes('*')) {
        parts = this.result.split(' * ');
        if(!(parts[1] === '')) {
          this.result += ' = ' + this.arithmeticOperations.multiply(Number(parts[0]), Number(parts[1]));
          if(this.hide === 1) {
            this.operations = this.arithmeticOperations.addToArray(this.operations, this.result);
          }
        } else {
          alert("You must specified second number");
        }
      }
      else {
        alert("You must specified arithmetic operator");
      }
    } else {
      alert("You should clear display");
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

  buttonState() {
    if(this.hide === 0) {
      return false;
    } else {
      return true;
    }
  }

}
