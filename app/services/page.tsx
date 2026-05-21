import Link from 'next/link'
import { Search, MessageSquare, DollarSign, ArrowLeftRight, Truck, FileCheck } from 'lucide-react'
export const metadata = { title: 'Services - Vehavia' }
const services = [
  { id:'search', icon:Search, title:'Vehicle Search & Sourcing', paras:['Finding the right vehicle at the right price requires access to real-time dealer inventory data, regional market intelligence, and the ability to quickly identify which dealers are motivated to move units.','Vehavia searches franchised dealer inventories nationwide, cross-referencing availability against your specific requirements including year, trim, color, options, and mileage.','When your target is in short supply, we extend our search to locate incoming inventory, dealer trades, and pipeline units.'], includes:['Nationwide inventory search across all franchised dealers','New, certified pre-owned, and pre-owned vehicle sourcing','VIN-level verification of options and history','Regional market pricing analysis','Incoming and pipeline unit tracking','Dealer motivation and inventory pressure assessment'] },
  { id:'negotiation', icon:MessageSquare, title:'Dealer Negotiation', paras:['Dealer negotiation is a skill developed over years of working inside the industry. Dealers train their sales teams on specific psychological techniques and information asymmetries designed to extract maximum margin.','Our concierges have 30 years of experience on both sides of the desk. We know how dealers calculate their floor, where they have true flexibility, and how to structure the conversation to maximize your outcome.','We engage the dealer directly on your behalf, removing the emotional pressure of the showroom floor. You receive a full written summary of the negotiation before you make any commitment.'], includes:['Direct dealer-to-concierge negotiation','Out-the-door pricing target development','Doc fee, dealer add-on, and accessory negotiation','Multi-dealer competitive offer strategy','Complete offer summary and recommendation','Final review before any commitment is made'] },
  { id:'finance', icon:DollarSign, title:'Finance Review & Audit', paras:['The finance office is where dealers make a significant portion of their profit. Finance managers are trained to present products quickly, minimize scrutiny, and capitalize on buyer fatigue.','Vehavia reviews your financing terms before you sign. We identify rate markups above the buy rate, unnecessary add-ons, and unfavorable warranty terms.','We do not arrange financing directly. Our role is to ensure you understand every element of your deal.'], includes:['Finance rate markup identification','F&I product audit (GAP, extended warranty, tire and wheel, etc.)','Mandatory vs. optional product clarification','Payment-focused vs. price-focused presentation analysis','Aftermarket product value assessment','Complete financing summary in plain language'] },
  { id:'trade-in', icon:ArrowLeftRight, title:'Trade-In Strategy', paras:['Trade-in negotiation is one of the most misunderstood elements of the car-buying process. Many buyers negotiate their purchase price effectively, then lose the same money on their trade-in.','Vehavia develops a trade-in strategy before any dealer engagement begins. We research your vehicle values, identify dealers most likely to offer strong trade-in allowances, and position the trade-in negotiation strategically.','In some cases we will recommend selling your vehicle independently before purchasing. We provide an honest assessment of both paths.'], includes:['Wholesale and retail value analysis','Trade-in vs. private sale comparison','Dealer appraisal process coaching','Strategic sequencing of trade-in vs. purchase negotiation','Reconditioning cost assessment','Final trade-in offer evaluation and recommendation'] },
  { id:'transport', icon:Truck, title:'Transport Coordination', paras:['When the right vehicle is in a different state, transport becomes a critical part of the transaction. Coordinating enclosed or open transport and protecting yourself in the event of damage can be complicated.','Vehavia coordinates transport through vetted carrier networks when your vehicle is being sourced outside your region. We brief you on what to inspect at delivery and how to document the vehicle condition.','Transport costs and timelines are communicated clearly before your purchase agreement is signed. We do not mark up transport fees.'], includes:['Enclosed and open carrier coordination','Transport cost and timeline communication','Pre-transport condition documentation guidance','Delivery inspection checklist','Carrier vetting and selection','Post-delivery issue documentation support'] },
  { id:'close', icon:FileCheck, title:'Deal Review & Close Support', paras:['The final documents of a vehicle purchase are dense and frequently contain items that were added without being clearly discussed. Purchase agreements, financing contracts, and warranty documents all contain terms with significant financial impact.','Before you sign anything, Vehavia reviews your complete document package. We verify that agreed-upon price, trade-in allowance, financing terms, and included products match what was negotiated.','Our close support is not a substitute for legal counsel. However, having an experienced advocate review your documents before signature is one of the highest-value steps in the entire car-buying process.'], includes:['Purchase agreement line-item verification','Financing contract term review','Add-on product verification against agreed terms','Discrepancy identification and resolution','Title and registration documentation review','Post-signing follow-up and issue escalation support'] },
]
export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">What We Do</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Six services. One fee. Complete protection.</h1>
          <p className="text-gray-300 text-lg mb-8">Every Vehavia engagement covers the full transaction from sourcing your vehicle to signing your final documents.</p>
          <Link href="/intake" className="inline-block bg-accent hover:bg-accent-light text-white font-bold px-8 py-4 rounded transition-colors">Start Free Intake</Link>
        </div>
      </section>
      {services.map((svc, i) => {
        const Icon = svc.icon
        return (
          <section key={svc.id} id={svc.id} className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}>
            <div className="max-w-5xl mx-auto px-6">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark pt-2">{svc.title}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-4">
                  {svc.paras.map((p, j) => <p key={j} className="text-text-body leading-relaxed">{p}</p>)}
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark text-sm uppercase tracking-wide mb-4">What is included</h3>
                  <ul className="space-y-2">
                    {svc.includes.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-body">
                        <span className="text-accent mt-0.5 flex-shrink-0">&#10003;</span><span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )
      })}
      <section className="bg-text-dark py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">All six services. One $800 fee.</h2>
          <p className="text-gray-400 mb-8">No itemized billing. No surprise charges. Everything above is included in every engagement.</p>
          <Link href="/intake" className="inline-block bg-accent hover:bg-accent-light text-white font-bold px-10 py-4 rounded transition-colors">Start Free Intake</Link>
        </div>
      </section>
    </>
  )
}
