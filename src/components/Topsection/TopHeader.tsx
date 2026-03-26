import { Mail, Phone, Instagram, Twitter, Linkedin } from "lucide-react";

const SOCIALS = [
  {
    icon: Instagram,
    url: "https://www.instagram.com/triserge_technologies/",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/yourusername",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/",
  },
];

export default function TopHeader({ scrolled }: { scrolled: boolean }) {
  return (
    <div
      className={`hidden md:block bg-black/95 text-white transition-all duration-500 overflow-hidden ${
        scrolled ? "h-0" : "h-10 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-full flex justify-between items-center text-[10px] uppercase tracking-[0.2em]">

        <div className="flex items-center gap-8">

          <a
            href="mailto:hello@triserge.com"
            className="flex items-center gap-2 text-white/80 hover:text-teal-400 transition"
          >
            <Mail size={12} />
            trisergeofficial@gmail.com
          </a>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-white/80 hover:text-teal-400 transition"
          >
            <Phone size={12} />
            +91 8800198276
          </a>

        </div>

        <div className="flex items-center gap-5">
          {SOCIALS.map((item, i) => {
            const Icon = item.icon;

            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition hover:scale-110"
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
}