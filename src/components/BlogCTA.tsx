'use client';
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const NewsletterSignup = () => {
  const { language } = useLanguage();
  const isSw = language === 'sw';

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="w-full flex flex-col">
      <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] leading-tight mb-3">
        {isSw ? 'Jiunge na jarida letu' : 'Subscribe to our newsletter'}
      </h3>
      <p className="text-sm md:text-base text-black/60 leading-relaxed mb-8 max-w-sm">
        {isSw
          ? 'Pata taarifa tutakapozindua bidhaa au huduma mpya.'
          : 'Get alerted when we launch new product or service.'}
      </p>

      {submitted ? (
        <p className="text-sm font-medium text-black">
          {isSw ? 'Asante! Tutakuwasiliana hivi karibuni.' : 'Thanks! We\'ll be in touch soon.'}
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row sm:items-center gap-4 w-full max-w-md"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={isSw ? 'Barua pepe yako' : 'Your email address'}
            className="flex-1 min-w-0 bg-transparent border-0 border-b border-black/30 focus:border-black focus:outline-none focus:ring-0 px-0 py-3 text-sm md:text-base placeholder:text-black/40 transition-colors"
          />

          <div className="relative p-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 shrink-0 self-start sm:self-center">
            <button
              type="submit"
              className="flex items-center justify-center text-sm font-medium px-6 py-3 rounded-full transition-all text-white bg-[#111111] hover:bg-black whitespace-nowrap leading-none"
            >
              {isSw ? 'Jiunge' : 'Subscribe'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;