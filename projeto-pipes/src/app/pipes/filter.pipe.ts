import { Pipe } from '@angular/core';

//»»» Função auxiliar para converter status numérico em texto
// function statusToText(userStatus: number): string {
//   if (isNaN(userStatus) || userStatus <= 0 || userStatus > 2) {
//     return 'Desconhecido';
//   }
//   const statusUser: { [key: number]: string } = {
//     1: 'Ativo',
//     2: 'Inativo',
//   };
//   return statusUser[userStatus];
// }

@Pipe({
  name: 'filter',
})
export class FilterPipe {
  transform(items: any[] | null, searchText: string): any[] {
    // Verifica se a lista de itens é nula
    if(!items) {
      return [];
    }
    // Se a lista estiver vazia ou o texto de busca for vazio, retorna a lista original
    if (!items?.length || !searchText?.trim()) {
      return items || [];
    }
    // Normaliza o texto de busca para comparação (minúsculas e sem espaços extras)
    const normalizedSearch = searchText.toLowerCase().trim();

    return items.filter((item) => {
      if (!item) return false;
      //»»» O Object.values(item) obtém todos os valores das propriedades do objeto
      // return Object.values(item)
      //     .some(value =>
      //         value?.toString().toLowerCase().includes(normalizedSearch)
      //     );

      //»»» Filtra apenas pelo campo customerName
      const CORRESPONDE_AOS_CRITERIOS_DE_BUSCA = item.customerName
        ?.toString()
        .toLowerCase()
        .includes(normalizedSearch);

      return CORRESPONDE_AOS_CRITERIOS_DE_BUSCA;

      // const statusText = statusToText(item.customerStatus).toLowerCase();
      //»»» Busca exata para status, busca parcial para os outros campos
      // if (normalizedSearch === statusText) {
      //     return true;
      // }

      //»»» Filtra pelos campos customerName, customerStatus e operationDate
      // return [
      //     item.customerName?.toString().toLowerCase(),
      //     item.operationDate?.toString().toLowerCase()
      // ].some(value =>
      //     value?.toString().toLowerCase().includes(normalizedSearch)
      // );
    });
  }
}
