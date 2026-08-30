import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-com-group',
  standalone: false,
  templateUrl: './form-array-com-group.html',
  styleUrl: './form-array-com-group.scss',
})
export class FormArrayComGroup {
  musicasForm = new FormGroup({
    musicas: new FormArray([ this.criarMusicaFormGroup() ])
  });

  constructor() {
    console.log(this.musicasForm);
    console.log(this.musicas.valueChanges.subscribe((value) => console.log('Value Changes:', value)));
  }

  // Getter para o FormArray de músicas:
  get musicas(): FormArray {
    return this.musicasForm.get('musicas') as FormArray;
  }

  adicionar() {
    this.musicas.push(
      this.criarMusicaFormGroup()
    );
  }

  remover(musicaIndex: number) {
    this.musicas.removeAt(musicaIndex);
  }

  private criarMusicaFormGroup(): FormGroup {
    return new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      artista: new FormControl('', [Validators.required])
    });
  }
}
