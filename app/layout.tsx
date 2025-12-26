import type { Metadata } from "next";
import { Rubik, Cairo } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/i18n-provider";

// Hebrew font
const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-hebrew",
  display: "swap",
});

// Arabic font
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taamis",
  description: "Mobile-first RTL application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${cairo.variable}`}>
      <body className="antialiased font-[var(--font-hebrew)]">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
