'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const topBarItems = [
    'Local SEO Experts',
    'Proven Results',
    '100+ Businesses Grow With Us',
  ];

  const navLinks = [
    { label: 'Services', hasDropdown: true },
    { label: 'Industries', hasDropdown: true },
    { label: 'Locations', hasDropdown: false },
    { label: 'Case Studies', hasDropdown: false },
    { label: 'About Us', hasDropdown: false },
    { label: 'Resources', hasDropdown: true },
  ];

  const dropdownItems = {
    Services: ['SEO Optimization', 'Local Listings', 'Content Strategy'],
    Industries: ['Healthcare', 'Real Estate', 'E-commerce'],
    Resources: ['Blog', 'Case Studies', 'Tools'],
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-[#DF4622] text-white text-sm py-3 px-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            {topBarItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="font-medium">{item}</span>
                {index < topBarItems.length - 1 && (
                  <span className="text-white/50">|</span>
                )}
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+16477060726"
              className="flex items-center gap-2 hover:text-white/80 transition"
            >
              <Phone size={16} />
              <span>+1 (647) 706-0726</span>
            </a>

            <a
              href="mailto:hello@avetac.com"
              className="flex items-center gap-2 hover:text-white/80 transition"
            >
              <Mail size={16} />
              <span>hello@avetac.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Dummy */}
      <header
        className={`bg-[#FAF5F0] transition-all duration-300 ${
          isSticky
            ? 'fixed top-0 left-0 right-0 shadow-lg z-50'
            : 'relative'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center w-42 gap-2">
            <img src="/logo.png" alt="#" />
            {/* <span
              className="text-3xl font-bold text-[#DF4622]"
              style={{ fontFamily: "'Playfair Display'" }}
            >
              A
            </span>

            <span
              className="text-2xl font-bold text-black"
              style={{ fontFamily: "'Playfair Display'" }}
            >
              AVETAC
            </span> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <button
                  className="flex items-center gap-1 text-gray-800 font-medium hover:text-[#DF4622] transition py-2"
                  onClick={() => {
                    if (link.hasDropdown) {
                      toggleDropdown(link.label);
                    }
                  }}
                >
                  {link.label}

                  {link.hasDropdown && (
                    <ChevronDown
                      size={18}
                      className="group-hover:rotate-180 transition"
                    />
                  )}
                </button>

                {link.hasDropdown && (
                  <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
                    {dropdownItems[link.label]?.map((item, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-[#FAF5F0] hover:text-[#DF4622] transition text-sm font-medium first:rounded-t-lg last:rounded-b-lg"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-[#DF4622] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#c73a1a] transition">
              Get Free SEO Audit
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-200 rounded-lg transition"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <div key={index}>
                  <button
                    onClick={() => {
                      if (link.hasDropdown) {
                        toggleDropdown(link.label);
                      }
                    }}
                    className="w-full flex items-center justify-between text-gray-800 font-medium py-2 hover:text-[#DF4622] transition"
                  >
                    {link.label}

                    {link.hasDropdown && (
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          openDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {link.hasDropdown &&
                    openDropdown === link.label && (
                      <div className="pl-4 mt-2 bg-gray-50 rounded-lg border-l-2 border-[#DF4622]">
                        {dropdownItems[link.label]?.map((item, idx) => (
                          <button
                            key={idx}
                            className="w-full text-left px-4 py-2 text-gray-700 hover:text-[#DF4622] text-sm font-medium transition"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                </div>
              ))}

              <button className="w-full mt-4 bg-[#DF4622] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#c73a1a] transition">
                Get Free SEO Audit
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}