# Tarefas+ 📝

Tarefas+ é uma aplicação web desenvolvida com **Next.js** e **Firebase** que permite gerenciar tarefas de forma eficiente. Os usuários podem criar, editar e excluir tarefas, além de optar por compartilhá-las publicamente.

## Funcionalidades

- **Autenticação Segura**
  - Login e cadastro via **NextAuth** (Google Authentication).
- **Gerenciamento de Tarefas**
  - Criar, editar e excluir tarefas.
  - Salvar tarefas privadas ou públicas.
  - Compartilhamento de tarefas via link.
- **Banco de Dados Firebase Firestore**
  - Armazena as tarefas do usuário.
  - Lista apenas as tarefas associadas ao usuário logado.
- **Interface Responsiva**
  - Design adaptável para desktops, tablets e smartphones.

## Tecnologias Utilizadas

- **Next.js** para renderização do lado do servidor (SSR)
- **TypeScript** para tipagem segura
- **Firebase Firestore** para armazenamento de dados
- **NextAuth** para autenticação
- **CSS Modules** para estilização modular

## Estrutura do Projeto

- **`pages`** → Estrutura do Next.js com as páginas principais
  - `index.tsx` → Página inicial
  - `dashboard.tsx` → Página do usuário logado
  - `task/[id].tsx` → Página individual de cada tarefa
- **`components`** → Componentes reutilizáveis
  - `Textarea.tsx` → Componente customizado de texto
- **`services/firebaseConnection.ts`** → Conexão com o Firebase Firestore
- **`styles`** → CSS Modules para estilização

## Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/tarefas-plus.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd tarefas-plus
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure o Firebase e NextAuth:
   - **Crie um arquivo `.env.local`** com as credenciais do Firebase e Google Auth:
     ```plaintext
     NEXT_PUBLIC_FIREBASE_API_KEY=xxx
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
     NEXT_PUBLIC_FIREBASE_APP_ID=xxx
     NEXTAUTH_SECRET=xxx
     NEXTAUTH_URL=http://localhost:3000
     ```
5. Execute a aplicação:
   ```bash
   npm run dev
   ```
6. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## Estrutura de Diretórios

```plaintext
src/
├── components/
│   ├── Textarea.tsx
├── pages/
│   ├── index.tsx
│   ├── dashboard.tsx
│   ├── task/[id].tsx
├── services/
│   ├── firebaseConnection.ts
├── styles/
│   ├── styles.module.css
├── _app.tsx
├── _document.tsx
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Melhorias Futuras

- Implementação de categorias para organização de tarefas.
- Notificações para lembretes de tarefas.
- Exportação de tarefas para PDF ou CSV.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido por Yuri Teodoro**
