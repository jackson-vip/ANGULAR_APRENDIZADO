import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-header, [appCardHeader]', // Seletores múltiplos: elemento e atributo
  standalone: false,
  host: { class: 'ca-c-card__header' }, // Aplica classe CSS consistente
})
export class CardHeader {}
