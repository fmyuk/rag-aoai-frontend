import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAG Architecture DeepDive",
  description: "RAGアーキテクチャ入門",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`antialiased`}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
