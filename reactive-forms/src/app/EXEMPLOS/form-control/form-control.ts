import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { invalidTextValidator } from './invalid-text-validator';

@Component({
  selector: 'app-form-control',
  standalone: false,
  templateUrl: './form-control.html',
  styleUrl: './form-control.scss',
})
export class FormControlExample implements OnInit {
  // nome = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(3),
  //   Validators.maxLength(14)
  // ]);

  nome = new FormControl({value: 'Valor Inicial', disabled: true }, {
    updateOn: 'change',
    nonNullable: true, // Impede que o valor seja nulo
    validators: [ // Lista de validadores para o FormControl
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(14),
      invalidTextValidator('teste') // Validador personalizado que verifica se o valor contém o texto "teste"
    ]
  });
  
  ngOnInit(): void {
    console.log('Valor do FormControl nome:', this.nome);
    // this.nome.valueChanges.subscribe((value) => {
    //   console.log('Valor do campo nome:', value);
    // });

    this.nome.valueChanges.subscribe((result) => {console.log('Valor do campo nome:', result)});
    this.nome.statusChanges.subscribe((result) => {console.log('Status do campo nome:', result)});
  }
  
  mostrarStatus() {
    console.log('Status do FormControl nome:', this.nome.status);
  }
  
  alterarValor() {
    this.nome.setValue('Novo Valor');
  }

  inputAlterado() {
    console.log('Input alterado:', this.nome.value);
  }

  habilitar() {
    this.nome.enable();
  }

  desabilitar() {
    this.nome.disable();
  }

  setarValor() {
    this.nome.setValue('Valor Setado');
  }

  resetar() {
    this.nome.reset('Valor Resetado');
  }

  debugConsole() {
    console.log('Valor do FormControl nome:', this.nome);
  }

  setValidators() {
    // Ao chamar o setValidators, ele substitui os validadores 
    // existentes pelos novos validadores fornecidos.
    this.nome.setValidators([]);
    this.nome.setValue('Nu'); // Limpa o valor do FormControl
    this.nome.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(14)]);
    this.nome.updateValueAndValidity(); // Atualiza o estado de validação do FormControl
  }

  addValidators() {
    // Ao chamar o addValidators, ele adiciona os novos validadores 
    // aos validadores existentes, sem substituí-los.
    this.nome.addValidators([Validators.minLength(3), Validators.maxLength(4)]);
    this.nome.updateValueAndValidity(); // Atualiza o estado de validação do FormControl
  }
}
