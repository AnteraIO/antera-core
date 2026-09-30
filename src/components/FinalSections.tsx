'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';

import banner1 from '../assets/banner-1.png';
import banner2 from '../assets/banner-2.png';
import banner3 from '../assets/banner-3.png';
import banner4 from '../assets/banner-4.png';
import banner5 from '../assets/banner-5.png';
import mobileAppImage from '../assets/mobile-app.png';
import webCommandImage from '../assets/web-command.png';

const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="never">{children}</MotionConfig>
);

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const tileVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

type TextTile = {
  type: 'text';
  label: string;
  title: string;
  desc: string;
  color: string;
  text: string;
  subText: string;
  bgImage: StaticImageData;
  span: string;
  height: string;
};

type ImageTile = {
  type: 'image';
  image: StaticImageData;
  span: string;
  height: string;
  imgClass: string;
};

type Tile = TextTile | ImageTile;

// ==========================================
// OPERATION SECTION
// ==========================================
export const OperationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const tiles: Tile[] = [
    // Row 1
    { type: 'text', label: '01', title: 'Assess.', desc: 'Understand your business goals, systems, and risks to find the best way forward.', color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/80', bgImage: banner1, span: 'md:col-span-2', height: 'h-[340px]' },
    { type: 'image', image: banner1, span: 'md:col-span-3', height: 'h-[340px]', imgClass: 'w-full h-full object-cover' },
    { type: 'image', image: banner2, span: 'md:col-span-3', height: 'h-[340px]', imgClass: 'w-full h-full object-cover' },
    { type: 'image', image: banner3, span: 'md:col-span-2', height: 'h-[340px]', imgClass: 'w-full h-full object-cover' },
    { type: 'image', image: banner4, span: 'md:col-span-2', height: 'h-[340px]', imgClass: 'w-full h-full object-cover' },

    // Row 2
    { type: 'image', image: banner5, span: 'md:col-span-4', height: 'h-[400px]', imgClass: 'w-full h-full object-cover' },
    { type: 'text', label: '02', title: 'Design.', desc: 'Create secure, scalable architectures tailored to your needs.', color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/85', bgImage: mobileAppImage, span: 'md:col-span-2', height: 'h-[400px]' },
    { type: 'image', image: mobileAppImage, span: 'md:col-span-2', height: 'h-[400px]', imgClass: 'w-full h-full object-cover' },
    { type: 'text', label: '03', title: 'Deliver.', desc: 'Implement solutions in clear phases and milestones.', color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/85', bgImage: webCommandImage, span: 'md:col-span-2', height: 'h-[400px]' },
    { type: 'text', label: '04', title: 'Optimize.', desc: 'Measure impact and continuously improve.', color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/85', bgImage: banner3, span: 'md:col-span-2', height: 'h-[400px]' },
  ];

  return (
    <MotionWrapper>
      <section ref={containerRef} className="bg-white text-black font-sans w-full py-32 relative overflow-hidden">
        <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          {/* Header — centered two-tone */}
          <header className="max-w-5xl mx-auto text-center mb-20">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">How we operate</span>
              <span className="block text-[#3E9C8F]">to serve you</span>
            </motion.h1>
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3"
          >
            {tiles.map((tile, i) => (
              <motion.div
                key={i}
                variants={tileVariants}
                className={`group relative overflow-hidden cursor-pointer ${tile.span} ${tile.height} ${
                  tile.type === 'text' ? `${tile.color} ${tile.text} flex flex-col justify-between p-6 md:p-8` : ''
                }`}
              >
                {/* Background image for text tiles */}
                {tile.type === 'text' && tile.bgImage && (
                  <>
                    <Image
                      src={tile.bgImage}
                      alt=""
                      fill
                      className="object-cover opacity-[0.12] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-[0.22] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </>
                )}

                {tile.type === 'image' ? (
                  <>
                    <Image
                      src={tile.image}
                      alt=""
                      className={`${tile.imgClass} transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08] group-hover:opacity-70`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-700 pointer-events-none" />
                  </>
                ) : (
                  <>
                    <div className="relative z-20">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-70 mb-4">{tile.label}</p>
                      <h3 className="text-2xl md:text-3xl lg:text-[34px] font-bold tracking-[-0.02em] leading-[1.05]">
                        {tile.title}
                      </h3>
                    </div>
                    <p className={`relative z-20 text-lg md:text-xl ${tile.subText} leading-snug mt-6`}>
                      {tile.desc}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionWrapper>
  );
};

// ==========================================
// DATA SCIENCE / INFRASTRUCTURE SECTION
// ==========================================
export const DataScienceSection = () => {
  const tiles: Tile[] = [
    // Row 1
    { type: 'text', label: '01', title: 'Cloud Modernization.', desc: 'Migrate and operate cloud systems with high visibility and security.', color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/85', bgImage: banner5, span: 'md:col-span-3', height: 'h-[360px]' },
    { type: 'image', image: banner5, span: 'md:col-span-3', height: 'h-[360px]', imgClass: 'w-full h-full object-cover' },
    { type: 'image', image: mobileAppImage, span: 'md:col-span-2', height: 'h-[360px]', imgClass: 'w-full h-full object-cover' },
    { type: 'text', label: '02', title: 'DevOps Automation.', desc: 'Faster releases with automated CI/CD pipelines.', color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/85', bgImage: webCommandImage, span: 'md:col-span-2', height: 'h-[360px]' },
    { type: 'image', image: webCommandImage, span: 'md:col-span-2', height: 'h-[360px]', imgClass: 'w-full h-full object-cover' },

    // Row 2
    { type: 'image', image: banner1, span: 'md:col-span-4', height: 'h-[400px]', imgClass: 'w-full h-full object-cover' },
    { type: 'text', label: '03', title: 'Cost Optimization.', desc: 'Predictable cloud costs and better governance.', color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/85', bgImage: banner2, span: 'md:col-span-2', height: 'h-[400px]' },
    { type: 'image', image: banner2, span: 'md:col-span-2', height: 'h-[400px]', imgClass: 'w-full h-full object-cover' },
    { type: 'text', label: '04', title: 'Security Audits.', desc: 'Identify critical security risks in your environment.', color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/85', bgImage: banner3, span: 'md:col-span-2', height: 'h-[400px]' },
    { type: 'image', image: banner3, span: 'md:col-span-2', height: 'h-[400px]', imgClass: 'w-full h-full object-cover' },
  ];

  return (
    <MotionWrapper>
      <section className="bg-white text-black font-sans w-full py-32 border-t border-neutral-200">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          <header className="max-w-5xl mx-auto text-center mb-20">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">Infrastructure</span>
              <span className="block text-[#3E9C8F]">and operations</span>
            </motion.h1>
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3"
          >
            {tiles.map((tile, i) => (
              <motion.div
                key={i}
                variants={tileVariants}
                className={`group relative overflow-hidden cursor-pointer ${tile.span} ${tile.height} ${
                  tile.type === 'text' ? `${tile.color} ${tile.text} flex flex-col justify-between p-6 md:p-8` : ''
                }`}
              >
                {tile.type === 'text' && tile.bgImage && (
                  <>
                    <Image
                      src={tile.bgImage}
                      alt=""
                      fill
                      className="object-cover opacity-[0.12] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-[0.22] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </>
                )}

                {tile.type === 'image' ? (
                  <>
                    <Image
                      src={tile.image}
                      alt=""
                      className={`${tile.imgClass} transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08] group-hover:opacity-70`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-700 pointer-events-none" />
                  </>
                ) : (
                  <>
                    <div className="relative z-20">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-70 mb-4">{tile.label}</p>
                      <h3 className="text-2xl md:text-3xl lg:text-[34px] font-bold tracking-[-0.02em] leading-[1.05]">
                        {tile.title}
                      </h3>
                    </div>
                    <p className={`relative z-20 text-lg md:text-xl ${tile.subText} leading-snug mt-6`}>
                      {tile.desc}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionWrapper>
  );
};

// ==========================================
// WHY SECTION
// ==========================================
export const WhySection = () => {
  const tiles: Tile[] = [
    // Row 1
    { type: 'text', label: '01', title: 'Enterprise Experience.', desc: 'Built by engineers with experience in high-level environments.', color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/85', bgImage: banner4, span: 'md:col-span-3', height: 'h-[360px]' },
    { type: 'image', image: banner4, span: 'md:col-span-3', height: 'h-[360px]', imgClass: 'w-full h-full object-cover' },
    { type: 'text', label: '02', title: 'Embedded Security.', desc: 'Security is embedded in every solution.', color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/85', bgImage: banner2, span: 'md:col-span-2', height: 'h-[360px]' },
    { type: 'image', image: banner2, span: 'md:col-span-2', height: 'h-[360px]', imgClass: 'w-full h-full object-cover' },
    { type: 'image', image: banner5, span: 'md:col-span-2', height: 'h-[360px]', imgClass: 'w-full h-full object-cover' },

    // Row 2
    { type: 'image', image: webCommandImage, span: 'md:col-span-3', height: 'h-[400px]', imgClass: 'w-full h-full object-cover' },
    { type: 'text', label: '03', title: 'African Market Focus.', desc: 'Practical solutions aligned to African markets.', color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/85', bgImage: banner3, span: 'md:col-span-3', height: 'h-[400px]' },
    { type: 'text', label: '04', title: 'Clear Documentation.', desc: 'Full scope, milestones, and documentation.', color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/85', bgImage: banner1, span: 'md:col-span-2', height: 'h-[400px]' },
    { type: 'image', image: banner3, span: 'md:col-span-2', height: 'h-[400px]', imgClass: 'w-full h-full object-cover' },
    { type: 'text', label: '05', title: 'Outcome Driven.', desc: 'Focused on delivering real business value.', color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/85', bgImage: mobileAppImage, span: 'md:col-span-2', height: 'h-[400px]' },
  ];

  return (
    <MotionWrapper>
      <section className="bg-white text-black font-sans w-full py-32 border-t border-neutral-200">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          <header className="max-w-5xl mx-auto text-center mb-20">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">What makes us different</span>
              <span className="block text-[#3E9C8F]">from others</span>
            </motion.h1>
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3"
          >
            {tiles.map((tile, i) => (
              <motion.div
                key={i}
                variants={tileVariants}
                className={`group relative overflow-hidden cursor-pointer ${tile.span} ${tile.height} ${
                  tile.type === 'text' ? `${tile.color} ${tile.text} flex flex-col justify-between p-6 md:p-8` : ''
                }`}
              >
                {tile.type === 'text' && tile.bgImage && (
                  <>
                    <Image
                      src={tile.bgImage}
                      alt=""
                      fill
                      className="object-cover opacity-[0.12] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-[0.22] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </>
                )}

                {tile.type === 'image' ? (
                  <>
                    <Image
                      src={tile.image}
                      alt=""
                      className={`${tile.imgClass} transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08] group-hover:opacity-70`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-700 pointer-events-none" />
                  </>
                ) : (
                  <>
                    <div className="relative z-20">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-70 mb-4">{tile.label}</p>
                      <h3 className="text-2xl md:text-3xl lg:text-[34px] font-bold tracking-[-0.02em] leading-[1.05]">
                        {tile.title}
                      </h3>
                    </div>
                    <p className={`relative z-20 text-lg md:text-xl ${tile.subText} leading-snug mt-6`}>
                      {tile.desc}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionWrapper>
  );
};