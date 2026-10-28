'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  category: string;
  date: string;
}

export const BlogPage = () => {
  const { language } = useLanguage();
  const isSw = language === 'sw';

  const posts: BlogPost[] = [
    /* blog posts here */
  ];

  const hasPosts = posts && posts.length > 0;

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Banner */}
        <div className="w-full border-4 border-black bg-white p-8 md:p-12 mb-16 relative shadow-[4px_4px_0px_0px_#000000] text-center">
          <h1 className="text-4xl md:text-6xl font-normal uppercase tracking-tighter text-black font-mono leading-none">
            {isSw ? (
              <>Makala <span className="text-gray-400 font-bold">Zetu.</span></>
            ) : (
              <>Our <span className="text-gray-400 font-bold">Insights.</span></>
            )}
          </h1>
        </div>

        {/* Posts */}
        {hasPosts ? (
          <div className="space-y-6">
            {posts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative border-4 border-black bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-75 cursor-pointer"
              >
                <div className="max-w-2xl relative z-10">
                  <div className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase text-black mb-3">
                    <span className="bg-black text-white px-1.5 py-0.5">{post.category}</span>
                    <span className="text-gray-400 font-normal font-sans">//</span>
                    <span className="text-gray-400">{post.date}</span>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-gray-400 transition-colors font-mono">
                    {post.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2 bg-white border-2 border-black group-hover:bg-black group-hover:text-white p-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0">
                  <span>{isSw ? 'Soma Makala' : 'Read Post'}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full border-4 border-black bg-white p-8 md:p-16 text-center relative shadow-[8px_8px_0px_0px_#000000] flex flex-col items-center justify-center min-h-[280px]"
          >
            <h3 className="text-xl font-bold uppercase font-mono tracking-wider mb-2">
              {isSw ? 'Hakuna makala yaliyopatikana' : 'No articles found'}
            </h3>
            
            <p className="text-gray-400 font-mono text-xs max-w-xs leading-relaxed font-normal">
              {isSw
                ? 'Bado hatujachapisha makala. Rudi hivi karibuni kupata taarifa mpya.'
                : 'We haven\'t published any articles or insights just yet. Check back soon for updates.'}
            </p>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default BlogPage;