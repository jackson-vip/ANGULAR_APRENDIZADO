import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function invalidTextValidator(invalidText: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        
        // Verifica se o valor do FormControl contém o texto inválido
        const PossuiValueText = control.value && control.value.includes(invalidText);
        
        return PossuiValueText ? { invalidText: 'Possui texto inválido' } : null;
    };
}