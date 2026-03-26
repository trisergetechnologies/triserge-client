import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Our Team", href: "/team" },
];

export default function DesktopNavbar({ scrolled }: { scrolled: boolean }) {
  const { pathname } = useLocation();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="hidden md:block">

      <div
        className={`max-w-7xl mx-auto transition-all duration-500 px-6 rounded-2xl border ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-white/10 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >

        <div className="flex items-center justify-between">

          {/* LOGO */}

          <Link to="/" className="flex items-center gap-2 group">

            <div className="w-8 h-8 bg-gradient-to-tr from-teal-400 to-cyan-400 rotate-45 rounded-lg flex items-center justify-center">

              <span className="-rotate-45 font-black text-black text-sm">
                T
              </span>

            </div>

            <span className="text-white font-bold tracking-[0.3em] text-base uppercase">
              Triserge
            </span>

          </Link>

          {/* NAV */}

          <div className="flex gap-10">

            {NAV_LINKS.map((link) => (

              <Link
                key={link.name}
                to={link.href}
                className={`text-xs uppercase tracking-[0.2em] transition ${
                  isActive(link.href)
                    ? "text-teal-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>

            ))}

          </div>

          {/* ACTION */}

          <Link
            to="/sellproject"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black text-xs font-bold flex items-center gap-2"
          >
            Sell Projects
            <ArrowUpRight size={14} />
          </Link>

        </div>

      </div>

    </div>
  );
}