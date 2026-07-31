// components/PWAInstall.tsx
'use client';

import React, { useState, useEffect } from 'react';

// Définition du type pour l'événement beforeinstallprompt
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstall, setShowInstall] = useState<boolean>(false);
  const [isDevelopment, setIsDevelopment] = useState<boolean>(false);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const [installError, setInstallError] = useState<string>('');

  useEffect(() => {
    // Détecter si on est en développement
    const dev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    setIsDevelopment(dev);

    // Vérifier si l'app est déjà installée
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Surveiller le mode d'affichage
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    const handleDisplayModeChange = (e: MediaQueryListEvent) => {
      setIsInstalled(e.matches);
      if (e.matches) {
        setShowInstall(false);
      }
    };
    mediaQuery.addEventListener('change', handleDisplayModeChange);

    // Écouter l'événement beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstall(true);
    };

    const handleAppInstalled = () => {
      setShowInstall(false);
      setIsInstalled(true);
      setDeferredPrompt(null);
      console.log('✅ PWA installée avec succès !');
    };

    // Gestion de la connectivité
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Vérifier les mises à jour du Service Worker
    const handleUpdateAvailable = (event: Event) => {
      setShowUpdate(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Service Worker update
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }

    // Si en développement, afficher un bouton de test
    if (dev) {
      setTimeout(() => {
        setShowInstall(true);
      }, 2000);
    }

    // Vérifier si l'installation est disponible
    checkInstallAvailability();

    // Cleanup
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      mediaQuery.removeEventListener('change', handleDisplayModeChange);
    };
  }, []);

  const checkInstallAvailability = async () => {
    // Vérifier si l'app peut être installée
    if ('getInstalledRelatedApps' in navigator) {
      try {
        const relatedApps = await (navigator as any).getInstalledRelatedApps();
        if (relatedApps.length > 0) {
          setIsInstalled(true);
        }
      } catch (error) {
        console.log('Impossible de vérifier les apps installées:', error);
      }
    }
  };

  const handleInstall = async () => {
    if (!deferredPrompt) {
      setInstallError('Installation non disponible pour le moment');
      setTimeout(() => setInstallError(''), 3000);
      return;
    }

    try {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      
      if (result.outcome === 'accepted') {
        console.log('✅ PWA installée avec succès !');
        setShowInstall(false);
        setIsInstalled(true);
      } else {
        console.log('❌ Installation refusée par l\'utilisateur');
        setInstallError('Installation annulée');
        setTimeout(() => setInstallError(''), 3000);
      }
    } catch (error) {
      console.error('Erreur lors de l\'installation:', error);
      setInstallError('Erreur lors de l\'installation');
      setTimeout(() => setInstallError(''), 3000);
    } finally {
      setDeferredPrompt(null);
    }
  };

  const handleUpdate = () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    }
    setShowUpdate(false);
  };

  // Bouton de test en développement
  const handleDevInstall = () => {
    alert(
      '🔧 Mode développement - Installation PWA\n\n' +
      'Pour tester l\'installation PWA :\n\n' +
      '📱 Chrome Desktop :\n' +
      '1. Ouvrez Chrome DevTools (F12)\n' +
      '2. Allez dans l\'onglet "Application"\n' +
      '3. Cliquez sur "Manifest" dans le menu de gauche\n' +
      '4. Cliquez sur "Ajouter à l\'écran d\'accueil"\n\n' +
      '📱 Chrome Android :\n' +
      '1. Ouvrez le menu Chrome (⋮)\n' +
      '2. Sélectionnez "Installer l\'application"\n\n' +
      '📱 Safari iOS :\n' +
      '1. Appuyez sur le bouton Partager\n' +
      '2. Sélectionnez "Sur l\'écran d\'accueil"\n\n' +
      '💡 Conseil : Déployez en production avec HTTPS pour une expérience optimale.'
    );
  };

  // Ne rien afficher si l'app est déjà installée
  if (isInstalled && !isDevelopment) return null;

  // Ne rien afficher si le bouton ne doit pas être montré
  if (!showInstall && !showUpdate && !installError) return null;

  return (
    <div className="fixed bottom-20 left-0 right-0 z-50 px-4">
      {/* Message de mise à jour */}
      {showUpdate && (
        <div className="max-w-md mx-auto mb-2 bg-orange-500 rounded-xl p-4 shadow-lg animate-bounce-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🔄</span>
              <div>
                <p className="text-white font-bold">Mise à jour disponible</p>
                <p className="text-white/80 text-sm">Redémarrez pour appliquer</p>
              </div>
            </div>
            <button
              onClick={handleUpdate}
              className="bg-white text-orange-500 px-4 py-2 rounded-lg font-bold text-sm hover:bg-orange-50 transition-colors"
            >
              Mettre à jour
            </button>
          </div>
        </div>
      )}

      {/* Message d'erreur */}
      {installError && (
        <div className="max-w-md mx-auto mb-2 bg-red-500 rounded-xl p-3 shadow-lg animate-bounce-in">
          <p className="text-white text-center text-sm">{installError}</p>
        </div>
      )}

      {/* Bouton d'installation principal */}
      {showInstall && (
        <div className="max-w-md mx-auto bg-blue-500 rounded-xl p-4 shadow-lg animate-bounce-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-2">
                {isDevelopment ? '🔧' : '📱'}
              </span>
              <div>
                <p className="text-white font-bold">
                  {isDevelopment 
                    ? '🔧 Mode Test PWA' 
                    : isOnline 
                      ? 'Installer l\'application' 
                      : 'Application disponible hors-ligne'
                  }
                </p>
                <p className="text-white/80 text-sm">
                  {isDevelopment
                    ? 'Cliquez pour voir les instructions'
                    : isOnline
                      ? 'Ajoutez sur votre écran d\'accueil'
                      : 'Profitez du mode hors-ligne'
                  }
                </p>
              </div>
            </div>
            <button
              onClick={isDevelopment ? handleDevInstall : handleInstall}
              className="bg-white text-blue-500 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors"
            >
              {isDevelopment ? 'ℹ️ Tester' : 'Installer'}
            </button>
          </div>
          <button
            onClick={() => setShowInstall(false)}
            className="absolute top-1 right-2 text-white/60 hover:text-white text-sm transition-colors"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Statut hors-ligne */}
      {!isOnline && !showInstall && (
        <div className="max-w-md mx-auto bg-yellow-500 rounded-xl p-3 shadow-lg">
          <p className="text-white text-center text-sm">
            📡 Mode hors-ligne - L'application reste fonctionnelle
          </p>
        </div>
      )}
    </div>
  );
}
