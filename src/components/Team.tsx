import Image from 'next/image'

const team = [
  {
    name: 'Stefano',
    role: 'Co-Founder · CTO',
    photo: '/StefanoVercesi.png',
    bio: '10 years in software engineering. Multiple bootstrapped products. Three years deep in blockchain development, smart contract architecture, and on-chain payment systems.',
  },
  {
    name: 'Devon Martens',
    role: 'Co-Founder · CEO',
    photo: '/DevonMartens.webp',
    bio: 'Architected AI-driven trading engines managing $50M+ in liquidity. Led Studio Chain, a Layer 2 for adaptive game economies. Unites blockchain commerce, ML, and decentralized reasoning.',
  },
  {
    name: 'Dr. Petrus C. Martens',
    role: 'Co-Founder · Chief Scientist',
    photo: '/petrusMartens.webp',
    bio: '20+ years of NASA- and NSF-funded research in machine learning, predictive modeling, and large-scale data infrastructure. Professor at Georgia State University.',
  },
]

export default function Team() {
  return (
    <section className="relative py-28 bg-bg-elevated" id="team">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-14">
        <div className="mb-14">
          <div className="font-mono text-[11px] font-medium tracking-[2.5px] uppercase text-muted mb-3.5">Team</div>
          <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-normal leading-[1.18] tracking-tight mb-3.5">Operators and researchers</h2>
          <p className="text-[15px] font-light text-body max-w-[540px] leading-[1.7]">
            Domain expertise across blockchain commerce, machine learning, and venture-scale product building.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {team.map((t, i) => (
            <div key={i} className="group flex flex-col bg-bg-surface border border-line rounded-2xl p-4 hover:border-line-strong hover:bg-bg-elevated transition-all duration-300">
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 bg-bg-elevated relative border border-line/50">
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-2 pb-2">
                <h4 className="text-[17px] font-semibold mb-1 text-heading">{t.name}</h4>
                <div className="font-mono text-[12px] text-accent mb-4">{t.role}</div>
                <p className="text-[14px] text-body leading-relaxed font-light">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
