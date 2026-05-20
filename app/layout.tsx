import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { AuthProvider } from "./lib/auth";
import HeaderNav from "./lib/header-nav";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maturita - Príprava na skúšky",
  description: "Príprava na maturitnú skúšku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100 antialiased">
        <AuthProvider>
          <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2 text-white font-semibold text-lg hover:text-indigo-400 transition-colors"
              >
                <span className="text-2xl">🎓</span>
                <span>Maturita</span>
              </Link>
              <HeaderNav />
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-gray-800 py-4 text-center text-sm text-gray-600">
            Maturita
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
