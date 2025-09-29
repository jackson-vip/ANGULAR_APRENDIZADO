import { Component } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false  // Explicitamente não standalone
})
export class AppComponent {
  userSelected: IUser = {} as IUser; // Inicializa com um objeto vazio
  showUserDetails: boolean = false; // Controla a exibição do componente de detalhes do usuário


  // Método para atualizar o usuário selecionado
  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true; // Mostra os detalhes do usuário ao selecionar
  }
}
