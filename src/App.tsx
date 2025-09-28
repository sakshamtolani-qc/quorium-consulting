import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// File paths ko theek kiya gaya hai taaki components sahi se import ho sakein.
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import OurSolutions from './components/OurSolutions';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

// Baaki zaroori components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransitionLoader from './components/PageTransitionLoader';

// Sirf ServicesPage ko lazy load karein
const ServicesPage = lazy(() => import('./Pages/ServicesPage'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-raisin-black">
        <PageTransitionLoader />
        <Navbar />
        <Suspense fallback={<PageTransitionLoader />}>
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <About />
                <WhyChooseUs />
                <OurSolutions />
                <Services />
                <Testimonials />
                <Contact />
              </main>
            } />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

