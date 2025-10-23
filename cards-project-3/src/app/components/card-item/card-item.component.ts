import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent {
  // Decorator @Input para receber valores do componente pai
  @Input({ required: true })
  text: string = '';

  @Input({ required: true })
  value: string = '';
}
