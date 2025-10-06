import { Directive, Host, HostBinding } from '@angular/core';

@Directive({
    selector: '[appStyle]',
    standalone: false
})

export class StyleDirective {
    // Aplica estilos CSS diretamente ao elemento host
    // 1. Caso de uso usando attr.style e uma string com os estilos
    
    // @HostBinding('attr.style') 
    // elementStyle = 'color: darkblue; font-weight: bold; font-size: 20px; background-color: lightgreen; padding: 5px; border-radius: 5px;';

    // 2. Caso de uso usando propriedades específicas do CSS
    // @HostBinding('style') 
    // propStyle = 'color: darkgreen; font-weight: bold; font-size: 20px; background-color: lightgreen; padding: 5px; border-radius: 5px;';

    // 3. Caso de uso usando propriedades específicas do CSS
    // @HostBinding('style.color') textColor = 'darkblue';
    // @HostBinding('style.fontWeight') fontWeight = 'bold';
    // @HostBinding('style.fontSize') fontSize = '20px';
    // @HostBinding('style.backgroundColor') backgroundColor = 'lightgreen';
    // @HostBinding('style.padding') padding = '5px';
    // @HostBinding('style.borderRadius') borderRadius = '5px';

    // 4. Caso de uso usando propriedades através de um objeto
    @HostBinding('style') elementStyle = {
        color: 'darkgreen',
        fontWeight: 'bold',
        fontSize: '20px',
        backgroundColor: 'yellowgreen',
        padding: '5px',
        borderRadius: '5px'
    };
}