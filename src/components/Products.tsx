const products = [
  {
    badge: 'Intelligence',
    badgeClass: 'bg-violet/10 text-violet border-violet/20',
    title: 'Behavioral Analytics & Credit Scoring',
    desc: "Predictive churn modeling, behavioral profiling, on-chain credit scoring. The inference engine that understands who your users are and what they'll do next.",
    features: [
      'Churn prediction — 95% accuracy, 0.89 AUC-ROC',
      'Longitudinal behavioral profiling across protocols',
      'On-chain credit scoring beyond collateral ratios',
      'Natural language query engine',
    ],
    arrowColor: 'text-violet',
    highlight: false,
    links: [
      { label: 'View Demo', href: 'https://blocksight.dev/', type: 'primary' },
      { label: 'Credit Scoring', type: 'coming-soon' },
    ],
  },
  {
    badge: 'Payments',
    badgeClass: 'bg-accent/10 text-accent border-accent/20',
    title: 'Commerce Widget & Purchase Intelligence',
    desc: 'Multi-chain checkout that captures purchase behavior and feeds it back into the prediction engine. Every payment becomes a signal.',
    features: [
      'Any ERC-20, native token, or stablecoin',
      'Next-purchase prediction via API',
      'Spend pattern clustering and affinity modeling',
      'Sub-3s settlement — already live in production',
    ],
    arrowColor: 'text-accent',
    highlight: false,
    links: [
      { label: 'View Demo', href: 'https://karratshop.com/', type: 'primary' },
    ],
  },
  {
    badge: 'Engagent',
    badgeClass: 'bg-green/10 text-green border-green/20',
    title: 'AI-Powered User Engagement Agent',
    desc: "The action layer. Engagent uses BlockSight's predictions to autonomously engage users — retaining the at-risk, converting the interested, and rewarding the loyal.",
    features: [
      'Automated retention workflows from churn signals',
      'Personalized incentive delivery and airdrop targeting',
      'Purchase recommendation surfacing via protocol UI',
      'Programmable triggers — composable into any dApp',
    ],
    arrowColor: 'text-green',
    highlight: true,
    comingSoon: true,
    links: [],
  },
]

export default function Products() {
  return (
    <section className="relative py-28" id="products">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-14">
        <div className="mb-14">
          <div className="font-mono text-[11px] font-medium tracking-[2.5px] uppercase text-muted mb-3.5">Products</div>
          <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-normal leading-[1.18] tracking-tight max-w-[620px] mb-3.5">
            Three products. One behavioral engine. Full-stack intelligence.
          </h2>
          <p className="text-[15px] font-light text-body max-w-[540px] leading-[1.7]">
            BlockSight sees. The payments widget captures. Engagent acts. Each product feeds the next. Accuracy compounds with every interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3.5">
          {products.map((prod, i) => (
            <div
              key={i}
              className={`flex flex-col p-8 rounded-xl border transition-colors ${
                prod.highlight
                  ? 'border-green/20 bg-gradient-to-b from-green/[0.03] to-bg-elevated hover:border-green'
                  : 'border-line bg-bg-elevated hover:border-accent/20'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-4">
                <span className={`font-mono text-[10px] font-semibold tracking-[1.5px] uppercase px-2.5 py-1 rounded border ${prod.badgeClass}`}>
                  {prod.badge}
                </span>
                {prod.comingSoon && (
                  <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 bg-amber/90 text-black rounded">Coming Soon</span>
                )}
              </div>

              <h3 className="text-lg font-semibold mb-2.5 leading-snug">{prod.title}</h3>
              <p className="text-sm text-body leading-[1.7] mb-6">{prod.desc}</p>

              <div className="flex flex-col gap-3 mb-8">
                {prod.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2.5 text-[13px] text-body leading-relaxed">
                    <span className={`font-bold shrink-0 mt-[2px] ${prod.arrowColor}`}>→</span>
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2.5 mt-auto pt-6 border-t border-line">
                {prod.links && prod.links.length > 0 ? (
                  prod.links.map((link, k) => (
                    link.type === 'primary' ? (
                      <a
                        key={k}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between w-full px-4 py-3 rounded-lg text-[13px] font-medium border border-line-strong bg-bg-surface text-heading hover:bg-bg hover:border-accent/30 transition-all group"
                      >
                        {link.label}
                        <span className="text-muted group-hover:text-accent transition-colors">→</span>
                      </a>
                    ) : (
                      <div
                        key={k}
                        className="inline-flex items-center justify-between w-full px-4 py-3 rounded-lg text-[13px] font-medium border border-line bg-bg-elevated text-muted"
                      >
                        {link.label}
                        <span className="text-[10px] uppercase font-semibold tracking-wider text-amber">Soon</span>
                      </div>
                    )
                  ))
                ) : prod.comingSoon ? (
                  <div className="inline-flex items-center justify-center w-full px-4 py-3 rounded-lg text-[13px] font-medium border border-line bg-bg-elevated text-muted">
                    Coming Soon
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
