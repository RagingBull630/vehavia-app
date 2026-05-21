import { NextRequest, NextResponse } from 'next/server'
export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    console.log('Intake submission received:', data.email)
    return NextResponse.json({ success: true, message: 'Intake received' })
  } catch (err) {
    console.error('Intake error:', err)
    return NextResponse.json({ success: false, error: 'Submission failed' }, { status: 500 })
  }
}
