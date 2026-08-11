'use client';
import { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Send, Loader2, Megaphone } from 'lucide-react';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

const PixelMegaphoneIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Megaphone className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
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

export default function BroadcastPage() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const handleBroadcast = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/admin/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setResponseMsg(data.message);
        setSubject('');
        setMessage('');
      } else {
        setStatus('error');
        setResponseMsg(data.error || 'Failed to send broadcast');
      }
    } catch (err) {
      setStatus('error');
      setResponseMsg('An unexpected error occurred');
    }
  };

  return (
    <div ref={containerRef} className="bg-[#FAFAF8] text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <GrainOverlay />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex justify-center items-center gap-8 mb-12">
          <PixelMegaphoneIcon />
        </div>

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Broadcast.
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Email about product alerts and services to all registered subscribers.
          </motion.p>
        </header>

        <div className="relative max-w-3xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />

          <motion.div 
            className="border border-neutral-200 bg-white p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <form onSubmit={handleBroadcast} className="space-y-8">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-3">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="New Product Launch"
                  className="w-full p-4 border border-neutral-200 outline-none focus:border-black transition-colors font-medium tracking-tight bg-[#FAFAF8]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-3">Message Content</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full p-4 border border-neutral-200 outline-none focus:border-black transition-colors font-mono text-sm h-64 bg-[#FAFAF8] resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-black text-white p-4 font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#FA520F] transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Send Email
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 border border-[#10B981] text-[#10B981] font-mono text-xs font-bold uppercase">
                  {responseMsg}
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 border border-[#EF4444] text-[#EF4444] font-mono text-xs font-bold uppercase">
                  {responseMsg}
                </div>
              )}
            </form>
          </motion.div>

          <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
        </div>

      </div>
    </div>
  );
}