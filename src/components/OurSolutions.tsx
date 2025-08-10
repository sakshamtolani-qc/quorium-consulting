import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const OurSolutions: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const featureItems = [
    'We bring together innovation and strategy',
    'Seamless integration across all your systems',
    'Custom-built tools that fit your unique needs',
    'Continuous support to keep you running at your best'
  ];

  return (
    <section id="our-solutions" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">
          {/* Feature Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8 order-1"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg sm:text-xl font-semibold text-violet-blue mb-2"
              >
                Our Solutions
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4 sm:mb-6"
              >
                We make your spending stress-free for you to have the perfect control.
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base sm:text-lg text-black-coral leading-relaxed mb-6 sm:mb-8"
              >
                We deliver smart, scalable, and secure technology solutions to help you stay ahead in a rapidly evolving digital world.
                From AI-driven insights to tailor-made software, our services empower your business to operate efficiently, engage customers better, and grow faster.
              </motion.p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {featureItems.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-violet-blue rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-black-coral leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Banner Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative order-2 h-full"
          >
            <img
              src="./images/webp/feature-banner.webp"
              alt="Feature banner showing business solutions and control"
              className="w-full h-full min-h-[400px] object-cover rounded-lg"
              loading="lazy"
              decoding="async"
              width="800"
              height="600"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
