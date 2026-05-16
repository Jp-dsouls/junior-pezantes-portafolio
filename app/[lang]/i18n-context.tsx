'use client';

import { createContext, useContext, ReactNode } from 'react';
import { locales } from '@/i18n/config';

type Locale = typeof locales[number];

interface I18nContextType {
  locale: Locale;
  messages: Record<string, any>;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nContextProvider({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: Locale;
  messages: Record<string, any>;
}) {
  return (
    <I18nContext.Provider value={{ locale, messages }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nContextProvider');
  }
  return context;
}

export function useTranslations(namespace?: string) {
  const { messages } = useI18n();
  
  return function t(key: string, defaultValue?: string) {
    // If namespace is provided, prepend it to the key
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const keyParts = fullKey.split('.');
    
    let value: any = messages;
    
    // Traverse the object using the key parts
    for (const part of keyParts) {
      if (value && typeof value === 'object' && part in value) {
        value = value[part];
      } else {
        console.warn(`[v0] Translation key not found: ${fullKey}`);
        return defaultValue || key;
      }
    }
    
    return typeof value === 'string' ? value : defaultValue || key;
  };
}

export function useLocale() {
  const { locale } = useI18n();
  return locale;
}
