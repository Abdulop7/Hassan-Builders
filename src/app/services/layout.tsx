import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Construction Services in Multan | Hassan Builders – Home Builders & Renovations Pakistan',
  description: 'Hassan Builders offers complete construction services in Multan, Punjab, Pakistan including home building, house design, renovations, grey structure, turnkey construction, and project management. Trusted construction company for residential and commercial projects.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
