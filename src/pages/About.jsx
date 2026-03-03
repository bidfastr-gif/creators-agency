import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Award, Users, Target, Globe, CheckCircle, Coffee, Smile, Trophy, Linkedin, Twitter, Mail, Star, TrendingUp, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  const Motion = motion;
  const _MOTION = motion;
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

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  const showTeamSection = false;

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: 'Passion',
      description: 'We love what we do and bring that energy to every project.'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge strategies.'
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: 'Excellence',
      description: 'We never settle for good enough; we aim for the best.'
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Collaboration',
      description: 'We work as an extension of your team.'
    }
  ];

  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Visionary leader with 15+ years in digital marketing.',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Jane Smith',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Creative strategist passionate about brand storytelling.',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Mike Johnson',
      role: 'SEO Specialist',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Data wizard who knows how to rank you #1.',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Sarah Williams',
      role: 'Social Media Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Social butterfly connecting brands with audiences.',
      social: { linkedin: '#', twitter: '#', email: '#' }
    }
  ];

  const timeline = [
    {
      year: 'aug 2025',
      title: 'The Beginning',
      description: 'The Creators Marketing Agency was founded with a vision to revolutionize digital marketing.'
    },
    {
      year: 'jan 2026',
      title: 'Rapid Growth',
      description: 'Expanded our team and onboarded our first set of clients, marking a strong start.'
    },
    {
      year: 'Future',
      title: 'Global Vision',
      description: 'Aiming to expand our footprint internationally and set new industry standards.'
    }
  ];

  const awards = [
    {
      title: 'Best SEO Agency',
      year: '2025',
      organization: 'Digital Marketing Awards',
      icon: <TrendingUp className="w-6 h-6 text-brand-gold" />
    },
    {
      title: 'Top Rated Agency',
      year: '2026',
      organization: 'Clutch',
      icon: <Star className="w-6 h-6 text-brand-gold" />
    },
    {
      title: 'Creative Excellence',
      year: '2026',
      organization: 'Web Design Awards',
      icon: <Award className="w-6 h-6 text-brand-gold" />
    }
  ];

  const stats = [
    { label: "Happy Clients", value: "200+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Team Members", value: "25+" },
    { label: "Years Experience", value: "15+" }
  ];

  return (
    <div className="bg-white overflow-hidden">
      <SEO 
        title="About Us | The Creators Marketing Agency"
        description="Learn more about The Creators Marketing Agency, our team, our mission, and how we help businesses succeed in the digital landscape."
        keywords="about the creators marketing agency, digital marketing team, marketing agency history, company mission"
        canonicalPath="/about"
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-brand-background-alt via-white to-brand-background-alt text-brand-text overflow-hidden pt-20 pb-20">
        {/* Minimal Animated Background Elements */}
        <Motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full mix-blend-multiply filter blur-3xl -translate-y-1/2 translate-x-1/2 opacity-40"
        />
        <Motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full mix-blend-multiply filter blur-3xl translate-y-1/2 -translate-x-1/2 opacity-40"
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        {/* Floating Particles */}
        {[
          { width: 56, height: 40, top: '18%', left: '22%', duration: 7.2 },
          { width: 48, height: 38, top: '28%', left: '68%', duration: 8.0 },
          { width: 64, height: 44, top: '62%', left: '38%', duration: 7.6 },
          { width: 32, height: 32, top: '76%', left: '16%', duration: 8.5 },
          { width: 50, height: 36, top: '22%', left: '84%', duration: 7.8 },
        ].map((p, i) => (
          <Motion.div
            key={i}
            className="absolute rounded-full bg-brand-accent/10"
            style={{ width: p.width, height: p.height, top: p.top, left: p.left }}
            animate={{ y: [0, -100, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight"
          >
            About <span className="text-brand-primary font-bold relative inline-block">
              The Creators Marketing Agency
            </span>
            <span className="block text-2xl md:text-4xl mt-2 font-light text-brand-text-light">
              Leading Digital Agency
            </span>
          </h1>
          <Motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-brand-text-light max-w-2xl mx-auto leading-relaxed"
          >
            We are a team of passionate digital strategists dedicated to helping businesses thrive in the digital age. Our mission is to transform brands through innovative marketing solutions that drive measurable results.
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
              <span>Data-Driven Strategies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-primary" />
              <span>Creative Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-primary" />
              <span>Proven Results</span>
            </div>
          </Motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1, y: [0, 10, 0] }}
             transition={{ delay: 1, duration: 2, repeat: Infinity }}
             className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-brand-primary opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-text text-white -mt-8 relative z-20 mx-4 md:mx-12 rounded-xl shadow-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/70 font-medium uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:w-1/2 relative group"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-light rounded-full z-0 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-beige rounded-full z-0 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                 <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Digital Marketing Team at Work" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block"
              >
                Our Story
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-light text-brand-text mb-6">
                From Humble Beginnings to <span className="font-bold">Digital Excellence</span>
              </h2>
              <p className="text-brand-text-light mb-6 leading-relaxed text-lg">
                Founded in January 2026, The Creators Marketing Agency started with a simple yet powerful mission: to bridge the gap between businesses and their digital potential. We are a dynamic and rapidly growing full-service digital agency with deep expertise in SEO, content marketing, social media strategy, web development, and data analytics.
              </p>
              <p className="text-brand-text-light mb-6 leading-relaxed text-lg">
                Our journey began when we recognized that many businesses struggle to navigate the complex digital landscape. We set out to create an agency that combines cutting-edge technology with creative storytelling, making digital marketing accessible and effective for businesses of all sizes.
              </p>
              <p className="text-brand-text-light mb-8 leading-relaxed text-lg">
                We believe in data-driven strategies, creative excellence, and transparent collaboration. Our approach is built on three core principles: measurable results, innovative thinking, and unwavering commitment to our clients' success.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start p-4 rounded-xl hover:bg-brand-background-alt transition-colors border border-transparent hover:border-brand-border"
                >
                  <CheckCircle className="w-6 h-6 text-brand-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-text text-lg">Data Driven</h3>
                    <p className="text-sm text-brand-text-light">Decisions based on facts and analytics</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start p-4 rounded-xl hover:bg-brand-background-alt transition-colors border border-transparent hover:border-brand-border"
                >
                  <CheckCircle className="w-6 h-6 text-brand-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-text text-lg">Creative Solutions</h3>
                    <p className="text-sm text-brand-text-light">Innovative thinking that stands out</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-brand-text text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Our Values
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Our Core <span className="font-bold">Values</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{value.title}</h3>
                <p className="text-white/70 text-center leading-relaxed group-hover:text-white transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-brand-background-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-10 rounded-xl shadow-md border border-brand-border hover:shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full -mr-8 -mt-8"></div>
              <Target className="w-12 h-12 text-brand-primary mb-6 relative z-10" />
              <h3 className="text-3xl font-semibold text-brand-text mb-4 relative z-10">Our Mission</h3>
              <p className="text-brand-text-light text-lg leading-relaxed relative z-10">
                To empower businesses with innovative digital marketing solutions that drive sustainable growth and create meaningful connections with their audience. We strive to demystify digital marketing and make it accessible and effective for everyone.
              </p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-10 rounded-xl shadow-md border border-brand-border hover:shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full -mr-8 -mt-8"></div>
              <Globe className="w-12 h-12 text-brand-primary mb-6 relative z-10" />
              <h3 className="text-3xl font-semibold text-brand-text mb-4 relative z-10">Our Vision</h3>
              <p className="text-brand-text-light text-lg leading-relaxed relative z-10">
                To be the leading digital marketing agency known for excellence, integrity, and delivering exceptional value to our clients worldwide. We envision a digital landscape where every business has the tools to succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              Our Journey
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-light text-brand-text mb-6">
              Our <span className="font-bold">Journey</span>
            </h2>
            <p className="text-lg text-brand-text-light max-w-2xl mx-auto">A timeline of our milestones and achievements</p>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-primary via-brand-primary/50 to-brand-primary opacity-20"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-full md:w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 border-brand-primary shadow-lg flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-brand-primary rounded-full"></div>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className={`w-full md:w-5/12 bg-brand-background-alt p-8 rounded-xl shadow-sm hover:shadow-md border-l-4 transition-all ${index % 2 === 0 ? 'border-brand-primary text-right md:text-left' : 'border-brand-primary text-left md:text-right'}`}
                  >
                    <span className="font-bold text-2xl block mb-2 text-brand-primary">{item.year}</span>
                    <h3 className="text-2xl font-semibold text-brand-text mb-2">{item.title}</h3>
                    <p className="text-brand-text-light">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-32 bg-brand-background-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              Recognition
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-light text-brand-text mb-6">
              Awards & <span className="font-bold">Recognition</span>
            </h2>
            <p className="text-lg text-brand-text-light max-w-2xl mx-auto">We are proud to be recognized for our work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white border border-brand-border p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-background-alt rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand-text">{award.title}</h3>
                <p className="text-brand-primary font-medium mb-1">{award.organization}</p>
                <span className="inline-block bg-brand-background-alt px-3 py-1 rounded-full text-sm mt-4 text-brand-text-light">{award.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at The Creators Marketing Agency */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:w-1/2"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4 block"
              >
                Our Culture
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-light text-brand-text mb-6">
                Life at <span className="font-bold">The Creators Marketing Agency</span>
              </h2>
              <p className="text-brand-text-light mb-6 leading-relaxed text-lg">
                We believe that a happy team leads to happy clients. Our culture is built on continuous learning, open communication, and celebrating small wins. We foster an environment where creativity thrives and innovation is encouraged.
              </p>
              <p className="text-brand-text-light mb-8 leading-relaxed text-lg">
                From team retreats to collaborative brainstorming sessions, we ensure that every team member feels valued and empowered to contribute their best work.
              </p>
              
              <div className="space-y-6">
                <motion.div whileHover={{ x: 10, scale: 1.02 }} className="flex items-center p-4 rounded-xl hover:bg-brand-background-alt transition-colors cursor-default border border-transparent hover:border-brand-border">
                   <div className="w-12 h-12 bg-brand-background-alt rounded-full flex items-center justify-center mr-4">
                      <Coffee className="w-6 h-6 text-brand-primary" />
                   </div>
                   <div>
                      <h3 className="font-semibold text-brand-text text-lg">Work-Life Balance</h3>
                      <p className="text-brand-text-light">Flexible hours and remote options</p>
                   </div>
                </motion.div>
                <motion.div whileHover={{ x: 10, scale: 1.02 }} className="flex items-center p-4 rounded-xl hover:bg-brand-background-alt transition-colors cursor-default border border-transparent hover:border-brand-border">
                   <div className="w-12 h-12 bg-brand-background-alt rounded-full flex items-center justify-center mr-4">
                      <Smile className="w-6 h-6 text-brand-primary" />
                   </div>
                   <div>
                      <h3 className="font-semibold text-brand-text text-lg">Fun Environment</h3>
                      <p className="text-brand-text-light">Team retreats and game nights</p>
                   </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:w-1/2 grid grid-cols-2 gap-4"
            >
               <motion.img variants={scaleIn} src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Office Culture" className="rounded-xl shadow-lg w-full h-48 object-cover transform translate-y-8 hover:scale-105 transition-transform duration-300" />
               <motion.img variants={scaleIn} src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Team Meeting" className="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
               <motion.img variants={scaleIn} src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Collaboration" className="rounded-xl shadow-lg w-full h-48 object-cover transform translate-y-8 hover:scale-105 transition-transform duration-300" />
               <motion.img variants={scaleIn} src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Happy Team" className="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Hidden temporarily */}
      {showTeamSection && (
      <section className="py-32 bg-brand-background-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              Our Team
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-light text-brand-text mb-6">
              Meet The <span className="font-bold">Team</span>
            </h2>
            <p className="text-lg text-brand-text-light">The experts behind your success</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-md overflow-hidden group border border-brand-border relative hover:shadow-lg"
              >
                <div className="relative overflow-hidden h-72">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-brand-text/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/company/112085339/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-brand-text"><Linkedin className="w-5 h-5" /></motion.a>
                     <motion.a whileHover={{ scale: 1.2 }} href="#" className="bg-white p-2 rounded-full text-brand-text"><Twitter className="w-5 h-5" /></motion.a>
                     <motion.a whileHover={{ scale: 1.2 }} href="#" className="bg-white p-2 rounded-full text-brand-text"><Mail className="w-5 h-5" /></motion.a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-brand-text mb-1">{member.name}</h3>
                  <p className="text-brand-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-brand-text-light italic border-t border-brand-border pt-3">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}
      
      {/* CTA Section */}
      <section className="py-32 bg-brand-text text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4 block"
          >
            Get Started
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light mb-6"
          >
            Ready to Work <span className="font-bold">With Us?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Let's collaborate to take your digital presence to the next level. Join hundreds of satisfied clients who have transformed their business with <span className="text-white font-semibold">The Creators Marketing Agency</span>.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-brand-text font-semibold py-4 px-10 rounded-lg text-lg transition-all shadow-xl hover:shadow-2xl"
            >
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
