import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormControlExample } from './EXEMPLOS/form-control/form-control';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorAssicrono } from './EXEMPLOS/validator-assicrono/validator-assicrono';
import { FormGroupComponent } from './EXEMPLOS/form-group/form-group';
import { FormArrayComponent } from './EXEMPLOS/form-array/form-array';
import { FormArrayComGroup } from './EXEMPLOS/form-array-com-group/form-array-com-group';

@NgModule({
  declarations: [
    App,
    FormControlExample,
    ValidatorAssicrono,
    FormGroupComponent,
    FormArrayComponent,
    FormArrayComGroup,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
