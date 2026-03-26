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
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "MySQL",
  "AWS",
  "GCP",
];

export default function Experience() {
  return (
    <section className="bg-[#303030] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Our Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-200 max-w-2xl mx-auto"
        >
          We combine modern technologies with proven strategies to deliver scalable and high-performance digital solutions.
        </motion.p>

        {/* Skills */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-black/30 border border-[#6b6b6b] rounded-xl hover:bg-black/50 transition backdrop-blur"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <h3 className="text-xl text-gray-200 mb-8 font-semibold">Technologies We Use</h3>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="px-5 py-2 border border-[#6b6b6b] rounded-full text-sm text-gray-200 hover:border-white hover:text-white transition bg-black/30 backdrop-blur"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
