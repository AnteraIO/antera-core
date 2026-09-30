'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.products': 'Products',
    'nav.solutions': 'Solutions',
    'nav.data_analytics': 'Data Analytics',
    'nav.models': 'Models',
    'nav.blog': 'Blog',
    'nav.customers': 'Customers',
    'nav.company': 'Company',
    'nav.contact_sales': 'Contact sales',
    'nav.start_building': 'Start building',
    'nav.banner': 'We Build AI Solutions and Intelligent Systems for Tanzanian and African Markets | Call Us: +255 774 174 921 | WhatsApp: +255 760 984 921',
    'nav.get_started': 'Get Started',
    'nav.latest_updates': 'Latest Updates',
    'nav.view_blog': 'View Blog',
    'nav.featured_post': 'Featured Post',
    'nav.read_more': 'Read More',
    'nav.our_platforms': 'Our Platforms',
    'nav.view_all_products': 'View All Products',
    'nav.ai_solutions': 'AI Solutions',
    'nav.enterprise_ai_desc': 'Enterprise AI & Digital Transformation',
    'nav.about_us': 'About Us',
    'nav.company_desc': 'Enterprise Webs, Mobile Apps, Organization Sites and Digital Platform Development for the modern African market.',
    'nav.contact_socials': 'Contact & Socials',
    'nav.follow_us': 'Follow us:',
    'nav.office_desc': 'Enterprise Webs, Mobile Apps, Organization Sites and Digital Platform Development',
    'nav.search_desc': 'Modern Data Science and Model Implementations for Tanzanian Markets',

    // Hero Section
    'hero.title_part1': 'Grow Your Business.',
    'hero.title_part2': 'With Smart Technology.',
    'hero.description': 'We help organizations build tailored Systems, Webapps, Mobile Apps, Chatbots, and AI systems to solve the world’s hardest problems.',
    'hero.main_title_line1': 'We Build Sovereign AI Systems',
    'hero.main_title_line2': 'for Every Decision',
    'hero.see_all': 'SEE ALL',

    // Common
    'common.watch_showreel': 'Watch our showreel',
    'common.learn_more': 'Learn More',

    // Partners Section
    'partners.side_tag': 'Tanzanian Best Software Engineers.',
    'partners.title_line1': 'Engineered with the best',
    'partners.title_line2': 'powered by the best',
    'partners.desc': 'We are leveraging world-class infrastructure to deliver scalable, high-performance solutions.',
    'partners.request_demo': 'Request a Demo',
    'partners.start_building': 'Start Building',

    // Trust Section
    'trust.title_line1': 'Reduce risk that',
    'trust.title_line2': 'strengthen security',
    'trust.desc': 'We help you prepare for incidents and keep your digital platforms safe from cyber threats.',
    'trust.card1_title': "We're Always Prepared",
    'trust.card1_desc': 'Be ready for any security issue with faster response times and clear recovery plans.',
    'trust.card2_title': 'Data Ownership',
    'trust.card2_desc': 'Protect your data with strong identity management and best practices.',

    // Services Section
    'services.title_line1': 'Automate smarter that',
    'services.title_line2': 'scale faster',
    'services.desc': 'We implement practical AI solutions that reduce repetitive work while keeping systems secure and governed.',
    'services.card1_title': 'AI Chatbots',
    'services.card1_desc': 'Automate customer and internal support to improve response times and staff productivity.',
    'services.card2_title': 'Workflow Automation',
    'services.card2_desc': 'Eliminate manual and repetitive tasks with practical AI solutions that expand your business.',
    'services.card3_title': 'Secure AI Copilots',
    'services.card3_desc': 'Turn your documents into insights while keeping your systems secure and governed.',
    'services.card4_title': 'Data Analytics',
    'services.card4_desc': 'Clean pipelines and dashboards that turn raw operational data into decisions you can act on.',
    'services.card5_title': 'Security Infrastructures',
    'services.card5_desc': 'Layered defenses, access control, and monitoring to keep your data and operations safe.',
    'services.card6_title': 'System Integrations',
    'services.card6_desc': 'Connect your tools, CRMs, and data sources so information flows without friction.',

    // Communication Section
    'comm.title_line1': 'Automate work that',
    'comm.title_line2': 'excite and inspire',
    'comm.desc': 'Connect with your customers and automate workflows. We help you solve manual and repetitive tasks while improving response times and staff productivity.',

    // Application Section
    'app.title_line1': 'Built for growth that',
    'app.title_line2': 'designed for people',
    'app.desc': 'We design and develop modern websites and applications that are secure, reliable, and aligned with real business needs.',

    // Data Intelligence Section
    'data.title_line1': 'Turn data into decisions that',
    'data.title_line2': 'get actionable insights',
    'data.desc': 'We build data systems leadership can trust, from clean pipelines to executive dashboards.',

    // Operations Section
    'ops.title_line1': 'How we operate',
    'ops.title_line2': 'to serve you',

    // Infrastructure Section
    'infra.title_line1': 'Infrastructure',
    'infra.title_line2': 'and operations',

    // Why Section
    'why.title_line1': 'What makes us different',
    'why.title_line2': 'from others',

    // Pages Titles & Descriptions
    'page.products.title': 'Products',
    'page.products.desc': 'Practical AI and automation tools for modern business.',
    'page.solutions.title': 'Solutions',
    'page.solutions.desc': 'Practical technology solutions tailored to your real business needs.',
    'page.blog.title': 'Insights',
    'page.blog.desc': 'Latest news and simple guides on AI and automation.',
    'blog.latest_briefings': 'Latest Articles',
    'blog.read_all': 'Read all news',
    'blog.subscribe': 'Subscribe to our newsletter',
    'blog.subscribe_button': 'Join',
    'page.customers.title': 'Customers',
    'page.customers.desc': 'See how we help organizations automate and grow.',
    'page.company.title': 'Company',
    'page.company.desc': 'Our mission to enable African organizations through intelligent technology.',
    'page.models.title': 'Data & Insights',
    'page.models.desc': 'Turn your business data into clear plans for smarter decisions.',
    'company.founded': 'Founded',
    'company.founded_value': '2026',
    'company.headquarters': 'Headquarters',
    'company.headquarters_value': 'Dar es Salaam, Tanzania',
    'company.offices': 'Offices',
    'company.offices_value': 'Dar es Salaam • Dodoma',

    // Footer
    'footer.get_in_touch': 'Get in Touch.',
    'footer.get_in_touch_desc': "Ready to transform your business? Reach out and let's build something extraordinary together.",
    'footer.whatsapp_support': 'WhatsApp Support',
    'footer.rights_reserved': 'All rights reserved.',
    'footer.impact': 'Impact',
    'footer.capabilities': 'Capabilities',

    // Dropdowns
    'dropdown.featured': 'Featured',
    'dropdown.categories': 'Categories',
    'dropdown.products.featured_title': 'Featured Products',
    'dropdown.products.title1': 'Bonga APIs',
    'dropdown.products.desc1': 'High-throughput APIs for SMS and USSD.',
    'dropdown.products.title2': 'AI Model Orchestration',
    'dropdown.products.desc2': 'Orchestrating existing AI models within secure data platforms.',
    'dropdown.products.read_all': 'View all products',
    'dropdown.products.cat_title': 'Product Suite',
    'dropdown.products.cat1': 'Custom SDKs',
    'dropdown.products.cat2': 'Applied AI',
    'dropdown.products.cat3': 'Cloud Orchestration',
    'dropdown.products.cat4': 'Infrastructure Audit',
    'dropdown.solutions.featured_title': 'Featured Solutions',
    'dropdown.solutions.title1': 'Practical AI & Automation',
    'dropdown.solutions.desc1': 'Reduce repetitive work with tailored AI copilots.',
    'dropdown.solutions.title2': 'Modern Infrastructure',
    'dropdown.solutions.desc2': 'DevOps and cloud migration for maximum uptime.',
    'dropdown.solutions.read_all': 'Explore solutions',
    'dropdown.solutions.cat_title': 'Industries & Needs',
    'dropdown.solutions.cat1': 'Digital Platforms',
    'dropdown.solutions.cat2': 'Security & Risk',
    'dropdown.solutions.cat3': 'Data & Analytics',
    'dropdown.solutions.cat4': 'Managed IT Support',
    'dropdown.company.featured_title': 'About Antera',
    'dropdown.company.title1': 'Our Mission',
    'dropdown.company.desc1': 'Enabling African organizations with intelligent technology.',
    'dropdown.company.title2': 'Our Expertise',
    'dropdown.company.desc2': 'Expert engineering across cloud, AI, and security.',
    'dropdown.company.read_all': 'About us',
    'dropdown.company.cat_title': 'Explore Company',
    'dropdown.company.cat1': 'How We Work',
    'dropdown.company.cat2': 'Values',
    'dropdown.company.cat3': 'Join Us'
  },
  sw: {
    // Navigation
    'nav.products': 'Bidhaa',
    'nav.solutions': 'Suluhisho',
    'nav.data_analytics': 'Uchambuzi wa Data',
    'nav.models': 'Mifumo',
    'nav.blog': 'Blogu',
    'nav.customers': 'Wateja',
    'nav.company': 'Kampuni',
    'nav.contact_sales': 'Wasiliana na mauzo',
    'nav.start_building': 'Anza kujenga',
    'nav.banner': 'Tunajenga Suluhisho za AI na Mifumo ya Akili Bandia kwa Masoko ya Tanzania na Afrika | Tupigie: +255 774 174 921 | WhatsApp: +255 760 984 921',
    'nav.get_started': 'Anza Sasa',
    'nav.latest_updates': 'Taarifa Mpya',
    'nav.view_blog': 'Tazama Blogu',
    'nav.featured_post': 'Makala Iliyochaguliwa',
    'nav.read_more': 'Soma Zaidi',
    'nav.our_platforms': 'Majukwaa Yetu',
    'nav.view_all_products': 'Tazama Bidhaa Zote',
    'nav.ai_solutions': 'Suluhisho za AI',
    'nav.enterprise_ai_desc': 'AI ya Biashara & Mabadiliko ya Kidijitali',
    'nav.about_us': 'Kuhusu Sisi',
    'nav.company_desc': 'Uundaji wa Wavuti za Biashara, Programu za Simu, Tovuti za Mashirika na Majukwaa ya Kidijitali kwa soko la kisasa la Afrika.',
    'nav.contact_socials': 'Wasiliana Nasi & Mitandao',
    'nav.follow_us': 'Tufuate:',
    'nav.office_desc': 'Uundaji wa Wavuti za Biashara, Programu za Simu, Tovuti za Mashirika na Majukwaa ya Kidijitali',
    'nav.search_desc': 'Sayansi ya Data ya Kisasa na Utokezaji wa Mifumo kwa Masoko ya Tanzania',

    // Hero Section
    'hero.title_part1': 'Rahisisha Kazi.',
    'hero.title_part2': 'Kua Haraka.',
    'hero.description': 'Tunatumia mifumo ya kisasa ya AI kurahisisha kazi zinazojirudia na kukuza biashara yako kwa usalama.',
    'hero.main_title_line1': 'Tunajenga Mifumo Huru ya AI',
    'hero.main_title_line2': 'kwa Kila Maamuzi',
    'hero.see_all': 'TAZAMA ZOTE',

    // Common
    'common.watch_showreel': 'Tazama video yetu',
    'common.learn_more': 'Jifunze Zaidi',

    // Partners Section
    'partners.side_tag': 'Mawazo Bora ya Waundaji wa Programu Tanzania.',
    'partners.title_line1': 'Imeundwa na walio bora',
    'partners.title_line2': 'inaendeshwa na walio bora',
    'partners.desc': 'Tunatumia miundombinu ya kiwango cha kimataifa kutoa suluhisho zinazoweza kukua na zenye utendaji wa juu.',
    'partners.request_demo': 'Omba Onyesho',
    'partners.start_building': 'Anza Kujenga',

    // Trust Section
    'trust.title_line1': 'Punguza hatari zinazo',
    'trust.title_line2': 'imarisha usalama',
    'trust.desc': 'Tunakusaidia kujiandaa na matukio na kuweka majukwaa yako ya kidijitali salama dhidi ya tishio la mtandao.',
    'trust.card1_title': 'Tuko Tayari Siku Zote',
    'trust.card1_desc': 'Kaa tayari kwa suala lolote la usalama na muda wa haraka wa majibu na mipango ya kufufua.',
    'trust.card2_title': 'Ukimiliki wa Data',
    'trust.card2_desc': 'Linda data yako kwa usimamizi thabiti wa utambulisho na mbinu bora.',

    // Services Section
    'services.title_line1': 'Kurahisisha kwa akili zaidi',
    'services.title_line2': 'kukuza haraka zaidi',
    'services.desc': 'Tunatekeleza suluhisho za vitendo za AI zinazopunguza kazi zinazojirudia huku tukiweka mifumo salama na inayosimamiwa.',
    'services.card1_title': 'Wakala wa Mazungumzo wa AI',
    'services.card1_desc': 'Fanya huduma kwa wateja na ya ndani kuwa otomatiki ili kuboresha muda wa majibu na tija.',
    'services.card2_title': 'Otomatiki ya Mtiririko wa Kazi',
    'services.card2_desc': 'Ondoa kazi za mikono na zinazojirudia kwa kutumia suluhisho za vitendo za AI zinazokuza biashara yako.',
    'services.card3_title': 'Wasaidizi Salama wa AI',
    'services.card3_desc': 'Badilisha nyaraka zako kuwa maarifa huku ukiweka mifumo yako salama na inayosimamiwa.',
    'services.card4_title': 'Uchambuzi wa Data',
    'services.card4_desc': 'Mifumo safi ya data na dashibodi zinazogeuza data ghafi kuwa maamuzi ya kuchukua hatua.',
    'services.card5_title': 'Miundombinu ya Usalama',
    'services.card5_desc': 'Ulinzi wa tabaka, udhibiti wa ufikiaji, na ufuatiliaji ili kuweka data na operesheni zako salama.',
    'services.card6_title': 'Ujumuishaji wa Mifumo',
    'services.card6_desc': 'Unganisha zana zako, CRM, na vyanzo vya data ili taarifa itiririke bila vikwazo.',

    // Communication Section
    'comm.title_line1': 'Kurahisisha kazi zinazo',
    'comm.title_line2': 'sisimua na kuhamasisha',
    'comm.desc': 'Ungana na wateja wako na kurahisisha mitiririko ya kazi. Tunakusaidia kutatua kazi za mikono na zinazojirudia huku tukiboresha muda wa majibu na tija ya wafanyakazi.',

    // Application Section
    'app.title_line1': 'Imejengwa kwa ajili ya ukuaji',
    'app.title_line2': 'iliyoundwa kwa ajili ya watu',
    'app.desc': 'Tunaingiza na kutengeneza wavuti na programu za kisasa ambazo ni salama, za kuaminika, na zinazoenda na mahitaji halisi ya biashara.',

    // Data Intelligence Section
    'data.title_line1': 'Geuza data kuwa maamuzi yanayo',
    'data.title_line2': 'leta ufahamu wa kuchukua hatua',
    'data.desc': 'Tunajenga mifumo ya data ambayo uongozi unaweza kuamini, kutoka kwa mtiririko safi wa data hadi dashibodi za watendaji.',

    // Operations Section
    'ops.title_line1': 'Jinsi tunavyofanya kazi',
    'ops.title_line2': 'mtawalia kukuhudumia',

    // Infrastructure Section
    'infra.title_line1': 'Miundombinu',
    'infra.title_line2': 'na operesheni',

    // Why Section
    'why.title_line1': 'Kinachotutofautisha',
    'why.title_line2': 'na wengine',

    // Pages Titles & Descriptions
    'page.products.title': 'Bidhaa',
    'page.products.desc': 'Zana rahisi za AI na mifumo ya kisasa kwa biashara.',
    'page.solutions.title': 'Suluhisho',
    'page.solutions.desc': 'Mifumo ya teknolojia inayolenga mahitaji halisi ya biashara yako.',
    'page.blog.title': 'Makala',
    'page.blog.desc': 'Habari za hivi karibuni na miongozo rahisi kuhusu AI na teknolojia.',
    'blog.latest_briefings': 'Makala ya Karibuni',
    'blog.read_all': 'Soma habari zote',
    'blog.subscribe': 'Jiunge na jarida letu',
    'blog.subscribe_button': 'Jiunge',
    'page.customers.title': 'Wateja',
    'page.customers.desc': 'Ona jinsi tunavyosaidia mashirika kurahisisha kazi na kukua.',
    'page.company.title': 'Kampuni',
    'page.company.desc': 'Lengo letu ni kusaidia mashirika ya Afrika kupitia teknolojia ya kisasa.',
    'page.models.title': 'Akili ya Data',
    'page.models.desc': 'Badilisha data za biashara yako kuwa mipango madhubuti ya maamuzi bora.',
    'company.founded': 'Ilianzishwa',
    'company.founded_value': '2026',
    'company.headquarters': 'Makao Makuu',
    'company.headquarters_value': 'Dar es Salaam, Tanzania',
    'company.offices': 'Ofisi',
    'company.offices_value': 'Dar es Salaam • Dodoma',

    // Footer
    'footer.get_in_touch': 'Wasiliana Nasi.',
    'footer.get_in_touch_desc': 'Uko tayari kubadilisha biashara yako? Wasiliana nasi na tujenge kitu cha kushangaza pamoja.',
    'footer.whatsapp_support': 'Msaada wa WhatsApp',
    'footer.rights_reserved': 'Haki zote zimehifadhiwa.',
    'footer.impact': 'Athari',
    'footer.capabilities': 'Uwezo',

    // Dropdowns
    'dropdown.featured': 'Imeangaziwa',
    'dropdown.categories': 'Vipengele',
    'dropdown.products.featured_title': 'Bidhaa Zilizochaguliwa',
    'dropdown.products.title1': 'Bonga APIs',
    'dropdown.products.desc1': 'API zenye uwezo mkubwa kwa SMS na USSD',
    'dropdown.products.title2': 'Uratibu wa Mifumo ya AI',
    'dropdown.products.desc2': 'Kuunganisha na kuratibu mifumo ya AI kwenye majukwaa salama ya data.',
    'dropdown.products.read_all': 'Tazama bidhaa zote',
    'dropdown.products.cat_title': 'Mfululizo wa Bidhaa',
    'dropdown.products.cat1': 'SDK Maalum',
    'dropdown.products.cat2': 'AI Inayotumika',
    'dropdown.products.cat3': 'Uratibu wa Wingu',
    'dropdown.products.cat4': 'Ukaguzi wa Miundombinu',
    'dropdown.solutions.featured_title': 'Suluhisho Zilizochaguliwa',
    'dropdown.solutions.title1': 'AI na Kazi Otomatiki',
    'dropdown.solutions.desc1': 'Punguza kazi zinazojirudia kwa kutumia wasaidizi wa AI.',
    'dropdown.solutions.title2': 'Miundombinu ya Kisasa',
    'dropdown.solutions.desc2': 'Uhamiaji wa wingu na DevOps kwa utendaji wa juu.',
    'dropdown.solutions.read_all': 'Gundua suluhisho',
    'dropdown.solutions.cat_title': 'Sekta na Mahitaji',
    'dropdown.solutions.cat1': 'Mifumo ya Kidijitali',
    'dropdown.solutions.cat2': 'Usalama na Hatari',
    'dropdown.solutions.cat3': 'Data na Uchambuzi',
    'dropdown.solutions.cat4': 'Msaada wa IT',
    'dropdown.company.featured_title': 'Kuhusu Antera',
    'dropdown.company.title1': 'Lengo Letu',
    'dropdown.company.desc1': 'Kusaidia mashirika ya Afrika kupitia teknolojia ya kisasa.',
    'dropdown.company.title2': 'Ujuzi Wetu',
    'dropdown.company.desc2': 'Uhandisi wa kitaalamu katika wingu, AI na usalama.',
    'dropdown.company.read_all': 'Kuhusu sisi',
    'dropdown.company.cat_title': 'Chunguza Kampuni',
    'dropdown.company.cat1': 'Jinsi Tunavyofanya Kazi',
    'dropdown.company.cat2': 'Maadili Yetu',
    'dropdown.company.cat3': 'Jiunge Nasi'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};