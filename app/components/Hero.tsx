'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Copy, Sparkles, Zap, TrendingUp } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0x0000000000000000000000000000000000000000';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-background via-indigo-50/30 to-background">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-200 transition-colors">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Now Live on Base Network
          </Badge>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tight">
            Welcome to{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                IA Token
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-3xl text-muted-foreground font-medium max-w-3xl mx-auto">
            The next generation crypto token revolutionizing DeFi on{' '}
            <span className="text-indigo-600 font-bold">Base Network</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 py-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">$1M+</div>
                <div className="text-sm text-muted-foreground">Market Cap</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">1B</div>
                <div className="text-sm text-muted-foreground">Total Supply</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">5K+</div>
                <div className="text-sm text-muted-foreground">Holders</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-lg h-14 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all">
              <Link href="#how-to-buy">
                <Zap className="w-5 h-5 mr-2" />
                Get Started Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg h-14 px-8 border-2 hover:bg-muted/50">
              <Link href="#about">Learn More</Link>
            </Button>
          </div>

          {/* Contract Address Card */}
          <Card className="max-w-2xl mx-auto p-6 bg-card/50 backdrop-blur-sm border-2 hover:border-indigo-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Contract Address
                </span>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  ✓ Verified
                </Badge>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border">
                <code className="flex-1 font-mono text-sm break-all">
                  {contractAddress}
                </code>
                <Button
                  onClick={copyToClipboard}
                  size="sm"
                  variant="ghost"
                  className="shrink-0 hover:bg-indigo-100"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
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
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}
