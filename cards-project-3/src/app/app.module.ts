import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// My Components
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { CareditCardComponent } from './components/caredit-card/caredit-card.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { ClientInfosCardComponent } from './components/client-infos-card/client-infos-card.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { CardTitleComponent } from './components/card-title/card-title.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceCardComponent,
    CareditCardComponent,
    DebitCardComponent,
    ClientInfosCardComponent,
    CardItemComponent,
    CardLineComponent,
    CardTitleComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
