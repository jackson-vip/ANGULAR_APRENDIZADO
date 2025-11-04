import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent implements AfterViewInit {
// Pegando o NgModel do input
  @ViewChild('meuInputFormControl') inputElFormControl!: NgModel;
  // Pegando o ElementRef diretamente
  @ViewChild('meuInput') inputEl!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    console.log("FormControl ",this.inputElFormControl);
    console.log("ElementRef ",this.inputEl);
  }

  send() {
    // console.log(this.inputElFormControl.value);

    if( this.inputElFormControl.valid && this.inputElFormControl.touched && (this.inputElFormControl.value).length >= 5 ) {
      // lógica para quando o input estiver válido
      console.log('Formulário enviado com sucesso!');
    }
  }
}
