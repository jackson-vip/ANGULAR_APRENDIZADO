import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  standalone: false,
  templateUrl: './card-button.html',
  styleUrl: './card-button.scss'
})
export class CardButton {

  @Input({ transform: booleanAttribute }) buttonDisabled: boolean = false;

  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  // Estudando o Output do Angular
  clickButton() { 
    console.log('Botão clicado!');

    this.buttonClickEmitter.emit(true);
  }
}
