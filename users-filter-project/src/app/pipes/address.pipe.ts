import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(address: IAddress): string {
    const INVALID_ADDRESS =
      !address ||
      !address.rua ||
      !address.cidade ||
      !address.estado ||
      address.numero === null ||
      address.numero === undefined ||
      address.numero < 0; // Adiciona verificação para número negativo do endereço

    if (INVALID_ADDRESS) {
      return 'Endereço inválido ou inexistente'; // Retorna o valor original se o endereço for inválido
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
  }
}
