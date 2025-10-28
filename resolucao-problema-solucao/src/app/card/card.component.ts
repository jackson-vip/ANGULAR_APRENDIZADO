import { AfterContentInit, Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, AfterContentInit  {
  @ContentChild('meuTemplate') content!: TemplateRef<any>;

  /* O retorno será Undefined, pois o conteúdo ainda não foi projetado */
  ngOnInit() {
    console.log('ngOnInit', this.content);
  }

  /* O retorno será o TemplateRef do conteúdo projetado, 
  pois o conteúdo já foi projetado */
  ngAfterContentInit() {
    console.log('ngAfterContentInit', this.content);
  }
}
