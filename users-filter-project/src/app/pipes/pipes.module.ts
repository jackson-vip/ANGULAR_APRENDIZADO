import { NgModule } from '@angular/core';

import { PhoneNumberPipe } from './phone-number.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';

@NgModule({
  declarations: [
    // Declara todos os pipes que fazem parte deste módulo
    PhoneNumberPipe,
    AddressPipe,
    StatusPipe,
    // Adicione outros pipes aqui conforme for criando
    // ExamplePipe,
    // CurrencyBrazilPipe,
    // etc...
  ],
  imports: [
    // Adicione aqui qualquer módulo que seus pipes precisem
    // Por exemplo: CommonModule se usar pipes do Angular
  ],
  exports: [
    // Exporta todos os pipes para que possam ser usados em outros módulos
    PhoneNumberPipe,
    AddressPipe,
    StatusPipe,
    // Adicione outros pipes aqui conforme for criando
    // ExamplePipe,
    // CurrencyBrazilPipe,
    // etc...
  ]
})
export class PipesModule {
  /**
   * Módulo responsável por centralizar todos os pipes customizados da aplicação.
   * 
   * Para usar este módulo:
   * 1. Importe PipesModule no seu módulo desejado (ex: ComponentsModule)
   * 2. Adicione PipesModule no array 'imports' do seu módulo
   * 3. Os pipes estarão disponíveis em todos os componentes daquele módulo
   * 
   * Exemplo de uso:
   * @NgModule({
   *   imports: [PipesModule], // <- Adicione aqui
   *   // ...
   * })
   */
}