import { motion } from "framer-motion";

const clients = [
  "Colio", "Dreamart", "Annumati", "Aiwedia",
  "Zaykaur", "Paridhan", "Fun and Earn", "VKSK","RK_Associates_website"
];

export default function ClientsSlider() {
  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
        >
          Trusted by Growing Businesses
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Our clients trust us to deliver excellence and innovation across every digital touchpoint.
        </motion.p>
      </div>

      {/* Slider Container with Gradient Masks */}
      <div className="relative flex overflow-hidden group">
        {/* Left & Right Fades (Glass effect) */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 md:gap-24 items-center whitespace-nowrap px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 30, // Slower is usually classier
            ease: "linear" 
          }}
          // Pause on hover is a nice UX touch
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...clients, ...clients].map((client, index) => (
            <span
              key={index}
              className="text-2xl md:text-4xl font-bold text-gray-600 hover:text-white transition-colors duration-300 cursor-default select-none tracking-tight"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}