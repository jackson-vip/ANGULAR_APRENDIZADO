import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges {
  // Recebe do componente pai as listas de gêneros, estados e o usuário selecionado
  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('Cahnger', changes);
  }
}
