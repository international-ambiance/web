export default function Tokenomics() {
  const tokenomicsData = [
    { label: 'Total Supply', value: '1,000,000,000', desc: 'IA Tokens' },
    { label: 'Liquidity Pool', value: '50%', desc: 'Locked for 2 years' },
    { label: 'Marketing', value: '20%', desc: 'Community growth' },
    { label: 'Team', value: '15%', desc: 'Vested 6 months' },
    { label: 'Airdrop', value: '10%', desc: 'Early supporters' },
    { label: 'Development', value: '5%', desc: 'Future development' },
  ];

  return (
    <section id="tokenomics" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Tokenomics</h2>
          <p className="text-xl text-gray-600">
            Fair distribution designed for long-term growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tokenomicsData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="text-xs uppercase text-gray-600 font-semibold tracking-wide mb-2">
                {item.label}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {item.value}
              </div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
