import Link from 'next/link'
export default function IntakeSuccessPage() {
  return (
    <div className="min-h-screen bg-cream py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-serif text-3xl font-bold text-text-dark mb-4">Payment confirmed.</h1>
        <p className="text-text-body mb-10">Your $200 startup fee has been received. Your search begins now.</p>
        <Link href="/" className="bg-accent hover:bg-accent-light text-white font-bold px-8 py-4 rounded transition-colors">Return to Homepage</Link>
      </div>
    </div>
  )
}
