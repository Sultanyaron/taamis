"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SignInIcon } from "@phosphor-icons/react";

export default function LoginPage() {
  const { t } = useTranslation();
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  const handleSignIn = () => {
    // Placeholder for WorkOS AuthKit integration
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      {/* Header with language switcher */}
      <header className="w-full p-4 flex justify-end">
        <LanguageSwitcher />
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-8">
          {/* Welcome message */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              {t("auth.welcome")}
            </h1>
            <p className="text-muted-foreground text-lg">Taamis</p>
          </div>

          {/* Login card */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg space-y-6">
            {!isSignedIn ? (
              <>
                <div className="space-y-4">
                  <p className="text-center text-muted-foreground">
                    {/* Placeholder text - will be replaced with actual auth flow */}
                    WorkOS AuthKit
                  </p>
                </div>

                <Button
                  onClick={handleSignIn}
                  className="w-full gap-2 h-12 text-base"
                  size="lg">
                  <SignInIcon className="size-5" weight="bold" />
                  {t("auth.signIn")}
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="size-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <SignInIcon className="size-8 text-primary" weight="bold" />
                  </div>
                  <p className="text-lg font-medium">{t("common.success")}!</p>
                  <p className="text-sm text-muted-foreground">
                    {/* Placeholder - user info will come from WorkOS */}
                  </p>
                </div>

                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  className="w-full">
                  {t("auth.signOut")}
                </Button>
              </div>
            )}
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-muted-foreground">
            {/* Placeholder for WorkOS AuthKit integration */}
            Authentication powered by WorkOS AuthKit (coming soon)
          </p>
        </div>
      </main>
    </div>
  );
}
