
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { UsersList } from './data/users-list';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { isWithinInterval } from 'date-fns';

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
    console.log(filterOptions);

    /** Estamos usando o filtro do angular material MatTableDataSource
     * para filtrar os dados da tabela com base nas opções fornecidas.
     * O método filter aceita uma função que define a lógica de filtragem.
     * A função retorna true para incluir o item na lista filtrada
     * e false para excluí-lo.
     * Note que o filtro padrão do MatTableDataSource é baseado em string,
     * então estamos implementando nossa própria lógica de filtragem aqui.
     * Isso nos dá mais controle sobre como os dados são filtrados.
     */
    
    // Transforma as datas de string para objetos Date para comparação e se a data não existir, atribui null
    const filterStart = filterOptions.startDate ? new Date(filterOptions.startDate) : null;
    const filterEnd = filterOptions.endDate ? new Date(filterOptions.endDate) : null;
    const filterName = filterOptions.name?.toLowerCase() || '';

    const resultado = this.usersList.filter( user => {
      const userName = user.nome.toLowerCase();
      const userDate = new Date(user.dataCadastro);

      if (filterName && !userName.includes(filterName)) return false;
      if (filterOptions.status !== undefined && user.ativo !== filterOptions.status) return false;
      if (filterStart && userDate < filterStart) return false; 
      if (filterEnd && userDate > filterEnd) return false;

      return true;
    });
    
    this.userList.data = resultado;
    this.noResults = resultado.length === 0;

    if (resultado.length === 0) {
      this.noResults = true;
    }
  }
}
