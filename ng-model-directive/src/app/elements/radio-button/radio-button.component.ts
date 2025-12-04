import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {
  radioSelection: string = '';

  onChange(event: string) {
    console.log(event);
    this.radioSelection = event;
  }    
}
