import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-text text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="mb-12 border-b border-white/10 pb-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-semibold mb-2">Subscribe to our newsletter</h3>
                    <p className="text-white/70">Stay updated with the latest marketing trends and insights.</p>
                </div>
                <div className="flex w-full md:w-auto">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        aria-label="Email address for newsletter"
                        className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:border-brand-primary placeholder-white/50 w-full md:w-80"
                    />
                    <button className="bg-brand-primary text-white hover:bg-brand-primary/90 px-6 py-3 rounded-r-lg font-semibold transition-all duration-300">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light text-white">The Creators Marketing Agency</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Elevating your brand with cutting-edge digital marketing strategies. We turn clicks into customers and ideas into reality.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/people/The-Creators-Marketing-Agency/61577798090545/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/_.thecreators_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/112085339/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-brand-primary after:rounded-full">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-brand-primary after:rounded-full">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/search-engine-optimization" className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer block">Search Engine Optimization</Link>
              </li>
              <li>
                <Link to="/services/social-media-marketing" className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer block">Social Media Marketing</Link>
              </li>
              <li>
                <Link to="/services/pay-per-click" className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer block">Pay Per Click</Link>
              </li>
              <li>
                <Link to="/services/website-development" className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer block">Website Development</Link>
              </li>
              <li>
                <Link to="/services/e-commerce-website-development" className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer block">E-Commerce Website Development</Link>
              </li>
              <li>
                <Link to="/services/logo-designing" className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer block">Logo Designing</Link>
              </li>
              <li>
                <Link to="/services/brochure-designing" className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer block">Brochure Designing</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-brand-primary after:rounded-full">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-white/70 text-sm">
                <MapPin className="w-5 h-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                <span>No.24 Bharathi nagar zamin Pallavaram main road chennai 43</span>
              </li>
              <li className="flex items-center text-white/70 text-sm">
                <Phone className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                <span>8124743600</span>
              </li>
              <li className="flex items-center text-white/70 text-sm">
                <Mail className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                <span>thecreatorsmarketingagency@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} The Creators Marketing Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
