'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md' : 'bg-white/95'
      } backdrop-blur-lg border-b border-gray-200`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2 text-2xl font-extrabold">
            <span className="text-4xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              IA
            </span>
            <span className="text-gray-900 font-bold">Token</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-gray-600 hover:text-indigo-500 transition-colors font-medium">
              About
            </Link>
            <Link href="#tokenomics" className="text-gray-600 hover:text-indigo-500 transition-colors font-medium">
              Tokenomics
            </Link>
            <Link href="#how-to-buy" className="text-gray-600 hover:text-indigo-500 transition-colors font-medium">
              How to Buy
            </Link>
            <Link href="#roadmap" className="text-gray-600 hover:text-indigo-500 transition-colors font-medium">
              Roadmap
            </Link>
            <button className="px-7 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Buy Now
            </button>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
            <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
            <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
