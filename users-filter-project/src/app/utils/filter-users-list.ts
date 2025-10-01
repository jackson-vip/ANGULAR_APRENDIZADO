import { IFilterOptions } from "../interfaces/filter/filter-options.interface";
import { IUser } from "../interfaces/user/user.interface";

// Função para filtrar a lista de usuários com base nas opções fornecidas
const filterUsersList = ( users: IUser[], filterOptions: IFilterOptions ): IUser[] => {
    const filterStart = filterOptions.startDate ? new Date(filterOptions.startDate) : null;
    const filterEnd = filterOptions.endDate ? new Date(filterOptions.endDate) : null;
    const filterName = filterOptions.name?.toLowerCase() || '';

    return users.filter(user => {
      const userName = user.nome.toLowerCase();
      const userDate = new Date(user.dataCadastro);

      if (filterName && !userName.includes(filterName)) return false;
      if (filterOptions.status !== undefined && user.ativo !== filterOptions.status) return false;
      if (filterStart && userDate < filterStart) return false;
      if (filterEnd && userDate > filterEnd) return false;

      return true;
    });
};

// Exportando a função para ser usada em outros arquivos
export { filterUsersList };