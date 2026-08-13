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
    <div ref={containerRef} className="bg-[#FAFAF8] text-black min-h-screen pt-16 md:pt-20 lg:pt-24 selection:bg-[#FA520F] selection:text-white">
      <GrainOverlay />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <header className="text-center py-12">
          <div className="flex justify-center items-center mb-6">
            <div className="w-12 h-12 bg-[#FA520F] rounded-sm flex items-center justify-center">
              <Megaphone size={24} className="text-white" />
            </div>
          </div>
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Broadcast.
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-4 font-light"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Email about product alerts and services to all registered subscribers.
          </motion.p>
        </header>

        <div className="relative max-w-3xl mx-auto">
          <div className="border border-neutral-200 bg-white">
            
            {/* Fixed Send Button */}
            <div className="sticky top-16 md:top-20 lg:top-24 z-20 bg-white border-b border-neutral-200 px-6 md:px-10 py-4">
              <button
                type="submit"
                form="broadcast-form"
                disabled={status === 'loading'}
                className="w-full bg-[#FA520F] text-white py-3 font-medium text-sm flex items-center justify-center gap-2 hover:bg-black transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Broadcast
                  </>
                )}
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="p-6 md:p-10 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
              <form id="broadcast-form" onSubmit={handleBroadcast} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 mb-3">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="New Product Launch"
                    className="w-full p-3 border border-neutral-200 outline-none focus:border-black transition-colors font-medium tracking-tight bg-[#FAFAF8]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 mb-3">Message Content</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full p-3 border border-neutral-200 outline-none focus:border-black transition-colors font-mono text-sm h-64 bg-[#FAFAF8] resize-none"
                    required
                  />
                </div>

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
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}