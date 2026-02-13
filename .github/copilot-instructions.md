# LGPD Implementada - Copilot Instructions

## Project Overview
LGPD Implementada is a one-pager web application showcasing LGPD (Lei Geral de Proteção de Dados - Brazilian Data Protection Law) compliance best practices, metrics, and implementation guidelines.

## Tech Stack
- **React 19.2+** with TypeScript 5.8+
- **Vite 6.2+** for build tooling
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Component-based architecture** with views pattern

## Project Structure
```
lgpd-implementada/
├── components/
│   ├── views/          # Page components
│   ├── Sidebar.tsx     # Navigation
│   ├── Footer.tsx      # Footer
│   └── ...             # Other components
├── App.tsx             # Root component
├── index.tsx           # Entry point
└── skills/             # Development guidelines
```

## Development Guidelines

### Design System
- **Colors**: Indigo (primary), Slate (neutral), Green (compliance), Red (risk)
- **Spacing**: Mobile-first with gap-4 (md:gap-6), p-6 (md:p-8)
- **Typography**: Responsive text sizes (text-base → sm:text-lg → md:text-xl)
- **Cards**: rounded-3xl with shadow-sm hover:shadow-md
- **Grid**: Bento grid layout (grid-cols-1 md:grid-cols-12)

### Component Patterns
- Use `React.FC` with typed props
- Interface naming: `ComponentNameProps`
- Mobile-first responsive classes
- Export components with `export const ComponentName`

### TypeScript Standards
- Strict mode enabled
- All props must be typed with interfaces
- Use union types for variants: `'primary' | 'secondary'`
- Avoid `any` type

### File Naming
- Components: `PascalCase.tsx`
- Views: `ViewName.tsx` in `components/views/`
- Types: Inline interfaces or shared types file

## Focus Areas
- LGPD compliance metrics and KPIs
- Data protection best practices
- Privacy by design principles
- Incident response workflows
- Consent management
- Data subject rights (ARCO rights)

## Commands
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run lint` - TypeScript type checking
