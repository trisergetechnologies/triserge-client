import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const footerContent: FooterColumn[] = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-use' },
        { name: 'Appointment Policy', href: '/appointment-policy' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 border-t border-gray-700/50 shadow-2xl shadow-black/30 text-gray-300"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row flex-wrap gap-12 justify-between py-12">
          {/* Company Info */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-2xl font-bold text-cyan-400">Triserge</h3>
            <p className="text-sm mt-3 leading-6 text-gray-400 max-w-xs">
              Empowering the future of technology through innovation and collaboration.
            </p>
            <div className="mt-4 flex space-x-4">
              {/* GitHub */}
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" /></svg>
              </a>
              {/* Twitter */}
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path  /></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          {/* Footer Columns */}
          <div className="flex flex-1 flex-wrap gap-10 min-w-[250px]">
            {footerContent.map((column, index) => (
              <div key={index} className="min-w-[120px]">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-cyan-300 text-sm transition-all duration-300 hover:pl-2 hover:border-l-4 hover:border-cyan-500/50"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex-1 min-w-[280px]">
            <div className="w-full max-w-md text-center sm:text-left">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Newsletter
              </h4>
              <p className="text-sm text-gray-400 mt-2">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="mt-4 space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg bg-gray-800/40 backdrop-blur-sm px-4 py-2 text-gray-100 border border-gray-600/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  required
                />
                <button
                  type="submit"
                  className="w-full rounded-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-gray-100 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 py-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Triserge. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
