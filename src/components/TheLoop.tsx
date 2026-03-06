'use client'
import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: 'STEP 01 — SEE',
    title: 'Behavioral Intelligence',
    desc: 'The engine profiles every wallet — engagement patterns, churn risk, cross-protocol behavior. 95% predictive accuracy across 120M+ wallets.',
    color: 'violet' as const,
  },
  {
    num: 'STEP 02 — CAPTURE',
    title: 'Commerce Data',
    desc: 'The payments widget captures purchase behavior in real time. Every transaction feeds the model. Every checkout becomes a data point.',
    color: 'accent' as const,
  },
  {
    num: 'STEP 03 — ACT',
    title: 'Engagent',
    desc: "The AI agent acts on predictions — triggering retention workflows, surfacing recommendations, adjusting incentives. Protocols don't hire a growth team. They plug in Engagent.",
    color: 'green' as const,
  },
]

export default function TheLoop() {
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !stepsRef.current) return

      const stepsContainer = stepsRef.current
      const stepsRect = stepsContainer.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const windowCenter = windowHeight / 2

      // Start when steps container reaches center of screen
      // End when bottom of steps container reaches center of screen
      const stepsTop = stepsRect.top
      const stepsBottom = stepsRect.bottom
      const stepsHeight = stepsRect.height

      // Animation starts when top of steps reaches center of viewport
      const startPoint = stepsTop - windowCenter
      // Animation ends when bottom of steps reaches center of viewport  
      const endPoint = stepsBottom - windowCenter

      if (startPoint > 0) {
        // Steps haven't reached center yet
        setProgress(0)
        setActiveStep(-1)
      } else if (endPoint < 0) {
        // Steps have passed center
        setProgress(100)
        setActiveStep(2)
      } else {
        // Currently animating
        const totalDistance = stepsHeight
        const traveled = Math.abs(startPoint)
        const currentProgress = (traveled / totalDistance) * 100
        setProgress(Math.min(100, Math.max(0, currentProgress)))
        
        if (currentProgress < 25) {
          setActiveStep(0)
        } else if (currentProgress < 60) {
          setActiveStep(1)
        } else {
          setActiveStep(2)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getStepColor = (index: number) => {
    const colors = ['#a78bfa', '#5b9cf5', '#4ade80']
    return colors[index]
  }

  return (
    <section ref={sectionRef} className="relative py-28 bg-bg-elevated" id="engagent">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-14">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-[72px] items-center">
          <div>
            <div className="font-mono text-[11px] font-medium tracking-[2.5px] uppercase text-muted mb-3.5">The Loop</div>
            <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-normal leading-[1.18] tracking-tight mb-3.5">See. Capture. Act. Repeat.</h2>
            <p className="text-[15px] font-light text-body max-w-[540px] leading-[1.7] mt-3.5">
              Facebook built engagement graphs. Amazon built recommendation engines. Netflix built retention systems. In Web2, that&apos;s three companies with three data silos. BlockSight unifies all three on-chain — and Engagent closes the loop by acting on the intelligence autonomously.
            </p>
          </div>

          <div ref={stepsRef} className="relative flex flex-col">
            {/* Background track */}
            <div className="absolute left-[5px] top-7 bottom-7 w-[2px] bg-line" />
            
            {/* Animated progress line */}
            <div 
              className="absolute left-[5px] top-7 w-[2px] transition-all duration-300 ease-out"
              style={{ 
                height: `calc(${progress}% * 0.86)`,
                background: `linear-gradient(to bottom, #a78bfa, #5b9cf5, #4ade80)`
              }}
            />

            {steps.map((step, i) => {
              const isActive = i <= activeStep
              const isCurrent = i === activeStep
              
              return (
                <div 
                  key={i} 
                  className={`relative pl-8 py-6 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}
                >
                  {/* Dot */}
                  <div 
                    className={`absolute left-0 top-7 w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                      isActive 
                        ? isCurrent 
                          ? 'scale-125' 
                          : ''
                        : 'bg-bg-elevated border-line'
                    }`}
                    style={isActive ? { 
                      backgroundColor: getStepColor(i), 
                      borderColor: getStepColor(i),
                      boxShadow: isCurrent ? `0 0 16px ${getStepColor(i)}60` : 'none'
                    } : {}}
                  />
                  <div className={`font-mono text-[10px] tracking-[1.5px] mb-1.5 transition-colors duration-500 ${isActive ? 'text-body' : 'text-muted'}`}>
                    {step.num}
                  </div>
                  <h4 className={`text-[15px] font-semibold mb-1 transition-colors duration-500 ${isActive ? 'text-heading' : 'text-body'}`}>
                    {step.title}
                  </h4>
                  <p className="text-[13px] text-body leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
