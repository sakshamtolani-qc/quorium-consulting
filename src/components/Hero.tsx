import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const slides = [
    {
      id: 1,
      image: './images/webp/hero-slide-1.webp',
      title: 'Transforming Ideas into Digital Reality'
    },
    {
      id: 2,
      image: './images/webp/hero-slide-5.webp',
      title: 'Discover Our Journey'
    },
    {
      id: 3,
      image: './images/webp/hero-slide-4.webp',
      title: 'Where Innovation Comes Alive'
    }
  ];


  return (
    <section
      id="home"
      className="section hero has-bg-image min-h-screen relative overflow-hidden flex items-center pt-16"
      style={{ backgroundImage: "url('./images/webp/hero-bg.webp')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Hero Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Smart. Scalable. Secure.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              We're a creative company that focuses on establishing long-term relationships with customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 text-charcoal font-bold rounded-full transition-all duration-300 hover:scale-105 bg-white hover:bg-white/90 hover:shadow-lg transform hover:-translate-y-1"
                aria-label="Explore our services"
              >
                Explore Now
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-charcoal transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
                aria-label="Contact us"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Slider - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Slider Container */}
              <div className="relative aspect-[575/550]">
                {/* Slides */}
                {slides.map((slide, index) => (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentSlide ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-violet-blue/20 to-blue-crayola/20 rounded-2xl overflow-hidden relative">
                      {/* Image Container */}
                      <div className="w-full h-full relative">
                        <img
                          src={slide.image}
                          width="575"
                          height="550"
                          alt={slide.title} // descriptive alt
                          className="w-full h-full object-cover rounded-2xl"
                          loading="lazy"
                        />
                        {/* Overlay with title */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
                          <h2 className="text-white text-xl font-semibold text-center"> {/* changed to h2 for correct heading order */}
                            {slide.title}
                          </h2>
                        </div>
                        {/* Play button for second slide (if needed, add aria-label) */}
                        {/* {index === 1 && (
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer" aria-label="Play video">
                              <Play className="w-8 h-8 text-charcoal ml-1" />
                            </div>
                          </div>
                        )} */}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-white/80 text-charcoal rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 z-20"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-white/80 text-charcoal rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 z-20"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
              {/* Move indicators here, outside the slider image area */}
              <div className="flex justify-center mt-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-5 h-5 min-w-[22px] min-h-[22px] rounded-full flex items-center justify-center transition-all duration-300 p-0 border-0 focus:outline-none focus:ring-2 focus:ring-violet-blue/70 mx-1 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'}`}
                    style={{ margin: 0 }}
                  >
                    <span className="sr-only">Go to slide {index + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;









