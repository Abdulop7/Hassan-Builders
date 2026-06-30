import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Construction, Architecture & Home Building Solutions in Multan, Pakistan | Hassan Builders',
  description:
    'Get in touch with Hassan Builders, your trusted construction company and architecture firm based in Multan, Pakistan. Whether you’re planning a new home, commercial building, renovation, or turnkey construction project, our experienced team is ready to bring your vision to life.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
