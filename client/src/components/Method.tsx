export function Method() {
  const methods = [
    {
      icon: "⚡",
      title: "Timezone Arbitrage",
      desc: "My afternoon is your morning. Brief at 5 PM AEST -> Mocks by 9 AM AEST.",
      color: "text-volt-lime"
    },
    {
      icon: "🧠",
      title: "Dual-Track Brain",
      desc: "I speak 'Academic Senate' but ship like a Startup. Governance meets Velocity.",
      color: "text-ion-cyan"
    },
    {
      icon: "💎",
      title: "Zero Overhead",
      desc: "W-8BEN. No Super. No Payroll. Just a clean Wise invoice.",
      color: "text-electric-violet"
    }
  ];

  return (
    <section id="method" className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-b border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {methods.map((method) => (
            <div key={method.title} className="py-12 px-8 text-center md:text-left group hover:bg-white/5 transition-colors duration-300">
              <div className="text-4xl mb-6">{method.icon}</div>
              <h3 className={`text-2xl font-display font-bold mb-4 ${method.color}`}>
                {method.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {method.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
