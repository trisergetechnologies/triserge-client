"use client";

import { motion } from "framer-motion";

const clients = [
  "Colio",
  "Dreamart",
  "Annumati",
  "Aiwedia",
  "Zaykaur",
  "Paridhan",
  "Fun and Earn",
  "VKSK",
  "RK Associates",
];

export default function ClientsSlider() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-indigo-600" />

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
              Our Clients
            </p>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-6xl">
            Trusted by
            <br />
            <span className="text-teal-400">
              growing businesses.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-500">
            We work with businesses across industries to
            design, build, and scale meaningful digital
            experiences.
          </p>
        </motion.div>

        {/* CLIENTS */}
        <div className="mt-20 border-y border-gray-200 py-10">
          <div className="relative overflow-hidden">

            <motion.div
              className="flex w-max items-center gap-16 md:gap-24"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 35,
                ease: "linear",
              }}
              whileHover={{
                animationPlayState: "paused",
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client}-${index}`}
                  className="flex items-center gap-4"
                >
                  <span className="h-2 w-2 bg-indigo-600" />

                  <span className="whitespace-nowrap text-xl font-semibold tracking-tight text-gray-400 transition-colors duration-300 hover:text-gray-900 md:text-2xl">
                    {client}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* TRUST STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-8 md:grid-cols-2"
        >
          <div>
            <p className="text-5xl font-semibold tracking-tight text-gray-900">
              09+
            </p>

            <p className="mt-3 text-sm font-medium uppercase tracking-widest text-gray-500">
              Businesses served
            </p>
          </div>

          <div className="max-w-xl">
            <p className="text-xl leading-8 text-gray-500">
              From emerging startups to established businesses,
              we create technology solutions designed around
              real business requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}