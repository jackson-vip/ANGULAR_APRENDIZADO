import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordsDoNotMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordsDoNotMatchDirective,
      multi: true
    }
  ]
})
export class PasswordsDoNotMatchDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    
    if (!control.value) return null;

    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) return null;

    // Limpa os erros anteriores para evitar sobrescrever erros não relacionados
    confirmPassword.setErrors(null);

    // Se passwords não forem iguais, define o erro
    if (password.value !== confirmPassword.value) { 
      // Define o erro no controle de confirmação de senha -> (passwordConfirmControl)
      confirmPassword.setErrors({ 'passwordsDoNotMatch': true }); 
      return { 'passwordsDoNotMatch': true }; // Retorna o erro para o validador pai(formulário) -> (appPasswordsDoNotMatch)
    }

    return null; // Senhas coincidem, retorna null
  }
}
