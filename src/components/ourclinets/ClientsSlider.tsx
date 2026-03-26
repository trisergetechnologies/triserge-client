import { motion } from "framer-motion";

const clients = [
  "Colio",
  "Dmart",
  "Anumati",
  "Aiwedia",
  "Zaykaur",
  "Paridhan",
  "Fun and Earn",
  "VKSK",
];

export default function ClientsSlider() {
  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Trusted by Leading Brands
        </h2>
        <p className="mt-4 text-gray-400">
          Our clients trust us to deliver excellence and innovation.
        </p>
      </div>

      {/* Slider */}
      <div className="mt-16 relative w-full overflow-hidden">

        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="text-xl md:text-2xl font-medium text-gray-500 hover:text-white transition"
            >
              {client}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
