import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: false,
  templateUrl: './person.html',
  styleUrl: './person.scss'
})
export class Person {

  // Propriedades que serão recebidas do componente pai (App)
  @Input({ required: true }) personName: string = '';
  @Input({ required: true }) personAge: number = 0;
  @Input({ required: true }) personSelectIndex: number | undefined;
  @Input({ required: true }) isFirst: boolean = false;
  @Input({ required: true }) isLast: boolean = false;
  @Input({ required: true }) isEven: boolean = false; // Even = par
  @Input({ required: true }) isOdd: boolean = false; // Odd = ímpar
  @Input({ required: true }) isSelected: boolean = false;

  // O @Output cria um evento customizado que pode ser escutado pelo componente pai (App)
  // Evento que será emitido ao selecionar uma pessoa
  @Output() onSelectPersonEmit = new EventEmitter<number>();

  // Método que será chamado ao clicar no botão "Selecionar"
  selectPerson() {
    this.onSelectPersonEmit.emit(this.personSelectIndex);
  }
}
