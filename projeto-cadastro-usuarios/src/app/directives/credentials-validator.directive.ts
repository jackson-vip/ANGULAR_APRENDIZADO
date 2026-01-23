import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UsersPlaceHolderService } from '../services/users-placeholder.service';

@Directive({
  selector: '[appCredentialsValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => CredentialsValidatorDirective),
      multi: true,
    },
  ],
})
export class CredentialsValidatorDirective implements AsyncValidator {
  // @Input() é usado para definir uma propriedade que pode receber um valor externo ao componente ou diretiva.
  @Input('appCredentialsValidator') credentialType!: 'username' | 'email';

  constructor(
    private readonly _usersPlaceholderService: UsersPlaceHolderService
  ) {}
  
  validate(control: AbstractControl):
    Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    /** Os Métodos a usados a seguir :
     *  getUsersPlaceholder(): Observable<UsersPlaceholderListResponse> - Este método é chamado para obter a lista de usuários fictícios de um serviço externo.
     *  pipe() - Este método é usado para encadear operadores de transformação em um Observable.
     *  map() - Este operador é usado para transformar os dados emitidos pelo Observable. Neste caso, ele transforma a resposta da lista de usuários em um objeto de erros de validação ou null.
     */
    return this._usersPlaceholderService.getUsersPlaceholder().pipe(
      map(usersListResponse => {
        // O método some() verifica se algum elemento do array satisfaz a condição fornecida
        // O método find() retorna o primeiro elemento do array que satisfaz a condição fornecida e quando não encontra retorna undefined fazendo com que seja necessário verificar se o retorno é diferente de undefined
        const credentialExists = usersListResponse.some(user => {
          if (this.credentialType === 'username') {
            return user.username === control.value.trim();
          } else if (this.credentialType === 'email') {
            return user.email === control.value.trim();
          }
          return false;
        });

        /** Vamos entender passoa a passo o retorno a seguir:
         * Se a credencial existir (credentialExists for true), retornamos um objeto de erro de validação. O nome da propriedade do objeto de erro é construído dinamicamente com base no tipo de credencial (username ou email).
         * A propriedade do objeto de erro é nomeada como 'invalidUsername' ou 'invalidEmail', dependendo do valor de this.credentialType. Isso é feito usando a sintaxe de colchetes para criar uma chave de objeto dinamicamente.
         * O valor associado a essa propriedade é true, indicando que houve um erro de validação.
         * Se a credencial não existir (credentialExists for false), retornamos null, indicando que não há erros de validação e que o valor do controle é válido.
         * Em resumo, este código verifica se a credencial fornecida já existe na lista de usuários e retorna um erro de validação apropriado se existir, ou null se for válida.
         */
        return credentialExists ? { [`invalid${this.credentialType.charAt(0).toUpperCase() + this.credentialType.slice(1)}`]: true } : null;
      }
    ));
  }
}
