import { motion } from "framer-motion";
import Layout from "../layouts/Layout";
import Faqs from '../components/Faqs'
const principles = [
  {
    title: "Innovation First",
    description: "We constantly push boundaries to deliver cutting-edge solutions that give you a competitive edge.",
    icon: "💡"
  },
  {
    title: "Client-Centric",
    description: "Your success is our success. We align our goals with yours to create true partnerships.",
    icon: "🤝"
  },
  {
    title: "Quality Obsessed",
    description: "From code to customer service, we maintain the highest standards in everything we do.",
    icon: "🏆"
  },
  {
    title: "Transparent Process",
    description: "Clear communication and open collaboration are at the heart of our workflow.",
    icon: "🔍"
  }
];

// const expertise = [
//   { name: "Enterprise Software", count: 45 },
//   { name: "Mobile Applications", count: 32 },
//   { name: "Cloud Solutions", count: 28 },
//   { name: "AI/ML Implementations", count: 19 },
//   { name: "IoT Systems", count: 15 },
//   { name: "Blockchain Solutions", count: 12 }
// ];

// Free placeholder images from Unsplash (no attribution required)
const placeholderImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
];

export default function AboutPage() {
  return (
    <Layout>
    <div className="bg-gradient-to-b from-gray-50 to-white pt-12">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            >
              About Triserge Technologies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Pioneering digital transformation through innovative technology solutions since 2023
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2023 by three visionary engineers, Triserge Technologies began as a small startup with a mission to bridge the gap between cutting-edge technology and business needs.
              </p>
              <p>
                What started as a team of 3 passionate technologists has now grown into a strong team serving clients across different locations in India and around the world. Our name "Triserge" represents the synergy of three core values: <span className="font-semibold text-blue-600">Innovation</span>, <span className="font-semibold text-cyan-500">Integrity</span>, and <span className="font-semibold text-purple-500">Impact</span>.
              </p>
              <p>
                Over the years, we've evolved from a services company to a full-fledged digital transformation partner, helping businesses reimagine their operations through technology.
              </p>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-blue-100 rounded-2xl overflow-hidden aspect-video shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Team working on technology"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-100 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Guiding Principles</h2>
            <p className="text-gray-600">
              These values shape every decision we make and every solution we build
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-0.5 shadow-xl">
                <div className="bg-white rounded-xl p-6 h-full">
                  <blockquote className="text-gray-800 italic text-lg">
                    "Technology should solve real problems, not create new ones. We build solutions that are as intuitive as they are powerful."
                  </blockquote>
                  <div className="mt-6 flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">Vaibhav Pandey</p>
                      <p className="text-blue-600">Co-Founder & CTO</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Philosophy</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At Triserge, we believe technology should be an enabler, not a barrier. Our human-centered approach ensures we build solutions that people actually want to use.
                </p>
                <p>
                  We combine <span className="font-semibold text-blue-600">technical excellence</span> with <span className="font-semibold text-cyan-500">design thinking</span> to create products that are both powerful and intuitive. Every line of code we write serves a purpose.
                </p>
                <p>
                  Our philosophy extends beyond products to how we work - embracing <span className="font-semibold text-purple-500">agility</span>, <span className="font-semibold">transparency</span>, and <span className="font-semibold">continuous learning</span> at every level of our organization.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      {/* <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Expertise</h2>
            <p className="text-gray-600">
              Deep technical knowledge across multiple domains allows us to deliver comprehensive solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {expertise.slice(0, 3).map((area) => (
                <motion.div 
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800">{area.name}</h3>
                    <span className="text-blue-600 font-bold">{area.count}+ Projects</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2.5 rounded-full"
                      style={{ width: `${(area.count / 50) * 100}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-6">
              {expertise.slice(3).map((area) => (
                <motion.div 
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800">{area.name}</h3>
                    <span className="text-blue-600 font-bold">{area.count}+ Projects</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2.5 rounded-full"
                      style={{ width: `${(area.count / 50) * 100}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100"
              >
                <h3 className="font-bold text-gray-800 mb-2">And many more...</h3>
                <p className="text-gray-600">
                  Our team continuously expands its expertise to stay ahead of technological advancements
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Culture */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Culture</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At Triserge, we've built a culture that fosters <span className="font-semibold text-blue-600">creativity</span>, <span className="font-semibold text-cyan-500">collaboration</span>, and <span className="font-semibold text-purple-500">continuous growth</span>. We believe great ideas can come from anywhere.
                </p>
                <p>
                  Our open work environment encourages cross-team collaboration and knowledge sharing. Weekly tech talks, hackathons, and innovation days keep our team engaged and learning.
                </p>
                <p>
                  We're proud of our diverse team representing 15+ nationalities, bringing unique perspectives that drive innovation.
                </p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {placeholderImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="aspect-square rounded-xl overflow-hidden shadow-md"
                >
                  <img 
                    src={img} 
                    alt="Team culture" 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <Faqs />
    </div>
    </Layout>
  );
}