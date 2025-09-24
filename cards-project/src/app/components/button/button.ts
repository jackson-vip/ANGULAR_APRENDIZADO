import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  // Aqui vamos Declarar os Inputs do Componente Button
  // Os @Inputs são usados para passar dados de um componente pai para um componente filho.
  @Input({ alias: 'text', required: true })
  buttonText: string = '';

  @Input({ alias: 'style', required: true })
  buttonStyle: 'white' | 'purple' = 'white';

  @Input({ alias: 'disabled' })
  isDisabled: boolean = false;

  // Aqui vamos Declarar os Outputs do Componente Button
  // Os @Outputs são usados para emitir eventos de um componente filho para um componente pai.
  @Output('clicked') buttonClick = new EventEmitter<void>();

  // Criação dos Métodos do Componente Button
  onClicked() {
    this.buttonClick.emit();
  }
}
