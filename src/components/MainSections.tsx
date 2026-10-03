'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, MotionConfig, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import banner1 from '../assets/graphics/33.png';
import banner2 from '../assets/graphics/90.png';
import banner3 from '../assets/graphics/87.png';
import banner4 from '../assets/graphics/92.png';
import banner5 from '../assets/graphics/48.png';
import banner6 from '../assets/graphics/tatu.png';
import banner7 from '../assets/graphics/mbili.png';
import banner8 from '../assets/graphics/79.png';
import bannerGraphics from '../assets/graphics/117.png';
import bannerMarketing from '../assets/graphics/110.png';
import bannerResume from '../assets/graphics/resume.png';

const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="never">{children}</MotionConfig>
);

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const headlineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const headlineLineVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const MagneticCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 150, damping: 22, mass: 0.4 });
  const rotateX = useTransform(springY, [-40, 40], [1, -1]);
  const rotateY = useTransform(springX, [-40, 40], [-1, 1]);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.03);
    y.set((e.clientY - cy) * 0.03);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY, rotateX, rotateY, transformPerspective: 1600 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AnimatedHeading = ({
  line1,
  line2,
  size = 'default',
}: {
  line1: string;
  line2: string;
  size?: 'default' | 'large';
}) => (
  <motion.h1
    className={
      size === 'large'
        ? 'text-5xl md:text-7xl lg:text-[96px] font-bold tracking-[-0.04em] leading-[0.98]'
        : 'text-4xl md:text-6xl lg:text-[72px] font-bold tracking-[-0.04em] leading-[0.98]'
    }
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={headlineVariants}
  >
    <motion.span variants={headlineLineVariants} className="block text-black">
      {line1}
    </motion.span>
    <motion.span variants={headlineLineVariants} className="block text-[#3E9C8F]">
      {line2}
    </motion.span>
  </motion.h1>
);

const GrainOverlay = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay z-[1]"
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
    }}
  />
);

const FineGrid = ({ color = 'currentColor' }: { color?: string }) => (
  <svg
    aria-hidden
    className="pointer-events-none absolute inset-0 w-full h-full z-[2] opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-700"
    preserveAspectRatio="none"
    viewBox="0 0 400 400"
  >
    <defs>
      <pattern id={`fine-${color.replace('#', '')}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="8" stroke={color} strokeWidth="0.25" />
        <line x1="0" y1="0" x2="8" y2="0" stroke={color} strokeWidth="0.25" />
      </pattern>
    </defs>
    <rect width="400" height="400" fill={`url(#fine-${color.replace('#', '')})`} />
  </svg>
);

const MacroGrid = ({ color = 'currentColor' }: { color?: string }) => (
  <svg
    aria-hidden
    className="pointer-events-none absolute inset-0 w-full h-full z-[2] opacity-[0.14] group-hover:opacity-[0.28] transition-opacity duration-700"
    preserveAspectRatio="none"
    viewBox="0 0 400 400"
  >
    <defs>
      <pattern id={`macro-${color.replace('#', '')}`} x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="64" stroke={color} strokeWidth="0.6" />
        <line x1="0" y1="0" x2="64" y2="0" stroke={color} strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="400" height="400" fill={`url(#macro-${color.replace('#', '')})`} />
  </svg>
);

const DotMatrix = ({ color = 'currentColor' }: { color?: string }) => (
  <svg
    aria-hidden
    className="pointer-events-none absolute inset-0 w-full h-full z-[2] opacity-[0.22] group-hover:opacity-[0.4] transition-opacity duration-700"
    preserveAspectRatio="none"
    viewBox="0 0 400 400"
  >
    <defs>
      <pattern id={`dot-${color.replace('#', '')}`} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
        <circle cx="6" cy="6" r="0.9" fill={color} />
      </pattern>
    </defs>
    <rect width="400" height="400" fill={`url(#dot-${color.replace('#', '')})`} />
  </svg>
);

const HolePunches = ({ color = 'currentColor' }: { color?: string }) => (
  <svg
    aria-hidden
    className="pointer-events-none absolute inset-0 w-full h-full z-[3] opacity-[0.32] group-hover:opacity-[0.6] transition-opacity duration-700"
    preserveAspectRatio="none"
    viewBox="0 0 400 400"
  >
    <defs>
      <pattern id={`punch-${color.replace('#', '')}`} x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
        <circle cx="24" cy="24" r="6" fill={color} fillOpacity="0.35" />
        <circle cx="24" cy="24" r="6" fill="none" stroke={color} strokeWidth="0.4" strokeOpacity="0.9" />
      </pattern>
    </defs>
    <rect width="400" height="400" fill={`url(#punch-${color.replace('#', '')})`} />
  </svg>
);

const WhiteScratches = () => (
  <svg
    aria-hidden
    className="pointer-events-none absolute inset-0 w-full h-full z-[5] opacity-[0.5] group-hover:opacity-[0.8] transition-opacity duration-700 mix-blend-screen"
    preserveAspectRatio="none"
    viewBox="0 0 400 400"
  >
    <motion.path
      d="M -10 40 Q 120 90 200 60 T 420 110"
      stroke="#FFFFFF"
      strokeWidth="0.7"
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] as const }}
    />
    <motion.path
      d="M 20 360 Q 140 300 240 340 T 420 300"
      stroke="#FFFFFF"
      strokeWidth="0.6"
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
    />
    <motion.path
      d="M 60 0 Q 90 160 40 250 T 80 400"
      stroke="#FFFFFF"
      strokeWidth="0.5"
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
    />
    <motion.path
      d="M 340 10 Q 320 140 380 220 T 350 400"
      stroke="#FFFFFF"
      strokeWidth="0.5"
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
    />
  </svg>
);

const CornerCrosses = ({ color = 'currentColor' }: { color?: string }) => (
  <svg
    aria-hidden
    className="pointer-events-none absolute inset-0 w-full h-full z-[3] opacity-[0.28] group-hover:opacity-[0.55] transition-opacity duration-700"
    preserveAspectRatio="none"
    viewBox="0 0 400 400"
  >
    <defs>
      <pattern id={`cross-${color.replace('#', '')}`} x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
        <line x1="32" y1="28" x2="32" y2="36" stroke={color} strokeWidth="0.5" />
        <line x1="28" y1="32" x2="36" y2="32" stroke={color} strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="400" height="400" fill={`url(#cross-${color.replace('#', '')})`} />
  </svg>
);

const Shimmer = () => (
  <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] bg-gradient-to-r from-transparent via-white/25 to-transparent z-[6]" />
);

const AccentLine = () => (
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: 56 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
    className="absolute bottom-0 left-0 h-[3px] bg-current opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-700 z-20"
  />
);

const ShowreelLink = ({ label }: { label: string }) => (
  <motion.a
    href="#showreel"
    className="inline-flex items-center gap-4 mt-12 group"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={textVariants}
    transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
  >
    <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black transition-colors duration-300 group-hover:bg-black">
      <Play className="w-4 h-4 fill-black group-hover:fill-white transition-colors duration-300" />
    </span>
    <span className="text-base md:text-lg font-medium border-b-2 border-black pb-0.5 text-black">
      {label}
    </span>
  </motion.a>
);

const SectionBackdrop = () => (
  <svg
    aria-hidden
    className="pointer-events-none absolute inset-0 w-full h-full z-[1] opacity-[0.06]"
    preserveAspectRatio="none"
    viewBox="0 0 1200 1200"
  >
    <defs>
      <pattern id="sectionFine" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="24" stroke="#000000" strokeWidth="0.35" />
        <line x1="0" y1="0" x2="24" y2="0" stroke="#000000" strokeWidth="0.35" />
      </pattern>
      <pattern id="sectionDots" x="0" y="0" width="96" height="96" patternUnits="userSpaceOnUse">
        <circle cx="48" cy="48" r="1" fill="#000000" />
      </pattern>
    </defs>
    <rect width="1200" height="1200" fill="url(#sectionFine)" />
    <rect width="1200" height="1200" fill="url(#sectionDots)" />
  </svg>
);

type Palette = 'light' | 'dark' | 'navy' | 'amber';

const palette: Record<Palette, { color: string; text: string; subText: string; gridColor: string }> = {
  light: {
    color: 'bg-[#E8ECEF]',
    text: 'text-black',
    subText: 'text-black/70',
    gridColor: '#000000',
  },
  dark: {
    color: 'bg-[#0A0A0A]',
    text: 'text-white',
    subText: 'text-white/70',
    gridColor: '#FFFFFF',
  },
  navy: {
    color: 'bg-[#0D2A6B]',
    text: 'text-white',
    subText: 'text-white/75',
    gridColor: '#FFFFFF',
  },
  amber: {
    color: 'bg-[#FFC72C]',
    text: 'text-black',
    subText: 'text-black/70',
    gridColor: '#000000',
  },
};

const ServiceCard = ({
  title,
  description,
  image,
  paletteKey,
  span,
  height,
  imgClass,
}: {
  title: string;
  description: string;
  image: any;
  paletteKey: Palette;
  span: string;
  height: string;
  imgClass: string;
}) => {
  const p = palette[paletteKey];
  return (
    <motion.div variants={cardVariants} className={`${span} ${height} group relative`}>
      <MagneticCard
        className={`relative w-full h-full overflow-hidden flex flex-col justify-start p-8 md:p-10 cursor-pointer ${p.color} ${p.text}`}
      >
        <MacroGrid color={p.gridColor} />
        <FineGrid color={p.gridColor} />
        <DotMatrix color={p.gridColor} />
        <CornerCrosses color={p.gridColor} />
        <HolePunches color={p.gridColor} />
        <WhiteScratches />
        <Shimmer />

        <div className={`pointer-events-none transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-60 z-[4] ${imgClass}`}>
          <Image src={image} alt={title} className="w-full h-auto object-contain drop-shadow-2xl" />
        </div>

        <div className="relative z-20 max-w-[85%]">
          <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-[-0.02em] leading-[1.05]">
            {title}
          </h3>

          <div className="overflow-hidden">
            <div className="max-h-0 opacity-0 group-hover:max-h-[400px] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <p className={`text-xl md:text-2xl ${p.subText} mt-5 leading-[1.3] max-w-lg`}>
                {description}
              </p>
            </div>
          </div>
        </div>

        <AccentLine />
        <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-[#3E9C8F] transition-all duration-500 pointer-events-none z-30" />
      </MagneticCard>
    </motion.div>
  );
};

// ==========================================
// TRUST SECTION
// ==========================================
export const TrustSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const { language, t } = useLanguage();
  const isSw = language === 'sw';

  const trustCards = [
    {
      title: t('trust.card1_title') || (isSw ? 'Tuko Tayari Siku Zote' : "We're Always Prepared"),
      description: t('trust.card1_desc') || (isSw ? 'Kaa tayari kwa suala lolote la usalama na muda wa haraka wa majibu na mipango ya kufufua.' : 'Be ready for any security issue with faster response times and clear recovery plans.'),
      image: banner1,
      paletteKey: 'light' as Palette,
      span: 'md:col-span-7',
      height: 'h-[560px]',
      imgClass: 'absolute -bottom-16 -right-16 w-[70%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('trust.card2_title') || (isSw ? 'Ukimiliki wa Data' : 'Data Ownership'),
      description: t('trust.card2_desc') || (isSw ? 'Linda data yako kwa usimamizi thabiti wa utambulisho na mbinu bora.' : 'Protect your data with strong identity management and best practices.'),
      image: banner2,
      paletteKey: 'dark' as Palette,
      span: 'md:col-span-5',
      height: 'h-[560px]',
      imgClass: 'absolute -bottom-20 -right-20 w-[95%] h-auto object-contain drop-shadow-2xl',
    },
  ];

  return (
    <MotionWrapper>
      <section ref={containerRef} className="bg-white text-black font-sans w-full py-28 relative overflow-hidden">
        <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] z-[101] origin-left blur-[6px] opacity-60"
          style={{ scaleX, background: 'linear-gradient(90deg, #3E9C8F, #0D2A6B)' }}
        />

        <SectionBackdrop />
        <GrainOverlay />

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 relative z-[2]">
          <header className="max-w-5xl mx-auto text-center mb-20">
            <AnimatedHeading
              size="large"
              line1={t('trust.title_line1') || (isSw ? 'Punguza hatari zinazo' : 'Reduce risk that')}
              line2={t('trust.title_line2') || (isSw ? 'imarisha usalama' : 'strengthen security')}
            />

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-10 max-w-3xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
            >
              {t('trust.desc') || (isSw ? 'Tunakusaidia kujiandaa na matukio na kuweka majukwaa yako ya kidijitali salama dhidi ya tishio la mtandao.' : 'We help you prepare for incidents and keep your digital platforms safe from cyber threats.')}
            </motion.p>

            <ShowreelLink label={t('common.watch_showreel') || (isSw ? 'Tazama video yetu' : 'Watch our showreel')} />
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 [perspective:1400px]"
          >
            {trustCards.map((card, i) => (
              <ServiceCard
                key={i}
                title={card.title}
                description={card.description}
                image={card.image}
                paletteKey={card.paletteKey}
                span={card.span}
                height={card.height}
                imgClass={card.imgClass}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </MotionWrapper>
  );
};

// ==========================================
// SERVICES SECTION
// ==========================================
export const ServicesSection = () => {
  const { language, t } = useLanguage();
  const isSw = language === 'sw';

  const serviceCards = [
    {
      title: t('services.card1_title') || (isSw ? 'Wakala wa Mazungumzo wa AI' : 'AI Chatbots'),
      description: t('services.card1_desc') || (isSw ? 'Fanya huduma kwa wateja na ya ndani kuwa otomatiki ili kuboresha muda wa majibu na tija.' : 'Automate customer and internal support to improve response times and staff productivity.'),
      image: banner3,
      paletteKey: 'light' as Palette,
      span: 'md:col-span-7',
      height: 'h-[560px]',
      imgClass: 'absolute -bottom-16 -right-16 w-[70%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card2_title') || (isSw ? 'Otomatiki ya Mtiririko wa Kazi' : 'Workflow Automation'),
      description: t('services.card2_desc') || (isSw ? 'Ondoa kazi za mikono na zinazojirudia kwa kutumia suluhisho za vitendo za AI zinazokuza biashara yako.' : 'Eliminate manual and repetitive tasks with practical AI solutions that expand your business.'),
      image: banner4,
      paletteKey: 'dark' as Palette,
      span: 'md:col-span-5',
      height: 'h-[560px]',
      imgClass: 'absolute -bottom-20 -right-20 w-[95%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card3_title') || (isSw ? 'Wasaidizi Salama wa AI' : 'Secure AI Copilots'),
      description: t('services.card3_desc') || (isSw ? 'Badilisha nyaraka zako kuwa maarifa huku ukiweka mifumo yako salama na inayosimamiwa.' : 'Turn your documents into insights while keeping your systems secure and governed.'),
      image: banner5,
      paletteKey: 'navy' as Palette,
      span: 'md:col-span-5',
      height: 'h-[520px]',
      imgClass: 'absolute -bottom-16 -right-16 w-[85%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card4_title') || (isSw ? 'Uchambuzi wa Data' : 'Data Analytics'),
      description: t('services.card4_desc') || (isSw ? 'Mifumo safi ya data na dashibodi zinazogeuza data ghafi kuwa maamuzi ya kuchukua hatua.' : 'Clean pipelines and dashboards that turn raw operational data into decisions you can act on.'),
      image: banner6,
      paletteKey: 'navy' as Palette,
      span: 'md:col-span-7',
      height: 'h-[520px]',
      imgClass: 'absolute -bottom-16 -right-14 w-[70%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card5_title') || (isSw ? 'Miundombinu ya Usalama' : 'Security Infrastructures'),
      description: t('services.card5_desc') || (isSw ? 'Ulinzi wa tabaka, udhibiti wa ufikiaji, na ufuatiliaji ili kuweka data na operesheni zako salama.' : 'Layered defenses, access control, and monitoring to keep your data and operations safe.'),
      image: banner7,
      paletteKey: 'amber' as Palette,
      span: 'md:col-span-6',
      height: 'h-[480px]',
      imgClass: 'absolute -bottom-16 -right-16 w-[78%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card6_title') || (isSw ? 'Ujumuishaji wa Mifumo' : 'System Integrations'),
      description: t('services.card6_desc') || (isSw ? 'Unganisha zana zako, CRM, na vyanzo vya data ili taarifa itiririke bila vikwazo.' : 'Connect your tools, CRMs, and data sources so information flows without friction.'),
      image: banner8,
      paletteKey: 'dark' as Palette,
      span: 'md:col-span-6',
      height: 'h-[480px]',
      imgClass: 'absolute -bottom-20 -right-20 w-[95%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card7_title') || (isSw ? 'Ubunifu wa Picha' : 'Graphics Design'),
      description: t('services.card7_desc') || (isSw ? 'Picha, nembo, na mabango ya matangazo yanayovutia wateja kwa mara ya kwanza.' : 'Eye-catching visual designs, logos, marketing banners, and brand identity packages created in simple, bold styles.'),
      image: bannerGraphics,
      paletteKey: 'light' as Palette,
      span: 'md:col-span-6',
      height: 'h-[480px]',
      imgClass: 'absolute -bottom-16 -right-16 w-[78%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card8_title') || (isSw ? 'Masoko ya Kidijitali' : 'Digital Marketing'),
      description: t('services.card8_desc') || (isSw ? 'Matangazo mtandaoni na usimamizi wa mitandao ya kijamii unaoongeza wateja halisi.' : 'Targeted online advertisement campaigns, social media management, and search engine strategies that bring paying customers.'),
      image: bannerMarketing,
      paletteKey: 'navy' as Palette,
      span: 'md:col-span-7',
      height: 'h-[520px]',
      imgClass: 'absolute -bottom-16 -right-16 w-[80%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card9_title') || (isSw ? 'Uandishi wa Wasifu' : 'Resume Writing'),
      description: t('services.card9_desc') || (isSw ? 'Uandishi wa kitaalamu wa CV na barua za maombi zinazokupa ajira haraka.' : 'Professional executive CVs, cover letters, and LinkedIn profile optimization written in clear, persuasive language.'),
      image: bannerResume,
      paletteKey: 'amber' as Palette,
      span: 'md:col-span-5',
      height: 'h-[520px]',
      imgClass: 'absolute -bottom-16 -right-16 w-[80%] h-auto object-contain drop-shadow-2xl',
    },
  ];

  return (
    <MotionWrapper>
      <section id="products" className="bg-white text-black font-sans w-full py-28 relative overflow-hidden">
        <SectionBackdrop />
        <GrainOverlay />

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 relative z-[2]">
          <header className="max-w-5xl mx-auto text-center mb-20">
            <AnimatedHeading
              size="large"
              line1={t('services.title_line1') || (isSw ? 'Kurahisisha kwa akili zaidi' : 'Automate smarter that')}
              line2={t('services.title_line2') || (isSw ? 'kukuza haraka zaidi' : 'scale faster')}
            />

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-10 max-w-3xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
            >
              {t('services.desc') || (isSw ? 'Tunatekeleza suluhisho za vitendo za AI zinazopunguza kazi zinazojirudia huku tukiweka mifumo salama na inayosimamiwa.' : 'We implement practical AI solutions that reduce repetitive work while keeping systems secure and governed.')}
            </motion.p>

            <ShowreelLink label={t('common.watch_showreel') || (isSw ? 'Tazama video yetu' : 'Watch our showreel')} />
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 [perspective:1400px]"
          >
            {serviceCards.map((card, i) => (
              <ServiceCard
                key={i}
                title={card.title}
                description={card.description}
                image={card.image}
                paletteKey={card.paletteKey}
                span={card.span}
                height={card.height}
                imgClass={card.imgClass}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </MotionWrapper>
  );
};