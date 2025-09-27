import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // ✅ Console errors se bachne ke liye updated library
import {
  Globe, Users, Megaphone, Database, Bot,
  Smartphone, BarChart3, Zap, Cloud, Shield, Palette
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allServices = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Tailor-made websites that match your unique business needs.',
      features: [
        'E-commerce portals, booking systems, membership sites',
        'Responsive & mobile-first design',
        'CMS integration (WordPress, Shopify, etc.)'
      ]
    },
    {
      icon: Users,
      title: 'IT Consultancy',
      description: 'Technology strategy & roadmapping for your business growth.',
      features: [
        'Cloud migration & optimization (AWS, Azure, Google Cloud)',
        'Cybersecurity audits & risk mitigation',
        'Software & infrastructure consulting',
        'IT governance & compliance'
      ]
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions to boost your online presence.',
      features: [
        'SEO (Search Engine Optimization)',
        'Social media marketing & advertising',
        'Influencer & affiliate marketing',
        'WhatsApp, email & SMS campaigns',
        'Content creation & branding strategy'
      ]
    },
    {
      icon: Database,
      title: 'Custom ERP Solutions',
      description: 'Enterprise resource planning systems tailored to your business processes.',
      features: [
        'Employee & payroll management systems',
        'Attendance tracking & HR modules',
        'School/college administration platforms',
        'Inventory & supply chain management'
      ]
    },
    {
      icon: Bot,
      title: 'AI-Powered Solutions',
      description: 'Intelligent solutions that leverage artificial intelligence for business growth.',
      features: [
        'Chatbot & virtual assistant development',
        'Predictive analytics & forecasting tools',
        'Computer vision & image recognition systems',
        'NLP (Natural Language Processing) applications',
        'AI-driven personalization & recommendation engines'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for modern businesses.',
      features: [
        'Android & iOS native apps',
        'Cross-platform app development (Flutter, React Native)',
        'On-demand service apps (food delivery, taxi booking, etc.)',
        'Integration with payment gateways & APIs'
      ]
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Transform your data into actionable business insights.',
      features: [
        'Business intelligence dashboards',
        'Big data processing & analytics',
        'Data visualization tools',
        'Real-time reporting systems',
        'Data warehousing solutions'
      ]
    },
    {
      icon: Zap,
      title: 'Automation Solutions',
      description: 'Streamline your business processes with intelligent automation.',
      features: [
        'Workflow automation & RPA (Robotic Process Automation)',
        'Automated lead generation & CRM integration',
        'AI-powered document processing',
        'Marketing automation tools'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Modern cloud infrastructure and development operations for scalability.',
      features: [
        'Cloud architecture design & deployment',
        'CI/CD pipeline setup',
        'Kubernetes & container management',
        'Cloud cost optimization'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity Services',
      description: 'Protect your business with comprehensive security solutions.',
      features: [
        'Penetration testing & vulnerability assessments',
        'Network monitoring & threat detection',
        'Disaster recovery & business continuity planning',
        'Data privacy compliance (GDPR, HIPAA, etc.)'
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that creates exceptional digital experiences.',
      features: [
        'Wireframes & prototypes',
        'User research & usability testing',
        'Interactive design for web & mobile'
      ]
    }
  ];

  // SEO: Improved Structured Data for a list of all services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Quorium Consulting Service Portfolio",
    "description": "A comprehensive list of digital and IT services offered by Quorium Consulting to drive business growth.",
    "numberOfItems": allServices.length,
    "itemListElement": allServices.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "Quorium Consulting",
          "url": "https://www.quoriumconsulting.com" 
        }
      }
    }))
  };

  const handleContactClick = () => navigate('/#contact');

  return (
    <div className="min-h-screen bg-cultured pt-32" lang="en">
      <Helmet>
        <title>Our Services | Quorium Consulting</title>
        <meta
          name="description"
          content="Explore Quorium Consulting's full portfolio of digital services: website development, AI solutions, ERP, mobile apps, marketing, and more to grow your business."
        />
        <meta
          name="keywords"
          content="Website Development, Mobile App Development, AI Solutions, ERP Systems, Digital Marketing, Cloud Services, Cybersecurity, Data Analytics, Automation"
        />
        <link rel="canonical" href="https://www.quoriumconsulting.com/services" /> 

        {/* Open Graph Tags */}
        <meta property="og:title" content="Our Services | Quorium Consulting" />
        <meta
          property="og:description"
          content="Discover tailored IT & AI solutions: Web, Mobile, ERP, Cloud, Marketing, and Cybersecurity for business growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.quoriumconsulting.com/services" />
        <meta property="og:site_name" content="Quorium Consulting" />
        <meta property="og:image" content="https://www.quoriumconsulting.com/assets/services-banner.jpg" /> 

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Quorium Consulting" />
        <meta name="twitter:description" content="Explore our services: Web, Mobile, AI, ERP, Marketing, Cloud, and more." />
        <meta name="twitter:image" content="https://www.quoriumconsulting.com/assets/services-banner.jpg" />

        {/* Structured Data (Schema.org JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Services Section */}
      <section
        ref={ref}
        className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
        role="main"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-crayola/8 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              Our Complete <span className="text-violet-blue">Service Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-black-coral max-w-3xl mx-auto px-4">
              Discover our comprehensive range of digital solutions designed to transform your business and drive growth.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            role="list"
          >
            {allServices.map((service, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cursor-pointer group relative bg-white backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-lavender-web hover:border-violet-blue/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
                role="listitem"
                aria-label={service.title}
              >
                <div className="absolute inset-0 bg-violet-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-violet-blue/20 rounded-lg mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon
                      className="w-6 h-6 sm:w-8 sm:h-8 text-violet-blue"
                      aria-hidden="true"
                    />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-3 sm:mb-4 group-hover:text-violet-blue transition-colors duration-300">
                    {service.title}
                  </h2>

                  <p className="text-black-coral mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  <ul className="space-y-2" role="list">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-cadet-blue text-sm sm:text-base"
                      >
                        <div
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-violet-blue rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-2"
                          aria-hidden="true"
                        ></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mt-16 sm:mt-20"
          >
            <div className="bg-white rounded-2xl p-8 sm:p-12 border border-lavender-web shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-black-coral mb-6 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business. Get in touch with us today for a free consultation.
              </p>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center px-8 py-4 bg-violet-blue text-white font-bold rounded-full hover:bg-violet-blue/90 transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact Us Now
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
