import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; 

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'why-choose-us', 'our-solutions', 'services', 'testimonials', 'contact'];
        const scrollPosition = window.scrollY + 200;
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const element = document.getElementById(section);
          if (element) {
            if (scrollPosition >= element.offsetTop) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const handleNavigation = (itemId: string) => {
    if (itemId === 'services') {
      navigate('/services');
    } else if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(itemId), 100);
    } else {
      scrollToSection(itemId);
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Why Choose Us', id: 'why-choose-us' },
    { label: 'Our Solutions', id: 'our-solutions' },
    { label: 'Services', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  // SEO ke liye Navigation ka Structured Data
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": "https://www.quoriumconsulting.com/", 
    "potentialAction": navItems.map(item => ({
      "@type": "Action",
      "name": item.label,
      "target": item.id === 'services'
        ? `https://www.quoriumconsulting.com/services`
        : `https://www.quoriumconsulting.com/#${item.id}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(navigationSchema)}
        </script>
      </Helmet>

      {/* Desktop Luxury Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:block fixed top-6 left-0 right-0 z-50"
      >
        <div className="flex justify-center w-full navbar-container">
          <div className="relative">
            <div className="relative bg-gradient-to-r from-[#2f2559] to-[#221a42] backdrop-blur-2xl border border-white/20 rounded-full px-6 lg:px-8 py-4 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full"></div>
              <div className="relative flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="flex items-center space-x-2 pr-3 sm:pr-4 lg:pr-6 border-r border-white/20 cursor-pointer"
                  onClick={() => navigate('/')}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <img src="/images/qc-logo.png" alt="Quorium Consulting Logo" /> 
                  </div>
                  <span className="text-white font-bold text-sm lg:text-base xl:text-lg tracking-wide">Quorium Consulting</span>
                </motion.div>
                <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                      className="relative"
                    >
                      <button
                        onClick={() => handleNavigation(item.id)}
                        className={`relative px-2.5 lg:px-3 py-2.5 text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 rounded-lg group ${
                          (location.pathname === '/services' && item.id === 'services') || 
                          (location.pathname === '/' && activeSection === item.id)
                            ? 'text-white'
                            : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {(location.pathname === '/services' && item.id === 'services') || 
                          (location.pathname === '/' && activeSection === item.id)
                            ? (
                              <motion.div
                                layoutId="activeBackground"
                                className="absolute inset-0 bg-violet-blue/30 rounded-lg"
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                            )
                            : null
                        }
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg bg-violet-blue/20"></div>
                        <span className="relative z-10">{item.label}</span>
                        {(location.pathname === '/services' && item.id === 'services') || 
                          (location.pathname === '/' && activeSection === item.id)
                            ? (
                              <motion.div
                                layoutId="activeIndicator"
                                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-violet-blue rounded-full"
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                            )
                            : null
                        }
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#2f2559] to-[#221a42] backdrop-blur-2xl border-b border-white/20"
      >
        <div className="flex items-center justify-between h-16 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="w-6 h-6 rounded-md flex items-center justify-center">
              <img src="/images/qc-logo.png" alt="Quorium Consulting Logo Mobile" />
            </div>
            <span className="text-white font-bold text-sm sm:text-base lg:text-lg">Quorium Consulting</span>
          </motion.div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} 
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/20 bg-gradient-to-r from-[#2f2559] to-[#221a42] backdrop-blur-2xl"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`block w-full text-left text-sm sm:text-base font-medium transition-all duration-200 py-3 px-4 rounded-lg ${
                    (location.pathname === '/services' && item.id === 'services') || 
                    (location.pathname === '/' && activeSection === item.id)
                      ? 'text-white bg-violet-blue/30 border border-violet-blue/50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
