import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from 'src/app/interfaces/filter/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  statusList = [
    {
      value: true,
      viewValue: 'Ativo',
    },
    {
      value: false,
      viewValue: 'Inativo',
    },
  ];

  filterOptions: IFilterOptions = {
    name: '',
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>();

  onFilter() {
    // console.log(this.filterOptions);
    this.onFilterEmitt.emit(this.filterOptions);
  }

  /** O método a baixo foi criado para identificar o tipo de dado que está sendo passado
   * no input de data.
   */
  dateSelected(date: any) {
    // console.log(date);
    /** Verifica se a data é uma instância de Date
     * usamos o instanceof para verificar se o objeto date
     * é realmente uma instância de Date.
     * Isso é útil para garantir que estamos lidando com um objeto de data válido.
     * casos de uso de instanceof:
     * 1. Validação de Tipos: Garantir que uma variável é do tipo esperado antes de realizar operações específicas.
     * 2. Polimorfismo: Diferenciar comportamentos com base no tipo real do objeto em tempo de execução.
     * 3. Segurança de Tipo: Evitar erros ao chamar métodos ou acessar propriedades que podem não existir em todos os tipos.
     * 4. Depuração: Ajudar a identificar o tipo real de um objeto durante o desenvolvimento e depuração do código.
     *
     * Comparamos o instanceof com typeof:
     */
    // console.log(date instanceof Date);
  }
}
