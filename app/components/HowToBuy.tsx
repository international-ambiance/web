export default function HowToBuy() {
  const steps = [
    {
      number: 1,
      title: 'Set Up Wallet',
      description:
        'Download and install a Web3 wallet like MetaMask or Coinbase Wallet. Make sure to add the Base network.',
    },
    {
      number: 2,
      title: 'Get ETH on Base',
      description:
        'Bridge ETH to Base network using the official Base bridge or purchase directly on Base.',
    },
    {
      number: 3,
      title: 'Visit DEX',
      description: 'Go to Uniswap or your preferred DEX and connect your wallet.',
    },
    {
      number: 4,
      title: 'Swap for IA',
      description:
        'Paste the IA token contract address and swap your ETH for IA tokens.',
    },
  ];

  return (
    <section id="how-to-buy" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">How to Buy</h2>
          <p className="text-xl text-gray-600">
            Get your IA tokens in just a few simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-8 items-start">
              <div className="min-w-[60px] h-[60px] bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md flex-shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center flex-wrap">
          <button className="px-9 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
            Buy on Uniswap
          </button>
          <button className="px-9 py-4 bg-transparent border-2 border-indigo-500 text-indigo-500 rounded-lg font-semibold text-lg hover:bg-indigo-500 hover:text-white transition-all">
            View on BaseScan
          </button>
        </div>
      </div>
    </section>
  );
}
