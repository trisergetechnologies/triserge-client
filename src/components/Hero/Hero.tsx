import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-12 md:pt-30 bg-[#050505] text-white flex items-center overflow-hidden font-sans selection:bg-indigo-500/30">

      {/* Background */}
      <div className="absolute inset-0 z-0">

        {/* Radial Glow */}
        <div className="absolute inset-0 
          bg-[radial-gradient(circle_at_50%_40%,#1a1a1a_0%,transparent_70%)] 
          md:bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,transparent_100%)]" 
        />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none 
          bg-[url('https://grainy-gradients.vercel.app/noise.svg')] 
          mix-blend-overlay" 
        />

      </div>

      {/* Main Layout */}
      <div className="relative z-10 
        max-w-7xl 
        mx-auto 
        px-5 sm:px-6 md:px-8 
        py-16 md:py-20 
        w-full 
        grid 
        grid-cols-1 
        lg:grid-cols-12 
        gap-12 
        items-center"
      >

        {/* LEFT CONTENT */}
<div className="lg:col-span-8 flex flex-col justify-center">

  {/* Heading */}
  <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.2 }}
  className="
    text-[55px]
    xs:text-[60px]
    sm:text-6xl
    md:text-7xl
    lg:text-8xl
    xl:text-[110px]
    font-light
    leading-[1.05]
    tracking-[-0.03em]
  "
>
  Crafting{" "}
  <span className="italic font-serif text-gray-400">
    Digital
  </span>

  <br />

  <span className="font-semibold bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
    Architectures
  </span>
</motion.h1>

  {/* Paragraph */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="
      mt-6 md:mt-10
      text-gray-300
      max-w-full sm:max-w-lg md:max-w-2xl
      text-base sm:text-lg md:text-xl lg:text-2xl
      leading-relaxed
      font-light
    "
  >
    At Triserge Technologies, we turn ideas into fast, scalable digital products 
    that drive real business growth. As a passionate startup, we thrive on 
    innovation, agility, and creativity—helping businesses transform concepts 
    into impactful solutions.
  </motion.p>

</div>

        {/* RIGHT CIRCLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="
            lg:col-span-4
            flex
            justify-center 
            lg:justify-end
            items-center
          "
        >

          <div className="
            relative
            w-40 h-40
            sm:w-48 sm:h-48
            md:w-56 md:h-56
            lg:w-64 lg:h-64
            border border-white/10
            rounded-full
            flex
            items-center
            justify-center
            p-4
            backdrop-blur-[2px]
          ">

            {/* Outer Rotate */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 border-t border-indigo-500/40 rounded-full"
            />

            {/* Inner Rotate */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-4 border-b border-white/5 rounded-full"
            />

            {/* Text */}
            <p className="
              text-center
              text-[8px]
              sm:text-[9px]
              md:text-xs
              tracking-[0.35em]
              text-gray-400
              uppercase
              leading-loose
            ">
              Innovation <br /> • <br /> Design <br /> • <br /> Strategy
            </p>

          </div>

        </motion.div>

      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="
          absolute 
          bottom-6 md:bottom-10
          left-5 right-5
          flex 
          justify-between 
          items-center
          border-t border-white/5
          pt-6
        "
      >

        {/* Scroll */}
        <div className="flex items-center gap-2">

          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />

          <span className="
            text-[9px]
            sm:text-[10px]
            uppercase
            tracking-widest
            text-gray-500
          ">
            Scroll to explore
          </span>

        </div>

        {/* Tags */}
        <div className="hidden sm:flex gap-6 md:gap-8">

          {["Strategy", "Design", "Dev"].map((item) => (
            <span
              key={item}
              className="
                text-[10px]
                md:text-xs
                font-medium
                text-gray-500
                uppercase
                tracking-tight
              "
            >
              {item}
            </span>
          ))}

        </div>

      </motion.div>

    </section>
  );
}