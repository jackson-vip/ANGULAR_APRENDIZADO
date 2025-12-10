import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDepartmentQuantityValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DepartmentQuantityValidatorDirective,
      multi: true
    }
  ]
})
export class DepartmentQuantityValidatorDirective implements Validator {
  
  
  validate(control: AbstractControl): ValidationErrors | null {
    // console.log('Control', control);
    let value = control.value;
      
    if (value.departamento === 'TI' && value.quantidade > 10) {
      return { 'invelidTIQuantity': true };
    }
    
    if ( value.departamento === 'RH' && value.quantidade > 20) {
      return { 'invelidRHQuantity': true };
    }

    return null;
  }
}
