# 📦 Gerenciador de Produtos

Aplicação React TypeScript para gerenciar produtos com validação, state management global e testes automatizados.

## ✨ Funcionalidades

- ✅ Adicionar novos produtos com formulário validado
- ✅ Listar todos os produtos adicionados
- ✅ Remover produtos da lista
- ✅ Validação de dados com Zod
- ✅ State management com Zustand
- ✅ Testes unitários com Vitest

## 🛠️ Tecnologias

- **React 18** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool
- **Zustand** — State management global
- **React Hook Form** — Gerenciamento de formulários
- **Zod** — Validação de dados
- **Vitest** — Testes unitários

## 🚀 Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Rodar testes
npm run test

# Build pra produção
npm run build
```

## 📁 Estrutura do Projeto

src/
├── components/
│ ├── ProductForm.tsx # Formulário de novo produto
│ ├── ProductList.tsx # Lista de produtos
│ └── Cart.tsx # Carrinho (futuro)
├── store/
│ └── productStore.ts # Zustand store
├── utils/
│ ├── validation.ts # Schemas Zod
│ └── validation.test.ts # Testes
├── App.tsx # Componente principal
└── main.tsx


## 🧪 Testes

Todos os testes de validação passam:

```bash
npm run test
```

## 🌐 Deploy

Deploy automático no Vercel via Git push.

[Link da aplicação](https://seu-projeto.vercel.app)

## 📚 O que Aprendi

- Gerenciamento de estado global sem Context API
- Validação de formulários com schemas
- Testes unitários de lógica
- Deploy automático em produção
- TypeScript com React

---

Feito com 💜 durante o Curso React TypeScript - Fase 3