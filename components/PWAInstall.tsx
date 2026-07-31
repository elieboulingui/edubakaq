"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
    interface WindowEventMap {
        beforeinstallprompt: BeforeInstallPromptEvent;
    }
}

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const handler = (e: BeforeInstallPromptEvent) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowPrompt(true);
        };

        window.addEventListener("beforeinstallprompt", handler);
        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
            console.log("PWA installee");
        }
        setDeferredPrompt(null);
        setShowPrompt(false);
    };

    const handleDismiss = () => {
        setShowPrompt(false);
    };

    if (!showPrompt) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:max-w-sm z-50 bg-white rounded-xl shadow-xl border border-green-200 p-4 animate-in slide-in-from-bottom-5">
            <div className="flex gap-3 items-start">
                <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Installer l'application</h4>
                    <p className="text-sm text-gray-600 mt-1">
                        Installez Eden sur votre appareil pour un acces rapide et hors ligne.
                    </p>
                    <div className="flex gap-3 mt-3">
                        <Button size="sm" onClick={handleInstall} className="bg-green-700 hover:bg-green-800">
                            Installer
                        </Button>
                        <Button size="sm" variant="ghost" onClick={handleDismiss}>
                            Plus tard
                        </Button>
                    </div>
                </div>
                <button onClick={handleDismiss} className="text-gray-400 hover:text-gray-600">
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
