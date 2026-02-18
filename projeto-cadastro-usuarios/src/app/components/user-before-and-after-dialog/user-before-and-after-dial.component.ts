import { Component, Inject } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-before-and-after-dial',
  templateUrl: './user-before-and-after-dial.component.html',
  styleUrl: './user-before-and-after-dial.component.scss'
})
export class UserBeforeAndAfterDialComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { originalUser: IUser, updateUser: IUser }
  ) {}
}
