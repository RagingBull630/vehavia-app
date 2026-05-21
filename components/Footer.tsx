import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="font-serif text-xl font-bold text-white tracking-wide mb-3">
              VEH<span className="text-accent">A</span>VIA
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Expert advocacy. Flat fee. Zero dealer ties.</p>
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#search" className="hover:text-white transition-colors">Vehicle Search</Link></li>
              <li><Link href="/services#negotiation" className="hover:text-white transition-colors">Dealer Negotiation</Link></li>
              <li><Link href="/services#finance" className="hover:text-white transition-colors">Finance Review</Link></li>
              <li><Link href="/services#trade-in" className="hover:text-white transition-colors">Trade-In Strategy</Link></li>
              <li><Link href="/services#transport" className="hover:text-white transition-colors">Transport Coordination</Link></li>
              <li><Link href="/services#close" className="hover:text-white transition-colors">Deal Review and Close</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/intake" className="hover:text-white transition-colors">Start Intake</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/arbitration" className="hover:text-white transition-colors">Arbitration Agreement</Link></li>
              <li><Link href="/legal/liability" className="hover:text-white transition-colors">Limitation of Liability</Link></li>
              <li><Link href="/legal/dealer-disclaimer" className="hover:text-white transition-colors">Dealer Disclaimer</Link></li>
              <li><Link href="/legal/vehicle-condition" className="hover:text-white transition-colors">Vehicle Condition</Link></li>
              <li><Link href="/legal/shipping" className="hover:text-white transition-colors">Shipping Disclaimer</Link></li>
              <li><Link href="/legal/financial-advice" className="hover:text-white transition-colors">No Financial Advice</Link></li>
              <li><Link href="/legal/inspection" className="hover:text-white transition-colors">Inspection Responsibility</Link></li>
              <li><Link href="/legal/fee-agreement" className="hover:text-white transition-colors">Fee Agreement</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@vehavia.com" className="hover:text-white transition-colors">hello@vehavia.com</a></li>
              <li className="text-gray-500">Response within 24 hours</li>
              <li className="pt-2">
                <Link href="/intake" className="inline-block bg-accent hover:bg-accent-light text-white text-sm font-bold px-4 py-2 rounded transition-colors">
                  Start Free Intake
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mb-6">
          <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
            Vehavia is an independent concierge service and is not affiliated with, endorsed by, or a licensed dealer. We do not sell vehicles. All savings estimates are illustrative and based on industry data; individual results will vary. See our{' '}
            <Link href="/legal/dealer-disclaimer" className="underline hover:text-gray-300 transition-colors">full legal disclaimers</Link>{' '}
            for complete information.
          </p>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="text-xs text-gray-600">2026 Vehavia. All rights reserved.</p>
          <p className="text-xs text-gray-600">Nationwide Car-Buying Concierge Service</p>
        </div>
      </div>
    </footer>
  )
}
