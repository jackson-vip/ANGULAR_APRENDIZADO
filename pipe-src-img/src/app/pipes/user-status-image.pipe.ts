import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatusImage'
})

export class UserStatusImagePipe implements PipeTransform {
    transform(userStatus: number): string {
        const statusImages: { [key: number]: string } = {
            1: 'assets/img/active.png',
            2: 'assets/img/inactive.png'
        };
        return statusImages[userStatus];
    }
}