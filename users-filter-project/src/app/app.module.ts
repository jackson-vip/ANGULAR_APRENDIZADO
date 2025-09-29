import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  // Módulo para agrupar componentes reutilizáveis do Angular Material
  declarations: [
    AppComponent,
  ],
  // Recebe outros módulos que serão utilizados pelos componentes dentro deste módulo
  imports: [
    BrowserModule,
    ComponentsModule,
    AngularMaterialModule, // Garante que MatPaginatorModule está disponível
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
