const rows = [
  { cap: 'Behavioral profiling', dune: 'Basic labels', kaito: 'Attention metrics', moonpay: '—', bs: 'Deep behavioral embeddings' },
  { cap: 'Predictive churn modeling', dune: '—', kaito: '—', moonpay: '—', bs: '95% accuracy, 0.89 AUC-ROC' },
  { cap: 'Purchase prediction', dune: '—', kaito: '—', moonpay: '—', bs: '✓' },
  { cap: 'On-chain credit scoring', dune: '—', kaito: '—', moonpay: '—', bs: '✓' },
  { cap: 'Multi-chain payments', dune: '—', kaito: '—', moonpay: '✓', bs: '✓ (with intelligence)' },
  { cap: 'Autonomous engagement', dune: '—', kaito: '—', moonpay: '—', bs: '✓ Engagent' },
  { cap: 'Composable prediction API', dune: '—', kaito: 'Partial', moonpay: '—', bs: '✓ Full' },
  { cap: 'Closed-loop data flywheel', dune: '—', kaito: '—', moonpay: '—', bs: '✓' },
]

function Cell({ val, highlight }: { val: string; highlight?: boolean }) {
  const isCheck = val.startsWith('✓')
  const isDash = val === '—'
  return (
    <td className={`px-5 py-4 text-[13px] border-b border-line bg-bg-elevated ${highlight ? 'text-heading font-medium' : 'text-body'}`}>
      {isCheck ? <span className="text-green">{val}</span> : isDash ? <span className="text-muted">—</span> : val}
    </td>
  )
}

export default function Comparison() {
  return (
    <section className="relative py-28 bg-bg-elevated" id="comparison">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-14">
        <div className="mb-14">
          <div className="font-mono text-[11px] font-medium tracking-[2.5px] uppercase text-muted mb-3.5">Why BlockSight + Engagent</div>
          <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-normal leading-[1.18] tracking-tight max-w-[620px] mb-3.5">Others analyze. We act.</h2>
          <p className="text-[15px] font-light text-body max-w-[540px] leading-[1.7]">
            Analytics tools show you what happened. Payment processors move tokens. Only BlockSight + Engagent predicts what&apos;s next and acts on it autonomously.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-line rounded-xl overflow-hidden" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
            <thead>
              <tr>
                <th className="px-5 py-4 text-left text-[12px] font-semibold text-heading bg-bg border-b border-line">Capability</th>
                <th className="px-5 py-4 text-left text-[12px] font-semibold text-heading bg-bg border-b border-line">Dune / Nansen</th>
                <th className="px-5 py-4 text-left text-[12px] font-semibold text-heading bg-bg border-b border-line">Kaito</th>
                <th className="px-5 py-4 text-left text-[12px] font-semibold text-heading bg-bg border-b border-line">Moonpay / Crossmint</th>
                <th className="px-5 py-4 text-left text-[12px] font-semibold text-green bg-bg border-b border-line">BlockSight + Engagent</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="px-5 py-4 text-[13px] font-medium text-heading border-b border-line bg-bg-elevated">{r.cap}</td>
                  <Cell val={r.dune} />
                  <Cell val={r.kaito} />
                  <Cell val={r.moonpay} />
                  <Cell val={r.bs} highlight />
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-center text-[13px] text-muted mt-6 italic">Competitive comparison matrix</p>
        </div>
      </div>
    </section>
  )
}
