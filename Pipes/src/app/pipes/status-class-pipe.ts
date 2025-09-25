import { Pipe, PipeTransform } from "@angular/core";

// Lembre-se de remover 'standalone: true' se estiver presente
@Pipe({
    name: 'statusClass',
    standalone: false
})
export class StatusClassPipe implements PipeTransform {
    transform(status: number): string {
        switch (status) {
            case 1:
                return 'active';
            case 2:
                return 'inactive';
            case 3:
                return 'pending';
            default:
                return 'default';
        }
    }
}