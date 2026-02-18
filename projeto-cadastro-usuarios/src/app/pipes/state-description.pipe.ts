import { Pipe, PipeTransform } from '@angular/core';
import { StatutesService } from '../services/ statutes.service';

@Pipe({
  name: 'stateDescription'
})
export class StateDescriptionPipe implements PipeTransform {

  constructor(
    private readonly _statutesService:  StatutesService 
  ) {}

  transform(stateId: number): string {
    return this._statutesService.getStateDescription(stateId);
  }

}
