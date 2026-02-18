import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { StatutesService } from './services/ statutes.service';
import { UsersListResponse } from './types/users-list-response';
import { GenresListResponse } from './types/genres-list-response';
import { StatesListResponse } from './types/states-list-response';
import { IUser } from './interfaces/user/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { UserBeforeAndAfterDialComponent } from './components/user-before-and-after-dialog/user-before-and-after-dial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  /** A criação das variáveis para armazenar o usuário selecionado e seu índice
   *  as variáveis serão usadas para exibir os detalhes do usuário selecionado na interface.
   *  Iremos clonar o objeto do usuário selecionado para evitar mutações acidentais na lista original de usuários.
   *  Isso é especialmente importante em aplicações onde a integridade dos dados é crucial.
   *  O método structuredClone cria uma cópia profunda do objeto, garantindo que quaisquer alterações feitas
   *  no objeto clonado não afetem o objeto original.
   *  Isso é útil quando queremos trabalhar com uma cópia dos dados sem modificar os dados originais.
   * 
   *  Quando as alterações forem salvas, podemos atualizar a lista original de usuários com os dados modificados do usuário clonado.
   *  Assim, garantimos que a lista de usuários permaneça consistente e que as alterações sejam aplicadas corretamente.
   *  usaremos o índice do usuário selecionado para localizar e atualizar o usuário correto na lista original quando as alterações forem salvas.
  */
  userSelected: IUser = {} as IUser;
  userSelectedIndex: number | undefined;

  /** As variáveis para armazenar as listas de usuários, gêneros e estados
   * Essas listas serão preenchidas com dados obtidos dos serviços correspondentes.
   * Essas listas serão usadas para exibir informações na interface do usuário,
   * como a lista de usuários cadastrados, os gêneros musicais disponíveis e os estados do Brasil.
  */

  usersList: UsersListResponse = [];
  genresList: GenresListResponse = [];
  statesList: StatesListResponse = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _statutesService: StatutesService,
    private readonly _matDialog: MatDialog
  ) {}
  
  /** Todos os Livecycle Hooks devem estar abaixo deste comentário:
   */

  ngOnInit() {
    // Carrega a lista de usuários ao iniciar o componente
    this.getUsers();
    this.getGenres();
    this.getStatutes();
  }

  /** Todos os Métodos que são públicos devem estar abaixo deste comentário
   *  Os métodos públicos são aqueles que podem ser acessados de fora da classe, como por exemplo, pelos templates ou por outros componentes.
   *  Esses métodos geralmente contêm a lógica para manipular os dados e interagir com os serviços, além de lidar com eventos e ações do usuário.
   */

  /* O método handleUserSelected é chamado quando um usuário é selecionado na lista
    e recebe o índice do usuário selecionado como parâmetro. 
  */
  handleUserSelected(userIndex: number) {
    const userFound = this.usersList[userIndex];
    
    if(userFound) {
      this.userSelected = structuredClone(userFound);
      this.userSelectedIndex = userIndex;
    }

    // console.log('Usuário selecionado no AppComponent:', userFound);
  }
  
  // O método showRealUser é usado para exibir o usuário real selecionado na lista de usuários,
  // ou seja, o usuário original sem as alterações feitas no formulário.
  showRealUser() {
    console.log('Usuário Real:', this.usersList);
  }

  onFormSubmit() {
    this.openBeforeAndAfterDialog();
  }

  openBeforeAndAfterDialog() {
    this._matDialog.open(UserBeforeAndAfterDialComponent, {
      minWidth: '70%',
      data: {
        before: this.usersList[this.userSelectedIndex!],
        after: this.userSelected
      }
    });
  }

  /**  Todos os Métodos que são privados devem estar abaixo deste comentário
   *  Os métodos privados são aqueles que não devem ser acessados de fora da classe, ou seja, 
   *  eles são usados apenas internamente dentro da classe para realizar tarefas específicas.
  */

  private getUsers() {
    this._usersService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
      // console.log('Lista de Usuários:', this.usersList);
    });
  }

  private getGenres() {
    this._genresService.getGenres().subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
      // console.log('Lista de Gêneros:', this.genresList);
    });
  }

  private getStatutes() {
    this._statutesService.getStatutes().subscribe((statutesListResponse) => {
      this.statesList = statutesListResponse;
      // console.log('Lista de Estados do Brasil: ', this.statutesList);
    });
  }
}
