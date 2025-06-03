import { motion } from "framer-motion";
import { useState } from "react";

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: "⚛️", proficiency: 95 },
      { name: "Next.js", icon: "⏭️", proficiency: 90 },
      { name: "Angular", icon: "🅰️", proficiency: 85 },
      { name: "React Native", icon: "📱", proficiency: 88 },
      { name: "Flutter", icon: "🦋", proficiency: 80 },
      { name: "TypeScript", icon: "📘", proficiency: 92 },
      { name: "Tailwind CSS", icon: "🎨", proficiency: 94 },
      { name: "Redux", icon: "🗃️", proficiency: 90 },
    ],
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "🟢", proficiency: 93 },
      { name: "Express.js", icon: "🚂", proficiency: 91 },
      { name: "MongoDB", icon: "🍃", proficiency: 89 },
      { name: "PostgreSQL", icon: "🐘", proficiency: 87 },
      { name: "Firebase", icon: "🔥", proficiency: 85 },
      { name: "GraphQL", icon: "📊", proficiency: 88 },
      { name: "Python", icon: "🐍", proficiency: 82 },
      { name: "Django", icon: "🎸", proficiency: 80 },
    ],
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: "🐳", proficiency: 88 },
      { name: "Kubernetes", icon: "☸️", proficiency: 85 },
      { name: "AWS", icon: "☁️", proficiency: 87 },
      { name: "GCP", icon: "🔵", proficiency: 83 },
      { name: "Azure", icon: "🔷", proficiency: 80 },
      { name: "CI/CD", icon: "🔄", proficiency: 90 },
      { name: "Terraform", icon: "🏗️", proficiency: 82 },
      { name: "Jenkins", icon: "🤖", proficiency: 78 },
    ],
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
  },
  {
    category: "Cloud",
    items: [
      { name: "AWS Lambda", icon: "λ", proficiency: 86 },
      { name: "S3", icon: "🗄️", proficiency: 90 },
      { name: "EC2", icon: "🖥️", proficiency: 85 },
      { name: "CloudFront", icon: "🌐", proficiency: 83 },
      { name: "Firebase", icon: "🔥", proficiency: 84 },
      { name: "Vercel", icon: "▲", proficiency: 89 },
      { name: "Netlify", icon: "🕸️", proficiency: 82 },
      { name: "Cloudflare", icon: "🌀", proficiency: 80 },
    ],
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-50",
  },
];

const TechPill = ({ tech }: { tech: (typeof technologies)[0]["items"][0] }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`flex flex-col p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{tech.icon}</span>
        <span className="font-medium text-gray-800">{tech.name}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${tech.proficiency}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`h-2 rounded-full ${tech.proficiency > 85 ? "bg-green-500" : tech.proficiency > 75 ? "bg-blue-500" : "bg-amber-500"}`}
        />
      </div>
      <span className="text-xs text-gray-500 mt-1 text-right">
        {tech.proficiency}% proficiency
      </span>
    </motion.div>
  );
};

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Our Technology Stack
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable solutions
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-xl bg-gray-100 p-1">
            {technologies.map((tech, index) => (
              <motion.button
                key={tech.category}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeCategory === index
                    ? `bg-white text-gray-900 shadow-sm`
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {tech.category}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`p-6 rounded-2xl ${technologies[activeCategory].bgColor}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl bg-gradient-to-r ${technologies[activeCategory].color}`}
            >
              {technologies[activeCategory].items[0].icon}
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800">
              {technologies[activeCategory].category} Technologies
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technologies[activeCategory].items.map((tech, idx) => (
              <TechPill key={`${tech.name}-${idx}`} tech={tech} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          {/* <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Trusted by leading companies worldwide
          </h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {["Google", "Microsoft", "Amazon", "Apple", "Netflix", "Uber"].map(
              (company) => (
                <motion.div
                  key={company}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-500 font-medium text-lg"
                >
                  {company}
                </motion.div>
              )
            )}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}