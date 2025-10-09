// Path: src/components/Footer.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleScrollTo = (sectionId: string) => {
    // Agar hum pehle se homepage par nahi hain, to wahan jao
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    // Thoda sa wait karo taaki page poori tarah se render ho jaaye, phir scroll karo
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/quoriumconsulting/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/quorium-consulting-qc', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/', label: 'Twitter' },
  ];
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Quorium Consulting",
    "url": "https://www.quoriumconsulting.com",
    "logo": "https://www.quoriumconsulting.com/assets/qc-logo.png",
    "sameAs": socialLinks.map(link => link.href)
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      <footer className="bg-[#1a1433] text-gray-300 relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-repeat opacity-5" style={{ backgroundImage: 'radial-gradient(#5a5a8a 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Quorium Consulting</h3>
              <p className="max-w-xs text-sm text-gray-400">
                Your Vision. Our Code. Infinite Possibilities. We build cutting-edge software solutions to scale your business.
              </p>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a key={index} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-white/20 hover:text-white transition-all" aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <button onClick={() => handleScrollTo('about-section')} className="text-left text-gray-300 hover:text-white hover:underline transition-colors">About Us</button>
                <Link to="/services" className="hover:text-white hover:underline transition-colors">Services</Link>
                <Link to="/blog" className="hover:text-white hover:underline transition-colors">Blog</Link>
                <button onClick={() => handleScrollTo('contact-section')} className="text-left text-gray-300 hover:text-white hover:underline transition-colors">Contact</button>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Legal</h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link to="/privacy-policy" className="hover:text-white hover:underline transition-colors">Privacy Policy</Link>
                <Link to="/terms-and-conditions" className="hover:text-white hover:underline transition-colors">Terms & Conditions</Link>
              </nav>
            </div>
            
            <div className="flex items-start justify-start md:justify-end">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={scrollToTop} className="group inline-flex items-center px-4 py-2 bg-[#7c8db5]/30 border border-white/20 rounded-lg text-white/90 hover:text-white hover:border-[#7c8db5]/50 transition-all text-sm" aria-label="Scroll to top">
                  <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                  Back to Top
                </motion.button>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Quorium Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
