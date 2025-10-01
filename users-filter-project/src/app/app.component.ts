
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// Meus imports :
import { UsersList } from './data/users-list';
import { filterUsersList } from './utils/filter-users-list';

// Os imports de interfaces:
import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/filter/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements AfterViewInit, OnInit {
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  usersList: IUser[] = [];
  noResults: boolean = false;
  
  // Definindo colunas para a tabela de usuários
  displayedColumns: string[] = ['name', 'date', 'status', 'statusIcon'];
  
  /**Configurando a fonte de dados da tabela com paginação 
   * e integração com MatPaginator do Angular Material.
  */
  userList = new MatTableDataSource<IUser>(this.usersList);

  /** O @ViewChild é usado para obter uma referência ao MatPaginator
   * definido no template HTML do componente.
   */
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Configuração do paginador após a inicialização da view
  ngAfterViewInit() {
    this.userList.paginator = this.paginator;
  }

  // Método chamado quando um usuário é selecionado na lista
  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  /** Simulando a obtenção de dados de uma API com um atraso
   * e atualizando a fonte de dados da tabela.
   * O OnInit é um método do ciclo de vida do Angular que é chamado
   * após a criação do componente e a inicialização de suas propriedades.
  */
  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.userList.data = this.usersList;
    }, 3000);
  }

  onFilter( filterOptions: IFilterOptions ) {
    // console.log(filterOptions);

    /** Estamos usando o filtro do angular material MatTableDataSource
     * para filtrar os dados da tabela com base nas opções fornecidas.
     * O método filter aceita uma função que define a lógica de filtragem.
     * A função retorna true para incluir o item na lista filtrada
     * e false para excluí-lo.
     * Note que o filtro padrão do MatTableDataSource é baseado em string,
     * então estamos implementando nossa própria lógica de filtragem aqui.
     * Isso nos dá mais controle sobre como os dados são filtrados.
     */

    const resultado = filterUsersList(this.usersList, filterOptions);
    this.userList.data = resultado;
    this.noResults = resultado.length === 0;

    if (resultado.length === 0) {
      this.noResults = true;
    }
  }
}