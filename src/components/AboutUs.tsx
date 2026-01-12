"use client";

import {
  motion,
  type Variants,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

/* ---------------- Animations ---------------- */

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const wordVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ---------------- Data ---------------- */

const stats = [
  { id: 1, label: "Projects Completed", value: "50", suffix: "+" },
  { id: 2, label: "Team Members", value: "20", suffix: "+" },
  { id: 3, label: "Years Experience", value: "5", suffix: "+" },
  { id: 4, label: "Client Retention", value: "98", suffix: "%" },
];

/* ---------------- 3D Card ---------------- */

function StatCard({ value, suffix, label }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  return (
    <motion.div
      variants={itemVariants}
      onViewportEnter={() => {
        count.set(0);
        animate(count, Number(value), {
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        });
      }}
      viewport={{ once: true }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.05 }}
      className="relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-xl transition will-change-transform"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 hover:opacity-100 transition blur-xl" />

      <div className="relative">
        <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          <motion.span>{rounded}</motion.span>
          {suffix}
        </div>
        <div className="mt-2 text-sm font-medium text-slate-300">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- Component ---------------- */

export default function AboutUs() {
  const heading = "Pioneering Digital Innovation".split(" ");

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#050B18] to-[#050B18]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[300px] -left-[300px] h-[800px] w-[800px] rounded-full border border-blue-500/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-400px] right-[-400px] h-[900px] w-[900px] rounded-full border border-purple-500/10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-16 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {/* Left */}
          <motion.div className="space-y-8" variants={sectionVariants}>
            <motion.span
              variants={itemVariants}
              className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur"
            >
              About Triserge
            </motion.span>

            <motion.h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 overflow-hidden">
              {heading.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-2">
                  <motion.span variants={wordVariants} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h2>

            {/* ✅ Enhanced paragraph */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg text-slate-300"
            >
              We blend cloud-native engineering, AI systems, and modern software
              architecture to build digital platforms that scale insanely well.
              <br />
              <span className="block mt-3 text-slate-400">
                From early-stage startups to enterprise ecosystems, we design,
                build, and evolve products that are fast, secure, and future-ready.
              </span>
            </motion.p>

            {/* ✅ Know More Button */}
            <motion.a
              href="/about"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Know More
              <span className="text-lg">→</span>
            </motion.a>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={sectionVariants}
          >
            {stats.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
