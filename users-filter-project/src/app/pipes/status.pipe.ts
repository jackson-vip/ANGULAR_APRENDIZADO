import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string | any {
    const INVALID_STATUS = status === null || status === undefined || typeof status !== 'boolean';
    if (INVALID_STATUS) {
      return 'Status inválido ou inexistente';
    }
    return status ? 'Ativo' : 'Inativo';
  }

}
