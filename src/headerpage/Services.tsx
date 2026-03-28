// src/pages/Services.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  Bot,
  BarChart3,
  TrendingUp,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "High-performance, scalable, and modern web applications tailored to your business needs.",
    icon: Globe,
  },
  {
    title: "AI Solutions",
    desc: "Custom AI tools, chatbots, and automation systems to streamline operations.",
    icon: Bot,
  },
  {
    title: "CRM System",
    desc: "Custom-built CRM solutions to streamline customer management, automate workflows, and enhance business efficiency with centralized data and actionable insights.",
    icon: BarChart3,
  },
  {
    title: "SEO & Digital Marketing",
    desc: "Comprehensive, data-driven strategies to enhance search engine rankings, drive organic traffic, and maximize online visibility.",
    icon: TrendingUp,
  },
  {
    title: "E-commerce Solutions",
    desc: "Robust online stores with seamless checkout and scalable architecture.",
    icon: ShoppingCart,
  },
  {
    title: "App Development",
    desc: "Cross-platform mobile apps with performance, scalability, and UX in mind.",
    icon: Smartphone,
  },
];

export default function Services() {
  return (
    <section className="min-h-screen bg-[#494949] text-white px-6 py-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Our <span className="text-teal-400">Services</span>
          </h1>

          <div className="h-1.5 w-24 bg-teal-400 rounded-full mt-4"></div>

          <p className="mt-6 text-gray-200 max-w-2xl">
            We provide end-to-end digital solutions designed to help your
            business grow, scale, and lead in a competitive market.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-black/30 border border-[#6b6b6b] rounded-2xl backdrop-blur hover:border-teal-400/60 hover:bg-black/50 transition duration-300 group"
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-teal-400 group-hover:scale-110 transition" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Build Something Great
          </h2>

          <p className="text-gray-300 mb-6">
            Ready to transform your ideas into powerful digital products?
          </p>

          <Link to="/contact">
            <button className="px-8 py-3 bg-teal-400 text-black rounded-full font-medium hover:bg-teal-300 transition">
              Get Started
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}