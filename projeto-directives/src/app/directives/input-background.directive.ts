import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appInputBackground]',
    standalone: false
})

export class InputBackgroundDirective {

    /**  Passando valores pelo seletor da diretiva no template
     *  Porém, se criarmos um alias diferente do nome da diretiva, precisamos usar o @Input com o nome do alias
     *  Exemplo: @Input('nomeDoAlias') nomeDaVariavel: tipo = valorPadrao;
     */
    @Input('bgColor') appInputBackground: string = 'white';
    @Input('tColor') textColor: string = 'black';
    
    // Fazendo o binding com o estilo do elemento hospedeiro da diretiva
    @HostBinding('style.backgroundColor') bgColor: string = '';
    @HostBinding('style.color') color: string = '';

    // Escutando eventos do DOM no elemento hospedeiro da diretiva
    @HostListener('focus')
    onFocus(){
        this.bgColor = this.appInputBackground;
        this.color = this.textColor;
    }

    // Escutando o evento de perda de foco (blur)
    @HostListener('blur')
    onBlur() {
        this.bgColor = 'white';
        this.color = 'black';
    }
}