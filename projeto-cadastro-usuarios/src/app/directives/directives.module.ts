import { NgModule } from '@angular/core';
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialsValidatorDirective } from './credentials-validator.directive';
import { PasswordStrengthValidatorDirective } from './password-strength-validator.directive';
import { PasswordsDoNotMatchDirective } from './passwords-do-not-match.directive';

@NgModule({
  declarations: [
    EmailPatternValidatorDirective,
    CredentialsValidatorDirective,
    PasswordStrengthValidatorDirective,
    PasswordsDoNotMatchDirective,
  ],
  imports: [],
  exports: [
    EmailPatternValidatorDirective,
    CredentialsValidatorDirective,
    PasswordStrengthValidatorDirective,
    PasswordsDoNotMatchDirective,
  ],
})
export class DirectivesModule {}
