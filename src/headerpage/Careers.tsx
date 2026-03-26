// src/pages/Careers.tsx
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, ChevronRight, Upload } from "lucide-react";
import toast from "react-hot-toast";

const jobs = [
  { role: "Frontend Developer", location: "Delhi NCR", type: "Intern" },
  { role: "Backend Developer", location: "Delhi NCR", type: "Full-time" },
  { role: "Nodejs Developer", location: "Delhi NCR", type: "Intern" },
];

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    graduation: "",
    skills: "",
    role: "",
    resume: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Handle input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 🔥 File Validation
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only PDF or DOC/DOCX allowed");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("File must be less than 2MB");
      return;
    }

    setForm((prev) => ({ ...prev, resume: file }));
    toast.success("Resume added ✅");
  };

  const scrollToApply = (roleName: string) => {
    setForm((prev) => ({ ...prev, role: roleName }));
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔥 Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.resume) {
      return toast.error("Please upload your resume");
    }

    if (!/^[0-9]{10}$/.test(form.mobile)) {
      return toast.error("Enter valid 10-digit mobile number");
    }

    setLoading(true);

    try {
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (value) formData.append(key, value as any);
      });

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/careers`, // ✅ fixed typo
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("Application submitted 🚀");

        setForm({
          name: "",
          email: "",
          mobile: "",
          location: "",
          graduation: "",
          skills: "",
          role: "",
          resume: null,
        });
      } else {
        toast.error(data.message || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#1a1a1a] text-white px-6 py-40">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-gray-400">
            Build something meaningful with us 🚀
          </p>
        </motion.div>

        {/* JOBS */}
        <div className="grid gap-4 mb-20">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Briefcase size={20} /> Open Positions
          </h2>

          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-6 border border-white/10 rounded-xl flex justify-between"
            >
              <div>
                <h3 className="text-lg font-bold">{job.role}</h3>
                <p className="text-sm text-gray-400 flex gap-3">
                  <span><MapPin size={14} /> {job.location}</span>
                  <span>{job.type}</span>
                </p>
              </div>

              <button
                onClick={() => scrollToApply(job.role)}
                className="flex items-center gap-1 hover:text-teal-400"
              >
                Apply <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* FORM */}
        <div ref={formRef}>
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6 bg-[#222] p-8 rounded-xl"
          >
            {[
              { name: "name", placeholder: "Full Name" },
              { name: "email", placeholder: "Email" },
              { name: "mobile", placeholder: "Mobile" },
              { name: "location", placeholder: "Location" },
              { name: "graduation", placeholder: "Graduation" },
              { name: "skills", placeholder: "Skills" },
            ].map((field) => (
              <input
                key={field.name}
                name={field.name}
                required
                value={(form as any)[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="p-3 bg-black/30 border border-white/10 rounded-lg"
              />
            ))}

            <input
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Role"
              className="md:col-span-2 p-3 bg-black/30 border border-white/10 rounded-lg text-teal-400"
            />

            {/* Upload UI */}
            <label className="md:col-span-2 border-2 border-dashed border-white/20 p-6 rounded-lg text-center cursor-pointer hover:border-teal-400">
              <Upload className="mx-auto mb-2" />
              <p className="text-sm">
                {form.resume ? form.resume.name : "Upload Resume (PDF/DOCX)"}
              </p>
              <input
                type="file"
                hidden
                onChange={handleFileChange}
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-white text-black py-3 rounded-lg font-bold"
            >
              {loading ? "Submitting..." : "Send Application"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}