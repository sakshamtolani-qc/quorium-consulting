// components/TermsAndConditionsPage.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Shield, 
  AlertCircle, 
  CheckCircle,
  ChevronRight,
  Calendar,
  Mail,
  Scale
} from 'lucide-react';

const TermsAndConditionsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('introduction');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: <FileText className="w-5 h-5" /> },
    { id: 'acceptance', title: 'Acceptance of Terms', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'services', title: 'Services Description', icon: <Shield className="w-5 h-5" /> },
    { id: 'user-obligations', title: 'User Obligations', icon: <AlertCircle className="w-5 h-5" /> },
    { id: 'intellectual-property', title: 'Intellectual Property', icon: <Scale className="w-5 h-5" /> },
    { id: 'privacy', title: 'Privacy Policy', icon: <Shield className="w-5 h-5" /> },
    { id: 'disclaimers', title: 'Disclaimers', icon: <AlertCircle className="w-5 h-5" /> },
    { id: 'limitation', title: 'Limitation of Liability', icon: <Scale className="w-5 h-5" /> },
    { id: 'termination', title: 'Termination', icon: <AlertCircle className="w-5 h-5" /> },
    { id: 'contact', title: 'Contact Information', icon: <Mail className="w-5 h-5" /> }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Quorium</title>
        <meta name="description" content="Read Quorium's terms and conditions. Understand your rights and obligations when using our services." />
        <meta property="og:title" content="Terms and Conditions - Quorium" />
        <meta property="og:description" content="Terms of service for using Quorium's products and services." />
      </Helmet>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <div className="min-h-screen bg-gray-50  pt-16 md:pt-28">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
                <FileText className="w-10 h-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Terms and Conditions
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                Please read these terms carefully before using our services
              </p>
              <div className="flex items-center justify-center text-sm text-blue-200">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: September 30, 2025
              </div>
            </motion.div>
          </div>
        </motion.section>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <motion.aside
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:w-80"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                        activeSection === section.id
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {section.icon}
                      <span className="flex-1">{section.title}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        activeSection === section.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                  ))}
                </nav>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.main
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                {/* Introduction */}
                <section id="introduction" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-4">
                      Welcome to Quorium ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our website, 
                      products, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound 
                      by these Terms.
                    </p>
                    <p className="mb-4">
                      If you do not agree to these Terms, please do not use our Services. We reserve the right to update these Terms 
                      at any time, and your continued use of our Services after any changes indicates your acceptance of the new Terms.
                    </p>
                  </div>
                </section>

                {/* Acceptance of Terms */}
                <section id="acceptance" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Acceptance of Terms</h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-4">
                      By creating an account, accessing, or using our Services, you acknowledge that you have read, understood, 
                      and agree to be bound by these Terms and our Privacy Policy.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Eligibility Requirements:</h3>
                      <ul className="list-disc ml-6 space-y-2">
                        <li>You must be at least 18 years old or the age of majority in your jurisdiction</li>
                        <li>You must have the legal capacity to enter into binding contracts</li>
                        <li>You must not be prohibited from using our Services under applicable laws</li>
                        <li>You must provide accurate and complete registration information</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Services Description */}
                <section id="services" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Services Description</h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                                        <p className="mb-4">
                      Quorium provides technology consulting, software development, and digital transformation services. 
                      Our Services include but are not limited to:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">Development Services</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            Custom software development
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            Web and mobile applications
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            API development and integration
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">Consulting Services</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            Digital transformation strategy
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            Technology assessment
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            Process optimization
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* User Obligations */}
                <section id="user-obligations" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Obligations</h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-4">
                      As a user of our Services, you agree to:
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Prohibited Activities:</h3>
                      <ul className="list-disc ml-6 space-y-2">
                        <li>Use the Services for any illegal or unauthorized purpose</li>
                        <li>Violate any laws, regulations, or third-party rights</li>
                        <li>Transmit viruses, malware, or other harmful code</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                        <li>Interfere with or disrupt the Services or servers</li>
                        <li>Collect or harvest user data without permission</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Intellectual Property */}
                <section id="intellectual-property" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Intellectual Property</h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-4">
                      All content, features, and functionality of our Services, including but not limited to text, graphics, 
                      logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of Quorium 
                      or its licensors and are protected by international copyright, trademark, patent, trade secret, and other 
                      intellectual property laws.
                    </p>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">License Grant:</h3>
                      <p className="mb-2">
                        Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:
                      </p>
                      <ul className="list-disc ml-6 space-y-2">
                        <li>Access and use the Services for your personal or internal business purposes</li>
                        <li>Download or print a copy of any portion of the content for personal use</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Privacy */}
                <section id="privacy" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Privacy Policy</h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-4">
                      Your use of our Services is also governed by our Privacy Policy, which is incorporated into these Terms 
                      by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, 
                      and disclosure of your personal information.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <p className="font-medium">
                        By using our Services, you consent to the collection and use of your information as described in our 
                        Privacy Policy.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Disclaimers */}
                <section id="disclaimers" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Disclaimers</h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2 uppercase">Important Notice:</h3>
                      <p className="mb-4">
                        THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS 
                        OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                      </p>
                      <ul className="list-disc ml-6 space-y-2">
                        <li>Warranties of merchantability</li>
                        <li>Fitness for a particular purpose</li>
                        <li>Non-infringement</li>
                        <li>Accuracy, reliability, or completeness</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Limitation of Liability */}
                <section id="limitation" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Limitation of Liability</h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-4">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, QUORIUM AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, 
                      AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR 
                      PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mb-6">
                      <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                      <li>Damages resulting from your use or inability to use the Services</li>
                      <li>Any unauthorized access to or alteration of your transmissions or data</li>
                      <li>Any conduct or content of any third party on the Services</li>
                    </ul>
                  </div>
                </section>

                {/* Termination */}
                <section id="termination" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Termination</h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-4">
                      We reserve the right to terminate or suspend your account and access to the Services at our sole 
                      discretion, without notice, for any reason, including but not limited to:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mb-6">
                      <li>Breach of these Terms</li>
                      <li>Violation of applicable laws or regulations</li>
                      <li>Fraudulent or illegal activity</li>
                      <li>Extended periods of inactivity</li>
                    </ul>
                    <p>
                      Upon termination, your right to use the Services will immediately cease, and we may delete your 
                      account and any associated data.
                    </p>
                  </div>
                </section>

                {/* Contact Information */}
                <section id="contact" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Contact Information</h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-6">
                      If you have any questions about these Terms and Conditions, please contact us at:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Mail className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                          <div>
                            <p className="font-semibold text-gray-900">Email</p>
                            <p className="text-gray-600">legal@quorium.com</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                          <div>
                            <p className="font-semibold text-gray-900">Mailing Address</p>
                            <p className="text-gray-600">
                              Quorium Consulting<br />
                              123 Tech Street<br />
                              San Francisco, CA 94105<br />
                              United States
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Agreement */}
                <div className="mt-12 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <p className="text-center text-gray-700">
                    By using our Services, you acknowledge that you have read, understood, and agree to be bound by these 
                    Terms and Conditions.
                  </p>
                </div>
              </div>
            </motion.main>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditionsPage;