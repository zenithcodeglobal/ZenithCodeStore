'use client';

export default function HeroVideo() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[85vh] md:h-[95vh] overflow-hidden bg-black flex flex-col items-center justify-center -mt-[92px] sm:-mt-[112px] pt-[92px] sm:pt-[112px]">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          className="block object-cover w-full h-full opacity-60 scale-[1.15] transform-gpu"
          onTimeUpdate={(e) => {
            const video = e.currentTarget;
            if (video.currentTime >= 140) {
              video.currentTime = 8;
              video.play();
            }
          }}
        >
          <source src="/hero_video.mp4#t=8" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center select-none pt-4 md:pt-0">
        <h1
          className="font-luckiest text-white uppercase text-center flex flex-col leading-[0.85] tracking-normal w-full relative"
          style={{ fontSize: 'clamp(4rem, 11vw, 12rem)' }}
        >
          <span className="font-black mix-blend-overlay opacity-90 w-full whitespace-nowrap">POWER</span>
          <span className="font-black mix-blend-overlay opacity-90 w-full">YOUR</span>
          <span className="font-black whitespace-nowrap mix-blend-overlay opacity-90 w-full relative">
            GAME
          </span>
        </h1>
      </div>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[rgb(28,27,25)] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
