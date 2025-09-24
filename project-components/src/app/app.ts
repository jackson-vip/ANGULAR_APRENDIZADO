import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project-components');

  planType = 'Simples';
  planPrice = 100;


  handlePlanType(event: KeyboardEvent, value: string) {

    /* Temos os Métodos :
      1. toUpperCase() -> Deixa todas as letras maiúsculas
      2. toLowerCase() -> Deixa todas as letras minúsculas
      3. trim() -> Remove os espaços em branco do início e do fim da string
      4. slice(inicio, fim) -> Extrai uma parte da string e retorna como uma nova string
      5. replace(valorAntigo, valorNovo) -> Substitui um valor antigo por um novo na string
      6. split(separador) -> Divide a string em um array de substrings com base no separador fornecido
      7. includes(valor) -> Verifica se a string contém o valor especificado, retornando true ou false
      8. charAt(indice) -> Retorna o caractere na posição especificada (índice começa em 0)
      9. indexOf(valor) -> Retorna o índice da primeira ocorrência do valor especificado, ou -1 se não encontrado
      10. length -> Retorna o comprimento da string
      11. concat(string1, string2, ...) -> Concatena duas ou mais strings e retorna a nova string
      12. substring(inicio, fim) -> Retorna uma parte da string entre os índices de início e fim
      13. toString() -> Converte um valor em uma string
      14. valueOf() -> Retorna o valor primitivo de uma string
      15. match(expressãoRegular) -> Retorna um array com as correspondências encontradas com a expressão regular
      16. search(expressãoRegular) -> Retorna o índice da primeira correspondência com a expressão regular, ou -1 se não encontrado
      17. padStart(tamanho, caractere) -> Adiciona caracteres no início da string até atingir o tamanho especificado
      18. padEnd(tamanho, caractere) -> Adiciona caracteres no final da string até atingir o tamanho especificado
      19. repeat(n) -> Repete a string n vezes e retorna a nova string Ex: 'abc'.repeat(3) -> 'abcabcabc'
      20. toLocaleLowerCase() -> Converte a string para minúsculas, considerando as regras de localidade
     */

    // this.planType = value.toUpperCase();
    this.planType = value;
  }
}
