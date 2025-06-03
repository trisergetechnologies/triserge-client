import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../layouts/Layout";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: (
        <>
          <p className="text-gray-600 mb-4">
            At <span className="text-blue-600 font-medium">Triserge Technologies</span>, we're building the future while respecting your privacy. This policy outlines how we handle your information when you interact with our digital platforms and services.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-blue-800">
              <span className="font-semibold">Tech Transparency:</span> We use end-to-end encryption for all sensitive data transfers and maintain strict access controls.
            </p>
          </div>
        </>
      )
    },
    {
      id: "data-collection",
      title: "2. Data Collection",
      content: (
        <>
          <p className="text-gray-600 mb-4">
            We collect only what's necessary to deliver exceptional service:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              "Contact details for communication",
              "Usage patterns to improve UX",
              "Technical specs for compatibility",
              "Feedback to enhance our products"
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex items-start"
              >
                <div className="bg-blue-100 p-1 rounded-full mr-3">
                  <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </>
      )
    },
    {
      id: "data-usage",
      title: "3. Data Usage",
      content: (
        <>
          <p className="text-gray-600 mb-4">
            Your data powers these technological advancements:
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Machine Learning Optimization",
                description: "Improving our AI models while maintaining anonymity"
              },
              {
                title: "Cloud Infrastructure",
                description: "Secure AWS-hosted services with regular audits"
              },
              {
                title: "Blockchain Security",
                description: "Where applicable, we use decentralized verification"
              }
            ].map((tech, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 5 }}
                className="cursor-pointer"
                onClick={() => setActiveSection(activeSection === tech.title ? null : tech.title)}
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{tech.title}</h3>
                    {activeSection === tech.title && (
                      <p className="text-gray-600 mt-1">{tech.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )
    },
    {
      id: "security",
      title: "4. Security Measures",
      content: (
        <>
          <p className="text-gray-600 mb-4">
            Our multi-layered defense system includes:
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-6">
            <div className="flex flex-wrap gap-4">
              {[
                { name: "256-bit Encryption", icon: "🔒" },
                { name: "Regular Pentests", icon: "🛡️" },
                { name: "SOC 2 Compliance", icon: "📋" },
                { name: "Zero Trust Architecture", icon: "🚫" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="bg-white px-4 py-3 rounded-lg shadow-sm flex items-center"
                >
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )
    },
    {
      id: "rights",
      title: "5. Your Rights",
      content: (
        <>
          <p className="text-gray-600 mb-4">
            As a user of our technology, you can:
          </p>
          <div className="space-y-3">
            {[
              "Request access to your data",
              "Correct inaccurate information",
              "Delete your personal data",
              "Opt-out of marketing communications",
              "Lodge complaints with regulators"
            ].map((right, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-blue-100 p-1 rounded mr-3">
                  <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700">{right}</span>
              </div>
            ))}
          </div>
        </>
      )
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-b from-gray-50 to-white py-26 md:py-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          {/* Interactive Policy Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            {/* Sticky Navigation (Desktop) */}
            <div className="hidden md:block border-b border-gray-200">
              <div className="flex overflow-x-auto scrollbar-hide">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      document.getElementById(section.id)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                    className="px-6 py-4 text-sm font-medium whitespace-nowrap hover:bg-gray-100 transition-colors"
                  >
                    {section.title.split(" ")[1]}
                  </button>
                ))}
              </div>
            </div>

            {/* Policy Sections */}
            <div className="p-6 md:p-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="mb-10 last:mb-0"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm mr-3">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="ml-9">
                    {section.content}
                  </div>
                </motion.div>
              ))}

              {/* Tech-Styled Contact */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">Questions About Our Tech Privacy?</h3>
                <p className="text-gray-600 mb-4">
                  Our security team is available 24/7 to address your concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  
                  <a
                    href="#contact"  // Link to your contact section ID
                     onClick={(e) => {
                      // If not on home page, navigate first
                    if (window.location.pathname !== "/") {
                     e.preventDefault();
                    window.location.href = `/#contact`;
                  }
             }}
               className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-lg text-center transition-colors"
               >
              Contact Form
</a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Back to Top (Mobile) */}
          <div className="md:hidden mt-8 flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white shadow-md px-4 py-2 rounded-full flex items-center text-blue-600"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;