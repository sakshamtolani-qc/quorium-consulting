import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll listener for homepage sections
    const handleScroll = () => {
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'why-choose-us', 'our-solutions', 'services', 'testimonials', 'contact'];
        const scrollPosition = window.scrollY + 200;
        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionId = sections[i];
          const element = document.getElementById(sectionId);
          if (element && scrollPosition >= element.offsetTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavigation = (path?: string, sectionId?: string) => {
    if (path) {
      navigate(path);
    } else if (sectionId) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };
  
  // Saare purane aur naye navigation items
  const navItems = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Why Choose Us', sectionId: 'why-choose-us' },
    { label: 'Our Solutions', sectionId: 'our-solutions' },
    { label: 'Services', path: '/services' },
    { label: 'Testimonials', sectionId: 'testimonials' },
    {
      label: 'Explore',
      id: 'explore',
      children: [
        { label: 'Blog', path: '/blog' },
        { label: 'Career', path: '/career' },
      ],
    },
    {
      label: 'Policies',
      id: 'policies',
      children: [
        { label: 'Terms & Condition', path: '/terms' },
        { label: 'Privacy Policy', path: '/privacy' },
      ],
    },
    { label: 'Contact', sectionId: 'contact' },
  ];

  // SEO Schema ke liye saare links ko ek list mein daalna
  const flattenNavItems = navItems.flatMap(item => 
    item.children ? item.children.map(child => ({...child, parentId: item.id})) : [{...item}]
  );

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "potentialAction": flattenNavItems.map(item => ({
      "@type": "Action",
      "name": item.label,
      "target": item.path 
        ? `https://www.quoriumconsulting.com${item.path}`
        : `https://www.quoriumconsulting.com/#${item.sectionId}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(navigationSchema)}</script>
      </Helmet>

      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:block fixed top-6 left-0 right-0 z-50"
      >
        <div className="flex justify-center w-full">
          <div className="relative bg-gradient-to-r from-[#2f2559] to-[#221a42] backdrop-blur-2xl border border-white/20 rounded-full px-6 lg:px-8 py-4 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full"></div>
            <div className="relative flex items-center space-x-1 lg:space-x-2">
              <motion.div
                className="flex items-center space-x-2 pr-2 lg:pr-4 border-r border-white/20 cursor-pointer"
                onClick={() => handleNavigation(undefined, 'home')}
              >
                <img src="/images/qc-logo.png" alt="Quorium Consulting Logo" className="w-8 h-8"/>
                <span className="text-white font-bold text-sm lg:text-base tracking-wide">Quorium Consulting</span>
              </motion.div>
              <div className="flex items-center space-x-0.5 lg:space-x-1">
                {navItems.map(item => (
                  <motion.div
                    key={item.label}
                    onMouseEnter={() => item.children && setOpenDropdown(item.id)}
                    onMouseLeave={() => item.children && setOpenDropdown(null)}
                    className="relative"
                  >
                    <button
                      onClick={() => handleNavigation(item.path, item.sectionId)}
                      className={`relative px-2.5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 rounded-lg group flex items-center ${
                        (location.pathname === item.path || (item.children && item.children.some(c => location.pathname.startsWith(c.path))) || (location.pathname === '/' && activeSection === item.sectionId))
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {item.children && <ChevronDown className="w-4 h-4 ml-1 relative z-10 transition-transform duration-300 group-hover:rotate-180" />}
                      {(location.pathname === item.path || (item.children && item.children.some(c => location.pathname.startsWith(c.path))) || (location.pathname === '/' && activeSection === item.sectionId)) && (
                        <motion.div
                          layoutId="activeBackground"
                          className="absolute inset-0 bg-violet-blue/30 rounded-lg"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                    <AnimatePresence>
                      {item.children && openDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-gradient-to-br from-[#3a2d6e] to-[#2b2152] backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl p-2"
                        >
                          {item.children.map(child => (
                            <button
                              key={child.path}
                              onClick={() => handleNavigation(child.path)}
                              className="w-full text-left px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-violet-blue/20 rounded-md transition-colors duration-200"
                            >
                              {child.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
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
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation(undefined, 'home')}>
            <img src="/images/qc-logo.png" alt="Quorium Consulting Logo Mobile" className="w-6 h-6" />
            <span className="text-white font-bold text-sm">Quorium Consulting</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/20"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map(item => (
                  <div key={item.label}>
                    <button
                      onClick={() => item.children ? setOpenDropdown(openDropdown === item.id ? null : item.id) : handleNavigation(item.path, item.sectionId)}
                      className={`flex justify-between items-center w-full text-left text-sm font-medium py-3 px-4 rounded-lg ${
                        (location.pathname === item.path || (item.children && item.children.some(c => location.pathname.startsWith(c.path))) || (location.pathname === '/' && activeSection === item.sectionId))
                          ? 'text-white bg-violet-blue/30'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {item.children && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.id ? 'rotate-180' : ''}`} />}
                    </button>
                    <AnimatePresence>
                      {item.children && openDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 pt-1 space-y-1"
                        >
                          {item.children.map(child => (
                            <button
                              key={child.path}
                              onClick={() => handleNavigation(child.path)}
                              className="block w-full text-left text-sm text-white/70 hover:text-white py-2 px-4 rounded-lg"
                            >
                              {child.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
