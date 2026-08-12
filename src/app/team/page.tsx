'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { Share2, User } from 'lucide-react';
import shadrackovskyImage from '@/assets/shadrackovsky.jpeg';
import anteraLogoImage from '@/assets/antera-logo.jpeg';

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
      role: 'Team',
      bio: 'Directing strategic partnerships and core architectural development across Antera\'s global service layers.',
      image: anteraLogoImage,
      socials: {
        linkedin: 'https://linkedin.com/',
        github: 'https://github.com/'
      }
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-white text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white overflow-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        <header className="mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Team.
          </motion.h1>
          <motion.p 
            className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            We're a team of passionate innovators building cutting-edge AI solutions that help organizations streamline their operations and boost productivity. 
            Our mission is to create software that not only solves today's problems but anticipates tomorrow's challenges.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24 md:mb-32">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="bg-[#F5F5F5] p-8 md:p-12 min-h-[500px] flex flex-col justify-between group"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#FA520F] mb-2">{member.role}</p>
                  <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 group-hover:text-[#FA520F] transition-colors duration-200">{member.name}</h2>
                  <p className="text-base text-neutral-600 font-light leading-relaxed mb-8 max-w-sm">
                    {member.bio}
                  </p>

                  <div className="flex justify-center gap-4">
                    <a href="#" className="p-3 border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-colors">
                      <User size={18} />
                    </a>
                    <a href="#" className="p-3 border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-colors">
                      <Share2 size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="bg-[#F5F5F5] p-8 md:p-16 text-left"
        >
          <h3 className="text-4xl md:text-5xl font-normal tracking-tight mb-4">Joining the team</h3>
          <p className="text-lg text-neutral-600 font-light leading-relaxed mb-8 max-w-xl">
            We are always looking for exceptional geeks, engineers and researchers to help us scale digital infrastructure. Email Us your CV and a cover letter about why you want to join the team.
          </p>
          <a href="mailto:sheldoncodesdaily@gmail.com" className="inline-block bg-[#1A1A1A] text-white px-8 py-3 text-sm font-medium hover:bg-[#FA520F] transition-colors">
            Join Us
          </a>
        </motion.div>

      </div>
    </div>
  );
}