// app/components/PWAInstall.js
'use client';

import React, { useState, useEffect } from 'react';

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  const [isDevelopment, setIsDevelopment] = useState(false);

  useEffect(() => {
    // Détecter si on est en développement
    const dev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    setIsDevelopment(dev);

    // Écouter l'événement beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    });

    window.addEventListener('appinstalled', () => {
      setShowInstall(false);
      console.log('PWA installée !');
    });

    // Si en développement, afficher un bouton de test
    if (dev) {
      // Déclencher l'affichage après 2 secondes
      setTimeout(() => {
        setShowInstall(true);
      }, 2000);
    }
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === 'accepted') {
        console.log('PWA installée avec succès !');
        setShowInstall(false);
      } else {
        console.log('Installation refusée');
      }
      setDeferredPrompt(null);
    }
  };

  // Bouton de test en développement
  const handleDevInstall = () => {
    alert(
      '🔧 Mode développement\n\n' +
      'Pour tester l\'installation PWA :\n' +
      '1. Ouvrez Chrome DevTools (F12)\n' +
      '2. Allez dans l\'onglet "Application"\n' +
      '3. Cliquez sur "Manifest" dans le menu de gauche\n' +
      '4. Cliquez sur "Ajouter à l\'écran d\'accueil"\n\n' +
      'OU\n\n' +
      'Déployez votre application en production avec HTTPS pour voir le vrai bouton d\'installation.'
    );
  };

  if (!showInstall) return null;

  return (
    <div className="fixed bottom-20 left-0 right-0 z-50 px-4">
      <div className="max-w-md mx-auto bg-blue-500 rounded-xl p-4 shadow-lg animate-bounce-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl mr-2">📱</span>
            <div>
              <p className="text-white font-bold">
                {isDevelopment ? '🔧 Mode Test' : 'Installer l\'application'}
              </p>
              <p className="text-white/80 text-sm">
                {isDevelopment
                  ? 'Cliquez pour voir comment installer'
                  : 'Ajoutez sur votre écran d\'accueil'
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
        >
          ✕
        </button>
      </div>
    </div>
  );
}