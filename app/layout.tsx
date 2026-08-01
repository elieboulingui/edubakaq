// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import BottomMenu from "@/components/BottomMenu";
import PWAInstall from "@/components/PWAInstall";

export const metadata: Metadata = {
  title: "Dictionnaire Baka",
  description: "Dictionnaire et culture de la langue Baka du Gabon",
  manifest: "/manifest.json",
  verification: {
    google: "v3gxnhywXKLvvbYWg3rlT-JVpYbCAqoaNAtruFpwY8o",
  },
  appleWebApp: {
    capable: true,
    title: "Dictionnaire Baka",
    statusBarStyle: "default",
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
        <meta name="theme-color" content="#4CAF50" />
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
          content="Dictionnaire Baka"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        <BottomMenu />
        <PWAInstall />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js')
                  .then(() => console.log('Service Worker enregistré'))
                  .catch(err => console.log('Erreur SW :', err));
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
