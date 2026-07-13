'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { StaticImageData } from 'next/image';
import { Star, ShieldCheck, ArrowUpRight, ChevronRight, Quote } from 'lucide-react';

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

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#FA520F] pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FA520F] pointer-events-none z-[9999] hidden md:block"
        style={{
          x: useSpring(cursorX, { damping: 30, stiffness: 500 }),
          y: useSpring(cursorY, { damping: 30, stiffness: 500 }),
        }}
      />
    </>
  );
};

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
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <rect x="8" y="8" width="3" height="8" fill="white"/>
    <rect x="13" y="8" width="3" height="8" fill="white"/>
    <rect x="8" y="6" width="8" height="2" fill="white"/>
  </motion.svg>
);

const PixelRadioIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
    <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelShoppingIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1"/>
    <path d="M8 8h8l-1 7H9L8 8z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="10" cy="16" r="1" fill="white"/>
    <circle cx="14" cy="16" r="1" fill="white"/>
  </motion.svg>
);

const PixelHeartPulseIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#EF4444" stroke="#B91C1C" strokeWidth="1"/>
    <path d="M6 12h3l2-4 3 8 2-4h2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
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
    { client: "Sekela POS", images: [sekelaweb1, sekelaweb2, sekelaweb3], description: "A next-generation point-of-sale system designed for African retail businesses. Features offline-first architecture, multi-currency support, inventory management, and real-time analytics dashboard." },
    { client: "Nawwi Wellness", images: [nawwi1, nawwi2, nawwi3, nawwi4, nawwi5, nawwi6], description: "Luxury scent-led wellness from the heart of Tanzania. Handcrafted candles and immersive sensory experiences using premium coconut-soy wax and locally sourced essential oils. Sustainable, plastic-free packaging supporting local ethical agriculture in Tanzania." }
  ];

  const industries = [
    { title: "Finance & FinTech", icon: PixelLandmarkIcon, challenges: ["Protecting sensitive data against breaches", "Managing real-time reporting and compliance", "High uptime requirements"], outcomes: ["Improved risk management", "Faster accurate insights", "Operational cost savings"] },
    { title: "Telecom & Tech", icon: PixelRadioIcon, challenges: ["Legacy infrastructure limiting agility", "Network monitoring complexity", "Operational insights at scale"], outcomes: ["Faster deployment times", "Lower operational expense", "Better decision-making"] },
    { title: "SMEs & Retail", icon: PixelShoppingIcon, challenges: ["Limited budgets and resources", "Manual business processes", "Lack of data for decision-making"], outcomes: ["Efficient operations", "Better customer engagement", "Actionable business insights"] },
    { title: "Healthcare", icon: PixelHeartPulseIcon, challenges: ["Ensuring data privacy and security", "Fragmented reporting systems", "High uptime for critical systems"], outcomes: ["Stronger data privacy posture", "Faster clinical decisions", "Streamlined admin processes"] }
  ];

  return (
    <div ref={containerRef} className="relative bg-[#FAFAF8] min-h-screen text-black font-sans antialiased w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <CustomCursor />
      <ParticleBackground />
      <GrainOverlay />

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX: scrollYProgress }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <section className="mb-48 pt-32">
          <div className="flex justify-center items-center gap-8 mb-12">
            <PixelLandmarkIcon />
            <PixelRadioIcon />
            <PixelShoppingIcon />
            <PixelHeartPulseIcon />
          </div>
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-normal tracking-[-0.03em] leading-[0.95] mb-16 text-center">Industries <span className="text-[#FA520F]">We Serve.</span></h2>
          <div className="relative max-w-5xl mx-auto">
            <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-200 bg-white">
              {industries.map((industry, i) => (
                <motion.div key={industry.title} className={`group p-8 md:p-12 min-h-[300px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors ${i % 2 === 0 ? 'border-r border-b border-neutral-200' : 'border-b border-neutral-200'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                >
                  <industry.icon />
                  <div className="mt-auto">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">{industry.title}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 font-mono">Challenges</h4>
                        <ul className="space-y-1.5">
                          {industry.challenges.map((c, j) => (
                            <li key={j} className="text-sm text-neutral-500 leading-relaxed">• {c}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 font-mono">Outcomes</h4>
                        <ul className="space-y-1.5">
                          {industry.outcomes.map((o, j) => (
                            <li key={j} className="text-sm text-neutral-900 leading-relaxed font-medium">→ {o}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
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