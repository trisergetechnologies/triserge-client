// src/pages/SellProject.tsx

import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import toast from "react-hot-toast";

export default function SellProject() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: any) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/sell`,
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
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        project: "",
      });
    } else {
      alert(data.message);
    }

  } catch (error) {
    toast.error("Server error. Try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="min-h-screen bg-black text-white px-6 py-50 flex items-center justify-center">
      <div className="max-w-3xl w-full">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Partner <span className="text-teal-400">With Us</span>
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Turn your ideas into earnings. Submit your client & project information and let our team
            connect you & handle the deal. We handle outreach,
            negotiation, and deal closure — so you don’t have to.
            <br /><br />
            You can earn upto{" "}
            <span className="text-teal-400 font-semibold">20% commission</span>{" "}
            <span className="text-white/60">
              (paid only after a successful deal as per policy)
            </span>, ensuring you earn maximum value with zero upfront cost.
          </p>

          <p className="text-xs text-gray-500 mt-3">
            No upfront fees • Secure handling • Transparent process
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl space-y-6"
        >

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 focus:border-teal-400 outline-none"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 focus:border-teal-400 outline-none"
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 focus:border-teal-400 outline-none"
          />

          {/* PROJECT */}
          <textarea
            name="project"
            placeholder="Describe your project..."
            rows={5}
            value={form.project}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 focus:border-teal-400 outline-none"
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-bold flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            {loading ? "Opening Email..." : "Submit Project"}
            <Send size={16} />
          </button>

          {/* SUCCESS MESSAGE */}
          {success && (
            <p className="text-green-400 text-sm text-center">
              Your email app has been opened. Please click send to complete your submission.
            </p>
          )}
        </form>

        {/* CONTACT OPTIONS */}
        <div className="mt-10 text-center space-y-4">

          <p className="text-gray-400 text-sm">
            Prefer direct contact?
          </p>

          <div className="flex justify-center gap-6 flex-wrap">

            {/* CALL */}
            <a
              href="tel:+918800198276"
              className="flex items-center gap-2 text-white hover:text-teal-400 transition"
            >
              <Phone size={18} />
              +91 8800198276
            </a>

            {/* EMAIL */}
            <a
              href="mailto:trisergeofficial@gmail.com"
              className="flex items-center gap-2 text-white hover:text-teal-400 transition"
            >
              <Mail size={18} />
              trisergeofficial@gmail.com
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}