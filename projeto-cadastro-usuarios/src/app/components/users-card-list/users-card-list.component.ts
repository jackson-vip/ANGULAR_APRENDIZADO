import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersListResponse } from '../../types/users-list-response';

@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrl: './users-card-list.component.scss'
})
export class UsersCardListComponent {
  // O decorador @Input permite que o componente receba dados do componente pai
  @Input() usersList: UsersListResponse = [];

  // O decorador @Output permite que o componente emita eventos para o componente pai
  @Output('onUserSelected') onUserSelectedEmitt = new EventEmitter<number>();

  onUserSelected(userIndex: number) {
    console.log('Índice do usuário clicado:', userIndex); // Aqui você pode ver o índice do usuário clicado no console
    this.onUserSelectedEmitt.emit(userIndex); // Emite o índice do usuário selecionado para o componente pai
  }
}
