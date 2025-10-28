import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'userStatus' })

export class UserStatusPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 1:
        return 'Ativo';
      case 2:
        return 'Inativo';
      default:
        return 'Inválido';
    }
  }
}