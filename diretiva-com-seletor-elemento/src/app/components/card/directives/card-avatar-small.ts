import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-avatar-small', // Seletor como elemento HTML
  standalone: false,
  host: { class: 'ca-u-card-avatar-small' }, // Aplica a classe CSS ao elemento host
})
export class CardAvatarSmall {}
