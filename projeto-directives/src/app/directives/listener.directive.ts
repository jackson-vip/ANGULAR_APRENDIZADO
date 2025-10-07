import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appListener]',
    standalone: false
})

export class ListenerDirective {

    /** O HostListener escuta eventos do DOM no elemento hospedeiro da diretiva.
     *  Neste exemplo, estamos escutando o evento de clique (click) no elemento que tem a diretiva ListenerDirective aplicada.
     */
    @HostListener('click')
    onClick() {
        console.log('Clicou no elemento com a diretiva ListenerDirective');
    }

    @HostListener('keyup', ['$event'])
    onKeyUp(event: KeyboardEvent) {
        // console.log('Tecla liberada:', event.key);
        const fullText = (event.target as HTMLInputElement).value;
        console.log('Texto completo:', fullText);
    }
}