import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObsComObjetoComponent } from './components/obs-com-objeto/obs-com-objeto.component';
import { HttpClientModule } from '@angular/common/http';
import { ObsComArryComponent } from './components/obs-com-arry/obs-com-arry.component';

@NgModule({
  declarations: [
    AppComponent,
    ObsComObjetoComponent,
    ObsComArryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
