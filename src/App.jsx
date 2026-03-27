import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { ServicesPage } from './pages/Services';
import { PartnersPage } from './pages/Partners';
import { ProductsPage } from './pages/Products';
import { IndustriesPage } from './pages/Industries';
import { PressPage } from './pages/Press';
import { TestimonialsPage } from './pages/Testimonials';
import { CasesDetailsPage } from './pages/CasesDetails';
import { AboutPage } from './pages/About';
import { BlogPage } from './pages/Blog';
import { CEOPage } from './pages/CEO';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-brand-dark min-h-screen selection:bg-brand-cyan/30 selection:text-white pb-0">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/parceiros" element={<PartnersPage />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/industrias" element={<IndustriesPage />} />
            <Route path="/imprensa" element={<PressPage />} />
            <Route path="/depoimentos" element={<TestimonialsPage />} />
            <Route path="/casos-de-uso" element={<CasesDetailsPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/ceo" element={<CEOPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
