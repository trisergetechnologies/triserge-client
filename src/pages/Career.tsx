import { motion } from 'framer-motion';
import Layout from "../layouts/Layout";

const CareerPage = () => {

  return (
    <Layout>
      <div className="min-h-screen pt-20 bg-gradient-to-br from-[#050B18] via-[#071428] to-[#020617] text-gray-200">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-24 text-center"
        >
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Build the Future with Us
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Join Triserge Technologies and work on cutting-edge solutions that transform industries.
          </p>
        </motion.section>

        {/* JOB LIST */}
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <h2 className="text-2xl font-bold text-blue-400 mb-8">Open Positions</h2>


          {/* WHY JOIN */}
          <section className="mt-24">
            <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">
              Why Join Triserge?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cutting-Edge Technology",
                  description:
                    "Work with the latest tech stack on innovative projects that challenge the status quo.",
                  icon: "💻",
                },
                {
                  title: "Growth Opportunities",
                  description:
                    "Continuous learning with mentorship programs, conference budgets, and skill development.",
                  icon: "📈",
                },
                {
                  title: "Impactful Work",
                  description:
                    "Your contributions will directly shape products used by thousands of customers worldwide.",
                  icon: "🌍",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:border-blue-500/40 transition"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </Layout>
  )
}

export default CareerPage
