import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database,
  Globe,
  UserCheck,
  Cookie,
  Bell,
  Settings,
  HelpCircle,
  ChevronDown,
  CheckCircle,
  Mail
} from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const privacyPrinciples = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Data Security',
      description: 'We use industry-standard encryption and security measures to protect your data.'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Transparency',
      description: 'We are clear about what data we collect and how we use it.'
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'User Control',
      description: 'You have control over your personal information and can manage your preferences.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Privacy by Design',
      description: 'Privacy considerations are built into our services from the ground up.'
    }
  ];

  const faqs = [
    {
      id: '1',
      question: 'How long do you keep my data?',
      answer: 'We retain your personal data only for as long as necessary to provide you with our services and as described in this Privacy Policy. We also retain information to comply with legal obligations, resolve disputes, and enforce our agreements.'
    },
    {
      id: '2',
      question: 'Can I request deletion of my data?',
      answer: 'Yes, you have the right to request the deletion of your personal data. You can do this by contacting our privacy team at privacy@quoriumconsulting.com. We will respond to your request within 30 days.'
    },
    {
      id: '3',
      question: 'Do you share my data with third parties?',
      answer: 'We do not sell, trade, or rent your personal information. We may share information with trusted service providers who assist us in operating our website, as long as they agree to keep this information confidential.'
    },
    {
      id: '4',
      question: 'How do you protect my data?',
      answer: 'We implement a variety of security measures including encryption, secure servers, regular security audits, and strict access controls to maintain the safety of your personal information.'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Quorium Consulting</title>
        <meta name="description" content="Learn how Quorium Consulting collects, uses, and protects your personal information. Our comprehensive privacy policy explains your rights and our commitments." />
        <link rel="canonical" href="https://www.quoriumconsulting.com/privacy" />
        <meta property="og:title" content="Privacy Policy | Quorium Consulting" />
        <meta property="og:description" content="Your privacy matters. Learn about our data practices and your rights." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-16 md:pt-28">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative bg-gradient-to-br from-[#2f2559] to-[#221a42] text-white py-24 overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full opacity-50 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-violet-blue/20 border border-violet-blue/30 rounded-full mb-6">
                <Shield className="w-10 h-10 text-violet-blue" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-white/80 mb-4">
                Your privacy is fundamental to our mission.
              </p>
              <p className="text-sm text-white/60">
                Effective Date: September 30, 2025 | Last Updated: September 30, 2025
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Privacy Principles */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-charcoal mb-4">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-black-coral max-w-3xl mx-auto">
                We are committed to protecting your privacy and giving you control over your personal information.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-violet-blue/30 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-violet-blue/20 rounded-2xl flex items-center justify-center text-violet-blue mx-auto mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-black-coral">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-charcoal mb-12 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-charcoal">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: expandedFaq === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-violet-blue" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {expandedFaq === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                           <div className="px-6 pb-4 border-t border-gray-200 pt-4">
                            <p className="text-black-coral">{faq.answer}</p>
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-[#2f2559] to-[#221a42] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">
                Have Privacy Questions?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Our privacy team is here to help you understand and exercise your privacy rights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:privacy@quoriumconsulting.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-violet-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-violet-blue/90 transition-all shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Privacy Team
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;