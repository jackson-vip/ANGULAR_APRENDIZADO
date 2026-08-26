import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: false,
  templateUrl: './form-group.html',
  styleUrl: './form-group.scss',
})
export class FormGroupComponent {
  // Criando um FormGroup com dois FormControls: nome e idade
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    endereco: new FormGroup({
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required])
    })
  }, {
    updateOn: 'change'
  });

  constructor() {
    console.log('Constructor object:', this.pessoaForm.get('nome'))
    
    // Quando realizamos alterações no formulário, o valueChanges emite o novo valor.
    this.pessoaForm.valueChanges.subscribe(value => {
      console.log('Formulário mudou:', value);
    });
    
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
  get rua(): FormControl {
    return (this.pessoaForm.get('endereco')?.get('rua') as FormControl);
  }
  get numero(): FormControl {
    return (this.pessoaForm.get('endereco')?.get('numero') as FormControl);
  }
  
  mostrarValor() {
    console.log('Valor atual do formulário:', this.pessoaForm.value);
  }

  onSubmit() {
    if (this.pessoaForm.valid){
      console.log('Formulário enviado:', this.pessoaForm);
      console.log('Formulário válido:', this.pessoaForm.value);      
    }
  }

  AlterarConteudo() {
    console.log('Método AlterarConteudo chamado');
    // O método setValue substitui todos os valores do formulário pelos fornecidos.
    this.pessoaForm.setValue({
      nome: 'Novo Nome',
      email: 'novoemail@example.com',
      endereco: {
        rua: 'Nova Rua',
        numero: '123'
      }
    });
  }

  AlterarParcial() {
    console.log('Método AlterarParcial chamado');
    // O método patchValue permite alterar apenas alguns valores do formulário, sem substituir todos.
    this.pessoaForm.patchValue({
      nome: 'Nome Parcialmente Alterado',
      endereco: {
        rua: 'Rua Parcialmente Alterada'
      }
    });
  }
}
