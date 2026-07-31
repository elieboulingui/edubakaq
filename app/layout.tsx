// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomMenu from "@/components/BottomMenu";
import PWAInstall from "@/components/PWAInstall";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://votre-domaine.com'),
  title: {
    default: 'Dictionnaire Baka',
    template: '%s | Dictionnaire Baka'
  },
  description: 'Dictionnaire, proverbes et culture de la langue Baka du Gabon',
  keywords: ['Baka', 'dictionnaire', 'langue', 'Gabon', 'pygmées', 'culture', 'apprendre', 'compter'],
  authors: [{ name: 'NGUEMA NDONG' }, { name: 'Josué BOULINGUI' }],
  creator: 'NGUEMA NDONG',
  publisher: 'NGUEMA NDONG',
  formatDetection: {
    telephone: true,
  },
  manifest: '/manifest.json',
  themeColor: '#4CAF50',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false, // Changé de 'no' à false
  },
  appleWebApp: {
    capable: true,
    title: 'Dictionnaire Baka',
    statusBarStyle: 'default',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: [{ url: '/icons/icon-96x96.png', sizes: '96x96', type: 'image/png' }],
  },
  openGraph: {
    title: 'Dictionnaire Baka',
    description: 'Dictionnaire, proverbes et culture de la langue Baka du Gabon',
    url: 'https://votre-domaine.com',
    siteName: 'Dictionnaire Baka',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Dictionnaire Baka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dictionnaire Baka',
    description: 'Dictionnaire, proverbes et culture de la langue Baka du Gabon',
    images: ['/icons/icon-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://votre-domaine.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dictionnaire Baka" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#4CAF50" />
        <meta name="msapplication-TileColor" content="#4CAF50" />
        <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />

        {/* Service Worker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(reg) {
                    console.log('Service Worker enregistré !');
                  })
                  .catch(function(err) {
                    console.log('Erreur d\\'enregistrement du Service Worker : ', err);
                  });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <BottomMenu />
        <PWAInstall />
      </body>
    </html>
  );
}
