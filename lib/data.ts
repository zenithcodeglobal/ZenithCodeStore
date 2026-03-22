import { Game, TopUpPackage } from './types';

export const games: Game[] = [
  {
    id: '1',
    name: 'Mobile Legends',
    slug: 'mobile-legends',
    description: 'Mobile Legends: Bang Bang is a multiplayer online battle arena (MOBA) game designed for mobile devices. Experience the thrill of 5v5 battles with players worldwide. Choose from a vast roster of heroes, each with unique abilities and roles, and work with your team to destroy the enemy base.',
    shortDescription: '5v5 MOBA – Team up and dominate the battlefield',
    image: '/mlbb.jpg',
    bannerImage: '/mlbb.jpg',
    category: 'mobile',
    platforms: ['Android', 'iOS'],
    rating: 4.5,
    currency: 'Diamonds',
    currencyName: 'Diamonds',
    playerIdLabel: 'User ID',
    serverIdLabel: 'Zone ID',
    featured: true,
    trending: true,
    popular: true,
  },
  {
    id: '2',
    name: 'PUBG Mobile',
    slug: 'pubg-mobile',
    description: 'PUBG Mobile is a free-to-play battle royale video game. Drop into the battlefield, gear up, and survive to be the last one standing. With immersive maps, realistic weapons, and intense tactical gameplay, PUBG Mobile delivers an unforgettable gaming experience.',
    shortDescription: 'Battle Royale – Drop, loot, survive',
    image: '/pubg.jpg',
    bannerImage: '/pubg.jpg',
    category: 'mobile',
    platforms: ['Android', 'iOS'],
    rating: 4.3,
    currency: 'UC',
    currencyName: 'Unknown Cash (UC)',
    playerIdLabel: 'Player ID',
    featured: true,
    trending: true,
    popular: true,
  },
  {
    id: '3',
    name: 'Free Fire',
    slug: 'free-fire',
    description: 'Garena Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places you on a remote island where you compete against 49 other players. Collect weapons, stay in the safe zone, and fight to be the last one standing.',
    shortDescription: 'Survival Shooter – Fast-paced 50-player battles',
    image: '/free_fire.jpg',
    bannerImage: '/free_fire.jpg',
    category: 'mobile',
    platforms: ['Android', 'iOS'],
    rating: 4.2,
    currency: 'Diamonds',
    currencyName: 'Diamonds',
    playerIdLabel: 'Player ID',
    trending: true,
    popular: true,
  },
  {
    id: '4',
    name: 'Valorant',
    slug: 'valorant',
    description: 'Valorant is a free-to-play first-person tactical hero shooter set in the near future. Players take on the role of agents, each wielding unique abilities alongside a standard arsenal of weapons. Team-based tactical gameplay meets precise gunplay in this 5v5 character-based shooter.',
    shortDescription: 'Tactical Shooter – Precise gunplay meets unique abilities',
    image: '/valorant.jpeg',
    bannerImage: '/valorant.jpeg',
    category: 'pc',
    platforms: ['PC'],
    rating: 4.6,
    currency: 'VP',
    currencyName: 'Valorant Points (VP)',
    playerIdLabel: 'Riot ID',
    featured: true,
    trending: true,
    popular: true,
  },
  {
    id: '5',
    name: 'Genshin Impact',
    slug: 'genshin-impact',
    description: 'Genshin Impact is an open-world action RPG where you explore the vast world of Teyvat. With a diverse cast of characters, elemental combat system, and breathtaking landscapes, embark on a journey across seven nations to find your lost sibling and unravel the mysteries of this world.',
    shortDescription: 'Open-World RPG – Explore Teyvat with elemental powers',
    image: '/genshin_impact.jpg',
    bannerImage: '/genshin_impact.jpg',
    category: 'pc',
    platforms: ['PC', 'PS5', 'Android', 'iOS'],
    rating: 4.7,
    currency: 'Genesis Crystals',
    currencyName: 'Genesis Crystals',
    playerIdLabel: 'UID',
    serverIdLabel: 'Server',
    featured: true,
    popular: true,
  },
  {
    id: '6',
    name: 'Call of Duty: Mobile',
    slug: 'cod-mobile',
    description: 'Call of Duty: Mobile brings the thrilling, fast-paced action of the iconic franchise to your fingertips. Engage in classic multiplayer modes or drop into massive battle royale maps. Customize your loadouts, unlock legendary operators, and dominate the competition.',
    shortDescription: 'FPS – The iconic shooter experience on mobile',
    image: '/cod_mobile.jpeg',
    bannerImage: '/cod_mobile.jpeg',
    category: 'mobile',
    platforms: ['Android', 'iOS'],
    rating: 4.6,
    currency: 'CP',
    currencyName: 'COD Points (CP)',
    playerIdLabel: 'Player ID',
    featured: true,
    trending: true,
    popular: true,
  },
  {
    id: '7',
    name: 'Roblox',
    slug: 'roblox',
    description: 'Roblox is an online game creation and gaming platform that lets you play and create millions of 3D experiences. Dive into a universe of games, from adventure and role-play to simulation and obstacle courses, all created by a global community.',
    shortDescription: 'Game Platform – Imagine, create, and play together',
    image: '/roblox.png',
    bannerImage: '/roblox.png',
    category: 'pc',
    platforms: ['PC', 'Android', 'iOS', 'Xbox'],
    rating: 4.1,
    currency: 'Robux',
    currencyName: 'Robux',
    playerIdLabel: 'Username',
  },
];

export const topUpPackages: TopUpPackage[] = [
  // Mobile Legends
  { id: 'ml-1', gameId: '1', name: '86 Diamonds', amount: 86, price: 1.49, currency: 'USD' },
  { id: 'ml-2', gameId: '1', name: '172 Diamonds', amount: 172, price: 2.99, currency: 'USD' },
  { id: 'ml-3', gameId: '1', name: '257 Diamonds', amount: 257, price: 4.49, currency: 'USD' },
  { id: 'ml-4', gameId: '1', name: '344 Diamonds', amount: 344, bonus: 30, price: 5.99, currency: 'USD', popular: true },
  { id: 'ml-5', gameId: '1', name: '514 Diamonds', amount: 514, bonus: 50, price: 8.99, currency: 'USD' },
  { id: 'ml-6', gameId: '1', name: '1050 Diamonds', amount: 1050, bonus: 100, price: 17.99, currency: 'USD' },
  { id: 'ml-7', gameId: '1', name: '2195 Diamonds', amount: 2195, bonus: 220, price: 36.99, currency: 'USD' },
  { id: 'ml-8', gameId: '1', name: '4390 Diamonds', amount: 4390, bonus: 440, price: 69.99, currency: 'USD' },

  // PUBG Mobile
  { id: 'pubg-1', gameId: '2', name: '60 UC', amount: 60, price: 0.99, currency: 'USD' },
  { id: 'pubg-2', gameId: '2', name: '325 UC', amount: 325, price: 4.99, currency: 'USD' },
  { id: 'pubg-3', gameId: '2', name: '660 UC', amount: 660, price: 9.99, currency: 'USD', popular: true },
  { id: 'pubg-4', gameId: '2', name: '1800 UC', amount: 1800, bonus: 200, price: 24.99, currency: 'USD' },
  { id: 'pubg-5', gameId: '2', name: '3850 UC', amount: 3850, bonus: 500, price: 49.99, currency: 'USD' },
  { id: 'pubg-6', gameId: '2', name: '8100 UC', amount: 8100, bonus: 1100, price: 99.99, currency: 'USD' },

  // Free Fire
  { id: 'ff-1', gameId: '3', name: '100 Diamonds', amount: 100, price: 0.99, currency: 'USD' },
  { id: 'ff-2', gameId: '3', name: '310 Diamonds', amount: 310, price: 2.99, currency: 'USD' },
  { id: 'ff-3', gameId: '3', name: '520 Diamonds', amount: 520, price: 4.99, currency: 'USD', popular: true },
  { id: 'ff-4', gameId: '3', name: '1060 Diamonds', amount: 1060, bonus: 106, price: 9.99, currency: 'USD' },
  { id: 'ff-5', gameId: '3', name: '2180 Diamonds', amount: 2180, bonus: 218, price: 19.99, currency: 'USD' },
  { id: 'ff-6', gameId: '3', name: '5600 Diamonds', amount: 5600, bonus: 560, price: 49.99, currency: 'USD' },

  // Valorant
  { id: 'val-1', gameId: '4', name: '475 VP', amount: 475, price: 4.99, currency: 'USD' },
  { id: 'val-2', gameId: '4', name: '1000 VP', amount: 1000, price: 9.99, currency: 'USD' },
  { id: 'val-3', gameId: '4', name: '2050 VP', amount: 2050, bonus: 50, price: 19.99, currency: 'USD', popular: true },
  { id: 'val-4', gameId: '4', name: '3650 VP', amount: 3650, bonus: 150, price: 34.99, currency: 'USD' },
  { id: 'val-5', gameId: '4', name: '5350 VP', amount: 5350, bonus: 350, price: 49.99, currency: 'USD' },
  { id: 'val-6', gameId: '4', name: '11000 VP', amount: 11000, bonus: 1000, price: 99.99, currency: 'USD' },

  // Genshin Impact
  { id: 'gi-1', gameId: '5', name: '60 Genesis Crystals', amount: 60, price: 0.99, currency: 'USD' },
  { id: 'gi-2', gameId: '5', name: '330 Genesis Crystals', amount: 330, price: 4.99, currency: 'USD' },
  { id: 'gi-3', gameId: '5', name: '1090 Genesis Crystals', amount: 1090, bonus: 110, price: 14.99, currency: 'USD', popular: true },
  { id: 'gi-4', gameId: '5', name: '2240 Genesis Crystals', amount: 2240, bonus: 280, price: 29.99, currency: 'USD' },
  { id: 'gi-5', gameId: '5', name: '3880 Genesis Crystals', amount: 3880, bonus: 600, price: 49.99, currency: 'USD' },
  { id: 'gi-6', gameId: '5', name: '8080 Genesis Crystals', amount: 8080, bonus: 1600, price: 99.99, currency: 'USD' },

  // COD Mobile
  { id: 'cod-1', gameId: '6', name: '80 CP', amount: 80, price: 0.99, currency: 'USD' },
  { id: 'cod-2', gameId: '6', name: '420 CP', amount: 420, price: 4.99, currency: 'USD' },
  { id: 'cod-3', gameId: '6', name: '880 CP', amount: 880, price: 9.99, currency: 'USD', popular: true },
  { id: 'cod-4', gameId: '6', name: '2400 CP', amount: 2400, bonus: 240, price: 24.99, currency: 'USD' },
  { id: 'cod-5', gameId: '6', name: '5000 CP', amount: 5000, bonus: 500, price: 49.99, currency: 'USD' },
  { id: 'cod-6', gameId: '6', name: '10800 CP', amount: 10800, bonus: 1080, price: 99.99, currency: 'USD' },

  // Roblox
  { id: 'rob-1', gameId: '7', name: '400 Robux', amount: 400, price: 4.99, currency: 'USD' },
  { id: 'rob-2', gameId: '7', name: '800 Robux', amount: 800, price: 9.99, currency: 'USD' },
  { id: 'rob-3', gameId: '7', name: '1700 Robux', amount: 1700, bonus: 100, price: 19.99, currency: 'USD', popular: true },
  { id: 'rob-4', gameId: '7', name: '4500 Robux', amount: 4500, bonus: 500, price: 49.99, currency: 'USD' },
  { id: 'rob-5', gameId: '7', name: '10000 Robux', amount: 10000, bonus: 1500, price: 99.99, currency: 'USD' },
];

// Helper functions
export function getAllGames(): Game[] {
  return games;
}

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getTrendingGames(): Game[] {
  return games.filter((g) => g.trending);
}

export function getPopularGames(): Game[] {
  return games.filter((g) => g.popular);
}

export function getFeaturedGames(): Game[] {
  return games.filter((g) => g.featured);
}

export function getGamesByCategory(category: string): Game[] {
  if (category === 'all') return games;
  return games.filter((g) => g.category === category);
}

export function getPackagesForGame(gameId: string): TopUpPackage[] {
  return topUpPackages.filter((p) => p.gameId === gameId);
}
