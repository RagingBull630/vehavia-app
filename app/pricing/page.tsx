import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'
export const metadata = { title: 'Pricing - Vehavia' }
const pricingFAQs = [
  { q:'Is the $800 fee negotiable?', a:'No. The flat fee is the same for every client regardless of vehicle price, location, or complexity. This ensures our incentive is always to get you the best deal.' },
  { q:"What if you can't find my vehicle - do I still owe the $600?", a:"The $600 completion fee is only due once we secure a signed purchase agreement on your behalf. If we are unable to find a vehicle that meets your requirements, we will discuss your options before any completion fee applies." },
  { q:'Is the $200 startup fee refundable?', a:'The $200 startup fee covers the initial search phase and is non-refundable once your search begins. Contact us immediately if you need to pause or cancel before search commences.' },
  { q:'Do you charge extra for out-of-state vehicles or transport coordination?', a:'No. Transport coordination is included in the concierge fee. You will pay transport costs directly to the carrier. We do not mark those up.' },
  { q:'How does the fee compare to what I would save?', a:'The average buyer overpays by $3,000-$8,000 on a vehicle purchase. Our $800 fee typically returns $5-$10 for every dollar spent.' },
]
const comparison = [
  { label:'Time spent researching', diy:'20-40 hours', vehavia:'About 2 hours of your time' },
  { label:'Dealer negotiation leverage', diy:'Minimal', vehavia:'Maximum - 30 yrs industry experience' },
  { label:'Financing markup risk', diy:'High - most buyers miss it', vehavia:'Audited before you sign' },
  { label:'Trade-in value captured', diy:'Often $1,000-$3,000 below market', vehavia:'Strategically maximized' },
  { label:'F&I add-on exposure', diy:'Significant', vehavia:'Every product reviewed and explained' },
  { label:'Typical savings vs. fee cost', diy:'None', vehavia:'$3,000-$8,000 saved on avg. deal' },
]
export default function PricingPage() {
  return (
    <>
      <section className="bg-primary py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">Transparent Pricing</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Transparent pricing. No surprises.</h1>
          <p className="text-gray-300 text-lg">One flat fee. Paid in two stages tied directly to results.</p>
        </div>
      </section>
      <section className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-10 mb-6">
            <div className="text-center mb-10">
              <div className="font-serif text-7xl font-bold text-primary mb-3">$800</div>
              <p className="text-text-body text-lg">Total concierge fee. New or pre-owned, any brand, any state.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cream rounded-xl p-8">
                <div className="text-accent font-bold text-2xl font-serif mb-1">$200</div>
                <div className="font-semibold text-text-dark mb-1">Step 1 - At contract signature</div>
                <p className="text-text-body text-sm leading-relaxed mb-4">Paid after you complete your intake and sign your service agreement. Your search begins immediately.</p>
                <ul className="space-y-1 text-sm text-text-body">
                  <li className="flex gap-2"><span className="text-accent">&#10003;</span> Service agreement executed</li>
                  <li className="flex gap-2"><span className="text-accent">&#10003;</span> Nationwide search initiated</li>
                  <li className="flex gap-2"><span className="text-accent">&#10003;</span> Dedicated concierge assigned</li>
                </ul>
              </div>
              <div className="bg-cream rounded-xl p-8">
                <div className="text-accent font-bold text-2xl font-serif mb-1">$600</div>
                <div className="font-semibold text-text-dark mb-1">Step 2 - At purchase agreement</div>
                <p className="text-text-body text-sm leading-relaxed mb-4">Due only once we secure a signed purchase agreement from a dealer on your behalf.</p>
                <ul className="space-y-1 text-sm text-text-body">
                  <li className="flex gap-2"><span className="text-accent">&#10003;</span> Purchase agreement secured</li>
                  <li className="flex gap-2"><span className="text-accent">&#10003;</span> All documents reviewed</li>
                  <li className="flex gap-2"><span className="text-accent">&#10003;</span> Close support provided</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/intake" className="inline-block bg-accent hover:bg-accent-light text-white font-bold px-10 py-4 rounded transition-colors">Start Free Intake</Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">Value Analysis</p>
            <h2 className="font-serif text-3xl font-bold text-text-dark">DIY vs. Vehavia</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 pr-6 text-sm font-semibold text-text-dark w-1/3"></th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-text-body w-1/3">Buying on Your Own</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-primary bg-cream rounded-t-lg w-1/3">With Vehavia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map(row => (
                  <tr key={row.label}>
                    <td className="py-4 pr-6 text-sm font-medium text-text-dark">{row.label}</td>
                    <td className="py-4 px-4 text-sm text-center text-text-body">{row.diy}</td>
                    <td className="py-4 px-4 text-sm text-center font-medium text-primary bg-cream">{row.vehavia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">Pricing Questions</p>
            <h2 className="font-serif text-3xl font-bold text-text-dark">Common questions about our fee.</h2>
          </div>
          <FAQAccordion items={pricingFAQs} />
        </div>
      </section>
      <section className="bg-text-dark py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">$800. That is it.</h2>
          <p className="text-gray-400 mb-8">No surprise charges. No add-ons. No percentage of the deal.</p>
          <Link href="/intake" className="inline-block bg-accent hover:bg-accent-light text-white font-bold px-10 py-4 rounded transition-colors">Start Free Intake</Link>
        </div>
      </section>
    </>
  )
}
