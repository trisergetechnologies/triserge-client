"use client";

import { motion } from "framer-motion";

const skills = [
  "Web Development",
  "App Development",
  "E-commerce Solutions",
  "Learning Platforms",
  "AI Integration",
  "SEO Optimization",
];

const techStack = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "MySQL",
  "AWS",
  "GCP",
  "Redis",
  "Kafka",
  "React Native",
  "Docker",
  "TypeScript",
  "PostgreSQL",
  "Firebase",
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-slate-900 md:py-32 lg:py-40">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-teal-100/40 blur-[120px]" />

        <div className="absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-cyan-100/30 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-teal-500" />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
              Our Expertise
            </p>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Technology.
            <br />

            <span className="text-teal-600">
              Built for business.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
            We combine modern technologies, engineering expertise,
            and business understanding to build scalable digital
            solutions that create measurable business impact.
          </p>
        </motion.div>

        {/* CAPABILITIES */}
        <div className="mt-20 md:mt-28">
          <div className="border-t border-slate-200">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                className="group relative flex items-center justify-between border-b border-slate-200 py-6 transition-all duration-300 hover:bg-teal-50/50 md:py-8"
              >
                {/* Left accent */}
                <div className="absolute left-0 top-0 h-full w-0 bg-teal-500 transition-all duration-300 group-hover:w-1" />

                <div className="flex min-w-0 items-center gap-5 pl-2 md:gap-10 md:pl-4">
                  <span className="font-mono text-xs font-semibold tracking-widest text-teal-600 md:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-medium tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-slate-950 md:text-2xl">
                    {skill}
                  </h3>
                </div>

                <motion.span
                  className="mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-400 transition-all duration-300 group-hover:border-teal-300 group-hover:bg-teal-500 group-hover:text-white md:mr-4 md:h-11 md:w-11"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TECHNOLOGY STACK */}
        <div className="mt-24 border-t border-slate-200 pt-12 md:mt-32 md:pt-16">
          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
                Technology Stack
              </p>

              <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-slate-950 md:text-3xl">
                Technologies
                <br />
                we work with.
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                Modern tools and technologies selected to build
                scalable, secure, and high-performance digital
                products.
              </p>
            </motion.div>

            {/* Technologies */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.035,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -3,
                    }}
                    className="group cursor-default rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition-all duration-300 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 hover:shadow-md"
                  >
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors duration-300 group-hover:bg-teal-500" />

                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-slate-200 pt-12 md:mt-32 md:pt-16"
        >
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-2">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                What we do
              </span>
            </div>

            <div className="md:col-span-10">
              <p className="max-w-5xl text-2xl font-medium leading-relaxed tracking-tight text-slate-800 md:text-4xl lg:text-[42px] lg:leading-[1.2]">
                From strategy to engineering, we bring together
                the capabilities required to turn complex ideas
                into{" "}
                <span className="text-teal-600">
                  reliable digital products.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM ACCENT */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 h-px origin-left bg-gradient-to-r from-teal-500 via-teal-300 to-transparent"
        />
      </div>
    </section>
  );
}