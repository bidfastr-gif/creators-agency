import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, BarChart, Globe, Users, Megaphone, Smartphone, PenTool, Target, TrendingUp, Lightbulb, Rocket, ShieldCheck, Phone, Award, CheckCircle, Clock, Star, Instagram, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import QuickEnquiryModal from '../components/QuickEnquiryModal';

const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });

  useEffect(() => {
    if (isInView) {
      // Extract number from string (e.g., "500+" -> 500)
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
      motionValue.set(numericValue);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Preserve the suffix (e.g., "+" or "%")
        const suffix = value.replace(/[0-9]/g, '');
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, value]);

  return <span ref={ref} />;
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showWorksSection = false;
  const showBrandsSection = false;
  const _MOTION = motion;
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };



  const blobAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  

  // removed unused 'pulse' animation to satisfy lint rules

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const processSteps = [
    {
      id: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your business needs and create a customized strategy'
    },
    {
      id: '02',
      title: 'Development & Execution',
      description: 'Our team implements the strategy with precision and creativity'
    },
    {
      id: '03',
      title: 'Launch & Optimize',
      description: 'We deliver results on time and continuously optimize performance'
    }
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital marketing strategies tailored to your business goals',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: 'SEO & SEM',
      description: 'Boost your online visibility and drive targeted traffic to your website',
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand loyalty across all platforms',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your target audience',
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: 'PPC Advertising',
      description: 'Maximize ROI with data-driven paid advertising campaigns',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: 'Brand Development',
      description: 'Build a strong brand identity that stands out in the market',
    }
  ];

  const works = [
    {
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Viral Campaign'
    },
    {
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Corporate Identity'
    },
    {
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'E-commerce Platform'
    }
  ];



  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: '',
      content: 'The Creators Marketing Agency transformed our online presence. We saw a 200% increase in leads within the first 3 months.'
    },
    {
      name: 'Michael Chen',
      role: '',
      content: 'The team is professional, creative, and results-oriented. Their data-driven approach is a game-changer.'
    },
    {
      name: 'Emily Davis',
      role: '',
      content: 'I highly recommend The Creators Marketing Agency. They truly understand our brand and have helped us scale significantly.'
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-12 h-12 text-white" />,
      title: 'Proven Results',
      description: 'We deliver measurable results that impact your bottom line directly.'
    },
    {
      icon: <Clock className="w-12 h-12 text-white" />,
      title: 'Timely Delivery',
      description: 'We respect your time and always deliver projects on or before the deadline.'
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-white" />,
      title: 'Transparent Process',
      description: 'Full visibility into our work process with regular updates and reports.'
    },
    {
      icon: <Star className="w-12 h-12 text-white" />,
      title: 'Expert Team',
      description: 'Work with a team of seasoned professionals dedicated to your success.'
    }
  ];

  const tools = [
    { icon: <Globe className="w-8 h-8" />, name: 'Global Reach' },
    { icon: <BarChart className="w-8 h-8" />, name: 'Analytics' },
    { icon: <Smartphone className="w-8 h-8" />, name: 'Mobile First' },
    { icon: <PenTool className="w-8 h-8" />, name: 'Creative' },
    { icon: <Target className="w-8 h-8" />, name: 'Targeting' },
    { icon: <TrendingUp className="w-8 h-8" />, name: 'Growth' },
    { icon: <Users className="w-8 h-8" />, name: 'CRM' },
    { icon: <Rocket className="w-8 h-8" />, name: 'Automation' },
  ];

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Results vary by service. SEO typically takes 3-6 months for significant impact, while PPC and Social Media ads can generate leads immediately after launch."
    },
    {
      question: "Do you offer custom packages?",
      answer: "Yes! We understand that every business is unique. We analyze your goals and budget to create a tailored strategy that maximizes your ROI."
    },
    {
      question: "What makes The Creators Marketing Agency different?",
      answer: "Our data-driven approach combined with creative storytelling sets us apart. We don't just guess; we use advanced analytics to optimize every campaign for success."
    },
    {
      question: "How often do we get reports?",
      answer: "We provide comprehensive monthly reports and have a real-time dashboard you can access anytime to track campaign performance."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      <SEO 
        title="Top Digital Marketing Agency"
        description="The Creators Marketing Agency is a leading digital marketing agency offering SEO, PPC, social media marketing, and web development services to help your business grow."
        keywords="digital marketing, seo, ppc, social media, web development, marketing agency"
        canonicalPath="/"
      />
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center bg-gradient-to-br from-brand-background-alt via-white to-brand-background-alt text-brand-text overflow-hidden pt-20 pb-20">
        {/* Minimal Background Elements */}
        <motion.div 
          variants={blobAnimation}
          animate="animate"
          className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div 
          variants={blobAnimation}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-x-1/2 translate-y-1/2"
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div 
              className="lg:w-1/2 mb-10 lg:mb-0"
            >
              <span className="text-sm font-semibold text-brand-primary mb-4 uppercase tracking-[0.2em] letter-spacing block">
                Digital Marketing Excellence
              </span>
              <h1 
                className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-[1.1] text-brand-text"
              >
                Transform Your <br />
                <span className="font-bold text-brand-primary">Digital Presence</span>
              </h1>
              <motion.p 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-lg md:text-xl text-brand-text-light mb-10 max-w-xl leading-relaxed"
              >
                We craft data-driven marketing strategies that elevate brands and drive measurable growth. From concept to execution, we deliver results that matter.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <motion.a 
                  href="tel:8124743600" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-brand-text text-white font-semibold rounded-lg hover:bg-brand-text/90 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: 8124743600
                </motion.a>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div 
                variants={fadeInUp}
                className="mt-12 flex flex-wrap items-center gap-8 text-sm text-brand-text-light"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary" />
                  <span>500+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary" />
                  <span>100+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary" />
                  <span>2+ Years Experience</span>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative flex justify-center items-center mt-12 lg:mt-0"
            >
                {/* Solar System Orbit Animation (Enhanced) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    
                    {/* Minimal Sparkles */}
                    {[
                        { top: '12%', left: '18%', duration: 3.4, delay: 0.2 },
                        { top: '25%', left: '72%', duration: 4.2, delay: 0.6 },
                        { top: '60%', left: '40%', duration: 3.8, delay: 0.3 },
                        { top: '78%', left: '22%', duration: 3.6, delay: 0.8 },
                        { top: '35%', left: '88%', duration: 3.9, delay: 0.1 },
                        { top: '15%', left: '50%', duration: 3.5, delay: 0.7 },
                        { top: '48%', left: '30%', duration: 4.0, delay: 0.4 },
                        { top: '68%', left: '66%', duration: 3.7, delay: 0.5 },
                        { top: '82%', left: '48%', duration: 4.1, delay: 0.2 },
                        { top: '10%', left: '85%', duration: 3.3, delay: 0.9 },
                        { top: '52%', left: '12%', duration: 4.0, delay: 0.3 },
                        { top: '38%', left: '58%', duration: 3.6, delay: 0.4 },
                        { top: '72%', left: '10%', duration: 3.8, delay: 0.6 },
                        { top: '28%', left: '44%', duration: 3.5, delay: 0.5 },
                        { top: '90%', left: '70%', duration: 4.2, delay: 0.1 },
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-brand-primary/40 rounded-full"
                            style={{ top: s.top, left: s.left }}
                            animate={{ opacity: [0, 0.8, 0], scale: [0, 1.2, 0] }}
                            transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
                        />
                    ))}

                    {/* Minimal Orbit Tracks */}
                    <div className="absolute w-[280px] h-[280px] border border-dashed border-brand-text/10 rounded-full" />
                    <div className="absolute w-[350px] h-[350px] border border-dashed border-brand-text/5 rounded-full opacity-50" />
                    <div className="absolute w-[450px] h-[450px] border border-dashed border-brand-text/10 rounded-full" />
                    
                    {/* Inner Orbit (Clockwise) */}
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[280px] h-[280px]"
                    >
                        {/* Instagram - Top */}
                        <motion.div 
                             className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 bg-white shadow-lg rounded-xl border border-brand-border backdrop-blur-sm"
                             animate={{ rotate: -360 }}
                             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                            <Instagram className="w-5 h-5 text-brand-text" />
                        </motion.div>
                        {/* Facebook - Bottom */}
                        <motion.div 
                             className="absolute -bottom-6 left-1/2 -translate-x-1/2 p-3 bg-white shadow-lg rounded-xl border border-brand-border backdrop-blur-sm"
                             animate={{ rotate: -360 }}
                             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                            <Facebook className="w-5 h-5 text-brand-text" />
                        </motion.div>
                    </motion.div>

                    {/* Outer Orbit (Counter-Clockwise) */}
                     <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[450px] h-[450px]"
                    >
                        {/* LinkedIn - Left */}
                        <motion.div 
                             className="absolute top-1/2 -left-6 -translate-y-1/2 p-3 bg-white shadow-lg rounded-xl border border-brand-border backdrop-blur-sm"
                             animate={{ rotate: 360 }}
                             transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                        >
                            <Linkedin className="w-5 h-5 text-brand-text" />
                        </motion.div>
                        {/* Twitter - Right */}
                        <motion.div 
                             className="absolute top-1/2 -right-6 -translate-y-1/2 p-3 bg-white shadow-lg rounded-xl border border-brand-border backdrop-blur-sm"
                             animate={{ rotate: 360 }}
                             transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                        >
                            <Twitter className="w-5 h-5 text-brand-text" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Center Minimal Node */}
                <div className="relative z-20">
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.03, 1],
                            boxShadow: [
                                "0 0 30px rgba(37, 99, 235, 0.2)",
                                "0 0 50px rgba(37, 99, 235, 0.3)",
                                "0 0 30px rgba(37, 99, 235, 0.2)"
                            ]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-20 w-24 h-24 bg-gradient-to-br from-brand-text to-brand-text/80 rounded-2xl flex items-center justify-center border-2 border-brand-border shadow-xl"
                    >
                        <Rocket className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    {/* Subtle Glow Effects */}
                    <div className="absolute inset-0 bg-brand-primary/10 blur-3xl rounded-full -z-10" />
                </div>
            </motion.div>


          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-10">
          <svg className="w-full h-24 sm:h-32 md:h-48" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,224C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-background-alt/30 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block"
            >
              About Us
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-light text-brand-text mb-6">
              Who <span className="font-bold">We Are</span>
            </h2>
            <p className="text-lg text-brand-text-light max-w-2xl mx-auto">
              A team of passionate digital strategists dedicated to transforming brands through innovative marketing solutions
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-border aspect-[4/3] flex items-center justify-center group">
                 <div 
                   className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                   role="img"
                   aria-label="Team collaborating on digital project"
                 ></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-text/80 via-brand-text/20 to-transparent"></div>
                 <div className="relative z-10 text-center px-8">
                   <h3 className="text-white text-3xl md:text-4xl font-bold mb-3">Creativity Meets Technology</h3>
                   <p className="text-white/90 text-lg">Where innovation drives results</p>
                 </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:w-1/2 w-full"
            >
              <div className="space-y-6 text-lg text-brand-text-light leading-relaxed">
                <p className="text-xl text-brand-text">
                  At The Creators Marketing Agency, we believe in doing things differently. We craft ideas and strategies that are unique and perfectly aligned with your brand identity. Our mission is to bring your brand to life by weaving compelling narratives that resonate deeply with your audience.
                </p>
                <p className="text-lg">
                  As a full-service digital marketing and technology company, we deliver high-end solutions that transform and elevate your brand's digital presence. We combine data-driven insights with creative excellence to drive measurable results.
                </p>
                <p className="text-lg">
                  Our approach is collaborative, transparent, and results-focused. We work as an extension of your team, ensuring every strategy is tailored to your specific goals and market position.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-brand-border">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-5xl font-bold text-brand-text mb-2"><Counter value="100+" /></h3>
                  <p className="text-brand-text-light font-medium text-sm uppercase tracking-wide">Clients</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-5xl font-bold text-brand-text mb-2"><Counter value="400+" /></h3>
                  <p className="text-brand-text-light font-medium text-sm uppercase tracking-wide">Projects</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-5xl font-bold text-brand-text mb-2"><Counter value="10+" /></h3>
                  <p className="text-brand-text-light font-medium text-sm uppercase tracking-wide">Countries</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-32 bg-brand-background-alt relative overflow-hidden">
        {/* Minimal Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block"
            >
              Our Process
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-light text-brand-text mb-6">
              How <span className="font-bold">We Work</span>
            </h2>
            <p className="text-lg text-brand-text-light max-w-2xl mx-auto">Our proven methodology to deliver exceptional results</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white text-brand-text p-10 rounded-xl relative overflow-hidden group transition-all duration-300 shadow-md border border-brand-border hover:border-brand-primary hover:shadow-xl"
              >
                {/* Subtle Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-background-alt/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 text-brand-text">
                   <ArrowRight size={100} />
                </div>
                
                <div className="relative z-10">
                    <div className="text-7xl font-light text-brand-primary/80 mb-6 group-hover:text-brand-primary transition-colors duration-300">{step.id}</div>
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-brand-primary transition-colors">{step.title}</h3>
                    <p className="text-brand-text-light leading-relaxed group-hover:text-brand-text transition-colors">
                      {step.description}
                    </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block"
            >
              Our Services
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-light text-brand-text mb-6">
              What <span className="font-bold">We Offer</span>
            </h2>
            <p className="text-lg text-brand-text-light max-w-2xl mx-auto">Comprehensive digital marketing solutions tailored to your success</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-brand-border group relative overflow-hidden hover:border-brand-primary/30"
              >
                {/* Subtle Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-background-alt/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brand-background-alt rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-all duration-300 shadow-sm group-hover:shadow-md">
                    {React.cloneElement(service.icon, { className: "w-8 h-8 text-brand-text group-hover:text-white transition-colors duration-300" })}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-brand-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-brand-text-light leading-relaxed group-hover:text-brand-text transition-colors duration-300">
                    {service.description}
                  </p>
                  

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-brand-text text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4 block"
            >
              Why Choose Us
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Why Choose <span className="font-bold">The Creators Marketing Agency?</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">We don't just deliver services, we deliver transformative experiences.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(item.icon, { className: "w-12 h-12 text-white" })}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Stack Section */}
      <section className="py-24 bg-brand-background-alt overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block"
            >
              Technology Stack
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-light text-brand-text mb-4">
              Powered by <span className="font-bold">Best-in-Class</span> Technology
            </h2>
            <p className="text-lg text-brand-text-light">We leverage the latest tools and platforms to drive your growth</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-brand-border w-32 h-32 justify-center hover:shadow-md hover:border-brand-primary/30 transition-all cursor-pointer group"
              >
                <div className="text-brand-text-light group-hover:text-brand-primary transition-colors duration-300 mb-3">
                  {tool.icon}
                </div>
                <span className="font-medium text-brand-text text-sm group-hover:text-brand-primary transition-colors">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Section - Hidden temporarily */}
      {showWorksSection && (
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-20"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block"
              >
                Portfolio
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-light text-brand-text mb-4">
                Works We're <span className="font-bold">Proud Of</span>
              </h2>
              <p className="text-lg text-brand-text-light">Check out some of our recent success stories</p>
            </div>
            <Link to="/works" className="hidden md:inline-flex items-center px-6 py-3 border-2 border-brand-text text-brand-text font-semibold rounded-lg hover:bg-brand-text hover:text-white transition-all duration-300">
              View All Works
            </Link>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {works.map((work, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="object-cover w-full h-80 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-text/95 via-brand-text/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-white/80 font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-sm uppercase tracking-wide">{work.category}</span>
                  <h3 className="text-2xl font-semibold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{work.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/works" className="inline-flex items-center px-6 py-3 border-2 border-brand-text text-brand-text font-semibold rounded-lg hover:bg-brand-text hover:text-white transition-all duration-300">
              View All Works
            </Link>
          </div>
        </div>
      </section>
      )}

      {/* Testimonials Section */}
      <section className="py-32 bg-brand-background-alt">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block"
            >
              Testimonials
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-light text-brand-text mb-6">
              What Our <span className="font-bold">Clients Say</span>
            </h2>
            <p className="text-lg text-brand-text-light">Don't just take our word for it</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-md border border-brand-border relative hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-4 text-brand-text/10">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
                  </svg>
                </div>
                <div className="mb-6">
                    <h3 className="font-semibold text-lg text-brand-text">{testimonial.name}</h3>
                    <p className="text-brand-primary text-sm font-medium">{testimonial.role}</p>
                </div>
                <p className="text-brand-text-light italic leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>
                <div className="flex mt-4 text-brand-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      {showBrandsSection && (
      <section className="py-32 bg-white text-brand-text">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block"
            >
              Our Clients
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Brands We've <span className="font-bold">Nurtured</span>
            </h2>
            <p className="text-lg text-brand-text-light">Trusted by innovative companies worldwide</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-70"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-brand-background-alt h-24 rounded-lg flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-sm border border-brand-border hover:border-brand-primary/30"
              >
                <span className="text-brand-text-light font-semibold text-sm uppercase tracking-wide">BRAND {i + 1}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      )}

      {/* FAQ Section */}
      <section className="py-32 bg-brand-background-alt">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block"
            >
              FAQ
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-light text-brand-text mb-6">
              Frequently Asked <span className="font-bold">Questions</span>
            </h2>
            <p className="text-lg text-brand-text-light">Got questions? We've got answers.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-brand-border hover:shadow-md transition-shadow duration-300"
              >
                <details className="group p-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-semibold text-lg text-brand-text list-none">
                    <span>{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <ArrowRight className="w-5 h-5 text-brand-primary rotate-90" />
                    </span>
                  </summary>
                  <div className="text-brand-text-light mt-4 leading-relaxed pl-2 border-l-2 border-brand-primary ml-1">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-primary relative overflow-hidden mb-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Boost your presence. Craft your winning marketing strategy.
            </h2>
            <p className="text-xl text-brand-light mb-10 max-w-2xl mx-auto">
              Unlock your brand’s potential today! Let's build something amazing together.
            </p>
            <motion.button 
              type="button"
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-5 bg-white text-brand-primary font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer hover:bg-brand-accent hover:text-white"
            >
              Book A Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* Modal */}
      <QuickEnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
