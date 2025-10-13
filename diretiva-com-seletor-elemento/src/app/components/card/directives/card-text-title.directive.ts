import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-title, [appCardTextTitle]', // Seletor como elemento HTML ou atributo
  standalone: false,
  host: { class: 'ca-u-card-text-title' }, // Aplica a classe CSS ao elemento host
})
export class CardTextTitleDirective {}
