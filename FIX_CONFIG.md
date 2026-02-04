# Fix Rápido - Archivos de Configuración

## Problema
Tu versión de Next.js no soporta archivos `.ts` para configuración.

## Solución Aplicada ✅

He cambiado los archivos de configuración a formato JavaScript:

1. ❌ `next.config.ts` → ✅ `next.config.mjs`
2. ❌ `tailwind.config.ts` → ✅ `tailwind.config.js`

## Ahora puedes ejecutar:

```bash
npm run dev
```

## Si el problema persiste:

### Opción 1: Actualizar Next.js
```bash
npm install next@latest
```

### Opción 2: Borrar archivos manualmente
Si tienes archivos duplicados:
```bash
# Asegúrate de tener SOLO estos archivos:
# - next.config.mjs
# - tailwind.config.js
# - postcss.config.mjs

# Borra cualquier versión .ts:
rm next.config.ts
rm tailwind.config.ts
```

## Versiones Recomendadas

```json
{
  "next": "^14.2.18",
  "react": "^18",
  "react-dom": "^18"
}
```

Todo lo demás funciona igual. ¡El proyecto está listo! 🚀
