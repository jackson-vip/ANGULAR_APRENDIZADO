import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-small-img, [appCardSmallImg]', // Seletores múltiplos: elemento e atributo
  standalone: false,
  host: { class: 'ca-c-card__small-img' }, // Aplica classe CSS consistente
})
export class CardSmallImg {}
