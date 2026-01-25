import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import zxcvbn from 'zxcvbn';

@Directive({
  selector: '[appPasswordStrengthValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthValidatorDirective,
      multi: true
    }
  ]
})
export class PasswordStrengthValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.value;

    // Se o campo estiver vazio, deixa o validador 'required' lidar com isso
    if (!password) return null;
   
    // Avalia a força da senha usando zxcvbn
    const result = zxcvbn(password);

    // Se a senha for fraca (score < 2), retorna erro
    if (result.score < 4) {
      return { invalidPasswordStrength: true };
    }

    return null;
  }

}
