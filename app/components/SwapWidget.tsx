'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRightLeft, ExternalLink } from 'lucide-react';

const IA_TOKEN_ADDRESS = '0xe65c6a4eA43e45e69AA507d683b3468833FD07F2';

export default function SwapWidget() {
  const uniswapUrl = `https://app.uniswap.org/swap?chain=base&outputCurrency=${IA_TOKEN_ADDRESS}`;

  return (
    <section id="swap" className="py-20 sm:py-32 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <p className="text-pink-400 font-semibold text-sm uppercase tracking-wider">
            Trade Now
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white">
            Trade IA Token
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Swap ETH for IA directly on Base network via Uniswap
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-2xl">
            <CardContent className="p-6 sm:p-8 space-y-6">
              {/* Swap Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <ArrowRightLeft className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Title */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Swap on Uniswap</h3>
                <p className="text-sm sm:text-base text-slate-400">
                  Trade IA tokens securely on the leading DEX
                </p>
              </div>

              {/* Info Card */}
              <div className="bg-black/30 rounded-xl p-4 space-y-3 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Network</span>
                  <span className="text-white font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Base
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Trading Pair</span>
                  <span className="text-white font-medium">ETH → IA</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">DEX</span>
                  <span className="text-white font-medium">Uniswap V3</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button asChild className="w-full h-12 sm:h-14 text-base sm:text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-purple-500/25">
                <a href={uniswapUrl} target="_blank" rel="noopener noreferrer">
                  Trade on Uniswap
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>

              <p className="text-xs text-center text-slate-500">
                You will be redirected to Uniswap with IA token pre-selected
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
