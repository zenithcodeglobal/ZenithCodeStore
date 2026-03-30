import { NewsArticle, NewsCategory } from './types';

export const newsCategories: { value: NewsCategory; label: string }[] = [
  { value: 'all', label: 'ALL NEWS' },
  { value: 'valorant', label: 'VALORANT' },
  { value: 'pubg-mobile', label: 'PUBG MOBILE' },
  { value: 'free-fire', label: 'FREE FIRE' },
  { value: 'genshin-impact', label: 'GENSHIN IMPACT' },
  { value: 'mobile-legends', label: 'MOBILE LEGENDS' },
  { value: 'cod-mobile', label: 'COD MOBILE' },
];

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'VALORANT PATCH 9.06 — AGENT UPDATES & MAP ROTATION',
    description:
      'The latest Valorant patch brings sweeping changes to agent abilities, a refreshed competitive map pool, and new quality-of-life improvements you don\'t want to miss.',
    image: '/valorant-new.jpg',
    category: 'valorant',
    categoryLabel: 'Valorant',
    date: '2026-03-28',
    slug: 'valorant-patch-9-06',
    game: 'valorant',
  },
  {
    id: 'news-2',
    title: 'PUBG MOBILE — SEASON 7 ROYALE PASS REVEALED',
    description:
      'Season 7 lands with an all-new Royale Pass featuring exclusive skins, emotes, and the brand-new Desert Storm map. Here\'s everything you need to know.',
    image: '/pubg1.jpg',
    category: 'pubg-mobile',
    categoryLabel: 'PUBG Mobile',
    date: '2026-03-27',
    slug: 'pubg-mobile-season-7',
    game: 'pubg-mobile',
  },
  {
    id: 'news-3',
    title: 'GENSHIN IMPACT 5.4 — NATLAN EXPANSION & NEW CHARACTERS',
    description:
      'Explore the fiery nation of Natlan with two new 5-star characters, a massive world boss, and the highly anticipated Pyro Archon quest line.',
    image: '/genshin.jpg',
    category: 'genshin-impact',
    categoryLabel: 'Genshin Impact',
    date: '2026-03-26',
    slug: 'genshin-impact-5-4-natlan',
    game: 'genshin-impact',
  },
  {
    id: 'news-4',
    title: 'FREE FIRE MAX — RAMPAGE NEW DAWN EVENT GUIDE',
    description:
      'The Rampage New Dawn event is here with exclusive rewards, limited-time modes, and a chance to earn rare weapon skins. Don\'t miss out on the biggest event of the year.',
    image: '/free_fire_new.jpg',
    category: 'free-fire',
    categoryLabel: 'Free Fire',
    date: '2026-03-25',
    slug: 'free-fire-rampage-new-dawn',
    game: 'free-fire',
  },
  {
    id: 'news-5',
    title: 'MOBILE LEGENDS — MYTHIC HONOR SEASON 19 IS LIVE',
    description:
      'The new ranked season brings a revamped Mythic system, exclusive season rewards, and balance adjustments to over 15 heroes. Climb the ranks now!',
    image: '/kagura-mlbb.webp',
    category: 'mobile-legends',
    categoryLabel: 'Mobile Legends',
    date: '2026-03-24',
    slug: 'mlbb-mythic-honor-season-19',
    game: 'mobile-legends',
  },
  {
    id: 'news-6',
    title: 'COD MOBILE — ZOMBIES MODE RETURNS WITH NEW MAP',
    description:
      'The fan-favourite Zombies mode is back in Call of Duty: Mobile with an all-new underground map, powerful wonder weapons, and terrifying new boss encounters.',
    image: '/cod.jpg',
    category: 'cod-mobile',
    categoryLabel: 'COD Mobile',
    date: '2026-03-23',
    slug: 'cod-mobile-zombies-return',
    game: 'cod-mobile',
  },
  {
    id: 'news-7',
    title: 'VALORANT CHAMPIONS 2026 — TOURNAMENT SCHEDULE ANNOUNCED',
    description:
      'Riot Games has revealed the full schedule for VCT Champions 2026. See which teams qualified and when the action kicks off in Seoul.',
    image: '/valorant.jpeg',
    category: 'valorant',
    categoryLabel: 'Valorant',
    date: '2026-03-22',
    slug: 'valorant-champions-2026',
    game: 'valorant',
  },
  {
    id: 'news-8',
    title: 'PUBG MOBILE — BEST LOADOUT GUIDE FOR ERANGEL 3.0',
    description:
      'Master the remastered Erangel with our expert loadout recommendations, drop locations, and rotational strategies for dominating every match.',
    image: '/pubg-new.jpg',
    category: 'pubg-mobile',
    categoryLabel: 'PUBG Mobile',
    date: '2026-03-21',
    slug: 'pubg-mobile-erangel-loadout',
    game: 'pubg-mobile',
  },
  {
    id: 'news-9',
    title: 'GENSHIN IMPACT — TOP-UP BONUS EVENT IS BACK',
    description:
      'Double Genesis Crystals are back for a limited time! Take advantage of the first-time and reset bonuses to stock up on Primogems for upcoming banners.',
    image: '/genshin_impact.jpg',
    category: 'genshin-impact',
    categoryLabel: 'Genshin Impact',
    date: '2026-03-20',
    slug: 'genshin-top-up-bonus',
    game: 'genshin-impact',
  },
];

export function getAllNews(): NewsArticle[] {
  return newsArticles;
}

export function getNewsByCategory(category: NewsCategory): NewsArticle[] {
  if (category === 'all') return newsArticles;
  return newsArticles.filter((article) => article.category === category);
}
