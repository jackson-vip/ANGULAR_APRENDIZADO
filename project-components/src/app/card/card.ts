import { Component, Input } from '@angular/core';

// Aqui podemos criar uma função fora da classe para ser usada no transform do Input
function handlePlanType(value: string): string {
  console.log('handlePlanType', value);
  
  return value.toUpperCase();
}

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {

  plan = {
    'info': {
      'price': 100,
      'plan': 'Basic',
    }
  }


  // private _planType: string = '';

  // @Input({alias: 'planType', required: true})
  // Setter para modificar o valor privado _planType
  // set planType(value: string) {
  //   this._planType = value.toUpperCase();
  // }

  // Getter para acessar o valor privado _planType
  // get planType(): string {
  //   return this._planType;
  // }


  // Criando propriedades para receber dados do componente pai (App)
  @Input({alias: 'planType', required: true, transform: (value: string) => handlePlanType(value)}) planType: string = '';
  // @Input({alias: 'planType', required: true, transform: (value: string) => value.toUpperCase()}) planType: string = '';
  // Podemos atribuir a obrigatoriedade com "required: true" dentro do decorador @Input
  // Podemos usar o transform para modificar o valor recebido antes de atribuí-lo à propriedade planType

  @Input('planPrice') planPrice: number = 0; // A segunda forma de obrigatoriedade não é suportada em versões mais antigas do Angular


  // Estudando o Output do Angular
  buttonClicked(EventEmitter: boolean) {
    console.log(EventEmitter);
    console.log('planType', this.planType);
  }

}
