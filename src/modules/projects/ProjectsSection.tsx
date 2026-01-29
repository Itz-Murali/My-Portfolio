import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import useScrollAnimation from '@/utils/hooks/useScrollAnimation';

const featuredProjects = [
  {
    title: 'Chiku AI Bot',
    description: 'Your smart and feature-packed AI assistant on Telegram with quick information and productivity features.',
    image: 'https://files.catbox.moe/l6jaaq.jpg',
    tags: ['Html', 'TypeScript'],
    liveUrl: 'https://t.me/ChikuAiBot',
    sourceUrl: 'https://github.com/itz-Murali/Chiku-Ai',
    isPrivate: false,
  },
  {
    title: 'Chiku Music',
    description: 'A sleek and dynamic Music Player Website built with React and Vite! Enjoy a vibrant modern themed interface where you can play your favorite songs seamlessly.',
    image: 'https://files.catbox.moe/ntdxvn.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'Typescript'],
    liveUrl: 'https://Chiku-music.vercel.app/',
    sourceUrl: '',
    isPrivate: true,
  },
  {
    title: 'Pokedex Website',
    description: 'Your gateway to the world of Pokémon! Search and explore detailed information about your favorite Pokémon.',
    image: 'https://files.catbox.moe/bfmos4.jpg',
    tags: ['Typescript', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://trainerdex.vercel.app',
    sourceUrl: 'https://github.com/Itz-Murali/Pokedex',
    isPrivate: false,
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 px-4 md:px-8 max-w-6xl mx-auto scroll-fade-up ${isVisible ? 'visible' : ''}`}
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-display text-gradient mb-4">
          My Projects
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            className="group colorful-card overflow-hidden hover:scale-[1.02] transition-all duration-300"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Image */}
            <div className="relative h-70 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent" />
              
              {/* Overlay buttons */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-secondary text-secondary-foreground hover:scale-110 transition-transform ${
                    project.isPrivate ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Github size={18} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-display text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 font-body">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-code rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-3 px-8 py-4 font-display
                     bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full
                     hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <span className="text-lg">Explore All Projects</span>
          <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
