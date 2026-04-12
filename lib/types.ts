export type Category = 'mobile' | 'pc' | 'console' | 'all';

export interface Game {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  bannerImage: string;
  category: Category;
  platforms: string[];
  rating: number;
  currency: string;
  currencyName: string;
  playerIdLabel: string;
  serverIdLabel?: string;
  featured?: boolean;
  trending?: boolean;
  popular?: boolean;
  imagePosition?: string;
  bannerPosition?: string;
  imageScale?: number;
}

export interface TopUpPackage {
  id: string;
  gameId: string;
  name: string;
  amount: number;
  bonus?: number;
  price: number;
  currency: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export type NewsCategory =
  | 'all'
  | 'valorant'
  | 'pubg-mobile'
  | 'free-fire'
  | 'genshin-impact'
  | 'mobile-legends'
  | 'cod-mobile'
  | 'cs2'
  | 'dota2'
  | 'apex-legends'
  | 'fortnite'
  | 'gta'
  | 'minecraft'
  | 'league-of-legends'
  | 'overwatch'
  | 'zelda'
  | 'mario'
  | 'pokemon'
  | 'elden-ring'
  | 'gaming';

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: NewsCategory;
  categoryLabel: string;
  date: string;
  slug: string;
  game?: string;
  /** External article URL (for API/RSS-sourced news) */
  externalUrl?: string;
  /** Author name */
  author?: string;
  /** Whether this article comes from a live source vs static data */
  isExternal?: boolean;
  /** Source label (e.g. "Steam", "IGN", "PC Gamer") */
  source?: string;
}

/** Raw shape from Steam GetNewsForApp API */
export interface SteamNewsItem {
  gid: string;
  title: string;
  url: string;
  is_external_url: boolean;
  author: string;
  contents: string;
  feedlabel: string;
  date: number;
  feedname: string;
  feed_type: number;
  appid: number;
}

/** Parsed RSS feed item */
export interface RssItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author?: string;
  imageUrl?: string;
}
