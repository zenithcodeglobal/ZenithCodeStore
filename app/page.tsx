import HeroSlider from './components/HeroSlider';
import SectionHeading from './components/SectionHeading';
import GameCard from './components/GameCard';
import WhyChooseUs from './components/WhyChooseUs';
import PartnerBanner from './components/PartnerBanner';
import Newsletter from './components/Newsletter';
import { getFeaturedGames, getTrendingGames, getPopularGames } from '@/lib/data';

export default function HomePage() {
  const featured = getFeaturedGames();
  const trending = getTrendingGames();
  const popular = getPopularGames();

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider games={featured} />

      {/* Trending Games */}
      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Trending" seeMoreHref="/games" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {trending.map((game) => (
              <GameCard key={game.id} game={game} showPrice />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Top-Ups */}
      <section className="py-10 lg:py-14 bg-surface-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Popular Top-Ups" seeMoreHref="/games" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {popular.map((game) => (
              <GameCard key={game.id} game={game} showPrice />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Partner Banner */}
      <PartnerBanner />

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
