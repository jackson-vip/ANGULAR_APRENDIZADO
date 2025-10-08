import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  protected title = 'projeto-element-ref';

  @ViewChild('minhaDiv')
  DivElement!: ElementRef<HTMLDivElement>;

  /** Usando o ElementRef para manipular diretamente o elemento DOM
   *  Note que o ElementRef deve ser usado com cautela, pois
   *  manipular o DOM diretamente pode levar a problemas de segurança
   *  e performance. Sempre que possível, prefira usar as ferramentas
   *  do Angular para manipulação do DOM. 
   * */ 
  ngAfterViewInit() {
    this.DivElement.nativeElement.style.backgroundColor = 'lightblue';
    this.DivElement.nativeElement.textContent = 'Sou uma DIV';
    this.DivElement.nativeElement.className = 'minha-class';
  }

  /** O método construtor() é chamado quando a instância do componente é criada.
   *  Aqui, o ElementRef é injetado no componente, permitindo o acesso ao elemento DOM.
   *  No entanto, o acesso ao elemento nativo só deve ser feito
   *  após a view ter sido inicializada, por isso usamos o
   *  ngAfterViewInit() para manipular o elemento.
   *  Isso garante que o elemento já esteja disponível no DOM.
  */
  // Injeção de dependência do ElementRef no construtor (usamos o readonly para garantir que não será modificado)
  constructor(private readonly _elRef: ElementRef) {
    // console.log(this._elRef); // Acesso ao elemento do componente
  }

  ngOnInit() {
    
    // Acesso aos elementos do componente AppComponent
    console.log(this._elRef); 
    // Exemplo de manipulação direta (descomente para usar) 
    // this._elRef.nativeElement.style.backgroundColor = 'lightyellow';

    // Acessando um elemento específico dentro do componente usando querySelector
    const divEl = this._elRef.nativeElement.querySelector('#minhaDiv') as HTMLDivElement;
    // console.log('divEl:', divEl);
    

    /** Listando todos os nós filhos do elemento do componente
    *   Exemplo de manipulação direta (descomente para usar)
    *   Cuidado: Manipulação direta do DOM pode causar problemas de segurança e performance
    *   Use com cautela e prefira as ferramentas do Angular sempre que possível
    */
    
    // Array.from(this._elRef.nativeElement.childNodes).forEach((child) => {
    //   const filho = child as Node;
    //   // console.log(filho);
    //   if (filho.nodeType === Node.ELEMENT_NODE) {
    //     const elemento = filho as HTMLElement;
    //     // console.log('Elemento:', elemento);
    //     if (elemento.id === 'minhaDiv') {
    //       elemento.style.backgroundColor = 'lightcoral';
    //       elemento.textContent = 'Sou a DIV com ID minhaDiv';
    //       elemento.className = 'minha-class';
    //     }
    //   }
    // });

    // Aqui, apenas logamos os filhos para fins de demonstração, sem manipular o DOM.
    const childNodes: Node[] = Array.from(this._elRef.nativeElement.childNodes);
    console.log('Child nodes:', childNodes);

    childNodes.forEach((child) => {
      // Se o nó for um elemento, podemos manipulá-lo
      if (child.nodeType === Node.ELEMENT_NODE) {
        const elemento = child as HTMLElement;
        if (elemento.id === 'minhaDiv') {
          elemento.style.backgroundColor = 'lightcoral';
          elemento.textContent = 'Sou a DIV com ID minhaDiv';
          elemento.className = 'minha-class';
          elemento.style.color = 'white';
          elemento.addEventListener('click', () => {
            alert('Clicou na DIV com ID minhaDiv');
          });
        }
      }
    });
  }

  // Vamos criar um novo elemento e adicioná-lo ao DOM
  criarElemento() {
    const novoElemento = document.createElement('p');
    novoElemento.textContent = 'Sou um novo parágrafo criado dinamicamente!';
    novoElemento.style.backgroundColor = 'lightgreen';
    novoElemento.style.padding = '10px';
    novoElemento.style.border = '1px solid green';
    novoElemento.className = 'minha-class';
    
    // Adicionando o novo elemento ao final do componente
    this._elRef.nativeElement.appendChild(novoElemento);
  }

}
