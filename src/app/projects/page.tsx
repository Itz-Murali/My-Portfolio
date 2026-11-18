import type { Metadata } from 'next';
import AllProjects from '@/views/AllProjects';

export const metadata: Metadata = {
  title: 'Projects | Murali Portfolio',
  description:
    'Explore my collection of projects built with passion, creativity, and cutting-edge technologies.',
};

export default function Page() {
  return <AllProjects />;
}
