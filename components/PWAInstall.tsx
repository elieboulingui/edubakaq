'use client';

import { useState, useEffect } from 'react';

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showButton, setShowButton] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Vérifier si déjà installé
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Écouter l'événement d'installation
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
      console.log('✅ beforeinstallprompt déclenché !');
    };

    // Installation réussie
    const handleAppInstalled = () => {
      console.log('✅ Application installée !');
      setIsInstalled(true);
      setShowButton(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Si pas d'événement après 5 secondes, afficher quand même
    const timer = setTimeout(() => {
      if (!deferredPrompt && !isInstalled) {
        console.log('⚠️ beforeinstallprompt non déclenché');
        setShowButton(true);
      }
    }, 5000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      clearTimeout(timer);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`Résultat : ${outcome}`);
        setDeferredPrompt(null);
        setShowButton(false);
      } catch (err) {
        console.error('Erreur installation:', err);
      }
    } else {
      // Instructions manuelles
      alert(
        '📱 Pour installer l\'application :\n\n' +
        'Android Chrome : Menu ⋮ → "Installer l\'application"\n\n' +
        'iPhone/iPad Safari : Bouton Partager → "Sur l\'écran d\'accueil"\n\n' +
        'PC Chrome : Barre d\'adresse → Icône ⊕\n\n' +
        'Si l\'option n\'apparaît pas :\n' +
        '- Vérifiez que vous êtes en HTTPS\n' +
        '- Attendez quelques secondes\n' +
        '- Rafraîchissez la page'
      );
    }
  };

  if (isInstalled || !showButton) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50">
      <div className="bg-green-500 text-white p-4 rounded-xl shadow-lg flex items-center justify-between">
        <div>
          <p className="font-bold">📱 Dictionnaire Baka</p>
          <p className="text-sm text-white/80">Installer l'application</p>
        </div>
        <button
          onClick={handleInstallClick}
          className="bg-white text-green-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100"
        >
          Installer
        </button>
      </div>
    </div>
  );
}
