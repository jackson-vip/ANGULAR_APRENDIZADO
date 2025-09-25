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

### 📚 Decorators Importantes

| Decorator | Descrição | Uso Comum |
|-----------|-----------|------------|
| **`@Input`** | Permite que um componente receba dados de seu componente pai | Passar dados para componentes filhos |
| **`@Output`** | Permite que um componente envie eventos para seu componente pai | Emitir eventos para componentes pais |

### 🎨 Styling Dinâmico - ngStyle e ngClass

Técnicas avançadas para manipulação dinâmica de estilos e classes CSS:

#### 🖌️ NgStyle - Manipulação de Estilos

| Abordagem | Sintaxe | Quando Usar | Performance |
|-----------|---------|-------------|-------------|
| **[ngStyle] objeto inline** | `[ngStyle]="{'color': cor, 'font-size': tamanho}"` | Múltiplos estilos condicionais | ⭐⭐⭐ Boa |
| **[style] individual** | `[style.color]="cor" [style.font-size.px]="tamanho"` | Propriedades específicas | ⭐⭐⭐⭐⭐ Excelente |
| **[style] string** | `[style]="'color: red; font-size: 16px;'"` | Estilos dinâmicos via string | ⭐⭐ Regular |
| **[ngStyle] objeto** | `[ngStyle]="stylesObject"` | Estilos complexos e reutilizáveis | ⭐⭐⭐ Boa |

#### 🏷️ NgClass - Manipulação de Classes

| Abordagem | Sintaxe | Quando Usar | Recomendação |
|-----------|---------|-------------|--------------|
| **[class.nome] individual** | `[class.active]="isActive"` | 1-2 classes simples | ✅ **RECOMENDADO** |
| **[ngClass] objeto** | `[ngClass]="{'active': isActive, 'disabled': !enabled}"` | 3+ classes condicionais | ✅ Para lógica complexa |
| **[ngClass] array** | `[ngClass]="['class1', 'class2']"` | Classes dinâmicas | ✅ Para arrays computados |
| **[ngClass] string** | `[ngClass]="'class1 class2'"` | Classes estáticas via binding | ⚠️ Use `class` comum |
| **[ngClass] método** | `[ngClass]="getClasses()"` | Lógica complexa no component | ✅ **MELHOR PRÁTICA** |

#### 🔍 Comparação de Performance

```typescript
// 🚀 MAIS RÁPIDO - Angular otimiza internamente
[class.active]="condition"

// 🐌 MAIS LENTO - Processa objeto inteiro a cada mudança
[ngClass]="{ 'active': condition }"
```

#### 💡 Melhores Práticas

| Cenário | Solução Recomendada | Exemplo |
|---------|-------------------|---------|
| **Classe única** | `[class.nome]` | `[class.active]="isActive"` |
| **2-3 classes relacionadas** | `[ngClass]` objeto | `[ngClass]="{'btn btn-primary': isPrimary}"` |
| **Lógica complexa** | `[ngClass]` método | `[ngClass]="getButtonClasses()"` |
| **Estilo único** | `[style.propriedade]` | `[style.color]="textColor"` |
| **Múltiplos estilos** | `[ngStyle]` objeto | `[ngStyle]="getStyles()"` |

#### ⚠️ Pontos Importantes

- **Change Detection**: NgStyle/NgClass fazem track de mudanças, objetos precisam ser reinstanciados
- **Performance**: Binding individual `[class.x]` e `[style.x]` são mais performáticos
- **Flexibilidade**: NgClass/NgStyle oferecem mais opções mas com overhead
- **Legibilidade**: Binding individual torna a intenção mais clara no template

## 🚀 Projetos Práticos

### 📁 Estrutura dos Estudos

| Projeto | Foco de Estudo | Status | Conceitos Aplicados |
|---------|----------------|--------|---------------------|
| **NgIf/** | Diretivas Condicionais | ✅ Concluído | `*ngIf`, `@if` (Angular 17+), renderização condicional |
| **NgFor/** | Diretivas de Repetição | ✅ Concluído | `*ngFor`, `@for` (Angular 17+), iteração de arrays |
| **two-way-data-binding/** | Vinculação Bidirecional | ✅ Concluído | `[(ngModel)]`, formulários, binding duplo |
| **NgStyle-e-NgClass/** | Styling Dinâmico | ✅ Concluído | `[ngStyle]`, `[ngClass]`, `[class]`, `[style]` |
| **project-components/** | Arquitetura de Componentes | ✅ Concluído | Comunicação entre componentes, módulos |
| **cards-project/** | Projeto Integrado | ✅ Em andamento | Aplicação prática de todos os conceitos |
| **Pipes/** | Criação de Pipes Customizados | ✅ Concluído | Pipes nativos e personalizados |

### 📈 Cronograma de Aprendizado

#### ✅ **Fase 1: Fundamentos (Concluída)**

- [x] Setup e CLI do Angular
- [x] Criação de componentes e módulos  
- [x] View Encapsulation e seletores
- [x] Manipulação do DOM
- [x] Arquitetura de componentes

#### ✅ **Fase 2: Diretivas e Binding (Concluída)**

- [x] Diretivas estruturais (`*ngIf`, `*ngFor`)
- [x] Nova sintaxe Angular 17+ (`@if`, `@for`)
- [x] Data Binding (Interpolation, Property, Event, Two-way)
- [x] Decorators `@Input` e `@Output`

#### ✅ **Fase 3: Styling Avançado (Concluída)**

- [x] NgStyle vs Style Binding
- [x] NgClass vs Class Binding
- [x] Comparações de performance
- [x] Melhores práticas de styling
- [x] Pipes nativos e customizados

#### 🔄 **Fase 4: Em Andamento**

- [ ] Formulários (Template-driven vs Reactive)
- [ ] Validações de formulário
- [ ] Services e Dependency Injection
- [ ] HTTP Client e APIs

#### 📋 **Fase 5: Planejada**

- [ ] Routing e navegação
- [ ] Guards e resolvers
- [ ] Observables e RxJS
- [ ] State Management

### 🎯 **Estatísticas do Aprendizado**

- **📚 Conceitos dominados:** 15+
- **🏗️ Projetos criados:** 6
- **⏱️ Tempo de estudo:** ~3 semanas
- **📈 Progresso geral:** 60% dos fundamentos
- **🎖️ Nível atual:** Intermediário iniciante

### 🏆 **Conquistas Recentes**

- ✅ Domínio completo de diretivas estruturais
- ✅ Entendimento profundo de data binding
- ✅ Expertise em styling dinâmico
- ✅ Arquitetura modular bem estruturada
- ✅ Aplicação das melhores práticas do Angular

### 🎯 **Próximos Objetivos**

1. **Formulários Reativos** - Implementar validações complexas
2. **Services** - Criação de serviços reutilizáveis  
3. **HTTP** - Consumo de APIs REST
4. **Routing** - Sistema de navegação completo
