# 🎨 SKILL: Guia de Estilo e Design - LGPD Implementada

## 📋 Visão Geral

Este documento define os padrões visuais, paleta de cores, espaçamentos, tipografia e componentes de UI para garantir consistência visual em todo o projeto LGPD Implementada.

---

## 🎨 Paleta de Cores

### Cores Primárias

```css
/* Indigo - Cor Principal do Projeto */
indigo-50:  #EEF2FF  /* Backgrounds sutis */
indigo-100: #E0E7FF  /* Hover states suaves */
indigo-600: #4F46E5  /* Cor primária principal */
indigo-800: #3730A3  /* Textos de destaque */
indigo-900: #312E81  /* Títulos importantes */

/* Slate - Cores Neutras */
slate-50:  #F8FAFC  /* Background principal da página */
slate-200: #E2E8F0  /* Bordas e divisores */
slate-500: #64748B  /* Textos secundários */
slate-600: #475569  /* Textos body */
slate-800: #1E293B  /* Títulos principais */
slate-900: #0F172A  /* Textos de máximo contraste */
```

### Cores Secundárias

```css
/* Green - Para compliance e conformidade */
green-50:  #F0FDF4
green-100: #DCFCE7
green-600: #16A34A
green-700: #15803D
green-800: #166534
green-900: #14532D

/* Rose - Para alertas e riscos */
rose-50:  #FFF1F2
rose-100: #FFE4E6
rose-600: #E11D48
rose-800: #9F1239
rose-900: #881337

/* Amber - Para avisos */
amber-50:  #FFFBEB
amber-100: #FEF3C7
amber-600: #D97706
amber-700: #B45309
amber-800: #92400E
```

### Quando Usar Cada Cor

| Cor | Uso | Exemplo |
|-----|-----|---------|
| **Indigo** | Elementos principais, compliance, títulos | Sidebar ativa, títulos principais |
| **Slate** | Textos, backgrounds neutros | Parágrafos, cards brancos |
| **Green** | Conformidade, direitos, métricas positivas | Cards de direitos, compliance OK |
| **Rose** | Riscos, incidentes, sanções | Gestão de incidentes, alertas |
| **Amber** | Avisos, prazos, atenção | Notificações de prazo |

---

## 📐 Espaçamentos e Grid

### Sistema de Espaçamento (Tailwind)

```tsx
// Mobile (default)
gap-4        // 16px
p-6          // padding 24px
space-y-4    // vertical spacing 16px

// Desktop (md: e acima)
md:gap-6     // 24px
md:p-8       // padding 32px
md:space-y-6 // vertical spacing 24px
```

### Grid Layout Padrão

```tsx
// Bento Grid - Layout principal
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(180px,_auto)]">
  {/* Card grande (8 colunas) */}
  <div className="md:col-span-8">...</div>
  
  {/* Card médio (6 colunas) */}
  <div className="md:col-span-6">...</div>
  
  {/* Card pequeno (4 colunas) */}
  <div className="md:col-span-4">...</div>
</div>
```

### Container Principal

```tsx
<main className="flex-1 ml-20 md:ml-64 transition-all duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-12 space-y-8 md:space-y-12">
    {/* Conteúdo aqui */}
  </div>
</main>
```

---

## 🔤 Tipografia

### Hierarquia de Títulos

```tsx
// H1 - Título principal da página
<h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
  Título Principal
</h1>

// H2 - Seções principais
<h2 className="text-xl md:text-3xl font-bold text-slate-800">
  Seção Principal
</h2>

// H3 - Cards e subseções
<h3 className="text-lg md:text-xl font-bold text-slate-800">
  Título do Card
</h3>

// H4 - Subtítulos menores
<h4 className="text-base md:text-lg font-semibold text-slate-700">
  Subtítulo
</h4>
```

### Textos Body

```tsx
// Parágrafo padrão
<p className="text-slate-600 leading-relaxed">
  Texto de conteúdo regular
</p>

// Parágrafo de destaque
<p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium">
  Texto de introdução ou destaque
</p>

// Texto pequeno/caption
<p className="text-xs text-slate-500 font-medium">
  Legenda ou texto pequeno
</p>
```

---

## 🎯 Componentes de UI Padrão

### Cards

#### Card Padrão Branco

```tsx
<div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
  {/* Conteúdo do card */}
</div>
```

#### Card Verde (Compliance/Direitos)

```tsx
<div className="p-6 md:p-8 rounded-3xl bg-green-50 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
  {/* Conteúdo do card */}
</div>
```

#### Card Vermelho (Incidentes/Riscos)

```tsx
<div className="p-6 md:p-8 rounded-3xl bg-rose-50 border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
  {/* Conteúdo do card */}
</div>
```

#### Card Hero com Gradiente

```tsx
<div className="p-6 md:p-8 lg:p-12 rounded-[2.5rem] bg-indigo-600 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
  {/* Background blur effect */}
  <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-[0.05] rounded-full blur-3xl group-hover:opacity-[0.1] transition-opacity duration-500" />
  
  {/* Conteúdo */}
  <div className="relative z-10">...</div>
</div>
```

### Ícones

```tsx
import { Shield, Lock, Users, AlertTriangle } from 'lucide-react';

// Ícone em card com fundo
<div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
  <Shield className="text-indigo-600" size={28} />
</div>

// Ícone standalone
<Lock className="text-indigo-600" size={24} />
```

### Métricas/KPIs

```tsx
<div className="p-3 md:p-4 bg-slate-50 rounded-2xl">
  <p className="text-xl md:text-2xl font-bold text-indigo-600">10</p>
  <p className="text-xs text-slate-500 font-medium">Princípios LGPD</p>
</div>
```

---

## 📱 Responsividade

### Breakpoints (Tailwind)

```
sm: 640px   - Tablets pequenos
md: 768px   - Tablets e desktop pequeno
lg: 1024px  - Desktop médio
xl: 1280px  - Desktop grande
```

### Padrão de Classes Responsivas

```tsx
// SEMPRE seguir: mobile-first
className="
  text-base           {/* Mobile */}
  sm:text-lg          {/* Tablet pequeno */}
  md:text-xl          {/* Desktop */}
  
  p-6                 {/* Mobile */}
  md:p-8              {/* Desktop */}
  
  grid-cols-1         {/* Mobile - uma coluna */}
  md:grid-cols-2      {/* Desktop - duas colunas */}
  lg:grid-cols-3      {/* Desktop large - três colunas */}
"
```

---

## ✅ Checklist de Design para Novos Componentes

- [ ] **Cores:** Usa paleta Indigo/Slate/Green/Rose?
- [ ] **Responsividade:** Classes mobile-first?
- [ ] **Espaçamento:** Usa gap-4/md:gap-6 e p-6/md:p-8?
- [ ] **Tipografia:** Segue hierarquia de títulos?
- [ ] **Bordas:** rounded-2xl ou rounded-3xl para cards?
- [ ] **Sombras:** shadow-sm com hover:shadow-md?
- [ ] **Transições:** transition-* nas interações?
- [ ] **Ícones:** Lucide React com tamanho 24-32px?
- [ ] **Tema LGPD:** Cores apropriadas (verde=compliance, vermelho=risco)?

---

**📝 Nota:** Este guia deve ser consultado sempre que criar ou modificar componentes visuais no projeto para garantir máxima consistência e alinhamento com o tema de LGPD e compliance.
