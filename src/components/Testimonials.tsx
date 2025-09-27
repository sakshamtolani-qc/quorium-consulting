import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; 

const Testimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: 'Lalit Gupta',
      role: 'Director - Arya Homes and Builder',
      avatar: './images/webp/testimonials/lalit.webp',
      rating: 5,
      review: 'They delivered a smart and efficient solution for our real estate needs. Great work and timely support.'
    },
    {
      name: 'Harikesh Kumar',
      role: 'Founder at BSDAGCT',
      avatar: './images/webp/testimonials/harikesh.webp',
      rating: 5,
      review: 'Quorium Consulting - 1st my choice for CMS services method'
    },
    {
      name: 'Prof. Arvind Mishra',
      role: 'Principal at M.D.P.G. College',
      avatar: './images/webp/testimonials/prof.webp',
      rating: 5,
      review: 'An excellent college management system by Quorium Consulting —simple, efficient, and reliable. Great support team too!'
    },
    {
      name: 'Pratibha Jaiswal',
      role: 'Founder at Akanya',
      avatar: './images/webp/testimonials/akanya.webp',
      rating: 5,
      review: 'Their team delivered a smooth, reliable, and user-friendly solution tailored to our e-commerce needs.'
    },
    {
      name: 'James Wilson',
      role: 'Startup Founder, NextGen Solutions',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      review: 'They turned our ambitious idea into a market-ready product. Their expertise in modern technologies and user experience design helped us secure our first round of funding. Exceptional work!'
    }
  ];

  // Testimonials ke liye SEO-optimized Structured Data
  const testimonialsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Client Testimonials for Quorium Consulting",
    "itemListElement": testimonials.map((testimonial, index) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating.toString(),
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewBody": testimonial.review,
      "publisher": {
        "@type": "Organization",
        "name": "Quorium Consulting"
      }
    }))
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-light-gray'
        }`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(testimonialsSchema)}
        </script>
      </Helmet>

      <section id="testimonials" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#221a42] to-[#2f2559] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-violet-blue/10 rounded-full blur-3xl will-change-transform"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-crayola/8 rounded-full blur-3xl will-change-transform"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              What Our{' '}
              <span className="text-violet-blue">
                Clients Say
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="cursor-pointer group relative bg-white backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-lavender-web hover:border-violet-blue/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-violet-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-violet-blue/20 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-violet-blue" aria-hidden="true" />
                  </div>

                  <div className="flex items-center justify-end mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {renderStars(testimonial.rating)}
                  </div>

                  <blockquote className="text-black-coral mb-6 leading-relaxed text-sm sm:text-base italic">
                    "{testimonial.review}"
                  </blockquote>

                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name}, ${testimonial.role}`}
                        className="w-12 h-12 rounded-full object-cover border-2 border-lavender-web group-hover:border-violet-blue/50 transition-colors duration-300"
                        loading="lazy"
                        decoding="async"
                        width="48"
                        height="48"
                      />
                      <div className="absolute inset-0 rounded-full bg-violet-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-charcoal font-semibold text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-cadet-blue text-xs sm:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-white/80 mb-6 text-lg">
              Ready to join our list of satisfied clients?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-violet-blue hover:bg-violet-blue/90 hover:shadow-lg transform hover:-translate-y-1"
              aria-label="Start your project today - Contact us"
            >
              Start Your Project Today
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
