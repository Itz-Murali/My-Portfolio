import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, Github, Lock, Search, Sparkles, Code2, Rocket } from 'lucide-react';
import AnimatedBackground from '@/core/effects/AnimatedBackground';

const allProjects = [
  {
    title: 'Sylveon Music Bot',
    description: 'Turn your Telegram group into a live music room where everyone listens together perfectly synced, smooth, and immersive. Experience a new era of enjoying music with friends in real-time with cool ai agent features',
    tags: ['Typescript', 'Supabase', 'Ai', 'SQL'],
    liveUrl: 'https://t.me/SylveonMusicBot',
    sourceUrl: '',
    isPrivate: true,
    image: 'https://files.catbox.moe/r9lawy.jpg',
  },
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
    title: 'Neko Image Generator',
    description: 'Your ultimate source for adorable neko images! Instantly generate and explore a collection of cute and stylish neko artwork.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://TheMeowClub.github.io/Neko/',
    sourceUrl: 'https://github.com/TheMeowClub/Neko',
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
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string>('All');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allProjects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ['All', ...Array.from(tags).sort()];
  }, []);

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesTag = activeTag === 'All' || p.tags.includes(activeTag);
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesTag && matchesSearch;
    });
  }, [search, activeTag]);

  const stats = [
    { icon: Rocket, label: 'Total Projects', value: allProjects.length, color: 'text-primary' },
    { icon: Code2, label: 'Open Source', value: allProjects.filter((p) => !p.isPrivate).length, color: 'text-secondary' },
    { icon: Sparkles, label: 'Live Now', value: allProjects.length, color: 'text-coral' },
  ];

  return (
    <>
      <Helmet>
        <title>Projects | Murali Portfolio</title>
        <meta name="description" content="Explore my collection of projects built with passion, creativity, and cutting-edge technologies." />
      </Helmet>

      <AnimatedBackground />

      <main className="relative z-10 min-h-screen py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="font-code">Back to Home</span>
          </Link>

          <div className={`text-center mb-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <Sparkles size={14} className="text-primary animate-pulse" />
              <span className="text-xs font-code text-primary uppercase tracking-wider">My Work</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-4">
              All Projects
            </h1>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-primary via-secondary to-coral rounded-full mb-6" />
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              ✨ Crafted with passion and creativity. Some are open-source, others are unique creations built from scratch. 🚀
            </p>
          </div>

          <div className={`grid grid-cols-3 gap-3 sm:gap-6 mb-10 max-w-3xl mx-auto transition-all duration-1000 delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((s) => (
              <div key={s.label} className="colorful-card p-3 sm:p-5 text-center group hover:scale-105 transition-transform">
                <s.icon className={`w-5 h-5 sm:w-7 sm:h-7 mx-auto mb-2 ${s.color} group-hover:scale-110 transition-transform`} />
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">{s.value}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground font-code uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className={`mb-8 space-y-4 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects, tech, or keywords..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-card/60 backdrop-blur-md border border-border/60
                           focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20
                           text-sm font-body text-foreground placeholder:text-muted-foreground transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1.5 text-xs font-code rounded-full border transition-all ${
                    activeTag === tag
                      ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground border-transparent shadow-lg scale-105'
                      : 'bg-card/40 border-border/50 text-muted-foreground hover:border-primary/40 hover:text-primary'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-12 h-12 mx-auto text-muted-foreground/40 mb-3" />
              <p className="text-muted-foreground font-body">No projects match your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, index) => (
                <div
                  key={project.title}
                  className={`group glass-card overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${Math.min(index * 50, 400)}ms` }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    {project.isPrivate && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/60">
                        <Lock size={10} className="text-coral" />
                        <span className="text-[10px] font-code text-coral uppercase">Private</span>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-2">
                      {project.description}
                    </p>

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
          )}

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
