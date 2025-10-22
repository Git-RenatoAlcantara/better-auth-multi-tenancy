
# Better Auth Multi-Tenancy

Este projeto é uma aplicação Next.js com autenticação avançada e suporte a multi-tenancy (multi-organizações), utilizando Prisma como ORM e uma arquitetura modular para fácil extensão.

## Funcionalidades
- Autenticação de usuários (login, registro, logout)
- Suporte a múltiplas organizações (multi-tenancy)
- Gerenciamento de membros e permissões por organização
- Dashboard para usuários e administradores
- UI moderna com componentes reutilizáveis

## Estrutura do Projeto
- `app/` — Páginas e rotas da aplicação (incluindo rotas protegidas e públicas)
- `components/` — Componentes React reutilizáveis (UI, formulários, tabelas, etc.)
- `db/` — Inicialização e configuração do banco de dados
- `lib/` — Funções utilitárias e lógica de autenticação
- `prisma/` — Schema do Prisma e migrações
- `server/` — Lógica de backend (ex: manipulação de usuários e organizações)

## Tecnologias Utilizadas
- [Next.js](https://nextjs.org/)
- [Prisma ORM](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Como rodar o projeto
1. Instale as dependências:
	```bash
	npm install
	```
2. Configure o banco de dados em `.env` e rode as migrações:
	```bash
	npx prisma migrate dev
	```
3. Inicie o servidor de desenvolvimento:
	```bash
	npm run dev
	```

## Scripts úteis
- `npm run dev` — Inicia o servidor Next.js em modo desenvolvimento
- `npx prisma migrate dev` — Aplica as migrações do banco de dados
- `npx prisma studio` — Abre o Prisma Studio para visualizar dados

## Estrutura de Multi-Tenancy
Cada organização possui seus próprios membros e permissões. O usuário pode alternar entre organizações e visualizar dados específicos de cada uma.

## Contribuição
Pull requests são bem-vindos! Para contribuir, abra uma issue ou envie um PR com melhorias ou correções.

## Licença
Este projeto está sob a licença MIT.
