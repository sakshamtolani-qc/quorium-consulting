// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, ArrowLeft } from 'lucide-react';
// import { Helmet } from 'react-helmet-async'; 

// const Hero: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % 3);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + 3) % 3);
//   };

//   const slides = [
//     {
//       id: 1,
//       image: './images/webp/hero-slide-1.webp',
//       title: 'Transforming Ideas into Digital Reality'
//     },
//     {
//       id: 2,
//       image: './images/webp/hero-slide-5.webp',
//       title: 'Discover Our Journey'
//     },
//     {
//       id: 3,
//       image: './images/webp/hero-slide-4.webp',
//       title: 'Where Innovation Comes Alive'
//     }
//   ];

//   //  Homepage ke liye SEO-optimized Structured Data
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     "name": "Quorium Consulting",
//     "url": "https://www.quoriumconsulting.com", 
//     "potentialAction": {
//       "@type": "SearchAction",
//       "target": {
//         "@type": "EntryPoint",
//         "urlTemplate": "https://www.quoriumconsulting.com/search?q={search_term_string}"
//       },
//       "query-input": "required name=search_term_string"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Quorium Consulting",
//       "logo": {
//         "@type": "ImageObject",
//         "url": "https://www.quoriumconsulting.com/images/webp/qc.webp"
//       }
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Quorium Consulting | IT & AI Solutions for Business Growth</title>
//         <meta 
//           name="description" 
//           content="Quorium Consulting provides smart, scalable, and secure IT and AI solutions. We focus on long-term relationships to transform your ideas into digital reality." 
//         />
//         <link rel="canonical" href="https://www.quoriumconsulting.com" />
//         {/* Open Graph (Facebook, etc.) */}
//         <meta property="og:title" content="Quorium Consulting | IT & AI Solutions for Business Growth" />
//         <meta property="og:description" content="We build smart, scalable, and secure digital solutions to grow your business. Discover our services." />
//         <meta property="og:url" content="https://www.quoriumconsulting.com" />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content="https://www.quoriumconsulting.com/images/webp/hero-banner.jpg" /> 

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Quorium Consulting | IT & AI Solutions" />
//         <meta name="twitter:description" content="We build smart, scalable, and secure digital solutions to grow your business." />
//         <meta name="twitter:image" content="https://www.quoriumconsulting.com/images/webp/hero-banner.jpg" />
        
//         {/* JSON-LD Structured Data */}
//         <script type="application/ld+json">
//           {JSON.stringify(structuredData)}
//         </script>
//       </Helmet>

//       <section
//         id="home"
//         className="section hero has-bg-image min-h-screen relative overflow-hidden flex items-center pt-16"
//         style={{ backgroundImage: "url('./images/webp/hero-bg.webp')" }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
//             {/* Hero Content - Left Side */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="lg:col-span-3 text-center lg:text-left"
//             >
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
//               >
//                 Smart. Scalable. Secure.
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
//               >
//                 We're a creative company that focuses on establishing long-term relationships with customers.
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//               >
//                 <button
//                   onClick={() => scrollToSection('services')}
//                   className="px-8 py-4 text-charcoal font-bold rounded-full transition-all duration-300 hover:scale-105 bg-white hover:bg-white/90 hover:shadow-lg transform hover:-translate-y-1"
//                   aria-label="Explore our services"
//                 >
//                   Explore Now
//                 </button>

//                 <button
//                   onClick={() => scrollToSection('contact')}
//                   className="px-8 py-4 text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-charcoal transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
//                   aria-label="Contact us"
//                 >
//                   Contact Us
//                 </button>
//               </motion.div>
//             </motion.div>

//             {/* Hero Slider - Right Side */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="lg:col-span-2 relative"
//             >
//               <div className="relative rounded-2xl overflow-hidden">
//                 <div className="relative aspect-[575/550]">
//                   {slides.map((slide, index) => (
//                     <motion.div
//                       key={slide.id}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: index === currentSlide ? 1 : 0 }}
//                       transition={{ duration: 0.5 }}
//                       className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
//                     >
//                       <div className="w-full h-full bg-gradient-to-br from-violet-blue/20 to-blue-crayola/20 rounded-2xl overflow-hidden relative">
//                         <div className="w-full h-full relative">
//                           <img
//                             src={slide.image}
//                             width="575"
//                             height="550"
//                             alt={slide.title}
//                             className="w-full h-full object-cover rounded-2xl"
//                             loading="lazy"
//                           />
//                           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
//                             <h2 className="text-white text-xl font-semibold text-center">
//                               {slide.title}
//                             </h2>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}

//                   <button
//                     onClick={prevSlide}
//                     aria-label="Previous Slide"
//                     className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-white/80 text-charcoal rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 z-20"
//                   >
//                     <ArrowLeft className="w-6 h-6" />
//                   </button>
//                   <button
//                     onClick={nextSlide}
//                     aria-label="Next Slide"
//                     className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-white/80 text-charcoal rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 z-20"
//                   >
//                     <ArrowRight className="w-6 h-6" />
//                   </button>
//                 </div>
//                 <div className="flex justify-center mt-4">
//                   {slides.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentSlide(index)}
//                       aria-label={`Go to slide ${index + 1}`}
//                       className={`w-5 h-5 min-w-[22px] min-h-[22px] rounded-full flex items-center justify-center transition-all duration-300 p-0 border-0 focus:outline-none focus:ring-2 focus:ring-violet-blue/70 mx-1 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'}`}
//                       style={{ margin: 0 }}
//                     >
//                       <span className="sr-only">Go to slide {index + 1}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;


// Path: src/components/Hero.tsx (Final Polished Version with Broad Black Border)

import React, { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const slides = [
    {
      id: 1,
      image: './images/webp/hero-slide-1.webp',
      subheading: 'INNOVATE. CREATE. DELIVER.',
      title: 'Transforming Ideas into Digital Reality.',
      description: 'We build smart, scalable, and secure software solutions that drive business growth and innovation.'
    },
    {
      id: 2,
      image: './images/webp/hero-slide-5.webp',
      subheading: 'DATA-DRIVEN STRATEGY',
      title: 'Unlock Insights with Artificial Intelligence.',
      description: 'Leverage the power of AI and Machine Learning to make smarter decisions and automate processes.'
    },
    {
      id: 3,
      image: './images/webp/hero-slide-4.webp',
      subheading: 'ROBUST & RELIABLE',
      title: 'Engineering for the Future.',
      description: 'Our focus is on creating long-term, scalable architecture that grows with your business.'
    }
  ];

  const structuredData = { /* ... SEO data ... */ };

  return (
    <>
      <Helmet>
        <title>Quorium Consulting | IT & AI Solutions for Business Growth</title>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <section
        id="home"
        className="relative h-screen min-h-[700px] w-full overflow-hidden text-white"
      >
        {/* Background Slider */}
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
          </motion.div>
        </AnimatePresence>
        
        {/* Inner Border/Frame Effect (UPDATED FOR BROAD BLACK BORDER) */}
        {/* <div className="absolute inset-x-0 top-[80px] bottom-0 sm:inset-x-2 sm:top-[88px] sm:bottom-2 md:inset-x-4 md:top-[96px] md:bottom-4 border-[10px] sm:border-[12px] md:border-[16px] border-black/30 rounded-xl z-20 pointer-events-none shadow-2xl shadow-black/50"></div> */}


        {/* Content on Top (Pushed down to account for Navbar) */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-4 pt-20 sm:pt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <p className="text-sm font-bold tracking-[4px] uppercase text-[#7c8db5] mb-4">
                {slides[currentSlide].subheading}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button onClick={() => scrollToSection('services')} className="px-8 py-4 bg-white text-[#1a1433] font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
              Discover Our Services
            </button>
            <button onClick={() => scrollToSection('contact-section')} className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#1a1433] transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </motion.div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
          {slides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`} />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        {/* <button onClick={() => scrollToSection('about-section')} className="absolute bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white flex items-center gap-2 text-sm uppercase tracking-widest transition-colors" style={{ writingMode: 'vertical-rl' }}>
          Scroll <ArrowDown size={20} className="animate-bounce mt-2" />
        </button> */}
      </section>
    </>
  );
};

export default Hero;
