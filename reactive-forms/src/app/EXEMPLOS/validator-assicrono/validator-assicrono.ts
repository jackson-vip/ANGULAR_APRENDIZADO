import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserValidatorService } from './user-validator.servive';

@Component({
  selector: 'app-validator-assicrono',
  standalone: false,
  templateUrl: './validator-assicrono.html',
  styleUrl: './validator-assicrono.scss',
})
export class ValidatorAssicrono {
  nome: FormControl;

  constructor(private readonly _userValidatorService: UserValidatorService) {
    this.nome = new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ],
      asyncValidators: [this._userValidatorService.validate.bind(this._userValidatorService)],
      updateOn: 'blur',
    });
  }
}
