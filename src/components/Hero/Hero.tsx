import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-[#050505] text-white flex items-center overflow-hidden font-sans selection:bg-indigo-500/30">
      
      {/* 1. Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Main Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#1a1a1a_0%,transparent_70%)] md:bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,transparent_100%)]" />
        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-0 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Typography */}
        <div className="lg:col-span-8 flex flex-col justify-center">
         

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight"
          >
            Crafting <span className="italic font-serif text-gray-400">Digital</span> <br className="hidden sm:block" />
            <span className="font-semibold bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
              Architectures.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 md:mt-8 text-gray-400 max-w-md md:max-w-lg text-base md:text-xl leading-relaxed font-light"
          >
            We strip away the noise to build high-performance interfaces 
            that redefine how users interact with your brand.
            We strip away the noise to build high-performance interfaces 
            that redefine how users interact with your brand.
          </motion.p>

          {/* Mobile CTA (Optional but recommended for UX) */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.7 }}
             className="mt-10 lg:hidden"
          >
            
          </motion.div>
        </div>

        {/* Right Column: Decorative Element */}
        {/* On mobile, this becomes a subtle floating background element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="lg:col-span-4 flex justify-center lg:justify-end items-center"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-96 border border-white/10 rounded-full flex items-center justify-center p-4 backdrop-blur-[2px]">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-t border-indigo-500/40 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-b border-white/5 rounded-full"
              />
              <p className="text-center text-[9px] md:text-xs tracking-[0.4em] text-gray-400 uppercase leading-loose">
                Innovation <br /> • <br /> Design <br /> • <br /> Strategy
              </p>
          </div>
        </motion.div>
      </div>

      {/* 2. Bottom "Trust Bar" - Responsive layout */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 md:bottom-12 left-6 right-6 flex flex-row justify-between items-center border-t border-white/5 pt-8"
      >
        <div className="flex items-center gap-2 group cursor-default">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">
            Scroll to explore
          </span>
        </div>

        <div className="hidden sm:flex gap-6 md:gap-8">
          {["Strategy", "Design", "Dev"].map((item) => (
            <span key={item} className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-tighter">
              {item}
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  );
}