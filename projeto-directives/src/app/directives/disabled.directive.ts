import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDisabled]',
    standalone: false
})

export class DisabledDirective {
    
    /** HostBinding é usado para vincular uma propriedade do host (elemento HTML)
     *  neste caso, o atributo 'disabled' do botão.
     */
    // @HostBinding('attr.disabled') 
    // isDisabled = false;


    /** Getter para retornar o valor do atributo 'disabled'
     * Se _isDisabled for true, retorna uma string vazia (o que ativa o atributo)
     * Se _isDisabled for false, retorna null (o que remove o atributo)
     */
    @HostBinding('attr.disabled')
    get propDisabled(): string | null {
        return this._isDisabled ? '' : null;
    }

    // Setter para definir o valor de _isDisabled
    private _isDisabled = false;
}