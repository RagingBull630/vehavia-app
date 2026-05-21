import Image from 'next/image'
import Link from 'next/link'
import { Search, MessageSquare, DollarSign, ArrowLeftRight, Truck, FileCheck } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import LeadMagnetForm from '@/components/LeadMagnetForm'

const homeFAQs = [
  { q: 'How does the $800 fee work?', a: 'Two stages: $200 at contract signature to start your search, and $600 once we secure a signed purchase agreement from a dealer on your behalf.' },
  { q: 'Do I pay before you find my car?', a: 'The $200 startup fee is paid after you complete our intake process and sign your service agreement. Your search begins immediately after payment.' },
  { q: "What if you can't find my exact vehicle?", a: "We'll work with you to explore acceptable alternatives. If we're unable to locate a vehicle that meets your requirements, we'll discuss your options before any completion fee is due." },
  { q: 'Can you help with financing?', a: "We review your financing terms and identify markups, inflated rates, and F&I add-ons. We don't arrange financing directly, but we ensure you understand every line of your deal." },
  { q: 'Do you work with any specific dealers?', a: "No. We have zero dealer affiliations, which means we negotiate purely in your interest. We work with any franchised or independent dealer in the U.S." },
  { q: 'How long does the process take?', a: 'Most clients are in a signed purchase agreement within 7-14 days of starting. Timeline depends on vehicle availability and how flexible you are on spec.' },
  { q: 'What types of vehicles do you work with?', a: 'New and pre-owned cars, trucks, and SUVs from any brand. We specialize in vehicles where negotiation leverage is highest, typically $25,000+.' },
]

const services = [
  { icon: Search, title: 'Vehicle Search & Sourcing', desc: 'We locate your target vehicle from dealer inventories nationwide.' },
  { icon: MessageSquare, title: 'Dealer Negotiation', desc: "We negotiate price, trade-in, and terms directly with the dealer so you never face the table alone." },
  { icon: DollarSign, title: 'Finance Review', desc: "We audit your financing terms, catch hidden markups, and flag every F&I add-on you don't need." },
  { icon: ArrowLeftRight, title: 'Trade-In Strategy', desc: 'We position your trade-in to maximize value and prevent it from being used against your purchase price.' },
  { icon: Truck, title: 'Transport Coordination', desc: 'If your vehicle is out of state, we coordinate reliable transport to your door.' },
  { icon: FileCheck, title: 'Deal Review & Close', desc: 'We review every document before you sign, including purchase agreement, financing, and warranties.' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: 'calc(100vh - 72px)' }} className="grid md:grid-cols-[52fr_48fr]">
        <div className="bg-primary flex flex-col justify-center px-8 md:px-16 py-20">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6">Nationwide Car-Buying Concierge</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            You found the car.<br />
            <em className="text-accent not-italic">Now comes the part<br />nobody talks about.</em>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
            The negotiation. The financing traps. The dealer games. We handle all of it for a flat $800 fee that pays for itself ten times over.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/intake" className="bg-accent hover:bg-accent-light text-white font-bold px-8 py-4 rounded text-center transition-colors">Start Free Intake</Link>
            <Link href="/#lead-magnet" className="border border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded text-center transition-colors">Get Free Buyer&apos;s Guide</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-primary-mid pt-8">
            {[
              { label: '30 Years', sub: 'Experience' },
              { label: '$800', sub: 'Flat Fee' },
              { label: 'Nationwide', sub: 'Coverage' },
              { label: '0', sub: 'Dealer Affiliations' },
            ].map((item) => (
              <div key={item.sub} className="text-center">
                <div className="text-accent font-serif text-xl font-bold">{item.label}</div>
                <div className="text-gray-400 text-xs mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=85"
            alt="Luxury vehicle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
        </div>
      </section>

      {/* PAIN STATS */}
      <section className="bg-primary py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">The Problem</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-12">
            The average buyer overpays by $3,000-$8,000.<br />It does not have to be you.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '$4,200', label: 'Average Overpayment', sub: 'Per vehicle purchase in the U.S.' },
              { stat: '78%', label: 'Buyer Regret', sub: 'Of buyers report post-purchase remorse' },
              { stat: '$800', label: 'Flat Concierge Fee', sub: 'Total. No hidden charges. Ever.' },
            ].map((item) => (
              <div key={item.stat} className="bg-primary-mid rounded-lg p-8">
                <div className="font-serif text-4xl font-bold text-accent mb-2">{item.stat}</div>
                <div className="text-white font-semibold mb-1">{item.label}</div>
                <div className="text-gray-400 text-sm">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">What We Do</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">Concierge-level expertise, applied to your specific deal.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <div key={svc.title} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-text-dark mb-2">{svc.title}</h3>
                  <p className="text-text-body text-sm leading-relaxed">{svc.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="text-accent font-bold hover:underline">View all services</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-text-dark py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">The Process</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Four steps. Zero dealer games.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Intake & Qualify', desc: 'Complete our free intake form. We confirm your requirements and qualify you for the concierge program.' },
              { num: '02', title: 'Search & Source', desc: 'We search dealer inventories nationwide and identify vehicles matching your exact specifications.' },
              { num: '03', title: 'Negotiate & Secure', desc: 'We engage the dealer directly, negotiate price and terms, and secure the best available deal.' },
              { num: '04', title: 'Close & Deliver', desc: 'We review every document before you sign and coordinate delivery or transport to your door.' },
            ].map((step) => (
              <div key={step.num}>
                <div className="font-serif text-5xl font-bold text-accent/30 mb-3">{step.num}</div>
                <h3 className="font-serif text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SNAPSHOT */}
      <section className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">Transparent Pricing</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-10">One flat fee. Two simple stages.</h2>
          <div className="bg-white rounded-2xl shadow-lg p-10 mb-8">
            <div className="font-serif text-6xl font-bold text-primary mb-2">$800</div>
            <div className="text-text-body mb-8">Total concierge fee. New or pre-owned, any brand, any state.</div>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="text-accent font-bold text-lg mb-1">Step 1 - $200</div>
                <div className="text-sm font-semibold text-text-dark mb-2">At contract signature</div>
                <p className="text-text-body text-sm">Paid after you sign your service agreement. Your search begins immediately.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="text-accent font-bold text-lg mb-1">Step 2 - $600</div>
                <div className="text-sm font-semibold text-text-dark mb-2">At purchase agreement</div>
                <p className="text-text-body text-sm">Only due once we secure a signed purchase agreement on your behalf.</p>
              </div>
            </div>
          </div>
          <Link href="/intake" className="inline-block bg-accent hover:bg-accent-light text-white font-bold px-10 py-4 rounded transition-colors">Start Free Intake</Link>
          <p className="text-gray-500 text-sm mt-4"><Link href="/pricing" className="underline hover:text-text-dark">See full pricing details</Link></p>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section id="lead-magnet" className="bg-primary py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">Free Resource</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Before you visit a single dealer, read this.</h2>
          <p className="text-gray-300 text-lg mb-2"><strong className="text-white">The 7 Dealer Tricks That Cost Buyers $3,000-$8,000</strong></p>
          <p className="text-gray-400 mb-10">A no-fluff breakdown of exactly how dealers extract money from unprepared buyers.</p>
          <LeadMagnetForm />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">Client Results</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">What clients say.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-body text-sm leading-relaxed italic mb-6">
                  &ldquo;Client testimonial coming soon. We are currently completing our first engagements and will share real results here shortly.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div>
                    <div className="font-semibold text-text-dark text-sm">Verified Client</div>
                    <div className="text-gray-400 text-xs">Vehavia Concierge Program</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">Common Questions</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">Frequently asked questions.</h2>
          </div>
          <FAQAccordion items={homeFAQs} />
          <div className="text-center mt-10">
            <Link href="/faq" className="text-accent font-bold hover:underline">View all FAQs</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-text-dark py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Ready to stop overpaying?</h2>
          <p className="text-gray-400 text-lg mb-10">Start your free intake today. No commitment until you sign.</p>
          <Link href="/intake" className="inline-block bg-accent hover:bg-accent-light text-white font-bold px-12 py-5 rounded text-lg transition-colors">Start Free Intake</Link>
        </div>
      </section>
    </>
  )
}
