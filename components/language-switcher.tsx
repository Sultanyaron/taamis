"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { TranslateIcon } from "@phosphor-icons/react";

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "he" ? "ar" : "he";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="outline"
      size="default"
      onClick={toggleLanguage}
      className="gap-2">
      <TranslateIcon className="size-5" />
      <span>{t("language.switch")}</span>
    </Button>
  );
}
