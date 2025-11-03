import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
    {
      name: 'Alice Cristina',
      status: 1
    },
    {
      name: 'Bob Oliveira',
      status: 2
    },
    {
      name: 'Charlie Silva',
      status: 1
    },
    {
      name: 'Diana Santos',
      status: 2
    }
  ]

  inactiveUser( idUser: number ) {
    this.users[idUser].status = 2;
  }

  addUser() {
    this.users.push({
      name: 'New User',
      status: 3
    });
  }
}
