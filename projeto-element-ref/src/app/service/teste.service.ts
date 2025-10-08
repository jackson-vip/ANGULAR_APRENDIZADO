import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class TesteService {

    /** Criando um método para criar um elemento div
     *  Se eu quiser, posso passar como parâmetro a referência do 
     *  ElementRef do componente que chamou o serviço.
     *  ex: criarElementoDiv(elRef: ElementRef) { ... }
    */
    criarElementoDiv(): HTMLDivElement {
        const div = document.createElement('div');
        div.style.backgroundColor = 'lightblue';
        div.style.padding = '10px';
        div.style.marginBottom = '10px';
        div.textContent = 'Elemento DIV criado via serviço';
        div.className = 'minha-class-servico';
        return div;
    }
}