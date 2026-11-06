'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

interface ChristmasIcon {
  id: number;
  src: string;
  link?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ICONS: ChristmasIcon[] = [
  { id: 1, src: '/christmas-icons/icons/icon-276104.png', link: '#' },
  { id: 2, src: '/christmas-icons/icons/icon-276080.png', link: '#' },
  { id: 3, src: '/christmas-icons/icons/icon-276122.png', link: '#' },
  { id: 4, src: '/christmas-icons/icons/icon-276044.png', link: '#' },
  { id: 5, src: '/christmas-icons/icons/icon-276075.png', link: '#' },
  { id: 6, src: '/christmas-icons/icons/icon-276108.png', link: '#' },
  { id: 7, src: '/christmas-icons/icons/icon-276120.png', link: '#' },
  { id: 8, src: '/christmas-icons/icons/icon-276089.png', link: '#' },
  { id: 9, src: '/christmas-icons/icons/icon-276124.png', link: '#' },
  { id: 10, src: '/christmas-icons/icons/icon-276116.png', link: '#' },
  { id: 11, src: '/christmas-icons/icons/icon-276112.png', link: '#' },
  {
    id: 12,
    src: '/christmas-icons/icons/icon-bruno.png',
    link: 'https://aibruno.vercel.app/',
    size: 'sm',
  },
];

const POSITIONS = [
  { left: '8vw', top: '12vh' },
  { left: '22vw', top: '42vh' },
  { left: '38vw', top: '8vh' },
  { left: '55vw', top: '52vh' },
  { left: '72vw', top: '18vh' },
  { left: '85vw', top: '62vh' },
  { left: '12vw', top: '70vh' },
  { left: '30vw', top: '78vh' },
  { left: '50vw', top: '12vh' },
  { left: '66vw', top: '82vh' },
  { left: '80vw', top: '30vh' },
  { left: '92vw', top: '88vh' },
];

export function ChristmasIcons() {
  const reduced = useReducedMotion();

  return (
    <section className="fixed inset-0 z-[50] pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="pointer-events-auto w-full h-full">
        {ICONS.map((icon, i) => {
          const pos = POSITIONS[i] ?? POSITIONS[i % POSITIONS.length];
          return (
            <motion.div
              key={icon.id}
              onClick={() => {
                if (icon.link && icon.link !== '#') {
                  window.location.href = icon.link;
                }
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="absolute cursor-pointer select-none group"
              style={{ left: pos.left, top: pos.top, zIndex: 50 + i }}
            >
              {!reduced ? (
                <motion.div
                  animate={{
                    x: [0, 16, -16, 0],
                    y: [0, -14, 14, 0],
                    rotate: [0, -4, 4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6 + i * 0.7,
                    ease: 'easeInOut',
                    delay: i * 0.35,
                  }}
                  className="inline-block"
                >
                  <Image
                    src={icon.src}
                    alt={`Christmas icon ${icon.id}`}
                    width={128}
                    height={128}
                    className={`${
                      icon.size === 'sm'
                        ? 'w-10 h-10 md:w-12 md:h-12'
                        : icon.size === 'lg'
                        ? 'w-20 h-20 md:w-24 md:h-24'
                        : 'w-16 h-16 md:w-20 md:h-20'
                    }`}
                    loading="lazy"
                  />
                  {icon.id === 12 && (
                    <span className="absolute -right-1 -bottom-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse" aria-label="Live" />
                  )}
                </motion.div>
              ) : (
                <Image
                  src={icon.src}
                  alt={`Christmas icon ${icon.id}`}
                  width={128}
                  height={128}
                  className={`${
                    icon.size === 'sm'
                      ? 'w-10 h-10 md:w-12 md:h-12'
                      : icon.size === 'lg'
                      ? 'w-20 h-20 md:w-24 md:h-24'
                      : 'w-16 h-16 md:w-20 md:h-20'
                  }`}
                  loading="lazy"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
