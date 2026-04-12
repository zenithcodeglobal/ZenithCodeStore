import { NewsArticle, NewsCategory } from './types';

export const newsCategories: { value: NewsCategory; label: string }[] = [
  { value: 'all', label: 'ALL NEWS' },
  { value: 'gaming', label: 'GAMING' },
  { value: 'fortnite', label: 'FORTNITE' },
  { value: 'gta', label: 'GTA' },
  { value: 'minecraft', label: 'MINECRAFT' },
  { value: 'valorant', label: 'VALORANT' },
  { value: 'cs2', label: 'CS2' },
  { value: 'dota2', label: 'DOTA 2' },
  { value: 'apex-legends', label: 'APEX LEGENDS' },
  { value: 'league-of-legends', label: 'LEAGUE OF LEGENDS' },
  { value: 'overwatch', label: 'OVERWATCH' },
  { value: 'pubg-mobile', label: 'PUBG' },
  { value: 'cod-mobile', label: 'COD MOBILE' },
  { value: 'genshin-impact', label: 'GENSHIN IMPACT' },
  { value: 'free-fire', label: 'FREE FIRE' },
  { value: 'mobile-legends', label: 'MOBILE LEGENDS' },
  { value: 'zelda', label: 'ZELDA' },
  { value: 'mario', label: 'MARIO' },
  { value: 'pokemon', label: 'POKÉMON' },
  { value: 'elden-ring', label: 'ELDEN RING' },
];

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'VALORANT PATCH 9.06 - AGENT UPDATES & MAP ROTATION',
    description:
      'The latest Valorant patch brings sweeping changes to agent abilities, a refreshed competitive map pool, and new quality-of-life improvements you don\'t want to miss.',
    content:
      'Riot Games has rolled out Patch 9.06 for Valorant, delivering some of the most impactful agent balance changes we\'ve seen this act. Clove\'s ultimate now requires 8 orbs instead of 7, while Cypher\'s Trapwire trip duration has been increased to 3.5 seconds - a meaningful buff for the Sentinel\'s intel-gathering kit. Meanwhile, Jett\'s Tailwind dash has received a slight cooldown nerf following her dominant presence in the VCT Masters circuit.\n\nThe competitive map pool sees Haven and Fracture rotate out, replaced by the return of fan-favourite Breeze and the recently reworked Pearl. Riot\'s map design team noted that the Pearl rework focuses on simplifying B-site retakes and widening mid-control options, addressing long-standing community feedback about the map\'s defender-sided economy.\n\nQuality-of-life improvements include a redesigned agent select screen with real-time team composition suggestions, updated ping wheel with contextual callouts, and a new post-round economy advisor that recommends buy strategies based on team credit totals. The patch also introduces a limited-time \"Clutch Replay\" feature that automatically captures 1v3+ clutch moments for sharing.',
    image: '/valorant-new.jpg',
    category: 'valorant',
    categoryLabel: 'Valorant',
    date: '2026-03-28',
    slug: 'valorant-patch-9-06',
    game: 'valorant',
  },
  {
    id: 'news-2',
    title: 'PUBG MOBILE - SEASON 7 ROYALE PASS REVEALED',
    description:
      'Season 7 lands with an all-new Royale Pass featuring exclusive skins, emotes, and the brand-new Desert Storm map. Here\'s everything you need to know.',
    content:
      'PUBG Mobile Season 7 is officially here, and Tencent has pulled out all the stops. The centrepiece is the brand-new Desert Storm map - a 4x4km compact arena set in an abandoned military compound surrounded by rolling sand dunes. The map introduces destructible cover for the first time in PUBG Mobile, allowing players to breach thin walls with explosives and create new sightlines during endgame circles.\n\nThe Season 7 Royale Pass features 100 tiers of rewards, headlined by the Legendary "Sandstorm Operative" outfit at tier 100 and an animated weapon finish for the M416 at tier 80. Free pass holders still get a decent haul, including a new parachute trail, helmet skin, and 300 UC worth of crate coupons spread across the tiers.\n\nBalancing changes target the weapon meta directly: the DP-28\'s recoil has been tightened for the first time since launch, making it a viable alternative to the Beryl M762 at mid-range. The Mini-14 receives a damage bump to body shots, and a new attachment - the Stabilizer Grip - is available for DMRs, reducing scope sway by 25%. Vehicle physics have also been overhauled, with buggies now handling noticeably better on off-road terrain.',
    image: '/pubg1.jpg',
    category: 'pubg-mobile',
    categoryLabel: 'PUBG Mobile',
    date: '2026-03-27',
    slug: 'pubg-mobile-season-7',
    game: 'pubg-mobile',
  },
  {
    id: 'news-3',
    title: 'GENSHIN IMPACT 5.4 - NATLAN EXPANSION & NEW CHARACTERS',
    description:
      'Explore the fiery nation of Natlan with two new 5-star characters, a massive world boss, and the highly anticipated Pyro Archon quest line.',
    content:
      'Version 5.4 marks the full release of Natlan\'s western highlands, adding roughly 30% more explorable terrain to the Pyro nation. The new region introduces volcanic hot springs that grant a temporary Pyro infusion to melee attacks, and the Obsidian Caverns - a sprawling underground dungeon system with randomized layouts that refresh weekly.\n\nTwo new 5-star characters debut in this patch. Ixchel, a Pyro Catalyst user, wields a unique "Molten Tide" mechanic where her charged attacks leave pools of lava that deal continuous AoE damage. Teyoc, a Dendro Polearm fighter, synergizes with Burning reactions through his Elemental Burst, which converts nearby Burning enemies into Dendro cores that explode after a delay. Early theorycrafting suggests Teyoc will slot perfectly into existing Burgeon teams.\n\nThe Archon Quest continues with Chapter V: Act IV, where the Traveler finally confronts the truth behind Natlan\'s Pillar of Fortitude. Without spoiling the narrative, this act introduces the first permanent co-op Archon Quest segment, allowing two players to tackle the final boss sequence together. The Ignited Sovereign world boss drops materials for both new characters and features a three-phase fight with environmental destruction mechanics.',
    image: '/genshin.jpg',
    category: 'genshin-impact',
    categoryLabel: 'Genshin Impact',
    date: '2026-03-26',
    slug: 'genshin-impact-5-4-natlan',
    game: 'genshin-impact',
  },
  {
    id: 'news-4',
    title: 'FREE FIRE MAX - RAMPAGE NEW DAWN EVENT GUIDE',
    description:
      'The Rampage New Dawn event is here with exclusive rewards, limited-time modes, and a chance to earn rare weapon skins. Don\'t miss out on the biggest event of the year.',
    content:
      'Garena\'s biggest annual Free Fire event returns with Rampage: New Dawn, running from March 25 through April 15. This year\'s theme centres around a futuristic rebellion storyline, and the event is packed with free rewards for players who complete daily missions during the three-week window.\n\nThe headline mode is "Dawn Breach" - a 4v4 objective-based game type set on an exclusive neon-lit map. Teams alternate between attacking and defending a data core, with attackers needing to upload a virus while defenders hold the point. Top performers in Dawn Breach earn tokens exchangeable for the Legendary "Neon Viper" AK47 skin, which features animated circuit-board patterns along the barrel.\n\nDaily login rewards include fragments for the "Aurora" character bundle, a new gloo wall skin, and up to 800 diamonds for players who log in all 21 days. The event also introduces a community milestone: if the global playerbase collectively achieves 50 million Dawn Breach matches, every active player receives a permanent emote and a special profile badge. Garena has hinted that hitting 100 million matches will unlock an additional surprise reward.',
    image: '/free_fire_new.jpg',
    category: 'free-fire',
    categoryLabel: 'Free Fire',
    date: '2026-03-25',
    slug: 'free-fire-rampage-new-dawn',
    game: 'free-fire',
  },
  {
    id: 'news-5',
    title: 'MOBILE LEGENDS - MYTHIC HONOR SEASON 19 IS LIVE',
    description:
      'The new ranked season brings a revamped Mythic system, exclusive season rewards, and balance adjustments to over 15 heroes. Climb the ranks now!',
    content:
      'Moonton has launched Mythic Honor Season 19 with the most significant ranked system overhaul since the Mythic tier was introduced. The key change is the introduction of "Mythic Trials" - a series of five placement matches at the start of each Mythic tier that determine your initial star count. Win all five and you start with a 3-star bonus, dramatically accelerating the climb for skilled players.\n\nBalance adjustments hit 17 heroes this season. Fanny\'s cable cooldown increases from 5s to 6.5s at max level, while Esmeralda\'s shield absorption ratio takes a 15% cut - both changes aimed at reducing frustration in high-rank games. On the buff side, Edith receives a base HP increase and faster transformation animation, and Faramis\' ultimate now provides a 20% movement speed boost to all resurrected allies, making him a legitimate support pick in competitive drafts.\n\nThe season skin goes to Lancelot - "Moonlit Sovereign" - featuring a silver-and-violet aesthetic with new skill effects. Players who reach Mythic before the season\'s halfway point also receive an exclusive recall animation. Moonton has confirmed that Season 19 will run for 12 weeks, two weeks longer than usual, to accommodate the upcoming M6 World Championship schedule.',
    image: '/kagura-mlbb.webp',
    category: 'mobile-legends',
    categoryLabel: 'Mobile Legends',
    date: '2026-03-24',
    slug: 'mlbb-mythic-honor-season-19',
    game: 'mobile-legends',
  },
  {
    id: 'news-6',
    title: 'COD MOBILE - ZOMBIES MODE RETURNS WITH NEW MAP',
    description:
      'The fan-favourite Zombies mode is back in Call of Duty: Mobile with an all-new underground map, powerful wonder weapons, and terrifying new boss encounters.',
    content:
      'After months of community requests, Zombies mode returns to Call of Duty: Mobile with "Subterranea" - an underground research facility map that takes place beneath the Verdansk dam. The map features three distinct zones: the flooded laboratory, the reactor core, and the specimen vault, each with unique environmental hazards and zombie spawn patterns.\n\nTwo new wonder weapons anchor the gameplay experience. The "Volt Cannon" fires arcing electrical projectiles that chain between nearby zombies, making it devastating for horde control. The "Bonesaw" is a melee-focused wonder weapon that grants temporary invulnerability during its heavy attack animation - a high-risk, high-reward tool for aggressive players. Both weapons can be acquired through the mystery box or by completing Easter egg steps hidden throughout the map.\n\nThe boss encounter introduces "The Warden" - a massive armored zombie that stalks players throughout the map starting at Round 15. The Warden cannot be killed through conventional damage; instead, players must lure it into environmental traps across all three zones. Defeating The Warden on Nightmare difficulty awards an exclusive Legendary calling card and an animated weapon charm. Activision has confirmed that Zombies will remain as a permanent mode this time, with new maps planned quarterly.',
    image: '/cod.jpg',
    category: 'cod-mobile',
    categoryLabel: 'COD Mobile',
    date: '2026-03-23',
    slug: 'cod-mobile-zombies-return',
    game: 'cod-mobile',
  },
  {
    id: 'news-7',
    title: 'VALORANT CHAMPIONS 2026 - TOURNAMENT SCHEDULE ANNOUNCED',
    description:
      'Riot Games has revealed the full schedule for VCT Champions 2026. See which teams qualified and when the action kicks off in Seoul.',
    content:
      'Riot Games has officially unveiled the complete schedule for Valorant Champions 2026, set to take place in Seoul, South Korea from September 2–22 at the COEX Convention Center. Sixteen teams from across five international leagues will compete for the Valorant world championship title and a record $2.5 million prize pool.\n\nThe group stage runs September 2–10 with a Swiss format - a departure from the traditional double-elimination groups. Teams will play best-of-three matches until they reach either three wins or three losses, with the top eight advancing to the single-elimination playoff bracket. Riot confirmed that all playoff matches from the quarterfinals onward will be best-of-five.\n\nQualified teams include defending champions Sentinels, VCT Americas runners-up LOUD, EMEA powerhouses Fnatic and Team Heretics, and Pacific representatives Paper Rex and DRX. The final four slots will be determined through Last Chance Qualifiers held in each region during August. Seoul marks the third Asian host city for Champions, following Istanbul and Los Angeles, and Riot has announced plans for a fan festival in the Gangnam district running alongside the tournament.',
    image: '/valorant.jpeg',
    category: 'valorant',
    categoryLabel: 'Valorant',
    date: '2026-03-22',
    slug: 'valorant-champions-2026',
    game: 'valorant',
  },
  {
    id: 'news-8',
    title: 'PUBG MOBILE - BEST LOADOUT GUIDE FOR ERANGEL 3.0',
    description:
      'Master the remastered Erangel with our expert loadout recommendations, drop locations, and rotational strategies for dominating every match.',
    content:
      'Erangel 3.0 is the most significant map rework in PUBG Mobile history, and it demands a fresh approach to loadouts and rotations. The remastered terrain features denser vegetation, redesigned compounds, and new underground bunker systems that fundamentally change how engagements play out in the mid and late game.\n\nFor early game, we recommend dropping at the new Quarry complex south of Pochinki - it offers high-tier loot density with six guaranteed weapon spawns across its three buildings, plus a vehicle spawn for quick rotations. The optimal early loadout combines an M416 with a 3x scope for versatility and a UMP45 as a close-range backup. The new Stabilizer Grip is a must-pick for any DMR you find, as the reduced scope sway makes the SLR and Mini-14 significantly more consistent at 200m+.\n\nMid-game rotations should prioritize the new river system that runs through the map\'s centre. The bridges have been replaced with shallow fording points, meaning vehicles can cross at multiple locations - but the water slows movement speed by 40%, creating natural kill zones. For final circles, the added terrain elevation means that compound rooftops are less dominant than before. Instead, prioritize natural rock formations and the new trench lines near Mylta Power, which offer hard cover without the risk of being trapped indoors by grenades.',
    image: '/pubg-new.jpg',
    category: 'pubg-mobile',
    categoryLabel: 'PUBG Mobile',
    date: '2026-03-21',
    slug: 'pubg-mobile-erangel-loadout',
    game: 'pubg-mobile',
  },
  {
    id: 'news-9',
    title: 'GENSHIN IMPACT - TOP-UP BONUS EVENT IS BACK',
    description:
      'Double Genesis Crystals are back for a limited time! Take advantage of the first-time and reset bonuses to stock up on Primogems for upcoming banners.',
    content:
      'HoYoverse has announced the return of the Genesis Crystal top-up bonus reset, running from March 20 through April 10. This is only the fourth time the bonus has been reset since Genshin Impact\'s launch, making it one of the most anticipated recurring events for players planning their Primogem budgets around upcoming banners.\n\nThe reset means that every top-up tier regains its first-time purchase bonus, effectively doubling the Genesis Crystals you receive. The most efficient tier remains the $99.99 option, which yields 6,480 + 6,480 bonus crystals - enough for roughly 81 Intertwined Fates when converted through Primogems. For players on a tighter budget, the $14.99 tier offers the best value relative to cost, providing 1,090 crystals with its doubled bonus.\n\nTiming-wise, this reset aligns perfectly with the Version 5.4 banners featuring Ixchel and Teyoc. Leaks suggest that Version 5.5 will introduce a rerun of one of the most popular limited characters alongside a new weekly boss, giving players strong incentive to stock up now. Remember that Genesis Crystals convert to Primogems at a 1:1 ratio, and the bonus crystals have no expiration date - so there\'s no rush to spend immediately after purchasing.',
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

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}
