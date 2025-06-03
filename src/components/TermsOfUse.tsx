import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../layouts/Layout";

const TermsOfService = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    acceptance: true,
    accounts: false,
    payments: false,
    intellectualProperty: false,
    termination: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p className="text-gray-600 mb-4">
            By accessing or using any services provided by Triserge Technologies, you agree to be bound by these Terms of Service. These terms apply to all visitors, users, and others who wish to access or use our services.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-blue-800">
              <span className="font-semibold">Tech Note:</span> Our terms are designed to be as transparent as our code. We use automated version tracking for all policy changes.
            </p>
          </div>
        </>
      )
    },
    {
      id: "accounts",
      title: "2. User Accounts",
      content: (
        <>
          <p className="text-gray-600 mb-4">
            When you create an account with us, you must provide accurate information. You are responsible for maintaining the security of your account and for all activities that occur under your account.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              "Multi-factor authentication required",
              "Activity logs available",
              "Role-based access control",
              "90-day password rotation"
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
      id: "services",
      title: "3. Our Services",
      content: (
        <>
          <p className="text-gray-600 mb-4">
            Triserge Technologies provides cloud-based software solutions including but not limited to:
          </p>
          <div className="space-y-3 mb-4">
            {[
              "SaaS application platforms",
              "API integration services",
              "Data analytics tools",
              "AI/ML model deployment"
            ].map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-1 rounded-full mr-3 mt-1">
                  <div className="bg-white rounded-full w-2 h-2"></div>
                </div>
                <span className="text-gray-700">{service}</span>
              </motion.div>
            ))}
          </div>
        </>
      )
    },
    {
      id: "intellectualProperty",
      title: "4. Intellectual Property",
      content: (
        <>
          <p className="text-gray-600 mb-4">
            The Service and its original content, features, and functionality are and will remain the exclusive property of Triserge Technologies and its licensors.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-6">
            <div className="flex flex-wrap gap-4">
              {[
                { name: "Patents", icon: "📜" },
                { name: "Copyrights", icon: "©️" },
                { name: "Trademarks", icon: "™️" },
                { name: "Trade Secrets", icon: "🔒" }
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
      id: "limitations",
      title: "5. Limitations",
      content: (
        <>
          <p className="text-gray-600 mb-4">
            In no event shall Triserge Technologies be liable for any damages arising out of the use or inability to use our services.
          </p>
          <div className="space-y-3">
            {[
              "No warranty of uninterrupted service",
              "Data loss limitations",
              "Third-party integration disclaimers",
              "Compliance with local laws"
            ].map((limitation, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-blue-100 p-1 rounded mr-3">
                  <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700">{limitation}</span>
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
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Effective: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          {/* Interactive Policy Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            {/* Policy Sections */}
            <div className="p-6 md:p-8">
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  className={`mb-8 pb-8 ${expandedSections[section.id] ? '' : 'border-b border-gray-200'}`}
                >
                  <motion.h2 
                    className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center cursor-pointer"
                    onClick={() => toggleSection(section.id)}
                    whileHover={{ color: '#2563eb' }}
                  >
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm mr-3">
                      {section.title.split(" ")[0].replace('.', '')}
                    </span>
                    {section.title}
                    <motion.span 
                      className="ml-auto"
                      animate={{ rotate: expandedSections[section.id] ? 180 : 0 }}
                    >
                      <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </motion.h2>

                  <motion.div
                    className="ml-9 overflow-hidden"
                    initial={false}
                    animate={{
                      height: expandedSections[section.id] ? 'auto' : 0,
                      opacity: expandedSections[section.id] ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {section.content}
                  </motion.div>
                </motion.div>
              ))}

              {/* Tech-Styled Footer */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">Technical Support</h3>
                <p className="text-gray-600">
                  For questions about these terms, contact our legal team at <span className="text-blue-600">support@trisergetech.com</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;