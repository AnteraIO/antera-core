import React from 'react';
import { Metadata } from 'next';
import { SautiConnectOnboarding } from '@/components/sauti-connect/SautiConnectOnboarding';

export const metadata: Metadata = {
  title: 'Sauti Connect Onboarding | Professional Cloud PBX & Call Centre Solution',
  description: 'Onboard your business with Sauti Connect - Cloud PBX, SIP Trunking, IVR, WhatsApp integration, and call centre management for Tanzania and East Africa.',
};

export default function SautiConnectPage() {
  return <SautiConnectOnboarding />;
}
