import { Directive } from '@angular/core';

@Directive({
  // selector: '[appCardTextTitle]', // Seletor de atributo
  selector: 'app-card-text-title', // Seletor de elemento
  standalone: false,
  host: {
    class: 'ca-u-card-text-title'
  }
})
export class CardTextTitle {}
