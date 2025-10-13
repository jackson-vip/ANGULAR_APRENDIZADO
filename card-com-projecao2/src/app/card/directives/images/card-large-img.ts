import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-large-img, [appCardLargeImg]',
  standalone: false,
  host: { class: 'ca-c-card__large-img' }, // Aplica classe CSS consistente
})
export class CardLargeImg {}
