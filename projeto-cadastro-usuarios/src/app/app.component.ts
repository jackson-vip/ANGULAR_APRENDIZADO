import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { StatutesService } from './services/ statutes.service';
import { UsersListResponse } from './types/users-list-response';
import { GenresListResponse } from './types/genres-list-response';
import { StatesListResponse } from './types/states-list-response';
import { IUser } from './interfaces/user/user.interface';

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
  ) {}

  ngOnInit() {
    // Carrega a lista de usuários ao iniciar o componente
    this.getUsers();
    this.getGenres();
    this.getStatutes();
  }

  /** O privado indica que esses métodos não devem ser acessados fora desta classe
   *  isso ajuda a encapsular a lógica interna do componente.
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

  /** O método handleUserSelected é chamado quando um usuário é selecionado na lista
   *  e recebe o índice do usuário selecionado como parâmetro.
  */
  handleUserSelected(userIndex: number) {
    const userFound = this.usersList[userIndex];
    
    if(userFound) {
      this.userSelected = structuredClone(userFound);
      this.userSelectedIndex = userIndex;
    }

    // console.log('Usuário selecionado no AppComponent:', userFound);
  }
}
