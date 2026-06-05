import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Projects | Hassan Builders – Construction Company in Multan, Punjab, Pakistan',
  description: 'Explore completed and ongoing projects by Hassan Builders in Multan, Punjab, Pakistan. We specialize in home construction, house design, renovations, and turnkey building projects as a trusted construction company and home builders in Pakistan.',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
