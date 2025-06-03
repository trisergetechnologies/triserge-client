import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../layouts/Layout";

const AppointmentPolicy = () => {
  const [activeTab, setActiveTab] = useState("booking");
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    booking1: true,
    booking2: false,
    payment1: false,
    payment2: true,
    cancellation1: false,
    cancellation2: false
  });

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const policySections = [
    {
      id: "booking",
      title: "Appointment Booking",
      icon: "📅",
      items: [
        {
          id: "booking1",
          title: "Scheduling Protocol",
          content: (
            <>
              <p className="text-gray-600 mb-3">
                All appointments must be scheduled through our automated booking system at least 24 hours in advance. Our AI scheduling assistant will optimize your appointment time based on:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                {["Resource availability", "Time zone matching", "Service complexity"].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -2 }}
                    className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center"
                  >
                    <div className="text-blue-600 text-sm font-medium">{item}</div>
                  </motion.div>
                ))}
              </div>
            </>
          )
        },
        {
          id: "booking2",
          title: "Confirmation Process",
          content: (
            <>
              <p className="text-gray-600 mb-3">
                You'll receive immediate system confirmation with:
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Calendar invite", "Unique meeting ID", "Secure video link", "Prep materials"].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center"
                  >
                    <span className="mr-2">✓</span>
                    {item}
                  </motion.div>
                ))}
              </div>
            </>
          )
        }
      ]
    },
    {
      id: "payment",
      title: "Payment Policy",
      icon: "💳",
      items: [
        {
          id: "payment1",
          title: "Secure Transaction Processing",
          content: (
            <>
              <p className="text-gray-600 mb-3">
                We utilize enterprise-grade payment infrastructure with:
              </p>
              <div className="space-y-3">
                {[
                  "PCI-DSS Level 1 compliance",
                  "256-bit encryption",
                  "Tokenized transactions",
                  "3D Secure authentication"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <div className="bg-blue-100 p-1 rounded mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </>
          )
        },
        {
          id: "payment2",
          title: "Receipt & Documentation",
          content: (
            <>
              <p className="text-gray-600 mb-3">
                Automated documentation will be sent to your registered email including:
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg mb-3">
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: "📧", text: "Payment receipt" },
                    { icon: "📄", text: "Service invoice" },
                    { icon: "🔐", text: "Secure tax docs" },
                    { icon: "📊", text: "Usage analytics" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="bg-white p-2 rounded-lg shadow-xs flex flex-col items-center w-20"
                    >
                      <span className="text-2xl mb-1">{item.icon}</span>
                      <span className="text-xs text-center">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          )
        }
      ]
    },
    {
      id: "cancellation",
      title: "Cancellation & Refund",
      icon: "🔄",
      items: [
        {
          id: "cancellation1",
          title: "Rescheduling Protocol",
          content: (
            <>
              <p className="text-gray-600 mb-3">
                Our automated rescheduling system allows changes up to 12 hours before your appointment. Late changes will incur:
              </p>
              <div className="space-y-2">
                {[
                  "12-24 hours: 20% service fee",
                  "6-12 hours: 40% service fee",
                  "<6 hours: Full charge applies"
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      i === 0 ? 'bg-yellow-400' : 
                      i === 1 ? 'bg-orange-400' : 'bg-red-400'
                    }`}></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </>
          )
        },
        {
          id: "cancellation2",
          title: "Refund Processing",
          content: (
            <>
              <p className="text-gray-600 mb-3">
                Approved refunds are processed through our automated financial system:
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-50 p-2 rounded-lg border border-green-100 text-center flex-1"
                >
                  <div className="text-green-600 font-medium">3-5 Business Days</div>
                  <div className="text-gray-500 text-xs">Standard Processing</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-50 p-2 rounded-lg border border-blue-100 text-center flex-1"
                >
                  <div className="text-blue-600 font-medium">Instant Credit</div>
                  <div className="text-gray-500 text-xs">For Future Services</div>
                </motion.div>
              </div>
            </>
          )
        }
      ]
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
              Appointment Policy
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Effective: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          {/* Policy Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex overflow-x-auto scrollbar-hide mb-8 bg-white rounded-lg shadow-sm p-1"
          >
            {policySections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-md transition-colors ${
                  activeTab === section.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </motion.div>

          {/* Policy Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <div className="p-6 md:p-8">
              {policySections
                .filter(section => section.id === activeTab)
                .map(section => (
                  <div key={section.id}>
                    {section.items.map(item => (
                      <motion.div
                        key={item.id}
                        className={`mb-6 pb-6 ${expandedItems[item.id] ? '' : 'border-b border-gray-100'}`}
                      >
                        <motion.h3 
                          className="text-lg font-semibold text-gray-800 mb-3 flex items-center cursor-pointer"
                          onClick={() => toggleItem(item.id)}
                          whileHover={{ color: '#2563eb' }}
                        >
                          {item.title}
                          <motion.span 
                            className="ml-auto"
                            animate={{ rotate: expandedItems[item.id] ? 180 : 0 }}
                          >
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.span>
                        </motion.h3>

                        <motion.div
                          className="overflow-hidden"
                          initial={false}
                          animate={{
                            height: expandedItems[item.id] ? 'auto' : 0,
                            opacity: expandedItems[item.id] ? 1 : 0
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.content}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                ))}

              {/* Tech Footer */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100"
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Automated Policy Updates</h3>
                    <p className="text-gray-600 text-sm">
                      This policy is version-controlled in our documentation system. Check revision history in advance.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AppointmentPolicy;