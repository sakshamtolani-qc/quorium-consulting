import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [expandedAccordion, setExpandedAccordion] = useState(0);

  const toggleAccordion = (index: number) => {
    setExpandedAccordion(expandedAccordion === index ? -1 : index);
  };

  const accordionItems = [
    {
      title: 'Professional Design',
      content: 'We combine creativity with precision engineering to design interfaces, websites, and applications that aren\'t just beautiful — they\'re functional, intuitive, and built for results. Every design reflects your brand\'s unique story and goals.'
    },
    {
      title: 'Top-Notch Support',
      content: 'Your success is our commitment. We provide responsive, reliable, and proactive support to keep your systems running seamlessly — 24/7. Whether it\'s troubleshooting, upgrades, or strategic guidance, we\'ve got your back.'
    },
    {
      title: 'Exclusive Assets',
      content: 'Access premium design resources, custom illustrations, and unique visual elements that set your brand apart. From bespoke icons to tailored animations, every asset is crafted to fit your brand identity and captivate your audience.'
    }
  ];

  return (
    <section id="why-choose-us" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">
          {/* About Banner Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1 h-full"
          >
            <img
              src="./images/webp/about-banner.webp"
              alt="Professional team collaboration and problem solving"
              className="w-full h-full min-h-[400px] object-cover rounded-lg"
              loading="lazy"
              decoding="async"
              width="800"
              height="600"
            />
          </motion.div>

          {/* Accordion Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl font-semibold text-violet-blue mb-2"
              >
                Why Choose Us?
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-6 sm:mb-8"
              >
                We deliver innovative, future-ready solutions that empower businesses to scale, perform, and lead in the digital era.
              </motion.h3>
            </div>

            {/* Accordion Items */}
            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white border border-lavender-web rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-lavender-web/30 transition-colors duration-300"
                    aria-expanded={expandedAccordion === index}
                    aria-controls={`accordion-content-${index}`}
                  >
                    <span className="font-semibold text-charcoal text-lg">{item.title}</span>
                    <motion.div
                      animate={{ rotate: expandedAccordion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-violet-blue"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <motion.div
                    id={`accordion-content-${index}`}
                    initial={false}
                    animate={{
                      height: expandedAccordion === index ? 'auto' : 0,
                      opacity: expandedAccordion === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-black-coral leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
