import { motion } from "framer-motion";

const teamData = [
  {
    name: "Vaibhav Pandey",
    role: "DevOps Engineer & Software Engineer",
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
    <section className="bg-[#494949] text-white py-40  px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Meet Our <span className="text-teal-400">Core Team</span>
          </h2>
          <p className="text-gray-300 mt-3">
            Skilled professionals building modern digital solutions
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-gray-700 hover:border-teal-400 transition-all shadow-lg hover:shadow-teal-500/20"
            >
              
              {/* Image */}
 <div className="relative h-72 flex items-center justify-center bg-[#1a1a1a]">
  <img
    src={member.img}
    alt={member.name}
    className="h-full w-full object-contain group-hover:scale-105 transition duration-500"
  />

  {/* Soft gradient (lighter now) */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent"></div>
</div>

              {/* Info */}
              <div className="absolute bottom-0 w-full p-5 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}