import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
// Importando diretivas
import { DisabledDirective } from './directives/disabled.directive';
import { HighlightDirective } from './directives/heighlight.directive';
import { StyleDirective } from './directives/style.directive';
// Meus componentes
import { ComDiretiva } from './com-diretiva/com-diretiva';
import { SemDiretiva } from './sem-diretiva/sem-diretiva';
import { ClassDirective } from './directives/class.directive';

@NgModule({
  declarations: [
    App,
    HighlightDirective,
    DisabledDirective,
    StyleDirective,
    ClassDirective,
    SemDiretiva,
    ComDiretiva,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
