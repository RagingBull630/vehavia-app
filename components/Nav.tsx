'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 h-[72px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold text-primary tracking-wide">
          VEH<span className="text-accent">A</span>VIA
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <Link href="/#how-it-works" className="text-sm text-text-body hover:text-primary font-medium transition-colors">How It Works</Link>
          <Link href="/services" className="text-sm text-text-body hover:text-primary font-medium transition-colors">Services</Link>
          <Link href="/pricing" className="text-sm text-text-body hover:text-primary font-medium transition-colors">Pricing</Link>
          <Link href="/about" className="text-sm text-text-body hover:text-primary font-medium transition-colors">About</Link>
          <Link href="/intake" className="bg-accent hover:bg-accent-light text-white text-sm font-bold px-5 py-2.5 rounded transition-colors">
            Start Free Intake
          </Link>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-primary transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 bg-primary transition-all ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 bg-primary transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>
      {open && (
        <div className="absolute top-[72px] left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col gap-4 md:hidden shadow-lg">
          <Link href="/#how-it-works" className="text-text-body font-medium" onClick={() => setOpen(false)}>How It Works</Link>
          <Link href="/services" className="text-text-body font-medium" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/pricing" className="text-text-body font-medium" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/about" className="text-text-body font-medium" onClick={() => setOpen(false)}>About</Link>
          <Link href="/intake" className="bg-accent text-white font-bold px-5 py-3 rounded text-center" onClick={() => setOpen(false)}>Start Free Intake</Link>
        </div>
      )}
    </header>
  )
}
