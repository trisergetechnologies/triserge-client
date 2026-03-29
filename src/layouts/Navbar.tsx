

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
    url: "https://www.linkedin.com/company/triserge-technologies/posts/?feedView=all",
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
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
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
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.addEventListener(
        "mousedown",
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        "keydown",
        handleKey
      );
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [isOpen]);

  /* ================= BODY LOCK ================= */

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "auto";
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* ================= TOP BAR ================= */}

       <div className="bg-black/95 text-white hidden md:block border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 h-10 flex justify-between items-center text-[10px] uppercase tracking-[0.2em]">
          <div className="flex items-center gap-8">
            <a
              href="mailto:trisergeofficial@gmail.com"
              className="flex items-center gap-2 text-white/80 hover:text-teal-400 transition"
            >
              <Mail size={12} />
              trisergeofficial@gmail.com
            </a>

            <a
              href="tel:+918800198276"
              className="flex items-center gap-2 text-white/80 hover:text-teal-400 transition"
            >
              <Phone size={12} />
              +918800198276
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

      {/* ================= MAIN NAV ================= */}

     <nav className="w-full py-0">
  <div
    className={`w-full px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
      scrolled
        ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
        : "bg-transparent border-transparent"
    }`}
  >
    <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* LOGO */}

           <Link
     to="/"
      className="flex items-center gap-3 group"
>
<img
  src="/images/logo/Triserge_Logo.png"
  alt="Triserge Logo"
  className="h-26 md:h-26  w-auto max-w-[150px] object-contain
  transition-transform duration-500 group-hover:scale-105"
/>
</Link>

            {/* DESKTOP NAV */}

            <div className="hidden md:flex gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-[11px] uppercase tracking-[0.2em] transition ${
                    isActive(link.href)
                      ? "text-teal-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* DESKTOP ACTIONS */}

            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/careers"
                className="text-gray-400 hover:text-white text-xs uppercase"
              >
                Join Us
              </Link>

              <Link
                to="/sellproject"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-teal-500/30"
              >
                Sell Projects
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* MOBILE BUTTON */}

            <button
              onClick={() =>
                setIsOpen(!isOpen)
              }
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
            className="fixed inset-0 bg-black z-[110] flex flex-col px-6 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
          >
            {/* HEADER */}

            <div className="flex justify-between items-center mb-16">
              <span className="text-teal-400 text-2xl font-bold">
                TS.
              </span>

              <button
                onClick={() =>
                  setIsOpen(false)
                }
              >
                <X className="text-white" />
              </button>
            </div>

            {/* LINKS */}

            <div className="space-y-8 text-center mt-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.05,
                  }}
                >
                  <Link
                    to={link.href}
                    className="text-4xl text-white hover:text-teal-400 transition"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* MOBILE ACTIONS */}

            <div className="mt-14 flex flex-col items-center gap-6">
              <Link
                to="/careers"
                className="text-gray-400 hover:text-white text-sm uppercase tracking-wider"
              >
                Join Us
              </Link>

              <Link
                to="/sellproject"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black text-sm font-bold flex items-center gap-2 shadow-lg shadow-teal-500/30"
              >
                Sell Projects
                <ArrowUpRight size={16} />
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