import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Card } from './card/card';
import { CardHeader } from './card/directives/base/card-header.directive';
import { CardContent } from './card/directives/base/card-content.directive';
import { CardMainText } from './card/directives/texts/card-main-text';
import { CardSubText } from './card/directives/texts/card-sub-text';
import { CardDescriptionText } from './card/directives/texts/card-description-text';
import { CardSmallImg } from './card/directives/images/card-small-img';
import { CardLargeImg } from './card/directives/images/card-large-img';

@NgModule({
  declarations: [App, Card, CardHeader, CardContent, CardMainText, CardSubText, CardDescriptionText, CardSmallImg, CardLargeImg],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
