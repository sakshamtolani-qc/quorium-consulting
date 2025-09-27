import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; 

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Scroll to the contact section smoothly
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Quorium Consulting",
    "description": "Learn about Quorium Consulting, a next-generation IT & AI solutions provider founded in 2023. We specialize in web development, AI systems, and digital strategy.",
    "url": "https://quoriumconsulting.com/about", 
    "mainEntity": {
      "@type": "Organization",
      "name": "Quorium Consulting",
      "url": "https://quoriumconsulting.com", 
      "logo": "https://quoriumconsulting.com/assets/qc-logo.png", 
      "foundingDate": "2023",
      "founder": {
        "@type": "Person",
        "name": "Saksham Tolani" 
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "XXXX",
        "addressLocality": "XXXX",
        "postalCode": "12345",
        "addressCountry": "INDIA" 
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 xxxxxxxx", //  Replace with your phone number
        "contactType": "customer service"
      }
    }
  };

  return (
    <>
      {/* SEO Meta Tags, Structured Data, and Social Cards */}
      <Helmet>
        <title>About Us | Quorium Consulting</title>
        <meta
          name="description"
          content="Discover Quorium Consulting, a next-gen IT & AI solutions consultancy. We turn visions into reality with proven experience in web/mobile development, AI systems, and digital strategy."
        />
        <meta
          name="keywords"
          content="About Quorium, IT Consultancy, AI Solutions, Digital Growth, Web Development, Mobile Development, Company History"
        />
        <link rel="canonical" href="https://quoriumconsulting.com/about" /> 

        {/* Open Graph (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="About Us | Quorium Consulting" />
        <meta property="og:description" content="Learn about our mission to drive digital growth through innovative IT and AI solutions." />
        <meta property="og:url" content="https://quoriumconsulting/about" /> 
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://quoriumconsulting.com/assets/about-us-banner.jpg" /> 
        <meta property="og:site_name" content="Quorium Consulting" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Quorium Consulting" />
        <meta name="twitter:description" content="Learn about our mission to drive digital growth through innovative IT and AI solutions." />
        <meta name="twitter:image" content="https://quoriumconsulting.com/assets/about-us-banner.jpg" /> 
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section id="about" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden" role="main" aria-labelledby="about-heading">
        <div className="absolute inset-0 bg-white"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Optimized Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1 h-full"
            >
              <img
                src="./images/webp/about-us.webp" // This path is correct if your 'images' folder is in the 'public' directory
                alt="The Quorium Consulting team collaborating in a modern office, planning digital strategies."
                className="w-full h-full min-h-[400px] object-cover rounded-lg shadow-lg"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            >
              <div>
                {/* Changed h2 to h1 for better SEO hierarchy */}
                <motion.h1
                  id="about-heading"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6"
                >
                  Turning Vision Into Reality -{' '}
                  <span className="text-violet-blue">
                    Backed by Proven Experience
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-base sm:text-lg text-black-coral leading-relaxed mb-4 sm:mb-6"
                >
                  We are a next-generation IT & AI solutions consultancy built on a foundation of proven experience. Our journey in delivering successful projects began in 2023 - helping businesses across industries achieve measurable digital growth.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-base sm:text-lg text-black-coral leading-relaxed mb-6 sm:mb-8"
                >
                  Today, we bring that expertise under our own banner, offering tailored solutions in web & mobile development, AI-driven systems, ERP platforms, and digital strategy. Our team blends technical mastery with creative innovation, ensuring every project is designed for performance, scalability, and impact.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-violet-blue hover:bg-violet-blue/90 hover:shadow-lg transform hover:-translate-y-1"
                  aria-label="Contact us to discuss your project"
                >
                  Contact Us
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
