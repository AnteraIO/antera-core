'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import RichTextEditor from '@/components/admin/RichTextEditor';
import { Wand2, Save, Send } from 'lucide-react';
import { postSchema } from '@/lib/validations';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
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
    <div ref={containerRef} className="bg-[#FAFAF8] text-black min-h-screen pt-16 md:pt-20 lg:pt-24 selection:bg-[#FA520F] selection:text-white">
      <GrainOverlay />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <header className="text-center py-12">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Write Articles.
          </motion.h1>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <div className="border border-neutral-200 bg-white">
            
            {/* Fixed Action Buttons - Always visible */}
            <div className="sticky top-16 md:top-20 lg:top-24 z-20 bg-white border-b border-neutral-200 px-6 md:px-10 py-4 flex flex-wrap gap-3">
              <button
                onClick={() => handleSubmit('draft')}
                disabled={isSaving}
                className="bg-[#F5F5F5] px-4 py-2 text-sm font-medium hover:bg-[#EAEAEA] transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                <Save size={14} />
                Save Draft
              </button>
              <button
                onClick={() => handleSubmit('published')}
                disabled={isSaving}
                className="bg-[#FA520F] px-4 py-2 text-sm font-medium text-white hover:bg-black transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                <Send size={14} />
                Publish Now
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="p-6 md:p-10 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
              {/* Title */}
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 mb-3">Title</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="flex-1 p-3 border border-neutral-200 text-lg font-medium tracking-tight outline-none focus:border-black transition-colors bg-[#FAFAF8]"
                    placeholder="Enter post title..."
                  />
                  <button
                    onClick={handleAIByTitle}
                    disabled={isGenerating}
                    className="px-4 bg-black text-white border border-black hover:bg-[#FA520F] hover:border-[#FA520F] transition-colors disabled:opacity-50 flex items-center justify-center"
                  >
                    <Wand2 size={18} className={isGenerating ? 'animate-spin' : ''} />
                  </button>
                </div>
              </div>

              {/* Content & Excerpt */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 mb-3">Main Content</label>
                  <div className="border border-neutral-200 bg-[#FAFAF8] overflow-hidden">
                    <RichTextEditor content={content} onChange={setContent} />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 mb-3">Excerpt</label>
                  <textarea
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    className="w-full p-3 border border-neutral-200 font-mono text-sm h-40 outline-none focus:border-black transition-colors bg-[#FAFAF8] resize-none"
                    placeholder="Short summary..."
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}