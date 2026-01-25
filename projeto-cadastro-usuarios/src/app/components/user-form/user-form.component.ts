import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// Importação de tipos:
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
// Importação de interfaces:
import { IUser } from '../../interfaces/user/user.interface';
// Importação de utilitários:
import { getPasswordStrengthValue } from '../../../utils/get-password-strength-value';
import { passwordStrengthBarColor } from '../../../utils/password-strength-bar-color';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges, OnInit {
  // Declarações de variáveis:
  passwordStrengthValue = 0;
  minDate : Date | null = null;
  maxDate : Date | null = null;

  // Recebe do componente pai as listas de gêneros, estados e o usuário selecionado
  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  ngOnInit() {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Verifica se houve alteração na propriedade 'userSelected' e se não é a primeira mudança
    const USER_CHANGED = changes['userSelected'] && !changes['userSelected'].firstChange;
    // Se houve alteração, atualiza a força da senha
    if ( USER_CHANGED ) this.onPasswordChange(this.userSelected.password);
  }

  // Atualiza o valor da força da senha
  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
    const passwordStrengthNumber = this.passwordStrengthValue;

    // Função para mudar a barra de progresso de força da senha
    passwordStrengthBarColor(passwordStrengthNumber);
  }

  // Define as datas mínima e máxima para o campo de data de nascimento
  private setMinAndMaxDate() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1); // 1 de janeiro de (ano atual - 100)
    this.maxDate = new Date(); // data atual
  }
}
