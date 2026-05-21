import Link from 'next/link'
export const metadata = { title: 'About - Vehavia' }
export default function AboutPage() {
  return (
    <>
      <section className="bg-primary py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">30 years of dealer expertise, working for you.</h1>
          <p className="text-gray-300 text-lg">Vehavia was built on a simple premise: the buyer deserves the same level of expertise the dealer has always had.</p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="w-full aspect-square bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-gray-400 text-sm">Founder photo</span>
              </div>
              <p className="font-serif text-lg font-bold text-text-dark">Founder, Vehavia</p>
              <p className="text-text-body text-sm">30 Years Automotive Industry Experience</p>
            </div>
            <div className="md:col-span-2 space-y-5">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark">Why I built this.</h2>
              <p className="text-text-body leading-relaxed">I spent three decades in the automotive industry on the dealer side. I trained sales teams, managed finance departments, and understood exactly how the business model worked: the more a buyer did not know, the more a dealer could extract. I was good at my job. But over time, I became uncomfortable with how consistently that expertise was deployed against the very people who were trusting us.</p>
              <p className="text-text-body leading-relaxed">When a close friend came to me before buying a vehicle, I walked her through the process the way I would have if she were family. I told her exactly what the dealer was doing at each stage, where the real margin was, and what she should push back on. She saved over $6,000 compared to the first offer she received. The dealer was still profitable. My friend just had someone in her corner who knew the game.</p>
              <p className="text-text-body leading-relaxed">That experience crystallized what Vehavia is: a service that gives every buyer access to the kind of insider knowledge that most people only get if they happen to know someone in the industry. The flat $800 fee was a deliberate choice. It means our only incentive is to get you the best possible deal.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">What We Stand For</p>
            <h2 className="font-serif text-3xl font-bold text-text-dark">Our values.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Independence', body: 'Zero dealer affiliations, zero referral fees, zero back-channel arrangements. We work exclusively for the buyer.' },
              { title: 'Transparency', body: 'One flat fee, disclosed upfront. No percentage of the deal, no finder fees, no hidden charges.' },
              { title: 'Expertise', body: '30 years of automotive industry experience across pricing, financing, trade-ins, F&I, and transport.' },
            ].map(v => (
              <div key={v.title} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-2 h-8 bg-accent rounded mb-4" />
                <h3 className="font-serif text-xl font-bold text-text-dark mb-3">{v.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">The Difference</p>
            <h2 className="font-serif text-3xl font-bold text-white">How Vehavia is different.</h2>
          </div>
          <div className="space-y-6">
            {[
              { title: 'We are not a dealer referral service.', body: 'Many car buying services receive referral fees from dealers when they send buyers their way. Our fee comes entirely from you. Dealers receive nothing from us.' },
              { title: 'We are not a price aggregator.', body: 'We do not show you a website of listings and call it a service. We engage on your behalf, negotiate actively, and stay with your transaction from intake to close.' },
              { title: 'We are not a credit or financing service.', body: 'We review your financing terms and protect you from markups. We do not originate loans, earn finance commissions, or have arrangements with any lender.' },
              { title: 'We are not affiliated with any manufacturer or brand.', body: 'We work with any vehicle from any brand at any dealer in the country. Our recommendation is always based on what is best for your specific situation.' },
            ].map(item => (
              <div key={item.title} className="bg-primary-mid rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-text-dark py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Ready to have someone in your corner?</h2>
          <p className="text-gray-400 mb-8">Start your free intake today. Takes 3 minutes. No commitment until you sign.</p>
          <Link href="/intake" className="inline-block bg-accent hover:bg-accent-light text-white font-bold px-10 py-4 rounded transition-colors">Start Free Intake</Link>
        </div>
      </section>
    </>
  )
}
