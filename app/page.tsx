'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <HowToBuy />
      <Roadmap />
      <Footer />
    </main>
  );
}
