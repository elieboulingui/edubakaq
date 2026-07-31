// app/dictionnaire-baka/page.js
'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import BottomMenu from '@/components/BottomMenu';

export default function DictionnaireBaka() {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDictionnaire, setFilteredDictionnaire] = useState([]);
  const [activeTab, setActiveTab] = useState('dictionnaire');

  useEffect(() => {
    setIsClient(true);
    const currentData = activeTab === 'dictionnaire' ? dictionnaire : phrases;
    setFilteredDictionnaire(currentData);
  }, [activeTab]);

  const speakMot = useCallback((mot) => {
    if (!isClient || !window.speechSynthesis) return;

    const preferred = mot?.baka && String(mot.baka).trim() ? String(mot.baka).trim() : '';
    const fallback = mot?.francais && String(mot.francais).trim() ? String(mot.francais).trim() : '';
    const text = preferred || fallback;

    if (!text) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }, [isClient]);

  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    const currentData = activeTab === 'dictionnaire' ? dictionnaire : phrases;
    if (!searchTerm.trim()) {
      setFilteredDictionnaire(currentData);
    } else {
      const term = searchTerm.toLowerCase();
      setFilteredDictionnaire(
        currentData.filter(
          (mot) =>
            mot.francais.toLowerCase().includes(term) ||
            (mot.baka && mot.baka.toLowerCase().includes(term)) ||
            (mot.phonetique && mot.phonetique.toLowerCase().includes(term))
        )
      );
    }
  }, [searchTerm, activeTab]);

  // Données du dictionnaire
  const dictionnaire = [
    { francais: "accoucher", baka: "djoudjou", phonetique: "dʒudʒu" },
    { francais: "accepter", baka: "maye", phonetique: "majɛ" },
    { francais: "affaire", baka: "Nâmè", phonetique: "nɑmɛ" },
    { francais: "agé", baka: "Kobo", phonetique: "kɔbɔ" },
    { francais: "ail", baka: "semobelè", phonetique: "sɛmɔbɛlɛ" },
    { francais: "amener/amene", baka: "ndomoutè", phonetique: "ndɔmutɛ" },
    { francais: "ami", baka: "Loti", phonetique: "lɔti" },
    { francais: "amical", baka: "Loti", phonetique: "lɔti" },
    { francais: "amour/aimer", baka: "yéyé", phonetique: "jeje" },
    { francais: "ange gardiens", baka: "Nguèlè", phonetique: "ŋgɛlɛ" },
    { francais: "année", baka: "Bon", phonetique: "bɔn" },
    { francais: "apparence", baka: "Namoumou", phonetique: "namumu" },
    { francais: "apporter", baka: "Pébé", phonetique: "pebe" },
    { francais: "apprendre", baka: "LELE", phonetique: "lɛlɛ" },
    { francais: "arachide", baka: "Sekeléké", phonetique: "sɛkɛlekɛ" },
    { francais: "arbre", baka: "Lô", phonetique: "lo" },
    { francais: "arbre en boule", baka: "Takomboli", phonetique: "takɔmbɔli" },
    { francais: "arbustre", baka: "Bello", phonetique: "bɛllɔ" },
    { francais: "argent", baka: "fondo", phonetique: "fɔndɔ" },
    { francais: "arme", baka: "Lopé,Ngale,Bô", phonetique: "lɔpe,ŋgalɛ,bo" },
    { francais: "arrêter", baka: "II", phonetique: "iː" },
    { francais: "arrière grand mère", baka: "Tita titale", phonetique: "tita titalɛ" },
    { francais: "arrière grand père", baka: "TITA TITA", phonetique: "tita tita" },
    { francais: "asperge", baka: "kamo", phonetique: "kamɔ" },
    { francais: "assiette", baka: "Nbigalet", phonetique: "nbigalɛt" },
    { francais: "asseoir", baka: "titi", phonetique: "titi" },
    { francais: "attrapper", baka: "wéwé", phonetique: "wewe" },
    { francais: "babouche", baka: "MONDZOI", phonetique: "mɔndzɔi" },
    { francais: "bagarre", baka: "KOLE", phonetique: "kɔlɛ" },
    { francais: "balle", baka: "nbenga", phonetique: "nbɛŋga" },
    { francais: "balayer", baka: "Wó", phonetique: "wo" },
    { francais: "banane", baka: "Ndo", phonetique: "ndɔ" },
    { francais: "banc", baka: "Ndandamo-siki", phonetique: "ndandamɔ-siki" },
    { francais: "bas", baka: "SASA", phonetique: "sasa" },
    { francais: "battre/battu", baka: "LULU", phonetique: "lulu" },
    { francais: "bébé", baka: "Ndindoó", phonetique: "ndindɔː" },
    { francais: "beauté", baka: "Djoko", phonetique: "dʒɔkɔ" },
    { francais: "beau/belle", baka: "éDjoko", phonetique: "edʒɔkɔ" },
    { francais: "bénir/bénédiction", baka: "Nâtongunso", phonetique: "nɑtɔŋgunso" },
    { francais: "bessure", baka: "ka", phonetique: "ka" },
    { francais: "bien", baka: "NZOKO", phonetique: "nzɔkɔ" },
    { francais: "bien fait", baka: "Djoko na mè", phonetique: "dʒɔkɔ na mɛ" },
    { francais: "bienfait", baka: "nzoko", phonetique: "nzɔkɔ" },
    { francais: "bitam", baka: "Esolo", phonetique: "ɛsɔlɔ" },
    { francais: "boa", baka: "MEKE", phonetique: "mɛkɛ" },
    { francais: "bois", baka: "wa", phonetique: "wa" },
    { francais: "bon/bonne", baka: "NZOKO", phonetique: "nzɔkɔ" },
    { francais: "bonne odeur", baka: "nzoko sèmo nzoko", phonetique: "nzɔkɔ sɛmɔ nzɔkɔ" },
    { francais: "bouche", baka: "Môbó", phonetique: "mobo" },
    { francais: "cacher", baka: "worwor", phonetique: "wɔrwɔr" },
    { francais: "carpe", baka: "toko", phonetique: "tɔkɔ" },
    { francais: "cartouche", baka: "mbenga", phonetique: "mbɛŋga" },
    { francais: "casser", baka: "Kópo", phonetique: "kɔpɔ" },
    { francais: "cauchemard", baka: "siti keta", phonetique: "siti kɛta" },
    { francais: "champs", baka: "Nbié", phonetique: "nbiɛ" },
    { francais: "chanvre", baka: "nzuki", phonetique: "nzuki" },
    { francais: "chanter", baka: "Nbebe", phonetique: "nbɛbɛ" },
    { francais: "charbon", baka: "mbile", phonetique: "mbilɛ" },
    { francais: "chaise", baka: "panga", phonetique: "paŋga" },
    { francais: "chef", baka: "moba", phonetique: "mɔba" },
    { francais: "chef/chefferie", baka: "mba", phonetique: "mba" },
    { francais: "chien", baka: "bolo", phonetique: "bɔlɔ" },
    { francais: "chose", baka: "CHOS", phonetique: "tʃɔs" },
    { francais: "cigarette", baka: "ndako", phonetique: "ndakɔ" },
    { francais: "citron", baka: "ngoban", phonetique: "ŋgɔban" },
    { francais: "clan", baka: "MPÁEZÉ", phonetique: "mpaze" },
    { francais: "coco", baka: "soka boungue", phonetique: "sɔka buŋgɛ" },
    { francais: "cochon", baka: "pane", phonetique: "panɛ" },
    { francais: "coiffure/coiffer", baka: "denzole", phonetique: "dɛnzɔlɛ" },
    { francais: "coller", baka: "ndaka", phonetique: "ndaka" },
    { francais: "construire", baka: "SISI", phonetique: "sisi" },
    { francais: "coeur", baka: "TEMè", phonetique: "tɛmɛ" },
    { francais: "cours", baka: "Wólò", phonetique: "wɔlɔ" },
    { francais: "coucher", baka: "lati", phonetique: "lati" },
    { francais: "coupe/couper", baka: "Nkônó", phonetique: "nkɔnɔ" },
    { francais: "courrir", baka: "Wólò", phonetique: "wɔlɔ" },
    { francais: "crachat", baka: "ingouso", phonetique: "iŋgusɔ" },
    { francais: "crabe", baka: "kala", phonetique: "kala" },
    { francais: "corps", baka: "Ngobolé", phonetique: "ŋgɔbɔlɛ" },
    { francais: "cuillère", baka: "toko", phonetique: "tɔkɔ" },
    { francais: "cuisine", baka: "nda", phonetique: "nda" },
    { francais: "cuirrer", baka: "LELE", phonetique: "lɛlɛ" },
    { francais: "decider", baka: "na mè", phonetique: "na mɛ" },
    { francais: "demain", baka: "adupkwe", phonetique: "adupkwɛ" },
    { francais: "demander", baka: "nayo", phonetique: "najɔ" },
    { francais: "dernier", baka: "sidi", phonetique: "sidi" },
    { francais: "devenir", baka: "motolo", phonetique: "mɔtɔlɔ" },
    { francais: "développement", baka: "MOTO GANBO", phonetique: "mɔtɔ ganbɔ" },
    { francais: "Dieu", baka: "nkoba", phonetique: "nkɔba" },
    { francais: "dimanche", baka: "ngambo", phonetique: "ŋgambɔ" },
    { francais: "diminuer", baka: "nabè", phonetique: "nabɛ" },
    { francais: "dire", baka: "ngoma", phonetique: "ŋgɔma" },
    { francais: "disparaitre", baka: "mondzoi", phonetique: "mɔndzɔi" },
    { francais: "dresser", baka: "wosolo", phonetique: "wɔsɔlɔ" },
    { francais: "eau", baka: "ngo", phonetique: "ŋgɔ" },
    { francais: "eau pure", baka: "esolo", phonetique: "ɛsɔlɔ" },
    { francais: "écraser", baka: "koko", phonetique: "kɔkɔ" },
    { francais: "écureil", baka: "boko", phonetique: "bɔkɔ" },
    { francais: "élève", baka: "yan dè nasikolo", phonetique: "jan dɛ nasikɔlɔ" },
    { francais: "élever", baka: "natobezo", phonetique: "natɔbɛzɔ" },
    { francais: "emmener", baka: "ndomoutè", phonetique: "ndɔmutɛ" },
    { francais: "enceinte", baka: "mé", phonetique: "me" },
    { francais: "énergie", baka: "mpèkè", phonetique: "mpɛkɛ" },
    { francais: "enfant (jeune)", baka: "yandè", phonetique: "jandɛ" },
    { francais: "enfermer", baka: "noukou", phonetique: "nuku" },
    { francais: "engendrer", baka: "djoudjou", phonetique: "dʒudʒu" },
    { francais: "ennemi", baka: "mpopo", phonetique: "mpɔpɔ" },
    { francais: "ensemble", baka: "mbodadi", phonetique: "mbɔdadi" },
    { francais: "entendre", baka: "nzeze", phonetique: "nzɛzɛ" },
    { francais: "enterrer", baka: "loulou", phonetique: "lulu" },
    { francais: "entilope", baka: "NBOME", phonetique: "nbɔmɛ" },
    { francais: "entraîner", baka: "me gotè", phonetique: "mɛ gɔtɛ" },
    { francais: "équilibre", baka: "linguè-linguè", phonetique: "liŋgɛ-liŋgɛ" },
    { francais: "escargot", baka: "mbibi", phonetique: "mbibi" },
    { francais: "esprit", baka: "eguele", phonetique: "ɛgɛlɛ" },
    { francais: "étirer", baka: "biyètè", phonetique: "bijɛtɛ" },
    { francais: "fâché", baka: "kabou", phonetique: "kabu" },
    { francais: "fesse", baka: "katabo", phonetique: "katabɔ" },
    { francais: "feu", baka: "wa", phonetique: "wa" },
    { francais: "feuille", baka: "kpa", phonetique: "kpa" },
    { francais: "feuille de manioc", baka: "nzabouka nzabuka", phonetique: "nzabuka nzabuka" },
    { francais: "flamme", baka: "meloulouma", phonetique: "mɛluluma" },
    { francais: "flèche", baka: "benga", phonetique: "bɛŋga" },
    { francais: "fleur", baka: "mpak", phonetique: "mpak" },
    { francais: "fou", baka: "yaka", phonetique: "jaka" },
    { francais: "fouiller", baka: "na gué", phonetique: "na gɛ" },
    { francais: "fourmi", baka: "mbo", phonetique: "mbo" },
    { francais: "fragile", baka: "lorli", phonetique: "lɔrli" },
    { francais: "français", baka: "liboungue", phonetique: "libuŋgɛ" },
    { francais: "frapper", baka: "gebo", phonetique: "gɛbɔ" },
    { francais: "fuir", baka: "Goubeu", phonetique: "gubɛu" },
    { francais: "gazelle", baka: "ndembé", phonetique: "ndɛmbe" },
    { francais: "germain", baka: "tati", phonetique: "tati" },
    { francais: "gillette", baka: "sindo", phonetique: "sindɔ" },
    { francais: "grand", baka: "kobo", phonetique: "kɔbɔ" },
    { francais: "grand-mère", baka: "tita", phonetique: "tita" },
    { francais: "grand-père", baka: "tita", phonetique: "tita" },
    { francais: "grande-soeur", baka: "mbébale", phonetique: "mbebalɛ" },
    { francais: "grandir", baka: "mbelale", phonetique: "mbɛlalɛ" },
    { francais: "grossesse", baka: "tati", phonetique: "tati" },
    { francais: "grossir", baka: "mbébé", phonetique: "mbɛbe" },
    { francais: "habitat", baka: "doto", phonetique: "dɔtɔ" },
    { francais: "hache", baka: "koa", phonetique: "kɔa" },
    { francais: "habitation", baka: "doto", phonetique: "dɔtɔ" },
    { francais: "habiter", baka: "bomgo", phonetique: "bɔmgɔ" },
    { francais: "habits", baka: "bomgo", phonetique: "bɔmgɔ" },
    { francais: "handicapé", baka: "wa poa", phonetique: "wa pɔa" },
    { francais: "hibou", baka: "esoukouli", phonetique: "ɛsukuli" },
    { francais: "huile", baka: "mita", phonetique: "mita" },
    { francais: "humain", baka: "beau", phonetique: "bɛau" },
    { francais: "hute", baka: "mogoulou", phonetique: "mɔgulu" },
    { francais: "idée", baka: "", phonetique: "" },
    { francais: "impoli", baka: "siti", phonetique: "siti" },
    { francais: "innocent", baka: "édéagnou", phonetique: "edeaɲu" },
    { francais: "interdit", baka: "momèkinawodé", phonetique: "mɔmɛkina wɔde" },
    { francais: "j'aime", baka: "ma yemou", phonetique: "ma jɛmu" },
    { francais: "jolie", baka: "nzoko", phonetique: "nzɔkɔ" },
    { francais: "jouer", baka: "solo", phonetique: "sɔlɔ" },
    { francais: "journée", baka: "mpé", phonetique: "mpe" },
    { francais: "je te", baka: "é", phonetique: "e" },
    { francais: "jeune", baka: "yandè", phonetique: "jandɛ" },
    { francais: "juger", baka: "kono", phonetique: "kɔnɔ" },
    { francais: "jumeau", baka: "mouko", phonetique: "mukɔ" },
    { francais: "jumeaux", baka: "mouko", phonetique: "mukɔ" },
    { francais: "kaka", baka: "ma nzidiba", phonetique: "ma nzidiba" },
    { francais: "l'oeil", baka: "la bo", phonetique: "la bɔ" },
    { francais: "lame", baka: "sindo", phonetique: "sindɔ" },
    { francais: "lampe", baka: "paka", phonetique: "paka" },
    { francais: "lance", baka: "benga", phonetique: "bɛŋga" },
    { francais: "langue", baka: "mibo", phonetique: "mibɔ" },
    { francais: "langue (parole)", baka: "ngoma", phonetique: "ŋgɔma" },
    { francais: "lecture", baka: "LOKOKO", phonetique: "lɔkɔkɔ" },
    { francais: "liberté", baka: "yoka", phonetique: "jɔka" },
    { francais: "lien", baka: "ndanabo", phonetique: "ndanabɔ" },
    { francais: "lieu", baka: "ndanda", phonetique: "ndanda" },
    { francais: "lion", baka: "souga", phonetique: "suga" },
    { francais: "lire", baka: "", phonetique: "" },
    { francais: "lit", baka: "panda", phonetique: "panda" },
    { francais: "lumière", baka: "paka", phonetique: "paka" },
    { francais: "lune", baka: "mpé", phonetique: "mpe" },
    { francais: "malade", baka: "Keïre", phonetique: "kɛirɛ" },
    { francais: "manage", baka: "gbabō", phonetique: "gbabɔ" },
    { francais: "maudit", baka: "MUKO", phonetique: "mukɔ" },
    { francais: "mémoire", baka: "MA", phonetique: "ma" },
    { francais: "moi", baka: "Moi", phonetique: "mɔi" },
    { francais: "mûre (fruit)", baka: "N2i Gourru", phonetique: "ɲi gurru" },
    { francais: "oiseau", baka: "Nou", phonetique: "nu" },
    { francais: "parler", baka: "Gáo", phonetique: "gaɔ" },
    { francais: "parler (variante)", baka: "NéopA", phonetique: "neɔpa" },
    { francais: "perdre", baka: "titli", phonetique: "titli" },
    { francais: "petite noix", baka: "BANTEM", phonetique: "bantɛm" },
    { francais: "phûté/haîtesse", baka: "WANDAMA", phonetique: "wandama" },
    { francais: "pili", baka: "LAYE", phonetique: "lajɛ" },
    { francais: "piment", baka: "alamba", phonetique: "alamba" },
    { francais: "pisser", baka: "siō", phonetique: "siɔ" },
    { francais: "pour lui", baka: "NAN GUE", phonetique: "nan gɛ" },
    { francais: "revenir", baka: "domotima", phonetique: "dɔmɔtima" },
    { francais: "rivière", baka: "ngo", phonetique: "ŋgɔ" },
    { francais: "robot", baka: "Ezingi", phonetique: "ɛziŋgi" },
    { francais: "sable", baka: "kendze", phonetique: "kɛndzɛ" },
    { francais: "sac", baka: "ÉNDÉLÉ", phonetique: "endɛlɛ" },
    { francais: "saint", baka: "eguele", phonetique: "ɛgɛlɛ" },
    { francais: "salle", baka: "mbindu", phonetique: "mbindu" },
    { francais: "salive", baka: "ngouso", phonetique: "ŋgusɔ" },
    { francais: "sans", baka: "be", phonetique: "bɛ" },
    { francais: "santé", baka: "boto", phonetique: "bɔtɔ" },
    { francais: "sauce", baka: "mosuka", phonetique: "mɔsuka" },
    { francais: "sauver", baka: "pueke", phonetique: "puekɛ" },
    { francais: "savoir", baka: "gni", phonetique: "ɲi" },
    { francais: "scarification", baka: "dodo", phonetique: "dɔdɔ" },
    { francais: "sein (femme)", baka: "kabo", phonetique: "kabɔ" },
    { francais: "sel", baka: "to", phonetique: "tɔ" },
    { francais: "soif", baka: "gogomu", phonetique: "gɔgɔmu" },
    { francais: "soigner", baka: "polo", phonetique: "pɔlɔ" },
    { francais: "sol", baka: "tolo", phonetique: "tɔlɔ" },
    { francais: "soleil", baka: "mbako", phonetique: "mbakɔ" },
    { francais: "solide", baka: "ndedzeze", phonetique: "ndɛdzɛzɛ" },
    { francais: "talent", baka: "nidako", phonetique: "nidakɔ" },
    { francais: "tante", baka: "kale", phonetique: "kalɛ" },
    { francais: "tête", baka: "nzowe", phonetique: "nzɔwɛ" },
    { francais: "tenèbres", baka: "pitima", phonetique: "pitima" },
    { francais: "tirer", baka: "mbi", phonetique: "mbi" },
    { francais: "toilette", baka: "nduka", phonetique: "nduka" },
    { francais: "torche indigène", baka: "titalé", phonetique: "titalɛ" },
    { francais: "toucher", baka: "we", phonetique: "wɛ" },
    { francais: "trembler", baka: "ngoko", phonetique: "ŋgɔkɔ" },
    { francais: "tubercule", baka: "mboma", phonetique: "mbɔma" },
    { francais: "venir", baka: "domokina", phonetique: "dɔmɔkina" },
    { francais: "viande", baka: "so", phonetique: "sɔ" },
    { francais: "vendre", baka: "mbomo", phonetique: "mbɔmɔ" },
    { francais: "vengeance", baka: "nkuda", phonetique: "nkuda" },
    { francais: "vipère", baka: "kuba", phonetique: "kuba" },
    { francais: "voir", baka: "mumu", phonetique: "mumu" },
    { francais: "voiture", baka: "ngobo", phonetique: "ŋgɔbɔ" },
    { francais: "voler", baka: "nzi", phonetique: "nzi" }
  ];

  const phrases = [
    { francais: "bonjour (général)", baka: "Méfoukwe", phonetique: "mefukwɛ" },
    { francais: "bonjour (je te dis)", baka: "Me broukwe", phonetique: "mɛ brukwɛ" },
    { francais: "bonjour (je vous dis)", baka: "Yi à Djoukwe", phonetique: "ji a dʒukwɛ" },
    { francais: "tu as bien dormi ?", baka: "Mo nué Ala", phonetique: "mɔ nwe ala" },
    { francais: "vous avez bien dormi ?", baka: "Yi nué Ala", phonetique: "ji nwe ala" },
    { francais: "ils ont bien dormi", baka: "O nué Ala", phonetique: "ɔ nwe ala" },
    { francais: "mon affaire", baka: "Me loti", phonetique: "mɛ lɔti" },
    { francais: "chanson", baka: "NEIN", phonetique: "nɛin" },
    { francais: "j'aime", baka: "yernu jemu", phonetique: "jɛrnu dʒɛmu" },
    { francais: "il l'aime", baka: "E yernu e jemu", phonetique: "ɛ jɛrnu ɛ dʒɛmu" }
  ];

  return (
    <>
      <div className="relative min-h-screen pb-20">
        {/* Image de fond couvrant toute la page - version floutée */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/mama.jpeg"
            alt="Fond Mama Baka"
            fill
            className="object-cover blur-sm scale-105"
            priority
            quality={100}
          />
          {/* Overlay pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 min-h-screen">
          {/* Header */}
          <div className="bg-green-50/90 backdrop-blur-sm border-b-4 border-green-500 rounded-b-3xl shadow-lg shadow-green-500/10 px-5 py-6 mb-5">
            <h1 className="text-4xl font-bold text-center text-green-900 mb-2">
              📚 Dictionnaire Baka
            </h1>
            <p className="text-center text-green-700 font-medium">
              Français - Baka - Phonétique
            </p>
          </div>

          {/* Barre de recherche et onglets */}
          <div className="px-4 mb-6">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveTab('dictionnaire')}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all backdrop-blur-sm ${activeTab === 'dictionnaire'
                  ? 'bg-green-500/90 text-white shadow-lg shadow-green-500/25'
                  : 'bg-white/80 text-green-800 border border-green-200'
                  }`}
              >
                📖 Dictionnaire
              </button>
              <button
                onClick={() => setActiveTab('phrases')}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all backdrop-blur-sm ${activeTab === 'phrases'
                  ? 'bg-green-500/90 text-white shadow-lg shadow-green-500/25'
                  : 'bg-white/80 text-green-800 border border-green-200'
                  }`}
              >
                💬 Phrases
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un mot ou une phrase..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl text-green-900 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500">
                🔍
              </span>
            </div>
          </div>

          {/* En-tête du tableau */}
          <div className="mx-4 mb-3 bg-green-50/90 backdrop-blur-sm border border-green-200 rounded-xl p-4 shadow-sm">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-4 font-bold text-green-900 text-center uppercase text-sm">
                Français
              </div>
              <div className="col-span-4 font-bold text-green-900 text-center uppercase text-sm border-l border-r border-green-500/20">
                Baka
              </div>
              <div className="col-span-4 font-bold text-green-900 text-center uppercase text-sm">
                Phonétique
              </div>
            </div>
          </div>

          {/* Liste des mots */}
          <div className="px-4 space-y-2">
            {filteredDictionnaire.map((mot, index) => (
              <div
                key={index}
                className={`rounded-xl border border-green-200 shadow-sm overflow-hidden transition-all hover:shadow-md backdrop-blur-sm ${index % 2 === 0 ? 'bg-green-50/85' : 'bg-white/85'
                  }`}
              >
                <div className="grid grid-cols-12 gap-2 p-4 min-h-[56px] items-center">
                  <div className="col-span-4">
                    <span className="font-semibold text-green-900 text-sm">
                      {mot.francais}
                    </span>
                  </div>
                  <div className="col-span-4 border-l border-r border-green-500/15 pl-3">
                    <span className="italic font-medium text-green-600 text-sm">
                      {mot.baka || '—'}
                    </span>
                  </div>
                  <div className="col-span-4 pl-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-green-700 flex-1">
                        {mot.phonetique && mot.phonetique.trim()
                          ? mot.phonetique
                          : mot.baka || '—'}
                      </span>
                      <button
                        onClick={() => speakMot(mot)}
                        className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/25 flex items-center justify-center hover:bg-green-500/20 transition-colors flex-shrink-0"
                        aria-label={`Écouter ${mot.francais}`}
                      >
                        <span className="text-base">🔊</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section informations */}
          <div className="mx-4 mt-8 bg-green-50/90 backdrop-blur-sm border border-green-200 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              🌍 À propos de la langue Baka
            </h2>
            <p className="text-green-700 leading-relaxed mb-3">
              La langue Baka, parlée par les pygmées du Gabon, est une langue non bantoue dont le vocabulaire reste relativement peu développé. Le nombre de mots est limité, et un seul terme Baka peut avoir plusieurs significations en français.
            </p>
            <p className="text-green-700 leading-relaxed mb-6">
              Cela signifie que la richesse lexicale française (où chaque nuance possède un mot différent) est condensée en peu de mots en Baka.
            </p>

            <div className="border-t border-green-500/20 my-6" />

            <h2 className="text-2xl font-bold text-green-900 mb-4">
              📚 Exemple typique
            </h2>
            <p className="text-3xl font-bold text-green-600 text-center italic my-4">
              NZOKO
            </p>
            <div className="pl-5 space-y-2">
              {['bon', 'bien', 'bienfaits', 'gentil', 'beau', 'belle'].map((meaning, i) => (
                <p key={i} className="text-green-700">• {meaning}</p>
              ))}
            </div>
            <p className="text-green-700 italic mt-4">
              Cette polyvalence montre que le lexique baka est restreint, même si la langue reste très expressive dans son contexte culturel.
            </p>

            <div className="border-t border-green-500/20 my-6" />

            <h2 className="text-2xl font-bold text-green-900 mb-4">
              🔊 Correspondances phonétiques (API)
            </h2>

            <h3 className="text-lg font-semibold text-green-900 mb-3">Voyelles :</h3>
            <div className="space-y-3">
              {[
                { symbol: 'ai', desc: '/e/' },
                { symbol: 'ei', desc: '/e/' },
                { symbol: 'ou', desc: '/u/' },
                { symbol: 'an', desc: '/ɑ̃/' },
                { symbol: 'en', desc: '/ɑ̃/' },
                { symbol: 'on', desc: '/ɔ̃/' },
                { symbol: 'in / ain / ein', desc: '/ɛ̃/' },
                { symbol: 'eu', desc: '/ø/ ou /œ/ (selon ouverture du son)' },
                { symbol: 'ô', desc: '/o/ (o fermé)' },
                { symbol: 'ó', desc: '/ɔ/ (o ouvert)' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-1">
                  <span className="font-mono font-semibold text-green-600 w-32 text-right">
                    {item.symbol}
                  </span>
                  <span className="text-green-700">→ {item.desc}</span>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-green-900 mt-6 mb-3">
              Consonnes et groupes particuliers :
            </h3>
            <div className="space-y-3">
              {[
                { symbol: 'ng', desc: '/ŋ/ (comme dans parking)' },
                { symbol: 'gn', desc: '/ɲ/ (comme dans montagne)' },
                { symbol: 'ny', desc: '/ɲ/ (souvent utilisé en langues africaines)' },
                { symbol: 'nk', desc: '/ŋk/' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-1">
                  <span className="font-mono font-semibold text-green-600 w-32 text-right">
                    {item.symbol}
                  </span>
                  <span className="text-green-700">→ {item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section remerciements avec l'image de la Mama visible (non floutée) */}
          <div className="mx-4 mt-5 relative overflow-hidden rounded-2xl shadow-xl">
            {/* Image de fond pour la section remerciements - NETTE (non floutée) */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/mama.jpeg"
                alt="Mama Baka - Remerciements"
                fill
                className="object-cover object-center"
                quality={100}
              />
              {/* Overlay plus léger pour mieux voir l'image */}
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Contenu de la section */}
            <div className="relative z-10 p-8">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
                <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
                  🙏 Remerciements
                </h2>
                <p className="text-white leading-relaxed mb-4 drop-shadow-lg text-lg font-medium">
                  Ce dictionnaire a été rédigé avec l&apos;aide précieuse de <span className="font-bold text-yellow-200">NIAN NDOM</span> (65 ans) et de sa petite sœur <span className="font-bold text-yellow-200">Hélène NZE ANDU</span> (60 ans), fondatrice de l&apos;association culture nature EDZENGUI. Avec la présence du chef de <span className="font-bold text-yellow-200">BITOUGA NDONG AZOMBO Alain</span> dans la quarantaine, et bien d&apos;autres personnes souhaitant garder leur nom anonyme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu de navigation en bas */}
      <BottomMenu />
    </>
  );
}