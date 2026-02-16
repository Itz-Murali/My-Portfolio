import { Mail, Github, Send, Instagram, Code } from 'lucide-react';
import useScrollAnimation from '@/utils/hooks/useScrollAnimation';

const socialLinks = [
  { name: 'Telegram', icon: Send, url: 'https://t.me/ChikuBots', color: '#0088cc' },
  { name: 'Email', icon: Mail, url: 'mailto:Itz-Murali@outlook.com', color: '#ea4335' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/Itz-Murali', color: '#6e5494' },
  { name: 'CodePen', icon: Code, url: 'https://codepen.io/MysticalDevs', color: '#47cf73' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/Murali.Techno', color: '#E1306C' },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-4 md:px-8 max-w-4xl mx-auto scroll-rotate ${isVisible ? 'visible' : ''}`}
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display text-gradient mb-4">
          Contact Me
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />
        <p className="text-muted-foreground max-w-xl mx-auto font-body text-lg">
          🚀 I'm always open to exciting collaborations and meaningful conversations.
          Whether you have a project in mind or just want to say hello, feel free to reach out! 💡
        </p>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className="w-16 h-16 md:w-18 md:h-18 rounded-2xl flex items-center justify-center
                         colorful-card hover:scale-110 transition-all duration-300"
              style={{
                '--hover-color': link.color,
              } as React.CSSProperties}
            >
              <link.icon
                size={26}
                className="transition-colors duration-200"
                style={{ color: link.color }}
              />
            </div>
            
            {/* Label */}
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-body font-medium 
                           text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {link.name}
            </span>
          </a>
        ))}
      </div>

      {/* Decorative text */}
      <div className="mt-16 text-center">
        <p className="text-2xl font-script tracking-wide text-muted-foreground">
          Let's build something{' '}
          <span className="text-primary font-semibold">amazing</span>{' '}
          together!
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
