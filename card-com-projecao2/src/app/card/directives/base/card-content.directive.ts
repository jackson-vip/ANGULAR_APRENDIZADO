import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-content, [appCardContent]', // Seletores múltiplos: elemento e atributo
  standalone: false,
  host: { class: 'ca-c-card__content' }, // Aplica classe CSS consistente
})
export class CardContent {}
