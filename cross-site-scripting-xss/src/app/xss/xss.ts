import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-xss',
  standalone: false,
  templateUrl: './xss.html',
  styleUrl: './xss.scss'
})
export class Xss {

  constructor( 
    private readonly _elRef: ElementRef,
   ) {}

  criarElemento(inputText: string) {
    
    const divEl = document.createElement('div');
    
    if(!inputText) {
      divEl.innerHTML = `
      <ul>
        <li style="color: red;">Por favor, insira algum texto no input acima.
        </li>
      </ul>
    `;
      document.body.appendChild(divEl);
      return;
    }
    
    divEl.innerHTML = `
    <ul>
      <li>${inputText}</li>
    </ul>`;
    
    /** Podemos inserir o elemento usando o document.body.appendChild
     *  Vantagem: Simplicidade
     *  Desvantagem: Pode introduzir vulnerabilidades de XSS se o inputText não for sanitizado
     *  
     *  Também temos outra alternativa que é usando a injeção do ElementRef
     *  Vantagem: Permite manipular o DOM de forma mais controlada dentro do contexto do componente
     *  Desvantagem: Requer mais código e pode ser menos intuitivo para quem não está familiarizado com Angular
     * 
     *  Ambas as abordagens têm suas vantagens e desvantagens, e a escolha entre elas 
     *  deve considerar o contexto específico da aplicação e as necessidades de segurança.
     * 
     * Atenção: Ambas as abordagens podem introduzir vulnerabilidades de XSS se o 
     * inputText não for devidamente sanitizado.
     * 
     * Angular oferece mecanismos de segurança, como o DomSanitizer, para ajudar a mitigar esses riscos.
     * Exemplo de uso do DomSanitizer:
     * 
     * import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
     * constructor(private sanitizer: DomSanitizer) {}
     * 
     * const safeInputText: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(inputText);
     * 
     * divEl.innerHTML = `
     * <ul>
     *   <li>${safeInputText}</li>
     * </ul>`;
     * 
     * Usar o DomSanitizer ajuda a garantir que o conteúdo inserido no DOM seja seguro e não contenha scripts maliciosos.
     */

    // Descomente o código abaixo para usar a segunda abordagem com ElementRef
    // this._elRef.nativeElement.appendChild(divEl);

    // Usando o document.body.appendChild
    document.body.appendChild(divEl);
  }

}
