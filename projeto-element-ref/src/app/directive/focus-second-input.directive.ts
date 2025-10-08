import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFocusSecondInput]',
  standalone: false
})

export class FocusSecondInputDirective {

    // @HostBinding('style.backgroundColor')
    // bgColor: string = 'blue';

    // @HostBinding('textContent')
    // text: string = 'Sou uma DIV';

}