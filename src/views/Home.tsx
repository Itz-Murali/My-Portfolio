import AnimatedBackground from '@/core/effects/AnimatedBackground';

import ProfileSection from '@/modules/profile/ProfileSection';
import AboutSection from '@/modules/about/AboutSection';
import SkillsSection from '@/modules/skills/SkillsSection';
import ProjectsSection from '@/modules/projects/ProjectsSection';
import GitHubStats from '@/modules/github/GitHubStats';
import ContactSection from '@/modules/contact/ContactSection';
import RandomSection from '@/modules/random/RandomSection';
import Footer from '@/modules/footer/Footer';

const Home = () => {
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
};

export default Home;
