'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Vote, Users, Heart, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Connect with like-minded humans across borders. Culture has no boundaries, and neither do we.',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-400',
    },
    {
      icon: Vote,
      title: 'Real Governance',
      description: 'Your voice matters. Shape community decisions, vote on proposals, and help guide our collective direction.',
      iconBg: 'bg-pink-500/10',
      iconColor: 'text-pink-400',
    },
    {
      icon: Users,
      title: 'Genuine Community',
      description: 'More than a Discord server. Regional chapters, real meetups, and authentic human connections.',
      iconBg: 'bg-indigo-500/10',
      iconColor: 'text-indigo-400',
    },
    {
      icon: Heart,
      title: 'Collective Impact',
      description: 'Pool resources for meaningful projects. Support causes, fund initiatives, and make things happen together.',
      iconBg: 'bg-rose-500/10',
      iconColor: 'text-rose-400',
    },
  ];

  return (
    <section id="about" className="py-32 sm:py-40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 sm:mb-24 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-5 py-2.5 mb-8 border-primary/20 bg-primary/5">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            Why Join
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6">
            More Than a Token
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            IA is your membership to a global movement. A cultural passport built on empathy, generosity, and the belief that we&apos;re better together.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border/30 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
              >
                <CardContent className="p-10">
                  <div className="flex items-start gap-6">
                    <div className={`shrink-0 p-4 rounded-2xl ${feature.iconBg}`}>
                      <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-border/30 bg-card/30 backdrop-blur-sm glow-sm">
            <CardContent className="p-12 text-center">
              <Heart className="w-14 h-14 text-primary mx-auto mb-8" />
              <blockquote className="text-2xl sm:text-3xl text-foreground font-medium leading-relaxed mb-6">
                &ldquo;Life is about having empathy, being generous, and united love as a foundation to heal the planet.&rdquo;
              </blockquote>
              <p className="text-lg text-muted-foreground">
                We&apos;re building infrastructure for connection, culture, and collective action.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
