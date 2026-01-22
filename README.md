# 🎬 CineIntel – Catálogo de Filmes

O **CineIntel** é uma aplicação web desenvolvida com **Next.js**, voltada para a consulta de filmes por meio do consumo da API pública do **The Movie Database (TMDB)**.

Este projeto foi desenvolvido como parte do **processo seletivo para estágio** na **Divisão de Inteligência Cibernética (DIC)** da **Polícia Civil do Estado do Pará**, na modalidade **Front-end**.

---

## 🚀 Funcionalidades e Requisitos Implementados

De acordo com os critérios estabelecidos no edital, o projeto contempla:

* **Next.js**
  Framework principal utilizado para a construção da aplicação, com uso do **App Router**.

* **Consumo de API**
  Integração completa com a API do TMDB, permitindo:

  * Listagem de filmes
  * Busca por títulos
  * Visualização de detalhes individuais

* **Layout Responsivo**
  Interface adaptável a diferentes tamanhos de tela, utilizando o sistema de **Grid do Material UI**.

* **Material UI (MUI)**
  Utilização de componentes como:

  * Cards
  * Grid
  * Paginação
  * Botões
  * Feedback visual (Loaders e Snackbars)

* **Componentes Reutilizáveis**
  Criação de componentes como `MovieCard` e `ThemeRegistry`, promovendo organização, reutilização e escalabilidade do código.

* **Feedback Visual ao Usuário**
  Implementação de estados de carregamento e tratamento de erros, garantindo melhor experiência de uso.

---

## 🛠️ Tecnologias Utilizadas

* **Next.js 15+** (App Router)
* **TypeScript**
* **Material UI (MUI)**
* **Axios** (requisições HTTP)
* **API TMDB**

---

## 📦 Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/yagorodrigues-bit/cine-intel.git
cd cine-intel
```

### 2️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto e adicione:

```env
NEXT_PUBLIC_TMDB_API_KEY=sua_chave_aqui
NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_TMDB_IMAGE_URL=https://image.tmdb.org/t/p/w500
```

### 3️⃣ Instalar dependências

```bash
npm install
```

### 4️⃣ Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Acesse no navegador:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📁 Estrutura de Pastas

```
src/
 ├── app/
 │   ├── movie/
 │   │   └── [id]/
 │   │       └── page.tsx     # Página de detalhes do filme (rota dinâmica)
 │   ├── favicon.ico          # Ícone da aplicação
 │   ├── globals.css          # Estilos globais
 │   ├── layout.tsx           # Layout principal da aplicação
 │   └── page.tsx             # Página inicial (listagem e busca de filmes)
 │
 ├── components/
 │   ├── MovieCard.tsx        # Componente reutilizável para exibição dos filmes
 │   ├── SearchBar.tsx        # Barra de busca de filmes
 │   └── ThemeRegistry.tsx    # Configuração e gerenciamento do tema (MUI)
 │
 └── services/
     └── tmdb.ts              # Configuração da API do TMDB e funções de requisição
```

---

## 👨‍💻 Desenvolvedor

**Yago Cabral**
Estudante de Engenharia de Software

📅 **Prazo de entrega:** 24/01/2026
