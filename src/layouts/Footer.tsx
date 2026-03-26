import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { icon: FaTwitter, url: "https://twitter.com/yourusername" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/jobs/view/..." },
  { icon: FaGithub, url: "https://github.com/trisergetechnologies" },
  { icon: FaInstagram, url: "https://www.instagram.com/triserge_technologies/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">

          {/* BRAND */}
          <div className="space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-white text-2xl font-black tracking-tighter">
              TRISERGE<span className="text-pink-600">.</span>
            </h2>
            <p className="text-sm leading-8 text-gray-500 max-w-xs">
              Building premium digital products, scalable systems, and modern
              experiences for forward-thinking brands.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 hover:border-pink-600 hover:text-pink-600 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* COMPANY */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8">
              Company
            </h3>
            <ul className="space-y-4 text-[13px]">
              {["About", "Services", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-pink-600 hover:pl-1 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8">
              Capabilities
            </h3>
            <ul className="space-y-4 text-[13px]">
              {[
                "Web Development",
                "UI/UX Design",
                "Mobile Apps",
                "SEO & Marketing",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-default hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT + NEWSLETTER */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8">
              Contact
            </h3>

   <div className="space-y-4 text-sm text-white/80 mb-6">
  <div className="flex items-center justify-center sm:justify-start gap-3">
    <MapPin size={16} className="text-teal-400" />

    <a
      href="https://www.google.com/maps?q=Plot+No.+158+Gyan+Khand+II+Indirapuram+Ghaziabad+Uttar+Pradesh+India"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-teal-300 transition"
    >
      Plot No. 158, Gyan Khand II, Indirapuram, Ghaziabad, Uttar Pradesh, India
    </a>
  </div>

  <div className="flex items-center justify-center sm:justify-start gap-3">
    <Phone size={16} className="text-teal-400" />
    <a href="tel:+918800198276" className="hover:text-teal-300">
      +91 8800198276
    </a>
  </div>

  <div className="flex items-center justify-center sm:justify-start gap-3">
    <Mail size={16} className="text-teal-400" />
    <a href="mailto: trisergeofficial@gmail.com" className="hover:text-teal-300">
      trisergeofficial@gmail.com
    </a>
  </div>
</div>

            {/* Newsletter */}
            <p className="text-xs text-gray-600 mb-4">
              Subscribe for updates
            </p>

            <div className="relative group max-w-sm mx-auto sm:mx-0">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-transparent border-b border-gray-800 text-sm outline-none focus:border-pink-600 transition-all placeholder:text-gray-600"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-black uppercase tracking-widest text-white hover:text-pink-600 transition-colors active:scale-95">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-900 mt-16 md:mt-20 pt-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium text-gray-500">
              © {new Date().getFullYear()} TRISERGE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}