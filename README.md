<div align="center">

# 🔒 LGPD Implementada

### One-Pager de Compliance e Proteção de Dados

[![Deploy Status](https://img.shields.io/badge/deploy-vercel-black?logo=vercel)](https://github.com/dmenezes007/lgpd-implementada)
[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## 📋 Sobre o Projeto

**LGPD Implementada** é uma aplicação web one-pager desenvolvida para apresentar os principais aspectos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), com foco em:

- 🛡️ **Princípios** - 10 fundamentos da LGPD
- 👥 **Direitos** - Direitos dos titulares de dados
- 🔐 **Segurança** - Medidas de proteção de dados
- ✅ **Compliance** - Programa de conformidade
- ⚠️ **Incidentes** - Gestão de incidentes de segurança

### ✨ Características

- Design moderno com Bento Grid Layout
- Interface responsiva e intuitiva
- Navegação por abas lateral (Home, Princípios, Direitos, Segurança, Compliance, Incidentes)
- Métricas e KPIs de compliance
- Ícones Lucide React
- Conteúdo educacional sobre LGPD

---

## 🚀 Tecnologias

- **React 19.2** - Biblioteca UI moderna
- **TypeScript 5.8** - Tipagem estática
- **Vite 6.2** - Build tool ultra-rápido
- **Lucide React** - Ícones modernos
- **Tailwind CSS** - Estilização utility-first

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/dmenezes007/lgpd-implementada.git
cd lgpd-implementada
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

---

## 🛠️ Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Preview do build de produção
npm run lint     # Verifica tipos TypeScript
```

---

## 📁 Estrutura do Projeto

```
lgpd-implementada/
├── components/
│   ├── views/
│   │   ├── HomeView.tsx          # Página inicial
│   │   ├── PrincipiosView.tsx    # 10 Princípios da LGPD
│   │   ├── DireitosView.tsx      # Direitos dos Titulares
│   │   ├── SegurancaView.tsx     # Segurança da Informação
│   │   ├── ComplianceView.tsx    # Programa de Compliance
│   │   └── IncidentesView.tsx    # Gestão de Incidentes
│   ├── Sidebar.tsx               # Navegação lateral
│   └── Footer.tsx                # Rodapé
├── App.tsx                       # Componente raiz
├── index.tsx                     # Entry point
├── index.css                     # Estilos globais (Tailwind)
├── index.html                    # HTML base
├── package.json                  # Dependências e scripts
├── tsconfig.json                 # Configuração TypeScript
├── vite.config.ts                # Configuração Vite
├── tailwind.config.js            # Configuração Tailwind
└── postcss.config.js             # Configuração PostCSS
```

---

## 🎨 Design System

### Paleta de Cores

- **Indigo** - Cor primária (títulos, botões, destaques)
- **Slate** - Cores neutras (textos, backgrounds)
- **Green** - Métricas positivas, conformidade
- **Rose** - Alertas, riscos, incidentes
- **Amber** - Avisos, atenção

### Componentes

- Cards com `rounded-3xl` e `shadow-sm hover:shadow-md`
- Tipografia responsiva (mobile-first)
- Grid Bento Layout
- Ícones Lucide React (24-32px)

---

## 📚 Conteúdo LGPD

### 10 Princípios (Art. 6º)

1. **Finalidade** - Propósitos legítimos e específicos
2. **Adequação** - Compatibilidade com finalidades
3. **Necessidade** - Limitação ao mínimo necessário
4. **Livre Acesso** - Consulta facilitada e gratuita
5. **Qualidade dos Dados** - Exatidão e atualização
6. **Transparência** - Informações claras e acessíveis
7. **Segurança** - Medidas de proteção
8. **Prevenção** - Prevenção de danos
9. **Não Discriminação** - Vedação ao tratamento discriminatório
10. **Responsabilização** - Demonstração de conformidade

### 9 Direitos dos Titulares (Art. 18)

- Confirmação de tratamento
- Acesso aos dados
- Correção de dados incompletos/inexatos
- Anonimização/bloqueio/eliminação
- Portabilidade de dados
- Eliminação de dados tratados com consentimento
- Informação sobre compartilhamento
- Revogação do consentimento
- Oposição ao tratamento

---

## 🔐 Segurança

A LGPD exige medidas técnicas e administrativas:

- **Criptografia** - Dados em trânsito e repouso
- **Controle de Acesso** - Autenticação forte
- **Monitoramento** - Logs e auditoria
- **Backup** - Cópias de segurança
- **Infraestrutura Segura** - Ambientes protegidos

---

## ⚖️ Sanções

Multas de até:
- **R$ 50 milhões por infração**
- **2% do faturamento** (até R$ 50 milhões)

Outras sanções:
- Advertência
- Publicização da infração
- Bloqueio ou eliminação de dados
- Suspensão do banco de dados
- Proibição parcial ou total do tratamento

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**dmenezes007**

- GitHub: [@dmenezes007](https://github.com/dmenezes007)

---

## 📚 Referências

- [Lei nº 13.709/2018 (LGPD)](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
- [ANPD - Autoridade Nacional de Proteção de Dados](https://www.gov.br/anpd/pt-br)
- [Guia Orientativo de Segurança - ANPD](https://www.gov.br/anpd/pt-br/assuntos/guias-e-orientacoes)

---

<div align="center">

Feito com ❤️ para compliance LGPD

</div>
