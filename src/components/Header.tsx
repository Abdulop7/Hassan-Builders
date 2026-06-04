'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'CONTACT', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const headerVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  }

  const menuVariants: Variants = {
    hidden: { clipPath: 'circle(0% at 100% 0)' },
    visible: { 
      clipPath: 'circle(150% at 100% 0)',
      transition: { type: 'spring', stiffness: 50, damping: 20 }
    },
    exit: { 
      clipPath: 'circle(0% at 100% 0)',
      transition: { type: 'spring', stiffness: 50, damping: 20 }
    }
  }

  const linkVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.1 + (i * 0.1), type: 'spring', stiffness: 100, damping: 20 }
    })
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled ? 'bg-[#09090B]/90 backdrop-blur-md  border-white/10' : 'bg-transparent'
        }`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 py-6 lg:px-12 flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center gap-3 group">
            <div className="w-10 h-10 relative overflow-hidden rounded-full">
              <Image src="/logo.webp" alt="Hassan Builders" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-widest text-lg leading-none group-hover:text-[#D4AF37] transition-colors">
                HASSAN
              </span>
              <span className="text-[#D4AF37] text-xs font-mono tracking-widest uppercase">
                Builders
              </span>
            </div>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 flex items-center gap-4 text-sm font-mono tracking-widest hover:text-[#D4AF37] transition-colors"
          >
            <span className="hidden sm:block">{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
            <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
              <motion.span 
                animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} 
                className="w-full h-0.5 bg-current origin-center" 
              />
              <motion.span 
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} 
                className="w-full h-0.5 bg-current origin-center" 
              />
              <motion.span 
                animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} 
                className="w-full h-0.5 bg-current origin-center" 
              />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-[#09090B] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <div key={item.name} className="overflow-hidden">
                  <motion.div custom={i} variants={linkVariants} initial="hidden" animate="visible" exit="hidden">
                    <Link
                      href={item.href}
                      className="text-5xl md:text-7xl font-bold tracking-tighter hover:text-[#D4AF37] hover:italic transition-all duration-300 relative inline-block group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#D4AF37] group-hover:w-full transition-all duration-500"></span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 flex gap-8 font-mono text-sm tracking-widest text-gray-500"
            >
              <a href="https://www.facebook.com/profile.php?id=100085025091850" className="hover:text-[#D4AF37]">FACEBOOK</a>
              <a href="#" className="hover:text-[#D4AF37]">INSTAGRAM</a>
              <a href="#" className="hover:text-[#D4AF37]">LINKEDIN</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}