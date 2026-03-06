'use client'
import { useEffect, useState, useRef } from 'react'

const TOTAL_DURATION = 2500

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function StatsBar() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [values, setValues] = useState({
    chains: '0+',
    wallets: '0',
    accuracy: '0%',
    latency: '<0.0s'
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          startAnimation()
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const startAnimation = () => {
    const startTime = performance.now()
    
    const tick = () => {
      const elapsed = performance.now() - startTime
      const linearProgress = Math.min(elapsed / TOTAL_DURATION, 1)
      const easedProgress = easeOutExpo(linearProgress)

      // Chains: 0 to 6
      const chainsVal = Math.round(easedProgress * 6)
      
      // Wallets: 0 to 120M
      const walletsNum = Math.round(easedProgress * 120000000)
      let walletsStr: string
      if (walletsNum < 1000) {
        walletsStr = `${walletsNum}`
      } else if (walletsNum < 1000000) {
        walletsStr = `${Math.floor(walletsNum / 1000)}K+`
      } else {
        walletsStr = `${Math.floor(walletsNum / 1000000)}M+`
      }
      
      // Accuracy: 0 to 95
      const accuracyVal = Math.round(easedProgress * 95)
      
      // Latency: 0 to 3 with decimals
      const latencyVal = easedProgress * 3
      const latencyStr = linearProgress < 0.85 
        ? `<${latencyVal.toFixed(1)}s`
        : `<${Math.round(latencyVal)}s`

      setValues({
        chains: `${chainsVal}+`,
        wallets: walletsStr,
        accuracy: `${accuracyVal}%`,
        latency: latencyStr
      })

      if (linearProgress < 1) {
        requestAnimationFrame(tick)
      } else {
        setValues({
          chains: '6+',
          wallets: '120M+',
          accuracy: '95%',
          latency: '<3s'
        })
      }
    }

    requestAnimationFrame(tick)
  }

  const stats = [
    { key: 'chains' as const, label: 'Chains Indexed' },
    { key: 'wallets' as const, label: 'Wallets Profiled' },
    { key: 'accuracy' as const, label: 'Predictive Accuracy' },
    { key: 'latency' as const, label: 'Decision Latency' },
  ]

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 border border-line rounded-xl overflow-hidden">
      {stats.map((s, i) => (
        <div key={i} className="p-7 bg-bg-elevated border-r border-b md:border-b-0 border-line last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
          <div className="font-mono text-[26px] font-semibold tracking-tight mb-1">
            {values[s.key]}
          </div>
          <div className="text-[11.5px] font-medium text-muted uppercase tracking-wider">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28">
      {/* Glow */}
      <div className="absolute w-[700px] h-[500px] top-[-120px] left-1/2 -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(74,222,128,0.05)_0%,transparent_70%)] pointer-events-none" />
      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-14">
        {/* Labels */}
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-px bg-green/50" />
          <span className="font-mono text-[11px] font-medium tracking-[2.5px] uppercase text-green">Introducing Engagent</span>
        </div>
        <div className="flex items-center gap-2.5 mb-7">
          <span className="w-2 h-2 rounded-full bg-green shadow-[0_0_12px_rgba(74,222,128,0.5)] animate-pulse-glow" />
          <span className="font-mono text-[13px] font-semibold tracking-[3px] uppercase text-muted">AI-Powered User Engagement for On-Chain Economies</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(42px,5.8vw,72px)] font-normal leading-[1.08] tracking-[-2px] max-w-[820px] mb-7">
          See. Predict.<br />
          <em className="italic font-light text-green">Engage.</em>
        </h1>

        {/* Subhead */}
        <p className="text-[17px] font-light text-body max-w-[640px] leading-[1.75] mb-13">
          BlockSight&apos;s behavioral intelligence engine sees your users and predicts what they&apos;ll do next.{' '}
          <strong className="text-heading font-medium">Engagent acts on it</strong> — autonomously retaining at-risk users, recommending purchases, and coordinating incentives. The AI agent that turns insight into action.
        </p>

        {/* CTAs */}
        <div className="flex gap-3.5 mb-[72px] flex-col sm:flex-row">
          <a href="mailto:partnerships@engagent.nl" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold bg-green text-black hover:opacity-90 hover:-translate-y-px transition-all">
            Get Early Access <span className="opacity-60">→</span>
          </a>
          <a href="#products" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-body border border-line-strong hover:border-green/20 hover:text-heading transition-all">
            How It Works
          </a>
        </div>

        {/* Stats bar */}
        <StatsBar />
      </div>
    </section>
  )
}
