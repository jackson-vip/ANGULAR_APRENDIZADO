import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-main-text, [appCardMainText]', // Seletores múltiplos: elemento e atributo
  standalone: false,
  host: { class: 'ca-c-card__main-text' }, // Aplica classe CSS consistente
})
export class CardMainText {}
