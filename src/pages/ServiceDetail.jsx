import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import SEO from '../components/SEO';
import QuickEnquiryModal from '../components/QuickEnquiryModal';

const servicesData = {
  'search-engine-optimization': {
    title: 'Search Engine Optimization',
    heroDescription: 'As the best SEO Company, we have consistently delivered successful organic campaigns by getting top to bottom information of our customer\'s industry.',
    description: 'Our SEO group of advertisers incorporates specialized leads, creatives, architects and designers. We have worked in the most aggressive enterprises, in numerous areas around, with both family household brands and small and medium-sized organizations. We trust in building long-term relationships with clients, in light of shared standards and achievement.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
    whatIs: {
      title: 'What is SEO (Search Engine Optimization)?',
      description: [
        'Search Engine Optimization or SEO to put it plainly is a lot of principles that can be trailed by Web site (or blog) proprietors to streamline their sites for web search engines and in this way improve their internet search rankings. Furthermore, it is likewise an incredible method to build the nature of their sites by making them easy to understand, quicker and less demanding to explore.',
        'Web optimization can likewise be considered as a structure since the entire procedure has various principles (or rules), various stages and a lot of controls. In the present aggressive market SEO could really compare to ever. Web Search Engines serve a large number of clients every day searching for answers to their inquiries or for answers for their issues.'
      ],
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80'
    },
    advantages: [
      'Increase Organic Traffic',
      'Better User Experience',
      'Higher Brand Credibility',
      'Cost-Effective Marketing',
      'Long-Term Strategy',
      'Competitive Advantage'
    ],
    packages: [
      {
        name: 'Basic',
        price: '₹7,000',
        period: '/mo',
        subtitle: 'up-to 5 keywords',
        features: [
          'Keyword Research',
          'On-Page SEO',
          'Meta Tags Optimization',
          'Basic Competitor Analysis',
          'Monthly Reporting'
        ],
        isPopular: false
      },
      {
        name: 'Business',
        price: '₹12,000',
        period: '/mo',
        subtitle: 'up-to 15 keywords',
        promo: '1 Month Free - Yearly Subscription',
        features: [
          'Advanced Keyword Research',
          'Technical SEO Audit',
          'Content Optimization',
          'Backlink Analysis',
          'Bi-Weekly Reporting',
          'Google My Business Setup'
        ],
        isPopular: true
      },
      {
        name: 'Premium',
        price: '₹25,000',
        period: '/mo',
        subtitle: 'up-to 30 keywords',
        promo: '2 Month Free - Yearly Subscription',
        features: [
          'Comprehensive SEO Strategy',
          'Content Creation (4 Blogs)',
          'High-Quality Link Building',
          'Conversion Rate Optimization',
          'Weekly Reporting',
          'Dedicated Account Manager'
        ],
        isPopular: false
      }
    ]
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    heroDescription: 'Boost your brand visibility and engagement across all major social platforms with our expert strategies.',
    description: 'Social media is more than just posting updates; it\'s about building a community. Our team creates engaging content and manages your profiles on Facebook, Instagram, LinkedIn, and Twitter to ensure your brand voice is heard. We analyze audience behavior to deliver the right message at the right time.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    whatIs: {
      title: 'What is Social Media Marketing?',
      description: [
        'Social Media Marketing (SMM) involves using social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic. This involves publishing great content on your social media profiles, listening to and engaging your followers, analyzing your results, and running social media advertisements.',
        'The major social media platforms (at the moment) are Facebook, Instagram, Twitter, LinkedIn, Pinterest, YouTube, and Snapchat. SMM helps companies increase brand exposure and broaden customer reach.'
      ],
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80'
    },
    advantages: [
      'Increased Brand Awareness',
      'Higher Conversion Rates',
      'Better Customer Satisfaction',
      'Improved Search Engine Rankings',
      'Cost-Effective',
      'Marketplace Insights'
    ],
    packages: [
      {
        name: 'Basic',
        price: '₹8,000',
        period: '/mo',
        subtitle: '2 Social Platforms',
        features: [
          'Profile Setup & Optimization',
          '8 High-Quality Posts',
          'Basic Hashtag Strategy',
          'Monthly Reporting'
        ],
        isPopular: false
      },
      {
        name: 'Business',
        price: '₹15,000',
        period: '/mo',
        subtitle: '3 Social Platforms',
        promo: '1 Month Free - Yearly Subscription',
        features: [
          '12 High-Quality Posts',
          'Reels/Short Video Creation (2)',
          'Community Management',
          'Basic Ad Campaign Setup',
          'Bi-Weekly Reporting'
        ],
        isPopular: true
      },
      {
        name: 'Premium',
        price: '₹28,000',
        period: '/mo',
        subtitle: '4 Social Platforms',
        promo: '2 Month Free - Yearly Subscription',
        features: [
          '20 High-Quality Posts',
          'Reels/Short Video Creation (4)',
          'Advanced Ad Campaign Management',
          'Influencer Outreach',
          'Weekly Strategy Calls',
          'Dedicated Social Media Manager'
        ],
        isPopular: false
      }
    ]
  },
  'pay-per-click': {
    title: 'Pay Per Click',
    heroDescription: 'Drive immediate results and targeted traffic to your website with our data-driven PPC campaigns.',
    description: 'Our PPC experts manage your ad spend efficiently to maximize ROI. Whether it\'s Google Ads or Social Media Ads, we target the right audience with compelling ad copy and optimized landing pages. We continuously monitor and adjust campaigns to ensure you get the best cost-per-acquisition.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    whatIs: {
      title: 'What is Pay Per Click (PPC)?',
      description: [
        'PPC stands for pay-per-click, a model of internet marketing in which advertisers pay a fee each time one of their ads is clicked. Essentially, it\'s a way of buying visits to your site, rather than attempting to "earn" those visits organically. Search engine advertising is one of the most popular forms of PPC.',
        'It allows advertisers to bid for ad placement in a search engine\'s sponsored links when someone searches on a keyword that is related to their business offering. This ensures that your ads are seen by the right people at the right time.'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    advantages: [
      'Immediate Results',
      'Measurable ROI',
      'Targeted Audience',
      'Brand Exposure',
      'Control Over Costs',
      'Quick Entry to Market'
    ],
    packages: [
      {
        name: 'Basic',
        price: '₹5,000',
        period: '/mo + Ad Spend',
        subtitle: 'Up to ₹15k Ad Spend',
        features: [
          'Google Search Ads',
          'Keyword Research',
          'Ad Copy Creation',
          'Monthly Reporting'
        ],
        isPopular: false
      },
      {
        name: 'Business',
        price: '₹10,000',
        period: '/mo + Ad Spend',
        subtitle: 'Up to ₹50k Ad Spend',
        promo: '1 Month Free - Yearly Subscription',
        features: [
          'Google Search & Display Ads',
          'Competitor Analysis',
          'Landing Page Consultation',
          'A/B Testing',
          'Bi-Weekly Reporting'
        ],
        isPopular: true
      },
      {
        name: 'Premium',
        price: '₹20,000',
        period: '/mo + Ad Spend',
        subtitle: 'Up to ₹1.5L Ad Spend',
        promo: '2 Month Free - Yearly Subscription',
        features: [
          'Multi-Channel Campaigns',
          'Remarketing Campaigns',
          'Conversion Tracking Setup',
          'Landing Page Optimization',
          'Weekly Reporting',
          'Dedicated Account Manager'
        ],
        isPopular: false
      }
    ]
  },
  'website-development': {
    title: 'Website Development',
    heroDescription: 'Create a stunning, responsive, and high-performing website that represents your brand perfectly.',
    description: 'Your website is your digital storefront. We build custom websites that are not only visually appealing but also fast, secure, and user-friendly. From simple corporate sites to complex web applications, our developers use the latest technologies to bring your vision to life.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    whatIs: {
      title: 'What is Website Development?',
      description: [
        'Website development refers to the work that goes into building a website. This could apply to anything from creating a single plain-text page of developing a complex web application or social network.',
        'While web development typically refers to web markup and coding, website development includes all related development tasks, such as client-side scripting, server-side scripting, and network security configuration. A well-developed website is the foundation of your digital presence.'
      ],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
    advantages: [
      'Custom Design',
      'Mobile Responsiveness',
      'SEO Friendly Structure',
      'Fast Loading Speed',
      'Secure & Scalable',
      'Easy Maintenance'
    ],
    packages: [
      {
        name: 'Basic',
        price: '₹15,000',
        period: '',
        subtitle: 'Static Website',
        features: [
          'Up to 5 Pages',
          'Mobile Responsive',
          'Contact Form Integration',
          'Basic SEO Setup',
          '1 Month Support'
        ],
        isPopular: false
      },
      {
        name: 'Business',
        price: '₹25,000',
        period: '',
        subtitle: 'Dynamic Website',
        promo: 'Free Domain for 1 Year',
        features: [
          'Up to 10 Pages',
          'CMS Integration (WordPress)',
          'Blog Functionality',
          'Social Media Integration',
          'Google Analytics Setup',
          '3 Months Support'
        ],
        isPopular: true
      },
      {
        name: 'Premium',
        price: '₹45,000',
        period: '',
        subtitle: 'Custom Web Application',
        promo: 'Free Hosting for 1 Year',
        features: [
          'Custom Design & Development',
          'Advanced Functionality',
          'Database Integration',
          'User Authentication',
          'Speed Optimization',
          '6 Months Support'
        ],
        isPopular: false
      }
    ]
  },
  'app-development': {
    title: 'App Development',
    heroDescription: 'Build high-performance mobile apps for Android and iOS that engage users and accelerate growth.',
    description: 'We design and develop intuitive, secure, and scalable mobile applications. From MVPs to enterprise-grade products, our team delivers native and cross-platform apps that provide delightful experiences and measurable business impact.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    whatIs: {
      title: 'What is App Development?',
      description: [
        'App development is the process of creating software applications that run on mobile devices. It involves product strategy, UX/UI design, frontend and backend development, integration with third-party services, and quality assurance.',
        'Modern app development includes native approaches (Swift/Kotlin) and cross‑platform frameworks. A well-built app focuses on performance, accessibility, maintainability, and secure data handling to serve users effectively.'
      ],
      image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e3f3?auto=format&fit=crop&w=800&q=80'
    },
    advantages: [
      'Native Performance',
      'Cross-Platform Options',
      'Scalable Architecture',
      'User-Centered Design',
      'Secure Data Handling',
      'Analytics & Monitoring'
    ],
    packages: [
      {
        name: 'Basic',
        price: '₹35,000',
        period: '',
        subtitle: 'MVP Prototype',
        features: [
          'Requirements & Wireframes',
          'Basic UI Screens',
          'Core Features Implementation',
          'API Integration (1)',
          'App Store Listing Guidance'
        ],
        isPopular: false
      },
      {
        name: 'Business',
        price: '₹70,000',
        period: '',
        subtitle: 'Growth App',
        promo: 'Free Analytics Setup',
        features: [
          'Complete UI/UX',
          'Authentication & Secure Storage',
          'Push Notifications',
          'API Integrations (3)',
          'Crash Reporting & Analytics',
          '3 Months Support'
        ],
        isPopular: true
      },
      {
        name: 'Premium',
        price: '₹1,20,000+',
        period: '',
        subtitle: 'Enterprise App',
        promo: 'Priority Support',
        features: [
          'Custom Architecture',
          'Offline-First Capabilities',
          'Advanced Integrations',
          'CI/CD Pipeline Setup',
          'Performance Optimization',
          '6 Months Support'
        ],
        isPopular: false
      }
    ]
  },
  'e-commerce-website-development': {
    title: 'E-Commerce Website Development',
    heroDescription: 'Launch a robust online store with seamless shopping experiences to grow your digital sales.',
    description: 'We specialize in building e-commerce platforms that drive sales. Our solutions include secure payment gateways, inventory management, and intuitive product catalogs. We focus on user experience to minimize cart abandonment and maximize conversions.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80',
    whatIs: {
      title: 'What is E-Commerce Development?',
      description: [
        'E-commerce website development is the process of building an online store where customers can purchase products or services. It involves creating a user-friendly interface, secure payment gateways, and an efficient inventory management system.',
        'A well-developed e-commerce site ensures a seamless shopping experience, from browsing products to checkout, helping businesses reach a global audience. It includes features like product catalogs, shopping carts, and order processing.'
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80'
    },
    advantages: [
      'Global Reach',
      '24/7 Availability',
      'Personalized Experience',
      'Automated Operations',
      'Detailed Analytics',
      'Scalable Growth'
    ],
    packages: [
      {
        name: 'Basic',
        price: '₹30,000',
        period: '',
        subtitle: 'Startup Store',
        features: [
          'Up to 50 Products',
          'Payment Gateway Integration',
          'Mobile Responsive',
          'Basic Inventory Management',
          '1 Month Support'
        ],
        isPopular: false
      },
      {
        name: 'Business',
        price: '₹50,000',
        period: '',
        subtitle: 'Growth Store',
        promo: 'Free Domain for 1 Year',
        features: [
          'Up to 200 Products',
          'Advanced Product Filters',
          'User Reviews & Ratings',
          'Discount & Coupon System',
          'Google Shopping Integration',
          '3 Months Support'
        ],
        isPopular: true
      },
      {
        name: 'Premium',
        price: '₹80,000+',
        period: '',
        subtitle: 'Enterprise Store',
        promo: 'Free Hosting for 1 Year',
        features: [
          'Unlimited Products',
          'Multi-Vendor Capability',
          'Custom Features & Integrations',
          'Advanced Analytics Dashboard',
          'Priority Support',
          '6 Months Support'
        ],
        isPopular: false
      }
    ]
  },
  'logo-designing': {
    title: 'Logo Designing',
    heroDescription: 'Craft a unique and memorable brand identity that stands out in the crowded market.',
    description: 'A logo is the face of your brand. Our creative designers work closely with you to understand your brand values and create a logo that leaves a lasting impression. We ensure your logo is versatile and effective across all media types.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&w=800&q=80',
    whatIs: {
      title: 'What is Logo Designing?',
      description: [
        'Logo designing is the art of creating a visual symbol that represents a brand\'s identity. A logo is more than just an image; it is the face of a company and the foundation of its branding.',
        'Professional logo design involves understanding the brand\'s values, target audience, and industry to create a unique and memorable mark that distinguishes the business from its competitors. A great logo builds trust and recognition.'
      ],
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80'
    },
    advantages: [
      'Professional Identity',
      'Brand Recognition',
      'Consistency',
      'Versatility',
      'Timeless Design',
      'Competitive Edge'
    ],
    packages: [
      {
        name: 'Basic',
        price: '₹3,000',
        period: '',
        subtitle: 'Startup Identity',
        features: [
          '2 Logo Concepts',
          '2 Revisions',
          'High-Resolution JPG & PNG',
          'Transparent Background',
          '48 Hours Delivery'
        ],
        isPopular: false
      },
      {
        name: 'Business',
        price: '₹7,000',
        period: '',
        subtitle: 'Professional Brand',
        promo: 'Free Business Card Design',
        features: [
          '4 Logo Concepts',
          'Unlimited Revisions',
          'Source Files (AI, EPS, PDF)',
          'Social Media Kit',
          '3D Mockup',
          'Priority Support'
        ],
        isPopular: true
      },
      {
        name: 'Premium',
        price: '₹15,000',
        period: '',
        subtitle: 'Complete Branding',
        promo: 'Free Letterhead Design',
        features: [
          '6 Logo Concepts',
          'Brand Style Guide',
          'Stationery Design',
          'Social Media Covers',
          'Copyright Transfer',
          'Dedicated Designer'
        ],
        isPopular: false
      }
    ]
  },
  'brochure-designing': {
    title: 'Brochure Designing',
    heroDescription: 'Communicate your message effectively with professionally designed brochures and marketing materials.',
    description: 'Even in the digital age, printed materials hold value. We design captivating brochures, flyers, and catalogs that effectively communicate your products and services. Our designs are tailored to grab attention and drive action.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?auto=format&fit=crop&w=800&q=80',
    whatIs: {
      title: 'What is Brochure Designing?',
      description: [
        'Brochure designing involves creating informative and visually appealing printed documents to promote products, services, or events. Brochures are powerful marketing tools that can be distributed at trade shows, mailed to clients, or displayed in stores.',
        'Effective brochure design combines compelling copy with high-quality graphics to convey a clear message and encourage the reader to take action. It provides a tangible way for customers to engage with your brand.'
      ],
      image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80'
    },
    advantages: [
      'Tangible Marketing',
      'Targeted Distribution',
      'Cost-Effective',
      'Detailed Information',
      'Brand Credibility',
      'Lasting Impression'
    ],
    packages: [
      {
        name: 'Basic',
        price: '₹2,500',
        period: '',
        subtitle: 'Single Page / Flyer',
        features: [
          'Single Side Design',
          '2 Revisions',
          'Print Ready PDF',
          'High Resolution Images',
          'Stock Photos Included'
        ],
        isPopular: false
      },
      {
        name: 'Business',
        price: '₹5,000',
        period: '',
        subtitle: 'Bi-Fold Brochure',
        promo: 'Free Social Media Graphic',
        features: [
          '4 Pages Design',
          '4 Revisions',
          'Source File Included',
          'Custom Illustrations',
          'Photo Editing',
          'Print Coordination'
        ],
        isPopular: true
      },
      {
        name: 'Premium',
        price: '₹10,000',
        period: '',
        subtitle: 'Tri-Fold / Catalog',
        promo: 'Free Poster Design',
        features: [
          '6 Pages or Tri-Fold',
          'Unlimited Revisions',
          'Copywriting Assistance',
          'Advanced Typography',
          'Mockups Presentation',
          'Priority Delivery'
        ],
        isPopular: false
      }
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData[id];
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SEO 
          title="Service Not Found | Digital Marketing Agency"
          description="The requested service could not be found."
        />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <Link to="/services" className="text-sky-500 hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={`${service.title} Services | Digital Marketing Agency`}
        description={service.heroDescription}
        keywords={`${service.title.toLowerCase()}, digital marketing, services, ${service.title.toLowerCase()} agency`}
        canonicalPath={`/services/${id}`}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-background-alt via-white to-brand-background-alt py-20 lg:py-32 relative overflow-hidden text-brand-text">
        <Motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/10 rounded-l-full transform translate-x-1/3 blur-3xl opacity-40 mix-blend-multiply"
        />
        <Motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-primary/10 rounded-r-full transform -translate-x-1/3 blur-3xl opacity-40 mix-blend-multiply"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <Motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {service.title} <span className="text-brand-primary">Services</span>
              </h1>
              <p className="text-xl text-brand-text/80 mb-8 leading-relaxed">
                {service.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Motion.button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-brand-text text-brand-text font-semibold rounded-lg hover:bg-brand-text hover:text-white transition-all duration-300 cursor-pointer relative z-30"
                >
                  <span className="pointer-events-none">Quick Enquiry</span>
                  <ArrowRight className="ml-2 w-5 h-5 pointer-events-none" />
                </Motion.button>
              </div>
            </Motion.div>
            
            <Motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-brand-primary/10 rounded-2xl opacity-20 blur-lg"></div>
              <img 
                src={service.image}
                alt={`${service.title} hero illustration`} 
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] border border-brand-border"
                onError={(e) => {e.target.onerror = null; e.target.src = 'https://via.placeholder.com/800x600?text=Service+Image'}}
              />
            </Motion.div>
          </div>
        </div>
      </section>

      {/* About Service Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <Motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6">Overview of {service.title} Services</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                We combine creativity with technical expertise to deliver results that exceed expectations. Our team is dedicated to your success and works tirelessly to ensure your digital presence is strong and effective.
              </p>
            </Motion.div>
            <Motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-brand-primary/10 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                <img 
                  src={service.image} 
                  alt={`${service.title} overview`} 
                  className="relative rounded-2xl shadow-xl w-full object-cover h-[400px]"
                  onError={(e) => {e.target.onerror = null; e.target.src = 'https://via.placeholder.com/800x600?text=Service+Image'}}
                />
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      {service.whatIs && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6">{service.whatIs.title}</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <Motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                {service.whatIs.description.map((paragraph, index) => (
                  <p key={index} className="text-brand-text/70 text-lg leading-relaxed mb-6 text-justify">
                    {paragraph}
                  </p>
                ))}
              </Motion.div>
              <Motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                 <div className="relative">
                    <img 
                      src={service.whatIs.image} 
                      alt={`${service.whatIs.title} diagram`} 
                      className="w-full h-auto object-contain max-h-[400px]" 
                      onError={(e) => {e.target.onerror = null; e.target.src = 'https://via.placeholder.com/800x600?text=Details+Image'}}
                    />
                 </div>
              </Motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Advantages Section */}
      <section className="py-20 bg-brand-background-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Advantages of {service.title}</h2>
            <p className="text-xl text-brand-text-light">Why you should choose this service for your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.advantages.map((advantage, index) => (
              <Motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start border border-brand-border"
              >
                <div className="flex-shrink-0 bg-brand-background-alt p-3 rounded-full mr-4">
                  <CheckCircle className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">{advantage}</h3>
                  <p className="text-brand-text/70">We ensure that you get the maximum benefit from our {service.title.toLowerCase()} strategies.</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-brand-text text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Grow Your <span className="font-bold">Business?</span>
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our {service.title} services can help you achieve your goals.
          </p>
          <Motion.button
            type="button"
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-white text-brand-text font-semibold rounded-lg hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
          >
            <span>Quick Enquiry</span> <ArrowRight className="ml-2 w-5 h-5" />
          </Motion.button>
        </div>
      </section>

      <QuickEnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ServiceDetail;
