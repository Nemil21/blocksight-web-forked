'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const links = [
  { href: '#engagent', label: 'Engagent' },
  { href: '#products', label: 'Products' },
  { href: '#technology', label: 'Technology' },
  { href: '#enterprise', label: 'Enterprise' },
  { href: '#team', label: 'Team' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-14 flex items-center justify-between px-6 md:px-12 bg-bg/90 backdrop-blur-xl border-b border-line">
      <a href="#" className="flex items-center gap-2">
        <Image src="/BlockSightLogo.webp" alt="BlockSight" width={24} height={24} className="rounded" />
        <span className="font-mono text-sm font-semibold tracking-tight text-heading">BlockSight</span>
      </a>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-7">
        {links.map(l => (
          <a key={l.href} href={l.href} className="text-[13px] font-medium text-muted hover:text-body transition-colors">{l.label}</a>
        ))}
        <a href="#contact" className="text-[13px] font-semibold text-green hover:opacity-80 transition-opacity">Get in Touch</a>
      </div>

      {/* Mobile toggle */}
      <button className="md:hidden text-body" onClick={() => setOpen(!open)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-14 inset-x-0 bg-bg/95 backdrop-blur-xl border-b border-line p-6 flex flex-col gap-4 md:hidden">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-body">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-sm font-semibold text-green">Get in Touch</a>
        </div>
      )}
    </nav>
  )
}
