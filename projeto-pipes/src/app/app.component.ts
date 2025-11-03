import { IOperation } from './interfaces/operation.interface';
import { Component, OnInit } from '@angular/core';
import { OperationsService } from './services/operetions.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // operationsList!: IOperation[];
  searchText: string = '';
  operationsList$!: Observable<IOperation[]>;


  constructor(private readonly _operationsService: OperationsService) {}

  // Inicializa a obtenção das operações ao carregar o componente
  ngOnInit() {
    this.operationsList$ = this._operationsService.getOperations();
    // this.getOperations();
  }

  //»»» Obtém a lista de operações do serviço e atribui à propriedade operationsList
  // private getOperations() {
  //   this._operationsService.getOperations()
  //     .pipe(take(1)) // Garante que apenas uma emissão seja recebida, fazendo o unsubscribe automático
  //     .subscribe((operationsListResponse) => {
  //       // console.log(operationsListResponse);
  //       this.operationsList = operationsListResponse;
  //     });
  // }
}
