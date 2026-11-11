import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-6 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-lg md:text-xl font-display mb-2 text-gradient">
          🌟 Thank You For Visiting! 🌟
        </h2>
        
        <p className="text-sm text-muted-foreground font-script text-lg mb-3">
          "Keep coding, keep dreaming. The future is yours!"
        </p>
        
        <p className="text-xs text-muted-foreground font-body flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Murali. Made with{' '}
          <Heart size={12} className="text-secondary" fill="currentColor" />{' '}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
