// sitemap-generator.cjs
const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

// STEP 1: Your website's base URL
const hostname = 'https://www.yourwebsite.com';

// STEP 2: List of all pages on your website
const paths = [
  {
    url: '/', // Homepage
    priority: 1.0, // Most important page
    changefreq: 'daily' // How often it updates
  },
  {
    url: '/services', // Services page
    priority: 0.8, // Slightly less important than homepage
    changefreq: 'weekly'
  }
  // Add more pages (e.g., /about, /blog) as needed
];

// STEP 3: Create the sitemap
const sitemap = new SitemapStream({ hostname });
const dest = path.resolve('./public', 'sitemap.xml');

// STEP 4: Write the sitemap to a file
streamToPromise(sitemap)
  .then((data) => {
    fs.writeFileSync(dest, data.toString());
    console.log('✅ sitemap.xml file has been created in the public folder!');
  })
  .catch((err) => {
    console.error('Error creating sitemap:', err);
  });

// Add paths to the sitemap
paths.forEach((path) => sitemap.write(path));
sitemap.end();