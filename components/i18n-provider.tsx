'use client';

import { useEffect, useState, useCallback } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(() => i18n.isInitialized);

  const updateDirection = useCallback((language: string) => {
    const dir = language === 'he' || language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;

    // Update font based on language
    const fontClass = language === 'he' ? 'font-[var(--font-hebrew)]' : 'font-[var(--font-arabic)]';

    // Remove old font class and add new one
    document.body.classList.remove('font-[var(--font-hebrew)]', 'font-[var(--font-arabic)]');
    document.body.classList.add(fontClass);
  }, []);

  useEffect(() => {
    // If already initialized, update direction immediately
    if (i18n.isInitialized) {
      updateDirection(i18n.language);
    }

    // Listen for initialization event
    const handleInitialized = () => {
      setIsInitialized(true);
      updateDirection(i18n.language);
    };

    // Listen for language changes
    const handleLanguageChanged = (lng: string) => {
      updateDirection(lng);
    };

    i18n.on('initialized', handleInitialized);
    i18n.on('languageChanged', handleLanguageChanged);

    // Cleanup listeners on unmount
    return () => {
      i18n.off('initialized', handleInitialized);
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [updateDirection]);

  if (!isInitialized) {
    return null; // or a loading spinner
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
