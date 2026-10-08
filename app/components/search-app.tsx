'use client';

import { FormEvent, useState } from 'react';

type SearchCard = {
  title: string;
  url: string;
  description: string;
  source: string;
  type: string;
};

type SearchResponse = {
  query: string;
  summary: string;
  definition: string;
  sources: SearchCard[];
  related: SearchCard[];
};

export default function SearchApp() {
  const [query, setQuery] = useState('artificial intelligence');
  const [results, setResults] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const cleanQuery = query.trim();

    if (!cleanQuery) {
      setError('Veuillez saisir un mot-clé pour rechercher.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(cleanQuery)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue.');
      }

      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Impossible de charger les résultats.');
      setResults(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-sm sm:p-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Web Search Aggregator
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Trouvez l’information utile, rapidement.
            </h1>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Recherchez un sujet, puis récupérez une synthèse, les faits clés et les sources liées.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-3xl">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="flex-1 rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-lg text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                placeholder="Ex : intelligence artificielle, climate change, python..."
                aria-label="Recherche"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-2xl bg-cyan-500 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Recherche...' : 'Rechercher'}
              </button>
            </div>
          </form>

          {error && (
            <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">
              {error}
            </div>
          )}
        </div>

        {results && (
          <div className="mt-10 space-y-8">
            <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Résumé</p>
                <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                  {results.query}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white">Synthèse</h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">{results.summary}</p>

              {results.definition && (
                <div className="mt-6 rounded-2xl border border-cyan-500/25 bg-cyan-500/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Définition</p>
                  <p className="mt-3 text-base leading-7 text-slate-200">{results.definition}</p>
                </div>
              )}
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Sources</p>
                <div className="mt-5 space-y-4">
                  {results.sources.length > 0 ? (
                    results.sources.map((item, index) => (
                      <a
                        key={`${item.url}-${index}`}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-2xl border border-slate-700 bg-slate-950/50 p-4 transition hover:border-cyan-500/50 hover:bg-slate-950"
                      >
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                            {item.source}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{item.type}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                      </a>
                    ))
                  ) : (
                    <p className="text-slate-400">Aucune source directe trouvée pour cette requête.</p>
                  )}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">À voir aussi</p>
                <div className="mt-5 space-y-4">
                  {results.related.length > 0 ? (
                    results.related.map((item, index) => (
                      <a
                        key={`${item.url}-${index}`}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-2xl border border-slate-700 bg-slate-950/50 p-4 transition hover:border-violet-500/50 hover:bg-slate-950"
                      >
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                      </a>
                    ))
                  ) : (
                    <p className="text-slate-400">Aucune suggestion complémentaire.</p>
                  )}
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
