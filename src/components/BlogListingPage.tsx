import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight, Search } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  featured: boolean;
}

interface BlogListingPageProps {
  posts?: BlogPost[];
}

const BlogListingPage: React.FC<BlogListingPageProps> = ({ posts = defaultPosts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const postsPerPage = 6;
  
  // Extract unique categories
  const categories = useMemo(() => {
    const uniqueCategories = ['All', ...new Set(posts.map(post => post.category))];
    return uniqueCategories;
  }, [posts]);
  
  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    let filtered = posts;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [posts, selectedCategory, searchQuery]);
  
  // Separate featured and regular posts
  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);
  
  // Pagination
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = regularPosts.slice(startIndex, startIndex + postsPerPage);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  
  return (
    <>
      <Helmet>
        <title>Blog - Quorium Tech Insights</title>
        <meta name="description" content="Expert analysis on AI, web development, and digital strategy. Stay updated with the latest tech trends and insights from Quorium." />
        <meta property="og:title" content="Quorium Tech Insights - Blog" />
        <meta property="og:description" content="Expert analysis on AI, web development, and digital strategy." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quorium Tech Insights - Blog" />
        <meta name="twitter:description" content="Expert analysis on AI, web development, and digital strategy." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50  pt-16 md:pt-28">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20"
        >
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
              Quorium Tech Insights
            </h1>
            <p className="text-xl md:text-2xl text-center text-blue-100">
              Expert analysis on AI, web development, and digital strategy.
            </p>
          </div>
        </motion.section>
        
        {/* Search and Filter Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full md:w-96"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </motion.div>
            
            {/* Category Filters */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="container mx-auto px-4 pb-16">
          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <img
                      src={featuredPost.imageUrl}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <a
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Blog Posts Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage + selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {paginatedPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center items-center gap-4 mt-12"
            >
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              
              <span className="text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </section>
      </div>
    </>
  );
};

// Default mock data
const defaultPosts: BlogPost[] = [
  {
    slug: '5-ways-ai-can-boost-sales',
    title: '5 Ways AI Can Boost Your Sales in 2025',
    category: 'Artificial Intelligence',
    author: 'Saksham Tolani',
    date: 'September 28, 2025',
    excerpt: 'Discover how leveraging AI-powered tools can revolutionize your sales process, from lead generation to customer retention.',
    imageUrl: '/images/blog/ai-sales.webp',
    featured: true,
  },
  {
    slug: 'choosing-the-right-erp',
    title: 'Choosing the Right ERP Solution for Your Business',
    category: 'ERP Solutions',
    author: 'Jane Doe',
    date: 'September 20, 2025',
    excerpt: 'A comprehensive guide to selecting a custom ERP system that scales with your business needs and streamlines operations.',
    imageUrl: '/images/blog/erp-solution.webp',
    featured: false,
  },
  {
    slug: 'modern-web-development-trends',
    title: 'Modern Web Development Trends to Watch in 2025',
    category: 'Web Development',
    author: 'John Smith',
    date: 'September 15, 2025',
    excerpt: 'Explore the cutting-edge technologies and frameworks shaping the future of web development this year.',
    imageUrl: '/images/blog/web-trends.webp',
    featured: false,
  },
  {
    slug: 'digital-marketing-strategies',
    title: 'Digital Marketing Strategies That Actually Work',
    category: 'Marketing',
    author: 'Sarah Johnson',
    date: 'September 10, 2025',
    excerpt: 'Learn proven digital marketing tactics that drive real results and ROI for modern businesses.',
    imageUrl: '/images/blog/marketing-strategies.webp',
    featured: false,
  },
  {
    slug: 'cybersecurity-best-practices',
    title: 'Essential Cybersecurity Best Practices for SMBs',
    category: 'Cybersecurity',
    author: 'Mike Chen',
    date: 'September 5, 2025',
    excerpt: 'Protect your business from cyber threats with these fundamental security measures and protocols.',
    imageUrl: '/images/blog/cybersecurity.webp',
    featured: false,
  },
    {
    slug: 'ai-customer-service',
    title: 'Transforming Customer Service with AI Chatbots',
    category: 'Artificial Intelligence',
    author: 'Emily Davis',
    date: 'September 1, 2025',
    excerpt: 'How AI-powered chatbots are revolutionizing customer support and improving satisfaction rates.',
    imageUrl: '/images/blog/ai-chatbots.webp',
    featured: false,
  },
  {
    slug: 'cloud-migration-guide',
    title: 'Complete Guide to Cloud Migration for Enterprises',
    category: 'Cloud Computing',
    author: 'Robert Wilson',
    date: 'August 28, 2025',
    excerpt: 'Step-by-step strategies for successfully migrating your enterprise infrastructure to the cloud.',
    imageUrl: '/images/blog/cloud-migration.webp',
    featured: false,
  },
  {
    slug: 'mobile-app-development-2025',
    title: 'Mobile App Development: Native vs Cross-Platform in 2025',
    category: 'Mobile Development',
    author: 'Lisa Anderson',
    date: 'August 25, 2025',
    excerpt: 'Compare the pros and cons of native and cross-platform development approaches for modern mobile apps.',
    imageUrl: '/images/blog/mobile-dev.webp',
    featured: false,
  },
];

export default BlogListingPage;