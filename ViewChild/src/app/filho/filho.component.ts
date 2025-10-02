import { Component } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.scss'
})
export class FilhoComponent {

  message: string = "Componente Filho: Olá do Filho!";

  // Método para exibir uma saudação do componente filho no componente pai
  saudacaoDoFilho() {
    alert("Componente Filho: Olá do Filho!");
  }
}
