# Especificaciones Técnicas - Industrias Jaber Next.js

## 1. Información General del Proyecto

**Nombre:** Industrias Jaber Website  
**Versión:** 1.0.0  
**Cliente:** Industrias Jaber S.A.  
**Tipo:** Landing Page / Sitio Web Corporativo  
**Fecha de Migración:** Febrero 2026

## 2. Stack Tecnológico

### 2.1 Framework Principal
- **Next.js 14.2.18**
  - App Router (React Server Components)
  - Optimización automática de imágenes
  - Rutas API integradas
  - Server-side rendering (SSR) y Static Site Generation (SSG)

### 2.2 Lenguaje
- **TypeScript 5.x**
  - Tipado estático completo
  - Interfaces para props de componentes
  - Type safety en toda la aplicación

### 2.3 Estilos
- **Tailwind CSS 3.4.1**
  - Utility-first CSS framework
  - Configuración personalizada de colores
  - Container queries habilitado
  - Modo oscuro con clase "dark"

### 2.4 Fuentes e Iconos
- **Google Fonts:** Work Sans (300, 400, 500, 600, 700, 900)
- **Iconos:** Material Symbols Outlined

## 3. Arquitectura del Proyecto

### 3.1 Estructura de Directorios

```
industrias-jaber/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout raíz con fuentes y metadata
│   ├── page.tsx                 # Página principal (/)
│   └── globals.css              # Estilos globales Tailwind
├── components/                   # Componentes React reutilizables
│   ├── Header.tsx               # Navegación sticky
│   ├── Hero.tsx                 # Sección hero
│   ├── ProcessCard.tsx          # Card individual de proceso
│   ├── Processes.tsx            # Sección de procesos
│   ├── CTA.tsx                  # Call-to-action
│   └── Footer.tsx               # Pie de página
├── public/                       # Archivos estáticos
├── .eslintrc.json               # Configuración ESLint
├── .gitignore                   # Archivos ignorados por Git
├── next.config.ts               # Configuración Next.js
├── package.json                 # Dependencias del proyecto
├── postcss.config.mjs           # Configuración PostCSS
├── tailwind.config.ts           # Configuración Tailwind
├── tsconfig.json                # Configuración TypeScript
└── README.md                    # Documentación
```

### 3.2 Arquitectura de Componentes

**Componentes Server (RSC):**
- Todos los componentes principales son React Server Components por defecto
- Mejor performance inicial
- SEO optimizado

**Jerarquía de Componentes:**
```
Page (/)
├── Header
├── Main
│   ├── Hero
│   ├── Processes
│   │   └── ProcessCard (x3)
│   └── CTA
└── Footer
```

## 4. Configuración de Estilos

### 4.1 Paleta de Colores Personalizada

```typescript
colors: {
  primary: "#d47311",              // Naranja corporativo
  "background-light": "#f8f7f6",   // Fondo claro
  "background-dark": "#221910",    // Fondo oscuro
  "coffee-green": "#4a5d4e",       // Verde café
  "coffee-cream": "#f1ece4",       // Crema café
}
```

### 4.2 Tipografía

```typescript
fontFamily: {
  display: ["var(--font-work-sans)", "sans-serif"],
}
```

**Pesos disponibles:** 300, 400, 500, 600, 700, 900

### 4.3 Border Radius Personalizado

```typescript
borderRadius: {
  DEFAULT: "0.25rem",   // 4px
  lg: "0.5rem",         // 8px
  xl: "0.75rem",        // 12px
  full: "9999px",       // Círculo completo
}
```

### 4.4 Modo Oscuro

- Estrategia: `class` (manual toggle)
- Prefijo: `dark:`
- Soportado en todos los componentes

## 5. Componentes Principales

### 5.1 Header

**Características:**
- Sticky positioning (top-0)
- Backdrop blur effect
- Navegación responsive (menú oculto en mobile)
- Logo con icono Material Symbols
- Botón CTA principal

**Props:** Ninguna (componente estático)

**Estilos destacados:**
- Fondo semi-transparente con blur
- Border inferior sutil
- Transiciones en hover

### 5.2 Hero

**Características:**
- Layout flex responsive (columna en mobile, fila en desktop)
- Badge de "Innovative Engineering"
- Título principal (h1) con tracking ajustado
- Dos botones CTA
- Imagen de fondo con overlay
- Badge de "25+ Years" (hidden en pantallas pequeñas)

**Props:** Ninguna

**Container Query:** `@container` para responsive interno

### 5.3 ProcessCard

**Props:**
```typescript
interface ProcessCardProps {
  title: string;
  description: string;
  icon: string;              // Material Symbol name
  imageUrl: string;
  featured?: boolean;        // Border superior naranja
}
```

**Características:**
- Hover effects (shadow expansion)
- Image overlay que desaparece en hover
- Icono y título con color primary
- Featured variant con border-top

### 5.4 Processes

**Características:**
- Fondo coffee-cream
- Título centrado con divider decorativo
- Grid responsive: 1 col (mobile) → 3 cols (desktop)
- 3 ProcessCards hardcoded

**Data:**
1. Harvesting (agriculture icon)
2. Roasting (local_fire_department icon) - featured
3. Grinding (blur_on icon)

### 5.5 CTA

**Características:**
- Fondo oscuro (#181411)
- Círculos decorativos con blur
- Posicionamiento relativo/absoluto para efectos
- Dos botones: Contact Us (primary) y Request Catalog (outline)
- Responsive text sizing

**Efectos visuales:**
- Gradientes circulares con blur-3xl
- Sombras en botones
- Scale animation en hover

### 5.6 Footer

**Características:**
- Grid 4 columnas en desktop, 1 en mobile
- 4 secciones: Branding, Products, Company, Headquarters
- Links con hover:text-primary
- Copyright y legal links
- Border superior sutil

## 6. Optimizaciones

### 6.1 Performance
- ✅ React Server Components (RSC)
- ✅ Automatic code splitting
- ✅ Font optimization con next/font
- ✅ Tailwind CSS purging automático
- ⚠️ Imágenes externas (Googleusercontent)

### 6.2 SEO
- ✅ Metadata en layout.tsx
- ✅ Semantic HTML (header, main, footer, section)
- ✅ Títulos jerárquicos (h1, h2, h3, h4)
- ⚠️ Falta: Open Graph tags, sitemap, robots.txt

### 6.3 Accesibilidad
- ⚠️ Material Icons necesitan aria-labels
- ⚠️ Botones sin type explícito
- ⚠️ Links necesitan aria-labels descriptivos
- ✅ Contraste de colores adecuado
- ⚠️ Focus states podrían mejorarse

## 7. Imágenes y Assets

### 7.1 Imágenes Externas

**Hero:**
- URL: `lh3.googleusercontent.com/aida-public/...`
- Uso: Background image con aspect-ratio 4:3
- Alt: "Industrial coffee roasting machine"

**Process Cards:**
1. Harvesting: `lh3.googleusercontent.com/...` (cherries)
2. Roasting: `lh3.googleusercontent.com/...` (beans roasting)
3. Grinding: `lh3.googleusercontent.com/...` (ground coffee)

**Configuración Next.js:**
```typescript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "lh3.googleusercontent.com",
    },
  ],
}
```

### 7.2 Iconos Material Symbols

**Icons usados:**
- `coffee_maker` (logo)
- `agriculture` (harvesting)
- `local_fire_department` (roasting)
- `blur_on` (grinding)
- `mail` (contact CTA)

## 8. Responsive Design

### 8.1 Breakpoints Tailwind

- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

### 8.2 Estrategia Mobile-First

Todos los estilos base son para mobile, luego se expanden:

```tsx
className="flex-col lg:flex-row"    // Columna → Fila
className="text-3xl lg:text-4xl"    // Texto más grande
className="hidden md:flex"          // Mostrar en desktop
```

### 8.3 Container Queries

Habilitado en `tailwind.config.ts`:
```typescript
plugins: [require('@tailwindcss/container-queries')]
```

Usado en Hero para el badge de "25+ Years":
```tsx
className="hidden @[864px]:block"
```

## 9. Dependencias

### 9.1 Dependencias de Producción

```json
{
  "react": "^18",
  "react-dom": "^18",
  "next": "14.2.18"
}
```

### 9.2 Dependencias de Desarrollo

```json
{
  "typescript": "^5",
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-dom": "^18",
  "postcss": "^8",
  "tailwindcss": "^3.4.1",
  "eslint": "^8",
  "eslint-config-next": "14.2.18"
}
```

## 10. Scripts NPM

```json
{
  "dev": "next dev",           // Desarrollo en http://localhost:3000
  "build": "next build",       // Build de producción
  "start": "next start",       // Servidor de producción
  "lint": "next lint"          // Linting con ESLint
}
```

## 11. Variables de Entorno

**Actuales:** Ninguna

**Recomendadas para producción:**
```env
NEXT_PUBLIC_SITE_URL=https://industriasjaber.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CONTACT_EMAIL=info@industriasjaber.com
```

## 12. Mejoras Futuras Sugeridas

### 12.1 Funcionalidad
- [ ] Formulario de contacto funcional
- [ ] Modal para video demo
- [ ] Lightbox para imágenes de procesos
- [ ] Sistema de i18n (Español/Inglés)
- [ ] Galería de maquinaria
- [ ] Testimonios de clientes

### 12.2 Optimización
- [ ] Convertir imágenes a Next.js Image component
- [ ] Implementar lazy loading explícito
- [ ] Agregar sitemap.xml
- [ ] Implementar robots.txt
- [ ] Agregar Open Graph meta tags
- [ ] PWA capabilities

### 12.3 Interactividad
- [ ] Toggle de modo oscuro funcional
- [ ] Animaciones con Framer Motion
- [ ] Scroll animations (AOS)
- [ ] Menu mobile hamburger
- [ ] Smooth scroll a secciones

### 12.4 Accesibilidad
- [ ] Aria-labels en iconos
- [ ] Focus indicators mejorados
- [ ] Keyboard navigation completa
- [ ] Screen reader testing
- [ ] WCAG 2.1 AA compliance

### 12.5 Analytics & Marketing
- [ ] Google Analytics 4
- [ ] Google Tag Manager
- [ ] Facebook Pixel
- [ ] Schema.org markup
- [ ] Conversion tracking

## 13. Deployment

### 13.1 Plataformas Recomendadas

**Vercel (Óptimo):**
```bash
# Conectar repo y auto-deploy
vercel --prod
```

**Netlify:**
```bash
# Build command
npm run build

# Publish directory
.next
```

### 13.2 Build Output

```bash
npm run build
```

Genera:
- `.next/` - Build artifacts
- Optimized bundle sizes
- Static pages pre-rendered

### 13.3 Checklist Pre-Deployment

- [ ] `npm run build` sin errores
- [ ] `npm run lint` sin warnings
- [ ] Variables de entorno configuradas
- [ ] Dominio configurado
- [ ] SSL/HTTPS habilitado
- [ ] Testing en múltiples browsers
- [ ] Testing en múltiples dispositivos
- [ ] Performance audit (Lighthouse)

## 14. Testing

### 14.1 Manualmente
1. Navegación entre secciones
2. Clicks en botones CTA
3. Responsive en Chrome DevTools
4. Modo oscuro (cambiar clase manualmente)
5. Performance en Lighthouse

### 14.2 Browsers Soportados
- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## 15. Migración desde HTML

### 15.1 Cambios Principales

**Antes (HTML):**
- Tailwind CDN
- Single HTML file
- Inline styles
- Material Icons CDN

**Después (Next.js):**
- Tailwind build process
- Componentes modulares
- TypeScript types
- Next/Font optimization
- Component-based architecture

### 15.2 Beneficios de la Migración

✅ Type safety con TypeScript  
✅ Componentes reutilizables  
✅ Mejor SEO con SSR  
✅ Performance optimization automática  
✅ Code splitting automático  
✅ Better developer experience  
✅ Escalabilidad mejorada  
✅ Hot Module Replacement (HMR)  

## 16. Mantenimiento

### 16.1 Actualizar Dependencias

```bash
# Check for updates
npm outdated

# Update all to latest
npm update

# Update Next.js
npm install next@latest
```

### 16.2 Comandos Útiles

```bash
# Verificar tipos TypeScript
npx tsc --noEmit

# Formatear código (si se agrega Prettier)
npx prettier --write .

# Analyze bundle
npm run build -- --analyze
```

## 17. Contacto y Soporte

**Desarrollador:** [Tu nombre]  
**Email:** [Tu email]  
**Repositorio:** [GitHub URL]  
**Documentación Next.js:** https://nextjs.org/docs  
**Documentación Tailwind:** https://tailwindcss.com/docs

---

**Versión del documento:** 1.0  
**Última actualización:** Febrero 4, 2026  
**Estado:** Completado - Listo para deploy
