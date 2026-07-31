'use client';

import { useState, useEffect } from 'react';

export default function PWAInstall() {
  const [prompt, setPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Capturer l'événement beforeinstallprompt
    const handler = (e: Event) => {
      e.preventDefault();
      setPrompt(e);
      setShow(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Afficher quand même après 3 secondes (debug)
    setTimeout(() => setShow(true), 3000);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const install = async () => {
    if (prompt) {
      prompt.prompt();
      const { outcome } = await prompt.userChoice;
      console.log(outcome === 'accepted' ? '✅ Installée' : '❌ Refusée');
      setPrompt(null);
    } else {
      alert('Installation non disponible. Vérifiez :\n- HTTPS\n- manifest.json\n- Service Worker');
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 bg-green-500 text-white p-4 rounded-xl shadow-lg flex items-center justify-between">
      <span className="font-bold">📱 Installer l'app</span>
      <button onClick={install} className="bg-white text-green-600 px-4 py-2 rounded-lg font-bold">
        Installer
      </button>
    </div>
  );
}
