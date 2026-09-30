'use client';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { useLanguage } from '@/context/LanguageContext';

export default function BlogCTA() {
  const { t } = useLanguage();

  return (
    <section className="bg-white text-black py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

          <div className="md:col-span-7 p-8 md:p-12 lg:p-16 bg-[#0A0A0A] text-white flex flex-col justify-between min-h-[420px]">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[0.95] mb-6">
                Stay Connected to the Future.
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-md">
                Our Blogs cover the intersection of Technology, AI, automation, and Tanzania and global digital infrastructure.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 p-8 md:p-12 lg:p-16 bg-[#E8ECEF] text-black flex flex-col justify-center min-h-[420px]">
            <NewsletterSignup />
          </div>

        </div>
      </div>
    </section>
  );
}