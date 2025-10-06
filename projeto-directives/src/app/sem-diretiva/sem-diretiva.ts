import { Component } from '@angular/core';

@Component({
  selector: 'app-sem-diretiva',
  standalone: false,
  templateUrl: './sem-diretiva.html',
  styleUrl: './sem-diretiva.scss'
})
export class SemDiretiva {

   onMouseOver(event: MouseEvent ) {
    // console.log('Mouse over event triggered');
    const target = event.target as HTMLElement;
    target.classList.add('hover');
  }

  onMouseOut( event: MouseEvent ) {
    // console.log('Mouse out event triggered');
    const target = event.target as HTMLElement;
    target.classList.remove('hover');
  }

}
