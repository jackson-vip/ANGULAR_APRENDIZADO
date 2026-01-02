import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  
  usersList: any[] = [];

  constructor(
    private readonly _usersService: UsersService
  ) {}

  ngOnInit() {
    // Carrega a lista de usuários ao iniciar o componente
    this.getUsers();
  }

  getUsers() {
    this._usersService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
      console.log('Lista de usuários carregada:', this.usersList);
    });
  }
}
