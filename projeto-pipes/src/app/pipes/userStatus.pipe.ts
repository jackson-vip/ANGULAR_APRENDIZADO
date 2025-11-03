import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {

  transform( userStatus: number): string {
    try {
        if ( isNaN(userStatus) || userStatus <= 0 || userStatus > 2 ) {
            throw new Error('Invalid user status');
        }

        const statusUser: { [key: number]: string } = {
            1: 'Ativo',
            2: 'Inativo'
        };
        
        return statusUser[userStatus];

    } catch (errors) {
        return 'Desconhecido';
    }
  }
}

