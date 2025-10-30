import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { IUser } from './interfaces/user.interface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userPromise!: Promise<IUser>;
  userPromise2!: Promise<IUser>;
  userPromise3!: Promise<IUser>;

  // Injetando o serviço de usuários
  constructor(
    private readonly _usersService: UsersService
  ) {}

  ngOnInit() {
    // Atribuindo a Promise retornada pelo serviço à propriedade userPromise
    this.userPromise = this._usersService.getUser();
    
    // Chamando novamente de forma manual após 10 segundos para demonstrar atualização
    this._usersService.getUser().then(user => {
      // Usando Promise.resolve para criar uma nova Promise com dados diferentes
      this.userPromise2 = Promise.resolve({
        id: user.id,
        name: 'Jane Smith',
        username: 'Janey',
        email: 'jane.smith@example.com'
      });
    });
    
    // Usando lastValueFrom para converter Observable em Promise
    this.userPromise3 = lastValueFrom(this._usersService.getUserById(2));
  }
}
