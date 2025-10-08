import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-xss',
  standalone: false,
  templateUrl: './xss.html',
  styleUrl: './xss.scss'
})
export class Xss implements AfterViewInit{

  // Usando ViewChild para referenciar o container onde os elementos serão inseridos
  @ViewChild('container') containerRef!: ElementRef;
  @ViewChild('container1') container1Ref!: ElementRef;

  constructor( 
    private readonly _elRef: ElementRef,
    private readonly _renderer2: Renderer2
   ) {}

  criarElemento(inputText: string) {
    const inpText = inputText.trim();
    const divEl = document.createElement('div');
    const mensagemErro = `
      <ul>
        <li style="color: red;">Por favor, insira algum texto no input acima.
        </li>
      </ul>
    `;

    // Se o input estiver vazio, exibe a mensagem de erro
    if(!inpText) {
      divEl.innerHTML = mensagemErro;
      this.container1Ref.nativeElement.appendChild(divEl);
      return
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
    this.container1Ref.nativeElement.appendChild(divEl);

    // Usando o document.body.appendChild
    // document.body.appendChild(divEl);
  }

  ngAfterViewInit() {
    // Após a view ser inicializada, podemos usar o Renderer2 para criar e inserir elementos
    // Exemplo de uso do Renderer2 para criar um elemento
    const divEl = this._renderer2.createElement('div');
    this._renderer2.setProperty(divEl, 'innerHTML', '<p>Elemento criado com Renderer2 :</p>');

    if (this.containerRef) {
      this._renderer2.appendChild(this.containerRef.nativeElement, divEl);
    }

    // Exemplo de uso do Renderer2 com ElementRef
    const div2El = this.container1Ref?.nativeElement;
    console.log('div2El:', div2El);
    
    if (div2El) {
      this._renderer2.setProperty(div2El, 'innerHTML', '<p>Elemento inserido com ElementRef :</p>');
    }
  }

  userInputs: string[] = []; // Armazena entradas válidas do usuário
  errorMessage: string = '';

  adicionarInput(inputText: string) {
    const trimmedInput = inputText.trim();
    
    if (!trimmedInput) {
      this.errorMessage = 'Por favor, insira algum texto no input acima.';
      return false;
    }

    this.errorMessage = '';
    this.userInputs.push(trimmedInput); // Adiciona o input válido ao array
    return true;
  }

  criarElementoComRenderer2(inputText: string) {
    const container = this.containerRef?.nativeElement;

    // Só adiciona se o input for válido
    if (!this.adicionarInput(inputText)) {
      return;
    }

    // Não aceita HTML: cria elementos e define o texto via textContent
    const divEl = this._renderer2.createElement('div');
    const ulEl = this._renderer2.createElement('ul');
    const liEl = this._renderer2.createElement('li');
    this._renderer2.setProperty(liEl, 'textContent', inputText.trim()); // Define o texto do li
    this._renderer2.appendChild(ulEl, liEl); // Adiciona o li ao ul
    this._renderer2.appendChild(divEl, ulEl); // Adiciona o ul ao div

    if (container) {
      this._renderer2.appendChild(container, divEl);
    }
  }
}
