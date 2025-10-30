import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUserResponse } from '../../interfaces/user/user-response.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-com-objeto',
  templateUrl: './obs-com-objeto.component.html',
  styleUrl: './obs-com-objeto.component.scss'
})
export class ObsComObjetoComponent implements OnInit, OnDestroy {

  /** Boa pratica: 
   * 1. Criar as PROPRIEDADES do componente
   * 2. Criar o CONSTRUTOR
   * 3. Criar os MÉTODOS do ciclo de vida (ngOnInit, ngOnDestroy, etc)
   * 4. Criar os MÉTODOS customizados do componente
   */


  user: IUserResponse = {} as IUserResponse;
  userSubscription: Subscription | undefined;
  
  /** Uma boa pratica ao criar um variável do tipo Observable é utilizar o sinal $ ao final do nome
   * Exemplo: user$
   * Isso ajuda a identificar rapidamente que a variável é um Observable
   */
  user$!: Observable<IUserResponse>;

  constructor(
    private readonly _usersService: UsersService
  ) {}

  ngOnInit() {
    // Usando Async Pipe
    this.user$ = this._usersService.getUserById(2);

    this._usersService.getUserById(1).subscribe(userResponse => {
      // console.log(userResponse);
      this.user = userResponse;
    });
  }

  ngOnDestroy() {
    // Limpeza de recursos, se necessário
    // Se houver alguma assinatura, cancele-a
    this.userSubscription && this.userSubscription?.unsubscribe();
  }

  onBtnClick( userId: number) {
    this.user$ = this._usersService.getUserById(userId);
  }

}
