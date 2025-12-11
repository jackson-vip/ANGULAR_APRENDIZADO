import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserResponse } from '../../../interfaces/user/user-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UsesService {
  
  // O Método construtor é utilizado para injetar o HttpClient no serviço. 
  constructor (
    // Injeção de dependência do HttpClient para realizar requisições HTTP. 
    private readonly _httpClient : HttpClient,
  ) {}
  
  // Método que retorna um Observable contendo uma lista de usuários.
  getUses(): Observable<IUserResponse[]> {
    return  this._httpClient.get<IUserResponse[]>('https://jsonplaceholder.typicode.com/users')  
  };
}
