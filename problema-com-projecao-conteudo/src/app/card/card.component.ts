import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  condition: boolean = false;

  ngOnInit() {
    /**
     * Observação: ao usar <ng-content> o Angular projeta (instancia) o conteúdo
     * no momento da renderização, portanto os hooks do componente projetado
     * (por exemplo ngOnInit) serão executados mesmo que o pai não o exiba
     * visivelmente.
     *
     * Se você precisa evitar essa inicialização (por exemplo para impedir
     * requisições HTTP ou lógica pesada), assegure-se de não criar o componente
     * até que a condição seja verdadeira. Opções comuns:
     *  - aplicar *ngIf diretamente no componente/elemento que seria projetado;
     *  - projetar um TemplateRef (<ng-template>) e instanciá‑lo com
     *    *ngIf/*ngTemplateOutlet quando necessário;
     *  - adiar inicialização dentro do próprio componente filho (lazy init).
     */
    console.log("Card Component initialized - OnInit");
  }
}
