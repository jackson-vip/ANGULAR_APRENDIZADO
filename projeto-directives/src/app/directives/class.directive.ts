import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[appClass]',
    standalone: false
})

export class ClassDirective {

    // Aplica classes CSS diretamente ao elemento host
    // 1. Caso de uso usando attr.class e uma string com as classes
    // @HostBinding('attr.class')
    // className = 'meu-text meu-size';

    // 2. Caso de uso usando className e uma string com as classes
    // @HostBinding('className')
    // className = 'meu-text meu-size';

    // 3. Caso de uso usando propriedades específicas do CSS
    // @HostBinding('class.meu-text') isMeuText = true;
    // @HostBinding('class.meu-size') isMeuSize = true;

    // 4. Caso de uso usando propriedades através de um objeto
    @HostBinding('class') 
    className = {
        'meu-text': true,
        'meu-size': true
    };
}