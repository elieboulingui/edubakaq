'use client';
import { useState, useEffect } from 'react';

export default function PWAInstall() {
  const [show, setShow] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    setTimeout(() => setShow(true), 2000); // bouton garanti
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const install = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      setShow(false);
    } else {
      alert('📱 Android : Menu Chrome → Installer\n📱 iPhone : Partager → Sur l\'écran d\'accueil');
    }
  };

  if (!show) return null;
  return (
    <div className="fixed bottom-20 left-2 right-2 z-[9999] bg-green-500 p-4 rounded-xl flex items-center justify-between shadow-2xl">
      <span className="text-white font-bold">📱 Installer l'app</span>
      <button onClick={install} className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold">
        Installer
      </button>
    </div>
  );
}
