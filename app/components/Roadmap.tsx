'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Circle, Map, Rocket } from 'lucide-react';

export default function Roadmap() {
  const roadmapItems = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      period: '2026',
      items: [
        'Launch on Ethereum and Base',
        'Security audit complete',
        'Governance portal live',
        'First 5,000 members',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Community',
      period: '2026',
      items: [
        '20+ regional chapters',
        'Local meetups worldwide',
        'Mobile app launch',
        '25,000 members',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Partnerships',
      period: '2027',
      items: [
        'Strategic partnerships',
        'NFT membership system',
        'Tiered access rollout',
        'Exclusive community events',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Scale',
      period: '2028',
      items: [
        'Global partnership network',
        '100,000 members',
        'Annual summit',
        'Advanced governance',
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-32 sm:py-40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 sm:mb-24 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-5 py-2.5 mb-8 border-primary/20 bg-primary/5">
            <Map className="w-4 h-4 mr-2 text-primary" />
            The Journey
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6">
            Roadmap
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Where we&apos;re headed, together.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roadmapItems.map((item, index) => (
              <Card
                key={index}
                className="border-border/30 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
              >
                <CardContent className="p-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Circle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.phase}</span>
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      </div>
                    </div>
                    <Badge variant="secondary">{item.period}</Badge>
                  </div>

                  {/* Items */}
                  <ul className="space-y-4">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-start gap-4 text-muted-foreground">
                        <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-secondary/50">
                          <Check className="w-3.5 h-3.5 text-muted-foreground" />
                        </div>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Long-term Vision */}
        <div className="mt-20 max-w-3xl mx-auto">
          <Card className="border-border/30 bg-card/30 backdrop-blur-sm glow-sm">
            <CardContent className="p-12 text-center">
              <Rocket className="w-14 h-14 text-primary mx-auto mb-8" />
              <h3 className="text-2xl font-bold text-foreground mb-6">The Long View</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                500K+ members worldwide. The global standard for community-driven culture and connection.
              </p>
              <p className="text-sm text-muted-foreground/70">
                This roadmap is governed by the community. Priorities can change based on member votes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
