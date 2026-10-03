'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion';
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
import bannerResume from '../assets/graphics/103.png';

const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="never">{children}</MotionConfig>
);

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
};
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

// ==========================================
// TRUST SECTION — matching the masonry aesthetic
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
      color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70',
      span: 'md:col-span-7', height: 'h-[560px]',
      imgClass: 'absolute -bottom-20 -right-20 w-[80%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('trust.card2_title') || (isSw ? 'Ukimiliki wa Data' : 'Data Ownership'),
      description: t('trust.card2_desc') || (isSw ? 'Linda data yako kwa usimamizi thabiti wa utambulisho na mbinu bora.' : 'Protect your data with strong identity management and best practices.'),
      image: banner2,
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70',
      span: 'md:col-span-5', height: 'h-[560px]',
      imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl',
    },
  ];

  return (
    <MotionWrapper>
      <section ref={containerRef} className="bg-white text-black font-sans w-full py-32">
        <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          {/* HEADER — centered two-tone */}
          <header className="max-w-5xl mx-auto text-center mb-24">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">
                {t('trust.title_line1') || (isSw ? 'Punguza hatari zinazo' : 'Reduce risk that')}
              </span>
              <span className="block text-[#3E9C8F]">
                {t('trust.title_line2') || (isSw ? 'imarisha usalama' : 'strengthen security')}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-10 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {t('trust.desc') || (isSw ? 'Tunakusaidia kujiandaa na matukio na kuweka majukwaa yako ya kidijitali salama dhidi ya tishio la mtandao.' : 'We help you prepare for incidents and keep your digital platforms safe from cyber threats.')}
            </motion.p>

            <motion.a
              href="#showreel"
              className="inline-flex items-center gap-4 mt-12 group"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black transition-colors duration-300 group-hover:bg-black">
                <Play className="w-4 h-4 fill-black group-hover:fill-white transition-colors duration-300" />
              </span>
              <span className="text-base md:text-lg font-medium border-b-2 border-black pb-0.5">
                {t('common.watch_showreel') || (isSw ? 'Tazama video yetu' : 'Watch our showreel')}
              </span>
            </motion.a>
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3"
          >
            {trustCards.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`group relative overflow-hidden flex flex-col justify-start p-8 md:p-10 cursor-pointer ${card.color} ${card.text} ${card.span} ${card.height}`}
              >
                <div className={`pointer-events-none transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-60 ${card.imgClass}`}>
                  <Image src={card.image} alt={card.title} className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>

                <div className="relative z-20 max-w-[85%]">
                  <h3 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] leading-[1.05]">
                    {card.title}
                  </h3>

                  <div className="overflow-hidden">
                    <div className="max-h-0 opacity-0 group-hover:max-h-[400px] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <p className={`text-2xl md:text-3xl ${card.subText} mt-5 leading-[1.3] max-w-lg`}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionWrapper>
  );
};

// ==========================================
// SERVICES SECTION — matching the masonry aesthetic
// ==========================================
export const ServicesSection = () => {
  const { language, t } = useLanguage();
  const isSw = language === 'sw';

  const serviceCards = [
    {
      title: t('services.card1_title') || (isSw ? 'Wakala wa Mazungumzo wa AI' : 'AI Chatbots'),
      description: t('services.card1_desc') || (isSw ? 'Fanya huduma kwa wateja na ya ndani kuwa otomatiki ili kuboresha muda wa majibu na tija.' : 'Automate customer and internal support to improve response times and staff productivity.'),
      image: banner3,
      color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70',
      span: 'md:col-span-7', height: 'h-[560px]',
      imgClass: 'absolute -bottom-20 -right-20 w-[80%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card2_title') || (isSw ? 'Otomatiki ya Mtiririko wa Kazi' : 'Workflow Automation'),
      description: t('services.card2_desc') || (isSw ? 'Ondoa kazi za mikono na zinazojirudia kwa kutumia suluhisho za vitendo za AI zinazokuza biashara yako.' : 'Eliminate manual and repetitive tasks with practical AI solutions that expand your business.'),
      image: banner4,
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70',
      span: 'md:col-span-5', height: 'h-[560px]',
      imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card3_title') || (isSw ? 'Wasaidizi Salama wa AI' : 'Secure AI Copilots'),
      description: t('services.card3_desc') || (isSw ? 'Badilisha nyaraka zako kuwa maarifa huku ukiweka mifumo yako salama na inayosimamiwa.' : 'Turn your documents into insights while keeping your systems secure and governed.'),
      image: banner5,
      color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/70',
      span: 'md:col-span-5', height: 'h-[520px]',
      imgClass: 'absolute -bottom-20 -right-20 w-[100%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card4_title') || (isSw ? 'Uchambuzi wa Data' : 'Data Analytics'),
      description: t('services.card4_desc') || (isSw ? 'Mifumo safi ya data na dashibodi zinazogeuza data ghafi kuwa maamuzi ya kuchukua hatua.' : 'Clean pipelines and dashboards that turn raw operational data into decisions you can act on.'),
      image: banner6,
      color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/70',
      span: 'md:col-span-7', height: 'h-[520px]',
      imgClass: 'absolute -bottom-20 -right-16 w-[80%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card5_title') || (isSw ? 'Miundombinu ya Usalama' : 'Security Infrastructures'),
      description: t('services.card5_desc') || (isSw ? 'Ulinzi wa tabaka, udhibiti wa ufikiaji, na ufuatiliaji ili kuweka data na operesheni zako salama.' : 'Layered defenses, access control, and monitoring to keep your data and operations safe.'),
      image: banner7,
      color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/70',
      span: 'md:col-span-6', height: 'h-[480px]',
      imgClass: 'absolute -bottom-20 -right-16 w-[85%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card6_title') || (isSw ? 'Ujumuishaji wa Mifumo' : 'System Integrations'),
      description: t('services.card6_desc') || (isSw ? 'Unganisha zana zako, CRM, na vyanzo vya data ili taarifa itiririke bila vikwazo.' : 'Connect your tools, CRMs, and data sources so information flows without friction.'),
      image: banner8,
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70',
      span: 'md:col-span-6', height: 'h-[480px]',
      imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card7_title') || (isSw ? 'Ubunifu wa Picha' : 'Graphics Design'),
      description: t('services.card7_desc') || (isSw ? 'Picha, nembo, na mabango ya matangazo yanayovutia wateja kwa mara ya kwanza.' : 'Eye-catching visual designs, logos, marketing banners, and brand identity packages created in simple, bold styles.'),
      image: bannerGraphics,
      color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70',
      span: 'md:col-span-6', height: 'h-[480px]',
      imgClass: 'absolute -bottom-20 -right-20 w-[85%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card8_title') || (isSw ? 'Masoko ya Kidijitali' : 'Digital Marketing'),
      description: t('services.card8_desc') || (isSw ? 'Matangazo mtandaoni na usimamizi wa mitandao ya kijamii unaoongeza wateja halisi.' : 'Targeted online advertisement campaigns, social media management, and search engine strategies that bring paying customers.'),
      image: bannerMarketing,
      color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/70',
      span: 'md:col-span-7', height: 'h-[520px]',
      imgClass: 'absolute -bottom-20 -right-20 w-[90%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('services.card9_title') || (isSw ? 'Uandishi wa Wasifu' : 'Resume Writing'),
      description: t('services.card9_desc') || (isSw ? 'Uandishi wa kitaalamu wa CV na barua za maombi zinazokupa ajira haraka.' : 'Professional executive CVs, cover letters, and LinkedIn profile optimization written in clear, persuasive language.'),
      isVideo: true,
      videoSrc: '/src/assets/graphics/alert.mp4',
      color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/70',
      span: 'md:col-span-5', height: 'h-[520px]',
      imgClass: 'absolute -bottom-10 -right-10 w-[80%] h-auto object-cover rounded-xl shadow-2xl overflow-hidden opacity-90',
    },
  ];

  return (
    <MotionWrapper>
      <section id="products" className="bg-white text-black font-sans w-full py-32">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          {/* HEADER — centered two-tone */}
          <header className="max-w-5xl mx-auto text-center mb-24">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">
                {t('services.title_line1') || (isSw ? 'Kurahisisha kwa akili zaidi' : 'Automate smarter that')}
              </span>
              <span className="block text-[#3E9C8F]">
                {t('services.title_line2') || (isSw ? 'kukuza haraka zaidi' : 'scale faster')}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-10 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {t('services.desc') || (isSw ? 'Tunatekeleza suluhisho za vitendo za AI zinazopunguza kazi zinazojirudia huku tukiweka mifumo salama na inayosimamiwa.' : 'We implement practical AI solutions that reduce repetitive work while keeping systems secure and governed.')}
            </motion.p>

            <motion.a
              href="#showreel"
              className="inline-flex items-center gap-4 mt-12 group"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black transition-colors duration-300 group-hover:bg-black">
                <Play className="w-4 h-4 fill-black group-hover:fill-white transition-colors duration-300" />
              </span>
              <span className="text-base md:text-lg font-medium border-b-2 border-black pb-0.5">
                {t('common.watch_showreel') || (isSw ? 'Tazama video yetu' : 'Watch our showreel')}
              </span>
            </motion.a>
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3"
          >
            {serviceCards.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`group relative overflow-hidden flex flex-col justify-start p-8 md:p-10 cursor-pointer ${card.color} ${card.text} ${card.span} ${card.height}`}
              >
                <div className={`pointer-events-none transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-60 ${card.imgClass}`}>
                  {card.isVideo ? (
                    <video
                      src={card.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto object-cover rounded-xl shadow-2xl"
                    />
                  ) : card.image ? (
                    <Image src={card.image} alt={card.title} className="w-full h-auto object-contain drop-shadow-2xl" />
                  ) : null}
                </div>

                <div className="relative z-20 max-w-[85%]">
                  <h3 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] leading-[1.05]">
                    {card.title}
                  </h3>

                  <div className="overflow-hidden">
                    <div className="max-h-0 opacity-0 group-hover:max-h-[400px] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <p className={`text-2xl md:text-3xl ${card.subText} mt-5 leading-[1.3] max-w-lg`}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionWrapper>
  );
};