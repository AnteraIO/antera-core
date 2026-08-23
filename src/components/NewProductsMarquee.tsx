'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Store, 
  Warehouse, 
  ShoppingCart,
  FileText,
  Search,
  MessageCircle,
  Crown,
  BarChart3,
  Link,
  Smartphone
} from 'lucide-react';

const marqueeItems = [
  {
    product: 'Sekela Pos',
    title: 'Cloud-Native POS',
    desc: 'Designed to digitize and scale MSMEs across Tanzania and East Africa. Modernizing the entire retail ecosystem.',
    icon: Store,
  },
  {
    product: 'Sekela Pos',
    title: 'Smart Fulfillment',
    desc: 'Balance inventory, automate replenishment, and optimize across stores, warehouses, and digital channels seamlessly.',
    icon: Warehouse,
  },
  {
    product: 'Sekela Pos',
    title: 'Branch Management',
    desc: 'Track units from warehouse to customer, manage transfers, and get instant stock valuations in real-time.',
    icon: ShoppingCart,
  },
  {
    product: 'Kava',
    title: 'AI Resume Enhancer',
    desc: 'Multi-step builder with smart AI enhancement for summaries and achievements. Built for the modern professional.',
    icon: FileText,
  },
  {
    product: 'Kava',
    title: 'Skill Gap Analysis',
    desc: 'Compare your CV against job descriptions to identify missing skills immediately. Jumpstart your career path.',
    icon: Search,
  },
  {
    product: 'Kava',
    title: 'Kenja AI Coach',
    desc: 'Context-aware career assistant supporting English & Swahili with personalized job matches tailored to you.',
    icon: MessageCircle,
  },
  {
    product: 'Kava',
    title: 'Tiered Access',
    desc: 'Tiered subscription options tailored for every professional: Bure (Free), Eva (Premium), & Sekela (Pro).',
    icon: Crown,
  },
  {
    product: 'Sekela Pos',
    title: 'Real-Time Insights',
    desc: 'Make data-driven decisions with real-time analytics and reporting dashboards at your fingertips.',
    icon: BarChart3,
  },
  {
    product: 'Kava',
    title: 'Seamless Integrations',
    desc: 'Connect with your favorite tools and platforms for a unified workflow experience without friction.',
    icon: Link,
  },
  {
    product: 'Sekela Pos',
    title: 'Mobile POS',
    desc: 'Manage your business on the go with our mobile-first point of sale solution. Anywhere, Anytime.',
    icon: Smartphone,
  },
];

export const NewProductsMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section 
      ref={containerRef} 
      className="text-black font-sans w-full overflow-hidden selection:bg-[#FA520F] selection:text-white relative"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      {/* Glassmorphism background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-green-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-lime-300/20 rounded-full blur-3xl" />
      </div>

      <div className="w-full py-20 md:py-28 relative z-10">
        
        <header className="text-left px-6 md:px-12 lg:px-20 mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            What we are building.
          </motion.h1>
          <motion.p 
            className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Explore our upcoming platforms for the future of business and career development in East Africa.
          </motion.p>
        </header>

        <div className="relative w-full overflow-hidden bg-white/30 backdrop-blur-sm">
          
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white/30 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-0 w-max relative z-10"
            animate={{ x: [0, -4000] }}
            transition={{
              duration: 50,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            whileHover={{ transition: { duration: 80 } }}
          >
            {duplicatedItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="w-[280px] md:w-[340px] shrink-0 bg-[#F5F5F5] p-8 md:p-10 flex flex-col h-[400px] md:h-[460px] justify-between mr-6 md:mr-8 group rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[#FA520F]/5"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
                      <span className="text-[10px] font-medium uppercase tracking-widest text-black/40">
                        {item.product}
                      </span>
                    </div>
                    <h4 className="text-2xl font-normal text-black tracking-tight leading-tight group-hover:text-[#FA520F] transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-black/10 flex items-center justify-end">
                    <ArrowUpRight className="w-4 h-4 text-black/40 group-hover:text-[#FA520F] transition-colors duration-200" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://wa.me/255760984921"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#EAEAEA] text-black p-8 md:p-10 flex items-center justify-between group cursor-pointer hover:bg-[#E0E0E0] transition-colors duration-200"
          >
            <h3 className="text-3xl md:text-4xl font-normal tracking-tight">Request a Demo</h3>
            <ArrowUpRight className="w-8 h-8 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </a>
          <a
            href="https://wa.me/255760984921"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1A1A] text-white p-8 md:p-10 flex items-center justify-between group cursor-pointer hover:bg-black transition-colors duration-200"
          >
            <h3 className="text-3xl md:text-4xl font-normal tracking-tight">Start Building</h3>
            <ArrowUpRight className="w-8 h-8 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </a>
        </div>

      </div>
    </section>
  );
};