CineIntel – Catálogo de Filmes
Este projeto é uma interface web desenvolvida em Next.js para consulta de filmes, consumindo a API pública do TMDB. O desenvolvimento faz parte do processo seletivo para estágio na Divisão de Inteligência Cibernética (DIC) da Polícia Civil do Estado do Pará.

🚀 Requisitos Implementados
Conforme solicitado no edital para a modalidade Front-end:

Next.js: Framework principal utilizado para a construção da interface.

Consumo de API: Integração completa com a API do TMDB para listagem, busca e detalhes.

Layout Responsivo: Interface adaptável para diferentes tamanhos de tela utilizando o sistema de Grid do Material UI.

Material UI (MUI): Uso extensivo de componentes como Cards, Grids, Paginação, Buttons e Feedback visual (Loaders e Snakbars).

Componentes Reutilizáveis: Criação de componentes como MovieCard e ThemeRegistry para otimização do código.

Feedback Visual: Implementação de estados de carregamento e tratamento de erros com alertas ao usuário.

🛠️ Tecnologias Utilizadas
Next.js 15+ (App Router).

Material UI (MUI) para estilização e componentes.

Axios para requisições HTTP.

TypeScript para garantir a tipagem e segurança do código.

📦 Como Executar o Projeto
Clonar o repositório:

Bash
git clone https://github.com/seu-usuario/cine-intel.git
cd cine-intel
Configurar variáveis de ambiente: Crie um arquivo .env.local na raiz do projeto e adicione suas chaves do TMDB:

Snippet de código
NEXT_PUBLIC_TMDB_API_KEY=sua_chave_aqui
NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_TMDB_IMAGE_URL=https://image.tmdb.org/t/p/w500
Instalar dependências:

Bash
npm install
Iniciar o servidor de desenvolvimento:

Bash
npm run dev
Acesse: http://localhost:3000

📁 Estrutura de Pastas
src/app: Gerenciamento de rotas e páginas (Home e Detalhes).

src/components: Componentes reutilizáveis da interface.

src/services: Configuração da API e funções de busca de dados.

Desenvolvido por: [Seu Nome]

Prazo de entrega: 24/01/2026
