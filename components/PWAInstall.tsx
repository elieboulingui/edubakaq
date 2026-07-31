"use client";

import { useEffect, useState } from "react";

declare global {
    interface WindowEventMap {
        beforeinstallprompt: BeforeInstallPromptEvent;
    }
}

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstall() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [showPrompt, setShowPrompt] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);

    useEffect(() => {
        // Vérifier si déjà installé
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsStandalone(true);
            return;
        }

        const handler = (e: BeforeInstallPromptEvent) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowPrompt(true);
        };

        const installedHandler = () => {
            setIsStandalone(true);
            setShowPrompt(false);
            setDeferredPrompt(null);
        };

        window.addEventListener("beforeinstallprompt", handler);
        window.addEventListener("appinstalled", installedHandler);

        // Afficher après 3 secondes si pas d'événement
        const timer = setTimeout(() => {
            if (!isStandalone) {
                setShowPrompt(true);
            }
        }, 3000);

        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
            window.removeEventListener("appinstalled", installedHandler);
            clearTimeout(timer);
        };
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) {
            // Instructions manuelles
            const ua = navigator.userAgent.toLowerCase();
            if (/iphone|ipad|ipod/.test(ua)) {
                alert(
                    "📱 Pour installer sur iPhone/iPad :\n\n" +
                    "1. Appuyez sur le bouton Partager 📤 (en bas de Safari)\n" +
                    "2. Faites défiler et sélectionnez \"Sur l'écran d'accueil\"\n" +
                    "3. Appuyez sur \"Ajouter\""
                );
            } else {
                alert(
                    "📱 Pour installer :\n\n" +
                    "• Ouvrez le menu Chrome (⋮)\n" +
                    "• Sélectionnez \"Installer l'application\"\n\n" +
                    "Si l'option n'apparaît pas, rafraîchissez la page."
                );
            }
            setShowPrompt(false);
            return;
        }

        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(outcome === "accepted" ? "✅ PWA installée" : "❌ Installation refusée");
        setDeferredPrompt(null);
        setShowPrompt(false);
    };

    const handleDismiss = () => {
        setShowPrompt(false);
    };

    // Ne pas afficher si déjà installé ou si le prompt est caché
    if (!showPrompt || isStandalone) return null;

    return (
        <div className="fixed bottom-20 left-3 right-3 md:left-auto md:right-4 md:bottom-20 md:max-w-sm z-50 bg-white rounded-xl shadow-xl border border-green-200 p-4 animate-bounce">
            <div className="flex gap-3 items-start">
                {/* Icône */}
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📚</span>
                </div>

                {/* Contenu */}
                <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">
                        Installer l'application
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                        Ajoutez le Dictionnaire Baka sur votre écran d'accueil pour un accès rapide.
                    </p>
                    <div className="flex gap-2 mt-3">
                        <button
                            onClick={handleInstall}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                        >
                            Installer
                        </button>
                        <button
                            onClick={handleDismiss}
                            className="text-gray-500 hover:text-gray-700 px-4 py-2 rounded-lg text-sm transition-colors"
                        >
                            Plus tard
                        </button>
                    </div>
                </div>

                {/* Bouton fermer */}
                <button
                    onClick={handleDismiss}
                    className="text-gray-400 hover:text-gray-600 flex-shrink-0 mt-1"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
