// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import BottomMenu from '@/components/BottomMenu';

// Images pour le Carousel Hero
const HERO_IMAGES = [
  { src: '/images/mama.jpeg', alt: 'Culture et transmission Baka' },
  { src: '/images/hero2.jpeg', alt: 'Forêt et communauté Baka' },
  { src: '/images/hero3.jpeg', alt: 'Patrimoine linguistique Gabonais' },
];

export default function DictionnaireBaka() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Rotation automatique du carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative min-h-screen pb-20 bg-stone-950 text-stone-100 font-sans">
        
        {/* SECTION HERO AVEC CAROUSEL */}
        <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
          {/* Images du Carousel */}
          {HERO_IMAGES.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              } transition-transform duration-700`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/50" />
            </div>
          ))}

          {/* Contenu Hero Overlaid */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 rounded-full backdrop-blur-md">
              Patrimoine Linguistique Gabonais
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
              Dictionnaire Baka
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100/90 font-medium max-w-2xl mx-auto mb-8 drop-shadow">
              Conserver, transmettre et explorer la richesse de la langue indigène Baka au Gabon.
            </p>

            {/* Indicateurs du Carousel */}
            <div className="flex justify-center items-center space-x-2">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentSlide ? 'w-8 bg-emerald-400' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Aller à la diapositive ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CONTENU PRINCIPAL */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 mt-8">

          {/* SECTION DÉVELOPPEUR ET VISIONNAIRE DU PROJET */}
          <section className="my-12 bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950/40 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Les Visages derrière le Projet
              </h2>
              <p className="text-stone-400 text-sm sm:text-base">
                Une synergie entre vision culturelle et ingénierie logicielle pour préserver les langues gabonaises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Le Porteur de Projet */}
              <div className="bg-stone-950/60 border border-stone-800/80 rounded-2xl p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 relative rounded-full overflow-hidden mb-4 border-2 border-emerald-500/40">
                  <Image
                    src="/images/initiateur.jpeg"
                    alt="Initiateur du projet"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-1">Le Visionnaire</h3>
                <span className="text-xs uppercase tracking-wider text-stone-500 mb-3">Porteur du Projet</span>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Soucieux de préserver le patrimoine immatériel et la richesse linguistique des peuples autochtones du Gabon, il est à l&apos;initiative de cette collecte documentaire visant à documenter la langue Baka.
                </p>
              </div>

              {/* Le Développeur */}
              <div className="bg-stone-950/60 border border-stone-800/80 rounded-2xl p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 relative rounded-full overflow-hidden mb-4 border-2 border-emerald-500/40">
                  <Image
                    src="/images/developer.jpeg"
                    alt="Développeur de l'application"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-1">L&apos;Ingénieur Logiciel</h3>
                <span className="text-xs uppercase tracking-wider text-stone-500 mb-3">Conception & Déploiement</span>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Passionné par le développement d&apos;applications à impact culturel et social, il a conçu et numérisé ce dictionnaire intégrant la synthèse vocale pour faciliter l&apos;apprentissage interactif.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION REMERCIEMENTS AVEC MAMA BAKA */}
          <section className="my-16 relative overflow-hidden rounded-3xl shadow-2xl border border-stone-800">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/mama.jpeg"
                alt="Mama Baka - Remerciements"
                fill
                className="object-cover object-center"
                quality={90}
              />
              <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-xs" />
            </div>

            <div className="relative z-10 p-8 sm:p-12 max-w-3xl">
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
                Transmission Traditionnelle
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">
                🙏 Remerciements & Contributeurs
              </h2>
              <p className="text-stone-200 leading-relaxed text-base sm:text-lg mb-6">
                Ce projet a été rédigé avec l&apos;aide précieuse de <span className="font-bold text-amber-300">NIAN NDOM</span> (65 ans) et de sa petite sœur <span className="font-bold text-amber-300">Hélène NZE ANDU</span> (60 ans), fondatrice de l&apos;association culture nature EDZENGUI.
              </p>
              <p className="text-stone-300 leading-relaxed text-sm sm:text-base">
                Avec la présence essentielle du chef de canton <span className="font-bold text-amber-300">BITOUGA NDONG AZOMBO Alain</span>, ainsi que tous les membres de la communauté ayant contribué dans l&apos;anonymat.
              </p>
            </div>
          </section>

          {/* SECTION A PROPOS */}
          <section className="bg-stone-900/50 border border-stone-800 rounded-2xl p-6 sm:p-8 mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              🌍 À propos de la langue Baka
            </h2>
            <p className="text-stone-300 leading-relaxed text-sm sm:text-base mb-4">
              La langue Baka, parlée par les populations autochtones du Gabon, est une langue d&apos;une grande concision conceptuelle où un seul terme peut regrouper plusieurs expressions françaises selon le contexte.
            </p>
            <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 text-center">
              <p className="text-xs uppercase text-stone-500 font-semibold mb-1">Exemple de polyvalence</p>
              <p className="text-2xl font-bold text-emerald-400 mb-2">NZOKO</p>
              <p className="text-stone-300 text-sm">
                Signifie à la fois : <span className="text-emerald-200">bon, bien, bienfaits, gentil, beau, belle</span>.
              </p>
            </div>
          </section>

        </div>

        {/* FOOTER */}
        <footer className="bg-stone-950 border-t border-stone-800 pt-12 pb-24 text-stone-400 text-sm">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-base mb-3">Dictionnaire Baka</h3>
              <p className="text-stone-500 text-xs leading-relaxed">
                Initiative numérique dédiée à la préservation du patrimoine linguistique de la communauté Baka au Gabon.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-3">Projet</h3>
              <p className="text-stone-500 text-xs leading-relaxed">
                Valorisation de la culture locale et transmission intergénérationnelle.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-3">Gabon Culture</h3>
              <p className="text-stone-500 text-xs leading-relaxed">
                Développé dans le respect des communautés et de la culture locale.
              </p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 pt-6 border-t border-stone-900 text-center text-xs text-stone-600">
            © {new Date().getFullYear()} Dictionnaire Baka Gabon. Tous droits réservés.
          </div>
        </footer>

      </div>

      {/* Menu de navigation mobile en bas */}
      <BottomMenu />
    </>
  );
}
