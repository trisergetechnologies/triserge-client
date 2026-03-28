// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     quote: "The attention to detail and innovative approach transformed our brand identity completely.",
//     author: "Sarah Jenkins",
//     role: "CEO at Colio",
//     avatar: "SJ",
//   },
//   {
//     quote: "Working with this team felt like having an extension of our own company. Absolute professionals.",
//     author: "Mark Rivera",
//     role: "Director, Dmart",
//     avatar: "MR",
//   },
//   {
//     quote: "They didn't just build a tool; they built an experience. Our user engagement is up 40%.",
//     author: "Ananya Rao",
//     role: "Founder, Anumati",
//     avatar: "AR",
//   },
//   {
//     quote: "The speed of delivery without sacrificing quality is what sets them apart from the rest.",
//     author: "David Chen",
//     role: "CTO, Aiwedia",
//     avatar: "DC",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { y: 0, opacity: 1 },
// };

// export default function Testimonials() {
//   return (
//     <section className="bg-black text-white py-16 md:py-24 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
//           <div className="max-w-2xl">
//             <h3 className="text-teal-400 font-medium mb-3 tracking-widest uppercase text-xs sm:text-sm">
//               Testimonials
//             </h3>
//             <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
//               Real stories from <br />
//               <span className="text-gray-500">real partners.</span>
//             </h2>
//           </div>

//           <p className="text-gray-400 text-sm sm:text-base max-w-sm">
//             We measure our success by the growth and satisfaction of the brands we empower.
//           </p>
//         </div>

//         {/* Grid */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
//         >
//           {testimonials.map((item, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//               className="bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between hover:bg-zinc-800/50 transition-colors"
//             >
//               <div>
//                 <div className="flex gap-1 mb-4 sm:mb-6">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className="text-yellow-500 text-sm">★</span>
//                   ))}
//                 </div>

//                 <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6 sm:mb-8">
//                   "{item.quote}"
//                 </p>
//               </div>

//               <div className="flex items-center gap-3 sm:gap-4">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-xs sm:text-sm">
//                   {item.avatar}
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-white text-sm sm:text-base">
//                     {item.author}
//                   </h4>
//                   <p className="text-xs sm:text-sm text-gray-500">
//                     {item.role}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }