import IntakeFunnel from '@/components/IntakeFunnel'
export default function IntakeStepPage() {
  return (
    <div className="min-h-screen bg-cream py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="font-serif text-3xl font-bold text-primary mb-2">Start Your Free Intake</h1>
        <p className="text-text-body">Takes about 3 minutes. No commitment until you sign.</p>
      </div>
      <IntakeFunnel />
    </div>
  )
}
