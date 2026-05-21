'use client'
import { useState } from 'react'

export default function LeadMagnetForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
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
      <div className="bg-primary-mid rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="font-serif text-xl font-bold text-white mb-2">Check your inbox.</h3>
        <p className="text-gray-300 text-sm">Your free guide is on its way to <strong>{email}</strong>.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Your first name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="flex-1 px-4 py-3 rounded bg-white text-text-dark placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-4 py-3 rounded bg-white text-text-dark placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-accent hover:bg-accent-light text-white font-bold px-6 py-3 rounded transition-colors disabled:opacity-70 whitespace-nowrap"
      >
        {loading ? 'Sending...' : 'Send Me the Guide'}
      </button>
    </form>
  )
}
