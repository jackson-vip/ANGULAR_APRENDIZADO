import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appInvalidTextValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InvalidTextValidatorDirective,
      multi: true
    }
  ],
})
export class InvalidTextValidatorDirective implements Validator {

  // Implementação do validador personalizado
  validate(control: AbstractControl): ValidationErrors | null {
    // Valida se o valor tem pelo menos 5 caracteres
    const isValid = control.value && control.value.length >= 5;
    return isValid ? null : { 'invalidText': true };
  }

}
