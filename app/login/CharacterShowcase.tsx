'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

const IMAGES = [
  '/mlbb_nb_2.png',
  '/cod_nb_2.png',
  '/valorant_nb_1.png',
  '/valorant_nb_2.png',
  '/valorant_nb_3.png',
  '/genshin_nb_2.webp',
  '/lol_nb_1.png',
  '/lol_nb_2.png',
  '/coc_nb_1.png',
  '/coc_nb_2.png',
  '/fortnite_nb_1.png',
  '/honkai_nb_1.png',
  '/honkai_nb_2.png',
  '/freefire_nb_1.png',
  '/roblox_nb_1.png',
  '/apex_nb_1.png',
  '/hitman_nb_1.png',
  '/got_nb_1.png',
];

type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface SlotConfig {
  corner: Corner;
  className: string;
  enterFrom: string;
}

const PAIR_A: SlotConfig[] = [
  {
    corner: 'top-left',
    className: 'top-0 left-0',
    enterFrom: '-translate-x-8 -translate-y-8',
  },
  {
    corner: 'bottom-right',
    className: 'bottom-0 right-0',
    enterFrom: 'translate-x-8 translate-y-8',
  },
];

const PAIR_B: SlotConfig[] = [
  {
    corner: 'bottom-left',
    className: 'bottom-0 left-0',
    enterFrom: '-translate-x-8 translate-y-8',
  },
  {
    corner: 'top-right',
    className: 'top-0 right-0',
    enterFrom: 'translate-x-8 -translate-y-8',
  },
];

const CYCLE_MS = 5000;
const TRANSITION_MS = 1000;

function shufflePick(count: number, exclude: string[]): string[] {
  const available = IMAGES.filter((img) => !exclude.includes(img));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function CharacterShowcase() {
  const [pairIndex, setPairIndex] = useState(0);
  const [images, setImages] = useState<string[]>([IMAGES[0], IMAGES[1]]);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const prevImagesRef = useRef<string[]>([]);

  useEffect(() => {
    setImages(shufflePick(2, []));
    setMounted(true);
  }, []);

  const cycle = useCallback(() => {
    setVisible(false);

    setTimeout(() => {
      setPairIndex((p) => (p + 1) % 2);
      setImages((prev) => {
        prevImagesRef.current = prev;
        return shufflePick(2, prev);
      });

      setTimeout(() => setVisible(true), 50);
    }, TRANSITION_MS);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const enterDelay = setTimeout(() => setVisible(true), 800);
    const interval = setInterval(cycle, CYCLE_MS);
    return () => {
      clearTimeout(enterDelay);
      clearInterval(interval);
    };
  }, [cycle, mounted]);

  const slots = pairIndex === 0 ? PAIR_A : PAIR_B;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden hidden lg:block">
      {slots.map((slot, i) => (
        <div
          key={`${slot.corner}-${pairIndex}`}
          className={`absolute ${slot.className} w-[320px] h-[380px] xl:w-[380px] xl:h-[440px] transition-all ease-out ${
            visible
              ? 'opacity-100 scale-100 translate-x-0 translate-y-0 blur-0'
              : `opacity-0 scale-[0.85] ${slot.enterFrom} blur-[2px]`
          }`}
          style={{
            transitionDuration: `${TRANSITION_MS}ms`,
            transitionDelay: visible ? `${i * 150}ms` : '0ms',
          }}
        >
          <Image
            src={images[i] || IMAGES[0]}
            alt=""
            fill
            className="object-contain object-center"
            sizes="380px"
            unoptimized
          />
          <div
            className={`absolute inset-0 ${
              slot.corner.includes('left')
                ? 'bg-gradient-to-r from-transparent via-transparent to-[rgb(22,22,22)]'
                : 'bg-gradient-to-l from-transparent via-transparent to-[rgb(22,22,22)]'
            }`}
          />
          <div
            className={`absolute inset-0 ${
              slot.corner.includes('top')
                ? 'bg-gradient-to-b from-transparent via-transparent to-[rgb(22,22,22)]'
                : 'bg-gradient-to-t from-transparent via-transparent to-[rgb(22,22,22)]'
            }`}
          />
        </div>
      ))}
    </div>
  );
}
