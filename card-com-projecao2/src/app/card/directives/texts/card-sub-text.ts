import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-sub-text, [appCardSubText]', // Seletores múltiplos: elemento e atributo
  standalone: false,
  host: { class: 'ca-c-card__sub-text' }, // Aplica classe CSS consistente
})
export class CardSubText {}
