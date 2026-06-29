import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";



//コンポ―ネント
import Header from "./components/Header"
import NextAuth from "next-auth";
import { NextAuthProvider } from "./lib/next-auth/provider"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400"]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Commerce",
  description: "Stripeを使った本のECサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextAuthProvider>
        <Header/>
        {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
