// app/rites-danses-baka/page.js
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import BottomMenu from '@/components/BottomMenu';

const BakaRitesPage = () => {
    const [isCreditsVisible, setIsCreditsVisible] = useState(false);

    // Données des vidéos
    const videos = [
        {
            id: 1,
            title: "Cérémonie Traditionnelle Baka",
            src: "/videos/video1.mp4"
        },
        {
            id: 2,
            title: "Danses et Rituels Baka - Vidéo empruntée à Naoki Matsuura",
            src: "/videos/video2.mp4"
        },
        {
            id: 3,
            title: "Danse de l'initiation du MBUMBA",
            src: "/videos/WhatsApp Video 2026-02-01 at 20.03.51.mp4"
        },
        {
            id: 4,
            title: "",
            src: "/videos/WhatsApp Video 2026-02-01 at 20.09.27.mp4"
        },
        {
            id: 5,
            title: "Petite représentation du MOBASSE",
            src: "/videos/WhatsApp Video 2026-02-01 at 20.19.27.mp4"
        }
    ];

    // Données des profils
    const profiles = [
        {
            id: 1,
            role: "Fondateur",
            name: "NGUEMA NDONG",
            image: "/images/WhatsApp Image 2025-12-24 at 15.54.59.jpeg",
            description: "Étudiant en chaire UNESCO BANTUPHONIE, Master 2 spécialisé en langues et savoirs en danger.",
            phone: "076 22 60 81 / 066 34 26 93",
            email: "nguemalumiere513@gmail.com"
        },
        {
            id: 2,
            role: "Développeur",
            name: "Josué BOULINGUI",
            image: "/images/WhatsApp Image 2026-01-27 at 11.41.39.jpeg",
            description: "Spécialisé en React Native et architectures modernes. Créateur de solutions numériques à impact.",
            phone: "074 69 79 91",
            email: "elieboulingui2@gmail.com"
        }
    ];

    return (
        <>
            <div className="min-h-screen bg-gray-50 pb-20">
                {/* En-tête avec titre */}
                <div className="bg-green-500 py-5 text-center">
                    <h1 className="text-3xl font-bold text-white">Rites et Danses Baka</h1>
                </div>

                {/* Rites et Danses d'Initiation */}
                <div className="max-w-4xl mx-auto p-4">
                    <div className="bg-white rounded-lg shadow-md p-6 mt-4">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">
                            Rites et Danses d'Initiation des Baka du Nord du Gabon
                        </h2>
                        <p className="text-base leading-6 text-gray-600 mb-4">
                            Les Baka du Nord du Gabon maintiennent une riche tradition de rites d'initiation et de danses sacrées, marquant les passages de la vie et l'accès au monde spirituel. Ces pratiques sont essentielles pour la cohésion sociale et la transmission des savoirs ancestraux.
                        </p>

                        <div className="space-y-3">
                            {/* MBUMBA */}
                            <div className="p-4 rounded-lg bg-purple-50">
                                <h3 className="text-lg font-bold mb-2 text-gray-800">
                                    Le MBUMBA : L'Appel Spirituel Féminin
                                </h3>
                                <p className="text-sm leading-5 text-gray-600 mb-2">
                                    Le MBUMBA est un rite d'initiation originaire du Sud du Gabon, mais adopté par les Baka du Nord. Il est exclusivement réservé aux femmes et ne peut être entrepris qu'après avoir reçu un appel direct du monde spirituel. Ce rite permet aux initiées d'accéder à la guérison, de développer leur pouvoir intérieur et d'obtenir des réponses aux questions cruciales de la vie.
                                </p>
                                <p className="text-sm leading-5 text-gray-600">
                                    La danse associée au MBUMBA est distinctive : les participantes attachent des boîtes de tomates vides à leurs pieds et exécutent des mouvements rythmés de gauche à droite, parfois en traçant des contours.
                                </p>
                            </div>

                            {/* EDZENGUI */}
                            <div className="p-4 rounded-lg bg-blue-50">
                                <h3 className="text-lg font-bold mb-2 text-gray-800">
                                    EDZENGUI : Le Mystère de l'Initiation Masculine
                                </h3>
                                <p className="text-sm leading-5 text-gray-600">
                                    L'initiation à EDZENGUI est un rite masculin majeur, d'abord réservé aux Baka, puis étendu aux hommes Bantu cherchant gloire, prospérité et puissance. Le futur initié est isolé dans une hutte spécialement construite où il est censé faire "un avec EDZENGUI". La durée de cet isolement varie considérablement, d'une semaine à près de deux mois, car elle est déterminée par EDZENGUI lui-même. Pendant cette période, EDZENGUI se manifeste devant la hutte pour pratiquer des rituels, tandis que le village s'anime la nuit par des danses et des chants. L'identité exacte d'EDZENGUI — qu'il soit un serpent ou un esprit – demeure un secret jalousement gardé par le chef et les anciens initiés.
                                </p>
                            </div>

                            {/* Circoncision */}
                            <div className="p-4 rounded-lg bg-green-50">
                                <h3 className="text-lg font-bold mb-2 text-gray-800">
                                    La Circoncision et les Invectives Sacrées
                                </h3>
                                <p className="text-sm leading-5 text-gray-600">
                                    La Circoncision, un autre rite de passage masculin, est accompagnée par la danse du BEKA. Cette pratique est unique en raison de la confrontation rituelle qu'elle engendre : durant la cérémonie, les parents du jeune homme et ceux de sa mère s'affrontent verbalement, s'échangeant des injures et des chants très grossiers dans leur langue. L'objectif de cette violence verbale n'est pas la discorde, mais une manière d'exprimer et de symboliser la douleur et la difficulté ressenties par l'initié pendant l'acte de la circoncision.
                                </p>
                            </div>

                            {/* Danses Traditionnelles */}
                            <div className="p-4 rounded-lg bg-orange-50">
                                <h3 className="text-lg font-bold mb-2 text-gray-800">
                                    Les Danses Traditionnelles Baka
                                </h3>
                                <p className="text-sm leading-5 text-gray-600">
                                    Outre les rites spécifiques, les Baka pratiquent des danses pour diverses cérémonies. Le BEKA est une danse polyvalente qui apparaît non seulement lors de la Circoncision, mais aussi pendant l'initiation à EDZENGUI. Enfin, le MOBASSE est une danse emblématique du groupe traditionnel Baka, appelé le BAKATIE, exécutée lors des excursions importantes et des grandes cérémonies villageoises.
                                </p>
                            </div>
                        </div>

                        {/* Vidéos des rites et danses */}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
                                Vidéos des Rites et Danses
                            </h3>

                            {videos.map((video) => (
                                <div key={video.id} className="bg-gray-100 p-3 rounded-lg mb-4">
                                    {video.title && (
                                        <p className="text-base font-semibold mb-2 text-gray-800 text-center">
                                            {video.title}
                                        </p>
                                    )}
                                    <video
                                        controls
                                        className="w-full rounded-lg"
                                        style={{ height: '250px' }}
                                        preload="metadata"
                                    >
                                        <source src={video.src} type="video/mp4" />
                                        Votre navigateur ne supporte pas la lecture de vidéos.
                                    </video>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bouton Crédits en bas */}
                    <div className="mt-6">
                        <button
                            className="w-full bg-green-500 py-4 rounded-lg shadow-md hover:bg-green-600 transition-colors"
                            onClick={() => setIsCreditsVisible(true)}
                        >
                            <span className="text-white font-bold text-base">👤 À propos de l'équipe</span>
                        </button>
                    </div>
                </div>

                {/* Modal Crédits */}
                {isCreditsVisible && (
                    <div
                        className="fixed inset-0 bg-black/55 flex items-center justify-center p-4 z-50"
                        onClick={() => setIsCreditsVisible(false)}
                    >
                        <div
                            className="w-full max-w-[420px] bg-white rounded-xl p-6 max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-800">À propos de l'équipe</h3>
                                <button
                                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                    onClick={() => setIsCreditsVisible(false)}
                                >
                                    <span className="text-lg text-gray-800 font-bold">✕</span>
                                </button>
                            </div>

                            {profiles.map((profile) => (
                                <div key={profile.id} className="flex items-start bg-gray-50 rounded-xl p-4 mt-3">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-3 flex-shrink-0">
                                        <Image
                                            src={profile.image}
                                            alt={`Photo de ${profile.name}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-bold text-green-500 mb-0.5">{profile.role}</p>
                                        <p className="text-base font-bold text-gray-800 mb-1">{profile.name}</p>
                                        <p className="text-xs text-gray-600 leading-4">
                                            {profile.description}
                                        </p>
                                        <div className="mt-2 p-2 bg-gray-200 rounded-md">
                                            <p className="text-xs font-medium text-gray-700 mb-0.5">📞 {profile.phone}</p>
                                            <p className="text-xs font-medium text-gray-700">✉️ {profile.email}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Menu de navigation en bas */}
            <BottomMenu />
        </>
    );
};

export default BakaRitesPage;