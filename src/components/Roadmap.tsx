const milestones = [
  { q: 'Q4 2025', title: 'Behavioral + payment infrastructure built', desc: 'Multi-chain ingestion and payment processing operational. Models trained across 6+ EVM chains.', status: 'Complete' as const },
  { q: 'Q1 2026', title: 'Private beta — analytics + payments live', desc: 'Both products deployed to partners. 95% accuracy validated. Payments widget live in KarratShop. 2,000+ waitlist.', status: 'Complete' as const },
  { q: 'Q2 2026', title: 'Public launch — full platform + Engagent beta', desc: 'Intelligence and payments open. Engagent enters private beta with select protocols. Composable API live.', status: 'Active' as const },
  { q: 'Q3 2026', title: 'Engagent public launch & enterprise tier', desc: 'Engagent open to all. White-label engagement infrastructure. Institutional analytics. Custom model deployments.', status: 'Planned' as const },
  { q: 'Q4 2026', title: 'Cross-chain expansion & agent APIs', desc: 'Non-EVM support. Portable behavioral profiles. Engagent agent-to-agent coordination APIs.', status: 'Planned' as const },
]

const statusStyles = {
  Complete: 'bg-green/10 text-green border-green/20',
  Active: 'bg-accent/10 text-accent border-accent/20',
  Planned: 'bg-white/[0.02] text-muted border-line',
}

export default function Roadmap() {
  return (
    <section className="relative py-28" id="roadmap">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-14">
        <div className="mb-14">
          <div className="font-mono text-[11px] font-medium tracking-[2.5px] uppercase text-muted mb-3.5">Traction & Roadmap</div>
          <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-normal leading-[1.18] tracking-tight">Execution to date</h2>
        </div>

        <div className="border border-line rounded-xl overflow-hidden">
          {milestones.map((m, i) => (
            <div key={i} className={`grid grid-cols-[80px_1fr_auto] md:grid-cols-[96px_1fr_auto] gap-3 md:gap-5 p-5 md:p-6 bg-bg-elevated items-center ${i < milestones.length - 1 ? 'border-b border-line' : ''}`}>
              <div className="font-mono text-xs font-semibold text-body">{m.q}</div>
              <div>
                <h4 className="text-sm font-semibold mb-0.5">{m.title}</h4>
                <p className="text-[13px] text-body leading-relaxed">{m.desc}</p>
              </div>
              <span className={`font-mono text-[10px] font-semibold px-3 py-1 rounded uppercase tracking-wider border whitespace-nowrap ${statusStyles[m.status]}`}>
                {m.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
