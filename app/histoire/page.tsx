// app/baka-culture/page.js
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BottomMenu from '@/components/BottomMenu';

const BakaCulturePage = () => {
    const [isCreditsVisible, setIsCreditsVisible] = useState(false);
    const [isVocabulaireVisible, setIsVocabulaireVisible] = useState(false);
    const [isNomenclatureVisible, setIsNomenclatureVisible] = useState(false);
    const [isZoomVisible, setIsZoomVisible] = useState(false);

    const [isAdVisible, setIsAdVisible] = useState(true);

    useEffect(() => {
        setIsAdVisible(true);
        const hideTimer = setTimeout(() => setIsAdVisible(false), 5000);
        const showTimer = setInterval(() => {
            setIsAdVisible(true);
            setTimeout(() => setIsAdVisible(false), 5000);
        }, 30000);
        return () => {
            clearTimeout(hideTimer);
            clearInterval(showTimer);
        };
    }, []);

    const [expandedSections, setExpandedSections] = useState({
        joursSemaine: false,
        moisSaisons: false,
        histoireVillages: false,
        peche: false,
        pecheChasse: false,
        difficultes: false,
        routes: false,
        education: false,
        economie: false,
        actesNaissance: false,
        vocabulaire: false
    });

    const routeImages = [
        { id: '1', src: '/images/WhatsApp Image 2025-12-24 at 15.35.02.jpeg' },
        { id: '2', src: '/images/WhatsApp Image 2025-12-24 at 15.35.05.jpeg' },
        { id: '3', src: '/images/WhatsApp Image 2025-12-24 at 15.35.07.jpeg' },
    ];

    const routeVideos = [
        { id: '1', src: '/videos/WhatsApp Video 2025-12-24 at 13.36.11.mp4' },
        { id: '2', src: '/videos/WhatsApp Video 2025-12-24 at 13.36.17.mp4' },
        { id: '3', src: '/videos/WhatsApp Video 2025-12-24 at 13.19.20.mp4' },
    ];

    const vocabulaireBaka = {
        categories: {
            pronoms_personnels: [
                { "francais": "Je", "phonetique": "MA/MÉ", "transcription": "ma/me" },
                { "francais": "Tu", "phonetique": "MOU", "transcription": "mu" },
                { "francais": "Il/Elle/On", "phonetique": "E", "transcription": "e" },
                { "francais": "Nous", "phonetique": "GANGA", "transcription": "gãgã" },
                { "francais": "Vous", "phonetique": "YI", "transcription": "ji" },
                { "francais": "Ils/Elles", "phonetique": "O", "transcription": "O" }
            ],
            expressions_importantes: [
                { "francais": "Moi", "phonetique": "NGA", "transcription": "ŋa" },
                { "francais": "Et", "phonetique": "TÉ", "transcription": "té" },
                { "francais": "Mon/Ma", "phonetique": "ME", "transcription": "me" },
                { "francais": "Son/Sa/Ses", "phonetique": "E", "transcription": "e" }
            ],
            couleurs: [
                { "francais": "Rouge", "phonetique": "NZINI", "transcription": "nzini" },
                { "francais": "Gris", "phonetique": "GARCINIA", "transcription": "garsinɲa" },
                { "francais": "Blanc", "phonetique": "BOUBA", "transcription": "buba" },
                { "francais": "Noir", "phonetique": "BIBI", "transcription": "bibi" },
                { "francais": "Violet", "phonetique": "ANNONA/FISTULA", "transcription": "anona/fistula" },
                { "francais": "Vert", "phonetique": "DOUKOU", "transcription": "duku" },
                { "francais": "Jaune", "phonetique": "EPWE", "transcription": "epwe" }
            ]
        }
    };

    const tableauNomenclature = {
        titre_figure: "Figure 64 : Tableau de la double nomenclature ethnique baka et des correspondances fang",
        donnees_tableau: [
            { nom_baka: "ékuambe", signification: "petit éléphant qui marche seul", correspondance_fang: "éssabok de Bolossoville, jémekak" },
            { nom_baka: "nguluma", signification: "Duboscia macrocarpa", correspondance_fang: "" },
            { nom_baka: "esilo", signification: "Liane rotin", correspondance_fang: "jesok ou jesoy de minvoule" },
            { nom_baka: "kpongbo", signification: "Liane rotin", correspondance_fang: "jesok ou jesoy de minvoule" },
            { nom_baka: "esolo", signification: "puits", correspondance_fang: "ésandon de Bitam, esibon de Minvoul , esobam de Guinee Equatorial" },
            { nom_baka: "gbomongo", signification: "la bouche-eau ", correspondance_fang: "ésandon de Bitam, esibon de Minvoul , esobam de Guinee Equatorial" },
            { nom_baka: "kpotolo", signification: "litt. \"il n'a pas trouvé de sens à ce terme\"", correspondance_fang: "esansia" },
            { nom_baka: "likemba", signification: "champignon non identifier ", correspondance_fang: "esania" },
            { nom_baka: "môma", signification: "echo", correspondance_fang: "essania" },
            { nom_baka: "mambe", signification: "procobus pennanti", correspondance_fang: "esakue" },
            { nom_baka: "sandza", signification: "rinorea oblongifolia, R elliotii", correspondance_fang: "" },
            { nom_baka: "Mombito", signification: " gros gabarit de landolphia", correspondance_fang: "esan" },
            { nom_baka: "makpa", signification: "landolphia", correspondance_fang: "esan" },
            { nom_baka: "mopandze", signification: "insecte non identitfie", correspondance_fang: "esamaisel de minkebe" },
            { nom_baka: "ndongnia", signification: "gorille solitaire", correspondance_fang: "esanji" },
            { nom_baka: "ngile", signification: "le plu gros des gorille", correspondance_fang: "esanji" },
            { nom_baka: "", signification: "gorille solitaire", correspondance_fang: "exancari de Minkebe" },
            { nom_baka: "ngàlè", signification: "le plus gros des gorilles", correspondance_fang: "esagu (litt. fils de gorille)" },
            { nom_baka: "ndòngô", signification: "grand tambour", correspondance_fang: "" },
            { nom_baka: "ndômbô", signification: "tambour à une membrane", correspondance_fang: "" },
            { nom_baka: "ndèmbè", signification: "période qui annonce la pluie", correspondance_fang: "adzemmveng, femvep (litt. la pluie) de Minvoul" },
            { nom_baka: "mali", signification: "pluie", correspondance_fang: "Minvoul" },
            { nom_baka: "jandzi", signification: "paquet de bois flambera", correspondance_fang: "ésankan (litt. flambeau), eson de Oyem" },
            { nom_baka: "ngéià", signification: "fumée", correspondance_fang: "" },
            { nom_baka: "vulù", signification: "petite souris non identifiée", correspondance_fang: "" }
        ]
    };

    const toggleSection = (sectionName) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionName]: !prev[sectionName]
        }));
    };

    // Composant ZoomableImage
    const ZoomableImage = ({ onClose }) => {
        return (
            <div className="fixed inset-0 z-50 bg-black flex flex-col">
                <div className="flex justify-end items-center px-5 pt-12 pb-5 bg-black/80">
                    <button
                        className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors"
                        onClick={onClose}
                    >
                        <span className="text-white text-xl font-bold">✕</span>
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl h-[80vh]">
                        <Image
                            src="/images/1000605240.jpg"
                            alt="Nomenclature Baka-Fang"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="py-4 bg-black/80 text-center">
                    <p className="text-white text-sm">Cliquez sur l'image pour zoomer • Déplacez pour voir les détails</p>
                </div>
            </div>
        );
    };

    // Modal générique
    const Modal = ({ isOpen, onClose, title, children }) => {
        if (!isOpen) return null;
        return (
            <div
                className="fixed inset-0 z-40 bg-black/60 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <div
                    className="w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl p-6 overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                        <button
                            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                            onClick={onClose}
                        >
                            <span className="text-lg text-gray-800 font-bold">✕</span>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="min-h-screen bg-gray-50 pb-20">
                {/* Header */}
                <div className="bg-green-500 py-5 text-center px-4">
                    <h1 className="text-3xl font-bold text-white">Culture Baka</h1>
                    <p className="text-sm text-white/90 mt-1">Découvrez la richesse culturelle des Baka</p>
                </div>

                {/* Publicité */}
                {isAdVisible && (
                    <a
                        href="https://eden-azure-one.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-4 mt-3 mb-2 bg-white rounded-2xl overflow-hidden shadow-md border border-amber-400 block hover:shadow-lg transition-shadow"
                    >
                        <div className="flex p-3 items-center bg-amber-50">
                            <div className="flex-1 pr-3">
                                <p className="text-base font-bold text-amber-600 mb-0.5">🛍️ Découvrez Eden</p>
                                <p className="text-xs text-gray-600 mb-1">Votre boutique en ligne de produits locaux</p>
                                <p className="text-xs font-bold text-blue-700">Cliquez pour découvrir →</p>
                            </div>
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                    src="https://klgcnd8ya3.ufs.sh/f/7nK9zx6Ac4DRxG4Pm2SgTieJQ7M3LE5K9vPwnrb6tzhyOFN8"
                                    alt="Eden"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </a>
                )}

                {/* Boutons top */}
                <div className="flex gap-2 px-4 mt-2 mb-2">
                    <button
                        className="flex-1 py-3.5 rounded-lg bg-blue-500 shadow-md hover:bg-blue-600 transition-colors text-white font-bold text-base"
                        onClick={() => setIsVocabulaireVisible(true)}
                    >
                        📚 Vocabulaire Baka
                    </button>
                    <button
                        className="flex-1 py-3.5 rounded-lg bg-purple-600 shadow-md hover:bg-purple-700 transition-colors text-white font-bold text-base"
                        onClick={() => setIsNomenclatureVisible(true)}
                    >
                        📊 Nomenclature
                    </button>
                </div>

                {/* Jours de la semaine */}
                <div className="p-4 mb-4 bg-white rounded-lg mx-2 shadow-md">
                    <button
                        className="w-full flex justify-between items-center"
                        onClick={() => toggleSection('joursSemaine')}
                    >
                        <span className="text-xl font-bold text-gray-800">Les jours de la semaine chez les Baka</span>
                        <span className="text-2xl font-bold text-green-500">
                            {expandedSections.joursSemaine ? '−' : '+'}
                        </span>
                    </button>
                    {expandedSections.joursSemaine && (
                        <>
                            <p className="text-base leading-6 text-gray-600 mt-4 mb-3">Chez les Baka, la notion de semaine n'est pas structurée comme dans les langues occidentales. Dans leur culture et leur langue, un seul jour possède un nom spécifique : le dimanche. Les autres jours ne sont pas nommés individuellement.</p>
                            <div className="bg-gray-100 p-4 rounded-lg mb-3">
                                <p className="text-lg font-semibold mb-2 text-gray-800">1. Le seul jour nommé :</p>
                                <p className="font-bold text-base text-gray-800 mb-2">Dimanche → Moto Ngambo</p>
                                <p className="text-base leading-6 text-gray-600">Ce terme signifie le jour du regroupement / du repos et c'est le seul jour clairement identifié dans la langue baka.</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg mb-3">
                                <p className="text-lg font-semibold mb-2 text-gray-800">2. Les autres jours de la semaine :</p>
                                <p className="font-bold text-base text-gray-800 mb-2">Mpèket : signifie simplement « le jour ».</p>
                                <p className="text-base leading-6 text-gray-600">Exemple : pour parler d'un jour en général, ou du jour suivant.</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg mb-3">
                                <p className="text-lg font-semibold mb-2 text-gray-800">3. Pour dire « demain » ou « le jour d'après » :</p>
                                <p className="font-bold text-base text-gray-800">Adupwé : signifie demain, le jour à venir.</p>
                            </div>
                        </>
                    )}
                </div>

                {/* Mois et saisons */}
                <div className="p-4 mb-4 bg-white rounded-lg mx-2 shadow-md">
                    <button
                        className="w-full flex justify-between items-center"
                        onClick={() => toggleSection('moisSaisons')}
                    >
                        <span className="text-xl font-bold text-gray-800">Les mois et saisons chez les Baka</span>
                        <span className="text-2xl font-bold text-green-500">
                            {expandedSections.moisSaisons ? '−' : '+'}
                        </span>
                    </button>
                    {expandedSections.moisSaisons && (
                        <>
                            <p className="text-base leading-6 text-gray-600 mt-4 mb-3">Chez les Baka, les 12 mois du calendrier ne portent aucun nom. Pour se repérer dans le temps, ils n'utilisent pas des mois mais les saisons naturelles qui rythment leur vie.</p>
                            <div className="flex flex-wrap justify-between mb-4">
                                <div className="flex-1 min-w-[48%] p-4 rounded-lg mb-3 mr-2 bg-blue-50">
                                    <p className="text-lg font-bold mb-2">🌧️ BONGOMA</p>
                                    <p className="text-base font-semibold mb-2 text-gray-600">Saison de pluie</p>
                                    <div className="ml-2">
                                        <p className="text-sm leading-5 text-gray-600 mb-1">• Février → Juin</p>
                                        <p className="text-sm leading-5 text-gray-600 mb-1">• Septembre → Décembre</p>
                                    </div>
                                </div>
                                <div className="flex-1 min-w-[48%] p-4 rounded-lg mb-3 ml-2 bg-orange-50">
                                    <p className="text-lg font-bold mb-2">☀️ ELANGA / YAKA</p>
                                    <p className="text-base font-semibold mb-2 text-gray-600">Saison sèche</p>
                                    <div className="ml-2">
                                        <p className="text-sm leading-5 text-gray-600 mb-1">• Juin → Septembre</p>
                                        <p className="text-sm leading-5 text-gray-600 mb-1">• Décembre → Février</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Histoire des villages BAKA */}
                <div className="p-4 mb-4 bg-white rounded-lg mx-2 shadow-md">
                    <button
                        className="w-full flex justify-between items-center"
                        onClick={() => toggleSection('histoireVillages')}
                    >
                        <span className="text-xl font-bold text-gray-800">Histoire des villages Baka</span>
                        <span className="text-2xl font-bold text-green-500">
                            {expandedSections.histoireVillages ? '−' : '+'}
                        </span>
                    </button>
                    {expandedSections.histoireVillages && (
                        <div className="mt-4">
                            <p className="text-base leading-6 text-gray-600 mb-3">Au début des années 2000, on recensait 7 villages Baka, puis un 8ᵉ est apparu avec le temps.</p>
                            <div className="mb-5">
                                <p className="text-base font-bold text-gray-800 mb-3">Villages Baka recensés (2000–2025)</p>
                                <div className="flex flex-wrap justify-between mb-4">
                                    <div className="flex-1 min-w-[48%] p-4 rounded-lg mb-4 mr-2 bg-green-50">
                                        <p className="text-base font-bold mb-3 text-gray-800 text-center">Villages existants aujourd'hui (2025)</p>
                                        <div className="ml-2">
                                            <p className="text-sm leading-5 text-gray-600 mb-1">• Bitougha — Village 100% Baka</p>
                                            <p className="text-sm leading-5 text-gray-600 mb-1">• Doumassi — Majorité Baka</p>
                                            <p className="text-sm leading-5 text-gray-600 mb-1">• Nkoakom — Village mixte</p>
                                            <p className="text-sm leading-5 text-gray-600 mb-1">• Eto'o / Etogo — Majorité Baka</p>
                                            <p className="text-sm leading-5 text-gray-600 mb-1">• Elarmitang (Esseng) — Mixte</p>
                                            <p className="text-sm leading-5 text-gray-600 mb-1">• Minbang — Majorité Fang</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-[48%] p-4 rounded-lg mb-4 ml-2 bg-red-50">
                                        <p className="text-base font-bold mb-3 text-gray-800 text-center">Villages disparus</p>
                                        <div className="ml-2">
                                            <p className="text-sm leading-5 text-gray-600 mb-1">• Zangaville</p>
                                            <p className="text-sm leading-5 text-gray-600 mb-1">• Oveng-Alene</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <p className="text-base font-bold text-gray-800 mb-3">Histoires des villages (résumées et clarifiées)</p>
                                <div className="space-y-3">
                                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-l-blue-500">
                                        <p className="text-lg font-semibold mb-2 text-gray-800">Histoire de Zangaville</p>
                                        <p className="text-sm leading-5 text-gray-600 mb-2">Zangaville est né autour des années 1999–2000. Son origine commence au village Oyomo, où deux hommes influents — Bito'o Osame, un planteur de cacao (Fang), et Nze Mikoumou, futur chef Baka et grand nganga — s'opposaient à cause de leurs croyances spirituelles différentes (rite Cossè chez les Fang, rite Edzengui chez les Baka).</p>
                                        <p className="text-sm leading-5 text-gray-600 mb-2">Pour éviter les conflits, Nze Mikoumou quitte Oyomo avec ses trois femmes et traverse les rivières Ntem et Nkié pour s'installer à Oveng-Alene. Sa fille, mariée à Mbuman, le fait venir près d'elle, mais son gendre refuse sa présence. Il se rend alors chez le chef de canton Nze Mikama, qui l'aide à créer un nouveau village : Zangaville.</p>
                                        <p className="text-sm leading-5 text-gray-600">Pendant plusieurs années, Zangaville prospère grâce à la renommée spirituelle de Nze Mikoumou. Mais avec l'âge, la mort de ses épouses (dont Odoline et plus tard Nzangue) puis du chef lui-même, la population quitte progressivement le village. La dernière habitante, Esseng, finit par partir à Bitougha. Aujourd'hui, Zangaville est un village totalement disparu, sans aucune présence humaine.</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-l-blue-500">
                                        <p className="text-lg font-semibold mb-2 text-gray-800">Histoire d'Oveng-Alene</p>
                                        <p className="text-sm leading-5 text-gray-600 mb-2">Ancien village Fang dédié au cacao, Oveng-Alene entretenait une coopération avec les Baka. Les Fang fournissaient les armes nécessaires pour la chasse, et les Baka apportaient leur force de travail et leur savoir dans la forêt. Les deux peuples vivaient ainsi dans une harmonie relative.</p>
                                        <p className="text-sm leading-5 text-gray-600 mb-2">Plus tard, un conflit éclate entre des Baka à cause d'une femme nommée Aduma. La dispute dure trois jours et divise les Baka en deux clans supplémentaires, rejoignant chacun un clan Fang déjà existant. Oveng-Alene se retrouve alors composé de quatre groupes rivaux.</p>
                                        <p className="text-sm leading-5 text-gray-600">Le chef Bantu, Binze Melo'o, dépassé par les tensions, quitte le village. Son fils tente de résoudre le conflit, sans succès. Les affrontements provoquent la fuite progressive de la population. Aujourd'hui, Oveng-Alene est totalement abandonné, devenu un village disparu.</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-l-blue-500">
                                        <p className="text-lg font-semibold mb-2 text-gray-800">Histoire de Minbang</p>
                                        <p className="text-sm leading-5 text-gray-600 mb-2">À Minbang, les Baka sont d'abord venus offrir leur main-d'œuvre aux Fang pour l'entretien des plantations de cacao et la chasse. En échange, ils recevaient nourriture, abri et accès aux armes, essentielle pour la chasse.</p>
                                        <p className="text-sm leading-5 text-gray-600 mb-2">Avec le temps, les Fang abandonnent leurs plantations, laissant les Baka travailler seuls. Mais sans les Fang pour fournir les armes nécessaires à la chasse, les Baka perdent leur autonomie. Beaucoup quittent alors le village pour retourner en ville ou dans d'autres camps forestiers.</p>
                                        <p className="text-sm leading-5 text-gray-600">Lors de la visite de terrain, on observe une seule maison Baka habitée par trois hommes, face à une trentaine de maisons Fang. Minbang est donc aujourd'hui majoritairement Fang, les Baka n'y représentant plus qu'une très faible présence. Il ne peut plus être considéré comme un « village Baka ».</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-500 mt-5">
                                <p className="text-lg font-bold mb-3 text-green-800 text-center underline">FICHE RÉSUMÉ</p>
                                <div className="px-2">
                                    <p className="text-sm leading-5 text-gray-600 mb-2"><span className="font-bold text-gray-800">Villages existants aujourd'hui (2025): </span>Bitougha, Doumassi, Nkoakom, Eto'o/Etogo, Elarmitang, Minbang</p>
                                    <p className="text-sm leading-5 text-gray-600 mb-2"><span className="font-bold text-gray-800">Villages disparus: </span>Zangaville, Oveng-Alene</p>
                                    <p className="text-sm leading-5 text-gray-600 mb-2"><span className="font-bold text-gray-800">Histoire des villages: </span></p>
                                    <div className="ml-4 mt-1">
                                        <p className="text-sm leading-5 text-gray-600 mb-1.5">• Zangaville : créé par le chef Baka Nze Mikoumou ; disparu après sa mort et le départ des habitants.</p>
                                        <p className="text-sm leading-5 text-gray-600 mb-1.5">• Oveng-Alene : abandonné après des conflits internes entre groupes Fang et Baka.</p>
                                        <p className="text-sm leading-5 text-gray-600 mb-1.5">• Minbang : autrefois actif grâce à la coopération Fang-Baka ; aujourd'hui village à majorité Fang.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* La Pêche */}
                <div className="p-4 mb-4 bg-white rounded-lg mx-2 shadow-md">
                    <button
                        className="w-full flex justify-between items-center"
                        onClick={() => toggleSection('peche')}
                    >
                        <span className="text-xl font-bold text-gray-800">La Pêche dans la Culture Baka</span>
                        <span className="text-2xl font-bold text-green-500">
                            {expandedSections.peche ? '−' : '+'}
                        </span>
                    </button>
                    {expandedSections.peche && (
                        <>
                            <p className="text-base leading-6 text-gray-600 mt-4 mb-3">La pêche est une activité essentielle dans la culture Baka, représentant une source importante de subsistance et un élément central de leur mode de vie traditionnel.</p>
                            <div className="relative w-full h-64 rounded-lg mt-3 mb-3 overflow-hidden">
                                <Image
                                    src="/images/WhatsApp Image 2025-12-24 at 15.35.49.jpeg"
                                    alt="Pêche Baka"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-base leading-6 text-gray-600">Les Baka utilisent diverses méthodes de pêche traditionnelles, adaptées aux différents cours d'eau et saisons.</p>
                        </>
                    )}
                </div>

                {/* Pêche et chasse */}
                <div className="p-4 mb-4 bg-white rounded-lg mx-2 shadow-md">
                    <button
                        className="w-full flex justify-between items-center"
                        onClick={() => toggleSection('pecheChasse')}
                    >
                        <span className="text-xl font-bold text-gray-800">Pêche et Chasse : Évolution Économique</span>
                        <span className="text-2xl font-bold text-green-500">
                            {expandedSections.pecheChasse ? '−' : '+'}
                        </span>
                    </button>
                    {expandedSections.pecheChasse && (
                        <>
                            <p className="text-base leading-6 text-gray-600 mt-4 mb-3">Chez les Baka de la région de Minvoul, la pêche est devenue l'activité économique principale, devant la chasse.</p>
                            <div className="bg-gray-100 p-4 rounded-lg mb-3">
                                <p className="text-lg font-semibold mb-2 text-gray-800">1. Le déclin de la chasse :</p>
                                <p className="text-base leading-6 text-gray-600 mb-3">Autrefois pilier central, la chasse est devenue une activité restrictive et aléatoire.</p>
                                <div className="ml-2">
                                    <p className="text-sm leading-5 text-gray-600 mb-1">• Seul le village de BITOUGA possède encore des armes.</p>
                                    <p className="text-sm leading-5 text-gray-600 mb-1">• Dans les autres villages Baka visités, ils n'ont plus d'armes.</p>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg mb-3">
                                <p className="text-lg font-semibold mb-2 text-gray-800">2. L'essor central de la pêche :</p>
                                <p className="text-base leading-6 text-gray-600 mb-3">La pêche est désormais pratiquée intensivement.</p>
                                <div className="ml-2">
                                    <p className="text-sm leading-5 text-gray-600 mb-1">• Elle structure l'économie et le calendrier.</p>
                                    <p className="text-sm leading-5 text-gray-600 mb-1">• Cette activité est devenue le pilier stable de l'économie domestique.</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Difficultés des Baka */}
                <div className="p-4 mb-4 bg-red-50 rounded-lg mx-2 shadow-md">
                    <button
                        className="w-full flex justify-between items-center"
                        onClick={() => toggleSection('difficultes')}
                    >
                        <span className="text-xl font-bold text-red-700">Les Difficultés des Baka de Minvoul (2025)</span>
                        <span className="text-2xl font-bold text-red-500">
                            {expandedSections.difficultes ? '−' : '+'}
                        </span>
                    </button>
                    {expandedSections.difficultes && (
                        <>
                            <button
                                className="w-full flex justify-between items-center py-2"
                                onClick={() => toggleSection('routes')}
                            >
                                <span className="text-lg font-bold text-red-700">1. Le problème des routes</span>
                                <span className="text-2xl font-bold text-red-500">
                                    {expandedSections.routes ? '−' : '+'}
                                </span>
                            </button>
                            {expandedSections.routes && (
                                <>
                                    <p className="text-sm leading-5 text-gray-600 mb-2">Les routes desservant les villages baka de Minvoul sont en très mauvais état.</p>
                                    <p className="text-base font-bold mt-4 mb-2 text-gray-800">Maisons BAKA :</p>
                                    <div className="flex overflow-x-auto gap-4 my-3 pb-2">
                                        {routeImages.map((item, index) => (
                                            <div key={item.id} className="flex-shrink-0">
                                                <div className="relative w-72 h-45 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={item.src}
                                                        alt={`Image ${index + 1}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <p className="mt-2 text-xs text-gray-600 text-center">Image {index + 1}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-base font-bold mt-6 mb-2 text-gray-800">Vidéos des routes :</p>
                                    <div className="space-y-3">
                                        {routeVideos.map((video) => (
                                            <div key={video.id} className="bg-gray-100 p-3 rounded-lg">
                                                <p className="text-sm font-semibold mb-2 text-gray-800 text-center">État des routes</p>
                                                <video controls className="w-full rounded-lg" style={{ height: '250px' }}>
                                                    <source src={video.src} type="video/mp4" />
                                                    Votre navigateur ne supporte pas la lecture de vidéos.
                                                </video>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                            <button
                                className="w-full flex justify-between items-center py-2"
                                onClick={() => toggleSection('education')}
                            >
                                <span className="text-lg font-bold text-red-700">2. Les défis de l'éducation</span>
                                <span className="text-2xl font-bold text-red-500">
                                    {expandedSections.education ? '−' : '+'}
                                </span>
                            </button>
                            {expandedSections.education && (
                                <>
                                    <p className="text-sm leading-5 text-gray-600 mb-2">L'accès à l'éducation est particulièrement difficile pour les enfants baka.</p>
                                    <div className="ml-2">
                                        <p className="text-sm leading-5 text-gray-600 mb-1">• Établissements scolaires trop éloignés</p>
                                        <p className="text-sm leading-5 text-gray-600 mb-1">• Pauvreté des familles</p>
                                        <p className="text-sm leading-5 text-gray-600 mb-1">• Manque de fournitures scolaires</p>
                                    </div>
                                    <div className="relative w-full h-50 rounded-lg mt-3 overflow-hidden">
                                        <Image
                                            src="/images/JHHH.jpeg"
                                            alt="Éducation Baka"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </>
                            )}
                            <button
                                className="w-full flex justify-between items-center py-2"
                                onClick={() => toggleSection('economie')}
                            >
                                <span className="text-lg font-bold text-red-700">3. Les difficultés économiques</span>
                                <span className="text-2xl font-bold text-red-500">
                                    {expandedSections.economie ? '−' : '+'}
                                </span>
                            </button>
                            {expandedSections.economie && (
                                <>
                                    <p className="text-sm leading-5 text-gray-600 mb-2">La majorité des Baka de Minvoul vivent dans une grande précarité économique.</p>
                                    <div className="relative w-full h-50 rounded-lg mt-3 overflow-hidden">
                                        <Image
                                            src="/images/WhatsApp Image 2025-12-24 at 15.35.04 (1).jpeg"
                                            alt="Économie Baka"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </>
                            )}
                            <button
                                className="w-full flex justify-between items-center py-2"
                                onClick={() => toggleSection('actesNaissance')}
                            >
                                <span className="text-lg font-bold text-red-700">4. Le problème des actes de naissance</span>
                                <span className="text-2xl font-bold text-red-500">
                                    {expandedSections.actesNaissance ? '−' : '+'}
                                </span>
                            </button>
                            {expandedSections.actesNaissance && (
                                <p className="text-sm leading-5 text-gray-600 mb-2">De nombreux enfants baka ne disposent pas d'acte de naissance.</p>
                            )}
                            <div className="bg-red-200 p-4 rounded-lg border-l-4 border-l-red-700 mt-4">
                                <p className="text-lg font-bold mb-2 text-red-700">Conclusion</p>
                                <p className="text-sm leading-5 text-gray-600">Les difficultés rencontrées par les Baka de Minvoul sont multiples et étroitement liées.</p>
                            </div>
                        </>
                    )}
                </div>

                {/* Boutons en bas */}
                <div className="flex gap-2 px-4 mt-4 mb-8">
                    <button
                        className="flex-1 py-3.5 rounded-lg bg-blue-500 shadow-md hover:bg-blue-600 transition-colors text-white font-bold text-sm"
                        onClick={() => setIsVocabulaireVisible(true)}
                    >
                        📚 Vocabulaire
                    </button>
                    <button
                        className="flex-1 py-3.5 rounded-lg bg-purple-600 shadow-md hover:bg-purple-700 transition-colors text-white font-bold text-sm"
                        onClick={() => setIsNomenclatureVisible(true)}
                    >
                        📊 Nomenclature
                    </button>
                    <button
                        className="flex-1 py-3.5 rounded-lg bg-green-500 shadow-md hover:bg-green-600 transition-colors text-white font-bold text-sm"
                        onClick={() => setIsCreditsVisible(true)}
                    >
                        👤 À propos
                    </button>
                </div>
            </div>

            {/* Modal Nomenclature */}
            <Modal isOpen={isNomenclatureVisible} onClose={() => setIsNomenclatureVisible(false)} title="📊 Nomenclature Ethnique">
                <div>
                    <p className="text-lg font-bold text-center mb-5 text-gray-800">{tableauNomenclature.titre_figure}</p>
                    <div className="border border-gray-200 rounded-lg overflow-hidden mb-5">
                        <div className="flex bg-purple-600">
                            <span className="flex-1.2 font-bold text-white p-3 text-center text-sm">Nom Baka</span>
                            <span className="flex-[2] font-bold text-white p-3 text-center text-sm">Signification</span>
                            <span className="flex-1.5 font-bold text-white p-3 text-center text-sm">Correspondance Fang</span>
                        </div>
                        {tableauNomenclature.donnees_tableau.map((item, index) => (
                            <div key={index} className={`flex border-t border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                <span className="flex-1.2 font-bold p-2.5 text-center border-r border-gray-200 text-xs">{item.nom_baka}</span>
                                <span className="flex-[2] p-2.5 text-center border-r border-gray-200 text-xs">{item.signification}</span>
                                <span className="flex-1.5 p-2.5 text-center text-xs">{item.correspondance_fang || "—"}</span>
                            </div>
                        ))}
                    </div>
                    <div className="my-5 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-base font-bold text-purple-600 mb-3 text-center">Document original - Nomenclature Baka-Fang</p>
                        <button
                            className="w-full relative block"
                            onClick={() => setIsZoomVisible(true)}
                        >
                            <div className="relative w-full h-96 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/1000605240.jpg"
                                    alt="Nomenclature Baka-Fang"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                                <span className="text-white text-base font-bold bg-black/70 px-4 py-2 rounded-full">🔍 CLIQUER POUR ZOOMER</span>
                            </div>
                        </button>
                        <p className="mt-3 text-xs text-gray-600 italic text-center">Figure 64 : Double nomenclature ethnique baka et correspondances fang</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-l-purple-700">
                        <p className="text-base font-bold text-purple-800 mb-2">ℹ️ À propos de cette nomenclature</p>
                        <p className="text-sm leading-5 text-gray-600">Cette nomenclature a été établie en hommage à Brigitte Ebengue (2015).</p>
                    </div>
                </div>
            </Modal>

            {/* Modal Zoom */}
            {isZoomVisible && <ZoomableImage onClose={() => setIsZoomVisible(false)} />}

            {/* Modal Vocabulaire */}
            <Modal isOpen={isVocabulaireVisible} onClose={() => setIsVocabulaireVisible(false)} title="📚 Vocabulaire Baka">
                <div>
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-3 border-b-2 border-green-500 pb-1">Pronoms Personnels</h3>
                        <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                            <div className="flex bg-green-500">
                                <span className="flex-1 font-bold text-white p-3 text-center text-sm">Français</span>
                                <span className="flex-1 font-bold text-white p-3 text-center text-sm">Phonétique</span>
                                <span className="flex-1 font-bold text-white p-3 text-center text-sm">Transcription</span>
                            </div>
                            {vocabulaireBaka.categories.pronoms_personnels.map((item, index) => (
                                <div key={index} className="flex border-t border-gray-200">
                                    <span className="flex-1 p-3 text-center border-r border-gray-200 text-sm">{item.francais}</span>
                                    <span className="flex-1 p-3 text-center border-r border-gray-200 text-sm">{item.phonetique}</span>
                                    <span className="flex-1 p-3 text-center text-sm">{item.transcription}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-3 border-b-2 border-green-500 pb-1">Expressions Importantes</h3>
                        <div className="flex flex-wrap justify-between mb-4">
                            {vocabulaireBaka.categories.expressions_importantes.map((item, index) => (
                                <div key={index} className="w-[48%] bg-gray-100 p-3 rounded-lg mb-3 items-center border border-gray-200 text-center">
                                    <p className="text-sm font-bold text-gray-800 mb-1">{item.francais}</p>
                                    <p className="text-base font-bold text-green-500 mb-0.5">{item.phonetique}</p>
                                    <p className="text-xs text-gray-600 italic">[{item.transcription}]</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-3 border-b-2 border-green-500 pb-1">Couleurs</h3>
                        <div className="flex flex-wrap justify-between mb-4">
                            {vocabulaireBaka.categories.couleurs.map((couleur, index) => {
                                const getBackgroundColor = (colorName) => {
                                    switch (colorName.toLowerCase()) {
                                        case 'jaune': return 'bg-amber-100';
                                        case 'rouge': return 'bg-red-100';
                                        case 'gris': return 'bg-gray-200';
                                        case 'vert': return 'bg-green-100';
                                        case 'blanc': return 'bg-white';
                                        case 'noir': return 'bg-gray-900';
                                        case 'violet': return 'bg-purple-100';
                                        default: return 'bg-gray-100';
                                    }
                                };
                                const getTextColor = (colorName) => colorName.toLowerCase() === 'noir' ? 'text-white' : 'text-black';
                                return (
                                    <div key={index} className={`w-[48%] p-4 rounded-lg mb-3 items-center border border-gray-200 shadow-sm text-center ${getBackgroundColor(couleur.francais)}`}>
                                        <p className={`text-sm font-bold mb-1 ${getTextColor(couleur.francais)}`}>{couleur.francais}</p>
                                        <p className={`text-base font-bold mb-0.5 ${getTextColor(couleur.francais)}`}>{couleur.phonetique}</p>
                                        <p className={`text-xs italic ${getTextColor(couleur.francais)}`}>[{couleur.transcription}]</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-l-blue-500">
                        <p className="text-base font-bold text-blue-900 mb-2">ℹ️ À propos du vocabulaire Baka</p>
                        <p className="text-sm leading-5 text-gray-600">Le vocabulaire présenté ici représente une sélection de mots et expressions de la langue Baka.</p>
                    </div>
                </div>
            </Modal>

            {/* Modal Crédits */}
            <Modal isOpen={isCreditsVisible} onClose={() => setIsCreditsVisible(false)} title="À propos de l'équipe">
                <div>
                    <div className="flex items-start bg-gray-50 rounded-xl p-4 mt-2.5">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-3 flex-shrink-0">
                            <Image
                                src="/images/WhatsApp Image 2025-12-24 at 15.54.59.jpeg"
                                alt="NGUEMA NDONG"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-bold text-green-500 mb-0.5">Fondateur</p>
                            <p className="text-base font-bold text-gray-800 mb-0.5">NGUEMA NDONG</p>
                            <p className="text-xs text-gray-600 leading-4">Étudiant en chaire UNESCO BANTUPHONIE, Master 2 spécialisé en langues et savoirs en danger.</p>
                            <div className="mt-2 p-2 bg-green-50 rounded-lg border border-green-100">
                                <p className="text-xs font-semibold text-green-800 mb-0.5">📞 076 22 60 81 / 066 34 26 93</p>
                                <p className="text-xs font-semibold text-green-800">✉️ nguemalumiere513@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start bg-gray-50 rounded-xl p-4 mt-2.5">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-3 flex-shrink-0">
                            <Image
                                src="/images/WhatsApp Image 2026-01-27 at 11.41.39.jpeg"
                                alt="Josué BOULINGUI"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-bold text-green-500 mb-0.5">Développeur</p>
                            <p className="text-base font-bold text-gray-800 mb-0.5">Josué BOULINGUI</p>
                            <p className="text-xs text-gray-600 leading-4">Spécialisé en React Native. Créateur de solutions numériques à impact.</p>
                            <div className="mt-2 p-2 bg-green-50 rounded-lg border border-green-100">
                                <p className="text-xs font-semibold text-green-800 mb-0.5">📞 074 69 79 91</p>
                                <p className="text-xs font-semibold text-green-800">✉️ elieboulingui2@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Menu de navigation en bas */}
            <BottomMenu />
        </>
    );
};

export default BakaCulturePage;