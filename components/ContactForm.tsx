'use client'
import { useState } from 'react'

const inputClass = 'w-full border border-gray-300 rounded px-4 py-3 text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="font-serif text-lg font-bold text-text-dark mb-2">Message received.</h3>
        <p className="text-text-body text-sm">We will respond to <strong>{form.email}</strong> within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-text-dark mb-1.5">Full name <span className="text-accent">*</span></label>
        <input type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className={inputClass} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-text-dark mb-1.5">Email address <span className="text-accent">*</span></label>
        <input type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className={inputClass} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-text-dark mb-1.5">Phone number</label>
        <input type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-text-dark mb-1.5">Message <span className="text-accent">*</span></label>
        <textarea
          placeholder="Tell us about your situation or any questions you have..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          rows={5}
          className={inputClass}
        />
      </div>
      <button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent-light text-white font-bold py-3 rounded transition-colors disabled:opacity-70">
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
