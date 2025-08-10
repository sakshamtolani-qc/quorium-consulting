import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, 
  Users, 
  Megaphone, 
  Database, 
  Bot, 
  Smartphone, 
  BarChart3, 
  Zap, 
  Cloud, 
  Shield, 
  Palette 
} from 'lucide-react';

const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();

  // Top 3 services for home page
  const topServices = [
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
        'Software & infrastructure consulting'
      ]
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions to boost your online presence.',
      features: [
        'SEO (Search Engine Optimization)',
        'Social media marketing & advertising',
        'Content creation & branding strategy'
      ]
    }
  ];

  return (
    <section id="services" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-cultured relative overflow-hidden">
      <div className="absolute inset-0">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
            Our{' '}
            <span className="text-violet-blue">
              Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-black-coral max-w-3xl mx-auto px-4">
            We offer comprehensive digital solutions to help your business thrive in the modern landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {topServices.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cursor-pointer group relative bg-white backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-lavender-web hover:border-violet-blue/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-violet-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-violet-blue/20 rounded-lg mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-violet-blue" aria-hidden="true" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3 sm:mb-4 group-hover:text-violet-blue transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-black-coral mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                <ul className="space-y-2" role="list">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-cadet-blue text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-violet-blue rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-2" aria-hidden="true"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center px-8 py-4 bg-violet-blue text-white font-bold rounded-full hover:bg-violet-blue/90 transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;