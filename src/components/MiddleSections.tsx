'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import mobileAppImage from '../assets/graphics/93.png';
import SystemIntegration from '../assets/graphics/91.png';
import ExecutiveDashboards  from '../assets/graphics/115.png';
import Workflow from '../assets/graphics/81.png';
import DataAnalytics from '../assets/graphics/23.png';
import customerInsightsImage from '../assets/graphics/36.png';
import SecurityInfrastructure from '../assets/graphics/54.png';
import decisionSupportSystemsImage from '../assets/graphics/106.png';
import predictiveAnalyticsImage from '../assets/graphics/97.png';
import dataGovernanceImage from '../assets/graphics/89.png';
import SecureScalable from '../assets/graphics/110.png';
import BrandCredibility from '../assets/graphics/77.png';

import heroVideo from '../assets/graphics/alert.mp4';

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
// SECTION 0 — Web Design & Development ("INSPIRING ENGAGING")
// ==========================================
export const WebServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();
  const isSw = language === 'sw';

  const webCards = [
    {
      title: t('web.visual_design_title') || (isSw ? 'Ubunifu wa Muonekano' : 'Visual Design'),
      description: t('web.visual_design_desc') || 'We design templates that are appealing and creative and best represent your brand, impress your customers and provide easy site experience.',
      image: mobileAppImage,
      color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/80',
      span: 'md:col-span-7', height: 'h-[520px]',
      imgClass: 'absolute -bottom-20 -right-20 w-[80%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('web.landing_pages_title') || (isSw ? 'Kurasa za Kutua' : 'Landing Pages'),
      description: t('web.landing_pages_desc') || 'Watch the magic happen when our digital team crafts landing pages for specific campaigns/ offers and make it a success with convincing call to action options.',
      image: SystemIntegration,
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/80',
      span: 'md:col-span-5', height: 'h-[520px]',
      imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('web.development_title') || (isSw ? 'Ujenzi wa Tovuti' : 'Development'),
      description: t('web.development_desc') || 'We design and integrate your web design with smart plugins and capabilities that are compatible across browsers. We focus on providing a flawless user experience.',
      image: Workflow,
      color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/80',
      span: 'md:col-span-5', height: 'h-[520px]',
      imgClass: 'absolute -bottom-20 -right-20 w-[100%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('web.redesign_title') || (isSw ? 'Huduma za Kuboresha Upya' : 'Redesign Services'),
      description: t('web.redesign_desc') || 'Did you know a poor web design can impact your leads and sales? From an outdated website move to a trendy, visually pleasing one that helps boost your sales conversions.',
      image: ExecutiveDashboards,
      color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/80',
      span: 'md:col-span-7', height: 'h-[520px]',
      imgClass: 'absolute -bottom-20 -right-16 w-[80%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('web.cms_title') || (isSw ? 'Ubunifu wa CMS' : 'CMS Design'),
      description: t('web.cms_desc') || 'Depending on your requirement, we enable content management system(CMS) that work best for your objectives.',
      image: SecurityInfrastructure,
      color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/80',
      span: 'md:col-span-6', height: 'h-[480px]',
      imgClass: 'absolute -bottom-20 -right-16 w-[85%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: t('web.maintenance_title') || (isSw ? 'Huduma za Matengenezo' : 'Maintenance Services'),
      description: t('web.maintenance_desc') || 'Bug fixing, troubleshooting, site monitoring, security updates, installation of version upgrades, we can help you keep your online presence up-to-date.',
      image: BrandCredibility,
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/80',
      span: 'md:col-span-6', height: 'h-[480px]',
      imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl',
    },
  ];

  return (
    <MotionWrapper>
      <section ref={containerRef} className="bg-white text-black font-sans w-full pt-20 pb-32">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          <header className="max-w-5xl mx-auto text-center mb-20">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">
                {t('web.title_line1') || 'INSPIRING'}
              </span>
              <span className="block text-[#3E9C8F]">
                {t('web.title_line2') || 'ENGAGING'}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-10 max-w-3xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {t('web.desc') || 'We craft visually appealing and high-converting websites and landing pages tailored for your brand.'}
            </motion.p>
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3"
          >
            {webCards.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className={`group relative overflow-hidden flex flex-col justify-start p-8 md:p-10 cursor-pointer ${card.color} ${card.text} ${card.span} ${card.height}`}
              >
                <div className={`pointer-events-none transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-60 ${card.imgClass}`}>
                  <Image src={card.image} alt={card.title} className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>

                <div className="relative z-20 max-w-[85%]">
                  <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-[-0.02em] leading-[1.05]">
                    {card.title}
                  </h3>

                  <div className="overflow-hidden">
                    <div className="max-h-0 opacity-0 group-hover:max-h-[400px] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <p className={`text-xl md:text-2xl ${card.subText} mt-5 leading-[1.3] max-w-lg`}>
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
// SECTION 1 — Communication
// ==========================================
export const CommunicationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const { language, t } = useLanguage();
  const isSw = language === 'sw';

  const cards = [
    {
      isVideo: true,
      title: isSw ? 'Wakala wa Mazungumzo wa AI' : 'AI Chatbots',
      description: isSw ? 'Wakala wenye akili wanaochuja fursa, kujibu maswali ya wateja, na kupanga miadi saa 24/7.' : 'Never miss a customer again. Our AI chatbots greet every visitor the moment they arrive, answer questions clearly, qualify leads, and follow up while interest is still high. When someone is ready to buy, book, or speak to a person, your team is notified right away so nothing slips through. Every message gets a reply, at every hour, and your business always feels present and attentive.',
      color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70',
      span: 'md:col-span-7', height: 'h-[560px]',
    },
    {
      title: isSw ? 'Ujenzi wa Mifumo' : 'System Development',
      description: isSw ? 'Programu maalum zilizojengwa tangu mwanzo hadi mwisho kulingana na mtiririko wako halisi wa kazi.' : 'Custom software built end to end, from architecture to deployment, around your exact workflow.',
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70',
      image: mobileAppImage,
      span: 'md:col-span-5', height: 'h-[560px]',
      imgClass: 'absolute -bottom-20 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: isSw ? 'Uchambuzi wa Data' : 'Data Analytics',
      description: isSw ? 'Mifumo safi ya data na dashibodi zinazogeuza data za operesheni kuwa maamuzi ya kuchukua hatua.' : 'Clean pipelines and dashboards that turn raw operational data into decisions you can actually act on.',
      color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/70',
      image: DataAnalytics,
      span: 'md:col-span-5', height: 'h-[520px]',
      imgClass: 'absolute -bottom-24 -right-20 w-[100%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: isSw ? 'Otomatiki ya Mtiririko wa Kazi' : 'Workflow Automation',
      description: isSw ? 'Ondoa hatua zinazojirudia za mikono katika biashara yako na uache mifumo ifanye kazi zake.' : 'Remove repetitive manual steps across your business and let systems do the work they were meant to.',
      color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/70',
      image: Workflow,
      span: 'md:col-span-7', height: 'h-[520px]',
      imgClass: 'absolute -bottom-20 -right-16 w-[80%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: isSw ? 'Miundombinu ya Usalama' : 'Security Infrastructures',
      description: isSw ? 'Ulinzi wa tabaka, udhibiti wa ufikiaji, na ufuatiliaji ili kuweka data na operesheni zako salama.' : 'Layered defenses, access control, and monitoring to keep your data and operations safe.',
      color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/70',
      image: SecurityInfrastructure,
      span: 'md:col-span-6', height: 'h-[480px]',
      imgClass: 'absolute -bottom-20 -right-16 w-[85%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: isSw ? 'Ujumuishaji wa Mifumo' : 'System Integrations',
      description: isSw ? 'Unganisha zana zako, CRM, na vyanzo vya data ili taarifa itiririke bila vikwazo.' : 'Connect your tools, CRMs, and data sources so information flows where it needs to without friction.',
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70',
      image: SystemIntegration,
      span: 'md:col-span-6', height: 'h-[480px]',
      imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl',
    },
  ];

  return (
    <MotionWrapper>
      <section ref={containerRef} className="bg-white text-black font-sans w-full pt-32 pb-32 scroll-smooth">
        <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          {/* HEADER — centered */}
          <header className="max-w-5xl mx-auto text-center mb-24">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">
                {t('comm.title_line1') || (isSw ? 'Kurahisisha kazi zinazo' : 'Automate work that')}
              </span>
              <span className="block text-[#3E9C8F]">
                {t('comm.title_line2') || (isSw ? 'sisimua na kuhamasisha' : 'excite and inspire')}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-10 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {t('comm.desc') || (isSw ? 'Ungana na wateja wako na kurahisisha mitiririko ya kazi. Tunakusaidia kutatua kazi za mikono na zinazojirudia huku tukiboresha muda wa majibu na tija ya wafanyakazi.' : 'Connect with your customers and automate workflows. We help you solve manual and repetitive tasks while improving response times and staff productivity.')}
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
            {cards.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                id={card.isVideo ? 'showreel' : undefined}
                className={`group relative overflow-hidden flex flex-col justify-start p-8 md:p-10 cursor-pointer scroll-mt-32 ${card.color} ${card.text} ${card.span} ${card.height}`}
              >
                {card.isVideo ? (
                  <video
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-[1.15] transition-opacity duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-60"
                  />
                ) : (
                  <div className={`pointer-events-none transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-60 ${card.imgClass}`}>
                    <Image src={card.image!} alt={card.title} className="w-full h-auto object-contain drop-shadow-2xl" />
                  </div>
                )}

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
// SECTION 2 — Application
// ==========================================
export const ApplicationSection = () => {
  const { language, t } = useLanguage();
  const isSw = language === 'sw';

  const cards = [
    {
      title: isSw ? 'Majukwaa salama na yanayokua ya kidijitali.' : 'Secure, scalable digital platforms.',
      description: isSw ? 'Saidia ukuaji na uboreshe uzoefu wa mtumiaji kwenye vifaa vyote. Imejengwa kwa ajili ya utendaji bora na udumu.' : 'Support growth and improve user experience across all devices. Built for performance and longevity.',
      image: SecureScalable,
      bg: 'bg-[#E8ECEF]', text: 'text-black', sub: 'text-black/70',
      imgClass: 'absolute -bottom-32 -right-32 w-[80%] md:w-[70%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: isSw ? 'Imarisha uaminifu wa chapa yako.' : 'Improve brand credibility.',
      description: isSw ? 'Mifumo iliyounganishwa ya biashara na mbinu salama za ujenzi kwa ajili ya uwepo thabiti wa kidijitali.' : 'Integrated business systems and secure development practices for a stronger digital presence.',
      image: BrandCredibility,
      bg: 'bg-[#0A0A0A]', text: 'text-white', sub: 'text-white/70',
      imgClass: 'absolute -bottom-32 -right-32 w-[85%] md:w-[75%] h-auto object-contain drop-shadow-2xl',
    },
  ];

  return (
    <MotionWrapper>
      <section className="bg-white text-black font-sans w-full py-32">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          <header className="max-w-5xl mx-auto text-center mb-24">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">
                {t('app.title_line1') || (isSw ? 'Imejengwa kwa ajili ya ukuaji' : 'Built for growth that')}
              </span>
              <span className="block text-[#3E9C8F]">
                {t('app.title_line2') || (isSw ? 'iliyoundwa kwa ajili ya watu' : 'designed for people')}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-10 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {t('app.desc') || (isSw ? 'Tunaingiza na kutengeneza wavuti na programu za kisasa ambazo ni salama, za kuaminika, na zinazoenda na mahitaji halisi ya biashara.' : 'We design and develop modern websites and applications that are secure, reliable, and aligned with real business needs.')}
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

          <div className="flex flex-col gap-3">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                className={`group relative overflow-hidden ${card.bg} ${card.text} min-h-[640px] lg:min-h-[820px] p-8 md:p-14 flex flex-col justify-start cursor-pointer`}
              >
                <div className={`pointer-events-none transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-60 ${card.imgClass}`}>
                  <Image src={card.image} alt={card.title} className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>

                <div className="relative z-20 max-w-3xl">
                  <h3 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-[-0.03em] leading-[1.02]">{card.title}</h3>

                  <div className="overflow-hidden">
                    <div className="max-h-0 opacity-0 group-hover:max-h-[400px] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <p className={`text-3xl md:text-4xl ${card.sub} mt-6 leading-[1.25] max-w-2xl`}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
};

// ==========================================
// SECTION 3 — Data Intelligence
// ==========================================
export const DataIntelligenceSection = () => {
  const { language, t } = useLanguage();
  const isSw = language === 'sw';

  const features = [
    {
      title: isSw ? 'Dashibodi za Watendaji' : 'Executive Dashboards',
      description: isSw ? 'Taswira moja na wazi ya takwimu zinazoongoza maamuzi, kutoka mapato hadi operesheni, zikihuishwa mubashara.' : 'A single, clear view of the metrics that drive decisions, from revenue to operations, updated live.',
      image: ExecutiveDashboards, color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70', span: 'md:col-span-7', height: 'h-[560px]', imgClass: 'absolute -bottom-20 -right-20 w-[80%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'Uchambuzi wa Kutabiri' : 'Predictive Analytics',
      description: isSw ? 'Tabiri mahitaji, mabadiliko ya wateja na mapato kwa mifumo iliyofunzwa kwenye data zako za kihistoria.' : 'Forecast demand, churn, and revenue with models trained on your own historical data.',
      image: predictiveAnalyticsImage, color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70', span: 'md:col-span-5', height: 'h-[560px]', imgClass: 'absolute -bottom-24 -right-24 w-[105%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'Mifumo ya Njia za Data' : 'Data Pipelines',
      description: isSw ? 'Mtiririko wa otomatiki unaokusanya, kusafisha na kuunganisha data kutoka kila mfumo unautumia.' : 'Automated flows that collect, clean, and centralize data from every system you use.',
      image: DataAnalytics, color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/70', span: 'md:col-span-5', height: 'h-[520px]', imgClass: 'absolute -bottom-20 -right-20 w-[100%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'Chanzo Moja cha Ukweli' : 'Single Source of Truth',
      description: isSw ? 'Seti moja ya data inayokubaliwa na wote, inayoondoa machafuko ya majedwali na ripoti zinazokinzana.' : 'One trusted dataset everyone agrees on, ending spreadsheet chaos and conflicting reports.',
      image: customerInsightsImage, color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/70', span: 'md:col-span-7', height: 'h-[520px]', imgClass: 'absolute -bottom-20 -right-16 w-[80%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'Usimamizi wa Data' : 'Data Governance',
      description: isSw ? 'Sera, mtiririko na udhibiti wa ufikiaji ili data yako ibaki sahihi, inayofuata sheria na inayokagulika.' : 'Policies, lineage, and access controls so your data stays accurate, compliant, and auditable.',
      image: dataGovernanceImage, color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/70', span: 'md:col-span-6', height: 'h-[480px]', imgClass: 'absolute -bottom-20 -right-16 w-[85%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'Ufahamu wa Utabiri' : 'Forecasting Insights',
      description: isSw ? 'Mipango ya matukio na mifumo ya kuangalia mbele kusaidia uongozi kujiandaa na kile kinachofuata.' : 'Scenario planning and forward-looking models to help leadership prepare for what is next.',
      image: decisionSupportSystemsImage, color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70', span: 'md:col-span-6', height: 'h-[480px]', imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl'
    },
  ];

  return (
    <MotionWrapper>
      <section className="bg-white text-black font-sans w-full py-32">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          <header className="max-w-5xl mx-auto text-center mb-24">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">
                {t('data.title_line1') || (isSw ? 'Geuza data kuwa maamuzi yanayo' : 'Turn data into decisions that')}
              </span>
              <span className="block text-[#3E9C8F]">
                {t('data.title_line2') || (isSw ? 'leta ufahamu wa kuchukua hatua' : 'get actionable insights')}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-10 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {t('data.desc') || (isSw ? 'Tunajenga mifumo ya data ambayo uongozi unaweza kuamini, kutoka kwa mtiririko safi wa data hadi dashibodi za watendaji.' : 'We build data systems leadership can trust, from clean pipelines to executive dashboards.')}
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
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className={`group relative overflow-hidden flex flex-col justify-start p-8 md:p-10 cursor-pointer ${feature.color} ${feature.text} ${feature.span} ${feature.height}`}
              >
                <div className={`pointer-events-none transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-60 ${feature.imgClass}`}>
                  <Image src={feature.image} alt={feature.title} className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>

                <div className="relative z-20 max-w-[85%]">
                  <h3 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] leading-[1.05]">
                    {feature.title}
                  </h3>

                  <div className="overflow-hidden">
                    <div className="max-h-0 opacity-0 group-hover:max-h-[400px] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <p className={`text-2xl md:text-3xl ${feature.subText} mt-5 leading-[1.3] max-w-lg`}>
                        {feature.description}
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