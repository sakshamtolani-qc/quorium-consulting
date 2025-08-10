import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
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
              src="./images/webp/about-us.webp"
              alt="Team collaboration in modern office environment"
              className="w-full h-full min-h-[400px] object-cover rounded-lg"
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
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6"
              >
                Turning Vision Into Reality - {' '}
                <span className="text-violet-blue">
                  Backed by Proven Experience
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base sm:text-lg text-black-coral leading-relaxed mb-4 sm:mb-6"
              >
                We are a next-generation IT & AI solutions consultancy built on a foundation of proven experience. Our journey in delivering successful projects began in 2023 - helping businesses across industries achieve measurable digital growth.

                Today, we bring that expertise under our own banner, offering tailored solutions in web & mobile development, AI-driven systems,
                ERP platforms, and digital strategy. Our team blends technical mastery with creative innovation, ensuring every project is
                designed for performance, scalability, and impact.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base sm:text-lg text-black-coral leading-relaxed mb-6 sm:mb-8"
              >
                From the first idea to final delivery, we work closely with our clients — ensuring transparency,
                exceeding expectations, and creating solutions that drive real results.
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
                aria-label="Contact us to start your project"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;