import type { Metadata } from 'next';
import NotFound from '@/views/NotFound';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Murali Portfolio',
  description: "Oops! The page you're looking for doesn't exist.",
};

export default function NotFoundPage() {
  return <NotFound />;
}
