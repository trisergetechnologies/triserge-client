import { motion } from "framer-motion";

const missionData = [
  {
    title: "Deliver Excellence",
    desc: "We aim to deliver high-quality, reliable, and scalable digital solutions that create real business impact. Every project we build is focused on performance, usability, and long-term value, ensuring measurable growth.",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    title: "Empower Businesses",
    desc: "We empower startups and enterprises with modern, affordable technology solutions. Our goal is to bridge the gap between offline and digital, helping businesses scale efficiently.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
  },
  {
    title: "Drive Innovation",
    desc: "We embrace innovation and adaptability by exploring new technologies and ideas, ensuring our clients stay competitive and future-ready in a rapidly evolving digital world.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
   {
    title: "Build Trust & Transparency",
    desc: "We believe in honest communication, clear processes, and long-term partnerships. Our clients are always informed, involved, and confident in every step of their digital journey with us.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },


  {
    title: "Focus on User Experience",
    desc: "We design with users at the center of everything. By combining intuitive interfaces with seamless performance, we create digital products that are not only functional but genuinely enjoyable to use.",
    img: "https://res.cloudinary.com/dnmehmxz7/image/upload/v1774550481/userinterface_o3lutj.jpg",
  },
];

export default function Mission() {
  return (
    <section className="bg-[#0f0f0f] text-white px-6 py-28 overflow-hidden font-[Inter]">
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
       Our <span className="text-teal-400">Mission</span>
       </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            What drives us every day to build, innovate, and create meaningful impact.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="mt-28 space-y-36">
          {missionData.map((item, index) => {
            const isReverse = index % 2 !== 0;

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
                    
                    {/* Glow */}
                    <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl" />

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

                  <p className="text-gray-400 leading-relaxed text-lg md:text-xl font-light">
                    {item.desc}
                  </p>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}