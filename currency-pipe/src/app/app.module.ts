import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData, CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';

// Configuração do locale para português (pt-BR)
// (necessário para formatação correta de datas, números e moedas)
const LOCALE_PROVIDER_PT_BR = {
  provide: LOCALE_ID,
  useValue: 'pt-BR',
};
// Registrar os dados do locale pt-BR no Angular 
// (necessário para formatação correta de datas, números e moedas)
registerLocaleData(localePt, 'pt-BR');

// Configuração do CurrencyPipe para utilizar o locale pt-BR por padrão
// (necessário para exibir valores monetários no formato brasileiro)
const CURRENCY_PIPE_PROVIDER_PT_BR = {
  provide: DEFAULT_CURRENCY_CODE,
  useValue: 'BRL',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LOCALE_PROVIDER_PT_BR, CURRENCY_PIPE_PROVIDER_PT_BR, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
