import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'
export const metadata = { title: 'FAQ - Vehavia' }
const categories = [
  { title:'About the Service', items:[
    { q:'What exactly does Vehavia do?', a:'Vehavia is a nationwide car-buying concierge. We search for your target vehicle, negotiate price and terms directly with the dealer, audit your financing, manage your trade-in strategy, coordinate transport, and review all documents before you sign. All for a flat $800 fee.' },
    { q:'Is Vehavia affiliated with any dealers?', a:'No. Vehavia is completely independent. We have no dealer affiliations, no referral arrangements, and receive no compensation from any dealer. Our fee is paid entirely by you.' },
    { q:'Do you sell vehicles?', a:'No. Vehavia is a concierge service, not a dealer. We do not hold inventory, take title to vehicles, or sell vehicles of any kind.' },
    { q:'Do you work nationwide?', a:'Yes. We work with clients in all 50 states and can source vehicles from dealers anywhere in the country.' },
    { q:'What types of clients do you work with?', a:'We work with individual buyers purchasing personal vehicles, new or pre-owned, any brand, any price point. We specialize in transactions typically priced at $25,000 and above.' },
  ]},
  { title:'Pricing & Payment', items:[
    { q:'How does the $800 fee work?', a:'The fee is paid in two stages. The first $200 is due after you sign your service agreement. The second $600 is due only once we have secured a signed purchase agreement from a dealer on your behalf.' },
    { q:'Is the fee refundable?', a:'The $200 startup fee is non-refundable once your search has commenced. The $600 completion fee is only due upon successful completion.' },
    { q:'Do you charge a percentage of the vehicle price?', a:'No. Our fee is a flat $800 regardless of the vehicle price, location, or complexity.' },
    { q:'Are there any other fees?', a:'No fees beyond the $800 are charged by Vehavia. You pay transport costs directly to the carrier. We do not mark those up.' },
    { q:'How do I pay?', a:'Payment is processed securely via Stripe. You will receive a payment link by email after signing your service agreement.' },
  ]},
  { title:'The Process', items:[
    { q:'How long does the process take?', a:'Most clients are in a signed purchase agreement within 7-14 days. Timeline depends primarily on vehicle availability and how flexible you are on specifications.' },
    { q:'What happens after I complete the intake form?', a:"You will receive a service agreement via DocuSign. Once signed and your $200 deposit is received, a concierge will contact you within 24 hours to confirm your requirements and begin the search." },
    { q:'Do I need to visit a dealership?', a:'In most cases, minimally. We handle dealer negotiations directly. For the final signing you will typically need to be present.' },
    { q:"What if I don't like the deal you bring me?", a:'You are never obligated to accept any deal we present. The $600 completion fee is only due if you accept a purchase agreement we have secured.' },
  ]},
  { title:'Vehicle Search', items:[
    { q:"What if you can't find my exact vehicle?", a:"If your exact configuration is genuinely unavailable in the market, we will communicate that clearly and work with you on acceptable alternatives." },
    { q:'Can you find vehicles that are not listed publicly?', a:'In some cases, yes. We have access to dealer inventory systems, can track incoming pipeline units, and can identify vehicles available for dealer trades but not yet listed publicly.' },
    { q:'Do you work with pre-owned vehicles from private sellers?', a:'Our service is focused on franchised and established independent dealers. We do not currently source from private party sellers.' },
  ]},
  { title:'Legal & Disclaimers', items:[
    { q:'Is Vehavia a licensed dealer?', a:'No. Vehavia is not a licensed dealer, broker, or financial institution. We are an independent consulting and concierge service.' },
    { q:'Do you provide financial or legal advice?', a:'No. Nothing Vehavia provides constitutes financial, legal, or investment advice. Our finance review service is educational in nature.' },
    { q:'Are the savings estimates guaranteed?', a:'No. All savings estimates referenced in our marketing are based on industry averages and are illustrative. Individual results will vary.' },
  ]},
]
export default function FAQPage() {
  return (
    <>
      <section className="bg-primary py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">Help Center</p>
          <h1 className="font-serif text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300">Everything you need to know about how Vehavia works.</p>
        </div>
      </section>
      <section className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-14">
          {categories.map(cat => (
            <div key={cat.title}>
              <h2 className="font-serif text-2xl font-bold text-text-dark mb-6 pb-3 border-b border-gray-200">{cat.title}</h2>
              <FAQAccordion items={cat.items} />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-text-dark py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-gray-400 mb-8">Email us at hello@vehavia.com. We respond within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">Contact Us</Link>
            <Link href="/intake" className="bg-accent hover:bg-accent-light text-white font-bold px-8 py-3 rounded transition-colors">Start Free Intake</Link>
          </div>
        </div>
      </section>
    </>
  )
}
