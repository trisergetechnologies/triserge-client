import { motion } from 'framer-motion';

// Animation variants remain same
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring', 
      stiffness: 100,
      damping: 20
    }
  }
};

const stats = [
  { id: 1, label: 'Projects Completed', value: '250', suffix: '+' },
  { id: 2, label: 'Team Members', value: '50', suffix: '+' },
  { id: 3, label: 'Years Experience', value: '8', suffix: '' },
  { id: 4, label: 'Client Retention', value: '95', suffix: '%' },
];

interface StatsType {
  id: number;
  label: string;
  value: string;
  suffix: string;
}

const AboutUs = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-blue-50 py-12 md:py-24 overflow-hidden">
      {/* Light theme gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-cyan-300/20" />

      {/* Light background pattern */}
      <div className="absolute inset-0 opacity-15 pattern-grid-lg text-slate-300/30" />

      {/* Animated radial gradient */}
      <motion.div 
        className="absolute left-1/2 top-0 -ml-[400px] w-[800px] h-[800px] bg-gradient-radial from-blue-200/10 to-transparent rounded-full"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Text Content */}
          <motion.div 
            className="space-y-4 md:space-y-8"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Pioneering Digital Innovation
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-600"
              variants={itemVariants}
            >
              At Triserge, we combine cutting-edge technology with deep industry expertise 
              to deliver transformative digital solutions. Founded in 2015, we've been 
              at the forefront of enterprise software development and AI integration.
            </motion.p>

            <motion.ul 
              className="space-y-6"
              variants={sectionVariants}
            >
              <motion.li 
                className="flex items-center space-x-4 group"
                variants={itemVariants}
              >
                <div className="relative h-12 w-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
                  <span className="text-blue-600 text-lg font-bold">01</span>
                </div>
                <span className="text-slate-600">Enterprise-Grade Solutions</span>
              </motion.li>
              
              <motion.li 
                className="flex items-center space-x-4 group"
                variants={itemVariants}
              >
                <div className="relative h-12 w-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
                  <span className="text-blue-600 text-lg font-bold">02</span>
                </div>
                <span className="text-slate-600">95% On-Time Delivery</span>
              </motion.li>
              
              <motion.li 
                className="flex items-center space-x-4 group"
                variants={itemVariants}
              >
                <div className="relative h-12 w-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
                  <span className="text-blue-600 text-lg font-bold">03</span>
                </div>
                <span className="text-slate-600">Dedicated Team Approach</span>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-2"
            variants={itemVariants}
          >
            {stats.map((stat: StatsType) => (
              <motion.div 
                key={stat.id}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-blue-400/40 transition-all duration-300 shadow-sm hover:shadow-md"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {stat.value}{stat.suffix}
                </div>
                <div className="mt-2 text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute left-1/2 top-0 -ml-[400px] w-[800px] h-[800px] bg-gradient-radial from-blue-200/10 to-transparent rounded-full" />
      </motion.div>

      {/* Additional top fade gradient */}
      {/* <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-white via-white/30 to-transparent z-0" /> */}
    </section>
  );
};

export default AboutUs;