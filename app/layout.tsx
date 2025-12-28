import type { Metadata } from 'next';
import { Rubik, Cairo } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/components/i18n-provider';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { AuthKitProvider } from '@workos-inc/authkit-nextjs/components';

// Hebrew font
const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  variable: '--font-hebrew',
  display: 'swap'
});

// Arabic font
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-arabic',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Taamis',
  description: 'Mobile-first RTL application'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${cairo.variable}`}>
      <body className="antialiased font-[var(--font-hebrew)]">
        <AuthKitProvider>
          <I18nProvider>
            <SidebarProvider>
              <div className="flex min-h-screen w-full">
                <AppSidebar />
                <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
              </div>
            </SidebarProvider>
          </I18nProvider>
        </AuthKitProvider>
      </body>
    </html>
  );
}
