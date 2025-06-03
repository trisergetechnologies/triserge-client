import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  scrollToServices?: () => void;
  scrollToContact?: () => void;
}

const Navbar = ({ scrollToServices, scrollToContact }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (href === "#services") {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: "services" } });
      } else if (scrollToServices) {
        scrollToServices();
      }
    } 
    else if (href === "#contact") {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: "contact" } });
      } else if (scrollToContact) {
        scrollToContact();
      }
    }
    else {
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
    <nav className="bg-[#01303f] shadow-4xl fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-4xl font-bold text-[#d4f0fc]">Triserge</div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-12 ml-auto">
          <ul className="hidden md:flex gap-6 items-center ml-auto font-medium text-lg text-white">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-blue-600"
                  onClick={(e) => handleNavClick(item.href, e)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed left-0 top-0 h-full w-64 bg-[#01303f] shadow-sm transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <div className="text-2xl font-bold text-white">Triserge</div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white font-medium text-2xl focus:outline-none"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <ul className="p-4 space-y-4 text-white font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-2 px-4 hover:bg-blue-600 transition-colors duration-200 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, e);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-md font-semibold hover:opacity-75 transition-opacity duration-200">
              Book Meeting
            </button>
          </li>
        </ul>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;