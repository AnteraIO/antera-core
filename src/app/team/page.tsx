'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import shadrackovskyImage from '@/assets/shadrackovsky.jpeg';
import anteraLogoImage from '@/assets/antera-logo.jpeg';

// Custom SVG Icons
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
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
    <section 
      ref={containerRef} 
      className="bg-white text-[#171321] font-sans w-full py-24 md:py-32 relative overflow-hidden border-t border-gray-100"
    >
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#171321] z-[100] origin-left" 
        style={{ scaleX }} 
      />

      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <header className="mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Team.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-600 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            We're a team of passionate innovators building cutting-edge AI solutions that help organizations streamline their operations and boost productivity. 
            Our mission is to create software that not only solves today's problems but anticipates tomorrow's challenges.
          </motion.p>
        </header>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {team.map((member, i) => {
            const isPurple = i % 2 === 0;
            return (
              <motion.div
                key={member.name}
                className={`flex flex-col items-center p-10 min-h-[480px] transition-all duration-300 hover:-translate-y-2 ${
                  isPurple 
                    ? 'bg-[#EFE8FF] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]' 
                    : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 mb-6 overflow-hidden rounded-full border-2 border-[#171321]/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Info */}
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#171321]/60 mb-2">
                    {member.role}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171321] mb-4">
                    {member.name}
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed max-w-sm">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 mt-6">
                    {member.socials.twitter && (
                      <a 
                        href={member.socials.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-gray-200 hover:bg-[#171321] hover:text-white hover:border-[#171321] transition-all duration-300"
                      >
                        <TwitterIcon />
                      </a>
                    )}
                    {member.socials.github && (
                      <a 
                        href={member.socials.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-gray-200 hover:bg-[#171321] hover:text-white hover:border-[#171321] transition-all duration-300"
                      >
                        <GithubIcon />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a 
                        href={member.socials.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-gray-200 hover:bg-[#171321] hover:text-white hover:border-[#171321] transition-all duration-300"
                      >
                        <LinkedinIcon />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Join Us CTA */}
        <motion.div
          className={`p-10 md:p-16 transition-all duration-300 hover:-translate-y-2 ${
            team.length % 2 === 0 
              ? 'bg-[#EFE8FF] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]' 
              : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#171321] mb-4">
            Joining the team
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-xl">
            We are always looking for exceptional geeks, engineers and researchers to help us scale digital infrastructure. Email us your CV and a cover letter about why you want to join the team.
          </p>
          <a 
            href="mailto:sheldoncodesdaily@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#171321] text-white font-medium hover:bg-[#2a2438] transition-all rounded-[2rem] text-base hover:-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.2)]"
          >
            Join Us <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}