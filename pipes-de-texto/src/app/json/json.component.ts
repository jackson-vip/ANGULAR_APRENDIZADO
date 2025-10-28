import { Component } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrl: './json.component.scss'
})
export class JsonComponent {
  user = {
    name: 'Jonh',
    lastName: 'Doe',
    age: 25
  }
}
