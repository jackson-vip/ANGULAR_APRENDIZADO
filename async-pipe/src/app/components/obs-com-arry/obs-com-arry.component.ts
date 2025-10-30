import { Component, OnInit } from '@angular/core';
import { IUserResponse } from '../../interfaces/user/user-response.interface';
import { Observable, startWith } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-obs-com-arry',
  templateUrl: './obs-com-arry.component.html',
  styleUrl: './obs-com-arry.component.scss'
})
export class ObsComArryComponent implements OnInit {
  users$!: Observable<IUserResponse[]>;
  
  constructor(
    private readonly _usersService: UsersService
  ) {}

  ngOnInit() {
    
    setTimeout(() => {
      // Simulando atraso na obtenção dos dados
      this.users$ = this._usersService.getUsers().pipe(
        startWith([]) // Inicia com array vazio
      );
    }, 9000);
  }
}
