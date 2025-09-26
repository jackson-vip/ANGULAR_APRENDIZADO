import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
    // Módulo para agrupar componentes reutilizáveis
    declarations: [
        UserDetailsComponent
  ],
    // Recebe outros módulos que serão utilizados pelos componentes dentro deste módulo
    imports: [
        AngularMaterialModule,
    ],
    // No export, colocamos o que queremos disponibilizar para outros módulos
    exports: [
        UserDetailsComponent
    ]
})
export class ComponentsModule {

}