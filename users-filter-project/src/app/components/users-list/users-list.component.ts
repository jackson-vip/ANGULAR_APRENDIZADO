import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  /** @Input (Property Binding)
   * dataSource é uma instância de MatTableDataSource que fornece
   * os dados para a tabela.
   * Ele é configurado no componente pai (AppComponent) e passado
   * para este componente via property binding.
   * A ! indica que esta propriedade é obrigatória e será
   * inicializada pelo componente pai.
   */
  @Input({ required: true }) userList!: MatTableDataSource<IUser>;
  
  /** displayedColumns é um array de strings que define as colunas
   * que serão exibidas na tabela.
   * Cada string corresponde a uma coluna específica, e a ordem
   * das strings no array determina a ordem das colunas na tabela.
   */
  @Input({ required: true }) displayedColumns: string[] = [];

  @Input({ required: true }) noResults: boolean = false;

  /** @Output (EventEmitter)
   * Emite um evento quando um usuário é selecionado na tabela
   * esse evento pode ser capturado por um componente pai
   * para exibir detalhes do usuário ou realizar outras ações
   * com base na seleção do usuário.
   */
  @Output() userSelected = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.userSelected.emit(user);
  }


}