import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();



const faqs = [
  {
    question: "What services does Triserge Technologies offer?",
    answer: "We specialize in AI solutions, cloud computing, cybersecurity, DevOps automation, and custom software development tailored to your business needs."
  },
  {
    question: "How does Triserge ensure data security?",
    answer: "We implement end-to-end encryption, regular security audits, and compliance with global standards like ISO 27001 and GDPR to protect your data."
  },
  {
    question: "What industries do you serve?",
    answer: "Our solutions benefit finance, healthcare, e-commerce, manufacturing, and SaaS companies across various sectors."
  },
  {
    question: "How long does implementation typically take?",
    answer: "Project timelines vary but most implementations range from 4-12 weeks depending on complexity and customization requirements."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide 24/7 technical support, regular maintenance, and continuous improvement services for all our solutions."
  }
];

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-cyan-300/10" />
      <div className="absolute inset-0 opacity-15 pattern-grid-lg text-slate-300/30" />

      {/* Animated Radial Gradient */}
      <motion.div
        className="absolute left-1/2 top-0 -ml-[400px] w-[800px] h-[800px] bg-gradient-radial from-blue-200/5 to-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and solutions
          </p>
        </motion.div>

        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={faqVariants}
              className="overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-6 text-left rounded-xl transition-all duration-300 ${activeIndex === index ? 'bg-white shadow-lg border border-blue-200' : 'bg-white/90 hover:bg-white border border-slate-200 hover:border-blue-300 shadow-md hover:shadow-lg'}`}
              >
                <h3 className="text-lg font-semibold text-slate-800 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="px-6 overflow-hidden"
              >
                <div className="py-4 text-slate-600">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-6">
            Still have questions? Please contact us.
          </p>
          <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center mt-8"
    >
      <Link 
        to="/#contact" // Change this to your home page route with contact section hash
      >
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all
                    text-sm sm:text-base md:px-8 md:py-3 lg:text-lg"
        >
          Contact Our Team
        </motion.button>
      </Link>
        </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/90 via-white/50 to-transparent z-0" />
    </section>
  );
}