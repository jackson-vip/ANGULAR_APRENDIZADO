import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersPlaceholderListResponse } from '../types/users-placeholder-list-response';

@Injectable({
  providedIn: 'root',
})
export class UsersPlaceHolderService {
    /** O método construtor injeta o HttpClient para fazer requisições HTTP
     *  Sempre que quisermos usar um serviço em Angular, precisamos injetá-lo no construtor da classe.
     *  exemplos de injeção de dependência em Angular.
     *  - HttpClient: para fazer requisições HTTP.
     *  - Outros serviços personalizados que criamos.
     *  - Serviços do Angular, como Router, ActivatedRoute, etc.
     *  - Serviços de terceiros, como serviços de autenticação, serviços de notificação, etc.
     *  - Serviços de estado, como NgRx Store, etc.
     *  Os mais usados são : 
     *  - Serviços HTTP para comunicação com APIs.
     *  - Serviços de roteamento para navegação entre páginas.
     *  - Serviços de estado para gerenciar o estado da aplicação.
     */
    constructor(
        private readonly _http: HttpClient
    ) {}

    getUsersPlaceholder(): Observable<UsersPlaceholderListResponse> {
        return this._http.get<UsersPlaceholderListResponse>('https://jsonplaceholder.typicode.com/users');
    }

    // getUserByIdPlaceholder(userId: number): Observable<IUserPlaceholderResponse> {
    //     return this._http.get<IUserPlaceholderResponse>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    // }
}
