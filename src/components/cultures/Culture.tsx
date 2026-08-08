"use client";

import { motion } from "framer-motion";
import PremiumGallery from "../../ui/PremiumGallery";

interface CultureItem {
  title: string;
  desc: string;
  additionalContent: string;
}

const cultureData: CultureItem[] = [
  {
    title: "Innovation First",
    desc: "At Triserge, we constantly explore new technologies to build modern, scalable web and app solutions that keep businesses ahead in the digital era.",
    additionalContent:
      "From AI-driven automation to modern frameworks, we continuously explore better ways to solve problems and create meaningful digital experiences.",
  },
  {
    title: "Empowering Offline Businesses",
    desc: "We help traditional and offline businesses move into the digital world with practical, affordable, and high-quality technology solutions.",
    additionalContent:
      "Our approach focuses on understanding how a business operates today and then using technology to make those operations more efficient and scalable.",
  },
  {
    title: "People Centric",
    desc: "We put people first—our clients, users, and team. Every solution starts with understanding real people and the problems they face.",
    additionalContent:
      "Technology is only valuable when it makes people's lives easier.",
  },
  {
    title: "Ownership Mindset",
    desc: "We take responsibility for our work and remain accountable for the outcomes we deliver.",
    additionalContent:
      "We encourage proactive thinking, problem solving, and taking responsibility beyond simply completing assigned tasks.",
  },
  {
    title: "Continuous Growth",
    desc: "We believe in constant learning, experimentation, and adapting to an industry that never stops changing.",
    additionalContent:
      "We continuously improve our technical skills, processes, and understanding of emerging technologies.",
  },
  {
    title: "Affordable Excellence",
    desc: "We believe high-quality technology should be accessible to startups, small businesses, and growing companies.",
    additionalContent:
      "Our goal is to deliver strong engineering and thoughtful design without unnecessary complexity or excessive costs.",
  },
  {
    title: "Transparency & Trust",
    desc: "We believe strong partnerships are built through honest communication, clear expectations, and transparency.",
    additionalContent:
      "From timelines and pricing to technical decisions, clients should always understand what is happening and why.",
  },
  {
    title: "Agile & Adaptable",
    desc: "We stay flexible and respond quickly when requirements, customer needs, or market conditions change.",
    additionalContent:
      "Our development approach allows ideas to evolve throughout a project.",
  },
  {
    title: "Quality Craftsmanship",
    desc: "We care about the details—from clean code and performance to intuitive interfaces and reliable experiences.",
    additionalContent:
      "We believe quality is not a final step in development. It is something considered throughout the entire process.",
  },
];

const cultureImages = [
  {
    src: "heimage/invoationfirst.jpg",
    title: "Innovation First",
    category: "Our Culture",
    description:
      "We explore new technologies and modern solutions to build future-ready digital experiences.",
  },
  {
    src: "heimage/craft.jpg",
    title: "Quality Craftsmanship",
    category: "Our Culture",
    description:
      "We care about the details, from clean engineering to intuitive design and reliable experiences.",
  },
  {
    src: "heimage/people.jpg",
    title: "People Centric",
    category: "Our Culture",
    description:
      "We put people first—our clients, users, and team.",
  },
  {
    src: "heimage/ContinuousGrowth.jpg",
    title: "Continuous Growth",
    category: "Our Culture",
    description:
      "We continuously learn, experiment, and adapt to a changing technology landscape.",
  },
  {
    src: "heimage/trust.jpg",
    title: "Transparency & Trust",
    category: "Our Culture",
    description:
      "We build strong partnerships through honest communication and transparency.",
  },
];

export default function Culture() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20 md:py-28 bg-white">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-indigo-600" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-400">
              Our Culture
            </p>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.04em] text-gray-900">
            What defines
            <br />
            <span className="text-teal-400">how we work.</span>
          </h2>

          <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-500">
            Our culture shapes how we think, collaborate, solve problems,
            and create lasting value for the businesses we work with.
          </p>
        </motion.div>

        {/* GALLERY */}
        <div className="mt-20 md:mt-28 w-full">
          <PremiumGallery images={cultureImages} />
        </div>

        {/* LIST */}
        <div className="mt-24 md:mt-36 border-t border-gray-200">
          {cultureData.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: (index % 2) * 0.05,
              }}
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-6 border-b border-gray-200 py-8 md:grid-cols-12 md:gap-12 md:py-12"
            >
              {/* NUMBER */}
              <div className="md:col-span-1">
                <span className="text-sm font-semibold tracking-[0.15em] text-indigo-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* TITLE */}
              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                  {item.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <div className="md:col-span-6">
                <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-7 text-gray-500">
                  {item.desc}
                </p>

                <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm leading-6 text-gray-400">
                  {item.additionalContent}
                </p>
              </div>

              {/* ARROW */}
              <div className="hidden md:col-span-1 md:block text-right">
                <span className="text-xl text-gray-300">↗</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CLOSING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 border-t border-gray-200 pt-10 md:pt-12"
        >
          <p className="max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-gray-900">
            We don't just build digital products.
            <span className="text-teal-400">
              {" "}We build solutions that move businesses forward.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}