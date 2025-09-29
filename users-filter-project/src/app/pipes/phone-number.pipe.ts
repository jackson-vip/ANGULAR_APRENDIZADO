import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber',
})
export class PhoneNumberPipe implements PipeTransform {
  /**
   * Transforma um número de telefone em formato brasileiro
   * @param value - O número de telefone como string
   * @returns O número formatado
   *
   * Exemplos:
   * - Input: "11999887766" -> Output: "(11) 99988-7766"
   * - Input: "1133334444" -> Output: "(11) 3333-4444"
   */
  transform(value: string): string {
    // Remove todos os caracteres que não são números
    const cleanedValue = value.replace(/\D/g, '');

    const INVALID_PHONE =
      !value ||
      cleanedValue.length > 11 ||
      cleanedValue.length < 10 ||
      isNaN(Number(cleanedValue));

    if (INVALID_PHONE) {
      return 'Telefone inválido ou inexistente'; // Retorna o valor original se o número for inválido
    }

    const CELLPHONE = cleanedValue.length === 11;

    // Celular com 11 dígitos: (XX) 9XXXX-XXXX
    if (CELLPHONE) {
      return cleanedValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
        // Telefone fixo com 10 dígitos: (XX) XXXX-XXXX
        return cleanedValue.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
  }
}
