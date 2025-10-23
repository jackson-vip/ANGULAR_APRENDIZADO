import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-text-description',
  standalone: false,
  host: {
    class: 'ca-u-card-text-description'
  }
})
export class CardTextDescription {

  /** Permite definir a cor do texto via propriedade 'color' no componente 
   * Vamos indender melhor a implementação de @Input e @HostBinding
   * @Input() -> Permite que a propriedade 'color' seja definida externamente, ou seja, quando o componente for utilizado, podemos passar um valor para 'color'
   * @HostBinding('style.color') -> Liga a propriedade 'color' do componente ao estilo CSS 'color' do elemento host (o elemento onde a diretiva é aplicada)
   * Exemplo de uso: <app-card-text-description color="lightgray">sou a descrição do card</app-card-text-description>
   * Nesse exemplo, a cor do texto será definida como 'lightgray' porque estamos passando esse valor para a propriedade 'color' do componente
   * Se nenhum valor for passado, a cor padrão será 'black' conforme definido na inicialização da propriedade
  */
  @Input()
  @HostBinding('style.color')
  color: string = 'black';
}
