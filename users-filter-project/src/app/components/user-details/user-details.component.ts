import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {

  /** Partial<IUser> permite que todas as propriedades
   * do IUser sejam opcionais, facilitando a passagem
   * de dados para o componente. Nos casos de objeto 
   * aninhado, como 'endereco', usamos o operador
   * de encadeamento opcional (?.) no template para
   * acessar as propriedades de forma segura. Isso
   * evita erros caso 'endereco' seja undefined.
   * 
   * Temos uma outra forma de fazer isso:
   * user: IUser = IUser = {} as IUser; 
   * Aqui, estamos dizendo ao TypeScript para tratar
   * o objeto vazio como um IUser, mas isso pode
   * levar a erros em tempo de execução se não
   * garantirmos que todas as propriedades necessárias
   * estejam presentes. Nos casos de objeto aninhado,
   * como 'endereco', ainda precisaríamos usar o operador
   * de encadeamento opcional (?.) no template para
   * evitar erros.
   * 
   * A escolha entre Partial<IUser> e IUser = {} as IUser
   * depende do contexto e dos requisitos específicos
   * do seu aplicativo. Se você espera que o objeto
   * possa estar incompleto, Partial<IUser> é a escolha
   * mais segura. Se você tem certeza de que todas as
   * propriedades estarão presentes, IUser = {} as IUser
   * pode ser mais direto.
   */

  // Decorador Input para receber dados do componente pai
  @Input({ required: true })
  user: Partial<IUser> = {};
  
  
}
