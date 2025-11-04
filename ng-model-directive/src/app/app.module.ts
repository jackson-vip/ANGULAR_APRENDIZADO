import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextareaComponent } from './elements/textarea/textarea.component';
import { InputTextComponent } from './elements/input-text/input-text.component';
import { SelectComponent } from './elements/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    TextareaComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
