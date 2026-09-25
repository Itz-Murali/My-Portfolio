import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft, ExternalLink, Github, Lock, Search, Sparkles, Code2, Rocket,
  Database, Webhook, BookOpen, BarChart3, Palette, Music, Server,
} from 'lucide-react';
import {
  SiTypescript, SiJavascript, SiHtml5, SiCss, SiReact, SiVercel,
  SiTailwindcss, SiSvelte, SiCloudflare, SiNextdotjs, SiGithub,
  SiSupabase, SiYoutube,
} from 'react-icons/si';
import AnimatedBackground from '@/core/effects/AnimatedBackground';

const TECH_ICON_MAP: Record<string, { icon: React.ComponentType<{ size?: number; className?: string }>; color: string }> = {
  typescript: { icon: SiTypescript, color: '#3178C6' },
  javascript: { icon: SiJavascript, color: '#F7DF1E' },
  html: { icon: SiHtml5, color: '#E34F26' },
  css: { icon: SiCss, color: '#1572B6' },
  js: { icon: SiJavascript, color: '#F7DF1E' },
  react: { icon: SiReact, color: '#61DAFB' },
  vercel: { icon: SiVercel, color: '#ffffff' },
  tailwindcss: { icon: SiTailwindcss, color: '#06B6D4' },
  svelte: { icon: SiSvelte, color: '#FF3E00' },
  cloudflare: { icon: SiCloudflare, color: '#F38020' },
  'next.js': { icon: SiNextdotjs, color: '#ffffff' },
  github: { icon: SiGithub, color: '#ffffff' },
  'github api': { icon: SiGithub, color: '#ffffff' },
  supabase: { icon: SiSupabase, color: '#3FCF8E' },
  'youtube api': { icon: SiYoutube, color: '#FF0000' },
  sql: { icon: Database, color: '#4479A1' },
  api: { icon: Webhook, color: '#a3a3a3' },
  ai: { icon: Sparkles, color: '#f0abfc' },
  reader: { icon: BookOpen, color: '#a3a3a3' },
  'data viz': { icon: BarChart3, color: '#a3a3a3' },
  ui: { icon: Palette, color: '#a3a3a3' },
  'lucide icons': { icon: Palette, color: '#a3a3a3' },
  'anya apis': { icon: Server, color: '#a3a3a3' },
  saavnxapi: { icon: Music, color: '#1ED760' },
};

function getTechIcon(tag: string) {
  return TECH_ICON_MAP[tag.trim().toLowerCase()] ?? { icon: Code2, color: '#a3a3a3' };
}

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
    description: 'Meet Elaina AI, a graceful and intelligent chatbot inspired by the magic of journeys and stories. Designed to understand you like a companion.',
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
  {
    title: 'Weather App',
    description: 'A modern weather platform with accurate, real-time forecasts and a smooth, elegant interface.',
    tags: ['TypeScript', 'API', 'UI'],
    liveUrl: 'https://weather-web-anya.vercel.app/',
    sourceUrl: 'https://github.com/Itz-Anya/Weather-App',
    isPrivate: false,
    image: 'https://raw.githubusercontent.com/Itz-Anya/Weather-App/main/public/file_0000000051a882089c60b2276f48972c.jpg',
  },
  {
    title: 'Chiku Tube',
    description: 'A distraction-free, AI-powered video discovery app with no infinite scroll and no autoplay traps.',
    tags: ['TypeScript', 'YouTube API'],
    liveUrl: 'https://chiku-tube.vercel.app',
    sourceUrl: 'https://github.com/Itz-Anya/Chiku-Tube',
    isPrivate: false,
    image: 'https://raw.githubusercontent.com/Itz-Anya/Chiku-Tube/main/public/file_0000000068b4820898879604d111f68f.jpg',
  },
  {
    title: 'Anime Hub',
    description: 'Browse trending, seasonal and top-rated anime, search the catalog and keep a local watchlist.',
    tags: ['React', 'TypeScript'],
    liveUrl: 'https://anya-anime-hub.vercel.app',
    sourceUrl: 'https://github.com/Itz-Anya/Anime-Hub',
    isPrivate: false,
    image: 'https://raw.githubusercontent.com/Itz-Anya/Anime-Hub/main/public/file-00000000c1147207ab7733ed4f6ac96f.jpg',
  },
  {
    title: 'Manga Hub',
    description: 'A modern manga reader for discovering and reading your favourite manga.',
    tags: ['TypeScript', 'Reader'],
    liveUrl: 'https://anya-manga-hub.vercel.app/',
    sourceUrl: 'https://github.com/Itz-Anya/Manga-Hub',
    isPrivate: false,
    image: 'https://anya-file-host.vercel.app/cznc5nha4b',
  },
  {
    title: 'Space Atlas',
    description: 'A free, open-source atlas of the observable universe, built entirely on the web.',
    tags: ['Svelte', 'Data Viz'],
    liveUrl: 'https://spaceatlas.vercel.app/',
    sourceUrl: 'https://github.com/Itz-Anya/Space-Atlas',
    isPrivate: false,
    image: 'https://anya-file-host.vercel.app/xg21f43ybm',
  },
  {
    title: 'Anya File Hosting Web',
    description: 'A fast, minimal file and image hosting service built on Next.js, Cloudflare D1, and a clean short-link API.',
    tags: ['TypeScript', 'API', 'Cloudflare'],
    liveUrl: 'https://anya-file-host.vercel.app/',
    sourceUrl: '',
    isPrivate: true,
    image: 'https://anya-file-host.vercel.app/o42ywwvug1',
  },
  {
    title: 'Anya Music Web',
    description: 'Premium themed music streaming web app built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Zustand, and TanStack Query. Powered by the Saavnx API.',
    tags: ['TypeScript', 'SaavnxApi'],
    liveUrl: 'https://anya-music-web.vercel.app/',
    sourceUrl: '',
    isPrivate: true,
    image: 'https://anya-file-host.vercel.app/d2k01s320w',
  },
  {
    title: 'SaavnxApi',
    description: 'Unofficial JioSaavn REST API. Node.js and Express on the backend, Vite and React on the frontend, bundled for Vercel serverless.',
    tags: ['TypeScript', 'Next.js'],
    liveUrl: 'https://saavnx.vercel.app/',
    sourceUrl: '',
    isPrivate: true,
    image: 'https://anya-file-host.vercel.app/84mi4r4xoj',
  },
  {
    title: 'Color Pallet',
    description: 'A fast, open-source color toolkit for developers and designers. Explore colors, build palettes and gradients, convert formats and check contrast. Runs entirely in your browser.',
    tags: ['React', 'Tailwindcss', 'Lucide icons'],
    liveUrl: 'https://devcolors.vercel.app/',
    sourceUrl: 'https://github.com/Itz-Murali/Color-Pallet',
    isPrivate: false,
    image: 'https://files.catbox.moe/66547c.png',
  },
  {
    title: 'Social Downloader',
    description: 'Social Downloader is a single-page React app built around one idea: one field should be enough. Drop in a YouTube link, an Instagram reel, a Pinterest pin, or just plain search words, and the app detects the platform automatically and resolves the original file: video, audio, or image, with no account, no queue, and no watermark tax.',
    tags: ['React', 'Vercel', 'Anya Apis'],
    liveUrl: 'https://social-fetch.vercel.app/',
    sourceUrl: 'https://github.com/Itz-Murali/Social-Downloader-Web',
    isPrivate: false,
    image: 'https://files.catbox.moe/tt4on4.png',
  },
  {
    title: 'Code Quote',
    description: 'CodeQuote renders a random programming quote as a self-contained SVG card on every request. Drop one image tag into your README and it just works no JavaScript, no database, no account.',
    tags: ['Javascript', 'Vercel'],
    liveUrl: 'https://codequote.vercel.app/',
    sourceUrl: 'https://github.com/Itz-Anya/Code-Quote',
    isPrivate: false,
    image: 'https://raw.githubusercontent.com/Itz-Anya/Code-Quote/main/public/og-image.jpg',
  },
  {
    title: 'Github Stats Svg',
    description: 'GitHub Stats is an open-source SVG card API you can embed anywhere GitHub READMEs, personal sites, portfolios, and more. It fetches live data from the GitHub API, renders it into a beautiful card, and returns a pure SVG you can drop into any Markdown image tag.',
    tags: ['TypeScript', 'Vercel', 'Github Api'],
    liveUrl: 'https://anya-github-stats.vercel.app/',
    sourceUrl: 'https://github.com/Itz-Anya/Github-Stats',
    isPrivate: false,
    image: 'https://raw.githubusercontent.com/Itz-Anya/Github-Stats/main/public/file_000000003b20820899cd1557953562e9.jpg',
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
              {allTags.map((tag) => {
                const { icon: TechIcon, color } = getTechIcon(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-code rounded-full border transition-all ${
                      activeTag === tag
                        ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground border-transparent shadow-lg scale-105'
                        : 'bg-card/40 border-border/50 text-muted-foreground hover:border-primary/40 hover:text-primary'
                    }`}
                  >
                    {tag !== 'All' && <TechIcon size={12} style={{ color: activeTag === tag ? 'currentColor' : color }} />}
                    {tag}
                  </button>
                );
              })}
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
                      {project.tags.slice(0, 3).map((tag) => {
                        const { icon: TechIcon, color } = getTechIcon(tag);
                        return (
                          <span
                            key={tag}
                            className="flex items-center gap-1.5 px-2 py-1 text-xs font-code rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            <TechIcon size={12} style={{ color }} />
                            {tag}
                          </span>
                        );
                      })}
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

