import EAGamesGrid from './components/EAGamesGrid';
import HomeNewsSection from './components/HomeNewsSection';
import HeroVideo from './components/HeroVideo';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[rgb(28,27,25)]">
      <HeroVideo />
      <EAGamesGrid />
      <HomeNewsSection />
    </div>
  );
}
