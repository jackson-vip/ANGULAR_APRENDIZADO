import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-builder-component',
  standalone: false,
  templateUrl: './form-builder.html',
  styleUrl: './form-builder.scss',
})
export class FormBuilderComponent implements OnInit {
  // A ! indica que a variável será inicializada posteriormente e não é nula.
  // O FormBuilder é usado para criar instâncias de FormGroup, FormControl e FormArray de forma mais concisa.
  // O FormArray é usado para gerenciar um array de FormControls, permitindo adicionar, remover e acessar controles dinamicamente.
  pessoaForm!: FormGroup;

  // O Output é responsável por emitir eventos do componente filho para o componente pai.
  @Output('enviarForm') enviarFormEmit = new EventEmitter<FormGroup>();

  constructor(private _fb: FormBuilder) {
    console.log('Exibe a instância do FormBuilder:', this._fb); // Exibe a instância do FormBuilder no console.
    console.log('Exibe o valor inicial do formulário:', this.pessoaForm?.value);
  }

  ngOnInit() {
    this.pessoaForm = this._fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: this._fb.control('', {
        validators: [Validators.required, Validators.email],
      }),
      endereco: this._fb.group({
        rua: ['', [Validators.required]],
        numero: ['', [Validators.required]],
      }),
      musicas: this._fb.array([
        ['', [Validators.required]],
        this._fb.control('', [Validators.required]),
      ]),
    });

    console.log('Exibe o valor do formulário após a inicialização:', this.pessoaForm.value);
  }

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }

  get email(): FormControl {
    return this.pessoaForm.get('email') as FormControl;
  }

  get endereco(): FormGroup {
    return this.pessoaForm.get('endereco') as FormGroup;
  }

  get rua(): FormControl {
    return this.pessoaForm.get('endereco.rua') as FormControl;
  }

  get numero(): FormControl {
    return this.pessoaForm.get('endereco.numero') as FormControl;
  }

  get musicas(): FormArray {
    return this.pessoaForm.get('musicas') as FormArray;
  }

  enviarForm() {
    console.log('Formulário enviado:', this.pessoaForm.value);
    this.enviarFormEmit.emit(this.pessoaForm.value); // Emite o valor do formulário para o componente pai.
  }
}
