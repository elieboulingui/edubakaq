// app/apprendre-compter-baka/page.js
'use client';

import React, { useState } from 'react';
import BottomMenu from '@/components/BottomMenu';

// 👉 Données pour apprendre à compter en Baka
const nombresBaka = [
    // Chiffres simples (1-9)
    { nombre: '1', baka: 'pode', prononciation: 'POH-deh' },
    { nombre: '2', baka: 'bide', prononciation: 'BEE-deh' },
    { nombre: '3', baka: 'bata', prononciation: 'BAH-tah' },
    { nombre: '4', baka: 'bana', prononciation: 'BAH-nah' },
    { nombre: '5', baka: 'poue', prononciation: 'POO-eh' },
    { nombre: '6', baka: 'ndintete', prononciation: 'NDEEN-teh-teh' },
    { nombre: '7', baka: 'nko', prononciation: 'NKOH' },
    { nombre: '8', baka: 'no', prononciation: 'NOH' },
    { nombre: '9', baka: 'dadi', prononciation: 'DAH-dee' },

    // Dizaines (10-99)
    { nombre: '10', baka: 'nzingolio', prononciation: 'NZEENG-goh-lee-oh' },
    { nombre: '11', baka: 'nzingolio te pode', prononciation: 'NZEENG-goh-lee-oh teh POH-deh' },
    { nombre: '12', baka: 'nzingolio te bide', prononciation: 'NZEENG-goh-lee-oh teh BEE-deh' },
    { nombre: '13', baka: 'nzingolio te bata', prononciation: 'NZEENG-goh-lee-oh teh BAH-tah' },
    { nombre: '14', baka: 'nzingolio te bana', prononciation: 'NZEENG-goh-lee-oh teh BAH-nah' },
    { nombre: '15', baka: 'nzingolio te poue', prononciation: 'NZEENG-goh-lee-oh teh POO-eh' },
    { nombre: '16', baka: 'nzingolio te ndintete', prononciation: 'NZEENG-goh-lee-oh teh NDEEN-teh-teh' },
    { nombre: '17', baka: 'nzingolio te nko', prononciation: 'NZEENG-goh-lee-oh teh NKOH' },
    { nombre: '18', baka: 'nzingolio te no', prononciation: 'NZEENG-goh-lee-oh teh NOH' },
    { nombre: '19', baka: 'nzingolio te dadi', prononciation: 'NZEENG-goh-lee-oh teh DAH-dee' },
    { nombre: '20', baka: 'nzingolio bide / nzinzin bide', prononciation: 'NZEENG-goh-lee-oh BEE-deh / NZEEN-zeen BEE-deh' },
    { nombre: '30', baka: 'nzingolio bata', prononciation: 'NZEENG-goh-lee-oh BAH-tah' },
    { nombre: '40', baka: 'miginto / nzingolio bana', prononciation: 'MEE-geen-toh / NZEENG-goh-lee-oh BAH-nah' },
    { nombre: '50', baka: 'misato / nzingolio poue', prononciation: 'MEE-sah-toh / NZEENG-goh-lee-oh POO-eh' },
    { nombre: '60', baka: 'nzingolio ndintete', prononciation: 'NZEENG-goh-lee-oh NDEEN-teh-teh' },
    { nombre: '70', baka: 'nzingolio nko', prononciation: 'NZEENG-goh-lee-oh NKOH' },
    { nombre: '80', baka: 'misadas / nzingolio no', prononciation: 'MEE-sah-dahs / NZEENG-goh-lee-oh NOH' },
    { nombre: '90', baka: 'nzingolio dadi / nzinzin dadi', prononciation: 'NZEENG-goh-lee-oh DAH-dee / NZEEN-zeen DAH-dee' },

    // Centaines (100-900)
    { nombre: '100', baka: 'banga', prononciation: 'BAH-ngah' },
    { nombre: '200', baka: 'banga bide', prononciation: 'BAH-ngah BEE-deh' },
    { nombre: '300', baka: 'banga bata', prononciation: 'BAH-ngah BAH-tah' },
    { nombre: '400', baka: 'banga bana', prononciation: 'BAH-ngah BAH-nah' },
    { nombre: '500', baka: 'banga poue', prononciation: 'BAH-ngah POO-eh' },
    { nombre: '600', baka: 'banga ndintete', prononciation: 'BAH-ngah NDEEN-teh-teh' },
    { nombre: '700', baka: 'banga nko', prononciation: 'BAH-ngah NKOH' },
    { nombre: '800', baka: 'banga no', prononciation: 'BAH-ngah NOH' },
    { nombre: '900', baka: 'banga dadi', prononciation: 'BAH-ngah DAH-dee' },

    // Milliers (1000-6000)
    { nombre: '1000', baka: 'golio', prononciation: 'GOH-lee-oh' },
    { nombre: '2000', baka: 'golio bide', prononciation: 'GOH-lee-oh BEE-deh' },
    { nombre: '3000', baka: 'golio bata', prononciation: 'GOH-lee-oh BAH-tah' },
    { nombre: '4000', baka: 'golio bana', prononciation: 'GOH-lee-oh BAH-nah' },
    { nombre: '5000', baka: 'golio poue', prononciation: 'GOH-lee-oh POO-eh' },
    { nombre: '6000', baka: 'golio ndintete', prononciation: 'GOH-lee-oh NDEEN-teh-teh' },

    // Grands nombres
    { nombre: '10000', baka: 'mbébé', prononciation: 'MBEH-beh' },
    { nombre: '20000', baka: 'nzinzin bode na mbébé', prononciation: 'NZEEN-zeen BOH-deh nah MBEH-beh' },
    { nombre: '30000', baka: 'nzinzin bata na mbébé', prononciation: 'NZEEN-zeen BAH-tah nah MBEH-beh' },
    { nombre: '30001', baka: 'nzinzin bata na mbébé te pode', prononciation: 'NZEEN-zeen BAH-tah nah MBEH-beh teh POH-deh' },
    { nombre: '40000', baka: 'nzinzin bana na mbébé / mignito na mbébé', prononciation: 'NZEEN-zeen BAH-nah nah MBEH-beh / MEE-nyee-toh nah MBEH-beh' },
    { nombre: '50000', baka: 'nzinzin poué na mbébé / misato na mbébé', prononciation: 'NZEEN-zeen POO-eh nah MBEH-beh / MEE-sah-toh nah MBEH-beh' },
];

// Nombres en lettres en français
const nombresEnLettres = {
    '1': 'un', '2': 'deux', '3': 'trois', '4': 'quatre', '5': 'cinq',
    '6': 'six', '7': 'sept', '8': 'huit', '9': 'neuf', '10': 'dix',
    '11': 'onze', '12': 'douze', '13': 'treize', '14': 'quatorze', '15': 'quinze',
    '16': 'seize', '17': 'dix-sept', '18': 'dix-huit', '19': 'dix-neuf', '20': 'vingt',
    '30': 'trente', '40': 'quarante', '50': 'cinquante', '60': 'soixante',
    '70': 'soixante-dix', '80': 'quatre-vingts', '90': 'quatre-vingt-dix',
    '100': 'cent', '200': 'deux cents', '300': 'trois cents', '400': 'quatre cents',
    '500': 'cinq cents', '600': 'six cents', '700': 'sept cents', '800': 'huit cents',
    '900': 'neuf cents', '1000': 'mille', '2000': 'deux mille', '3000': 'trois mille',
    '4000': 'quatre mille', '5000': 'cinq mille', '6000': 'six mille',
    '10000': 'dix mille', '20000': 'vingt mille', '30000': 'trente mille',
    '30001': 'trente mille un', '40000': 'quarante mille', '50000': 'cinquante mille',
};

export default function BakaComptagePage() {
    const [searchNumber, setSearchNumber] = useState('');
    const [foundNumber, setFoundNumber] = useState(null);
    const [expandedSections, setExpandedSections] = useState({
        compteur: true,
        chiffresBase: true,
        dizaines: true,
        centaines: true,
        milliers: true,
        grandsNombres: true,
    });

const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
        ...prev,
        [section]: !prev[section]
    }));
};

  const handleSearch = (text: string) => {
    setSearchNumber(text);
    if (text.trim() === '') {
        setFoundNumber(null);
        return;
    }
    const result = nombresBaka.find(item => item.nombre === text.trim());
    setFoundNumber(result || null);
};

    // Filtrer les nombres par catégorie
    const chiffresBase = nombresBaka.filter(item => {
        const num = parseInt(item.nombre);
        return num >= 1 && num <= 9;
    });
    const dizaines = nombresBaka.filter(item => {
        const num = parseInt(item.nombre);
        return num >= 10 && num <= 99;
    });
    const centaines = nombresBaka.filter(item => {
        const num = parseInt(item.nombre);
        return num >= 100 && num <= 999;
    });
    const milliers = nombresBaka.filter(item => {
        const num = parseInt(item.nombre);
        return num >= 1000 && num <= 9999;
    });
    const grandsNombres = nombresBaka.filter(item => {
        const num = parseInt(item.nombre);
        return num >= 10000;
    });

    return (
        <>
            <div className="min-h-screen bg-gray-100 pb-20">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    {/* Titre principal */}
                    <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
                        🔢 Apprendre à Compter en Baka
                    </h1>

                    {/* Section Compteur */}
                    <div className="mb-2 mt-4">
                        <button
                            onClick={() => toggleSection('compteur')}
                            className="w-full flex justify-between items-center bg-green-500 p-4 rounded-lg shadow-md"
                        >
                            <span className="text-xl font-bold text-white">🔍 Convertisseur Chiffre → Lettre → Baka</span>
                            <span className="text-white font-bold text-lg">
                                {expandedSections.compteur ? '▲' : '▼'}
                            </span>
                        </button>

                        {expandedSections.compteur && (
                            <div className="bg-white rounded-b-lg p-5 shadow-md mt-1">
                                <label className="font-bold text-gray-700 block mb-3">Entrez un nombre :</label>
                                <input
                                    type="number"
                                    className="w-full bg-gray-100 border-2 border-green-500 rounded-xl p-4 text-xl text-gray-800 mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    value={searchNumber}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    placeholder="Ex: 5, 10, 100..."
                                />

                                {foundNumber && (
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <div className="space-y-3 mb-4">
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <span className="text-xs font-bold text-gray-500 block mb-2">🔢 Chiffre</span>
                                                <span className="text-xl font-bold text-gray-800">{foundNumber.nombre}</span>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <span className="text-xs font-bold text-gray-500 block mb-2">📝 En lettres</span>
                                                <span className="text-xl font-bold text-gray-800">
                                                    {nombresEnLettres[foundNumber.nombre] || foundNumber.nombre}
                                                </span>
                                            </div>
                                            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                                <span className="text-xs font-bold text-gray-500 block mb-2">🗣️ En Baka</span>
                                                <span className="text-2xl font-bold text-orange-700">{foundNumber.baka}</span>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded-lg">
                                            <span className="text-xs font-bold text-green-700 block mb-1">🎤 Prononciation:</span>
                                            <span className="text-sm font-medium text-green-800">{foundNumber.prononciation}</span>
                                        </div>
                                    </div>
                                )}

                                {searchNumber !== '' && !foundNumber && (
                                    <div className="bg-red-50 p-4 rounded-lg text-center">
                                        <span className="text-red-700 font-semibold">
                                            ❌ Nombre non trouvé dans la base de données
                                        </span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Section 1: Chiffres de base (1-9) */}
                    <div className="mb-2 mt-4">
                        <button
                            onClick={() => toggleSection('chiffresBase')}
                            className="w-full flex justify-between items-center bg-green-500 p-4 rounded-lg shadow-md"
                        >
                            <span className="text-xl font-bold text-white">📊 Chiffres de base (1-9)</span>
                            <span className="text-white font-bold text-lg">
                                {expandedSections.chiffresBase ? '▲' : '▼'}
                            </span>
                        </button>

                        {expandedSections.chiffresBase && (
                            <div className="bg-white rounded-b-lg p-4 shadow-md mt-1">
                                {chiffresBase.map((item, index) => (
                                    <div key={index} className="mb-5 pb-4 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
                                        <div className="flex justify-between items-center mb-3 gap-2">
                                            <span className="text-xl font-bold text-blue-500 min-w-[50px]">{item.nombre}</span>
                                            <span className="text-sm text-gray-500 italic flex-1 text-center">
                                                {nombresEnLettres[item.nombre] || ''}
                                            </span>
                                            <span className="text-base text-green-700 font-semibold flex-1 text-right">
                                                {item.baka}
                                            </span>
                                        </div>
                                        <div className="bg-green-50 p-2 rounded-lg">
                                            <span className="text-xs font-bold text-green-700 block mb-1">🎤 Prononciation:</span>
                                            <span className="text-sm font-medium text-green-800">{item.prononciation}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Section 2: Dizaines (10-99) */}
                    <div className="mb-2 mt-4">
                        <button
                            onClick={() => toggleSection('dizaines')}
                            className="w-full flex justify-between items-center bg-green-500 p-4 rounded-lg shadow-md"
                        >
                            <span className="text-xl font-bold text-white">🔟 Dizaines (10-99)</span>
                            <span className="text-white font-bold text-lg">
                                {expandedSections.dizaines ? '▲' : '▼'}
                            </span>
                        </button>

                        {expandedSections.dizaines && (
                            <div className="bg-white rounded-b-lg p-4 shadow-md mt-1">
                                {dizaines.map((item, index) => (
                                    <div key={index} className="mb-5 pb-4 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
                                        <div className="flex justify-between items-center mb-3 gap-2">
                                            <span className="text-xl font-bold text-blue-500 min-w-[50px]">{item.nombre}</span>
                                            <span className="text-sm text-gray-500 italic flex-1 text-center">
                                                {nombresEnLettres[item.nombre] || ''}
                                            </span>
                                            <span className="text-base text-green-700 font-semibold flex-1 text-right">
                                                {item.baka}
                                            </span>
                                        </div>
                                        <div className="bg-green-50 p-2 rounded-lg">
                                            <span className="text-xs font-bold text-green-700 block mb-1">🎤 Prononciation:</span>
                                            <span className="text-sm font-medium text-green-800">{item.prononciation}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Section 3: Centaines (100-999) */}
                    <div className="mb-2 mt-4">
                        <button
                            onClick={() => toggleSection('centaines')}
                            className="w-full flex justify-between items-center bg-green-500 p-4 rounded-lg shadow-md"
                        >
                            <span className="text-xl font-bold text-white">💯 Centaines (100-999)</span>
                            <span className="text-white font-bold text-lg">
                                {expandedSections.centaines ? '▲' : '▼'}
                            </span>
                        </button>

                        {expandedSections.centaines && (
                            <div className="bg-white rounded-b-lg p-4 shadow-md mt-1">
                                {centaines.map((item, index) => (
                                    <div key={index} className="mb-5 pb-4 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
                                        <div className="flex justify-between items-center mb-3 gap-2">
                                            <span className="text-xl font-bold text-blue-500 min-w-[50px]">{item.nombre}</span>
                                            <span className="text-sm text-gray-500 italic flex-1 text-center">
                                                {nombresEnLettres[item.nombre] || ''}
                                            </span>
                                            <span className="text-base text-green-700 font-semibold flex-1 text-right">
                                                {item.baka}
                                            </span>
                                        </div>
                                        <div className="bg-green-50 p-2 rounded-lg">
                                            <span className="text-xs font-bold text-green-700 block mb-1">🎤 Prononciation:</span>
                                            <span className="text-sm font-medium text-green-800">{item.prononciation}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Section 4: Milliers (1000-9999) */}
                    <div className="mb-2 mt-4">
                        <button
                            onClick={() => toggleSection('milliers')}
                            className="w-full flex justify-between items-center bg-green-500 p-4 rounded-lg shadow-md"
                        >
                            <span className="text-xl font-bold text-white">✈️ Milliers (1000-9999)</span>
                            <span className="text-white font-bold text-lg">
                                {expandedSections.milliers ? '▲' : '▼'}
                            </span>
                        </button>

                        {expandedSections.milliers && (
                            <div className="bg-white rounded-b-lg p-4 shadow-md mt-1">
                                {milliers.map((item, index) => (
                                    <div key={index} className="mb-5 pb-4 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
                                        <div className="flex justify-between items-center mb-3 gap-2">
                                            <span className="text-xl font-bold text-blue-500 min-w-[50px]">{item.nombre}</span>
                                            <span className="text-sm text-gray-500 italic flex-1 text-center">
                                                {nombresEnLettres[item.nombre] || ''}
                                            </span>
                                            <span className="text-base text-green-700 font-semibold flex-1 text-right">
                                                {item.baka}
                                            </span>
                                        </div>
                                        <div className="bg-green-50 p-2 rounded-lg">
                                            <span className="text-xs font-bold text-green-700 block mb-1">🎤 Prononciation:</span>
                                            <span className="text-sm font-medium text-green-800">{item.prononciation}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Section 5: Grands nombres */}
                    <div className="mb-2 mt-4">
                        <button
                            onClick={() => toggleSection('grandsNombres')}
                            className="w-full flex justify-between items-center bg-green-500 p-4 rounded-lg shadow-md"
                        >
                            <span className="text-xl font-bold text-white">🌍 Grands nombres (≥ 10000)</span>
                            <span className="text-white font-bold text-lg">
                                {expandedSections.grandsNombres ? '▲' : '▼'}
                            </span>
                        </button>

                        {expandedSections.grandsNombres && (
                            <div className="bg-white rounded-b-lg p-4 shadow-md mt-1">
                                {grandsNombres.map((item, index) => (
                                    <div key={index} className="mb-5 pb-4 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
                                        <div className="flex justify-between items-center mb-3 gap-2">
                                            <span className="text-xl font-bold text-blue-500 min-w-[50px]">{item.nombre}</span>
                                            <span className="text-sm text-gray-500 italic flex-1 text-center">
                                                {nombresEnLettres[item.nombre] || ''}
                                            </span>
                                            <span className="text-base text-green-700 font-semibold flex-1 text-right">
                                                {item.baka}
                                            </span>
                                        </div>
                                        <div className="bg-green-50 p-2 rounded-lg">
                                            <span className="text-xs font-bold text-green-700 block mb-1">🎤 Prononciation:</span>
                                            <span className="text-sm font-medium text-green-800">{item.prononciation}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Section d'information */}
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-4 mb-6">
                        <h2 className="text-lg font-bold text-blue-800 mb-3">📚 À propos du système de numération Baka</h2>
                        <p className="text-sm text-gray-700 leading-6 mb-2">
                            Le comptage en langue Baka n'a pas été facile à étudier. En effet, beaucoup de Baka ne comptent que jusqu'à 1 ou 2, et certains jusqu'à 3. La culture se perd progressivement.
                        </p>
                        <p className="text-sm text-gray-700 leading-6 mb-2">
                            <span className="font-bold text-blue-700">📍 Localisation et observations de terrain :</span>
                            Lors de mes recherches dans le plus grand village Baka du Haut-Ntem (Minvoul), Bitougha, où plusieurs clans sont regroupés, j'ai découvert que plusieurs habitants pouvaient compter jusqu'à 5 ou 10. Seuls les plus connaisseurs arrivaient à dépasser ces nombres, mais avec quelques difficultés.
                            Certains grands nombres m'ont été donnés par les connaisseurs du village, notamment Amaya (42 ans), l'un des plus anciens qui a connu les premières excursions des Baka, et Alex (45 ans), frère du chef du village.
                        </p>
                        <p className="text-sm text-gray-700 leading-6 mb-2">
                            <span className="font-bold text-blue-700">🧠 Logique et fonctionnement du système :</span>
                        </p>
                        <ul className="text-sm text-gray-700 leading-6 list-disc pl-6 space-y-1 mb-3">
                            <li>Le chiffre 10 : se dit "Nzingolio" ou "Nzinzin Podé", ce qui signifie « une fois dix ».</li>
                            <li>Le chiffre 20 : se dit "Nzingolio Bide" ou "Nzinzin Bide", qui signifie « dix deux fois ».</li>
                            <li>Le chiffre 31 : se dit "Nzingolio Bata e Podé", qui signifie « dix trois fois et un ».</li>
                            <li>Par exemple, pour dire 21 en Baka : "Nzingolo Bide Te Pode" (20 + 1)</li>
                        </ul>

                        <div className="mt-3 pt-3 border-t border-blue-200">
                            <h3 className="text-sm font-bold text-blue-700 mb-2">🎯 Guide de prononciation :</h3>
                            <ul className="text-sm text-gray-700 leading-6 list-disc pl-6 space-y-1">
                                <li>'e' se prononce comme dans "le" (e muet)</li>
                                <li>'é' se prononce comme dans "été"</li>
                                <li>'è' se prononce comme dans "père"</li>
                                <li>'ou' se prononce comme dans "bouche"</li>
                                <li>'ng' se prononce comme dans "pingouin"</li>
                                <li>'ny' se prononce comme dans "montagne"</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu de navigation en bas */}
            <BottomMenu />
        </>
    );
}
