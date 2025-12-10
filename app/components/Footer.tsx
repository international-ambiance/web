import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 text-2xl font-extrabold mb-4">
              <span className="text-4xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                IA
              </span>
              <span className="text-white font-bold">Token</span>
            </div>
            <p className="text-gray-400">
              Building the future of DeFi on Base Network
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#tokenomics" className="block text-gray-400 hover:text-white transition-colors">
                Tokenomics
              </Link>
              <Link href="#how-to-buy" className="block text-gray-400 hover:text-white transition-colors">
                How to Buy
              </Link>
              <Link href="#roadmap" className="block text-gray-400 hover:text-white transition-colors">
                Roadmap
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Community</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Telegram
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Discord
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Medium
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Whitepaper
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Audit Report
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Brand Kit
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            &copy; 2024 IA Token. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-all hover:-translate-y-1"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-all hover:-translate-y-1"
              aria-label="Telegram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
