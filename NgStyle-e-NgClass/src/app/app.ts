import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('NgStyle-e-NgClass');

  fontSize: number = 24;
  textColor: 'blue' | 'red' = 'blue';
  buttonText: 'blue' | 'red' = 'red';
  stylesString: string = 'color: blue; font-size: 24px;';
  stylesObject = {
    'color': this.textColor,
    'font-size.px': this.fontSize
  }

  toggleFontColor() {
    if (this.textColor === 'blue') {
      this.textColor = 'red';
      this.buttonText = 'blue';
    } else {
      this.textColor = 'blue';
      this.buttonText = 'red';
    }
    this.stylesString = `color: ${this.textColor}; font-size: ${this.fontSize}px;`;
    this.stylesObject = {
      'color': this.textColor,
      'font-size.px': this.fontSize
    };
  }

  increaseFontSize() {
    this.fontSize += 4;
    this.stylesString = `color: ${this.textColor}; font-size: ${this.fontSize}px;`;
    this.stylesObject = {
      'color': this.textColor,
      'font-size.px': this.fontSize
    };
  }
}
