import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticOperationsService {

  divide(number1: number, number2: number): string {
    return (number1 / number2).toString();
  }

  multiply(number1: number, number2: number): string {
    return (number1 * number2).toString();
  }

  addToArray(array: Array<string>, value: string): Array<string> {
    let operations = new Array<string>();
    operations = array;
    operations.reverse();
    operations.push(value);
    operations.reverse();
    return operations;
  }

  constructor() { }
}
