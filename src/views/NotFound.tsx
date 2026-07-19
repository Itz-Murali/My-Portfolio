import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, Ghost, ArrowLeft } from 'lucide-react';
import AnimatedBackground from '@/core/effects/AnimatedBackground';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Murali Portfolio</title>
        <meta name="description" content="Oops! The page you're looking for doesn't exist." />
      </Helmet>

      <AnimatedBackground />

      <main className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-xl w-full text-center">
          <div className="colorful-card p-8 sm:p-12 backdrop-blur-md">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 blur-3xl bg-primary/40 rounded-full animate-pulse" />
                <Ghost className="relative w-24 h-24 sm:w-32 sm:h-32 text-primary animate-float" />
              </div>
            </div>

            <h1 className="text-7xl sm:text-9xl font-display font-bold text-gradient mb-2">
              404
            </h1>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary via-secondary to-coral rounded-full mb-6" />

            <h2 className="text-2xl sm:text-3xl font-display text-foreground mb-3">
              Lost in the Void
            </h2>
            <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
              The page you're looking for has drifted into the unknown. Let's get you back to familiar territory.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                           bg-gradient-to-r from-primary to-secondary text-primary-foreground font-display
                           hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <Home size={18} />
                Back to Home
              </Link>
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                           bg-secondary/20 border border-secondary/40 text-secondary font-display
                           hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              >
                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
