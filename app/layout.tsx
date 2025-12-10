import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IA Token | Impact & Action for a Connected World",
  description: "A community-driven token for festival access, collective governance, and meaningful connection. Empathy. Generosity. United Love.",
  keywords: ["IA Token", "community token", "festival access", "governance", "Ethereum", "Base"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
