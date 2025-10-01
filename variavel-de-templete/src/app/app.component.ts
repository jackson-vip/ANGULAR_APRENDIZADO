import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'variavel-de-templete';
  inputValue: string = '';

  constructor( private _cdRef: ChangeDetectorRef ){}

  changeDetection() {
    this._cdRef.detectChanges();
  }

  // Exemplo 4 - Acessando valor do input via variável de template
  clicked( meuInput4: HTMLInputElement ) {
    console.log( meuInput4 );
    console.log( meuInput4.value );
  }
}
