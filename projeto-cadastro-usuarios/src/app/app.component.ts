import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { StatutesService } from './services/ statutes.service';
import { UsersListResponse } from './types/users-list-response';
import { GenresListResponse } from './types/genres-list-response';
import { StatesListResponse } from './types/states-list-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: UsersListResponse = [];
  genresList: GenresListResponse = [];
  statutesList: StatesListResponse = [];

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
   *  */
  private getUsers() {
    this._usersService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
      console.log('Lista de Usuários:', this.usersList);
    });
  }

  private getGenres() {
    this._genresService.getGenres().subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
      console.log('Lista de Gêneros:', this.genresList);
    });
  }

  private getStatutes() {
    this._statutesService.getStatutes().subscribe((statutesListResponse) => {
      this.statutesList = statutesListResponse;
      console.log('Lista de Estados do Brasil: ', this.statutesList);
    });
  }
}
