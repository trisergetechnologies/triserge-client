import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiChevronDown,
  FiX,
  FiCheck,
  FiSend,
  FiUpload,
  FiLink,
  FiLinkedin
} from 'react-icons/fi'
import Layout from "../layouts/Layout";

type JobType = 'full-time' | 'internship' | 'all'
type JobCategory = 'engineering' | 'design' | 'product' | 'operations' | 'all'

interface JobOpening {
  id: string
  title: string
  type: JobType
  category: JobCategory
  location: string
  description: string[]
  requirements: string[]
  postedDate: string
  isRemote: boolean
}

const CareerPage = () => {
  const [activeTab, setActiveTab] = useState<JobType>('all')
  const [activeCategory, setActiveCategory] = useState<JobCategory>('all')
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null)
  const [isApplying, setIsApplying] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    portfolio: '',
    resume: null as File | null,
    coverLetter: '',
  })
  const [submissionState, setSubmissionState] =
    useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const jobOpenings: JobOpening[] = [
    {
      id: 'fe-dev',
      title: 'Full Stack Developer Intern',
      type: 'internship',
      category: 'engineering',
      location: 'Remote',
      description: [],
      requirements: [],
      postedDate: '2025-05-30',
      isRemote: true,
    },
    {
      id: 'design-intern',
      title: 'Product Design Intern',
      type: 'internship',
      category: 'design',
      location: 'Remote',
      description: [],
      requirements: [],
      postedDate: '2025-05-30',
      isRemote: false,
    },
  ]

  const filteredJobs = jobOpenings.filter(job => {
    const typeMatch = activeTab === 'all' || job.type === activeTab
    const categoryMatch =
      activeCategory === 'all' || job.category === activeCategory
    return typeMatch && categoryMatch
  })

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job)
    setIsApplying(true)
    setSubmissionState('idle')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmissionState('submitting')

    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmissionState('success')

    setTimeout(() => {
      setIsApplying(false)
    }, 2000)
  }

  const closeModal = () => {
    setIsApplying(false)
    setSelectedJob(null)
  }

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

          <div className="space-y-4">
            {filteredJobs.map(job => (
              <motion.div
                key={job.id}
                whileHover={{ scale: 1.01 }}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-blue-500/40 transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-300">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-400">{job.location}</p>
                  </div>
                  <button
                    // onClick={() => handleApplyClick(job)}
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

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

        {/* MODAL */}
        <AnimatePresence>
          {isApplying && selectedJob && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
              onClick={closeModal}
            >
              <motion.div
                onClick={e => e.stopPropagation()}
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-[#020617] border border-white/10 rounded-xl max-w-2xl w-full p-6 text-gray-200"
              >
                <div className="flex justify-between mb-4">
                  <h2 className="text-xl font-bold text-blue-400">
                    {selectedJob.title}
                  </h2>
                  <button onClick={closeModal}>
                    <FiX />
                  </button>
                </div>

                {submissionState === 'success' ? (
                  <div className="text-center py-12">
                    <FiCheck className="mx-auto text-green-400 mb-4" size={40} />
                    <p className="text-gray-300">
                      Application submitted successfully!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      required
                      name="fullName"
                      placeholder="Full Name"
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2"
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 font-medium"
                    >
                      <FiSend className="inline mr-2" />
                      Submit Application
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  )
}

export default CareerPage
