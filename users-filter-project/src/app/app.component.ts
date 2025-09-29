
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements AfterViewInit {
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  usersList: IUser[] = UsersList;
  
  // Definindo colunas para a tabela de usuários
  displayedColumns: string[] = ['name', 'date', 'status', 'statusIcon'];
  
  /**Configurando a fonte de dados da tabela com paginação 
   * e integração com MatPaginator do Angular Material.
  */
  dataSource = new MatTableDataSource<IUser>(this.usersList);

  /** O @ViewChild é usado para obter uma referência ao MatPaginator
   * definido no template HTML do componente.
   */
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Configuração do paginador após a inicialização da view
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Método chamado quando um usuário é selecionado na lista
  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }
}
