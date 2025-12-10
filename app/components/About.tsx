export default function About() {
  const features = [
    {
      icon: '🚀',
      title: 'Fast & Scalable',
      description: 'Built on Base network for lightning-fast transactions and low fees',
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Audited smart contracts ensuring your assets are safe',
    },
    {
      icon: '🌐',
      title: 'Community-Driven',
      description: 'Powered by a vibrant community of holders and believers',
    },
    {
      icon: '💎',
      title: 'Deflationary',
      description: 'Limited supply with built-in mechanisms to increase value',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              IA Token
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Building the future of decentralized finance on Base
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
