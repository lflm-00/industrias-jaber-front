import es from './translations/es.json';
import en from './translations/en.json';

export const translations = {
  es,
  en,
};

export type Language = 'es' | 'en';

/**
 * Obtener el idioma del sistema del navegador
 */
export const getSystemLanguage = (): Language => {
  if (typeof window === 'undefined') return 'es';
  
  const browserLang = navigator.language.split('-')[0];
  return (browserLang === 'es' || browserLang === 'en') ? browserLang as Language : 'es';
};

/**
 * Obtener traducción anidada de un objeto
 */
export function getTranslation(obj: any, path: string): string {
  return path.split('.').reduce((current, prop) => current?.[prop], obj) || path;
}

/**
 * Reemplazar variables en strings
 * Ejemplo: "Hace {hours} horas" → "Hace 2 horas"
 */
export function interpolate(text: string, values: Record<string, any>): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] || ''));
}
