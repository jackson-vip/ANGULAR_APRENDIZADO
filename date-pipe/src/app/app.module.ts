import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DATE_PIPE_DEFAULT_OPTIONS, DatePipeConfig } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

const datePipeConfig: DatePipeConfig = {
  dateFormat: "dd/MM/yyyy",
  timezone: '+0000',
};

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: datePipeConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
