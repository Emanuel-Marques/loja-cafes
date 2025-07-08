# ☕ Loja de Cafés - Coffeeteria

Uma aplicação web moderna para explorar e conhecer diferentes tipos de café. Desenvolvida com React, TypeScript e Vite para oferecer uma experiência rápida e interativa.

## 📋 Sobre o Projeto

A **Coffeeteria** é uma aplicação web que apresenta um catálogo de diferentes tipos de café, permitindo aos usuários:

- **Navegação intuitiva**: Página inicial com botão para acessar o catálogo
- **Catálogo de cafés**: Lista completa de diferentes tipos de café disponíveis
- **Detalhes do produto**: Página individual para cada tipo de café com:
  - Descrição detalhada
  - Lista de ingredientes
  - Imagem ilustrativa
- **Navegação fluida**: Roteamento com React Router DOM
- **Design responsivo**: Interface adaptável para diferentes dispositivos

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para construção da interface
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Ferramenta de build rápida e moderna
- **React Router DOM** - Roteamento para aplicações React
- **CSS3** - Estilização personalizada
- **Docker** - Containerização da aplicação

## 📂 Estrutura do Projeto

```
loja-cafes/
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── layout/       # Layout principal
│   │   └── nav-bar/      # Barra de navegação
│   ├── pages/            # Páginas da aplicação
│   │   ├── home/         # Página inicial
│   │   ├── coffeeList/   # Lista de cafés
│   │   ├── coffee/       # Detalhes do café
│   │   └── not-found/    # Página 404
│   ├── assets/           # Recursos (imagens, ícones)
│   ├── data.ts           # Dados dos cafés
│   └── App.tsx           # Componente principal
├── docker-compose.yml    # Configuração Docker Compose
├── Dockerfile           # Configuração Docker
└── package.json         # Dependências e scripts
```

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Docker (opcional)

### Opção 1: Executar Localmente

1. **Clone o repositório:**

```bash
git clone <url-do-repositorio>
cd loja-cafes
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento:**

```bash
npm run dev
```

4. **Acesse a aplicação:**
   - Abra o navegador e acesse: `http://localhost:5173`

### Opção 2: Executar com Docker

1. **Clone o repositório:**

```bash
git clone <url-do-repositorio>
cd loja-cafes
```

2. **Execute com Docker Compose:**

```bash
docker-compose up
```

3. **Acesse a aplicação:**
   - Abra o navegador e acesse: `http://localhost:3000`

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run lint` - Executa o linter para verificar código
- `npm run preview` - Visualiza a versão de produção

## 🌐 Funcionalidades

### Página Initial (Home)

- Apresenta o nome da cafeteria
- Botão para navegar para o catálogo de cafés

### Lista de Cafés

- Exibe todos os tipos de café disponíveis
- Navegação para página individual de cada café

### Detalhes do Café

- Informações completas sobre cada tipo de café
- Descrição, ingredientes e imagem
- Navegação através de parâmetros de URL

## 🔧 Personalização

Os dados dos cafés estão localizados em `src/data.ts` e podem ser facilmente modificados para adicionar novos tipos de café ou editar informações existentes.

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona bem em:

- Desktops
- Tablets
- Smartphones
