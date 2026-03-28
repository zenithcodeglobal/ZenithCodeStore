import Image from 'next/image';

export default function Marquee() {
  const repeatCount = 8;
  const items = Array.from({ length: repeatCount });

  return (
    <div className="w-full bg-[#2f5ae6] text-white py-[6px] md:py-2 overflow-hidden cursor-default select-none relative z-40">
      <div className="flex whitespace-nowrap animate-marquee items-center">
        {items.map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="font-luckiest text-[1.5rem] md:text-[1.75rem] leading-none uppercase tracking-wide px-4 mt-0.5">
              EVERY GAME. EVERY TOP-UP.
            </span>
            {/* The EA-style perfect circle badge */}
            <div className="w-8 h-8 md:w-10 md:h-10 relative bg-white rounded-full flex items-center justify-center p-2 mx-2 md:mx-4 shrink-0 shadow-sm">
              <Image 
                src="/zenith_logo.png" 
                alt="Zenith" 
                fill 
                className="object-contain object-center scale-75" 
              />
            </div>
          </div>
        ))}

        {/* Duplicate the array to create the seamless scrolling loop effect */}
        {items.map((_, i) => (
          <div key={`dup-${i}`} className="flex items-center shrink-0">
            <span className="font-luckiest text-[1.5rem] md:text-[1.75rem] leading-none uppercase tracking-wide px-4 mt-0.5">
              EVERY GAME. EVERY TOP-UP.
            </span>
            <div className="w-8 h-8 md:w-10 md:h-10 relative bg-white rounded-full flex items-center justify-center p-2 mx-2 md:mx-4 shrink-0 shadow-sm">
              <Image 
                src="/zenith_logo.png" 
                alt="Zenith" 
                fill 
                className="object-contain object-center scale-75" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
