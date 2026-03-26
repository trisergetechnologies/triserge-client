// src/components/Navbar.tsx

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= CONFIG ================= */

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
   { name: "Our Team", href: "/team" },
];

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  /* ================= SCROLL ================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= CLOSE ON ROUTE ================= */

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /* ================= ESC + OUTSIDE ================= */

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  /* ================= BODY LOCK ================= */

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="fixed top-0 w-full z-[100]">
      {/* ================= TOP BAR ================= */}

      <div
        className={`bg-black/95 text-white transition-all duration-500 overflow-hidden ${
          scrolled ? "h-0" : "h-10 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-full flex justify-between items-center text-[10px] uppercase tracking-[0.2em]">
          <div className="flex items-center gap-4 sm:gap-8">
            <a
              href="mailto:trisergeofficial@gmail.com"
              className="hidden sm:flex items-center gap-2 text-white/80 hover:text-teal-400 transition"
            >
              <Mail size={12} />
              trisergeofficial@gmail.com
            </a>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-white/80 hover:text-teal-400 transition"
            >
              <Phone size={12} />
              +918800198276
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
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

      {/* ================= MAIN NAV ================= */}

      <nav className="px-3 sm:px-4 md:px-6 py-3 md:py-4">
        <div
          className={`max-w-7xl mx-auto transition-all duration-500 px-4 sm:px-6 rounded-2xl border ${
            scrolled
              ? "bg-black/60 backdrop-blur-xl border-white/10 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
              : "bg-transparent border-transparent py-4 md:py-5"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* LOGO */}

            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-tr from-teal-400 to-cyan-400 rotate-45 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:rotate-90 shadow-lg shadow-teal-500/30">
                <span className="-rotate-45 group-hover:-rotate-90 font-black text-black text-xs sm:text-sm">
                  T
                </span>
              </div>

              <span className="text-white font-bold tracking-[0.2em] sm:tracking-[0.3em] text-sm sm:text-base uppercase">
                Triserge
              </span>
            </Link>

            {/* DESKTOP NAV */}

            <div className="hidden md:flex gap-6 lg:gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-[11px] uppercase tracking-[0.2em] transition duration-300 ${
                    isActive(link.href)
                      ? "text-teal-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-teal-400 transition-all duration-300 ${
                      isActive(link.href)
                        ? "w-full shadow-[0_0_10px_#2dd4bf]"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* DESKTOP ACTIONS */}

            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <Link
                to="/careers"
                className="text-gray-400 hover:text-white text-xs uppercase"
              >
                Join Us
              </Link>

              <Link
                to="/sellproject"
                className="relative px-5 lg:px-6 py-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black text-xs font-bold overflow-hidden group shadow-lg shadow-teal-500/30"
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                  Sell Projects
                  <ArrowUpRight size={14} />
                </span>

                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-300" />
              </Link>
            </div>


            {/* MOBILE BUTTON */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden text-white p-2 hover:bg-white/10 rounded-full transition"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className="fixed inset-0 bg-black z-[110] flex flex-col px-6 py-10 sm:px-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-16">
              <span className="text-teal-400 text-2xl font-bold">TS.</span>
              <button onClick={() => setIsOpen(false)}>
                <X className="text-white" />
              </button>
            </div>

            {/* LINKS */}
            <div className="space-y-6 text-center mt-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-3xl sm:text-4xl text-white hover:text-teal-400 transition"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* MOBILE ACTIONS */}
            <div className="mt-12 flex flex-col items-center gap-5">
              <Link
                to="/careers"
                className="text-gray-400 hover:text-white text-sm uppercase tracking-wider"
              >
                Join Us
              </Link>

              <Link
                to="/sellproject"
                className="relative px-8 py-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black text-sm font-bold overflow-hidden group shadow-lg shadow-teal-500/30"
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                  Sell Projects
                  <ArrowUpRight size={16} />
                </span>

                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-300" />
              </Link>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-6 mt-auto justify-center">
              {SOCIALS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-teal-400 transition"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}