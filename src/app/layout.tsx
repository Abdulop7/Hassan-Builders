import type { Metadata } from 'next'
import { Space_Grotesk, Chivo_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import Loader from '@/components/Loader'
import { Analytics } from "@vercel/analytics/next"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const chivoMono = Chivo_Mono({
  subsets: ['latin'],
  variable: '--font-chivo-mono',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Hassan Builders',
    default: 'Hassan Builders – Construction Company in Multan | Home Builders & House Designers',
  },
  description: 'Looking for home builders or house designers near you? Hassan Builders is a leading construction company in Multan, Punjab, Pakistan, offering residential construction, renovations, architectural design, turnkey building solutions, and project management services.',
  keywords: ['consolidated construction company', 'home builders', 'renovations', 'house designers near me', 'construction company in multan'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${chivoMono.variable}`}>
      <body className="bg-[#09090B] text-[#FAFAFA] font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
        <Loader />
        <Analytics />
        <SmoothScroll>
          <CustomCursor />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  )
}