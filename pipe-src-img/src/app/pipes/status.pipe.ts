import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})

export class StatusPipe implements PipeTransform {
    transform(value: number): string {
        // O try-catch para garantir que valores inválidos sejam tratados
        try {
            if (isNaN(value) || value < 1 || value > 2) {
                throw new Error('Invalid status value');
            }
            const statusMap: { [key: number]: string } = {
                1: 'Active',
                2: 'Inactive'
            };
            return statusMap[value];
        } catch (error) {
            return 'Status Invalido';
        }
    }
}