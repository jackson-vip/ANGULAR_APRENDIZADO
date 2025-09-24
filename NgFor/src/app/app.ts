import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'NgFor';

  personSelectIndex: number | undefined;

  listPeople: Array<{ nome: string; idade: number }> = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 22 },
    { nome: 'Ana', idade: 28 },
  ];
  
  selectPerson( index: number ) {
    console.log(index);
    this.personSelectIndex = index;
  }
}