import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IOperation } from '../interfaces/operation.interface';
import { operationsListResponseMock } from '../mocks/operations-list-response.mock';

@Injectable({
  providedIn: 'root',
})
export class OperationsService {
    
    // Simula uma chamada HTTP para obter a lista de operações
    getOperations(): Observable<IOperation[]> {
        return of(operationsListResponseMock);
    }
}