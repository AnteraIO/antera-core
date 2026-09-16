'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Hero } from '@/components/Hero';
import { PartnerTestimonials } from '@/components/PartnerTestimonials';

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Hero />
      <main>{children}</main>
      <PartnerTestimonials />
    </>
  );
}
