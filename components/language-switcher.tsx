'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { TranslateIcon } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ showText = true }: { showText?: boolean }) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'he' ? 'ar' : 'he';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="outline"
      size="default"
      onClick={toggleLanguage}
      className={cn('gap-2', !showText && 'px-2')}
    >
      <TranslateIcon className="size-5" />
      {showText && <span>{t('language.switch')}</span>}
    </Button>
  );
}
