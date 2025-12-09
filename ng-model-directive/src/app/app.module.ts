import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextareaComponent } from './elements/textarea/textarea.component';
import { InputTextComponent } from './elements/input-text/input-text.component';
import { SelectComponent } from './elements/select/select.component';
import { RadioButtonComponent } from './elements/radio-button/radio-button.component';
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { FormComponent } from './elements/form/form.component';
import { FormWithSubmitComponent } from './elements/form-with-submit/form-with-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    TextareaComponent,
    SelectComponent,
    RadioButtonComponent,
    CheckboxComponent,
    FormComponent,
    FormWithSubmitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
