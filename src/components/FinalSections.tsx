'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, MotionConfig, useMotionValue, useTransform, useInView } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import { useLanguage } from '../context/LanguageContext';

import banner1 from '../assets/graphics/141.png';
import banner2 from '../assets/graphics/118.png';
import banner3 from '../assets/graphics/140.png';
import banner4 from '../assets/graphics/130.png';
import banner5 from '../assets/graphics/128.png';
import secureScalable from '../assets/graphics/102.png';
import deliverSolutions from '../assets/graphics/113.png';
import Optimize from '../assets/graphics/64.png';
import security from '../assets/graphics/138.png';
import cost from '../assets/graphics/155.png';
import cloud from '../assets/graphics/139.png';
import Wingu from '../assets/graphics/156.png';

const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="never">{children}</MotionConfig>
);

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const headlineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const headlineLineVariants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  },
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

const MagneticTile = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 18, mass: 0.4 });
  const rotateX = useTransform(springY, [-40, 40], [3, -3]);
  const rotateY = useTransform(springX, [-40, 40], [-3, 3]);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.06);
    y.set((e.clientY - cy) * 0.06);
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
      style={{ x: springX, y: springY, rotateX, rotateY, transformPerspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AnimatedLabel = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  return (
    <span ref={ref} className="inline-block overflow-hidden">
      <motion.span
        initial={{ y: '110%', opacity: 0 }}
        animate={inView ? { y: '0%', opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
        className="inline-block"
      >
        {value}
      </motion.span>
    </span>
  );
};

const CinematicImage = ({ src, imgClass }: { src: StaticImageData; imgClass: string }) => (
  <>
    <motion.div
      initial={{ scale: 1.15, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as const }}
      className="absolute inset-0"
    >
      <Image src={src} alt="" fill className={imgClass} />
    </motion.div>
    <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-700 pointer-events-none" />
    <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-[#3E9C8F] transition-all duration-500 pointer-events-none" />
  </>
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

const TileRenderer = ({ tile }: { tile: Tile }) => (
  <motion.div variants={tileVariants} className={`${tile.span} ${tile.height} group relative`}>
    <MagneticTile
      className={`relative w-full h-full overflow-hidden cursor-pointer ${
        tile.type === 'text'
          ? `${tile.color} ${tile.text} flex flex-col justify-between p-6 md:p-8`
          : ''
      }`}
    >
      {tile.type === 'text' && (
        <>
          {tile.bgImage && (
            <>
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.12 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] as const }}
                className="absolute inset-0"
              >
                <Image src={tile.bgImage} alt="" fill className="object-cover" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </>
          )}

          <span className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
          <span className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

          <div className="relative z-20">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] opacity-70 mb-4">
              <AnimatedLabel value={tile.label} />
            </p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-2xl md:text-3xl lg:text-[34px] font-bold tracking-[-0.02em] leading-[1.05]"
            >
              {tile.title}
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`relative z-20 text-lg md:text-xl ${tile.subText} leading-snug mt-6`}
          >
            {tile.desc}
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute bottom-0 left-0 h-[3px] bg-current opacity-40 group-hover:w-full group-hover:opacity-90 transition-all duration-700"
          />
        </>
      )}

      {tile.type === 'image' && <CinematicImage src={tile.image} imgClass={tile.imgClass} />}
    </MagneticTile>
  </motion.div>
);

// ==========================================
// OPERATION SECTION
// ==========================================
export const OperationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const { language, t } = useLanguage();
  const isSw = language === 'sw';

  const tiles: Tile[] = [
    {
      type: 'text', label: '01',
      title: isSw ? 'Tathmini.' : 'Assess.',
      desc: isSw ? 'Kuelewa malengo, mifumo na hatari za biashara yako ili kupata njia bora ya kusonga mbele.' : 'Understand your business goals, systems, and risks to find the best way forward.',
      color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/80', bgImage: banner1, span: 'md:col-span-2', height: 'h-[340px]'
    },
    { type: 'image', image: banner1, span: 'md:col-span-3', height: 'h-[340px]', imgClass: 'w-full h-full object-cover' },
    { type: 'image', image: banner2, span: 'md:col-span-3', height: 'h-[340px]', imgClass: 'w-full h-full object-cover' },
    { type: 'image', image: banner3, span: 'md:col-span-2', height: 'h-[340px]', imgClass: 'w-full h-full object-cover' },
    { type: 'image', image: banner4, span: 'md:col-span-2', height: 'h-[340px]', imgClass: 'w-full h-full object-cover' },

    { type: 'image', image: banner5, span: 'md:col-span-4', height: 'h-[400px]', imgClass: 'w-full h-full object-cover' },
    {
      type: 'text', label: '02',
      title: isSw ? 'Sanifu.' : 'Design.',
      desc: isSw ? 'Kutengeneza usanifu salama, unaokua kulingana na mahitaji yako halisi.' : 'Create secure, scalable architectures tailored to your needs.',
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/85', bgImage: secureScalable, span: 'md:col-span-2', height: 'h-[400px]'
    },
    { type: 'image', image: secureScalable, span: 'md:col-span-2', height: 'h-[400px]', imgClass: 'w-full h-full object-cover' },
    {
      type: 'text', label: '03',
      title: isSw ? 'Tekeleza.' : 'Deliver.',
      desc: isSw ? 'Kutekeleza suluhisho katika awamu na hatua zilizowazi.' : 'Implement solutions in clear phases and milestones.',
      color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/85', bgImage: deliverSolutions, span: 'md:col-span-2', height: 'h-[400px]'
    },
    {
      type: 'text', label: '04',
      title: isSw ? 'Boresha.' : 'Optimize.',
      desc: isSw ? 'Kupima matokeo na kuendelea kuboresha kwa muendelezo.' : 'Measure impact and continuously improve.',
      color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/85', bgImage: Optimize, span: 'md:col-span-2', height: 'h-[400px]'
    },
  ];

  return (
    <MotionWrapper>
      <section ref={containerRef} className="bg-white text-black font-sans w-full py-32 relative overflow-hidden">
        <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] z-[101] origin-left blur-[6px] opacity-60"
          style={{ scaleX, background: 'linear-gradient(90deg, #3E9C8F, #E6007E)' }}
        />

        <GrainOverlay />

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 relative z-[2]">
          <header className="max-w-5xl mx-auto text-center mb-20">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={headlineVariants}
            >
              <motion.span variants={headlineLineVariants} className="block text-black">
                {t('ops.title_line1') || (isSw ? 'Jinsi tunavyofanya kazi' : 'How we operate')}
              </motion.span>
              <motion.span variants={headlineLineVariants} className="block text-[#3E9C8F] relative">
                {t('ops.title_line2') || (isSw ? 'mtawalia kukuhudumia' : 'to serve you')}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-32 bg-[#3E9C8F] origin-left"
                />
              </motion.span>
            </motion.h1>
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 [perspective:1400px]"
          >
            {tiles.map((tile, i) => (
              <TileRenderer key={i} tile={tile} />
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
  const { language, t } = useLanguage();
  const isSw = language === 'sw';

  const tiles: Tile[] = [
    {
      type: 'text', label: '01',
      title: isSw ? 'Uboreshaji wa Wingu.' : 'Cloud Modernization.',
      desc: isSw ? 'Hamisha na endesha mifumo ya wingu na mwonekano wa juu na usalama.' : 'Migrate and operate cloud systems with high visibility and security.',
      color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/85', bgImage: Wingu, span: 'md:col-span-3', height: 'h-[360px]'
    },
    { type: 'image', image: banner5, span: 'md:col-span-3', height: 'h-[360px]', imgClass: 'w-full h-full object-cover' },
    { type: 'image', image: secureScalable, span: 'md:col-span-2', height: 'h-[360px]', imgClass: 'w-full h-full object-cover' },
    {
      type: 'text', label: '02',
      title: isSw ? 'Otomatiki ya DevOps.' : 'DevOps Automation.',
      desc: isSw ? 'Matoleo ya haraka na mitiririko ya otomatiki ya CI/CD.' : 'Faster releases with automated CI/CD pipelines.',
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/85', bgImage: deliverSolutions, span: 'md:col-span-2', height: 'h-[360px]'
    },
    { type: 'image', image: deliverSolutions, span: 'md:col-span-2', height: 'h-[360px]', imgClass: 'w-full h-full object-cover' },

    { type: 'image', image: cloud, span: 'md:col-span-4', height: 'h-[400px]', imgClass: 'w-full h-full object-cover' },
    {
      type: 'text', label: '03',
      title: isSw ? 'Uboreshaji wa Gharama.' : 'Cost Optimization.',
      desc: isSw ? 'Gharama za wingu zinazotabirika na usimamizi bora.' : 'Predictable cloud costs and better governance.',
      color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/85', bgImage: cost, span: 'md:col-span-2', height: 'h-[400px]'
    },
    { type: 'image', image: cost, span: 'md:col-span-2', height: 'h-[400px]', imgClass: 'w-full h-full object-cover' },
    {
      type: 'text', label: '04',
      title: isSw ? 'Ukaguzi wa Usalama.' : 'Security Audits.',
      desc: isSw ? 'Baini hatari muhimu za usalama katika mazingira yako.' : 'Identify critical security risks in your environment.',
      color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/85', bgImage: security, span: 'md:col-span-2', height: 'h-[400px]'
    },
    { type: 'image', image: banner3, span: 'md:col-span-2', height: 'h-[400px]', imgClass: 'w-full h-full object-cover' },
  ];

  return (
    <MotionWrapper>
      <section className="bg-white text-black font-sans w-full py-32 border-t border-neutral-200 relative overflow-hidden">
        <GrainOverlay />
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 relative z-[2]">
          <header className="max-w-5xl mx-auto text-center mb-20">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={headlineVariants}
            >
              <motion.span variants={headlineLineVariants} className="block text-black">
                {t('infra.title_line1') || (isSw ? 'Miundombinu' : 'Infrastructure')}
              </motion.span>
              <motion.span variants={headlineLineVariants} className="block text-[#3E9C8F] relative">
                {t('infra.title_line2') || (isSw ? 'na operesheni' : 'and operations')}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-32 bg-[#3E9C8F] origin-left"
                />
              </motion.span>
            </motion.h1>
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 [perspective:1400px]"
          >
            {tiles.map((tile, i) => (
              <TileRenderer key={i} tile={tile} />
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
  const { language, t } = useLanguage();
  const isSw = language === 'sw';

  const tiles: Tile[] = [
    {
      type: 'text', label: '01',
      title: isSw ? 'Uzoefu wa Biashara Kubwa.' : 'Enterprise Experience.',
      desc: isSw ? 'Imejengwa na wahandisi wenye uzoefu katika mazingira ya kiwango cha juu.' : 'Built by engineers with experience in high-level environments.',
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/85', bgImage: banner4, span: 'md:col-span-3', height: 'h-[360px]'
    },
    { type: 'image', image: banner4, span: 'md:col-span-3', height: 'h-[360px]', imgClass: 'w-full h-full object-cover' },
    {
      type: 'text', label: '02',
      title: isSw ? 'Usalama wa Msingi.' : 'Embedded Security.',
      desc: isSw ? 'Usalama umejumuishwa katika kila suluhisho tunalojenga.' : 'Security is embedded in every solution.',
      color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/85', bgImage: banner2, span: 'md:col-span-2', height: 'h-[360px]'
    },
    { type: 'image', image: banner2, span: 'md:col-span-2', height: 'h-[360px]', imgClass: 'w-full h-full object-cover' },
    { type: 'image', image: banner5, span: 'md:col-span-2', height: 'h-[360px]', imgClass: 'w-full h-full object-cover' },

    { type: 'image', image: deliverSolutions, span: 'md:col-span-3', height: 'h-[400px]', imgClass: 'w-full h-full object-cover' },
    {
      type: 'text', label: '03',
      title: isSw ? 'Uzingativu wa Soko la Afrika.' : 'African Market Focus.',
      desc: isSw ? 'Suluhisho za vitendo zinazoendana na masoko ya Afrika.' : 'Practical solutions aligned to African markets.',
      color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/85', bgImage: banner3, span: 'md:col-span-3', height: 'h-[400px]'
    },
    {
      type: 'text', label: '04',
      title: isSw ? 'Uwekaji Kumbukumbu Wazi.' : 'Clear Documentation.',
      desc: isSw ? 'Upeo kamili, hatua za utekelezaji na nyaraka wazi.' : 'Full scope, milestones, and documentation.',
      color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/85', bgImage: banner1, span: 'md:col-span-2', height: 'h-[400px]'
    },
    { type: 'image', image: banner3, span: 'md:col-span-2', height: 'h-[400px]', imgClass: 'w-full h-full object-cover' },
    {
      type: 'text', label: '05',
      title: isSw ? 'Inayolenga Matokeo.' : 'Outcome Driven.',
      desc: isSw ? 'Inazingatia kutoa thamani halisi ya kibiashara.' : 'Focused on delivering real business value.',
      color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/85', bgImage: secureScalable, span: 'md:col-span-2', height: 'h-[400px]'
    },
  ];

  return (
    <MotionWrapper>
      <section className="bg-white text-black font-sans w-full py-32 border-t border-neutral-200 relative overflow-hidden">
        <GrainOverlay />
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 relative z-[2]">
          <header className="max-w-5xl mx-auto text-center mb-20">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={headlineVariants}
            >
              <motion.span variants={headlineLineVariants} className="block text-black">
                {t('why.title_line1') || (isSw ? 'Kinachotutofautisha' : 'What makes us different')}
              </motion.span>
              <motion.span variants={headlineLineVariants} className="block text-[#3E9C8F] relative">
                {t('why.title_line2') || (isSw ? 'na wengine' : 'from others')}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-32 bg-[#3E9C8F] origin-left"
                />
              </motion.span>
            </motion.h1>
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 [perspective:1400px]"
          >
            {tiles.map((tile, i) => (
              <TileRenderer key={i} tile={tile} />
            ))}
          </motion.div>
        </div>
      </section>
    </MotionWrapper>
  );
};