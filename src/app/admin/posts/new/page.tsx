'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import RichTextEditor from '@/components/admin/RichTextEditor';
import { Wand2, Save, Send, Edit3 } from 'lucide-react';
import { postSchema } from '@/lib/validations';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

const PixelEditIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#FA520F] border border-[#C2410C] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Edit3 className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelWandIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#8B5CF6] border border-[#7C3AED] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Wand2 className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const DiamondDecoration = ({ className = "" }: { className?: string }) => (
  <motion.div className={`w-16 h-16 border border-neutral-200 rotate-45 ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  />
);

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const handleAIByTitle = async () => {
    if (!title) return alert('Please enter a title first.');
    setIsGenerating(true);
    try {
      const res = await fetch('/api/blog/ai/generate', {
        method: 'POST',
        body: JSON.stringify({ topic: title, tone: 'professional and tech-focused' }),
      });
      const data = await res.json();

      if (data.content) {
        let raw = data.content;

        const titleMatch = raw.match(/TITLE:\s*([^\n]+)/i);
        const excerptMatch = raw.match(/EXCERPT:\s*([^\n]+)/i);
        const contentMatch = raw.match(/CONTENT:\s*([\s\S]*)/i);

        if (titleMatch) setTitle(titleMatch[1].trim());
        if (excerptMatch) setExcerpt(excerptMatch[1].trim());

        let extractedContent = contentMatch ? contentMatch[1].trim() : raw;
        extractedContent = extractedContent.replace(/^```(markdown|html)?\n([\s\S]*)\n```$/i, '$2');

        setContent(extractedContent);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = async (status: 'draft' | 'published') => {
    setIsSaving(true);
    const postData = {
      title,
      content,
      excerpt,
      slug: title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, ''),
      status,
    };

    const validation = postSchema.safeParse(postData);
    if (!validation.success) {
      alert('Validation failed: ' + JSON.stringify(validation.error.format()));
      setIsSaving(false);
      return;
    }

    try {
      const res = await fetch('/api/blog/posts', {
        method: 'POST',
        body: JSON.stringify(validation.data),
      });
      if (res.ok) {
        router.push('/admin/posts');
      } else {
        const err = await res.json();
        alert('Error: ' + err.error);
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div ref={containerRef} className="bg-[#FAFAF8] text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <GrainOverlay />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex justify-center items-center gap-8 mb-12">
          <PixelEditIcon />
          <PixelWandIcon />
        </div>

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Write <span className="text-[#FA520F]">Articles.</span>
          </motion.h1>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />

          <motion.div 
            className="border border-neutral-200 bg-white p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div className="flex gap-3">
                <button
                  onClick={() => handleSubmit('draft')}
                  disabled={isSaving}
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-neutral-200 text-sm font-medium hover:border-black hover:bg-black hover:text-white transition-all disabled:opacity-50"
                >
                  <Save size={16} /> Save Draft
                </button>
                <button
                  onClick={() => handleSubmit('published')}
                  disabled={isSaving}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#FA520F] text-white text-sm font-medium hover:bg-black transition-all disabled:opacity-50"
                >
                  <Send size={16} /> Publish Now
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-3">Title</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="flex-1 p-4 border border-neutral-200 text-xl font-medium tracking-tight outline-none focus:border-black transition-colors bg-[#FAFAF8]"
                  />
                  <button
                    onClick={handleAIByTitle}
                    disabled={isGenerating}
                    className="px-4 bg-black text-white border border-black hover:bg-[#FA520F] transition-colors"
                  >
                    <Wand2 size={20} className={isGenerating ? 'animate-spin' : ''} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <label className="block text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-3">Main Content</label>
                  <div className="border border-neutral-200 bg-[#FAFAF8]">
                    <RichTextEditor content={content} onChange={setContent} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-3">Excerpt</label>
                  <textarea
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    className="w-full p-4 border border-neutral-200 font-mono text-sm h-48 outline-none focus:border-black transition-colors bg-[#FAFAF8] resize-none"
                    placeholder="Short summary..."
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
        </div>
      </div>
    </div>
  );
}