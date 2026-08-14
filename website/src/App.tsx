import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F7F7FF] text-[#17152B] flex flex-col selection:bg-[#FF4FA3] selection:text-white font-sans">
        {/* Route-Based Smooth Scroll and Restoration */}
        <ScrollToTop />

        {/* Custom BlueOrbit Devs Cursor (Active on Desktop/Fine-Pointer Devices) */}
        <CustomCursor />

        {/* Floating Persistent Navbar with Active Route Highlighting */}
        <Navbar />

        {/* Main Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<HomePage />} />
            <Route path="/products" element={<HomePage />} />
            <Route path="/services" element={<HomePage />} />
            <Route path="/engineering" element={<HomePage />} />
            <Route path="/process" element={<HomePage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/team" element={<HomePage />} />
            <Route path="/contact" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer />
      </div>
    </Router>
  );
}
