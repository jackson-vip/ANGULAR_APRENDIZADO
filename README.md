<div align="center">

  <img src="https://angular.io/assets/images/logos/angular/angular.png" width="100"/>

  <h1>ANGULAR_APRENDIZADO</h1>

</div>

## 📚 Resumo do que foi estudado até agora

### 🔧 Criação de Componentes e Módulos

Comandos essenciais para geração de componentes e módulos:

```bash
# Gerar um novo componente
ng generate component nome-do-componente

# Gerar um novo componente sem arquivos de teste
ng generate component nome-do-componente --skip-tests

# Gerar um novo módulo
ng generate module nome-do-modulo
```

### 🎯 Seletores de Componentes

Técnicas para personalização e alcance de estilos:

1. **`::ng-deep`** - Permite que estilos de um componente afetem elementos filhos
2. **`:host`** - Aplica estilos ao elemento hospedeiro do componente

### 🔒 View Encapsulation

Estratégias de encapsulamento de estilos no Angular:

| Tipo | Descrição |
|------|-----------|
| **Emulated** (Padrão) | Simula o Shadow DOM usando atributos únicos |
| **None** | Sem encapsulamento - estilos são globais |
| **ShadowDom** | Usa Shadow DOM nativo do navegador |

```typescript
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // Padrão
})
```

### 🌐 Manipulação do DOM

Propriedades essenciais para interação com elementos HTML:

#### 📝 Conteúdo e Texto

| Propriedade | Descrição | Exemplo |
|-------------|-----------|---------|
| **`innerHTML`** | Define ou obtém o conteúdo HTML de um elemento | `element.innerHTML = '<span>Novo HTML</span>'` |
| **`textContent`** | Define ou obtém apenas o texto de um elemento | `element.textContent = 'Apenas texto'` |

#### 🎨 Estilos e Classes

| Propriedade | Descrição | Exemplo |
|-------------|-----------|---------|
| **`classList`** | Manipula classes CSS de um elemento | `element.classList.add('active')` |
| **`style`** | Manipula estilos CSS inline de um elemento | `element.style.color = 'red'` |

#### 🔍 Navegação e Busca

| Propriedade | Descrição | Exemplo |
|-------------|-----------|---------|
| **`children`** | Retorna coleção dos elementos filhos | `element.children[0]` |
| **`parentElement`** | Retorna o elemento pai | `element.parentElement` |
| **`querySelector`** | Busca o primeiro elemento por seletor CSS | `element.querySelector('.classe')` |
| **`querySelectorAll`** | Busca todos os elementos por seletor CSS | `element.querySelectorAll('div')` |
| **`attributes`** | Acessa e manipula atributos do elemento | `element.attributes.getNamedItem('id')` |

### 🧩 Arquitetura Angular

Conceitos fundamentais da estrutura do Angular:

| Conceito | Descrição | Características |
|----------|-----------|-----------------|
| **🎯 Componentes** | Blocos reutilizáveis que encapsulam lógica, template e estilos | Possui decorator `@Component` / Controla uma parte da tela (view) / Combina HTML, CSS e TypeScript |
| **📦 Módulos** | Agrupam componentes, diretivas, pipes e serviços relacionados | Decorator `@NgModule` / Organizam a aplicação / Definem escopo de funcionalidades |

### 📜 Diretivas

Diretivas estruturais para manipulação do DOM ( Essa sintaxe será depreciada em breve ):

| Diretiva | Descrição |
|----------|-----------|
| **`*ngIf`** | Condicionalmente adiciona ou remove elementos do DOM |
| **`*ngFor`** | Itera sobre uma coleção e renderiza um template para cada item |

Diretivas estruturais para versão angular 17+ (sem o asterisco):

| Diretiva | Descrição | Exemplo |
|----------|-----------|---------|
| **`@If()`** | Condicionalmente adiciona ou remove elementos do DOM | `<div @If="condicao">Conteúdo</div>` |
| **`@For()`** | Itera sobre uma coleção e renderiza um template para cada item | `<div @For="let item of itens">{{ item }}</div>` |

### 🔄 Data Binding

Técnicas para vinculação de dados entre o componente e a view:

| Tipo de Binding | Descrição | Sintaxe |
|-----------------|-----------|--------|
| **Interpolation** | Vincula dados do componente para a view | `{{ propriedade }}` |
| **Property Binding** | Vincula propriedades do DOM a propriedades do componente | `[propriedade]="valor"` |
| **Event Binding** | Vincula eventos do DOM a métodos do componente | `(evento)="metodo()"` |
| **Two-Way Binding** | Vincula dados em ambas as direções entre componente e view | `[(ngModel)]="propriedade"` |
| **Css Class Binding** | Adiciona ou remove classes CSS dinamicamente | `[class.classe]="condicao"` |
| **Style Binding** | Aplica estilos CSS inline dinamicamente | `[style.propriedade]="valor"` |

### Decorators Importantes

| Decorator | Descrição | Uso Comum |
|-----------|-----------|------------|
| **`@Input`** | Permite que um componente receba dados de seu componente pai | Passar dados para componentes filhos |
| **`@Output`** | Permite que um componente envie eventos para seu componente pai | Emitir eventos para componentes pais |
