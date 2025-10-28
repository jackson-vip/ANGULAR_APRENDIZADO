import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pessoa = {
    nome: 'Jhon',
    idade: 26
  };

  user = {
    nome: 'Jhonatan',
    idade: 30,
    status: 1,
  };
}
