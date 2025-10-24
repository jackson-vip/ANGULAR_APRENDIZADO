import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-infos-card',
  templateUrl: './client-infos-card.component.html',
  styleUrl: './client-infos-card.component.scss',
})
export class ClientInfosCardComponent implements OnInit {
  headerColor: string = 'blue';

  ngOnInit() {
    setTimeout(() => {
      this.headerColor = 'green';
    }, 3000);
  }
}
