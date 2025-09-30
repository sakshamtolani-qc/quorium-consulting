// components/CareerPage.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Zap,
  Heart,
  Coffee,
  Award,
  TrendingUp,
  ChevronDown,
  Send,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  perks: string[];
}

const CareerPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null as File | null,
    coverLetter: ''
  });

  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'We are looking for an experienced Full Stack Developer to join our engineering team and help build cutting-edge web applications.',
      requirements: [
        'Expert knowledge of React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS/GCP/Azure)',
        'Strong understanding of database design and optimization',
        'Excellent problem-solving and communication skills'
      ],
      responsibilities: [
        'Design and develop scalable web applications',
        'Collaborate with cross-functional teams',
        'Mentor junior developers',
        'Participate in code reviews and architectural decisions'
      ],
      perks: [
        'Flexible working hours',
        'Health insurance',
        'Annual learning budget',
        'Stock options'
      ]
    },
    {
      id: '2',
      title: 'AI/ML Engineer',
      department: 'AI Research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$140k - $200k',
      description: 'Join our AI team to develop innovative machine learning solutions that transform how businesses operate.',
      requirements: [
        'Strong background in machine learning and deep learning',
        'Proficiency in Python, TensorFlow, or PyTorch',
        'Experience with NLP and computer vision',
        'MS/PhD in Computer Science or related field preferred'
      ],
      responsibilities: [
        'Develop and deploy ML models at scale',
        'Research and implement state-of-the-art algorithms',
        'Collaborate with product teams to integrate AI solutions',
        'Optimize model performance and accuracy'
      ],
      perks: [
        'Cutting-edge research opportunities',
        'Conference attendance budget',
        'Gym membership',
        'Relocation assistance'
      ]
    },
    {
      id: '3',
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$90k - $130k',
      description: 'Lead our digital marketing efforts to drive growth and brand awareness across multiple channels.',
      requirements: [
        'Proven track record in digital marketing',
        'Experience with SEO, SEM, and social media marketing',
        'Strong analytical skills and data-driven mindset',
        'Excellent written and verbal communication'
      ],
      responsibilities: [
        'Develop and execute digital marketing strategies',
        'Manage marketing campaigns across channels',
        'Analyze performance metrics and optimize ROI',
        'Lead and mentor marketing team members'
      ],
      perks: [
        'Creative freedom',
        'Marketing tools budget',
        'Team outings',
        'Professional development'
      ]
    }
  ];

  const companyBenefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Growth Opportunities',
      description: 'Clear career paths and continuous learning opportunities'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Inclusive Culture',
      description: 'Diverse, welcoming environment where everyone can thrive'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote options, and unlimited PTO'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Recognition',
      description: 'Regular appreciation and rewards for outstanding performance'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation First',
      description: 'Work on cutting-edge projects with the latest technologies'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
  };

  return (
    <>
      <Helmet>
        <title>Careers - Join Our Team | Quorium</title>
        <meta name="description" content="Explore exciting career opportunities at Quorium. Join our team of innovators and help shape the future of technology." />
        <meta property="og:title" content="Careers at Quorium" />
        <meta property="og:description" content="Build your career with us. We're looking for talented individuals to join our growing team." />
      </Helmet>

      <div className="min-h-screen bg-gray-50  pt-16 md:pt-28">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full"
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Build Your Future With Us
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Join a team of passionate innovators working to transform the digital landscape
              </p>
              <motion.a
                href="#openings"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-shadow"
              >
                View Open Positions
                <ChevronDown className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Company Culture */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Work at Quorium?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in creating an environment where talent thrives and innovation flourishes
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600">
                Find your perfect role and start your journey with us
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-6">
              {jobPositions.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl overflow-hidden"
                >
                  <div
                    className="p-6 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.department}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: selectedJob === job.id ? 180 : 0 }}
                        className="mt-4 md:mt-0"
                      >
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedJob === job.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200"
                      >
                        <div className="p-6 space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">About the Role</h4>
                            <p className="text-gray-600">{job.description}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Responsibilities</h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setFormData({ ...formData, position: job.title })}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                          >
                            Apply for this Position
                          </motion.button>
                        </div>
                                              </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                Apply Now
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                Ready to join our team? Send us your application
              </p>

              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position *
                    </label>
                    <select
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a position</option>
                      {jobPositions.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <div className="text-gray-600">
                        <p className="mb-2">Drop your resume here or click to upload</p>
                        <p className="text-sm text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    rows={5}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us why you'd be a great fit for this role..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow flex items-center justify-center"
                >
                  Submit Application
                  <Send className="ml-2 w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareerPage;