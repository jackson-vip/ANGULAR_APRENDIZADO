import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Pipes';

  hoje = new Date();
  texto: string = 'angular pipes';
  array = [1, 2, 3, 4, 5];
  jsonPipe = {
    nome: 'Jhon Doe',
    idade: 30,
    ativo: true,
    interesses: ['Angular', 'TypeScript', 'Pipes']
  };

  observableData = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Dados carregados!');
    }, 3000);
  });

  promiseData = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Dados da Promise!');
    }, 2000);
  });

  pessoas = [
    { nome: 'Ana', idade: 28 },
    { nome: 'Bruno', idade: 35 },
    { nome: 'Carla', idade: 22 },
    { nome: 'Daniel', idade: 30 }
  ];

  constructor() {
    console.log(this.pessoas.length);
  }

  pluralMapping = {
    '=0': 'Nenhuma pessoa',
    '=1': 'Uma pessoa',
    'other': '# pessoas'
  };

  genero = 'feminino';

  generoMapping = {
    'masculino': 'Ele',
    'feminino': 'Ela'
  };

  userStatus = [
    {
      status: 1,
      name: 'John Doe'
    },
    {
      status: 2,
      name: 'Jane Smith'
    },
    {
      status: 3,
      name: 'Alice Johnson'
    },
    {
      status: 4,
      name: 'Bob Brown'
    }
  ];
}
