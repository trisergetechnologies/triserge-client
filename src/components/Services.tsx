import { useEffect, useRef } from 'react';

const features = [
  {
    title: 'Saas Product Development',
    description: 'Scalable, secure SaaS product development tailored for rapid business growth.',
    icon: (
      <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Support and Maintenance',
    description: 'Reliable, ongoing support and maintenance ensuring optimal software performance.',
    icon: (
      <svg className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Automated Workflows',
    description: 'Streamline operations with intelligent process automation',
    icon: (
      <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'Boost online visibility, drive traffic, and enhance brand through SEO.',
    icon: (
      <svg className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Cloud Storage',
    description: 'Secure and scalable cloud storage solutions',
    icon: (
      <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Product Development Consulting',
    description: 'Guiding innovative product ideas into successful, scalable, and market-ready solutions.',
    icon: (
      <svg className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollSpeed = 50; // px per second
    let lastTimestamp = 0;

    const animateScroll = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isInteractingRef.current) {
        scrollPositionRef.current += (scrollSpeed * deltaTime) / 1000;

        const maxScroll = container.scrollWidth - container.clientWidth;
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }

        container.scrollTo({
          left: scrollPositionRef.current,
          behavior: 'auto',
        });
      }

      animationRef.current = requestAnimationFrame(animateScroll);
    };

    const handleInteractionStart = () => {
      isInteractingRef.current = true;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleInteractionEnd = () => {
      isInteractingRef.current = false;
      lastTimestamp = 0;
      scrollPositionRef.current = container.scrollLeft;
      animationRef.current = requestAnimationFrame(animateScroll);
    };

    // Mouse events
    container.addEventListener('mouseenter', handleInteractionStart);
    container.addEventListener('mouseleave', handleInteractionEnd);

    // Touch events
    container.addEventListener('touchstart', handleInteractionStart, { passive: true });
    container.addEventListener('touchend', handleInteractionEnd, { passive: true });
    container.addEventListener('touchcancel', handleInteractionEnd, { passive: true });

    animationRef.current = requestAnimationFrame(animateScroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      
      // Clean up mouse events
      container.removeEventListener('mouseenter', handleInteractionStart);
      container.removeEventListener('mouseleave', handleInteractionEnd);
      
      // Clean up touch events
      container.removeEventListener('touchstart', handleInteractionStart);
      container.removeEventListener('touchend', handleInteractionEnd);
      container.removeEventListener('touchcancel', handleInteractionEnd);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-16 overflow-hidden">
      <div className="absolute top-4 right-6 text-slate-500 text-sm hidden sm:block">
        Scroll to see more →
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Key Features
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Explore powerful tools built to accelerate your business
          </p>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto gap-6 px-1 pb-4 scrollbar-hide touch-pan-x"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(100vw-4rem)] sm:w-[40vw] lg:w-[calc((100%-3rem)/3)] bg-white border border-slate-200 hover:border-blue-300 shadow-md hover:shadow-lg transition-all rounded-2xl p-6"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}