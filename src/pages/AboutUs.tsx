import { motion } from "framer-motion";
import Layout from "../layouts/Layout";
import Faqs from "../components/Faqs";

const principles = [
  {
    title: "Innovation First",
    description:
      "We constantly push boundaries to deliver cutting-edge solutions that give you a competitive edge.",
    icon: "💡",
  },
  {
    title: "Client-Centric",
    description:
      "Your success is our success. We align our goals with yours to create true partnerships.",
    icon: "🤝",
  },
  {
    title: "Quality Obsessed",
    description:
      "From code to customer service, we maintain the highest standards in everything we do.",
    icon: "🏆",
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication and open collaboration are at the heart of our workflow.",
    icon: "🔍",
  },
];

const placeholderImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
];

export default function AboutPage() {
  return (
    <Layout>
      <div className="relative bg-[#050B18] pt-12 text-neutral-200 overflow-hidden">
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

        {/* Hero Section */}
        <section className="relative py-20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              About Triserge Technologies
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-neutral-400 max-w-3xl mx-auto"
            >
              Pioneering digital transformation through innovative technology
              solutions since 2023
            </motion.p>
          </div>
        </section>

        {/* Our Story */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-100 mb-6">
                Our Journey
              </h2>
              <div className="space-y-4 text-neutral-400">
                <p>
                  Founded in 2023 by three visionary engineers, Triserge
                  Technologies began as a small startup with a mission to bridge
                  the gap between cutting-edge technology and business needs.
                </p>
                <p>
                  What started as a team of 3 passionate technologists has now
                  grown into a strong team serving clients across India and
                  globally. Triserge represents{" "}
                  <span className="text-blue-400 font-semibold">Innovation</span>,{" "}
                  <span className="text-cyan-400 font-semibold">Integrity</span>,
                  and{" "}
                  <span className="text-purple-400 font-semibold">Impact</span>.
                </p>
                <p>
                  Over the years, we’ve evolved into a full-scale digital
                  transformation partner.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#0B1224] rounded-2xl overflow-hidden aspect-video shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e"
                  alt="Team working on technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-600/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-neutral-100 mb-4">
                Our Guiding Principles
              </h2>
              <p className="text-neutral-400">
                These values shape every decision we make
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-[#0B1224] p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-100 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-neutral-400">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Culture */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-neutral-100 mb-6">
                  Our Culture
                </h2>
                <div className="space-y-4 text-neutral-400">
                  <p>
                    We foster creativity, collaboration, and continuous growth.
                  </p>
                  <p>
                    Knowledge sharing and innovation are embedded in our daily
                    work culture.
                  </p>
                  <p>
                    Diversity and global perspectives drive our innovation.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {placeholderImages.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="aspect-square rounded-xl overflow-hidden shadow-md"
                  >
                    <img
                      src={img}
                      alt="Team culture"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <Faqs />
      </div>
    </Layout>
  );
}
