import { Injectable } from "@angular/core";
import { IUser } from "../interfaces/user.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class UsersService {

    userResponseId!: Promise<IUser>;

    // O Construtor serve para injetar dependências no serviço
    constructor(
        private readonly _http : HttpClient 
    ) {}

    // Diferença entre Observable e Promise:

    /** OBSERVABLE:
     * - Pode emitir múltiplos valores ao longo do tempo
     * - Lazy: não começa a emitir valores até que alguém se inscreva (subscribe)
     * - Pode ser cancelado (unsubscribe)
     * - Suporta operadores funcionais para transformação e manipulação de dados
     */
    getUserById(userId: number): Observable<IUser> {
        return this._http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    }
    
    /** PROMISE:
     * - Emite um único valor ou erro
     * - Eager: começa a executar imediatamente após sua criação
     * - Não pode ser cancelada
     * - Usa métodos then e catch para manipulação de resultados e erros
     */
    getUser(): Promise<IUser> {
        // Simulando uma chamada assíncrona que retorna um usuário após 3 segundos
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve({
                id: 1,
                name: 'John Doe',
                username: 'Gordon',
                email: 'john.doe@example.com'
            }), 3000);
        });
    }
}