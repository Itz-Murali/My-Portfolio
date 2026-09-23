import useScrollAnimation from '@/utils/hooks/useScrollAnimation';

const RandomSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
//  const gifUrl = `https://itz-murali-images.vercel.app/gif?t=${Date.now()}`;
  const quoteUrl = `https://codequote.vercel.app/api/quote.svg?theme=rosepine`;

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-12 px-4 md:px-8 max-w-4xl mx-auto scroll-fade-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display text-gradient mb-3">
          Random Quote For U
        </h2>
        <p className="font-script text-2xl text-muted-foreground">✨ A little something for your soul ✨</p>
        <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
      </div>

      
        
        <div className="colorful-card p-5 text-center">
          
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
