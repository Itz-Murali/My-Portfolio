import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Murali Portfolio | Developer & Creator</title>
        <meta name="description" content="This Is My Portfolio Created With 💘. Showcasing My Skills, Projects, And Passion For Web Development." />
        <meta property="og:title" content="Murali Portfolio" />
        <meta property="og:description" content="A Journey Into The World Of Creativity And Innovation In Web Development." />
        <meta property="og:type" content="website" />
      </Helmet>

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
