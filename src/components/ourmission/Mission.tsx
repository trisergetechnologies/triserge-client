"use client";

import { motion } from "framer-motion";

interface MissionItem {
  title: string;
  desc: string;
}

const missionData: MissionItem[] = [
  {
    title: "Deliver Excellence",
    desc: "We aim to deliver high-quality, reliable, and scalable digital solutions that create real business impact. Every project we build is focused on performance, usability, and long-term value.",
  },
  {
    title: "Empower Businesses",
    desc: "We empower startups and enterprises with modern, affordable technology solutions. Our goal is to bridge the gap between offline and digital, helping businesses scale efficiently.",
  },
  {
    title: "Drive Innovation",
    desc: "We embrace innovation and adaptability by exploring new technologies and ideas, ensuring our clients stay competitive and future-ready in a rapidly evolving digital world.",
  },
  {
    title: "Build Trust & Transparency",
    desc: "We believe in honest communication, clear processes, and long-term partnerships. Our clients are always informed, involved, and confident in every step of their digital journey.",
  },
  {
    title: "Focus on User Experience",
    desc: "We design with users at the center of everything. By combining intuitive interfaces with seamless performance, we create digital products that are functional and enjoyable to use.",
  },
];

const missionImages = [
  {
    src: "heimage/people.jpg",
    alt: "Deliver Excellence",
  },
  {
    src: "heimage/trust.jpg",
    alt: "Focus on User Experience",
  },
];

export default function Mission() {
  return (
    <section className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl"
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-indigo-600" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-400">
              Our Mission
            </p>
          </div>

          <h2 className="text-5xl font-semibold tracking-[-0.05em] text-gray-900 md:text-7xl lg:text-[7.5rem] lg:leading-[0.9]">
            Building
            <br />
            <span className="text-teal-400">
              with purpose.
            </span>
          </h2>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-lg leading-8 text-gray-500 md:text-xl">
              What drives us every day to build, innovate, and create
              meaningful impact through technology.
            </p>

            <div className="hidden shrink-0 md:block">
              <p className="text-right text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                05
              </p>

              <p className="mt-1 text-sm text-gray-400">
                Principles that guide us
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            MISSION STATEMENT / FEATURED BLOCK
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.15 }}
          className="mt-20 md:mt-28"
        >
          <div className="grid overflow-hidden rounded-[2rem] bg-[#111827] md:grid-cols-12">

            {/* TEXT SIDE */}
            <div className="relative flex min-h-[500px] flex-col justify-between p-8 md:col-span-7 md:p-12 lg:p-16">

              {/* Decorative element */}
              <div className="absolute right-8 top-8 md:right-12 md:top-12">
                <div className="relative h-16 w-16">
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                  <div className="absolute inset-2 rounded-full border border-white/10" />
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400" />
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-400">
                  The Triserge Mission
                </p>

                <h3 className="mt-8 max-w-2xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-white md:text-5xl lg:text-6xl">
                  Turn technology into
                  <span className="text-teal-400">
                    {" "}
                    meaningful progress.
                  </span>
                </h3>
              </div>

              <div className="mt-16">
                <div className="mb-5 h-px w-full bg-white/10" />

                <div className="flex items-end justify-between gap-8">
                  <p className="max-w-md text-sm leading-6 text-white/50 md:text-base">
                    We combine thoughtful design, strong engineering, and
                    practical technology to help businesses move forward.
                  </p>

                  <span className="hidden text-5xl font-light tracking-tight text-white/10 md:block">
                    01
                  </span>
                </div>
              </div>
            </div>

            {/* IMAGE SIDE */}
            <div className="group relative min-h-[420px] overflow-hidden md:col-span-5 md:min-h-[500px]">
              <img
                src={missionImages[0].src}
                alt={missionImages[0].alt}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1400ms]
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Our approach
                </p>

                <p className="mt-2 text-xl font-medium text-white">
                  Technology should create progress, not complexity.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* =========================================================
            MISSION PRINCIPLES
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mt-28 md:mt-40"
        >
          {/* SECTION HEADER */}

          <div className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                What guides us
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-gray-900 md:text-5xl">
                Five principles.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-400 md:text-right">
              These principles influence how we build products, work with
              clients, and make decisions every day.
            </p>
          </div>

          {/* PRINCIPLES */}

          <div className="grid gap-4 md:grid-cols-2">

            {missionData.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-7
                  transition-all
                  duration-500
                  hover:border-text-teal-400
                  hover:shadow-[0_20px_60px_rgba(79,70,229,0.08)]
                  md:p-9
                  ${
                    index === 0
                      ? "md:col-span-2"
                      : ""
                  }
                `}
              >

                {/* TOP */}

                <div className="flex items-start justify-between gap-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold tracking-[0.1em] text-indigo-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xl text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-indigo-600">
                    ↗
                  </span>
                </div>

                {/* CONTENT */}

                <div className="mt-10 max-w-3xl">
                  <h4 className="text-2xl font-semibold tracking-[-0.025em] text-gray-900 transition-colors duration-300 group-hover:text-teal-400 md:text-3xl">
                    {item.title}
                  </h4>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500">
                    {item.desc}
                  </p>
                </div>

                {/* BOTTOM LINE */}

                <div className="mt-8 h-px w-full bg-gray-100">
                  <div className="h-px w-0 bg-indigo-600 transition-all duration-500 group-hover:w-20" />
                </div>

              </motion.article>
            ))}

          </div>
        </motion.div>

        {/* =========================================================
            SECOND VISUAL STATEMENT
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-24 md:mt-36"
        >
          <div className="grid gap-6 md:grid-cols-12">

            {/* IMAGE */}

            <div className="group relative min-h-[420px] overflow-hidden rounded-[2rem] md:col-span-5 md:min-h-[520px]">
              <img
                src={missionImages[1].src}
                alt={missionImages[1].alt}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1400ms]
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute left-7 top-7">
                <span className="rounded-full border border-white/20 bg-black/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  05 / 05
                </span>
              </div>

              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  User First
                </p>

                <h3 className="mt-2 text-2xl font-medium text-white md:text-3xl">
                  Experience is part of the product.
                </h3>
              </div>
            </div>

            {/* STATEMENT */}

            <div className="flex flex-col justify-between rounded-[2rem] bg-gray-50 p-8 md:col-span-7 md:p-12 lg:p-16">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                  Our belief
                </p>

                <h3 className="mt-8 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-gray-900 md:text-5xl lg:text-6xl">
                  The best technology
                  <br />
                  <span className="text-teal-400">
                    feels simple.
                  </span>
                </h3>
              </div>

              <div className="mt-16">
                <div className="mb-6 h-px w-full bg-gray-200" />

                <div className="flex items-center justify-between">
                  <p className="max-w-md text-sm leading-6 text-gray-500">
                    We believe great digital products should remove friction,
                    solve real problems, and feel natural to the people using
                    them.
                  </p>

                  <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-gray-300 md:flex">
                    <span className="text-lg text-gray-700">
                      ↗
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* =========================================================
            CLOSING STATEMENT
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-28 border-t border-gray-200 pt-12 md:mt-40 md:pt-16"
        >
          <div className="grid gap-8 md:grid-cols-12">

            <div className="md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Our Purpose
              </p>
            </div>

            <div className="md:col-span-9">
              <p className="max-w-5xl text-3xl font-medium leading-tight tracking-[-0.03em] text-gray-900 md:text-5xl lg:text-6xl">
                Technology with purpose.
                <span className="text-teal-400">
                  {" "}
                  Innovation with impact.
                </span>
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}