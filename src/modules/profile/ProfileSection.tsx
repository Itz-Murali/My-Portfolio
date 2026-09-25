import { useEffect, useState, useRef } from 'react';
import { Skeleton } from '@/core/ui/skeleton';
import mainImage from '/main.png';

const ProfileSection = () => {
  const [typedText, setTypedText] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('https://itz-murali-images.vercel.app/api');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fullText = "Developer • Creator • Innovator";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (!imageLoaded) {
        setImageSrc(mainImage);
      }
    }, 2500);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [imageLoaded]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 pt-8 pb-6 relative">
      
      <div className="relative mb-4 profile-scale-in" style={{ animationDelay: '0.1s' }}>
        <div className="absolute -inset-5 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-40 blur-xl" />
        <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-card shadow-2xl">
          {!imageLoaded && (
            <Skeleton className="w-full h-full rounded-full absolute inset-0" />
          )}
          <img
            src={imageSrc}
            alt="Murali"
            className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleImageLoad}
            onError={() => setImageSrc(mainImage)}
            fetchPriority="high"
          />
        </div>
      </div>

      
      <h1 className="text-6xl md:text-8xl font-display font-normal mb-2 text-gradient tracking-wide profile-scale-in" style={{ animationDelay: '0.3s' }}>
        Murali
      </h1>

      
      <div className="h-8">
        <p className="text-lg md:text-xl font-code text-muted-foreground tracking-wider">
          {typedText}
          <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;