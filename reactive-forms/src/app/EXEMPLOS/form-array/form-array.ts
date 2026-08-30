import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-component',
  standalone: false,
  templateUrl: './form-array.html',
  styleUrl: './form-array.scss',
})
export class FormArrayComponent {
  // Meus Forms Reactivos:
  musicasForm = new FormGroup({
    musicas: new FormArray([
      new FormControl('', [Validators.required])
    ]),
  });

  constructor() {
    console.log(this.musicasForm);
  }

  // Meus Getters a baixo:
  get musicas(): FormArray {
    return this.musicasForm.get('musicas') as FormArray;
  }

  enviarForm() {
    if (this.musicasForm.valid) {
      console.log('Formulário enviado com sucesso!', this.musicasForm.value);
    } else {
      console.log('Formulário inválido!');
    }
  }

  // Meus Métodos a baixo:
  adicionarMusica() {
    this.musicas.push(new FormControl('', [Validators.required]));
  }

  removerMusica(musicaIndex: number) {
    this.musicas.removeAt(musicaIndex);
  }
}
