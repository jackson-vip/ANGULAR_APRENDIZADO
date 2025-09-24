import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  /* No Angular, o decorador @Input() é usado para permitir que um componente filho
   receba dados de seu componente pai. */
  @Input({ alias: 'planType', required: true })
  planType: string = '';

  @Input({ alias: 'planPrice', required: true })
  planPrice: number = 0;

  @Input({ alias: 'colorStyleCard', required: true })
  cardStyle: 'orange' | 'purple' = 'orange';

  /* No Angular, o decorador @Output() é usado para permitir que um componente filho
    emita eventos que podem ser ouvidos por seu componente pai. */
  @Output('clickEmitter') buttonCardClick = new EventEmitter<void>();

  /* Criação dos Métodos do Componente Card
   */
  buttonClicked() {
    this.buttonCardClick.emit();
    // console.log(`O plano ${this.planType} foi adquirido!`);
  }
}
