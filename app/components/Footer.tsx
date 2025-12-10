'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Twitter, Send, MessageCircle, FileText, ExternalLink, Github } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#tokenomics', label: 'Tokenomics' },
    { href: '#how-to-buy', label: 'How to Buy' },
    { href: '#roadmap', label: 'Roadmap' },
  ];

  const resourceLinks = [
    { href: 'https://github.com/international-ambiance/whitepaper/releases/download/v1.0.4/ia-token-whitepaper.pdf', label: 'Whitepaper' },
    { href: 'https://basescan.org/token/0xe65c6a4eA43e45e69AA507d683b3468833FD07F2', label: 'Basescan' },
    { href: 'https://github.com/international-ambiance/token', label: 'GitHub' },
  ];

  const socialLinks = [
    { href: 'https://twitter.com/IAToken', icon: Twitter, label: 'Twitter' },
    { href: 'https://t.me/IATokenCommunity', icon: Send, label: 'Telegram' },
    { href: 'https://discord.gg/ia-token', icon: MessageCircle, label: 'Discord' },
    { href: 'https://github.com/international-ambiance/token', icon: Github, label: 'GitHub' },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-card/20">
      <div className="container mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-4xl font-black gradient-text">IA</span>
              <span className="text-foreground font-bold text-2xl">Token</span>
            </Link>
            <p className="text-lg text-muted-foreground max-w-sm leading-relaxed mb-8">
              Impact & Action. A community built on empathy, generosity, and united love.
            </p>
            <p className="text-xs text-muted-foreground/50 max-w-sm">
              Community token. Not financial advice. Not an investment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-6">Quick Links</h4>
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-6">Resources</h4>
            <div className="space-y-4">
              {resourceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="mb-16 p-6 rounded-2xl bg-card/50 border border-border/30 max-w-xl">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Contract (Base)</span>
          </div>
          <code className="text-sm font-mono text-foreground/70 break-all">
            0xe65c6a4eA43e45e69AA507d683b3468833FD07F2
          </code>
        </div>

        <Separator className="mb-10 bg-border/30" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} IA Token
          </p>

          {/* Social Links */}
          <div className="flex gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-11 w-11"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
