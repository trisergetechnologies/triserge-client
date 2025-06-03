import { motion } from "framer-motion";

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 0.77, 0.47, 0.97],
    }
  },
};

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(147,197,253,0.2)_0%,_rgba(255,255,255,0)_75%)]"></div>
        <div className="absolute left-1/2 top-0 -ml-[400px] w-[800px] h-[800px] bg-gradient-radial from-blue-300/20 to-transparent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 0.5
                }
              }
            }}
          >
            <motion.h1 
              variants={textVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mt-40 mb-6"
            >
              Transform Your Digital Future
            </motion.h1>
            
            <motion.p 
              variants={textVariants}
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Leverage cutting-edge technology solutions to accelerate your business growth and stay ahead in the digital revolution. We are here to simplify technology and amplify the impact you want to build.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={textVariants}
              transition={{ delay: 1.0, duration: 1.5 }}
            >
              <motion.button 
                whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.8 } }}
                transition={{ duration: 1.0 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Book Meeting
              </motion.button>
              <motion.button 
                whileHover={{ borderColor: "#0284c7", color: "#0284c7", transition: { duration: 0.3 } }}
                transition={{ duration: 1.0 }}
                className="border border-slate-300 text-slate-600 px-8 py-4 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Tech Stack Logos */}
            <motion.div 
              className="mt-12 flex justify-center lg:justify-start space-x-8 opacity-75"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.75, y: 0 }}
              transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
            >
              <svg className="h-8 w-8 text-slate-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0l-9 5v10l9 5 9-5V5l-9-5zM2 6.5l7 3.87v7.74L2 14.25V6.5zm9 11.63l-7-3.87v-7.6L11 6.5v11.63zm1-11.63L22 6.5v7.75l-7 3.87V6.5z"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Graphic/Image Section */}
          <div className="relative hidden lg:block">
            <div className="relative bg-gradient-to-br from-blue-100/50 to-cyan-100/50 p-1 rounded-xl backdrop-blur-xl border border-slate-200">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="h-96 bg-gradient-to-br from-blue-50/50 to-cyan-100/50 animate-pulse"></div>
              </div>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-cyan-300/30 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 z-0 opacity-15 pattern-grid-lg text-slate-300/30" />
      <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-white via-white/0 to-transparent z-0" />
    </section>
  );
};

export default Hero;