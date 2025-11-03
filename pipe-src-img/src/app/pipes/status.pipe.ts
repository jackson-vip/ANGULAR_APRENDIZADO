import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})

export class StatusPipe implements PipeTransform {
    transform(value: number): string {
        const statusMap: { [key: number]: string } = {
            1: 'Active',
            2: 'Inactive'
        };
        return statusMap[value];
    }
}