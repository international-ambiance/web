'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Copy, Sparkles, Heart, Users, Globe, ExternalLink } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0xe65c6a4eA43e45e69AA507d683b3468833FD07F2';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-pink-600/8 blur-[130px] animate-pulse-glow delay-200" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-8 animate-fade-in">
            <Badge variant="outline" className="px-5 py-2.5 text-sm border-primary/20 bg-primary/5">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              Impact & Action
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8 animate-fade-in delay-100">
            <span className="text-foreground">In a world of AI,</span>
            <br />
            <span className="gradient-text">choose IA.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in delay-200">
            Real humans. Real connections. Real impact.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-14 animate-fade-in delay-300">
            <Card className="border-border/30 bg-card/30 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 px-6 py-5">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-foreground">Global Access</div>
                  <div className="text-sm text-muted-foreground">Connect worldwide</div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/30 bg-card/30 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 px-6 py-5">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-foreground">Governance</div>
                  <div className="text-sm text-muted-foreground">Your voice matters</div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/30 bg-card/30 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 px-6 py-5">
                <div className="p-3 rounded-xl bg-indigo-500/10">
                  <Heart className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-foreground">Community</div>
                  <div className="text-sm text-muted-foreground">Real connections</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-400">
            <Button asChild size="lg" className="h-14 px-10 text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-0 glow-sm hover:glow-md transition-all">
              <a
                href="https://app.uniswap.org/swap?outputCurrency=0xe65c6a4eA43e45e69AA507d683b3468833FD07F2&chain=base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get IA Token
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 text-base font-semibold">
              <a
                href="https://github.com/international-ambiance/whitepaper/releases/download/v1.0.3/ia-token-whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Whitepaper
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Contract Address Card */}
          <Card className="max-w-xl mx-auto border-border/30 bg-card/30 backdrop-blur-sm animate-fade-in delay-400">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Contract Address (Base)
                </span>
                <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
                  <Check className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <code className="flex-1 font-mono text-sm text-foreground/70 break-all">
                  {contractAddress}
                </code>
                <Button
                  onClick={copyToClipboard}
                  size="icon"
                  variant="ghost"
                  className="shrink-0"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground/50 max-w-md mx-auto mt-8">
            This is a community token. Not financial advice. Not an investment.
          </p>
        </div>
      </div>
    </section>
  );
}
