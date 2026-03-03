import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { Search, Share2, PenTool, Monitor, ShoppingCart, MousePointerClick, FileText, ArrowRight, ChevronDown, CheckCircle, Smartphone } from 'lucide-react';
import SEO from '../components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
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

const Services = () => {
  const services = [
    {
      id: 'search-engine-optimization',
      icon: <Search className="w-6 h-6 text-white" />,
      title: 'Search Engine Optimization',
      description: 'Improve your website ranking on search engines and drive organic traffic with our expert SEO strategies.',
      color: 'bg-brand-primary'
    },
    {
      id: 'social-media-marketing',
      icon: <Share2 className="w-6 h-6 text-white" />,
      title: 'Social Media Marketing',
      description: 'Build a strong social media presence and engage with your audience on platforms like Facebook, Instagram, and LinkedIn. We create content strategies that drive engagement and conversions.',
      color: 'bg-brand-primary'
    },
    {
      id: 'pay-per-click',
      icon: <MousePointerClick className="w-6 h-6 text-white" />,
      title: 'Pay Per Click',
      description: 'Get immediate results with targeted Pay-Per-Click campaigns on Google Ads and social media. Maximize ROI with data-driven ad strategies.',
      color: 'bg-brand-primary'
    },
    {
      id: 'website-development',
      icon: <Monitor className="w-6 h-6 text-white" />,
      title: 'Website Development',
      description: 'We build responsive, user-friendly, and visually stunning websites that convert visitors into customers. Modern design meets cutting-edge functionality.',
      color: 'bg-brand-primary'
    },
    {
      id: 'app-development',
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: 'App Development',
      description: 'We design and develop high-performance mobile apps for Android and iOS that delight users and drive business growth.',
      color: 'bg-brand-primary'
    },
    {
      id: 'e-commerce-website-development',
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      title: 'E-Commerce Website Development',
      description: 'Create robust online stores with seamless user experiences to boost your digital sales. Secure payment gateways and optimized checkout flows.',
      color: 'bg-brand-primary'
    },
    {
      id: 'logo-designing',
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: 'Logo Designing',
      description: 'Craft a unique and memorable brand identity with our professional logo design services. We create logos that tell your brand story.',
      color: 'bg-brand-primary'
    },
    {
      id: 'brochure-designing',
      icon: <FileText className="w-6 h-6 text-white" />,
      title: 'Brochure Designing',
      description: 'Design captivating brochures that effectively communicate your business message to potential clients. Print and digital formats available.',
      color: 'bg-brand-primary'
    }
  ];
  
  const particles = [
    { width: 42, height: 36, top: '10%', left: '15%', duration: 6 },
    { width: 50, height: 30, top: '25%', left: '70%', duration: 7 },
    { width: 28, height: 28, top: '60%', left: '40%', duration: 5.5 },
    { width: 35, height: 45, top: '75%', left: '20%', duration: 6.5 },
    { width: 24, height: 24, top: '35%', left: '85%', duration: 5.8 }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Our Services | Digital Marketing Solutions"
        description="Explore our comprehensive digital marketing services including SEO, PPC, content marketing, and more."
        keywords="seo services, ppc services, social media marketing, web development, digital marketing services"
        canonicalPath="/services"
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
        {particles.map((p, i) => (
          <Motion.div
            key={i}
            className="absolute rounded-full bg-brand-accent/10"
            style={{
              width: p.width,
              height: p.height,
              top: p.top,
              left: p.left,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span 
            className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block"
          >
            Our Services
          </span>
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-6"
          >
            Our <span className="font-bold text-brand-primary">Services</span>
            <span className="block text-2xl md:text-4xl mt-2 font-light text-brand-text-light">
              Professional Digital Solutions
            </span>
          </h1>
          <Motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-brand-text-light max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive digital solutions tailored to meet your business needs. From strategy to execution, we deliver results that matter.
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
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-primary" />
              <span>Proven Results</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-primary" />
              <span>Custom Solutions</span>
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

      {/* Services Grid */}
      <section className="py-32 relative bg-white">
        {/* Minimal Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <Motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-brand-border group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-background-alt/50 to-transparent rounded-bl-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150 group-hover:bg-brand-primary/5"></div>
                
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold mb-3 text-brand-text relative z-10">{service.title}</h2>
                <p className="text-brand-text-light mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>
                <Link to={`/services/${service.id}`} className="group/link inline-flex items-center font-medium text-brand-primary hover:text-brand-text transition-colors relative z-10" aria-label={`Learn more about ${service.title}`}>
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-brand-background-alt py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <Motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block"
            >
              Our Process
            </Motion.span>
            <h2 className="text-4xl md:text-6xl font-light text-brand-text mb-6">
              Our <span className="font-bold">Process</span>
            </h2>
            <p className="text-lg text-brand-text-light max-w-2xl mx-auto">
              We follow a proven methodology to ensure consistent results for our clients. Every project is executed with precision and care.
            </p>
          </Motion.div>

          <Motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <Motion.div variants={fadeInUp} className="text-center group relative">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-brand-primary text-3xl font-semibold mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white shadow-md border-2 border-brand-border group-hover:border-brand-primary relative z-10">
                1
              </div>
              <div className="absolute top-12 left-1/2 w-full h-1 bg-brand-border/50 -z-0 hidden md:block"></div>
              <h3 className="text-xl font-semibold mb-3 text-brand-text">Discovery</h3>
              <p className="text-brand-text-light">We analyze your business goals, target audience, and market position to create a comprehensive strategy.</p>
            </Motion.div>
            
            <Motion.div variants={fadeInUp} className="text-center group relative">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-brand-primary text-3xl font-semibold mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white shadow-md border-2 border-brand-border group-hover:border-brand-primary relative z-10">
                2
              </div>
              <div className="absolute top-12 left-1/2 w-full h-1 bg-brand-border/50 -z-0 hidden md:block"></div>
              <h3 className="text-xl font-semibold mb-3 text-brand-text">Strategy</h3>
              <p className="text-brand-text-light">We create a tailored roadmap with clear objectives, timelines, and success metrics.</p>
            </Motion.div>

            <Motion.div variants={fadeInUp} className="text-center group relative">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-brand-primary text-3xl font-semibold mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white shadow-md border-2 border-brand-border group-hover:border-brand-primary relative z-10">
                3
              </div>
              <div className="absolute top-12 left-1/2 w-full h-1 bg-brand-border/50 -z-0 hidden md:block"></div>
              <h3 className="text-xl font-semibold mb-3 text-brand-text">Execution</h3>
              <p className="text-brand-text-light">We implement the plan with precision, creativity, and attention to detail.</p>
            </Motion.div>

            <Motion.div variants={fadeInUp} className="text-center group relative">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-brand-primary text-3xl font-semibold mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white shadow-md border-2 border-brand-border group-hover:border-brand-primary relative z-10">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-text">Optimization</h3>
              <p className="text-brand-text-light">We monitor, analyze, and continuously improve performance to maximize results.</p>
            </Motion.div>
          </Motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
