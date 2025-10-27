import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './ng-template-outlet/ex1.html',
  // templateUrl: './ng-template-outlet/ex2.html',
  // templateUrl: './ng-template-outlet/ex3.html',
  // templateUrl: './ng-template-outlet/ex4.html',
  // templateUrl: './ng-if/ex1.html',
  templateUrl: './ng-if/ex2.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  condition: boolean = true;
  // condition: boolean = false;
   
}
