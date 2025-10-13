import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// Minhas diretivas: 
import { CardTextTitleDirective } from './components/card/directives/card-text-title.directive';
import { CardTextSubtitleDirective } from './components/card/directives/card-text-subtitle.directive';
import { CardTextDescriptionDirective } from './components/card/directives/card-text-description.directive';
import { CardAvatarSmall } from './components/card/directives/card-avatar-small';
import { CardAvatarLarge } from './components/card/directives/card-avatar-large';

@NgModule({
  declarations: [
    App,
    CardTextTitleDirective,
    CardTextSubtitleDirective,
    CardTextDescriptionDirective,
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
