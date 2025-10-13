import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-subtitle , [appCardTextSubtitle]', // Seletor como elemento HTML ou atributo
  standalone: false,
  host: { class: 'ca-u-card-text-subtitle' }, // Aplica a classe CSS ao elemento host
})
export class CardTextSubtitleDirective {}
