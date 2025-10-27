import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuCompComponent } from './meu-comp/meu-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
