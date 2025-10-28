import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UppercaseComponent } from './uppercase/uppercase.component';
import { SliceComponent } from './slice/slice.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { LowercaseComponent } from './lowercase/lowercase.component';
import { JsonComponent } from './json/json.component';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseComponent,
    SliceComponent,
    TitlecaseComponent,
    LowercaseComponent,
    JsonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
