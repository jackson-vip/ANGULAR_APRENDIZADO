import { Component } from '@angular/core';
import { PessoaFormController } from './pessoa-form-controller';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder-externo',
  standalone: false,
  templateUrl: './form-builder-externo.html',
  styleUrl: './form-builder-externo.scss',
})
export class FormBuilderExterno extends PessoaFormController {
  constructor(
    // _fbMain é diferente do _fb usado no PessoaFormController para não causar conflito
    private readonly _fbMain: FormBuilder
  ) {
    super(_fbMain);
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
  }
}
