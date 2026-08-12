'use client';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { useLanguage } from '@/context/LanguageContext';

export default function BlogCTA() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#FAFAF8] text-black py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="relative max-w-5xl mx-auto border border-neutral-200 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            <div className="p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-neutral-200 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.03em] leading-[0.95] mb-6">
                Stay Connected to the Future.
              </h2>
              <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                Our Blogs cover the intersection of Technology, AI, automation, and Tanzania and global digital infrastructure.
              </p>
            </div>

            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <NewsletterSignup />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}