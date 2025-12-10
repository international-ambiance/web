import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Shield, Users, Gem, ArrowRight } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Rocket,
      title: 'Fast & Scalable',
      description: 'Built on Base network for lightning-fast transactions and low fees',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Audited smart contracts ensuring your assets are safe',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'Powered by a vibrant community of holders and believers',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Gem,
      title: 'Deflationary',
      description: 'Limited supply with built-in mechanisms to increase value',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            Why Choose IA Token
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black">
            About{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              IA Token
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building the future of decentralized finance on Base Network with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center space-y-4">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-4 rounded-2xl ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} style={{ stroke: 'url(#gradient)' }} />
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" className="text-indigo-500" style={{ stopColor: 'currentColor' }} />
                          <stop offset="100%" className="text-purple-500" style={{ stopColor: 'currentColor' }} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover arrow */}
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 mx-auto text-indigo-600" />
                  </div>

                  {/* Decorative gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
