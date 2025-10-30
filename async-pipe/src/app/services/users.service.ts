import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserResponse } from '../interfaces/user/user-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

    constructor(
        private readonly _http: HttpClient
    ) { }

    getUsers(): Observable<IUserResponse[]> {
        return this._http.get<IUserResponse[]>('https://jsonplaceholder.typicode.com/users');
    }

    getUserById(userId: number): Observable<IUserResponse> {
        return this._http.get<IUserResponse>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    }
}