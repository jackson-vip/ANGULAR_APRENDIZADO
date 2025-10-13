import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-text-description, [appCardTextDescription]', // Seletor como elemento HTML ou atributo
  standalone: false,
  host: { class: 'ca-u-card-text-description' }, // Aplica a classe CSS ao elemento host
})
export class CardTextDescriptionDirective {
  @Input()
  @HostBinding('style.color')
  color: string = '';
}
