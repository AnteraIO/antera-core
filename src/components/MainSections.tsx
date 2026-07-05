'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const TrustSection = () => {
  return (
    <section className="bg-[#FBFBFB] border-b border-black/10 text-black font-sans antialiased w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex flex-col lg:flex-row items-stretch w-full max-w-[1440px]"
      >
        
        {/* Left Side Label Block */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-4/12 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-black/10 bg-[#FBFBFB] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-1.5 mb-8 select-none">
              {/* Pixel Badge Graphic */}
              <motion.svg 
                whileHover={{ scale: 1.1, rotate: 5 }}
                width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-[#FA520F] transition-transform cursor-pointer"
              >
                <path d="M1 1h8v2H1V1zm1 4h6v1H2V5zm2 3h2v1H4V8z" fill="currentColor"/>
              </motion.svg>
            </div>
            <h3 className="text-[2rem] md:text-[2.5rem] font-normal tracking-tight leading-[1.1] mb-4">
              Reduce Risk. <br/>Strengthen Security.
            </h3>
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-xs font-normal">
              We help you prepare for incidents and keep your digital platforms safe from cyber threats.
            </p>
          </div>
        </motion.div>

        {/* Right Side Content Grid */}
        <div className="lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 items-stretch bg-white">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ backgroundColor: "#FAFAFA" }}
            className="p-8 md:p-12 flex flex-col justify-between min-h-[280px] group relative border-b sm:border-b-0 sm:border-r border-black/10 transition-colors duration-300"
          >
            {/* Minimal accent line matching Mistral's subtle highlights */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FA520F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />

            <div className="pt-4 relative h-full flex flex-col justify-end">
              <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-3 font-mono group-hover:text-[#FA520F] transition-colors duration-300">
                We're Always Prepared
              </h4>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Be ready for any security issue with faster response times and clear recovery plans.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ backgroundColor: "#FAFAFA" }}
            className="p-8 md:p-12 flex flex-col justify-between min-h-[280px] group relative transition-colors duration-300"
          >
            <div className="pt-4 relative h-full flex flex-col justify-end">
              <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-3 font-mono group-hover:text-[#FA520F] transition-colors duration-300">
                Secure Access
              </h4>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Protect your data with strong identity management and protected endpoints.
              </p>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  )
}

export const ServicesSection = () => {
  const keyHighlights = [
    {
      title: 'AI Chatbots',
      desc: 'Automate customer and internal support to improve response times and staff productivity.',
      pixelIcon: (
        <svg width="28" height="28" viewBox="0 0 16 16" fill="none" className="text-black group-hover:text-[#FA520F] transition-colors duration-300 mb-8">
          <path d="M2 2h4v4H2V2zm8 0h4v4h-4V2zM2 10h4v4H2v-4zm8 0h4v4h-4v-4z" fill="currentColor"/>
          <path d="M6 4h4v1H6V4zm0 8h4v1H6v-1zM4 6h1v4H4V6zm7 0h1v4h-1V6z" fill="currentColor" opacity="0.3"/>
        </svg>
      )
    },
    {
      title: 'Workflow Automation',
      desc: 'Eliminate manual and repetitive tasks with practical AI solutions that scale your operations.',
      pixelIcon: (
        <svg width="28" height="28" viewBox="0 0 16 16" fill="none" className="text-black group-hover:text-[#FA520F] transition-colors duration-300 mb-8">
          <path d="M4 2h8v2H4V2zm-2 4h12v6H2V6zm3 3h6v1H5V9z" fill="currentColor"/>
          <path d="M5 4h6v2H5V4z" fill="currentColor" opacity="0.2"/>
        </svg>
      )
    },
    {
      title: 'Secure AI Copilots',
      desc: 'Turn your documents into insights while keeping your systems secure and governed.',
      pixelIcon: (
        <svg width="28" height="28" viewBox="0 0 16 16" fill="none" className="text-black group-hover:text-[#FA520F] transition-colors duration-300 mb-8">
          <path d="M1 5h14v6H1V5zm3 2h8v2H4V7z" fill="currentColor"/>
          <path d="M6 2h4v3H6V2zm0 9h4v3H6v-3z" fill="currentColor" opacity="0.4"/>
        </svg>
      )
    },
  ]

  return (
    <section id="products" className="bg-[#FBFBFB] border-b border-black/10 text-black font-sans antialiased w-full overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row items-stretch w-full max-w-[1440px]">
        
        {/* Core Capabilities Descriptive Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-4/12 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black/10 bg-[#FBFBFB]"
        >
          <div className="max-w-sm">
            <div className="flex items-center gap-1.5 mb-10 select-none">
              <motion.svg 
                whileHover={{ y: -3 }}
                width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-black transition-transform"
              >
                <path d="M1 2h8v6H1V2zm2 2h4v2H3V4z" fill="currentColor"/>
              </motion.svg>
            </div>
            
            <h2 className="text-[2rem] md:text-[2.5rem] font-normal tracking-tight leading-[1.1] mb-6">
              Automate smarter. <span className="text-black block font-normal">Scale faster.</span>
            </h2>
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed font-normal">
              We implement practical AI solutions that reduce repetitive work while keeping systems secure and governed.
            </p>
          </div>
          
        </motion.div>

        {/* Content Slots Matrix Cards Grid Row Layout */}
        <div className="lg:w-8/12 grid grid-cols-1 md:grid-cols-3 items-stretch bg-white">
          {keyHighlights.map((item, i) => (
            <motion.div
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className={`p-8 lg:p-10 flex flex-col justify-between min-h-[360px] relative group bg-white transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:z-10 ${
                i !== keyHighlights.length - 1 ? 'border-b md:border-b-0 md:border-r border-black/10' : ''
              }`}
            >
              <div>
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.4 }}
                  className="flex items-center justify-between w-full mb-6"
                >
                  {item.pixelIcon}
                </motion.div>
                
                <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-3 group-hover:text-[#FA520F] transition-colors duration-300 font-mono">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}