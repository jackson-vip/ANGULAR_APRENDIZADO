import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  title = 'ViewChild';

  /** O @ViewChild permite acessar elementos do DOM diretamente no TypeScript.
   * Ele é usado para obter uma referência a um elemento do template.
   * No exemplo abaixo, estamos acessando um input de texto.
   * O parâmetro "meuInput" é o nome da referência local definida no template.
   * O ElementRef é uma classe que encapsula um elemento do DOM.
   * A propriedade nativeElement fornece acesso ao elemento nativo do DOM.
   * Com isso, podemos manipular o valor do input diretamente no TypeScript.
   * 
   * Note que o "!" após o nome da propriedade indica que ela será inicializada posteriormente,
   * evitando erros de compilação relacionados a propriedades não inicializadas.
   */
  @ViewChild("meuInput") 
  meuInputElement!: ElementRef<HTMLInputElement>;

  /** Método para atualizar o valor do input */
  updateInputText() {
    console.log(this.meuInputElement);
    this.meuInputElement.nativeElement.value = "Texto atualizado via ViewChild!";
    this.meuInputElement.nativeElement.focus(); // Coloca o foco no input após a atualização
    this.meuInputElement.nativeElement.style.backgroundColor = "#e0f7fa"; // Muda a cor de fundo do input
    this.meuInputElement.nativeElement.style.color = "#006064"; // Muda a cor do texto do input
    this.meuInputElement.nativeElement.style.fontWeight = "bold"; // Deixa o texto em negrito
  }

  clearInputText() {
    this.meuInputElement.nativeElement.value = "";
    this.meuInputElement.nativeElement.style.backgroundColor = ""; // Reseta a cor de fundo do input
    this.meuInputElement.nativeElement.style.color = ""; // Reseta a cor do texto do input
    this.meuInputElement.nativeElement.style.fontWeight = ""; // Reseta o peso da fonte do texto do input
    this.meuInputElement.nativeElement.focus(); // Coloca o foco no input após limpar
  }

  /** Quando estamos usando apenas uma referência ao componente filho
   * (<app-filho></app-filho>), podemos referenciar a classe do componente.
   * Exemplo: FilhoComponent
   * @ViewChild("FilhoComponent")
   * filhoComponent!: FilhoComponent;
   */
  @ViewChild("filhoComponent")
  filhoComponent!: FilhoComponent;

  showSaudacaoDoFilho() {
    // Chama o método do componente filho
    this.filhoComponent.saudacaoDoFilho(); 
    // Atualiza a mensagem do componente filho
    this.filhoComponent.message = "Mensagem atualizada pelo Componente Pai!";
  }


  /** Ciclo de vida do Angular (Lifecycle Hooks)
   * 
   *  OnInit(): É chamado uma vez após a criação do componente.
   *  É usado para inicializar dados e configurar o componente.
   *  É o momento ideal para fazer chamadas a serviços para buscar dados iniciais.
   * 
   *  AfterViewChecked(): É chamado após cada verificação de mudanças na visualização do componente.
   *  Pode ser chamado várias vezes durante o ciclo de vida do componente.
   *  Deve ser usado com cautela, pois pode levar a loops infinitos se não for gerenciado corretamente.
   * 
   *  AfterViewInit(): É chamado uma vez após a inicialização da visualização do componente.
   *  É o momento ideal para interagir com elementos do DOM que foram renderizados.
   * 
   *  construtor(): É chamado quando a instância do componente é criada.
   *  Deve ser usado para injeção de dependências e inicialização básica.
   *  Não deve conter lógica complexa ou interações com o DOM,
   *  pois o componente ainda não foi totalmente inicializado.
   * 
   *  onChanges(): É chamado quando uma ou mais propriedades vinculadas a dados do componente mudam.
   *  Recebe um objeto SimpleChanges que contém as mudanças ocorridas.
   *  Deve ser usado para reagir a mudanças específicas nas propriedades do componente. 
   */

  @ViewChild("meuInput5")
  meuInput5Element!: ElementRef<HTMLInputElement>;
  
  constructor() {
    console.log("Construtor chamado!");
  }

  ngOnInit() {
    console.log("ngOnInit chamado!", this.meuInput5Element);
    // Property 'focus' does not exist on type 'ElementRef<HTMLInputElement>'
    // this.meuInput5Element.focus();
    /** O Erro acima indica que o método 'focus' não está disponível diretamente em 'ElementRef'
     * porque 'ElementRef' é uma classe genérica que encapsula um elemento do DOM.
     * Para acessar métodos específicos do elemento, como 'focus',
     * precisamos usar a propriedade 'nativeElement' que fornece acesso ao elemento nativo do DOM.
     * Exemplo correto: this.meuInput5Element.nativeElement.focus();
     * 
     * ERROR TypeError: Cannot read properties of undefined (reading 'nativeElement')
     * Esse erro ocorre porque o ngOnInit é chamado antes do Angular inicializar as visualizações do componente.
     * Portanto, a propriedade 'meuInput5Element' ainda não foi definida.
     * Para garantir que a propriedade esteja disponível, devemos usar o hook ngAfterViewInit.
     */

    // Vamos remover o foco e colocar no ngAfterViewInit depois da inicialização completa da view
    // this.meuInput5Element.nativeElement.focus(); // Coloca o foco no input após a inicialização
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit chamado!", this.meuInput5Element);
    // Agora a propriedade 'meuInput5Element' está disponível
    this.meuInput5Element.nativeElement.value = "Texto atualizado no ngAfterViewInit!";
    this.meuInput5Element.nativeElement.style.backgroundColor = "#f1f8e9"; // Muda a cor de fundo do input
    this.meuInput5Element.nativeElement.style.color = "#33691e"; // Muda a cor do texto do input
    this.meuInput5Element.nativeElement.style.fontWeight = "bold"; // Deixa o texto em negrito
    this.meuInput5Element.nativeElement.focus(); // Coloca o foco no input após a inicialização

    // Aplica estilos iniciais nos botões (movido do ngAfterViewChecked)
    this.styleButtons();

    // Observa mudanças na lista de botões
    this.meuButtonsElements.changes.subscribe((result) => {
      console.log("mudanças nos botões! ", result);
      
    });
  }

  // Usando ViewChildren para acessar múltiplos elementos do DOM com a mesma referência local
  buttonsList = [ "Button 1", "Button 2", "Button 3" ];

  /** Usando ViewChildren para acessar múltiplos elementos do DOM com a mesma referência local 
   *  lembrando que só teremos acesso aos elementos do DOM após a inicialização completa da view,
   *  ou seja, dentro do ngAfterViewInit.
  */

  @ViewChildren('meuButtons')
  meuButtonsElements!: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked chamado!", this.meuButtonsElements);
  }

  /** Método para aplicar estilos nos botões */
  styleButtons() {
    // Itera sobre cada botão e aplica estilos
    this.meuButtonsElements.forEach((button, index) => {
      button.nativeElement.style.backgroundColor = "#ede7f6"; // Muda a cor de fundo do botão
      button.nativeElement.style.color = "#4527a0"; // Muda a cor do texto do botão
      button.nativeElement.style.fontWeight = "bold"; // Deixa o texto em negrito
      button.nativeElement.style.margin = "5px"; // Adiciona margem entre os botões
      button.nativeElement.textContent = `Botão ${index + 1}`; // Atualiza o texto do botão
    });

    // Modificar um por um usando o index
    if (this.meuButtonsElements.length > 0) {
      const firstButton = this.meuButtonsElements.toArray()[0];
      firstButton.nativeElement.style.backgroundColor = "#c5cae9"; // Muda a cor de fundo do primeiro botão
      firstButton.nativeElement.style.color = "#1a237e"; // Muda a cor do texto do primeiro botão
      firstButton.nativeElement.textContent = "Primeiro Botão Modificado"; // Atualiza o texto do primeiro botão

      const secondButton = this.meuButtonsElements.toArray()[1];
      secondButton.nativeElement.style.backgroundColor = "#b2dfdb";
      secondButton.nativeElement.style.color = "#004d40";
      secondButton.nativeElement.textContent = "Segundo Botão Modificado";

      const thirdButton = this.meuButtonsElements.toArray()[2];
      thirdButton.nativeElement.style.backgroundColor = "#ffe0b2";
      thirdButton.nativeElement.style.color = "#e65100";
      thirdButton.nativeElement.textContent = "Terceiro Botão Modificado";
    }
  }

  /** Método para resetar os estilos e texto dos botões para o estado original */
  resetButtons() {
    this.meuButtonsElements.forEach((button, index) => {
      button.nativeElement.style.backgroundColor = ""; // Reseta a cor de fundo do botão
      button.nativeElement.style.color = ""; // Reseta a cor do texto do botão
      button.nativeElement.style.fontWeight = ""; // Reseta o peso da fonte do texto
      button.nativeElement.style.margin = ""; // Reseta a margem entre os botões
      button.nativeElement.textContent = this.buttonsList[index]; // Reseta o texto do botão
    });
  }

  firstBtn() {
    if (this.meuButtonsElements.length > 0) {
      const firstButton = this.meuButtonsElements.get(0);
      firstButton!.nativeElement.style.backgroundColor = "red";
      
      // O método find retorna o primeiro elemento que satisfaz a condição
      // Nesse caso, estamos procurando o segundo botão (índice 1)
      // e aplicando um estilo diferente para demonstrar outra forma de acesso 
      const secondButton = this.meuButtonsElements.find((btn, idx) => idx === 1);
      if (secondButton) {
        secondButton.nativeElement.style.backgroundColor = "blue";
      }
      const thirdButton = 
      this.meuButtonsElements.find((btnEl) => btnEl.nativeElement.className === "btn-2");
      if (thirdButton) {
        thirdButton.nativeElement.style.backgroundColor = "green";
      }
      // this.meuButtonsElements.last.nativeElement.style.backgroundColor = "green";
    }
  }

  remover() {
    // Remove o último botão da lista
    this.buttonsList.pop();
    // para remover o primeiro botão, usar shift()
    // para remover um botão específico, usar splice(index, 1)
    // this.buttonsList.splice(1, 1);
  }
}
