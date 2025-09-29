import { Component, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersList } from 'src/app/data/users-list';
import { IUser } from 'src/app/interfaces/user/user.interface';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements AfterViewInit {
  
  /** displayedColumns é um array de strings que define as colunas
   * que serão exibidas na tabela.
   * Cada string corresponde a uma coluna específica, e a ordem
   * das strings no array determina a ordem das colunas na tabela.
   */
  displayedColumns: string[] = ['name', 'date', 'status', 'statusIcon'];

  // Definição da fonte de dados
  usersList: IUser[] = UsersList;

  /** USANDO MATTABLEDATASOURCE
   * Estamos criando uma instância de MatTableDataSource
   * e passando a lista de usuários (usersList) como fonte de dados
   * Isso permite que a tabela do Angular Material gerencie a paginação,
   * ordenação e filtragem automaticamente
   */
  dataSource = new MatTableDataSource(this.usersList);

  /** @ViewChild para acessar o paginador do Angular Material
   * e vinculá-lo à fonte de dados (dataSource)
   * ! operador de asserção não nulo para garantir que o paginador
   * será inicializado antes de ser usado
   */
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /** Implementação do AfterViewInit para configurar o paginador 
   * após a visualização ser inicializada */
  ngAfterViewInit() {
    // Conecta o paginador ao dataSource
    this.dataSource.paginator = this.paginator;
  }

  /** @Output (EventEmitter)
   * Emite um evento quando um usuário é selecionado na tabela
   * esse evento pode ser capturado por um componente pai
   * para exibir detalhes do usuário ou realizar outras ações
   * com base na seleção do usuário.
   */
  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  // Método para seleção de uma linha da tabela
  onUserSelected( user: IUser ) {
    // console.log('Usuário selecionado:', user);
    this.userSelectedEmitt.emit(user);
  }

}