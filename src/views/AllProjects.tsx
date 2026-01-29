import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, Github, Lock } from 'lucide-react';
import AnimatedBackground from '@/core/effects/AnimatedBackground';

const allProjects = [
  {
    title: 'Chiku AI Telegram Bot',
    description: 'Meet Chiku AI Bot – your smart and feature-packed AI assistant, now available on Telegram! From answering questions to providing useful tools.',
    tags: ['Typescript', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://t.me/ChikuAiBot',
    sourceUrl: 'https://github.com/itz-Murali/Chiku-Ai',
    isPrivate: false,
    image: 'https://files.catbox.moe/l6jaaq.jpg',
  },
  {
    title: 'Elaina AI ChatBot',
    description: 'Meet Elaina AI — a graceful and intelligent chatbot inspired by the magic of journeys and stories. Designed to understand you like a companion.',
    tags: ['TypeScript'],
    liveUrl: 'https://t.me/ElainaOpBot',
    sourceUrl: 'https://github.com/Itz-Murali/Elaina-Ai',
    isPrivate: false,
    image: 'https://files.catbox.moe/bhvr1n.jpg',
  },
  {
    title: 'Journey Of Professor Eevee',
    description: 'Discover the magical journey of Professor Eevee and his mysterious companion Euvee. Uncover hidden secrets, explore unknown lands, and witness powerful evolutions.',
    tags: ['HTML', 'CSS', 'JS'],
    liveUrl: 'https://journey-of-professor-eevee.vercel.app',
    sourceUrl: 'https://github.com/Itz-Murali/Journey-Of-Professor-Eevee',
    isPrivate: false,
    image: 'https://files.catbox.moe/yrzw5t.jpg',
  },
  {
    title: 'Chiku Web Ai',
    description: 'An Advanced Ai Chatbot With Image generation, text to speech, nekos gallery and lot of more features, Made With Using Vite .',
    tags: ['Typescript', 'HTML', 'CSS', 'JS'],
    liveUrl: 'https://Chiku-ai.vercel.app',
    sourceUrl: 'https://github.com/Itz-Murali/Chiku',
    isPrivate: false,
    image: 'https://files.catbox.moe/f3kvmj.jpg',
  },
  {
    title: 'Chiku Music',
    description: 'A sleek and dynamic Music Player Website built with React and Vite! Enjoy a vibrant modern themed interface where you can play your favorite songs seamlessly.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Typescript'],
    liveUrl: 'https://Chiku-music.vercel.app/',
    sourceUrl: '',
    isPrivate: true,
    image: 'https://files.catbox.moe/ntdxvn.jpg',
  },
  {
    title: 'Image Generator Website',
    description: 'A Simple and creative tool built with JavaScript! Generate stunning images effortlessly with just a click.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://itz-murali.github.io/Image-Gen/',
    sourceUrl: 'https://github.com/Itz-Murali/Image-Gen',
    isPrivate: false,
    image: 'https://files.catbox.moe/buojk2.jpg',
  },
  {
    title: 'Neko Image Generator',
    description: 'Your ultimate source for adorable neko images! Instantly generate and explore a collection of cute and stylish neko artwork.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://itz-murali.github.io/Neko/',
    sourceUrl: 'https://github.com/Itz-Murali/Neko',
    isPrivate: false,
    image: 'https://files.catbox.moe/b8f9zj.jpg',
  },
  {
    title: 'Suzume Movie Fan Page',
    description: 'A tribute to Makoto Shinkai\'s breathtaking masterpiece, celebrating the beauty, emotion, and adventure of Suzume no Tojimari.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://itz-murali.github.io/Suzume/',
    sourceUrl: 'https://github.com/Itz-Murali/Suzume',
    isPrivate: false,
    image: 'https://files.catbox.moe/s8gidm.jpg',
  },
  {
    title: 'Pokedex Website',
    description: 'Your gateway to the world of Pokémon! Search and explore detailed information about your favorite Pokémon.',
    tags: ['HTML', 'CSS', 'Typescript'],
    liveUrl: 'https://trainerdex.vercel.app',
    sourceUrl: 'https://github.com/Itz-Murali/Pokedex',
    isPrivate: false,
    image: 'https://files.catbox.moe/bfmos4.jpg',
  },
];

const AllProjects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects | Murali Portfolio</title>
        <meta name="description" content="Explore my collection of projects built with passion, creativity, and cutting-edge technologies." />
      </Helmet>

      <AnimatedBackground />
      
      <main className="relative z-10 min-h-screen py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="font-code">Back to Home</span>
          </Link>

          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-4">
              All Projects
            </h1>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              ✨ These are crafted with passion and creativity. Some are open-source, while others are unique creations built from scratch. 🚀
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group glass-card overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-68 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
                </div>

                <div className="p-5">
                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-code rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs font-code rounded-full bg-muted text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg
                               bg-primary/20 border border-primary/30 text-primary
                               hover:bg-primary hover:text-primary-foreground transition-all font-code text-sm"
                    >
                      <ExternalLink size={16} />
                      View
                    </a>
                    <a
                      href={project.isPrivate ? '#' : project.sourceUrl}
                      target={project.isPrivate ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg
                                 bg-secondary/20 border border-secondary/30 text-secondary
                                 transition-all font-code text-sm
                                 ${project.isPrivate 
                                   ? 'opacity-50 cursor-not-allowed' 
                                   : 'hover:bg-secondary hover:text-secondary-foreground'}`}
                      onClick={(e) => project.isPrivate && e.preventDefault()}
                    >
                      {project.isPrivate ? <Lock size={16} /> : <Github size={16} />}
                      {project.isPrivate ? 'Private' : 'Source'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-16 py-8 border-t border-border/30">
            <p className="text-muted-foreground font-body">
              🚀 Thank You For Exploring! 🚀
            </p>
            <p className="text-sm text-muted-foreground/70 mt-2 font-body">
              © {new Date().getFullYear()} Murali. All Rights Reserved.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default AllProjects;
