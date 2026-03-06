export default function Contact() {
  return (
    <section className="relative py-28 pb-32 text-center" id="contact">
      {/* Glow */}
      <div className="absolute w-[500px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(74,222,128,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-14">
        <div className="font-mono text-[11px] font-medium tracking-[2.5px] uppercase text-muted mb-3.5">Let&apos;s Talk</div>
        <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-normal leading-[1.18] tracking-tight mb-3.5">
          AI-powered engagement infrastructure for on-chain economies.
        </h2>
        <p className="text-[15px] font-light text-body max-w-[500px] mx-auto leading-[1.7] mb-11">
          Whether you&apos;re a protocol exploring AI-driven retention, a marketplace integrating predictive commerce, or an institution building on behavioral infrastructure — we&apos;d like to hear from you.
        </p>
        <div className="flex gap-3.5 justify-center flex-col sm:flex-row items-center">
          <a href="mailto:partnerships@engagent.nl" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold bg-green text-black hover:opacity-90 hover:-translate-y-px transition-all">
            Get in Touch <span className="opacity-60">→</span>
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-body border border-line-strong hover:border-green/20 hover:text-heading transition-all">
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  )
}
