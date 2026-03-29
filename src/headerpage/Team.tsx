import { motion } from "framer-motion";

const teamData = [
  {
    name: "Vaibhav Pandey",
    role: "DevOps & Software Engineer",
    img: "https://res.cloudinary.com/dnmehmxz7/image/upload/v1774517759/pandeyphoto_jhvdna.jpg",
  },
  {
    name: "Ojas Mishra",
    role: "Software Engineer",
    img: "https://res.cloudinary.com/dnmehmxz7/image/upload/v1774517758/ojasphoto_ns10go.jpg",
  },
  {
    name: "Prabhat Jha",
    role: "Strategic Management Specialist",
    img: "https://res.cloudinary.com/dnmehmxz7/image/upload/v1774517763/prabhatphoto_idc2eg.png",
  },
  {
    name: "Krishna Kumar",
    role: "Associate Software Developer",
    img: "https://res.cloudinary.com/dnmehmxz7/image/upload/v1774517761/krishnaphoto_wtafy2.jpg",
  },
];

export default function Team() {
  return (
    <section className="bg-neutral-950 text-white py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADING SECTION */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <span className="text-teal-400 font-bold text-xs uppercase tracking-[0.2em]">
            Our Backbone
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mt-3 mb-6">
            Meet Our <span className="text-teal-400">Core Team</span>.
          </h2>

          <div className="w-16 h-1 bg-teal-400 mx-auto mb-8 rounded-full" />

          <p className="text-neutral-400 text-lg leading-relaxed">
            A diverse group of skilled professionals dedicated to building
            modern digital solutions and driving innovation.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center space-y-6"
            >
              {/* IMAGE */}
              <div className="relative flex items-center justify-center">

                <div className="absolute inset-0 rounded-full bg-teal-500/0 group-hover:bg-teal-500/10 blur-xl transition-all duration-500" />

                <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full overflow-hidden border-[6px] border-neutral-900 group-hover:border-teal-500 transition-all duration-500 ease-out shadow-2xl">

                  <img
                    src={member.img}
                    alt={member.name}
                     loading="lazy"
                     decoding="async"
                     className="h-full w-full object-cover object-top 
                     transition-all duration-700 
                     group-hover:scale-110 
                    blur-sm scale-105"
                    onLoad={(e) => {
                      e.currentTarget.classList.remove("blur-sm", "scale-105");
                    }}
                  />

                </div>
              </div>

              {/* INFO */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {member.name}
                </h3>

                <p className="text-[13px] font-medium uppercase tracking-widest text-neutral-500">
                  {member.role}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}