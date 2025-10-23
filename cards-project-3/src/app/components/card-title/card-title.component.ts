import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.scss',
})
export class CardTitleComponent {
  // Decorator @Input para receber valores do componente pai
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) icon: string = '';
}
