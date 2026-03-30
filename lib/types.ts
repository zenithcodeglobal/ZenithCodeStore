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

export type NewsCategory = 'all' | 'valorant' | 'pubg-mobile' | 'free-fire' | 'genshin-impact' | 'mobile-legends' | 'cod-mobile';

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  category: NewsCategory;
  categoryLabel: string;
  date: string;
  slug: string;
  game?: string;
}
