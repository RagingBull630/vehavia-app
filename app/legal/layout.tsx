import Link from 'next/link'
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-primary py-10 text-center">
        <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-2">Legal</p>
        <p className="text-gray-400 text-sm">Last Updated: May 20, 2026</p>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-slate max-w-none">{children}</div>
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-4">View all legal documents:</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[['Terms of Service','/legal/terms'],['Privacy Policy','/legal/privacy'],['Arbitration Agreement','/legal/arbitration'],['Limitation of Liability','/legal/liability'],['Dealer Disclaimer','/legal/dealer-disclaimer'],['Vehicle Condition','/legal/vehicle-condition'],['Shipping Disclaimer','/legal/shipping'],['No Financial Advice','/legal/financial-advice'],['Inspection Responsibility','/legal/inspection'],['Fee Agreement','/legal/fee-agreement']].map(([label,href])=>(
              <Link key={href} href={href} className="text-accent hover:underline">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
