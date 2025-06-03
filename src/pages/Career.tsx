import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiX, FiCheck, FiSend, FiUpload, FiLink, FiLinkedin } from 'react-icons/fi'
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
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  // Sample job data
  const jobOpenings: JobOpening[] = [
    {
      id: 'fe-dev',
      title: 'Full Stack Developer Intern',
      type: 'internship',
      category: 'engineering',
      location: 'Remote',
      description: [
        'Build beautiful, performant user interfaces for our products',
        'Collaborate with designers to implement pixel-perfect UIs',
        'Optimize applications for maximum speed and scalability',
        'Participate in code reviews and architectural discussions'
      ],
      requirements: [
        'Hands-on with React, Next.js, Node.js, Dev-tools, REST API',
        'Expertise in modern CSS (Tailwind, CSS-in-JS)',
        'Experience with state management solutions',
        'Familiarity with testing frameworks',
        'Strong understanding of web performance'
      ],
      postedDate: '2025-05-30',
      isRemote: true,
    },
    {
      id: 'design-intern',
      title: 'Product Design Intern',
      type: 'internship',
      category: 'design',
      location: 'Remote',
      description: [
        'Assist in creating user flows, wireframes, and prototypes',
        'Help conduct user research and usability testing',
        'Collaborate with engineers to implement designs',
        'Contribute to our design system'
      ],
      requirements: [
        'Portfolio demonstrating design skills',
        'Proficiency in Figma or similar tools',
        'Understanding of user-centered design',
        'Excellent communication skills',
        'Currently enrolled in design program'
      ],
      postedDate: '2025-05-30',
      isRemote: false,
    },
  ]

  const filteredJobs = jobOpenings.filter(job => {
    const typeMatch = activeTab === 'all' || job.type === activeTab
    const categoryMatch = activeCategory === 'all' || job.category === activeCategory
    return typeMatch && categoryMatch
  })

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job)
    setIsApplying(true)
    setSubmissionState('idle')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmissionState('success')
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          location: '',
          linkedin: '',
          portfolio: '',
          resume: null,
          coverLetter: '',
        })
        setIsApplying(false)
      }, 2000)
    } catch (error) {
      setSubmissionState('error')
    }
  }

  const closeModal = () => {
    setIsApplying(false)
    setSelectedJob(null)
  }

  return (
    <Layout>
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-20">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            >
              Build the Future with Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Join Triserge Technologies and work on cutting-edge solutions that transform industries.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-blue-600">Open Positions</h2>
            
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <select
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value as JobType)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Types</option>
                  <option value="full-time">Full-time</option>
                  <option value="internship">Internships</option>
                </select>
                <FiChevronDown className="absolute right-3 top-3 text-gray-500" />
              </div>
              
              <div className="relative">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value as JobCategory)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Departments</option>
                  <option value="engineering">Engineering</option>
                  <option value="design">Design</option>
                  <option value="product">Product</option>
                  <option value="operations">Operations</option>
                </select>
                <FiChevronDown className="absolute right-3 top-3 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-blue-600">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <span className={`inline-block w-2 h-2 rounded-full ${job.type === 'full-time' ? 'bg-green-500' : 'bg-purple-500'}`}></span>
                            {job.type === 'full-time' ? 'Full-time' : 'Internship'}
                          </span>
                          <span>{job.location}</span>
                          {job.isRemote && (
                            <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                              Remote
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => handleApplyClick(job)}
                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <h3 className="text-xl text-gray-500">No positions match your filters</h3>
                <p className="text-gray-400 mt-2">Try adjusting your search criteria</p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Why Join Us Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Why Join Triserge?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cutting-Edge Technology",
                description: "Work with the latest tech stack on innovative projects that challenge the status quo.",
                icon: "💻"
              },
              {
                title: "Growth Opportunities",
                description: "Continuous learning with mentorship programs, conference budgets, and skill development.",
                icon: "📈"
              },
              {
                title: "Impactful Work",
                description: "Your contributions will directly shape products used by thousands of customers worldwide.",
                icon: "🌍"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {isApplying && selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white border border-gray-200 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-blue-600">{selectedJob.title}</h2>
                    <p className="text-gray-500">{selectedJob.type === 'full-time' ? 'Full-time' : 'Internship'} • {selectedJob.location}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 p-1"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {submissionState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="flex justify-center mb-4">
                      <FiCheck className="text-green-500" size={48} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Application Submitted!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for applying to {selectedJob.title}. Our team will review your application and get back to you soon.
                    </p>
                    <button
                      onClick={closeModal}
                      className="px-6 py-2 bg-gray-100 rounded-lg font-medium hover:bg-gray-200 transition-colors text-gray-700"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                            Location (City, State) *
                          </label>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                            LinkedIn Profile
                            <span className="text-gray-500 ml-1">(Optional but recommended)</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FiLinkedin className="text-gray-400" />
                            </div>
                            <input
                              type="url"
                              id="linkedin"
                              name="linkedin"
                              value={formData.linkedin}
                              onChange={handleInputChange}
                              placeholder="https://linkedin.com/in/your-profile"
                              className="w-full bg-white border border-gray-300 rounded-lg pl-10 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                            Portfolio/Website
                            <span className="text-gray-500 ml-1"></span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FiLink className="text-gray-400" />
                            </div>
                            <input
                              type="url"
                              id="portfolio"
                              name="portfolio"
                              value={formData.portfolio}
                              onChange={handleInputChange}
                              placeholder="https://yourportfolio.com"
                              className="w-full bg-white border border-gray-300 rounded-lg pl-10 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                          Resume *
                        </label>
                        <div className="flex items-center gap-4">
                          <label className="cursor-pointer flex-1">
                            <div className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                              <FiUpload />
                              {formData.resume ? formData.resume.name : 'Choose File'}
                            </div>
                            <input
                              type="file"
                              id="resume"
                              name="resume"
                              onChange={handleFileChange}
                              required
                              className="hidden"
                              accept=".pdf,.doc,.docx"
                            />
                          </label>
                          {formData.resume && (
                            <span className="text-sm text-gray-600 flex items-center gap-1">
                              <FiCheck className="text-green-500" />
                              Selected
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                      </div>

                      <div>
                        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                          Cover Letter
                        </label>
                        <textarea
                          id="coverLetter"
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Tell us why you're a great fit for this role..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        type="submit"
                        disabled={submissionState === 'submitting'}
                        className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 disabled:opacity-70"
                      >
                        {submissionState === 'submitting' ? (
                          'Submitting...'
                        ) : (
                          <>
                            <FiSend />
                            Submit Application
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </Layout>
  )
}

export default CareerPage;