"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import en from '@/locales/en.json';
import zh_tw from '@/locales/zh_tw.json';
import zh_cn from '@/locales/zh_cn.json';
import ja from '@/locales/ja.json';
import ko from '@/locales/ko.json';

export type Locale = 'en' | 'zh-TW' | 'zh-CN' | 'ja' | 'ko';
type Translations = typeof en;

const translations: Record<Locale, Translations> = {
  'en': en,
  'zh-TW': zh_tw,
  'zh-CN': zh_cn,
  'ja': ja,
  'ko': ko,
};

interface ILanguageContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<ILanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    // Basic browser language detection
    if (typeof window !== 'undefined' && navigator.language) {
      const browserLang = navigator.language;
      if (browserLang.toLowerCase().includes('zh-tw') || browserLang.toLowerCase() === 'zh-hk') {
        setTimeout(() => setLocale('zh-TW'), 0);
      } else if (browserLang.toLowerCase().includes('zh')) {
        setTimeout(() => setLocale('zh-CN'), 0);
      } else if (browserLang.toLowerCase().includes('ja')) {
        setTimeout(() => setLocale('ja'), 0);
      } else if (browserLang.toLowerCase().includes('ko')) {
        setTimeout(() => setLocale('ko'), 0);
      }
    }
  }, []);

  const t = (key: string) => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[locale];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        // Fallback to English if key not found in current locale
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let fallbackValue: any = translations['en'];
        for (const fbK of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fbK in fallbackValue) {
            fallbackValue = fallbackValue[fbK as keyof typeof fallbackValue];
          } else {
            return key; // Return key if not found in fallback either
          }
        }
        return fallbackValue as string;
      }
    }
    return value as string;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
