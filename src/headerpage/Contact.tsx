// src/pages/Contact.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // ✅ word count fix
  const wordCount = form.message.trim()
    ? form.message.trim().split(/\s+/).length
    : 0;

  // ✅ handlers
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (wordCount === 0) {
      toast.error("Message is required");
      return;
    }

    if (wordCount > 50) {
      toast.error("Message should not exceed 50 words");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Thank you! We will contact you soon.");

        setForm({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-neutral-950 text-white px-4 sm:px-6 py-50 flex items-center overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] bg-black/20 rounded-full blur-[80px]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">
        
        {/* LEFT INFO */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8">
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
              extraordinary.
            </span>
          </h1>

          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="text-teal-400" />
              <p>Delhi, India</p>
            </div>
            <div className="flex gap-4">
              <Mail className="text-teal-400" />
              <p>trisergeofficial@gmail.com</p>
            </div>
            <div className="flex gap-4">
              <Phone className="text-teal-400" />
              <p>+91 8800198276</p>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-10 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl space-y-5"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg"
            />

            {/* Phone */}
            <PhoneInput
              country={"in"}
              value={form.mobile}
              onChange={(phone) =>
                setForm({ ...form, mobile: phone })
              }
              containerClass="w-full"
              inputClass="!w-full !h-[50px] !pl-[60px] !bg-black/20 !border !border-white/10 !text-white !rounded-lg"
              buttonClass="!bg-black/20 !border-white/10"
            />

            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg"
            />

            {/* Word Counter */}
            <p
              className={`text-sm ${
                wordCount > 50 ? "text-red-400" : "text-gray-400"
              }`}
            >
              {wordCount}/50 words
            </p>

            {/* Error */}
            {wordCount > 50 && (
              <p className="text-red-400 text-sm">
                Message exceeds 50 words
              </p>
            )}

            {/* Button */}
            <motion.button
              type="submit"
              disabled={loading || wordCount === 0 || wordCount > 100}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="w-full py-3 bg-teal-400 text-black rounded-lg font-bold flex justify-center items-center gap-2 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Inquiry"}
              <motion.span animate={{ x: isHovered ? 5 : 0 }}>
                <Send size={16} />
              </motion.span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}