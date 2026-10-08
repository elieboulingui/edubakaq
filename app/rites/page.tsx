import Link from 'next/link';

export default function RitesPage() {
  return (
    <main className="min-h-screen bg-stone-950 px-4 py-16 text-stone-100">
      <div className="mx-auto max-w-3xl rounded-3xl border border-stone-800 bg-stone-900 p-8 shadow-2xl">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-400">Rituels</p>
        <h1 className="mb-4 text-3xl font-bold text-white">Rites et danses Baka</h1>
        <p className="mb-6 text-stone-300">
          Cette section rassemble les éléments culturels et les traditions de la communauté Baka.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="/rites-danses-baka" className="rounded-full bg-emerald-500 px-5 py-2.5 font-semibold text-stone-950 transition hover:bg-emerald-400">
            Voir les rites détaillés
          </Link>
          <Link href="/" className="rounded-full border border-stone-700 px-5 py-2.5 font-semibold text-stone-200 transition hover:bg-stone-800">
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
