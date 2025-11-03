import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatusImg'
})

export class UserStatusImgPipe implements PipeTransform {
  transform(userStatusImg: number): string {
    try {
      if (isNaN(userStatusImg) || userStatusImg <= 0 || userStatusImg > 2) {
        throw new Error('Invalid user status');
      }

      const statusUserImg: { [key: number]: string } = {
        1: 'assets/icons/active-icon.png',
        2: 'assets/icons/inactive-icon.png',
      };

      return statusUserImg[userStatusImg];
    } catch (errors) {
    return 'assets/icons/default-icon.png';
    }
  }
}