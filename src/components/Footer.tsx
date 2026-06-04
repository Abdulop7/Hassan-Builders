'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

export default function Footer() {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-10%" })

  return (
    <footer ref={footerRef} className="bg-[#09090B] text-[#FAFAFA] pt-24 pb-8 overflow-hidden relative border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col h-full">
        
        {/* Top Section - Links & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-2 flex flex-col gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase">Headquarters</span>
            </div>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 max-w-sm">
              Near Green View Housing Scheme, Multan Public School Road, <br />
              Multan, 60000, Pakistan
            </p>
            <div className="flex flex-col gap-2 font-mono text-sm tracking-widest uppercase mt-4">
              <a href="tel:+923346000900" className="text-gray-500 hover:text-[#D4AF37] transition-colors duration-300">+92 334 6000900</a>
              <a href="mailto:ranahassan6000@icloud.com" className="text-gray-500 hover:text-[#D4AF37] transition-colors duration-300">ranahassan6000@icloud.com</a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 font-mono text-sm uppercase tracking-widest"
          >
            <span className="text-gray-600 mb-2 border-b border-white/10 pb-4 inline-block w-full">Sitemap</span>
            <Link href="/" className="hover:text-[#D4AF37] hover:translate-x-2 transition-transform duration-300 transform inline-block w-max">Home</Link>
            <Link href="/about" className="hover:text-[#D4AF37] hover:translate-x-2 transition-transform duration-300 transform inline-block w-max">About Us</Link>
            <Link href="/services" className="hover:text-[#D4AF37] hover:translate-x-2 transition-transform duration-300 transform inline-block w-max">Services</Link>
            <Link href="/projects" className="hover:text-[#D4AF37] hover:translate-x-2 transition-transform duration-300 transform inline-block w-max">Projects</Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 font-mono text-sm uppercase tracking-widest"
          >
            <span className="text-gray-600 mb-2 border-b border-white/10 pb-4 inline-block w-full">Socials</span>
            <a href="https://www.facebook.com/profile.php?id=100085025091850" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] hover:translate-x-2 transition-transform duration-300 transform inline-block w-max">Facebook</a>
            <a href="#" className="hover:text-[#D4AF37] hover:translate-x-2 transition-transform duration-300 transform inline-block w-max">Instagram</a>
            <a href="#" className="hover:text-[#D4AF37] hover:translate-x-2 transition-transform duration-300 transform inline-block w-max">LinkedIn</a>
          </motion.div>
        </div>

        {/* Massive Branding Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center items-center mt-auto pb-12 overflow-hidden border-b border-white/10"
        >
          <h2 className="text-[13.5vw] leading-[0.8] font-bold tracking-tighter uppercase text-center w-full text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 select-none pointer-events-none">
            HASSAN BUILDERS
          </h2>
        </motion.div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 font-mono text-xs text-gray-600 tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Hassan Builders</p>
          <p className="mt-4 md:mt-0 text-[#D4AF37]">Your Dreams, Our Priorities</p>
        </div>
      </div>
    </footer>
  )
}