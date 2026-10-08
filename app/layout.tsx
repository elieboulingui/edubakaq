// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Search Aggregator",
  description: "Moteur de recherche et agrégation d’informations sur le web",
  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    title: "Web Search Aggregator",
    statusBarStyle: "default",
  },

  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06b6d4" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Web Search Aggregator"
        />
      </head>

      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
