import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUserResponse } from '../../interfaces/user/user-response.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-com-objeto',
  templateUrl: './obs-com-objeto.component.html',
  styleUrl: './obs-com-objeto.component.scss'
})
export class ObsComObjetoComponent implements OnInit, OnDestroy {

  user: IUserResponse = {} as IUserResponse;
  userSubscription: Subscription | undefined;

  constructor(
    private readonly _usersService: UsersService
  ) {}

  ngOnInit() {
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
}
