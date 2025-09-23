import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('two-way-data-binding');

  nome: string = 'Jackson2';

  /**
   * Handle input change event
   * @param event - The input event value
   * @returns void
   * O Método que vai lidar com o evento de mudança no input
   * e vai atualizar o valor da propriedade nome
   * convertendo o valor para maiúsculas
   * 
   */
  handleInputChange( event: string ) {
    console.log(event);
    const nameUpcased = event.toUpperCase();
    this.nome = nameUpcased;
  }
}
