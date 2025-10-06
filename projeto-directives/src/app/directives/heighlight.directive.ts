import { Directive } from "@angular/core";
import { HostListener, HostBinding } from "@angular/core"; 

@Directive({
  selector: '[appHighlight]',
  standalone: false
})

export class HighlightDirective {


    /** Vamos estudar @HostListener e @HostBinding
     * 
     * @HostListener: Escuta eventos do host (elemento onde a diretiva é aplicada)
     * 
     * @HostBinding: Liga uma propriedade do host a uma propriedade da diretiva
     * 
     * Exemplo: Vamos mudar a cor de fundo do parágrafo quando o mouse passar por cima
     * 
     * 1. Importar HostListener e HostBinding
     * 2. Criar um método para o evento mouseover e outro para mouseout
     * 3. Usar @HostBinding para ligar a propriedade style.backgroundColor do host a uma propriedade da diretiva
     * 4. No método mouseover, mudar a cor de fundo
     * 5. No método mouseout, voltar a cor de fundo ao normal
     * 
     * */

    // Alternativa simples mudando o estilo diretamente
    // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
    
    // @HostListener('mouseover') onMouseOver() {
    //     this.backgroundColor = 'yellow';
    // }

    // @HostListener('mouseout') onMouseOut() {
    //     this.backgroundColor = 'transparent';
    // }

    // Alternativa usando classList para adicionar/remover uma classe CSS
    // Exemplo 1 :
    // @HostBinding('class.hover') isHovering = false;
    // @HostListener('mouseover') onMouseOver() {
    //     this.isHovering = true;
    // }
    
    // @HostListener('mouseout') onMouseOut() {
    //     this.isHovering = false;
    // }
    // Exemplo 2 :
    @HostListener('mouseover', ['$event']) onMouseOver(event: MouseEvent) {
        const target = event!.target as HTMLElement;
        target.classList.add('hover');
    }

    @HostListener('mouseout', ['$event']) onMouseOut(event: MouseEvent) {
        const target = event!.target as HTMLElement;
        target.classList.remove('hover');
    }
}