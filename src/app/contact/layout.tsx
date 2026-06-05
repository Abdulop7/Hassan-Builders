import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Hassan Builders | Construction Company in Multan, Punjab, Pakistan',
  description: 'Get in touch with Hassan Builders, a trusted construction company in Multan, Punjab, Pakistan. Contact us for home building, house design, renovations, and turnkey construction services from expert home builders and house designers.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
