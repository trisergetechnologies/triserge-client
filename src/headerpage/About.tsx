// src/pages/About.tsx

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-[#616161] text-white px-6 py-40 selection:bg-teal-500/30">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About <span className="text-teal-400">Us</span>
          </h1>
          <div className="h-1.5 w-24 bg-teal-400 rounded-full mb-10"></div>

          <div className="grid md:grid-cols-2 gap-10">
            <p className="text-xl leading-relaxed text-slate-200">
              We are a modern digital solutions company focused on building
              <span className="text-white font-semibold"> scalable platforms</span>,
              high-performance applications, and intelligent systems that help
              businesses thrive in the digital era.
            </p>

            <p className="text-lg leading-relaxed text-slate-300 border-l-2 border-slate-500 pl-6 italic">
              From startups to enterprises, we design, develop, and deploy
              solutions that combine performance, user experience, and
              long-term scalability.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "10+", label: "Projects Delivered" },
            { value: "9+", label: "Happy Clients" },
            { value: "2+", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-black/30 border border-[#6b6b6b] rounded-xl text-center"
            >
              <h3 className="text-2xl font-bold text-teal-400">{item.value}</h3>
              <p className="text-sm text-slate-300 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Pillars */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-black/30 border border-[#6b6b6b] rounded-2xl backdrop-blur hover:border-teal-400/50 transition"
          >
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="font-bold text-2xl mb-3">Mission</h3>
            <p className="text-slate-300 leading-relaxed">
              To deliver high-impact digital solutions that empower businesses
              to grow, innovate, and lead in their industries.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 bg-black/30 border border-[#6b6b6b] rounded-2xl backdrop-blur hover:border-teal-400/50 transition"
          >
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="font-bold text-2xl mb-3">Vision</h3>
            <p className="text-slate-300 leading-relaxed">
              To become a trusted global technology partner known for
              innovation, reliability, and excellence.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-black/30 border border-[#6b6b6b] rounded-2xl backdrop-blur hover:border-teal-400/50 transition"
          >
            <div className="text-3xl mb-4">💡</div>
            <h3 className="font-bold text-2xl mb-3">Values</h3>
            <ul className="text-slate-300 space-y-2 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                Innovation & Creativity
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                Quality & Performance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                Transparency & Trust
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                Client-Centric Approach
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Closing Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building the Future, Together
          </h2>
          <p className="text-slate-300 leading-relaxed">
            We don’t just build products — we build long-term partnerships.
            Our goal is to help your business scale faster, operate smarter,
            and stay ahead in an ever-evolving digital landscape.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
