'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wallet, ArrowRightLeft, Globe, Coins, ExternalLink, Heart } from 'lucide-react';

export default function HowToBuy() {
  const steps = [
    {
      icon: Wallet,
      number: 1,
      title: 'Get a Wallet',
      description: 'Download MetaMask or Coinbase Wallet. It takes about 2 minutes.',
    },
    {
      icon: Coins,
      number: 2,
      title: 'Add Some ETH',
      description: 'Buy ETH from any exchange and send it to your wallet.',
    },
    {
      icon: Globe,
      number: 3,
      title: 'Connect to Uniswap',
      description: 'Visit app.uniswap.org and connect your wallet. Select Base network.',
    },
    {
      icon: ArrowRightLeft,
      number: 4,
      title: 'Swap for IA',
      description: 'Paste the contract address and swap. Welcome to the community.',
    },
  ];

  return (
    <section id="how-to-buy" className="py-32 sm:py-40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 sm:mb-24 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-5 py-2.5 mb-8 border-indigo-500/20 bg-indigo-500/5">
            <Heart className="w-4 h-4 mr-2 text-indigo-400" />
            Join Us
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6">
            How to Join
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Four simple steps to become part of our community.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Card
                  key={step.number}
                  className="border-border/30 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-indigo-500/20 transition-all duration-500 hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div className="flex gap-6">
                      <div className="shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-3 text-xs">
                          Step {step.number}
                        </Badge>
                        <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contract Address */}
          <Card className="border-border/30 bg-card/30 backdrop-blur-sm mb-12">
            <CardContent className="p-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">Contract Address (Base)</p>
              <code className="block text-base font-mono text-primary bg-secondary/30 px-6 py-4 rounded-xl break-all mb-4">
                0xe65c6a4eA43e45e69AA507d683b3468833FD07F2
              </code>
              <p className="text-xs text-muted-foreground">Always verify before swapping</p>
            </CardContent>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-14 px-10 text-base font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 border-0 glow-sm">
              <a
                href="https://app.uniswap.org/swap?outputCurrency=0xe65c6a4eA43e45e69AA507d683b3468833FD07F2&chain=base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowRightLeft className="w-5 h-5 mr-2" />
                Get IA on Uniswap
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 text-base font-semibold">
              <a
                href="https://basescan.org/token/0xe65c6a4eA43e45e69AA507d683b3468833FD07F2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Basescan
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
