'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { Share2, User } from 'lucide-react';
import shadrackovskyImage from '@/assets/shadrackovsky.jpeg';
import anteraLogoImage from '@/assets/antera-logo.jpeg';
import teamBg from '@/assets/hero-3.jpg';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

const PixelUserIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <circle cx="12" cy="9" r="3" stroke="white" strokeWidth="1.5"/>
    <path d="M7 17a5 5 0 0 1 10 0" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelShareIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <circle cx="8" cy="12" r="2" fill="white"/>
    <circle cx="16" cy="8" r="2" fill="white"/>
    <circle cx="16" cy="16" r="2" fill="white"/>
    <path d="M10 11l4-2M10 13l4 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const DiamondDecoration = ({ className = "" }: { className?: string }) => (
  <motion.div 
    className={`w-16 h-16 border border-neutral-200 rotate-45 ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  />
);

export default function TeamPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const team = [
    {
      name: 'Shadrackovsky',
      role: 'CEO & Founder',
      bio: 'Leading the agency in building the next generation of neural technologies and enterprise infrastructure.',
      image: shadrackovskyImage,
      socials: {
        twitter: 'https://twitter.com/shadrackovsky',
        github: 'https://github.com/zuck30'
      }
    },
    {
      name: 'Josia O Mosses',
      role: 'Co-Founder',
      bio: 'Directing strategic partnerships and core architectural development across Antera\'s global service layers.',
      image: anteraLogoImage,
      socials: {
        linkedin: 'https://linkedin.com/',
        github: 'https://github.com/'
      }
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-[#FAFAF8] text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src={teamBg}
          alt="Team background"
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <GrainOverlay />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex justify-center items-center gap-8 mb-12">
          <PixelUserIcon />
          <PixelShareIcon />
        </div>

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Our <span className="text-[#FA520F]">Team</span>
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A team of engineers, researchers, and architects dedicated to digital independence.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto mb-24 md:mb-40">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-200 bg-white/90 backdrop-blur-sm">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`group p-8 md:p-12 min-h-[500px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors ${i === 0 ? 'border-b md:border-b-0 md:border-r border-neutral-200' : ''}`}
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-8 overflow-hidden border border-neutral-200 grayscale group-hover:grayscale-0 transition-all duration-500">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FA520F] mb-2">{member.role}</p>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">{member.name}</h2>
                    <p className="text-base text-neutral-500 leading-relaxed mb-8 max-w-sm">
                      {member.bio}
                    </p>

                    <div className="flex justify-center gap-4">
                      <a href="#" className="p-3 border border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-colors">
                        <User size={18} />
                      </a>
                      <a href="#" className="p-3 border border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-colors">
                        <Share2 size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-5xl mx-auto border border-neutral-200 bg-white/90 backdrop-blur-sm p-8 md:p-16 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-4">Joining the team</h3>
          <p className="text-base text-neutral-500 leading-relaxed mb-8 max-w-xl mx-auto">
            We are always looking for exceptional geeks, engineers and researchers to help us scale digital infrastructure. Email Us your CV and a cover letter about why you want to join the team.
          </p>
          <a href="mailto:sheldoncodesdaily@gmail.com" className="inline-block bg-black text-white px-10 py-4 text-sm font-medium hover:bg-[#FA520F] transition-colors">
            Join Us
          </a>
        </motion.div>

      </div>
    </div>
  );
}