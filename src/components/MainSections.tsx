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
import banner5 from '../assets/automatic-ai.png';
import banner6 from '../assets/ai-applied.png';
import banner7 from '../assets/graphics/mbili.png';
import banner8 from '../assets/graphics/79.png';
import bannerGraphics from '../assets/GRAPHICS.png';
import bannerMarketing from '../assets/graphics/110.png';
import bannerResume from '../assets/RESUME.png';

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

type Palette = 'light' | 'dark' | 'navy' | 'amber';

const palette: Record<Palette, { color: string; text: string; subText: string; gradient: string }> = {
  light: {
    color: 'bg-[#E8ECEF]',
    text: 'text-black',
    subText: 'text-black/80',
    gradient: 'from-[#E8ECEF]/98 via-[#E8ECEF]/85 to-[#E8ECEF]/30',
  },
  dark: {
    color: 'bg-[#0A0A0A]',
    text: 'text-white',
    subText: 'text-white/85',
    gradient: 'from-[#0A0A0A]/98 via-[#0A0A0A]/85 to-[#0A0A0A]/30',
  },
  navy: {
    color: 'bg-[#0D2A6B]',
    text: 'text-white',
    subText: 'text-white/85',
    gradient: 'from-[#0D2A6B]/98 via-[#0D2A6B]/85 to-[#0D2A6B]/30',
  },
  amber: {
    color: 'bg-[#FFC72C]',
    text: 'text-black',
    subText: 'text-black/80',
    gradient: 'from-[#FFC72C]/98 via-[#FFC72C]/85 to-[#FFC72C]/30',
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
        className={`relative w-full h-full overflow-hidden rounded-2xl flex flex-col justify-end p-8 md:p-10 cursor-pointer ${p.color} ${p.text}`}
      >
        <div className={`absolute inset-0 z-0 bg-gradient-to-t ${p.gradient}`} />

        <div className={`absolute transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] z-[1] ${imgClass}`}>
          <Image src={image} alt={title} className="w-full h-auto object-contain drop-shadow-2xl opacity-80" />
        </div>

        <div className="relative z-10 max-w-[90%]">
          <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-[-0.02em] leading-[1.05] mb-4">
            {title}
          </h3>
          <p className={`text-lg md:text-xl lg:text-2xl ${p.subText} leading-[1.3] max-w-lg`}>
            {description}
          </p>
        </div>
      </MagneticCard>
    </motion.div>
  );
};

export const TrustSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const { language, t } = useLanguage();
  const isSw = language === 'sw';

  const trustCards = [
    {
      title: t('trust.card1_title') || (isSw ? 'Tuko Tayari Siku Zote' : "We're Always Prepared"),
      description: t('trust.card1_desc') || (isSw ? 'Kaa tayari kwa suala lolote la usalama na muda wa haraka wa majibu na mipango ya kufufua.' : 'Be ready for any security issue with faster response times and clear recovery plans, ensuring your team can act quickly and get back on track without losing valuable time.'),
      image: banner1,
      paletteKey: 'light' as Palette,
      span: 'md:col-span-7',
      height: 'h-[560px]',
      imgClass: 'bottom-0 right-0 w-[70%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('trust.card2_title') || (isSw ? 'Ukimiliki wa Data' : 'Data Ownership'),
      description: t('trust.card2_desc') || (isSw ? 'Linda data yako kwa usimamizi thabiti wa utambulisho na mbinu bora.' : 'Protect your data with strong identity management and best practice security methods, making sure only the right people can access your files while keeping everything safe from outsiders.s.'),
      image: banner2,
      paletteKey: 'dark' as Palette,
      span: 'md:col-span-5',
      height: 'h-[560px]',
      imgClass: 'bottom-0 right-0 w-[95%] h-auto object-contain drop-shadow-2xl',
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
              {t('trust.desc') || (isSw ? 'Tunakusaidia kujiandaa na matukio na kuweka majukwaa yako ya kidijitali salama dhidi ya tishio la mtandao.' : 'We help you prepare for emergencies and keep your websites and apps safe from hackers, while also guiding you through every step to ensure your entire digital presence remains fully protected and secure.')}
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
      imgClass: 'bottom-0 right-0 w-[70%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card2_title') || (isSw ? 'Otomatiki ya Mtiririko wa Kazi' : 'Workflow Automation'),
      description: t('services.card2_desc') || (isSw ? 'Ondoa kazi za mikono na zinazojirudia kwa kutumia suluhisho za vitendo za AI zinazokuza biashara yako.' : 'Eliminate manual and repetitive tasks with practical AI solutions that expand your business.'),
      image: banner4,
      paletteKey: 'dark' as Palette,
      span: 'md:col-span-5',
      height: 'h-[560px]',
      imgClass: 'bottom-0 right-0 w-[95%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card3_title') || (isSw ? 'Wasaidizi Salama wa AI' : 'Secure AI Copilots'),
      description: t('services.card3_desc') || (isSw ? 'Badilisha nyaraka zako kuwa maarifa huku ukiweka mifumo yako salama na inayosimamiwa.' : 'Turn your documents into insights while keeping your systems secure and governed.'),
      image: banner5,
      paletteKey: 'navy' as Palette,
      span: 'md:col-span-5',
      height: 'h-[520px]',
      imgClass: 'bottom-0 right-0 w-[85%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card4_title') || (isSw ? 'Uchambuzi wa Data' : 'Data Analytics'),
      description: t('services.card4_desc') || (isSw ? 'Mifumo safi ya data na dashibodi zinazogeuza data ghafi kuwa maamuzi ya kuchukua hatua.' : 'Clean pipelines and dashboards that turn raw operational data into decisions you can act on.'),
      image: banner6,
      paletteKey: 'navy' as Palette,
      span: 'md:col-span-7',
      height: 'h-[520px]',
      imgClass: 'bottom-0 right-0 w-[70%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card5_title') || (isSw ? 'Miundombinu ya Usalama' : 'Security Infrastructures'),
      description: t('services.card5_desc') || (isSw ? 'Ulinzi wa tabaka, udhibiti wa ufikiaji, na ufuatiliaji ili kuweka data na operesheni zako salama.' : 'Layered defenses, access control, and monitoring to keep your data and operations safe.'),
      image: banner7,
      paletteKey: 'amber' as Palette,
      span: 'md:col-span-6',
      height: 'h-[480px]',
      imgClass: 'bottom-0 right-0 w-[78%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card6_title') || (isSw ? 'Ujumuishaji wa Mifumo' : 'System Integrations'),
      description: t('services.card6_desc') || (isSw ? 'Unganisha zana zako, CRM, na vyanzo vya data ili taarifa itiririke bila vikwazo.' : 'Connect your tools, CRMs, and data sources so information flows without friction.'),
      image: banner8,
      paletteKey: 'dark' as Palette,
      span: 'md:col-span-6',
      height: 'h-[480px]',
      imgClass: 'bottom-0 right-0 w-[95%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card7_title') || (isSw ? 'Ubunifu wa Picha' : 'Graphics Design'),
      description: t('services.card7_desc') || (isSw ? 'Picha, nembo, na mabango ya matangazo yanayovutia wateja kwa mara ya kwanza.' : 'Eye-catching visual designs, logos, marketing banners, and brand identity packages created in simple, bold styles.'),
      image: bannerGraphics,
      paletteKey: 'light' as Palette,
      span: 'md:col-span-6',
      height: 'h-[480px]',
      imgClass: 'bottom-0 right-0 w-[78%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card8_title') || (isSw ? 'Masoko ya Kidijitali' : 'Digital Marketing'),
      description: t('services.card8_desc') || (isSw ? 'Matangazo mtandaoni na usimamizi wa mitandao ya kijamii unaoongeza wateja halisi.' : 'Targeted online advertisement campaigns, social media management, and search engine strategies that bring paying customers.'),
      image: bannerMarketing,
      paletteKey: 'navy' as Palette,
      span: 'md:col-span-7',
      height: 'h-[520px]',
      imgClass: 'bottom-0 right-0 w-[80%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card9_title') || (isSw ? 'Uandishi wa Wasifu' : 'Resume Writing'),
      description: t('services.card9_desc') || (isSw ? 'Uandishi wa kitaalamu wa CV na barua za maombi zinazokupa ajira haraka.' : 'Professional executive CVs, cover letters, and LinkedIn profile optimization written in clear, persuasive language.'),
      image: bannerResume,
      paletteKey: 'amber' as Palette,
      span: 'md:col-span-5',
      height: 'h-[520px]',
      imgClass: 'bottom-0 right-0 w-[80%] h-auto object-contain drop-shadow-2xl',
    },
  ];

  return (
    <MotionWrapper>
      <section id="products" className="bg-white text-black font-sans w-full py-28 relative overflow-hidden">
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