'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { StaticImageData } from 'next/image';
import { Star, ShieldCheck, ArrowUpRight, ChevronRight, Quote, Landmark, Radio, ShoppingBag, HeartPulse } from 'lucide-react';

import blacksand1 from '../assets/blacksand-1.png';
import blacksand2 from '../assets/blacksand-2.png';
import blacksand3 from '../assets/blacksand-3.png';
import blacksand4 from '../assets/blacksand-4.png';
import nest1 from '../assets/nest-1.png';
import nest2 from '../assets/nest-2.png';
import nest3 from '../assets/nest-3.png';
import nest4 from '../assets/nest-4.png';
import nest5 from '../assets/nest-5.png';
import nest6 from '../assets/nest-6.png';
import sekelaweb1 from '../assets/sekelaweb-1.png';
import sekelaweb2 from '../assets/sekelaweb-2.png';
import sekelaweb3 from '../assets/sekelaweb-3.png';
import nawwi1 from '../assets/nawwi-1.png';
import nawwi2 from '../assets/nawwi-2.png';
import nawwi3 from '../assets/nawwi-3.png';
import nawwi4 from '../assets/nawwi-4.png';
import nawwi5 from '../assets/nawwi-5.png';
import nawwi6 from '../assets/nawwi-6.png';

const ScrambleText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

const MagneticButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      style={{ x: useSpring(x, { stiffness: 150, damping: 15 }), y: useSpring(y, { stiffness: 150, damping: 15 }) }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ImageGallery = ({ images, title }: { images: (string | StaticImageData)[]; title: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div className="relative">
      <motion.div
        ref={containerRef}
        className="relative aspect-[16/10] rounded-lg overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_#000000] cursor-pointer"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); mouseX.set(0); mouseY.set(0); }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={(images[activeIndex] as any).src || images[activeIndex]}
            alt={`${title} - ${activeIndex + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          animate={{ opacity: isHovered ? 1 : 0.3 }}
        />

        <div className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 text-xs font-mono font-bold border-2 border-white">
          {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </div>

        <AnimatePresence>
          {isHovered && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={(e) => { e.stopPropagation(); setActiveIndex((prev) => (prev - 1 + images.length) % images.length); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-black flex items-center justify-center hover:bg-[#FA520F] hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={(e) => { e.stopPropagation(); setActiveIndex((prev) => (prev + 1) % images.length); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-black flex items-center justify-center hover:bg-[#FA520F] hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="flex gap-2 mt-4 justify-center">
        {images.map((img, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`relative w-16 h-10 border-2 overflow-hidden ${activeIndex === i ? 'border-[#FA520F]' : 'border-black/30'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={(img as any).src || img} alt="" className="w-full h-full object-cover" />
            {activeIndex === i && (
              <motion.div className="absolute inset-0 bg-[#FA520F]/20" layoutId={`thumb-${title}`} />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

const ClientShowcase = ({ client, images, description, index }: { client: string; images: (string | StaticImageData)[]; description: string; index: number; }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const isEven = index % 2 === 0;

  return (
    <motion.div ref={ref} style={{ opacity, scale }} className="mb-32 relative">
      <motion.div className="absolute -top-20 left-0 text-[150px] font-black font-mono text-black/5 leading-none select-none pointer-events-none" style={{ y }}>
        0{index + 1}
      </motion.div>

      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        <motion.div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2 className="text-4xl md:text-6xl font-black font-mono uppercase tracking-tighter mb-6 leading-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <ScrambleText text={client} />
          </motion.h2>

          <motion.p className="text-neutral-600 font-mono text-sm md:text-base leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {description}
          </motion.p>

          <MagneticButton>
            <motion.button
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border-2 border-black hover:bg-black hover:text-white transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Case Study
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </MagneticButton>
        </motion.div>

        <motion.div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <ImageGallery images={images} title={client} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const ParticleBackground = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#FA520F]/10"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [0, -100, 0], x: [0, 50, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const GrainOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

const PixelLandmarkIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Landmark className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelRadioIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Radio className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelShoppingIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <ShoppingBag className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelHeartPulseIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <HeartPulse className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const DiamondDecoration = ({ className = "" }: { className?: string }) => (
  <motion.div className={`w-16 h-16 border border-neutral-200 rotate-45 ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  />
);

export const CustomersPage = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const clients = [
    { client: "Blacksand Adventures", images: [blacksand1, blacksand2, blacksand3, blacksand4], description: "A premium adventure tourism platform revolutionizing how travelers discover and book exclusive African safari experiences. Built with real-time availability, immersive 3D previews, and seamless payment integration." },
    { client: "Travel Nest Africa", images: [nest1, nest2, nest3, nest4, nest5, nest6], description: "An all-in-one travel management ecosystem connecting local operators with global travelers. Features AI-powered itinerary generation, dynamic pricing, and a comprehensive vendor dashboard." },
    { client: "Sekela POS", images: [sekelaweb1, sekelaweb2, sekelaweb3], description: "A next-generation point-of-sale system designed for African retail businesses. Inventory management, and real-time analytics dashboard." },
    { client: "Nawwi Wellness", images: [nawwi1, nawwi2, nawwi3, nawwi4, nawwi5, nawwi6], description: "Luxury scent-led wellness from the heart of Tanzania. Handcrafted candles and immersive sensory experiences using premium coconut-soy wax and locally sourced essential oils. Sustainable, plastic-free packaging supporting local ethical agriculture in Tanzania." }
  ];

  const industries = [
    { title: "Finance & FinTech", icon: PixelLandmarkIcon },
    { title: "Telecom & Tech", icon: PixelRadioIcon },
    { title: "SMEs & Retail", icon: PixelShoppingIcon },
    { title: "Healthcare", icon: PixelHeartPulseIcon }
  ];

  return (
    <div ref={containerRef} className="relative bg-[#FAFAF8] min-h-screen text-black font-sans antialiased w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <ParticleBackground />
      <GrainOverlay />

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX: scrollYProgress }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <section className="mb-48 pt-32">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-normal tracking-[-0.03em] leading-[0.95] mb-16 text-center">Industries <span className="text-[#FA520F]">We Serve.</span></h2>
          <div className="relative max-w-5xl mx-auto">
            <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-200 bg-white">
              {industries.map((industry, i) => (
                <motion.div key={industry.title} className={`group p-8 md:p-12 min-h-[200px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors ${i % 2 === 0 ? 'border-r border-b border-neutral-200' : 'border-b border-neutral-200'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                >
                  <industry.icon />
                  <div className="mt-auto">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">{industry.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
          </div>
        </section>

        <div className="mb-32">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-normal tracking-[-0.03em] leading-[0.95] mb-16 text-center">The <span className="text-[#FA520F]">Companies</span> We Work With</h2>
          {clients.map((client, index) => (
            <ClientShowcase key={client.client} client={client.client} images={client.images} description={client.description} index={index} />
          ))}
        </div>

        <motion.div className="text-center pb-32" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <motion.h2 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-[-0.03em] leading-[0.95] mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Ready to <span className="text-[#FA520F]">Transform?</span>
          </motion.h2>
          <motion.p className="text-neutral-500 text-base max-w-lg mx-auto mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            Join the ranks of industry leaders who trust ANTERA to power their digital future.
          </motion.p>
          <MagneticButton>
            <motion.button 
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border-2 border-black hover:bg-black hover:text-white transition-all"
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomersPage;