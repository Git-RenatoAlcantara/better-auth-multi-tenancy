
# Better Auth Multi-Tenancy

> Sistema de autenticação avançada com suporte a múltiplas organizações, desenvolvido em Next.js, Prisma e Tailwind CSS.

---

## 🚀 Visão Geral
Este projeto implementa uma solução moderna de autenticação e multi-tenancy, permitindo que usuários pertençam a diferentes organizações, cada uma com membros, permissões e dados isolados. Ideal para SaaS, plataformas colaborativas e sistemas empresariais.

---

## 🧩 Funcionalidades
- Autenticação segura (login, registro, logout)
- Alternância entre múltiplas organizações
- Gerenciamento de membros e permissões por organização
- Dashboard dinâmico para usuários e administradores
- UI responsiva e moderna com componentes reutilizáveis
- Arquitetura modular e escalável

---

## 🗂️ Estrutura do Projeto

```text
├── app/                # Páginas e rotas (inclui rotas protegidas)
├── components/         # Componentes React reutilizáveis
├── db/                 # Configuração do banco de dados
├── lib/                # Funções utilitárias e lógica de autenticação
├── prisma/             # Schema do Prisma e migrações
├── server/             # Lógica backend (usuários, organizações)
```

---

## 🛠️ Tecnologias Utilizadas
- [Next.js](https://nextjs.org/)
- [Prisma ORM](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## ⚡ Instalação e Uso

1. **Clone o repositório:**
	```bash
	git clone https://github.com/Git-RenatoAlcantara/better-auth-multi-tenancy.git
	cd better-auth-multi-tenancy
	```
2. **Instale as dependências:**
	```bash
	npm install
	```
3. **Configure o banco de dados:**
	- Crie um arquivo `.env` com sua string de conexão.
	- Rode as migrações:
	  ```bash
	  npx prisma migrate dev
	  ```
4. **Inicie o servidor de desenvolvimento:**
	```bash
	npm run dev
	```

---

## 🧪 Scripts Úteis
- `npm run dev` — Inicia o servidor Next.js em modo desenvolvimento
- `npx prisma migrate dev` — Aplica as migrações do banco de dados
- `npx prisma studio` — Abre o Prisma Studio para visualizar e editar dados

---

## 🏢 Multi-Tenancy
Cada organização possui membros, permissões e dados isolados. Usuários podem alternar entre organizações usando o componente de troca de organização. Permissões são gerenciadas por organização, garantindo segurança e separação de dados.

**Exemplo de alternância de organização:**
```tsx
import { OrganizationSwitcher } from "@/components/organization-switcher";

export default function Dashboard() {
  return <OrganizationSwitcher />;
}
```

---

## 🔒 Autenticação
O sistema utiliza autenticação baseada em sessão, com rotas protegidas e componentes para login, registro e logout.

**Exemplo de uso do componente de login:**
```tsx
import { SignIn } from "@/components/sign-in";

export default function LoginPage() {
  return <SignIn />;
}
```

---

## 📚 Links Úteis
- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Prisma](https://www.prisma.io/docs)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)

---

## 🤝 Contribuição
Pull requests são bem-vindos! Para contribuir:
1. Abra uma issue para discutir melhorias ou correções.
2. Faça um fork do projeto.
3. Crie uma branch com sua feature/fix.
4. Envie um PR detalhado.

---

## 📄 Licença
Este projeto está sob a licença MIT.
