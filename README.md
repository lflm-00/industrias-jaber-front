# Industrias Jaber - Next.js Website

Landing page para Industrias Jaber, empresa especializada en maquinaria para procesamiento de café.

## 🚀 Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Material Symbols** - Iconos de Google

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
```

## 🎨 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Modo oscuro configurado
- ✅ Componentes modulares y reutilizables
- ✅ Tipado completo con TypeScript
- ✅ Optimización de imágenes con Next.js Image
- ✅ Colores personalizados de la marca
- ✅ Animaciones y transiciones suaves
- ✅ SEO optimizado

## 🏗️ Estructura del Proyecto

```
industrias-jaber/
├── app/
│   ├── layout.tsx       # Layout principal con fuentes
│   ├── page.tsx         # Página principal (/)
│   ├── machinery/       # Catálogo de maquinaria (/machinery)
│   │   └── page.tsx
│   └── globals.css      # Estilos globales
├── components/
│   ├── Header.tsx           # Navegación principal
│   ├── Hero.tsx             # Sección hero (home)
│   ├── ProcessCard.tsx      # Tarjeta de proceso
│   ├── Processes.tsx        # Sección de procesos
│   ├── CTA.tsx              # Call to action (home)
│   ├── Footer.tsx           # Pie de página
│   ├── MachineryHero.tsx    # Hero del catálogo
│   ├── CategoryFilter.tsx   # Filtro de categorías (client)
│   ├── MachineryCard.tsx    # Tarjeta de maquinaria
│   ├── MachineryGrid.tsx    # Grid de productos
│   └── MachineryCTA.tsx     # CTA del catálogo
├── public/              # Archivos estáticos
├── next.config.mjs      # Configuración Next.js
└── tailwind.config.js   # Configuración de Tailwind
```

## 🎨 Paleta de Colores

- **Primary**: `#d47311` (Naranja)
- **Background Light**: `#f8f7f6`
- **Background Dark**: `#221910`
- **Coffee Green**: `#4a5d4e`
- **Coffee Cream**: `#f1ece4`

## 📝 Componentes Principales

### Header
Navegación sticky con logo, menú y botón CTA. Los links ahora usan Next.js routing.

### Páginas

**Home (/):**
- Hero: Sección principal con título, descripción, botones e imagen
- Processes: Grid de procesos (Cosecha, Tostado, Molienda)
- CTA: Call-to-action con fondo oscuro

**Machinery (/machinery):**
- MachineryHero: Encabezado del catálogo
- CategoryFilter: Filtro de categorías (componente cliente con estado)
- MachineryGrid: Grid de 6 productos de maquinaria
- MachineryCTA: Call-to-action para consultas personalizadas

### Footer
Pie de página con información de la empresa, enlaces y datos de contacto.

## 🔧 Personalización

Para personalizar los colores, edita `tailwind.config.ts`:

```typescript
colors: {
  primary: "#d47311",
  // ... otros colores
}
```

## 📱 Responsive

El sitio está optimizado para:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🌐 Deploy

Este proyecto está listo para deployarse en:
- Vercel (recomendado)
- Netlify
- Cualquier plataforma que soporte Next.js

```bash
# Build de producción
npm run build
```

## 📄 Licencia

© 2024 Industrias Jaber S.A. Todos los derechos reservados.
