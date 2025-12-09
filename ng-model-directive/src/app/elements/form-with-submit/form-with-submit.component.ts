import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-with-submit',
  templateUrl: './form-with-submit.component.html',
  styleUrl: './form-with-submit.component.scss'
})
export class FormWithSubmitComponent {
  inputText: string = 'Texto inicial';
  textarea: string = 'Minha descrição inicial';
  pais: string = '1';
  radioButton: string = '1';
  condicao: boolean = true;
  
  // Método chamado ao enviar o formulário
  onSubmit(Form: NgForm) {
    console.log('Formulário enviado:', Form.value);

    // Form.value['nome']='Alterando nome via código no onSubmit';
  }

  onReset(Form: NgForm) {
    // Usando o método reset do NgForm não precisa especificar que o botão é do tipo reset no HTML template
    Form.reset(); 
    console.log('Formulário resetado', Form.value);
    console.log(this.inputText);
    console.log(this.textarea);
    console.log(this.pais);
    console.log(this.radioButton);
    console.log(this.condicao);

    setTimeout(() => console.log('Após reset:', Form.value), 1000);
  }
}
