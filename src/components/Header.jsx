import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled 
      ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-border py-3' 
      : 'bg-white/80 backdrop-blur-sm py-5'
  }`;

  const linkClass = (isActive) => 
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-brand-primary font-semibold' : 'text-brand-text hover:text-brand-primary'
    }`;

  const logoClass = 'text-brand-text font-light';
  const menuIconClass = 'text-brand-text';

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className={`text-2xl font-bold ${logoClass}`}>
              The Creators Marketing Agency
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => linkClass(isActive)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.instagram.com/_.thecreators_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-text-light hover:text-brand-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-brand-text-light hover:text-brand-primary transition-colors">
              <Twitter size={18} />
            </a>
            <a href="https://www.facebook.com/people/The-Creators-Marketing-Agency/61577798090545/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-brand-text-light hover:text-brand-primary transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://www.linkedin.com/company/112085339/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-brand-text-light hover:text-brand-primary transition-colors">
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className={`${menuIconClass} hover:opacity-80 focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium text-brand-text hover:text-brand-primary hover:bg-brand-background-alt ${
                    isActive ? 'text-brand-primary bg-brand-background-alt font-semibold' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
