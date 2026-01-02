import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user/user.interface';
import { UsersListResponse } from '../types/users-list-response';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  /** Lista de usuários
   * Usamos o private readonly para garantir que a lista não seja modificada externamente
   * e que não possa ser reatribuída dentro da classe.
   */
  private readonly usersList: UsersListResponse = [
    {
      name: 'Usuário 1',
      username: 'usuario1',
      email: 'usuario1@example.com',
      password: 'senha1',
      birthDate: '01/12/1990',
      state: 13,
      musics: [
        { title: 'Música 1', band: 'Banda A', genre: 8, isFavorite: false },
        { title: 'Música 2', band: 'Banda B', genre: 11, isFavorite: false },
        { title: 'Música 3', band: 'Banda C', genre: 9, isFavorite: true },
      ],
    },
    {
      name: 'Usuário 2',
      username: 'usuario2',
      email: 'usuario2@example.com',
      password: 'senha2@44',
      birthDate: '02/02/1995',
      state: 50,
      musics: [
        { title: 'Música 4', band: 'Banda X', genre: 1, isFavorite: false },
        { title: 'Música 5', band: 'Banda Y', genre: 7, isFavorite: true },
        { title: 'Música 6', band: 'Banda Z', genre: 12, isFavorite: false },
      ],
    },
    {
      name: 'Usuário 3',
      username: 'usuario3',
      email: 'usuario3@example.com',
      password: 'senha3@123@122',
      birthDate: '03/03/2000',
      state: 42,
      musics: [
        { title: 'Easy', band: 'Commodores', genre: 2, isFavorite: true },
        {
          title: 'True',
          band: 'Spandau Ballet',
          genre: 2,
          isFavorite: false,
        },
        {
          title: "If You Don't Know Me by Now",
          band: 'Simply Red',
          genre: 2,
          isFavorite: false,
        },
      ],
    },
  ];

  getUsers(): Observable<UsersListResponse> {
    /** Simula uma chamada assíncrona para obter a lista de usuários.
     * Retorna um Observable que emite a lista após um atraso de 2 segundos.
     * Isso pode ser útil para simular chamadas HTTP reais.
     */
    // EX-1:
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.usersList);
        observer.complete();
      }, 2000); // Simula um atraso de 2 segundos
    });

    /** Este método atualmente retorna a lista de usuários de forma síncrona.
     * Caso seja necessário realizar uma chamada assíncrona no futuro,
     * considere utilizar `Observable` ou `Promise` para lidar com dados assíncronos.
     * */
    // EX-2:
    // return of(this.usersList);
  }
}
