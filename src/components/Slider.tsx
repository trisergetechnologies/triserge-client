import { motion } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: "Web Dev",
    description: "High-performance websites & apps",
    icon: "🌐",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    title: "Android",
    description: "Sleek mobile apps for Android",
    icon: "📱",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    title: "Digital Marketing",
    description: "Boost online presence & conversions",
    icon: "📈",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI implementations",
    icon: "🤖",
    gradient: "from-rose-500 to-pink-600"
  },
  {
    title: "ML Models",
    description: "Custom machine learning solutions",
    icon: "🧠",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    title: "Cloud",
    description: "Scalable infrastructure solutions",
    icon: "☁️",
    gradient: "from-violet-500 to-purple-600"
  }
];

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemWidth = 280; // Width of each card
  const gap = 16; // Gap between cards
  const totalWidth = (itemWidth + gap) * services.length;

  return (
    <section className="w-full bg-gradient-to-br from-white to-blue-200 py-10 overflow-hidden">
      <div className="relative w-full overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex gap-4"
          initial={{ x: 0 }}
          animate={{ x: -totalWidth }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear'
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`w-[280px] flex-shrink-0 bg-gradient-to-br ${service.gradient} rounded-xl p-5 shadow-lg hover:shadow-xl transition-all`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
              <p className="text-gray-200 text-sm">{service.description}</p>
            </motion.div>
          ))}
          {/* Clone for seamless looping */}
          {services.map((service, index) => (
            <motion.div
              key={`clone-${index}`}
              className={`w-[280px] flex-shrink-0 bg-gradient-to-br ${service.gradient} rounded-xl p-5 shadow-lg hover:shadow-xl transition-all`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
              <p className="text-gray-200 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Carousel;