import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    // Recebe outros módulos que serão utilizados pelos componentes dentro deste módulo 
    imports: [
        MatListModule,
        MatDividerModule
    ],
    // No export, colocamos o que queremos disponibilizar para outros módulos
    exports: [
        MatListModule,
        MatDividerModule
    ]
})

export class AngularMaterialModule { }