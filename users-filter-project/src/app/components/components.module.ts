import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    // Módulo para agrupar componentes reutilizáveis
    declarations: [
        UserDetailsComponent,
        FilterComponent,
        UsersListComponent,
  ],
    // Recebe outros módulos que serão utilizados pelos componentes dentro deste módulo
    imports: [
        AngularMaterialModule,
        CommonModule,
        FormsModule,
        PipesModule
    ],
    // No export, colocamos o que queremos disponibilizar para outros módulos
    exports: [
        UserDetailsComponent,
        UsersListComponent,
        FilterComponent,
        CommonModule,
        FormsModule,
    ]
})
export class ComponentsModule {

}