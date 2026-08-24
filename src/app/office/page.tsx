'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { 
  MapPin, 
  Clock, 
  Globe, 
  Mail, 
  Phone,
  ArrowUpRight
} from 'lucide-react';
import officeBg from '@/assets/hero-2.jpg';

const ArrowLink = ({ 
  text, 
  href, 
  isEmail = false, 
  isPhone = false 
}: { 
  text: string; 
  href?: string; 
  isEmail?: boolean;
  isPhone?: boolean;
}) => {
  let linkHref = href || "#";
  
  if (isEmail && href) linkHref = `mailto:${href}`;
  else if (isPhone && href) linkHref = `tel:${href}`;
  
  return (
    <a 
      href={linkHref}
      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#171321] hover:text-[#171321]/70 transition-colors"
      target={href?.startsWith('http') ? "_blank" : undefined}
      rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}
    >
      <span>{text}</span>
      <ArrowUpRight className="w-4 h-4" />
    </a>
  );
};

export default function OfficePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const officeCards = [
    {
      id: 'location',
      icon: MapPin,
      title: 'Location',
      content: 'Dar es Salaam, Tanzania',
      link: { text: 'Get directions', href: 'https://maps.google.com/maps?q=Dar+es+Salaam,+Tanzania' },
      span: 'large'
    },
    {
      id: 'hours',
      icon: Clock,
      title: 'Operating Hours',
      content: (
        <>
          <div className="flex justify-between text-base md:text-lg text-gray-700">
            <span>MON to FRI</span>
            <span className="font-medium text-[#171321]">08:00 - 18:00 EAT</span>
          </div>
          <div className="flex justify-between text-base md:text-lg text-gray-700">
            <span>SAT to SUN</span>
            <span className="font-medium text-[#171321]">Closed (Remote Only)</span>
          </div>
        </>
      ),
      span: 'small'
    },
    {
      id: 'email',
      icon: Mail,
      title: 'Email',
      content: 'info@antera.co.tz',
      link: { text: 'Send email', href: 'info@antera.co.tz', isEmail: true },
      span: 'small'
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Phone',
      content: '+255 760 984 921',
      link: { text: 'Call now', href: '+255760984921', isPhone: true },
      span: 'small'
    },
    {
      id: 'connect',
      icon: Globe,
      title: 'Connect',
      content: 'Follow our journey across digital platforms and stay updated with the latest from Antera Group.',
      link: { text: 'Visit website', href: 'https://antera.co.tz' },
      span: 'tall'
    },
    {
      id: 'visit',
      icon: MapPin,
      title: 'Visit Us',
      content: 'Schedule a meeting with our team to discuss your next project or partnership opportunity.',
      link: { text: 'Book appointment', href: 'https://calendly.com/antera-group/meeting' },
      span: 'large'
    }
  ];

  const getGridClass = (span: string) => {
    switch(span) {
      case 'large': return 'md:col-span-2';
      case 'tall': return 'md:row-span-2';
      default: return '';
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="bg-white text-[#171321] font-sans w-full py-24 md:py-32 relative overflow-hidden border-t border-gray-100"
    >
      {/* Background Image - Subtle */}
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src={officeBg}
          alt="Office background"
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#171321] z-[100] origin-left" 
        style={{ scaleX }} 
      />

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <header className="mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Office.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-600 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Antera Group operational headquarters and engineering hub.
          </motion.p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officeCards.map((card, index) => {
            const Icon = card.icon;
            const isPurple = index % 2 === 0;
            const gridClass = getGridClass(card.span);
            
            return (
              <motion.div
                key={card.id}
                className={`${gridClass} flex flex-col justify-between p-10 min-h-[320px] transition-all duration-300 hover:-translate-y-2 ${
                  isPurple 
                    ? 'bg-[#EFE8FF] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]' 
                    : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.7 }}
              >
                <div>
                  <Icon className="w-12 h-12 text-[#171321] mb-8" strokeWidth={1.5} />
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171321] mb-4">
                    {card.title}
                  </h3>
                  
                  {typeof card.content === 'string' ? (
                    <p className="text-lg text-gray-700 leading-snug">
                      {card.content}
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {card.content}
                    </div>
                  )}

                  {card.link && (
                    <a 
                      href={card.link.isEmail ? `mailto:${card.link.href}` : card.link.isPhone ? `tel:${card.link.href}` : card.link.href}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#171321] hover:text-[#171321]/70 transition-colors"
                      target={card.link.href?.startsWith('http') ? "_blank" : undefined}
                      rel={card.link.href?.startsWith('http') ? "noopener noreferrer" : undefined}
                    >
                      <span>{card.link.text}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}