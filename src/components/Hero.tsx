"use client";

import { motion } from "framer-motion";
import type { Easing } from "framer-motion";

export const EASE_SMOOTH: Easing = [0.16, 0.77, 0.47, 0.97];

const floatingTags = [
  { label: "API </> Code", x: "60%", y: "20%", delay: 0 },
  { label: "Intelligence", x: "75%", y: "48%", delay: 0.3 },
  { label: "IP: 125.82.138.238", x: "75%", y: "28%", delay: 0.3 },
  { label: "Code", x: "65%", y: "55%", delay: 0.6 },
  { label: "Development", x: "80%", y: "65%", delay: 1.0 },
  { label: "Debugging", x: "49%", y: "30%", delay: 1.0 },
  { label: "Cloud", x: "52%", y: "75%", delay: 1.3 },
  { label: "Systems", x: "68%", y: "85%", delay: 1.8 },
  { label: "Algorithm", x: "55%", y: "55%", delay: 0.5 },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[85svh] sm:min-h-[90svh] lg:min-h-screen overflow-hidden bg-[#050B18]">
      
      {/* Background Grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] md:bg-[size:60px_60px]" /> */}

      {/* Ambient Glows */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 h-[420px] w-[420px] bg-blue-600/30 blur-[130px] rounded-full"
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 h-[520px] w-[520px] bg-purple-600/30 blur-[160px] rounded-full"
      />

      {/* Floating Tech Tags */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatingTags.map((tag, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -16, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: tag.delay,
            }}
            style={{ top: tag.y, left: tag.x }}
            className="absolute"
          >
            <div className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-xl">
              {tag.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-6 lg:px-8">
        <div className="max-w-2xl pt-8 pb-2 sm:py-12">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18 } },
            }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: EASE_SMOOTH },
                },
              }}
              className="inline-block mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm text-cyan-300 backdrop-blur"
            >
              Triserge - Surge For Intelligence
            </motion.span>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: EASE_SMOOTH },
                },
              }}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-extrabold leading-[1.15] text-white"
            >
              Building{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Intelligent
              </span>
              <br />
              Digital Products
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, ease: EASE_SMOOTH },
                },
              }}
              className="mt-6 max-w-xl text-base sm:text-lg text-slate-300"
            >
              We build scalable software, APIs, and AI-driven platforms using
              modern engineering practices to help businesses grow faster and
              smarter.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, ease: EASE_SMOOTH },
                },
              }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <button className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-medium text-white shadow-lg hover:scale-[1.04] transition">
                Get Started
              </button>

              <button className="rounded-xl border border-white/20 px-8 py-4 font-medium text-white hover:bg-white/5 transition">
                View Services
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
