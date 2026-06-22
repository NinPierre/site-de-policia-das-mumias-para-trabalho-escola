# 🏛️ Departamento de Polícia - O Anel Perdido

> Um site temático imersivo baseado no filme **"As Múmias e o Anel Perdido"** (2023). Explore arquivos policiais, investigações e mistérios da Divisão de Crime das Múmias.

[![Status](https://img.shields.io/badge/status-ativo-brightgreen)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Built with React](https://img.shields.io/badge/built%20with-React-61dafb)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## ✨ Destaques

- 🎭 **Design Imersivo**: Interface temática que simula um arquivo policial autêntico
- 📱 **Responsivo**: Funciona perfeitamente em desktop, tablet e celular
- ⚡ **Rápido**: Construído com Vite para máxima performance
- 🎨 **Moderno**: UI componentes reutilizáveis e bem estilizados
- ♿ **Acessível**: Seguindo padrões WCAG para melhor experiência

---

## 🚀 Como Começar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18+)
- [Bun](https://bun.sh/) ou npm/yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/site-mumias-v2.git
cd site-mumias-v2

# Instale as dependências
bun install
# ou com npm
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
bun run dev
# ou
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Gere o build otimizado
bun run build
# ou
npm run build

# Visualize a build localmente
bun run preview
```

---

## 📂 Estrutura do Projeto

```
src/
├── components/
│   └── ui/                    # Componentes UI reutilizáveis
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ... (+ 30 componentes)
├── routes/
│   ├── __root.tsx            # Layout raiz
│   ├── index.tsx             # Página principal
│   └── README.md
├── hooks/
│   └── use-mobile.tsx        # Hooks customizados
├── lib/
│   ├── utils.ts              # Funções utilitárias
│   ├── error-capture.ts
│   └── lovable-error-reporting.ts
├── assets/
│   ├── anel.jpg
│   ├── suspeito-real.png
│   └── badge.png
├── router.tsx                # Configuração do router
├── styles.css                # Estilos globais
└── vite.config.ts            # Configuração do Vite
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| [React](https://react.dev) | 18+ | Biblioteca UI |
| [TypeScript](https://www.typescriptlang.org/) | 5+ | Tipagem estática |
| [TanStack Router](https://tanstack.com/router) | 1.x | Roteamento moderno |
| [Vite](https://vitejs.dev/) | 5+ | Build tool rápido |
| [Tailwind CSS](https://tailwindcss.com/) | 3+ | Framework CSS utility-first |
| [React Query](https://tanstack.com/query) | 5+ | Gerenciamento de estado de servidor |
| [Shadcn/ui](https://ui.shadcn.com/) | - | Componentes primitivos |

---

## 📖 Funcionalidades Principais

### Página Principal
- Exibição temática de casos policiais
- Galeria de evidências
- Perfis de suspeitos
- Sistema de badges e distintivos

### Interface
- Navegação intuitiva
- Efeitos visuais temáticos (fita adesiva, carimbos)
- Modo responsivo com breakpoints otimizados
- Tratamento robusto de erros

---

## 🎯 Scripts Disponíveis

```bash
bun run dev              # Inicia servidor de desenvolvimento
bun run build            # Cria build para produção
bun run preview          # Visualiza build localmente
bun run type-check       # Verifica tipos TypeScript
bun run lint             # Executa eslint
```

---

## 📸 Captura de Tela

![Página Principal](src/assets/badge.png)

*Interface temática do Departamento de Polícia*

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. **Faça um fork** do projeto
2. **Crie uma branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. **Commit** suas mudanças (`git commit -am 'Adiciona MinhaFeature'`)
4. **Push** para a branch (`git push origin feature/MinhaFeature`)
5. **Abra um Pull Request**

### Padrões de Código
- Use TypeScript para type-safety
- Siga as convenções ESLint
- Mantenha o código limpo com Prettier
- Adicione comentários quando necessário

---

## 📝 Licença

Este projeto está sob a licença **MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 📧 Contato & Suporte

Tem dúvidas ou sugestões?

- 📌 [Issues](https://github.com/seu-usuario/site-mumias-v2/issues) - Para reportar bugs
- 💬 [Discussions](https://github.com/seu-usuario/site-mumias-v2/discussions) - Para dúvidas e ideias

---

## 🎬 Referência

**Filme**: As Múmias e o Anel Perdido (2023)

Este projeto é um site temático e inspirado no filme citado acima.

---

<div align="center">

**[⬆ voltar ao topo](#-departamento-de-polícia---o-anel-perdido)**

Made with ❤️ by você

</div>
