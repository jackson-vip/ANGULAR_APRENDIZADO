import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-avatar-large', // Seletor como elemento HTML
  standalone: false,
  host: { class: 'ca-u-card-avatar-large' }, // Aplica a classe CSS ao elemento host
})
export class CardAvatarLarge {}
