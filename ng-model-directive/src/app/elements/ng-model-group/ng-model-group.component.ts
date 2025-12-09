import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-model-group',
  templateUrl: './ng-model-group.component.html',
  styleUrl: './ng-model-group.component.scss'
})
export class NgModelGroupComponent {

  onSubmit(form: NgForm ) {
    console.log(form.value);
  }

}
