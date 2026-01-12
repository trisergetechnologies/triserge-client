"use client";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Easing } from "framer-motion";

interface NavbarProps {
  scrollToServices?: () => void;
  scrollToContact?: () => void;
}

const EASE_SMOOTH: Easing = [0.16, 0.77, 0.47, 0.97];

const Navbar = ({ scrollToServices, scrollToContact }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (href === "#services") {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: "services" } });
      } else scrollToServices?.();
    } else if (href === "#contact") {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: "contact" } });
      } else scrollToContact?.();
    } else {
      navigate(href);
    }

    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "#contact" },
    { label: "Career", href: "/careers" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE_SMOOTH }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src="/images/logo/Triserge_bg.png"
              alt="Triserge Logo"
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-extrabold text-white tracking-wide">
              Triserge<span className="text-blue-600">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-lg font-medium text-slate-300">
            {navItems.map((item) => (
              <li key={item.href} className="relative group">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="hover:text-white transition"
                >
                  {item.label}
                </a>

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-purple transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* CTA
          <div className="hidden md:flex">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-medium text-white shadow-lg hover:scale-[1.04] transition">
              Book Meeting
            </button>
          </div> */}

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white"
            aria-label="Open menu"
          >
            <svg
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h18M4 13h18M4 20h18" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: EASE_SMOOTH }}
              className="fixed top-0 left-0 w-full h-screen bg-[#050B18] z-50 px-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between h-20 border-b border-white/10">
                {/* Logo (Mobile) */}
                <div
                  onClick={() => {
                    navigate("/");
                    setIsOpen(false);
                  }}
                  className="text-2xl font-extrabold text-white tracking-wide cursor-pointer"
                >
                  Triserge<span className="text-blue-600">.</span>
                </div>

                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl leading-none"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              {/* Menu */}
              <ul className="mt-12 space-y-8 text-lg font-medium text-white">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className="block hover:text-blue-600 transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="mt-12 w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 font-medium text-white shadow-lg hover:scale-[1.04] transition">
                Book Meeting
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
