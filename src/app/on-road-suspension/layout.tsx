import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Immediate Roadside Suspension (IRS) - Traffic Ticket Guru',
  description: 'Facing an Immediate Roadside Suspension (IRS) charge? Get expert legal representation to protect your license, reduce fines, and avoid long-term consequences.',
}

export default function OnRoadSuspensionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

