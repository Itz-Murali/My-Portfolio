import useScrollAnimation from '@/utils/hooks/useScrollAnimation';

const RandomSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const gifUrl = `https://itz-murali-images.vercel.app/gif?t=${Date.now()}`;
  const quoteUrl = `https://meera-quote-api.vercel.app/?t=${Date.now()}`;

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-12 px-4 md:px-8 max-w-4xl mx-auto scroll-fade-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display text-gradient mb-3">
          Random Vibes
        </h2>
        <p className="font-script text-2xl text-muted-foreground">✨ A little something for your soul ✨</p>
        <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
      </div>

      <div className="space-y-6">
        
        <div className="colorful-card p-5 text-center">
          <h3 className="text-2xl font-display text-foreground mb-3">
            Random GIF
          </h3>
          <div className="flex justify-center">
            <img
              src={gifUrl}
              alt="Random GIF"
              className="max-w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        
        <div className="colorful-card p-5 text-center">
          <h3 className="text-2xl font-display text-foreground mb-3">
            Random Quote
          </h3>
          <div className="flex justify-center">
            <img
              src={quoteUrl}
              alt="Random Quote"
              className="max-w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RandomSection;
