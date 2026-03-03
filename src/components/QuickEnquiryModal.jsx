import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Loader2, CheckCircle } from 'lucide-react';

const QuickEnquiryModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    e.target.reset();
    
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-brand-text rounded-2xl shadow-2xl overflow-hidden border border-brand-primary/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h2 className="text-lg font-bold text-white tracking-wide">QUICK ENQUIRY</h2>
              <button
                onClick={onClose}
                className="p-1.5 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <div className="p-4 md:p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-medium text-white">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="Enter phone number"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs font-medium text-white">
                      Select a Service
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        required
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled className="bg-brand-text">Select a Service</option>
                        <option value="digital-strategy" className="bg-brand-text">Digital Strategy</option>
                        <option value="seo" className="bg-brand-text">SEO & SEM</option>
                        <option value="social-media" className="bg-brand-text">Social Media Marketing</option>
                        <option value="content" className="bg-brand-text">Content Marketing</option>
                        <option value="ppc" className="bg-brand-text">PPC Advertising</option>
                        <option value="branding" className="bg-brand-text">Brand Development</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-3 h-3 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirement */}
                <div className="space-y-1.5">
                  <label htmlFor="requirement" className="text-xs font-medium text-white">
                    Tell us briefly about your requirement
                  </label>
                  <textarea
                    id="requirement"
                    required
                    rows="3"
                    placeholder="Describe your project needs..."
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Footer Text */}
                <p className="text-xs text-white">
                  We will get back to you soon.
                </p>

                {/* Submit Button */}
                <Motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.95 }}
                  className={`w-full flex items-center justify-center px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer ${
                    isSuccess 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : 'bg-transparent border-white text-white hover:bg-white hover:text-brand-text'
                  } ${isSubmitting ? 'opacity-80 cursor-wait' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="mr-2 w-5 h-5" />
                      Submitted!
                    </>
                  ) : (
                    <>
                      Submit
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Motion.button>
              </form>
            </div>
          </Motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuickEnquiryModal;
