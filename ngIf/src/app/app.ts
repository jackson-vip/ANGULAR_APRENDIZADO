import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ngIf';

  num: number = undefined as unknown as number;
  minhaProp: boolean = true;

  toggleProp() {
    this.minhaProp = !this.minhaProp;
  }

  /* Valores verdadeiros */
  isTrufy() {
    return true;
    // return {};
    // return [];
    // return 1;
    // return "false";
    // return "0";
    // return ' ';
  }

  isFalsy() {
    return false;
    // return null;
    // return undefined;
    // return 0;
    // return '';
    // return -0;
    // return NaN;
  }

}
