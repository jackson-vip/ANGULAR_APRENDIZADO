import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  foods = [{
    value: 1, 
    viewValue: 'Ativo'
  },
  {
    value: 0, 
    viewValue: 'Inativo'
  }];
}
