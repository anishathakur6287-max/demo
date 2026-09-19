import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Programs from '../components/Programs';
import CampusFeatures from '../components/CampusFeatures';
import NewsEvents from '../components/NewsEvents';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <Stats />
        <Programs />
        <CampusFeatures />
        <NewsEvents />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
