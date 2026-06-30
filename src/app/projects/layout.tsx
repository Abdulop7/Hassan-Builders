import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Residential & Commercial Construction in Multan, Pakistan | Hassan Builders',
  description: 'Explore the complete project portfolio of Hassan Builders, a leading construction company and architecture firm based in Multan, Pakistan. Discover our residential homes, commercial buildings, renovation projects, and turnkey construction solutions—built with quality craftsmanship, precision, and lasting value.',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
