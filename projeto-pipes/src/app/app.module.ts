import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData, CurrencyPipe } from '@angular/common';
import { UserStatusPipe } from './pipes/userStatus.pipe';
import { UserStatusImgPipe } from './pipes/userStatusImg.pipe';
import { FilterPipe } from './pipes/filter.pipe';


const LOCALE_PROVIDER_PT_BR = {
  provide: LOCALE_ID,
  useValue: 'pt-BR',
};

const CURRENCY_PIPE_PROVIDER_PT_BR = {
  provide: DEFAULT_CURRENCY_CODE,
  useValue: 'BRL',
};

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    UserStatusPipe,
    UserStatusImgPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [LOCALE_PROVIDER_PT_BR, CURRENCY_PIPE_PROVIDER_PT_BR, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
