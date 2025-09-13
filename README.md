# 🏥 Projeto Final Bloco 03 — Farmácia (React + TypeScript + Vite)

Este projeto é o **frontend de um sistema de comércio eletrônico para uma farmácia**, desenvolvido com **React**, **TypeScript** e **Vite**, consumindo um backend local para gerenciar categorias de produtos.

---

## Funcionalidades Implementadas

### Etapa 1 — Componentes básicos
- Navbar, Home e Footer
- Estrutura de layout com **Tailwind CSS**
- Validação de alinhamento e posicionamento usando **FlexBox**

### Etapa 2 — Rotas da aplicação
- Configuração do **React Router DOM**
- Links de navegação no Navbar
- Teste de navegação entre páginas

### Etapa 3 — CRUD Categoria
- Model **Categoria** com os atributos `id`, `nome` e `descricao`
- Service **CategoriaService** utilizando **Axios**
- Componentes:
  - `ListaCategorias` — exibe todas as categorias
  - `CardCategoria` — exibe cada categoria individualmente
  - `FormCategoria` — cadastra ou atualiza uma categoria
- Funcionalidades: **GET, POST, PUT e DELETE** funcionando com backend local
- Teste de integração entre frontend e backend na porta 4000

---

## Tecnologias e Bibliotecas
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [React Spinners](https://www.npmjs.com/packag)

## Estrutura do Projeto

src/
├── assets/ # Imagens e ícones
├── components/ # Componentes reutilizáveis (Navbar, Footer, Cards)
├── models/ # Interfaces de dados (ex: Categoria.ts)
├── pages/ # Páginas da aplicação
├── services/ # Serviços para consumir API (Axios)
├── App.tsx # Componente principal com rotas
└── main.tsx # Entrada do Vite
backend_farmacia/
└── server.js # Backend local para CRUD de categorias


---

## Como Rodar o Projeto

### 1️⃣ Rodar o Backend
No terminal, entre na pasta do backend (`backend_farmacia`) e rode:

```bash
node server.js

O backend será iniciado na porta 4000.

### 2️⃣ Rodar o Frontend

Em outro terminal, entre na pasta do frontend (projeto_final_bloco_03) e rode:

```bash
npm install
npm run dev

O frontend será iniciado pelo Vite em http://localhost:5173.

O backend precisa estar ativo para que o CRUD funcione corretamente.

✅ Observações

O projeto utiliza estado em React e hooks para atualizar a interface após operações no backend.

Ícones são fornecidos pelo Phosphor Icons.

Estilização responsiva é feita com Tailwind CSS.


