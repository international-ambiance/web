'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0x0000000000000000000000000000000000000000';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-500/30 rounded-full blur-3xl -z-10 animate-float"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              IA Token
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            The next generation crypto token on Base Network
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="#how-to-buy"
              className="px-9 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Get Started
            </Link>
            <Link
              href="#about"
              className="px-9 py-4 bg-transparent border-2 border-indigo-500 text-indigo-500 rounded-lg font-semibold text-lg hover:bg-indigo-500 hover:text-white transition-all"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 max-w-2xl mx-auto">
            <label className="block text-sm text-gray-600 font-semibold mb-2">
              Contract Address:
            </label>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-200">
              <span className="flex-1 font-mono text-sm text-gray-900 overflow-hidden text-ellipsis">
                {contractAddress}
              </span>
              <button
                onClick={copyToClipboard}
                className="p-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all hover:scale-105"
              >
                {copied ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" strokeWidth="2"></polyline>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-50px, 50px) scale(1.1);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease;
        }
      `}</style>
    </section>
  );
}
