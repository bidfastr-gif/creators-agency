import React, { useRef, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, ChevronDown, CheckCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace with your actual EmailJS Service ID, Template ID, and Public Key
    // You can get these from https://dashboard.emailjs.com/
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000);
      }, (error) => {
        console.log(error.text);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const services = [
    'Search Engine Optimization',
    'Social Media Marketing',
    'Pay Per Click',
    'Website Development',
    'E-Commerce Website Development',
    'Logo Designing',
    'Brochure Designing'
  ];

  const countryCodes = [
    { code: '+91', country: 'IN' },
    { code: '+1', country: 'US' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'AU' },
    { code: '+971', country: 'UAE' },
    { code: '+1', country: 'CA' },
    { code: '+49', country: 'DE' },
    { code: '+33', country: 'FR' },
    { code: '+81', country: 'JP' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Contact Us | Get a Free Quote"
        description="Contact The Creators Marketing Agency today for a free consultation. Let's discuss how we can help you achieve your digital marketing goals."
        keywords="contact digital marketing agency, get a quote, marketing consultation"
        canonicalPath="/contact"
      />
      {/* Header */}
      <section className="relative bg-gradient-to-br from-brand-background-alt via-white to-brand-background-alt text-brand-text py-32 overflow-hidden pt-24">
        {/* Minimal Background Elements */}
        <Motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full mix-blend-multiply blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"
        />
        <Motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full mix-blend-multiply blur-3xl opacity-40 translate-x-1/2 translate-y-1/2"
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        {/* Floating Particles */}
        {[
          { width: 56, height: 40, top: '12%', left: '18%', duration: 7.2 },
          { width: 48, height: 38, top: '35%', left: '70%', duration: 8.0 },
          { width: 64, height: 44, top: '60%', left: '42%', duration: 7.6 },
          { width: 32, height: 32, top: '78%', left: '22%', duration: 8.5 },
          { width: 50, height: 36, top: '25%', left: '88%', duration: 7.8 },
        ].map((p, i) => (
          <Motion.div
            key={i}
            className="absolute rounded-full bg-brand-accent/10"
            style={{ width: p.width, height: p.height, top: p.top, left: p.left }}
            animate={{ y: [0, -100, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span 
            className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block"
          >
            Get In Touch
          </span>
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-6"
          >
            Contact <span className="font-bold text-brand-primary">Us</span>
            <span className="block text-2xl md:text-4xl mt-2 font-light text-brand-text-light">
              Start Your Project Today
            </span>
          </h1>
          <Motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-brand-text-light max-w-2xl mx-auto leading-relaxed"
          >
            Have a question or want to start a project? We'd love to hear from you. Let's discuss how we can help transform your digital presence.
          </Motion.p>
          
          {/* Additional Content */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-brand-text-light"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-primary" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-primary" />
              <span>Expert Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-primary" />
              <span>Free Quote</span>
            </div>
          </Motion.div>
          
          <Motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1, y: [0, 10, 0] }}
             transition={{ delay: 1, duration: 2, repeat: Infinity }}
             className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          >
            <ChevronDown className="w-8 h-8 text-brand-primary opacity-50" />
          </Motion.div>
        </div>
      </section>

      <section className="py-32 relative bg-white">
        {/* Minimal Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <Motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <Motion.span 
                variants={fadeInUp} 
                className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block"
              >
                Contact Information
              </Motion.span>
              <Motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-light text-brand-text mb-12">
                Get In <span className="font-bold">Touch</span>
              </Motion.h2>
              <div className="space-y-6">
                <Motion.div 
                  variants={fadeInUp} 
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start group p-6 rounded-xl bg-white shadow-sm border border-brand-border hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-brand-background-alt p-4 rounded-xl mr-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-brand-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-brand-text">Visit Us</h3>
                    <p className="text-brand-text-light leading-relaxed">
                      No.24 Bharathi nagar zamin Pallavaram main road chennai 43<br />
                      <span className="text-sm text-brand-text-light/70">Open Monday - Friday, 9 AM - 6 PM</span>
                    </p>
                  </div>
                </Motion.div>
                <Motion.div 
                  variants={fadeInUp} 
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start group p-6 rounded-xl bg-white shadow-sm border border-brand-border hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-brand-background-alt p-4 rounded-xl mr-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="w-6 h-6 text-brand-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-brand-text">Call Us</h3>
                    <p className="text-brand-text-light">
                      <a href="tel:8124743600" className="hover:text-brand-primary transition-colors">8124743600</a>
                    </p>
                    <p className="text-sm text-brand-text-light/70 mt-1">Available 24/7 for urgent inquiries</p>
                  </div>
                </Motion.div>
                <Motion.div 
                  variants={fadeInUp} 
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start group p-6 rounded-xl bg-white shadow-sm border border-brand-border hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-brand-background-alt p-4 rounded-xl mr-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="w-6 h-6 text-brand-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-brand-text">Email Us</h3>
                    <p className="text-brand-text-light">
                      <a href="mailto:thecreatorsmarketingagency@gmail.com" className="hover:text-brand-primary transition-colors">thecreatorsmarketingagency@gmail.com</a>
                    </p>
                    <p className="text-sm text-brand-text-light/70 mt-1">We typically respond within 24 hours</p>
                  </div>
                </Motion.div>
              </div>

              <Motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-brand-border">
                <h3 className="text-xl font-semibold mb-6 text-brand-text">Follow Us</h3>
                <p className="text-brand-text-light mb-6 text-sm">Stay connected with us on social media for the latest updates and insights.</p>
                <div className="flex space-x-4">
                  <Motion.a 
                    href="#" 
                    aria-label="Facebook"
                    whileHover={{ y: -5, scale: 1.1 }} 
                    className="w-12 h-12 bg-white border border-brand-border rounded-xl flex items-center justify-center text-brand-text-light hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <Facebook className="w-5 h-5" />
                  </Motion.a>
                  <Motion.a 
                    href="#" 
                    aria-label="Twitter"
                    whileHover={{ y: -5, scale: 1.1 }} 
                    className="w-12 h-12 bg-white border border-brand-border rounded-xl flex items-center justify-center text-brand-text-light hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <Twitter className="w-5 h-5" />
                  </Motion.a>
                  <Motion.a 
                    href="#" 
                    aria-label="Instagram"
                    whileHover={{ y: -5, scale: 1.1 }} 
                    className="w-12 h-12 bg-white border border-brand-border rounded-xl flex items-center justify-center text-brand-text-light hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <Instagram className="w-5 h-5" />
                  </Motion.a>
                  <Motion.a 
                    href="https://www.linkedin.com/company/112085339/admin/dashboard/" target="_blank" rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    whileHover={{ y: -5, scale: 1.1 }} 
                    className="w-12 h-12 bg-white border border-brand-border rounded-xl flex items-center justify-center text-brand-text-light hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Motion.a>
                </div>
              </Motion.div>
            </Motion.div>

            {/* Contact Form */}
            <Motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-md p-8 border border-brand-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full -mr-16 -mt-16"></div>
              
              <Motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block relative z-10"
              >
                Send Message
              </Motion.span>
              <h2 className="text-3xl md:text-4xl font-light text-brand-text mb-8 relative z-10">
                Let's Start a <span className="font-bold">Conversation</span>
              </h2>
              <form ref={form} onSubmit={sendEmail} className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="user_name"
                      className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all outline-none bg-white focus:bg-white"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="user_email"
                      className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all outline-none bg-white focus:bg-white"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-text mb-2">Phone Number</label>
                    <div className="flex gap-2">
                      <div className="relative w-1/3">
                        <select 
                          className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all outline-none bg-white focus:bg-white appearance-none cursor-pointer"
                          defaultValue="+91"
                          name="country_code"
                          aria-label="Country Code"
                        >
                          {countryCodes.map((item, index) => (
                            <option key={index} value={item.code}>{item.code} ({item.country})</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                      <input 
                        type="tel" 
                        id="phone"
                        name="user_phone"
                        className="w-2/3 px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all outline-none bg-white focus:bg-white"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-brand-text mb-2">Subject *</label>
                    <div className="relative">
                      <select 
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all outline-none bg-white focus:bg-white appearance-none cursor-pointer"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>Select a Service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">Message *</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all outline-none resize-none bg-white focus:bg-white"
                    placeholder="Tell us about your project, goals, and how we can help..."
                    required
                  ></textarea>
                </div>

                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 text-green-600 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Something went wrong. Please try again later.
                  </div>
                )}

                <Motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full bg-brand-text text-white font-semibold py-4 rounded-lg hover:shadow-lg hover:bg-brand-text/90 transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {status === 'sending' ? 'Sending...' : 'Submit'}
                </Motion.button>
                <p className="text-xs text-brand-text-light mt-4 text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </Motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
