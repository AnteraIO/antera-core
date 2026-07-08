import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { FinalCTAAndFooter } from "@/components/Footer";
import ChatAgentClient from "@/components/ChatAgentClient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ANTERA | Advanced Neural Technologies & Engineering Research Agency",
    template: "%s | ANTERA"
  },
  description: "ANTERA (Advanced Neural Technologies & Engineering Research Agency) provides cutting-edge AI, automation, and digital infrastructure solutions in Tanzania and across Africa.",
  keywords: ["ANTERA", "AI Tanzania", "Neural Technologies", "Engineering Research", "Digital Transformation Africa", "Software Engineering Tanzania", "Antera Group", "Antera Tanzania"],
  authors: [{ name: "Antera Team" }],
  creator: "Antera Group",
  publisher: "Antera Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://antera.co.tz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ANTERA | Advanced Neural Technologies & Engineering Research Agency',
    description: 'Cutting-edge AI, automation, and digital infrastructure solutions.',
    url: 'https://antera.co.tz',
    siteName: 'ANTERA',
    images: [
      {
        url: '/antera-logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'ANTERA Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANTERA | AI & Engineering Research',
    description: 'Advanced Neural Technologies & Engineering Research Agency',
    images: ['/antera-logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/antera-logo.jpeg",
    shortcut: "/antera-logo.jpeg",
    apple: "/antera-logo.jpeg",
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ANTERA',
    alternateName: 'Advanced Neural Technologies & Engineering Research Agency',
    url: 'https://antera.co.tz',
    logo: 'https://antera.co.tz/antera-logo.jpeg',
    sameAs: [
      'https://twitter.com/antera_tz',
      'https://instagram.com/antera_tz',
      'https://linkedin.com/company/antera_tz',
    ],
    description: 'Advanced Neural Technologies & Engineering Research Agency (ANTERA) provides AI, automation, and digital infrastructure solutions.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TZ',
      addressLocality: 'Dar es Salaam',
    },
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <div className="min-h-screen bg-white text-[#1F1F1F] selection:bg-[#FA520F]/30">
            <Navbar />
            <main>{children}</main>
            <FinalCTAAndFooter />
            <ChatAgentClient />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
