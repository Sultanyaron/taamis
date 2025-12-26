"use client";

import { useTranslation } from "react-i18next";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function WorksPage() {
  const { t } = useTranslation();

  return (
    <main className="flex-1 flex flex-col w-full">
      {/* Header with sidebar trigger */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center gap-4 px-4">
          <SidebarTrigger />
          <h2 className="text-lg font-semibold">{t("nav.works")}</h2>
        </div>
      </header>

      {/* Page content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {t("nav.works")}
          </h1>
          <p className="text-muted-foreground text-lg">
            {t("auth.welcome")}
          </p>
        </div>
      </div>
    </main>
  );
}

