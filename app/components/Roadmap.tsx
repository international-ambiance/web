export default function Roadmap() {
  const roadmapItems = [
    {
      phase: 'Phase 1 - Complete',
      title: 'Foundation',
      status: 'completed',
      items: [
        'Smart contract development',
        'Security audit',
        'Website launch',
        'Social media presence',
      ],
    },
    {
      phase: 'Phase 2 - In Progress',
      title: 'Launch',
      status: 'active',
      items: [
        'Token launch on Base',
        'Liquidity pool creation',
        'DEX listing (Uniswap)',
        'Community building',
      ],
    },
    {
      phase: 'Phase 3 - Upcoming',
      title: 'Growth',
      status: 'upcoming',
      items: [
        'Marketing campaigns',
        'Partnerships',
        'CEX listings',
        'Staking platform',
      ],
    },
    {
      phase: 'Phase 4 - Future',
      title: 'Expansion',
      status: 'upcoming',
      items: [
        'Cross-chain bridge',
        'DAO governance',
        'NFT integration',
        'DeFi ecosystem',
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Roadmap</h2>
          <p className="text-xl text-gray-600">
            Our journey to revolutionize DeFi
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative pl-0 md:pl-20">
                <div
                  className={`absolute left-5 md:left-[1.6rem] top-0 w-6 h-6 rounded-full border-4 hidden md:block ${
                    item.status === 'completed'
                      ? 'bg-green-500 border-green-500'
                      : item.status === 'active'
                      ? 'bg-indigo-500 border-indigo-500 animate-pulse-slow'
                      : 'bg-white border-gray-300'
                  }`}
                ></div>

                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                  <div
                    className={`inline-block px-4 py-2 rounded-md text-sm font-semibold mb-4 ${
                      item.status === 'completed'
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                    }`}
                  >
                    {item.phase}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <span
                          className={`mt-1 font-bold ${
                            item.status === 'completed'
                              ? 'text-green-500'
                              : 'text-indigo-500'
                          }`}
                        >
                          ✓
                        </span>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
