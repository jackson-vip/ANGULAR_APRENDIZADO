import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { getPtBrPaginatorIntl } from './paginator-pt';
@NgModule({
  // Recebe outros módulos que serão utilizados pelos componentes dentro deste módulo
  imports: [
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  // No export, colocamos o que queremos disponibilizar para outros módulos
  exports: [
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  /** O providers é usado para serviços e injeção de dependências
   * Aqui estamos customizando o MatPaginatorIntl para português
   * Isso afeta todos os paginadores da aplicação 
   * Veja mais em: https://material.angular.io/components/paginator/api#MatPaginatorIntl */
  providers: [
    { provide: MatPaginatorIntl, useValue: getPtBrPaginatorIntl() }
  ]
})
export class AngularMaterialModule {}
