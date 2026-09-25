import useScrollAnimation from '@/utils/hooks/useScrollAnimation';
import { Github, Eye, Trophy } from 'lucide-react';

const GitHubStats = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-8 max-w-5xl mx-auto scroll-fade-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 group cursor-default">
          <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
            <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-display text-gradient">
            GitHub Stats
          </h2>
        </div>
        <div className="w-16 sm:w-20 md:w-24 h-1 mx-auto bg-gradient-to-r from-primary via-secondary to-coral rounded-full mb-4 sm:mb-6" />
      </div>

      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="group colorful-card px-3 sm:px-4 md:px-6 py-2 sm:py-3 inline-flex items-center gap-2 sm:gap-3 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-default">
          <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
          <span className="text-muted-foreground font-elegant text-sm sm:text-base md:text-lg italic">Profile Views:</span>
          <img
            src="https://komarev.com/ghpvc/?username=Itz-Murali&label=&color=8b5cf6&style=flat"
            alt="Profile views"
            className="h-4 sm:h-5 md:h-6"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="group relative colorful-card p-3 sm:p-4 overflow-hidden hover:scale-[1.01] transition-all duration-300 hover:shadow-xl group-hover:shadow-primary/30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          <div className="relative z-10">
            <h3 className="text-base sm:text-lg md:text-xl font-display text-foreground mb-3 sm:mb-4 text-center flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Overview
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
            </h3>
            <div className="rounded-lg overflow-hidden bg-background/50 border border-border/50 group-hover:border-primary/30 transition-colors duration-300 flex justify-center">
              <img
                src="https://anya-github-stats.vercel.app/api/stats?username=Itz-Murali&theme=neon_dreams&border_radius=14&hide=prs%2Cissues%2Creviews%2Cgists%2Cwatchers"
                alt="GitHub Overview Stats"
                className="w-full h-auto max-w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 group relative colorful-card p-4 sm:p-5 md:p-6 overflow-hidden hover:shadow-xl hover:shadow-coral/20 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-lavender/10 to-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

        <div className="relative z-10">
          <h3 className="text-base sm:text-lg md:text-xl font-display text-foreground mb-3 sm:mb-4 text-center flex items-center justify-center gap-2">
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-coral group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            Trophies
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-coral group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />
          </h3>
          <div className="flex justify-center overflow-x-auto scrollbar-thin rounded-lg border border-border/50 group-hover:border-coral/30 transition-colors duration-300 bg-background/50 p-2">
            <img
              src="https://github-trophies.vercel.app/?username=Itz-Murali&theme=radical&no-frame=false&no-bg=false&margin-w=4"
              alt="GitHub Trophies"
              className="max-w-full h-auto min-w-[280px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
