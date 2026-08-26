import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: false,
  templateUrl: './form-group.html',
  styleUrl: './form-group.scss',
})
export class FormGroupComponent {
  pesquisa = new FormControl('');


  // Criando um FormGroup com dois FormControls: nome e idade
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() {
    console.log('Constructor object:', this.pessoaForm.get('nome'))
  }

  /** Getter para acessar o FormControl do FormGroup. Essa prática ajuda a acessar 
   *  o FormControl diretamente no template, sem precisar usar o método get() toda vez. 
  */
  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }
  get email(): FormControl {
    return this.pessoaForm.get('email') as FormControl;
  }

  onSubmit() {
    if (this.pessoaForm.valid){
      console.log('Formulário enviado:', this.pessoaForm);
      console.log('Formulário válido:', this.pessoaForm.value);      
    }
  }
}
