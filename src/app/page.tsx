import type { Metadata } from 'next';
import Home from '@/views/Home';
import { SITE_URL, SITE_NAME, TITLE, DESCRIPTION, OG_IMAGE } from '@/utils/seo';

// Keeps the footer year current without a redeploy.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/`,
    title: SITE_NAME,
    description: 'A Journey Into The World Of Creativity And Innovation In Web Development.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    siteName: SITE_NAME,
    locale: 'en_US',
  },
};

export default function Page() {
  return <Home />;
}
