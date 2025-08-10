import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import OurSolutions from './components/OurSolutions';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesPage from './Pages/ServicesPage';
import PageTransitionLoader from './components/PageTransitionLoader';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-raisin-black">
        <PageTransitionLoader />
        <Navbar />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;