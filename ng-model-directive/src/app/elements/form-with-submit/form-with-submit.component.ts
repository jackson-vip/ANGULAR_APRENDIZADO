import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-with-submit',
  templateUrl: './form-with-submit.component.html',
  styleUrl: './form-with-submit.component.scss'
})
export class FormWithSubmitComponent implements AfterViewInit {
  inputText: string = 'Texto inicial';
  textarea: string = 'Minha descrição inicial';
  pais: string = '1';
  radioButton: string = '1';
  condicao: boolean = true;

  // Acessando o NgForm via ViewChild
  @ViewChild('meuForm') meuForm!: NgForm;

  // Acessando o input via ViewChild
  @ViewChild('meuInput') meuInput!: NgModel;


  // Método do ciclo de vida do Angular chamado após a inicialização da view
  ngAfterViewInit() {
    // Inscrevendo-se para mudanças no valor do formulário
    this.meuForm.valueChanges?.subscribe((valor: string) => {
      console.log('Valor do formulário alterado via ViewChild:', valor);
    });

    // Inscrevendo-se para mudanças no valor do input específico
    this.meuInput.valueChanges?.subscribe((valor: string) => {
      console.log('Valor do input alterado via ViewChild:', valor);
    });
  }
  
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
