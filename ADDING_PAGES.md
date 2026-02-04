# Guía: Cómo Agregar Nuevas Páginas

## 📄 Páginas Actuales

El proyecto incluye 2 páginas:
- `/` - Home (Landing principal)
- `/machinery` - Catálogo de maquinaria

## 🆕 Agregar una Nueva Página

### Paso 1: Crear el Directorio

```bash
mkdir -p app/nueva-pagina
```

### Paso 2: Crear `page.tsx`

```tsx
// app/nueva-pagina/page.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Título de la Página - Industrias Jaber",
  description: "Descripción para SEO",
};

export default function NuevaPagina() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Tu contenido aquí */}
        <section className="px-4 lg:px-40 py-16">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-4xl font-black">Nueva Página</h1>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

### Paso 3: Actualizar Navegación (Opcional)

Edita `components/Header.tsx` para agregar el link:

```tsx
<Link
  className="text-[#181411] dark:text-[#f8f7f6] text-sm font-semibold hover:text-primary transition-colors"
  href="/nueva-pagina"
>
  Nueva Página
</Link>
```

## 🎨 Ejemplo: Página "About Us"

### 1. Crear estructura

```bash
mkdir -p app/about
```

### 2. Crear componentes específicos

```tsx
// components/AboutHero.tsx
export default function AboutHero() {
  return (
    <section className="bg-coffee-cream dark:bg-[#2d241b] py-20">
      <div className="px-4 lg:px-40 max-w-[1200px] mx-auto text-center">
        <h1 className="text-5xl font-black mb-4">About Industrias Jaber</h1>
        <p className="text-lg">Our story...</p>
      </div>
    </section>
  );
}
```

### 3. Crear la página

```tsx
// app/about/page.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";

export const metadata: Metadata = {
  title: "About Us - Industrias Jaber",
  description: "Learn about our 25+ years in coffee machinery",
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <AboutHero />
        {/* Más secciones */}
      </main>
      <Footer />
    </div>
  );
}
```

## 🔧 Componentes Reutilizables

### Layouts Comunes

```tsx
// Para páginas con hero similar
<section className="bg-coffee-cream dark:bg-[#2d241b] py-16 lg:py-20">
  <div className="px-4 lg:px-40 max-w-[1200px] mx-auto text-center">
    {/* Contenido */}
  </div>
</section>
```

### Cards de Contenido

```tsx
<div className="bg-white dark:bg-[#382d22] rounded-2xl shadow-sm p-6">
  {/* Contenido del card */}
</div>
```

### Botones CTA

```tsx
<button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-primary text-white text-base font-bold transition-transform hover:scale-105">
  Click Me
</button>
```

## 📱 Responsive Design

Siempre usa las clases responsive de Tailwind:

```tsx
className="
  px-4 lg:px-40          // Padding horizontal
  py-12 lg:py-24         // Padding vertical
  text-3xl lg:text-5xl   // Texto
  flex-col lg:flex-row   // Dirección flex
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  // Grid
"
```

## 🎯 Buenas Prácticas

1. **Metadata siempre**: Cada página debe tener su metadata para SEO
2. **Componentes modulares**: Crea componentes separados para secciones complejas
3. **Reutilizar Header/Footer**: Todas las páginas deben usar los mismos componentes
4. **Dark mode**: Siempre incluir variantes dark: con `dark:bg-...`, `dark:text-...`
5. **Max-width**: Usar `max-w-[1200px] mx-auto` para contenido centrado
6. **TypeScript**: Definir interfaces para props de componentes

## 🗺️ Rutas Dinámicas

Para crear páginas dinámicas (ej: `/machinery/[id]`):

```bash
mkdir -p app/machinery/[id]
```

```tsx
// app/machinery/[id]/page.tsx
export default function MachineryDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Producto: {params.id}</h1>
    </div>
  );
}
```

## 🔍 SEO Avanzado

```tsx
export const metadata: Metadata = {
  title: "Título",
  description: "Descripción",
  openGraph: {
    title: "Título para redes sociales",
    description: "Descripción para redes sociales",
    images: ["/og-image.jpg"],
  },
};
```

## ✅ Checklist Nueva Página

- [ ] Crear directorio en `app/`
- [ ] Crear `page.tsx` con metadata
- [ ] Importar Header y Footer
- [ ] Crear componentes específicos si necesario
- [ ] Agregar link en Header (opcional)
- [ ] Probar responsive (mobile, tablet, desktop)
- [ ] Verificar modo oscuro
- [ ] Comprobar SEO metadata

¡Listo! Ahora puedes agregar tantas páginas como necesites siguiendo esta estructura.
