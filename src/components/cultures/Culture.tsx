import { motion } from "framer-motion";
import { useState } from "react";

const cultureData = [
  {
    title: "Innovation First",
    desc: "At Triserge, we constantly explore new technologies to build modern, scalable web and app solutions that keep businesses ahead in the digital era. From AI-driven automation to cutting-edge frameworks, we embrace what's next.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    additionalContent: "We dedicate 20% of our resources to R&D, ensuring we're always at the forefront of technological advancements. Our innovation lab experiments with emerging tech like Web3, IoT, and machine learning to deliver future-ready solutions."
  },
  {
    title: "Empowering Offline Businesses",
    desc: "Our core mission is to help traditional and offline businesses go digital with affordable, high-quality solutions that unlock growth and new opportunities. We bridge the gap between physical operations and digital transformation.",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    additionalContent: "We've successfully digitized over 200+ local businesses, helping them increase revenue by an average of 150% through custom e-commerce platforms, digital payment integration, and automated inventory management systems."
  },
  {
    title: "People Centric",
    desc: "We put people first—our clients and our team. We build meaningful relationships and create solutions that truly solve real-world problems. Every decision we make starts with understanding human needs and experiences.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    additionalContent: "Our client retention rate stands at 95%, a testament to our commitment to genuine relationships. We offer flexible work arrangements, mental health support, and continuous learning opportunities to ensure our team thrives both personally and professionally."
  },
  {
    title: "Ownership Mindset",
    desc: "We take full responsibility for our work, act like owners, and stay committed to delivering results with accountability and precision. No task is too small, and no challenge is too big when we approach it with ownership.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    additionalContent: "Every team member has direct visibility into project outcomes and client satisfaction metrics. We encourage proactive problem-solving and celebrate team members who go above and beyond to ensure project success, regardless of their formal role."
  },
  {
    title: "Continuous Growth",
    desc: "We believe in constant learning, rapid adaptation, and evolving with the industry to stay relevant and competitive. What worked yesterday may not work tomorrow, so we stay curious and adaptable.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    additionalContent: "We allocate 10% of work hours to skill development and cross-training. Our weekly knowledge-sharing sessions, tech talks, and certification programs ensure our team stays ahead of industry trends and masters emerging technologies."
  },
  {
    title: "Affordable Excellence",
    desc: "We combine quality with affordability, ensuring that startups and small businesses can access premium digital solutions without high costs. We believe great technology shouldn't be a luxury reserved for enterprises.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    additionalContent: "Our flexible pricing models and scalable solutions allow businesses to start small and grow without technical debt. We offer free consultations, transparent pricing, and ROI-focused development to ensure every client gets maximum value from their investment."
  },
  {
    title: "Transparency & Trust",
    desc: "We operate with complete transparency in pricing, timelines, and processes. Our clients always know what's happening behind the scenes, and we build trust through consistent, honest communication.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    additionalContent: "We provide real-time project dashboards, weekly progress reports, and open communication channels. No hidden fees, no unexpected delays without clear communication—just honest partnerships built on mutual respect."
  },
  {
    title: "Agile & Adaptable",
    desc: "We embrace agile methodologies that allow us to pivot quickly based on client feedback and market changes. Flexibility isn't just a buzzword—it's how we deliver better results faster.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    additionalContent: "Our two-week sprint cycles ensure rapid iteration and continuous improvement. We welcome changing requirements and view them as opportunities to deliver more value, not obstacles to overcome."
  },
  {
    title: "Community Impact",
    desc: "Beyond business, we're committed to making a positive impact in the communities we serve. We believe technology should be a force for good and accessible to all.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    additionalContent: "We run free digital literacy workshops for small business owners, offer discounted rates for non-profits, and mentor aspiring tech professionals from underprivileged backgrounds. Our goal is to democratize access to digital transformation."
  },
  {
    title: "Quality Craftsmanship",
    desc: "We take pride in writing clean, maintainable code and designing intuitive experiences. Every pixel, every line of code, and every user interaction is crafted with care and attention to detail.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    additionalContent: "Our quality assurance process includes peer code reviews, automated testing, user experience testing, and performance optimization. We don't consider a project complete until it meets our exacting standards of excellence."
  }
];

export default function Culture() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0f0f0f] text-white px-6 py-28 font-[Inter]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Our <span className="text-indigo-500">Culture</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            The values and mindset that define how we build, collaborate, and grow.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="mt-28 space-y-36">
          {cultureData.map((item, index) => {
            const isReverse = index % 2 !== 0;
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-14 ${
                  isReverse ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? 120 : -120, rotate: -4 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -8, 0] }}
                  className="w-full md:w-1/2"
                >
                  <div className="relative group overflow-hidden rounded-3xl border border-white/10 backdrop-blur-md">

                    <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl" />

                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[340px] object-cover transform group-hover:scale-110 transition duration-700"
                    />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/2"
                >
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                    {item.desc}
                  </p>

                  {/* Expandable Content */}
                  <div className="mt-4">
                    <button
                      onClick={() =>
                        setActiveIndex(isOpen ? null : index)
                      }
                      className="text-indigo-400 text-sm hover:text-indigo-300 transition"
                    >
                      {isOpen ? "Show less -" : "Read more +"}
                    </button>

                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4 text-gray-500 text-base leading-relaxed"
                      >
                        {item.additionalContent}
                      </motion.p>
                    )}
                  </div>

                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

