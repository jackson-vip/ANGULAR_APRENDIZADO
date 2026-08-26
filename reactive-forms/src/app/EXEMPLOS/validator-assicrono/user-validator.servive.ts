import { IUser } from './user.interface';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { UsersService } from './users.services';
import { Injectable } from '@angular/core';

/** O @Injectable ->  É usado para marcar uma classe como disponível para injeção de dependência.
 * Isso significa que a classe pode ser instanciada e gerenciada pelo sistema de injeção de
 * dependência do Angular, permitindo que outras classes ou componentes
 * solicitem uma instância dessa classe quando necessário.
 */
@Injectable({
  providedIn: 'root',
})
export class UserValidatorService implements AsyncValidator {
  constructor(private readonly _usersService: UsersService) {}

  validate(
    control: AbstractControl,
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const inputValue = (control.value ?? '').toString().trim().toLowerCase();

    if (!inputValue) {
      return new Observable<ValidationErrors | null>((observer) => {
        observer.next(null); // Emite um valor nulo, indicando que não há erros de validação.
        observer.complete(); // Completa o Observable, indicando que não haverá mais valores emitidos.
      });
    }

    return this._usersService.getUsers().pipe(
      delay(3000), // Simula um atraso de 3 segundos na resposta do serviço.
      map((usersList: IUser[]) => {
        const hasUser = usersList.some((user) => {
          // const userName = (user.nome ?? user.name ?? '').toString().trim().toLowerCase();
          const userName = (user.name ?? '').toString().trim().toLowerCase();
          return userName === inputValue;
        });
        return hasUser ? { userValidator: true } : null;
      }),
    );
  }
}
