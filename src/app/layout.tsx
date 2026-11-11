import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { FinalCTAAndFooter } from "@/components/Footer";
import ChatAgentClient from "@/components/ChatAgentClient";
import { LayoutContent } from "@/components/LayoutContent";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const degarism = localFont({
  src: "../../public/fonts/degarism-studio-alliance-no-2-light.otf",
  variable: "--font-degarism",
  display: "block",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "ANTERA | Advanced Neural Technologies & Engineering Research Agency",
    template: "%s | ANTERA",
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
        url: '/logo.png',
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
    images: ['/logo.png'],
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
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
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
    logo: 'https://antera.co.tz/logo.png',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn-icons-png.flaticon.com" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} ${degarism.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <div className="min-h-screen bg-white text-[#1F1F1F] selection:bg-black/10">
            <Navbar />
            <LayoutContent>{children}</LayoutContent>
            <FinalCTAAndFooter />
            <ChatAgentClient />
            <ServiceWorkerRegistration />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}