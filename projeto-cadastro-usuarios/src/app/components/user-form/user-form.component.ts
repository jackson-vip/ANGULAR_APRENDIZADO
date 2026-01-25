import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// Importação de tipos:
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
// Importação de interfaces:
import { IUser } from '../../interfaces/user/user.interface';
// Importação de utilitários:
import { getPasswordStrengthValue } from '../../../utils/get-password-strength-value';
import { passwordStrengthBarColor } from '../../../utils/password-strength-bar-color';
import { convertPtBrDateToDateObj } from '../../../utils/convert-pt-br-date-to-date-obj';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges, OnInit {
  /** Criações de variáveis devem estar abaixo deste comentário:
   */
  passwordStrengthValue = 0;
  minDate : Date | null = null;
  maxDate : Date | null = null;
  dateValue: Date | null = null;

  /** Todas as propriedades @Input, @Output, @ViewChild, @ViewChildren 
   * e os demais decoradores devem estar abaixo deste comentário:
   */

  // Recebe do componente pai as listas de gêneros, estados e o usuário selecionado
  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  /** Todos os Livecycle Hooks devem estar abaixo deste comentário:
   */

  ngOnInit() {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Verifica se houve alteração na propriedade 'userSelected' e se não é a primeira mudança
    const USER_CHANGED = changes['userSelected'] && !changes['userSelected'].firstChange;
    // Se houve alteração, atualiza a força da senha
    if ( USER_CHANGED ) {
      this.onPasswordChange(this.userSelected.password);
      this.setBirthDateToDatepicker(this.userSelected.birthDate);
    }
  }

  /** Todos os Métodos que são públicos devem estar abaixo deste comentário:
   */

  // Atualiza o valor da força da senha
  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
    const passwordStrengthNumber = this.passwordStrengthValue;

    // Função para mudar a barra de progresso de força da senha
    passwordStrengthBarColor(passwordStrengthNumber);
  }

  /**  Todos os Métodos que são privados devem estar abaixo deste comentário
   */

  // Define as datas mínima e máxima para o campo de data de nascimento
  private setMinAndMaxDate() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1); // 1 de janeiro de (ano atual - 100)
    this.maxDate = new Date(); // data atual
  }

  private setBirthDateToDatepicker(birthDate: string) {
    this.dateValue = convertPtBrDateToDateObj(birthDate);
  }
}