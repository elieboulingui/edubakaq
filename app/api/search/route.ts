import { NextRequest, NextResponse } from 'next/server';

type SearchCard = {
  title: string;
  url: string;
  description: string;
  source: string;
  type: string;
};

function normalizeUrl(url: string | undefined) {
  if (!url) return '#';
  try {
    return new URL(url).toString();
  } catch {
    return url;
  }
}

function cleanText(text: string | undefined) {
  if (!text) return '';
  return text.replace(/\s+/g, ' ').trim();
}

function parseDuckDuckGoTopics(topics: unknown): SearchCard[] {
  if (!Array.isArray(topics)) return [];

  const cards: SearchCard[] = [];

  topics.forEach((item: any) => {
    if (!item) return;

    if (Array.isArray(item.Topics)) {
      cards.push(...parseDuckDuckGoTopics(item.Topics));
      return;
    }

    const title = cleanText(item.Text?.split(' - ')[0] || item.Result || item.Name || 'Sans titre');
    const url = normalizeUrl(item.FirstURL || item.URL || item.Icon?.URL || '#');
    const description = cleanText(item.Text || item.Result || item.Description || '');

    if (title && description) {
      cards.push({
        title,
        url,
        description,
        source: 'DuckDuckGo',
        type: 'Recherche',
      });
    }
  });

  return cards.slice(0, 10);
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q')?.trim();

  if (!query) {
    return NextResponse.json({ error: 'Le paramètre q est requis.' }, { status: 400 });
  }

  try {
    const ddgUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1&no_redirect=1`;
    const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`;

    const [ddgResponse, wikiResponse] = await Promise.all([
      fetch(ddgUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }),
      fetch(wikiUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }),
    ]);

    if (!ddgResponse.ok && !wikiResponse.ok) {
      return NextResponse.json({ error: 'Impossible de récupérer des résultats pour cette recherche.' }, { status: 502 });
    }

    const ddgData = ddgResponse.ok ? await ddgResponse.json() : null;
    const wikiData = wikiResponse.ok ? await wikiResponse.json() : null;

    const summary = cleanText(ddgData?.AbstractText || ddgData?.Definition || '');
    const definition = cleanText(ddgData?.Definition || '');

    const relatedTopics = parseDuckDuckGoTopics(ddgData?.RelatedTopics ?? []);

    const wikiResults = Array.isArray(wikiData?.query?.search)
      ? wikiData.query.search
          .slice(0, 5)
          .map((item: any) => ({
            title: cleanText(item.title) || 'Wikipedia result',
            url: `https://en.wikipedia.org/wiki/${encodeURIComponent(item.title.replace(/\s+/g, '_'))}`,
            description: cleanText(item.snippet?.replace(/<[^>]+>/g, '')) || 'Résultat Wikipedia',
            source: 'Wikipedia',
            type: 'Encyclopédie',
          }))
      : [];

    const sources = [...wikiResults, ...relatedTopics].filter((item, index, array) => {
      const uniqueKey = `${item.title}-${item.url}`;
      return array.findIndex((entry) => `${entry.title}-${entry.url}` === uniqueKey) === index;
    }).slice(0, 8);

    const response = {
      query,
      summary:
        summary ||
        'Aucune synthèse courte n’a été trouvée pour cette recherche, mais des sources connexes sont disponibles ci-dessous.',
      definition: definition || 'Aucune définition précise trouvée pour cette demande.',
      sources,
      related: relatedTopics.slice(0, 6),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Erreur interne du moteur de recherche.' },
      { status: 500 }
    );
  }
}
