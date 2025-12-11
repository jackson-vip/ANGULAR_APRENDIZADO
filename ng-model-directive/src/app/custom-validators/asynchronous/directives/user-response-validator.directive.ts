import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
import { UsesService } from '../service/uses.service';

@Directive({
  selector: '[appUserResponseValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => UserResponseValidatorDirective),
    multi: true
  }]
})
export class UserResponseValidatorDirective  implements AsyncValidator {

  /** O Método construtor é utilizado para injetar dependências. 
   *  Injeção do serviço UsesService para acessar os dados dos usuários.
  */
  constructor(
    private readonly _usesService: UsesService
  ) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    /** Se o campo input não tiver sido modificado, retorna null (sem erros de validação). 
     * Isso evita chamadas desnecessárias ao serviço quando o campo não foi alterado.
    */
    if(!control.dirty) {
      return of(null);
    }
    
    /** O Método .pipe() é utilizado para transformar o Observable retornado pelo serviço em um 
     * formato adequado para validação.E só funciona se o serviço retornar um Observable. */
    return this._usesService.getUses().pipe(
      
      delay(3000), // Simula um atraso na resposta para fins de demonstração.
      
      // Verificar se o valor do controle existe na lista de usuários
      map((users) => {
        // O método some() verifica se algum usuário na lista tem o nome igual ao valor do controle.
        // Poderiamos também usar o find() para procurar o usuário, mas o some() é mais direto para essa verificação. O método find() retornaria o objeto do usuário, enquanto o some() retorna um booleano.
        const userExists = users.some(user => user.name === control.value);
        return userExists ? null : { userNotFound: true };
      })
    );
  }
}
