import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Providers from '@/core/providers/Providers';
import ThemeToggle from '@/core/theme/ThemeToggle';
import {
  SITE_URL,
  SITE_NAME,
  TITLE,
  DESCRIPTION,
  OG_DESCRIPTION,
  OG_IMAGE,
} from '@/utils/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'Murali, Portfolio, Web Developer, Creator, Innovator, Frontend, React, JavaScript, TypeScript',
  authors: [{ name: 'Murali' }],
  robots: 'index, follow',
  alternates: { canonical: `${SITE_URL}/` },
  verification: {
    google: 'ekLE6xoPiDQ2txMCQUzYQL0RC-Okb5HHk-pUMM5_vIM',
    other: { 'msvalidate.01': '5A75F9465E0ED29CE5F974CCB2E0E33E' },
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/`,
    title: TITLE,
    description: OG_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    siteName: SITE_NAME,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE],
    creator: '@Murali',
  },
  icons: {
    icon: [{ url: '/main.png', type: 'image/png' }],
    shortcut: [{ url: '/main.png', type: 'image/png' }],
    apple: '/main.png',
  },
  other: {
    title: TITLE,
    language: 'English',
    'revisit-after': '7 days',
    'twitter:url': `${SITE_URL}/`,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#7C3AED',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Murali',
  url: SITE_URL,
  image: '/main.png',
  jobTitle: 'Developer & Creator',
  description: 'Developer • Creator • Innovator',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Murali Portfolio" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Nunito:wght@300;400;500;600;700&family=Satisfy&family=Fira+Code:wght@400;500;600&family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
