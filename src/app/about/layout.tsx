import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Hassan Builders | Construction Company in Multan, Punjab, Pakistan',
  description: 'Learn about Hassan Builders, a trusted construction company in Multan, Punjab, Pakistan. We specialize in home building, house design, renovations, and complete construction solutions, delivering quality craftsmanship and reliable project execution for residential and commercial projects.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
