import AnimatedBackground from '@/components/AnimatedBackground';
import ProfileSection from '@/components/ProfileSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import GitHubStats from '@/components/GitHubStats';
import RandomSection from '@/components/RandomSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const revalidate = 86400;

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10">
        <ProfileSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GitHubStats />
        <RandomSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
