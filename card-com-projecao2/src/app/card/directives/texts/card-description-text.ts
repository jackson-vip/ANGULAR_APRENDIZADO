import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-description-text, [appCardDescriptionText]', // Seletores múltiplos: elemento e atributo
  standalone: false,
  host: { class: 'ca-c-card__description-text' }, // Aplica classe CSS consistente
})
export class CardDescriptionText {}
