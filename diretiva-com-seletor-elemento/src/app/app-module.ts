import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CardAvatarSmall } from './components/card/directives/card-avatar-small';
import { CardAvatarLarge } from './components/card/directives/card-avatar-large';

@NgModule({
  declarations: [
    App,
    CardAvatarSmall,
    CardAvatarLarge
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
