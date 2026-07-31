// app/proverbe/page.tsx
'use client';

import React, { useState } from 'react';
import BottomMenu from '@/components/BottomMenu';

// Définition des types
type ExpressionBaka = {
    id: number;
    francais: string;
    original: string;
    phonetique: string;
};

type NoteDiverse = {
    id: number;
    text: string;
};

type Proverbe = {
    id: number;
    francais: string;
    baka: string;
    explication: string;
};

type ExpandedSections = {
    expressions: boolean;
    notes: boolean;
    about: boolean;
    proverbes: boolean;
};

// 👉 Données complètes des expressions Baka
const expressionsBaka: ExpressionBaka[] = [
    { id: 1, francais: "J'aime", original: "YEMOU", phonetique: "jemu" },
    { id: 2, francais: "Il t'aime", original: "É YEMOU", phonetique: "e jemu" },
    { id: 3, francais: "Bonjour (je te dis bonjour)", original: "ME DJOUKWÈ", phonetique: "mə dzukwe" },
    { id: 4, francais: "Bonjour (je vous dis bonjour)", original: "YI A DJOUKWÈ", phonetique: "ji a dzukwe" },
    { id: 5, francais: "Tu as bien dormi ?", original: "MO NUÉ ALA", phonetique: "mo nye ala" },
    { id: 6, francais: "Vous avez bien dormi ?", original: "YI NUÉ ALA", phonetique: "ji nye ala" },
    { id: 7, francais: "Ils ont bien dormi", original: "O NUÉ ALA", phonetique: "o nye ala" },
    { id: 8, francais: "Mon ami(e)", original: "ME LOTI", phonetique: "mə loti" },
    { id: 9, francais: "Son ami", original: "E LOTI", phonetique: "e loti" },
    { id: 10, francais: "Il apprend avec moi", original: "E LÉLÉ BITÉ", phonetique: "e lele bite" },
    { id: 11, francais: "Je suis blessé", original: "MA ZE KA", phonetique: "ma ze ka" },
    { id: 12, francais: "J'ai mal au ventre", original: "BOULE BA KÉ", phonetique: "bule bake" },
    { id: 13, francais: "Elle court vite", original: "E BA MBÈ WOLO DADI", phonetique: "e ba mbɛ wolo dadi" },
    { id: 14, francais: "Pour lui", original: "NAN GUÈ", phonetique: "nã gye" },
    { id: 15, francais: "Je dors maintenant", original: "MA LAYI", phonetique: "ma laji" },
    { id: 16, francais: "Je disparais", original: "MA MÈ MONDZOÏ", phonetique: "ma me mondzoi" },
    { id: 17, francais: "Je ferme la porte de la maison", original: "MA NOUKOU MO GOUDOU (NDA)", phonetique: "ma nuku mo gudu (nda)" },
    { id: 18, francais: "Il veut être président demain", original: "MBÈ MÈ MOTOLO", phonetique: "mbɛ me motolo" },
    { id: 19, francais: "Je demande du pain", original: "MA YI BOMA BOUNGUE", phonetique: "ma ji boma bungye" },
    { id: 20, francais: "Je suis entré dans la maison", original: "MA LI E GOUDOU (NDA)", phonetique: "ma li e gudu (nda)" },
    { id: 21, francais: "Je suis enceinte", original: "MA TÈ MÈ", phonetique: "ma te me" },
    { id: 22, francais: "Il grandit vite", original: "A GA TÈ WOLO", phonetique: "a ga te wolo" },
    { id: 23, francais: "Il est fou", original: "E YEKA", phonetique: "e jeka" },
    { id: 24, francais: "Chez les Blancs (La France)", original: "TOLO BOUNGUE", phonetique: "tolo abumgye" },
    { id: 25, francais: "Ma mère est gentille", original: "GNOU ALE É NZOKO", phonetique: "nu ale e nzoko" },
    { id: 26, francais: "J'habite à Bitougha", original: "MA DOTO A BITOUGHA", phonetique: "ma doto a bituga" },
    { id: 27, francais: "Je parle", original: "MA NGOMA", phonetique: "ma ngoma" },
    { id: 28, francais: "Je prends de l'eau (j'ai soif)", original: "MA NZÈ GOGOMOU", phonetique: "ma nze gogomu" },
    { id: 29, francais: "Je suis maudit", original: "MA MÈ WANDAMA", phonetique: "ma me wadama" },
    { id: 30, francais: "Je te pardonne", original: "E OTOLÉ", phonetique: "e otole" },
    { id: 31, francais: "La route est longue", original: "MPAZÉ GUINGUÉLÉ", phonetique: "mpadze gyingyele" },
    { id: 32, francais: "La classe est sale", original: "NDA SIKOLO MBINDO", phonetique: "nda sikolo mbindo" },
    { id: 33, francais: "Il est beau", original: "É NZOKO", phonetique: "e nzoko" },
    { id: 34, francais: "Je vends de la viande", original: "MA BOMO SÓ", phonetique: "ma bomo so" },
    { id: 35, francais: "Je t'ai vu", original: "MA MOIN NOU", phonetique: "ma mwe mu" },
    { id: 36, francais: "Tu es au ciel", original: "MOU AYÉ", phonetique: "mu aje" },
    { id: 37, francais: "Chantons ensemble", original: "BÉBÉ DADI", phonetique: "bebe dadi" },
    { id: 38, francais: "Je parle avec", original: "NGOMA TÉ", phonetique: "ngoma te" },
    { id: 39, francais: "Comment vas-tu ?", original: "MONDÉ NZOKO ?", phonetique: "mõde nzoko" },
    { id: 40, francais: "Je vais bien", original: "MA NZOKO", phonetique: "ma nzoko" },
    { id: 41, francais: "Bonne journée", original: "NZILA MPÉ", phonetique: "nze nze la mpe" },
    { id: 42, francais: "J'ai touché l'arbre", original: "MA WOUÈ LO", phonetique: "ma wue lo" },
    { id: 43, francais: "Touche-moi", original: "MA WOUÈ NGA", phonetique: "ma wue nga" },
    { id: 44, francais: "Ne me parle pas", original: "MONGO MA TE YODE", phonetique: "mongo ma te yode" },
    { id: 45, francais: "Laisse-moi", original: "ÔLÈ", phonetique: "ole" },
    { id: 46, francais: "Il est déjà mort", original: "É MPOUÉ", phonetique: "e mpue" },
    { id: 47, francais: "Il est mauvais", original: "É SITI", phonetique: "e siti" },
    { id: 48, francais: "Ne parle pas avec moi", original: "MONGO MA TE PODÉ", phonetique: "mõgo ma te pode" },
    { id: 49, francais: "Enlever quelqu'un", original: "NA TOBÈZO", phonetique: "na tɔbɛzɔ" },
    { id: 50, francais: "Le monde", original: "E TOLO", phonetique: "tɔlɔ" },
    { id: 51, francais: "Tu as une mauvaise odeur", original: "CITI CÈ MOU", phonetique: "siti se mu" },
    { id: 52, francais: "Rien de nouveau", original: "NDE E NA TOTO", phonetique: "nde e na toto" },
];

// 👉 Notes diverses
const notesDiverses: NoteDiverse[] = [
    { id: 1, text: "Le baka est une langue parlée par les Pygmées d'Afrique centrale." },
    { id: 2, text: "La langue baka utilise des tons pour distinguer les mots." },
    { id: 3, text: "Le peuple Baka vit principalement dans la forêt tropicale." },
    { id: 4, text: "Les proverbes baka sont souvent liés à la nature et à la vie en communauté." },
    { id: 5, text: "La transmission orale est très importante dans la culture baka." },
    { id: 6, text: "Le lexique baka partage certaines racines avec les langues bantoues voisines." },
];

// 👉 Proverbes Baka
const proverbes: Proverbe[] = [
    {
        id: 1,
        francais: 'La machette ne peut pas couper quelque chose seule.',
        baka: 'Mbala é té nkono é qua pode domoté.',
        explication: 'Ce proverbe souligne l\'importance de la coopération et du travail d\'équipe.',
    },
    {
        id: 2,
        francais: 'Le piège ne peut jamais se mettre tout seul sans que personne ne le mette.',
        baka: 'Moliqué di kué ko pode ndebo a wélélé.',
        explication: 'Métaphore illustrant que rien ne se fait sans intervention humaine ou effort.',
    },
    {
        id: 3,
        francais: 'La rivière suit l\'homme et son campement (les gens et là où ils habitent).',
        baka: 'Ngo é ò no quakodédé a mou té, o agué nda nda que bô o té ndoto ténè.',
        explication: 'Ce proverbe évoque l\'harmonie entre l\'homme et la nature.',
    },
    {
        id: 4,
        francais: 'La tortue osait avaler une grande quantité de nourriture parce qu\'elle avait confiance en ses fesses.',
        baka: 'Mango é méo leka béké a mou é wa wolé katai.',
        explication: 'Métaphore sur la confiance en soi et la connaissance de ses capacités.',
    },
    {
        id: 5,
        francais: 'Le singe cherche où il va dormir lorsqu\'il fait encore jour.',
        baka: 'Kéma é guélo nda nda lati té.',
        explication: 'Il faut anticiper et se préparer à l\'avance.',
    },
    {
        id: 6,
        francais: 'Toute chose retourne à la terre.',
        baka: 'Èwo kobè òdoyo mpò pouètè tolo.',
        explication: 'Rappelle le cycle de la vie et notre connexion à la nature.',
    },
    {
        id: 7,
        francais: 'L\'homme ne meurt jamais de faim en forêt parce qu\'il est technicien de la forêt.',
        baka: 'BAKA è ndè mpi tè ò tè a bèlè, a kala a gni niam na bèlè.',
        explication: 'Métaphore des compétences de survie et de la connaissance approfondie de l\'environnement forestier.',
    },
];

// 👉 Section À propos
const aboutEdubaka = {
    proverbes: "Les proverbes présents dans cette ressource nous ont été transmis directement par le chef du village de Bitougha, lors d'une rencontre au corps de garde. Malgré un emploi du temps très chargé, il a gentiment accepté de nous accorder un peu de son précieux temps pour nous livrer une partie de ces proverbes, témoignages vivants de la sagesse et de la tradition orale baka.",
    mots_et_expressions: "La collecte des mots et expressions a été réalisée en deux étapes :\n\n1. Première collecte : nous avons recueilli ces précieuses informations auprès de Madame NIAN NDOM (65 ans) et de sa petite sœur, Hélène NZE ANDU (60 ans), deux femmes baka qui ont généreusement partagé leur connaissance de la langue et des usages quotidiens.\n\n2. Vérification et validation : après avoir rassemblé cette riche documentation grâce à ces deux femmes, nous nous sommes rendus dans plusieurs villages, notamment à Bitougha. Au corps de garde, nous avons pu vérifier et valider l'ensemble des données avec les habitants, en présence de chefs de village, d'anciens et d'élèves, garantissant ainsi la fiabilité et l'authenticité des informations.",
};

export default function BakaNotesPage() {
    const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
        expressions: true,
        notes: true,
        about: true,
        proverbes: true,
    });

    const toggleSection = (section: keyof ExpandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-4xl mx-auto px-4 py-6 pb-32">
                <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
                    Proverbes et Expressions Baka
                </h1>

                {/* Section Proverbes */}
                <div className="mb-2 mt-4">
                    <button
                        onClick={() => toggleSection('proverbes')}
                        className="w-full flex justify-between items-center bg-green-500 p-4 rounded-lg shadow-md"
                    >
                        <span className="text-xl font-bold text-white">📜 Proverbes baka</span>
                        <span className="text-white font-bold text-lg">
                            {expandedSections.proverbes ? '▲' : '▼'}
                        </span>
                    </button>

                    {expandedSections.proverbes && (
                        <div className="mt-2 space-y-4">
                            {proverbes.map((proverbe) => (
                                <div key={proverbe.id} className="bg-white rounded-xl p-4 shadow-md">
                                    <div className="flex">
                                        <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                            <span className="text-green-800 font-bold text-sm">{proverbe.id}</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-lg font-semibold text-gray-800 mb-2 leading-6">
                                                {proverbe.francais}
                                            </p>
                                            <p className="text-sm text-gray-500 mb-1">En baka :</p>
                                            <p className="text-base text-green-700 font-semibold mb-3 leading-6">
                                                {proverbe.baka}
                                            </p>
                                            {proverbe.explication && (
                                                <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-green-500">
                                                    <p className="text-sm text-gray-600 italic leading-5">
                                                        💡 {proverbe.explication}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Section Expressions */}
                <div className="mb-2 mt-4">
                    <button
                        onClick={() => toggleSection('expressions')}
                        className="w-full flex justify-between items-center bg-green-500 p-4 rounded-lg shadow-md"
                    >
                        <span className="text-xl font-bold text-white">💬 Expressions courantes</span>
                        <span className="text-white font-bold text-lg">
                            {expandedSections.expressions ? '▲' : '▼'}
                        </span>
                    </button>

                    {expandedSections.expressions && (
                        <div className="bg-white rounded-lg overflow-hidden shadow-md mt-1">
                            {/* En-tête du tableau */}
                            <div className="flex bg-green-700 p-3">
                                <span className="w-12 font-bold text-sm text-white">N°</span>
                                <span className="flex-2 font-bold text-sm text-white">Français</span>
                                <span className="flex-2 font-bold text-sm text-white">Baka</span>
                                <span className="flex-1.5 font-bold text-sm text-white">Phonétique</span>
                            </div>

                            {/* Lignes du tableau */}
                            {expressionsBaka.map((item) => (
                                <div
                                    key={item.id}
                                    className={`flex p-3 border-b border-gray-200 ${item.id % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                        }`}
                                >
                                    <span className="w-12 font-semibold text-green-700 text-sm">{item.id}</span>
                                    <span className="flex-2 text-sm text-gray-800 leading-5">{item.francais}</span>
                                    <span className="flex-2 text-sm text-green-700 font-medium">{item.original}</span>
                                    <span className="flex-1.5 text-sm text-gray-500 italic">{item.phonetique}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Section Notes */}
                <div className="mb-2 mt-4">
                    <button
                        onClick={() => toggleSection('notes')}
                        className="w-full flex justify-between items-center bg-green-500 p-4 rounded-lg shadow-md"
                    >
                        <span className="text-xl font-bold text-white">📝 Notes diverses</span>
                        <span className="text-white font-bold text-lg">
                            {expandedSections.notes ? '▲' : '▼'}
                        </span>
                    </button>

                    {expandedSections.notes && (
                        <div className="bg-white rounded-lg p-4 shadow-md mt-1">
                            {notesDiverses.map((note) => (
                                <div key={note.id} className="mb-3 last:mb-0">
                                    <p className="text-sm text-gray-600 leading-5">• {note.text}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Section À propos */}
                <div className="mb-2 mt-4">
                    <button
                        onClick={() => toggleSection('about')}
                        className="w-full flex justify-between items-center bg-green-500 p-4 rounded-lg shadow-md"
                    >
                        <span className="text-xl font-bold text-white">ℹ️ À propos</span>
                        <span className="text-white font-bold text-lg">
                            {expandedSections.about ? '▲' : '▼'}
                        </span>
                    </button>

                    {expandedSections.about && (
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-1">
                            <h3 className="text-base font-bold text-green-800 mb-2">📜 Origine des proverbes</h3>
                            <p className="text-sm text-gray-700 leading-6 mb-4">{aboutEdubaka.proverbes}</p>
                            <h3 className="text-base font-bold text-green-800 mb-2">📝 Collecte des mots et expressions</h3>
                            <p className="text-sm text-gray-700 leading-6 whitespace-pre-line">{aboutEdubaka.mots_et_expressions}</p>
                        </div>
                    )}
                </div>
            </div>
            <BottomMenu />
        </div>
    );
}
