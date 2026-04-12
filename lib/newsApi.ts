import { SteamNewsItem, RssItem, NewsArticle, NewsCategory } from './types';
import { getAllNews } from './newsData';

// ─── Steam Games Config ───────────────────────────────────────────────────────

const STEAM_GAMES: { appid: number; category: NewsCategory; label: string }[] = [
  { appid: 730, category: 'cs2', label: 'CS2' },
  { appid: 570, category: 'dota2', label: 'Dota 2' },
  { appid: 578080, category: 'pubg-mobile', label: 'PUBG' },
  { appid: 1172470, category: 'apex-legends', label: 'Apex Legends' },
  { appid: 1085660, category: 'gaming', label: 'Destiny 2' },
  { appid: 1245620, category: 'elden-ring', label: 'Elden Ring' },
  { appid: 1174180, category: 'gaming', label: 'Red Dead Redemption 2' },
];

const RSS_FEEDS: { url: string; source: string }[] = [
  { url: 'https://www.pcgamer.com/rss/', source: 'PC Gamer' },
  { url: 'https://kotaku.com/rss', source: 'Kotaku' },
  { url: 'https://feeds.feedburner.com/ign/all', source: 'IGN' },
  { url: 'https://www.eurogamer.net/feed/news', source: 'Eurogamer' },
  { url: 'https://www.gamespot.com/feeds/mashup/', source: 'GameSpot' },
  { url: 'https://www.rockpapershotgun.com/feed', source: 'Rock Paper Shotgun' },
  { url: 'https://www.destructoid.com/feed/', source: 'Destructoid' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\{STEAM_CLAN[^}]*\}/g, '')
    .replace(/\[img\][^\[]*\[\/img\]/g, '')
    .replace(/\[url=[^\]]*\](.*?)\[\/url\]/g, '$1')
    .replace(/\[\/?\w+\]/g, '')
    .trim();
}

function extractImageFromRssBlock(block: string, description: string): string | undefined {
  const mediaMatch = block.match(/<media:(?:content|thumbnail)[^>]+url=["']([^"'&]+)/i);
  if (mediaMatch?.[1]) return mediaMatch[1];

  const enclosureMatch = block.match(/<enclosure[^>]+url=["']([^"']+)["']/i);
  if (enclosureMatch?.[1] && /\.(jpg|jpeg|png|gif|webp)/i.test(enclosureMatch[1])) return enclosureMatch[1];

  const imgMatch = block.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch?.[1]) return imgMatch[1];

  const descImgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (descImgMatch?.[1]) return descImgMatch[1];

  return undefined;
}

function detectCategory(title: string, content: string): { category: NewsCategory; label: string } {
  const text = `${title} ${content}`.toLowerCase();

  if (text.includes('valorant')) return { category: 'valorant', label: 'Valorant' };
  if (text.includes('fortnite')) return { category: 'fortnite', label: 'Fortnite' };
  if (/\bgta\b/.test(text) || text.includes('grand theft auto') || text.includes('rockstar')) return { category: 'gta', label: 'GTA' };
  if (text.includes('minecraft')) return { category: 'minecraft', label: 'Minecraft' };
  if (text.includes('league of legends') || /\blol\b/.test(text)) return { category: 'league-of-legends', label: 'League of Legends' };
  if (text.includes('overwatch')) return { category: 'overwatch', label: 'Overwatch' };
  if (text.includes('pubg') || text.includes('battlegrounds')) return { category: 'pubg-mobile', label: 'PUBG' };
  if (text.includes('free fire') || text.includes('freefire')) return { category: 'free-fire', label: 'Free Fire' };
  if (text.includes('genshin')) return { category: 'genshin-impact', label: 'Genshin Impact' };
  if (text.includes('mobile legends') || text.includes('mlbb')) return { category: 'mobile-legends', label: 'Mobile Legends' };
  if (text.includes('call of duty') || text.includes('cod mobile') || text.includes('warzone')) return { category: 'cod-mobile', label: 'COD Mobile' };
  if (text.includes('counter-strike') || /\bcs2\b/.test(text) || /\bcsgo\b/.test(text)) return { category: 'cs2', label: 'CS2' };
  if (/\bdota\b/.test(text)) return { category: 'dota2', label: 'Dota 2' };
  if (text.includes('apex legends')) return { category: 'apex-legends', label: 'Apex Legends' };
  if (text.includes('zelda')) return { category: 'zelda', label: 'Zelda' };
  if (/\bmario\b/.test(text) && !text.includes('mario kart live')) return { category: 'mario', label: 'Mario' };
  if (text.includes('pokemon') || text.includes('pokémon')) return { category: 'pokemon', label: 'Pokémon' };
  if (text.includes('elden ring') || text.includes('fromsoftware') || text.includes('fromsoft')) return { category: 'elden-ring', label: 'Elden Ring' };

  return { category: 'gaming', label: 'Gaming' };
}

// ─── Steam News Fetcher ───────────────────────────────────────────────────────

async function fetchSteamNews(
  appid: number,
  category: NewsCategory,
  label: string,
  count: number = 5,
): Promise<NewsArticle[]> {
  const url = `https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}&count=${count}&maxlength=500&format=json`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const data = await res.json() as { appnews?: { newsitems?: SteamNewsItem[] } };
    const items = data.appnews?.newsitems ?? [];

    return items
      .filter((item) => item.title && item.title.trim().length > 0)
      .map((item): NewsArticle => {
        const description = stripHtml(item.contents).slice(0, 300);

        return {
          id: `steam-${item.gid}`,
          title: item.title,
          description: description || 'Read more on Steam...',
          content: stripHtml(item.contents),
          image: '',
          category,
          categoryLabel: label,
          date: new Date(item.date * 1000).toISOString().split('T')[0],
          slug: slugify(item.title),
          externalUrl: item.url,
          author: item.author || undefined,
          isExternal: true,
          source: 'Steam',
        };
      });
  } catch {
    return [];
  }
}

// ─── RSS Fetcher ──────────────────────────────────────────────────────────────

function parseRssItems(xml: string): RssItem[] {
  const items: RssItem[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match: RegExpExecArray | null;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];

    const getTag = (tag: string): string => {
      const tagMatch = block.match(new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`));
      return tagMatch?.[1]?.trim() ?? '';
    };

    const title = getTag('title');
    const link = getTag('link') || getTag('guid');
    const description = getTag('description');
    const pubDate = getTag('pubDate');
    const author = getTag('dc:creator') || getTag('author');

    const imageUrl = extractImageFromRssBlock(block, description);

    if (title && link) {
      items.push({
        title: stripHtml(title),
        link,
        description: stripHtml(description).slice(0, 300),
        pubDate,
        author: author ? stripHtml(author) : undefined,
        imageUrl,
      });
    }
  }

  return items;
}

async function fetchRssNews(feedUrl: string, source: string, count: number = 8): Promise<NewsArticle[]> {
  try {
    const res = await fetch(feedUrl, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const xml = await res.text();
    const items = parseRssItems(xml).slice(0, count);

    return items
      .filter((item) => item.title.length > 0)
      .map((item): NewsArticle => {
        const { category, label } = detectCategory(item.title, item.description);
        const published = new Date(item.pubDate);
        const dateStr = isNaN(published.getTime())
          ? new Date().toISOString().split('T')[0]
          : published.toISOString().split('T')[0];

        return {
          id: `rss-${slugify(source)}-${slugify(item.title)}`,
          title: item.title,
          description: item.description || 'Read the full article...',
          content: item.description,
          image: item.imageUrl && item.imageUrl.startsWith('http') ? item.imageUrl : '',
          category,
          categoryLabel: label,
          date: dateStr,
          slug: slugify(item.title),
          externalUrl: item.link,
          author: item.author,
          isExternal: true,
          source,
        };
      });
  } catch {
    return [];
  }
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function fetchGamingNews(options: { pageSize?: number } = {}): Promise<NewsArticle[]> {
  const { pageSize = 30 } = options;

  try {
    const steamPromises = STEAM_GAMES.map((game) =>
      fetchSteamNews(game.appid, game.category, game.label, 4),
    );

    const rssPromises = RSS_FEEDS.map((feed) =>
      fetchRssNews(feed.url, feed.source, 8),
    );

    const results = await Promise.allSettled([...steamPromises, ...rssPromises]);

    const articles: NewsArticle[] = results
      .filter((r): r is PromiseFulfilledResult<NewsArticle[]> => r.status === 'fulfilled')
      .flatMap((r) => r.value);

    if (articles.length === 0) {
      console.warn('[newsApi] All sources returned empty - falling back to static data');
      return getAllNews();
    }

    const seenTitles = new Set<string>();
    const seenImages = new Set<string>();

    const unique = articles.filter((a) => {
      const titleKey = a.title.toLowerCase().slice(0, 60);
      if (seenTitles.has(titleKey)) return false;
      seenTitles.add(titleKey);

      if (a.image && a.image.length > 0) {
        const imgKey = a.image.split('?')[0];
        if (seenImages.has(imgKey)) return false;
        seenImages.add(imgKey);
      }

      return true;
    });

    const hasRealImage = (a: NewsArticle) =>
      a.image.length > 0 && a.image.startsWith('http');

    const withImages = unique.filter(hasRealImage);

    withImages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return withImages.slice(0, pageSize);
  } catch (err) {
    console.error('[newsApi] Aggregation failed:', err);
    return getAllNews();
  }
}

export async function fetchLatestNews(count: number = 6): Promise<NewsArticle[]> {
  const all = await fetchGamingNews({ pageSize: count });
  return all.slice(0, count);
}
