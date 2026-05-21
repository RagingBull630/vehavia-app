'use client'
import { useState } from 'react'
import Link from 'next/link'

interface IntakeData {
  primaryVehicle: string; secondaryVehicle: string; preferredColors: string
  requiredOptions: string; acceptableAlternatives: string; budget: string
  financingStatus: string; tradeInVehicle: string; shippingDestination: string
  purchaseTimeline: string; currentVehicleSituation: string; referralSource: string
  readyToMove: '' | 'yes' | 'no'; fullName: string; email: string; phone: string
}

const initial: IntakeData = {
  primaryVehicle: '', secondaryVehicle: '', preferredColors: '', requiredOptions: '', acceptableAlternatives: '',
  budget: '', financingStatus: '', tradeInVehicle: '', shippingDestination: '',
  purchaseTimeline: '', currentVehicleSituation: '', referralSource: '',
  readyToMove: '', fullName: '', email: '', phone: '',
}

const inp = 'w-full border border-gray-300 rounded px-4 py-3 text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent'

function Bar({ step, total }: { step: number; total: number }) {
  return (
    <div className="mb-10">
      <div className="flex justify-between text-xs text-gray-500 mb-2"><span>Step {step} of {total}</span><span>{Math.round((step/total)*100)}% complete</span></div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-accent rounded-full transition-all duration-500" style={{ width: `${Math.round((step/total)*100)}%` }} />
      </div>
    </div>
  )
}

export default function IntakeFunnel() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<IntakeData>(initial)
  const [softDecline, setSoftDecline] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [declineEmail, setDeclineEmail] = useState('')
  const [declineSubmitted, setDeclineSubmitted] = useState(false)

  const set = (f: keyof IntakeData, v: string) => setData(p => ({ ...p, [f]: v }))
  const next = () => setStep(s => s + 1)
  const back = () => setStep(s => s - 1)

  const handleStep4 = (ans: 'yes' | 'no') => {
    set('readyToMove', ans)
    if (ans === 'yes') next(); else setSoftDecline(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/intake', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      setConfirmed(true)
    } catch { alert('Something went wrong. Please email hello@vehavia.com.') }
    finally { setLoading(false) }
  }

  if (confirmed) return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="font-serif text-2xl font-bold text-text-dark mb-2">Great, you are all set.</h2>
        <p className="text-text-body mb-10">Here is what happens next:</p>
        <div className="text-left space-y-6 mb-10">
          {[
            { n:'1', t:'Check your inbox', d:'We have sent you a welcome email with a full summary of the process.' },
            { n:'2', t:'Review and sign your contract', d:'A service agreement will arrive via DocuSign. Sign at your convenience.' },
            { n:'3', t:'Pay your $200 deposit when ready', d:'A secure Stripe link is in the email. Your search begins the moment it is paid.' },
            { n:'4', t:'We will call you within 24 hours', d:'A Vehavia concierge will personally walk you through everything.' },
          ].map(item => (
            <div key={item.n} className="flex gap-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">{item.n}</div>
              <div><p className="font-semibold text-text-dark">{item.t}</p><p className="text-text-body text-sm">{item.d}</p></div>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm">Questions? <a href="mailto:hello@vehavia.com" className="text-accent underline">hello@vehavia.com</a></p>
      </div>
    </div>
  )

  if (softDecline) return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-10">
        <h2 className="font-serif text-2xl font-bold text-text-dark mb-4">No problem at all - timing is everything.</h2>
        <p className="text-text-body mb-6">When you are ready to move, we will be here. Grab our free guide so you are fully prepared when the moment comes.</p>
        <div className="bg-cream rounded-lg p-6 mb-8">
          <p className="font-serif text-lg font-bold text-text-dark mb-1">The 7 Dealer Tricks That Cost Buyers $3,000-$8,000</p>
          <p className="text-text-body text-sm mb-4">Enter your email and we will send it immediately.</p>
          {declineSubmitted ? (
            <p className="text-green-700 font-semibold text-sm">Guide sent to {declineEmail} - check your inbox.</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDeclineSubmitted(true) }} className="flex gap-3">
              <input type="email" placeholder="Your email address" value={declineEmail} onChange={(e) => setDeclineEmail(e.target.value)} required className={inp} />
              <button type="submit" className="bg-accent text-white font-bold px-6 py-3 rounded whitespace-nowrap hover:bg-accent-light transition-colors">Send Guide</button>
            </form>
          )}
        </div>
        <p className="text-gray-500 text-sm mb-4">We will follow up with you in 30 days.</p>
        <button onClick={() => { setSoftDecline(false); setStep(4) }} className="text-accent underline text-sm font-medium">Actually, I am ready to proceed</button>
      </div>
    </div>
  )

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <Bar step={step} total={5} />

        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); next() }}>
            <h2 className="font-serif text-2xl font-bold text-text-dark mb-2">Tell us about the vehicle.</h2>
            <p className="text-text-body text-sm mb-8">Be as specific as possible - year, make, model, trim, and any must-have options.</p>
            <div className="space-y-5">
              <div><label className="block text-sm font-semibold text-text-dark mb-1.5">Primary vehicle target <span className="text-accent">*</span></label>
                <input type="text" placeholder="e.g. 2024 Toyota 4Runner TRD Pro, Army Green" value={data.primaryVehicle} onChange={(e) => set('primaryVehicle', e.target.value)} required className={inp} /></div>
              <div><label className="block text-sm font-semibold text-text-dark mb-1.5">Secondary vehicle (acceptable alternative)</label>
                <input type="text" placeholder="e.g. 2024 Toyota 4Runner Limited" value={data.secondaryVehicle} onChange={(e) => set('secondaryVehicle', e.target.value)} className={inp} /></div>
              <div><label className="block text-sm font-semibold text-text-dark mb-1.5">Preferred colors / color restrictions</label>
                <input type="text" placeholder="e.g. No white or silver, prefer dark colors" value={data.preferredColors} onChange={(e) => set('preferredColors', e.target.value)} className={inp} /></div>
              <div><label className="block text-sm font-semibold text-text-dark mb-1.5">Required options or packages</label>
                <input type="text" placeholder="e.g. Must have sunroof and tow package" value={data.requiredOptions} onChange={(e) => set('requiredOptions', e.target.value)} className={inp} /></div>
              <div><label className="block text-sm font-semibold text-text-dark mb-1.5">Options you would consider on a great deal</label>
                <input type="text" placeholder="e.g. Would accept without sunroof if price is right" value={data.acceptableAlternatives} onChange={(e) => set('acceptableAlternatives', e.target.value)} className={inp} /></div>
            </div>
            <div className="mt-8 flex justify-end">
              <button type="submit" className="bg-accent hover:bg-accent-light text-white font-bold px-8 py-3 rounded transition-colors">Continue</button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={(e) => { e.preventDefault(); next() }}>
            <h2 className="font-serif text-2xl font-bold text-text-dark mb-2">Budget and logistics.</h2>
            <p className="text-text-body text-sm mb-8">Help us understand your financial range and delivery destination.</p>
            <div className="space-y-5">
              <div><label className="block text-sm font-semibold text-text-dark mb-1.5">Total budget (all-in) <span className="text-accent">*</span></label>
                <input type="text" placeholder="e.g. $55,000 out the door" value={data.budget} onChange={(e) => set('budget', e.target.value)} required className={inp} /></div>
              <div>
                <label className="block text-sm font-semibold text-text-dark mb-1.5">Financing status <span className="text-accent">*</span></label>
                <div className="space-y-2">
                  {['Cash purchase', 'Pre-approved financing', 'Need financing assistance'].map(opt => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="financingStatus" value={opt} checked={data.financingStatus === opt} onChange={(e) => set('financingStatus', e.target.value)} required className="w-4 h-4 accent-accent" />
                      <span className="text-sm text-text-dark">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div><label className="block text-sm font-semibold text-text-dark mb-1.5">Trade-in vehicle (if any)</label>
                <input type="text" placeholder="e.g. 2019 Honda Civic, 65,000 miles" value={data.tradeInVehicle} onChange={(e) => set('tradeInVehicle', e.target.value)} className={inp} /></div>
              <div><label className="block text-sm font-semibold text-text-dark mb-1.5">Shipping destination (city, state) <span className="text-accent">*</span></label>
                <input type="text" placeholder="e.g. Austin, TX 78701" value={data.shippingDestination} onChange={(e) => set('shippingDestination', e.target.value)} required className={inp} /></div>
            </div>
            <div className="mt-8 flex justify-between">
              <button type="button" onClick={back} className="text-text-body hover:text-text-dark font-medium text-sm">Back</button>
              <button type="submit" className="bg-accent hover:bg-accent-light text-white font-bold px-8 py-3 rounded transition-colors">Continue</button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={(e) => { e.preventDefault(); next() }}>
            <h2 className="font-serif text-2xl font-bold text-text-dark mb-2">A few final details.</h2>
            <p className="text-text-body text-sm mb-8">This helps us understand your timeline and prioritize your search.</p>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-text-dark mb-1.5">Purchase timeline <span className="text-accent">*</span></label>
                <select value={data.purchaseTimeline} onChange={(e) => set('purchaseTimeline', e.target.value)} required className={inp}>
                  <option value="">Select timeline...</option>
                  <option>Within 30 days</option><option>1-3 months</option><option>3-6 months</option><option>Just exploring</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-dark mb-1.5">Current vehicle situation</label>
                <select value={data.currentVehicleSituation} onChange={(e) => set('currentVehicleSituation', e.target.value)} className={inp}>
                  <option value="">Select...</option>
                  <option>Keeping my current vehicle</option><option>Trading in my current vehicle</option>
                  <option>Selling current vehicle separately</option><option>I do not currently have a vehicle</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-dark mb-1.5">How did you hear about us?</label>
                <select value={data.referralSource} onChange={(e) => set('referralSource', e.target.value)} className={inp}>
                  <option value="">Select...</option>
                  <option>Google search</option><option>Social media</option><option>Friend or family referral</option>
                  <option>Online forum or community</option><option>YouTube</option><option>Other</option>
                </select>
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button type="button" onClick={back} className="text-text-body hover:text-text-dark font-medium text-sm">Back</button>
              <button type="submit" className="bg-accent hover:bg-accent-light text-white font-bold px-8 py-3 rounded transition-colors">Continue</button>
            </div>
          </form>
        )}

        {step === 4 && (
          <div>
            <h2 className="font-serif text-2xl font-bold text-text-dark mb-6">One important question.</h2>
            <div className="bg-cream rounded-xl p-8 mb-8 text-center">
              <p className="font-serif text-xl md:text-2xl font-bold text-text-dark leading-snug">
                If we locate your ideal vehicle tomorrow, are you prepared to move forward with purchase steps immediately?
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button onClick={() => handleStep4('yes')} className="bg-primary hover:bg-primary-mid text-white font-bold py-6 rounded-lg text-lg transition-colors">Yes, I am ready</button>
              <button onClick={() => handleStep4('no')} className="bg-gray-200 hover:bg-gray-300 text-text-dark font-bold py-6 rounded-lg text-lg transition-colors">Not quite yet</button>
            </div>
            <button type="button" onClick={back} className="text-text-body hover:text-text-dark font-medium text-sm">Back</button>
          </div>
        )}

        {step === 5 && (
          <form onSubmit={handleSubmit}>
            <h2 className="font-serif text-2xl font-bold text-text-dark mb-2">Almost done - your contact details.</h2>
            <p className="text-text-body text-sm mb-8">We will send your service agreement and welcome information to this address.</p>
            <div className="space-y-5">
              <div><label className="block text-sm font-semibold text-text-dark mb-1.5">Full name <span className="text-accent">*</span></label>
                <input type="text" placeholder="Your full legal name" value={data.fullName} onChange={(e) => set('fullName', e.target.value)} required className={inp} /></div>
              <div><label className="block text-sm font-semibold text-text-dark mb-1.5">Email address <span className="text-accent">*</span></label>
                <input type="email" placeholder="you@example.com" value={data.email} onChange={(e) => set('email', e.target.value)} required className={inp} /></div>
              <div><label className="block text-sm font-semibold text-text-dark mb-1.5">Phone number <span className="text-accent">*</span></label>
                <input type="tel" placeholder="(555) 000-0000" value={data.phone} onChange={(e) => set('phone', e.target.value)} required className={inp} /></div>
            </div>
            <p className="text-xs text-gray-500 mt-4 mb-6">
              By submitting, you agree to our <Link href="/legal/terms" className="underline">Terms of Service</Link> and <Link href="/legal/privacy" className="underline">Privacy Policy</Link>.
            </p>
            <div className="flex justify-between items-center">
              <button type="button" onClick={back} className="text-text-body hover:text-text-dark font-medium text-sm">Back</button>
              <button type="submit" disabled={loading} className="bg-accent hover:bg-accent-light text-white font-bold px-8 py-3 rounded transition-colors disabled:opacity-70">
                {loading ? 'Submitting...' : 'Complete My Intake'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
