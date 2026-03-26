import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Our Team", href: "/team" },
];

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="md:hidden w-full">

      {/* Mobile Header */}
      <div className="flex justify-between items-center px-4 py-4 bg-black border-b border-white/10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">

          <div className="w-8 h-8 bg-gradient-to-tr from-teal-400 to-cyan-400 rotate-45 rounded-lg flex items-center justify-center">

            <span className="-rotate-45 font-black text-black text-sm">
              T
            </span>

          </div>

          <span className="text-white font-bold">
            Triserge
          </span>

        </Link>

        {/* Menu Button */}
        <button
          className="text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >

                {NAV_LINKS.map((link) => (

                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-3xl ${
                      isActive(link.href)
                        ? "text-teal-400"
                        : "text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>

                ))}

              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}