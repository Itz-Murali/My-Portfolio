import { useState } from 'react';
import useScrollAnimation from '@/utils/hooks/useScrollAnimation';

const skills = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', desc: 'AI, Web, Automation' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26', desc: 'Web Markup' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6', desc: 'Web Styling' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E', desc: 'Web, Apps' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', desc: 'Typed JS' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', desc: 'Backend APIs' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', desc: 'UI Library' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000', desc: 'Fullstack' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', desc: 'NoSQL DB' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1', desc: 'SQL DB' },
  { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg', color: '#CC342D', desc: 'Web Scripts' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: '#777BB4', desc: 'Web Backend' },
];

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-4 md:px-8 max-w-5xl mx-auto scroll-fade-up ${isVisible ? 'visible' : ''}`}
    >
      
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display text-gradient mb-4">
          My Skills
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />
        <p className="text-muted-foreground max-w-2xl mx-auto font-elegant text-xl italic">
          I've explored many programming languages over time, but a few have truly stolen my heart. 💻
        </p>
      </div>

      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group relative"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{ 
              transitionDelay: `${index * 50}ms`,
            }}
          >
            <div className="colorful-card p-4 flex flex-col items-center gap-3 cursor-pointer 
                          hover:scale-105 transition-all duration-300">
              <div 
                className="relative w-10 h-10 md:w-12 md:h-12 transition-all duration-300"
                style={{ filter: hoveredSkill === skill.name ? `drop-shadow(0 0 12px ${skill.color})` : 'none' }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs md:text-sm font-body font-medium text-foreground/80 text-center">
                {skill.name}
              </span>
            </div>

            
            <div className={`absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-2 rounded-lg 
                            bg-card border border-border shadow-lg z-20
                            transition-opacity duration-200 whitespace-nowrap
                            ${hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-xs font-code font-semibold" style={{ color: skill.color }}>{skill.name}</p>
              <p className="text-xs text-muted-foreground font-body">{skill.desc}</p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
                            w-2 h-2 bg-card border-r border-b border-border rotate-45" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
