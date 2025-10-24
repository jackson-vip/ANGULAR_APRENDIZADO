import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-header',
  host: {
    class: 'ca-c-card__header',
  },
})
export class AppCardHeaderDirective {
  /**  Primeira Solução usando HostBinding e Input
   * Descomente para usar
  */
  // @Input()
  // @HostBinding('class') color: string = '';
}
