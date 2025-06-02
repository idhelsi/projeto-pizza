# 🍕 Projeto Pizzaria

## Descrição do Projeto

Este é um projeto de uma aplicação web de pizzaria desenvolvida com Next.js, utilizando tecnologias modernas de desenvolvimento web.

## 🚀 Tecnologias Utilizadas

- **Frontend**: 
  - Next.js 15
  - React 19
  - Tailwind CSS
  - Shadcn/ui
  - Zustand (Gerenciamento de Estado)

- **Backend**:
  - Prisma ORM
  - PostgreSQL
  - Stripe (Pagamentos)
  - TypeScript

- **Autenticação**:
  - Cookies
  - JWT

## 📋 Funcionalidades

- Listagem de pizzas
- Carrinho de compras
- Autenticação de usuários
- Processamento de pagamentos com Stripe
- Gerenciamento de pedidos

## 🔧 Configuração do Ambiente

### Pré-requisitos

- Node.js (versão 20 ou superior)
- PostgreSQL
- Conta no Stripe

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/projeto-pizza.git
cd projeto-pizza
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
Crie um arquivo `.env` baseado no `exemple.env`:
```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
STRIPE_WEBHOOK_KEY="sua_chave_webhook"
STRIPE_SECRET_KEY="sua_chave_secreta"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="sua_chave_publica"
```

4. Prepare o banco de dados
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

## 🖥️ Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila o projeto para produção
- `npm start`: Inicia o servidor de produção

## 🔒 Configurações de Segurança

- Autenticação via JWT
- Senhas criptografadas com bcrypt
- Integração segura com Stripe

## 📦 Estrutura do Projeto

```
projeto-pizza/
├── prisma/             # Configurações do Prisma ORM
├── public/             # Arquivos estáticos
├── src/
│   ├── app/            # Rotas e páginas do Next.js
│   ├── components/     # Componentes React
│   ├── lib/            # Utilitários e configurações
│   ├── services/       # Lógica de negócio
│   └── stores/         # Gerenciamento de estado com Zustand
└── README.md
```

## 🌐 Integração com Serviços Externos

- **Stripe**: Processamento de pagamentos
- **PostgreSQL**: Banco de dados relacional

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça um push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 🚧 Status do Projeto

🟢 Em desenvolvimento
