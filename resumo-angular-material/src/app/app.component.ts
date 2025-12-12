import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nome: string = 'Angular Material';

  inputChange( nome: string ) {
    console.log( nome );
  }
}
