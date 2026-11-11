import useScrollAnimation from '@/utils/hooks/useScrollAnimation';
import { Code2, Rocket, Heart, Coffee, Sparkles, Zap } from 'lucide-react';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const highlights = [
    { icon: Code2, text: 'Clean Code Enthusiast', color: 'text-sky' },
    { icon: Rocket, text: 'Always Learning', color: 'text-coral' },
    { icon: Heart, text: 'Open Source Lover', color: 'text-rose' },
    { icon: Coffee, text: 'Coffee Powered', color: 'text-peach' },
    { icon: Sparkles, text: 'Detail Oriented', color: 'text-lavender' },
    { icon: Zap, text: 'Fast & Efficient', color: 'text-mint' },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-4 md:px-8 max-w-4xl mx-auto scroll-fade-up ${isVisible ? 'visible' : ''}`}
    >
      
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display text-gradient mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
      </div>

      
      <div className="colorful-card p-8 md:p-10 relative">
        <div className="space-y-5 text-lg leading-relaxed">
          <p className="text-foreground/90 font-body text-xl">
            <span className="text-3xl">👋</span> Hey There! Welcome To My Portfolio.
          </p>
          
          <p className="text-foreground/80 font-body">
            I'm <span className="text-primary font-bold font-elegant text-2xl italic">Murali</span>, an 18-year-old Student from{' '}
            <span className="text-secondary font-semibold">Karnataka, India</span>. I love creating websites, 
            APIs, bots, and more just for fun in my free time.
          </p>

          <p className="text-foreground/80 font-body">
            My journey in tech started with curiosity and has evolved into a full-fledged passion. 
            I believe that great software is not just about code—it's about solving real problems 
            and making people's lives easier.
          </p>

          <p className="text-foreground/80 font-body">
            I'm still exploring the world of coding and learning new things everyday. I mostly work with{' '}
            <span className="font-code text-primary bg-primary/10 px-2 py-0.5 rounded">HTML</span>,{' '}
            <span className="font-code text-secondary bg-secondary/10 px-2 py-0.5 rounded">CSS</span>,{' '}
            <span className="font-code text-accent bg-accent/10 px-2 py-0.5 rounded">JavaScript</span>, and{' '}
            <span className="font-code text-mint bg-mint/10 px-2 py-0.5 rounded">TypeScript</span>.
          </p>

          <p className="text-foreground/80 font-body">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
            projects, or diving deep into the latest web development trends. I'm particularly fascinated 
            by <span className="text-accent font-medium">AI/ML integrations</span> and 
            <span className="text-lavender font-medium"> creating seamless user experiences</span>.
          </p>

          <p className="text-foreground/80 font-body">
            Apart from coding, I'm a big <span className="text-peach font-semibold">Pokémon</span> fan! 🎮
          </p>

          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300"
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="font-body text-sm font-medium text-foreground/80">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground font-script text-2xl border-l-4 border-primary/30 pl-4 italic mt-6">
            "I may not be a pro coder yet, but I'm definitely a curious one." ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
