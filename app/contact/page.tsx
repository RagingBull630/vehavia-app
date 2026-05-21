import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
export const metadata = { title: 'Contact - Vehavia' }
export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">Get In Touch</p>
          <h1 className="font-serif text-4xl font-bold text-white mb-4">We would love to hear from you.</h1>
          <p className="text-gray-300">Questions about the process, the fee, or whether we are the right fit. We respond within 24 hours.</p>
        </div>
      </section>
      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-xl font-bold text-text-dark mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-accent mb-1">Email</p>
                    <a href="mailto:hello@vehavia.com" className="text-text-dark hover:text-accent transition-colors font-medium">hello@vehavia.com</a>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-accent mb-1">Response Time</p>
                    <p className="text-text-body text-sm">We respond to all inquiries within 24 hours during business days.</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-accent mb-1">Coverage</p>
                    <p className="text-text-body text-sm">Nationwide, all 50 states.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-text-dark mb-2">Ready to get started?</h3>
                <p className="text-text-body text-sm mb-4">If you know you want to move forward, skip the contact form and begin your free intake directly.</p>
                <Link href="/intake" className="inline-block bg-accent hover:bg-accent-light text-white font-bold px-6 py-3 rounded text-sm transition-colors">Begin Free Intake</Link>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="font-serif text-xl font-bold text-text-dark mb-6">Send us a message.</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
