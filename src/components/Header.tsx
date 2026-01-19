'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'CONTACT', href: '/contact' },
  ]

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Header animation
  const headerVariants = {
    hidden: { y: -80 },
    visible: {
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  }

  // Desktop panel (right) animation
  const desktopPanelVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 18 },
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: { duration: 0.25, ease: 'easeInOut' },
    },
  }

  // Mobile panel (top) animation
  const mobilePanelVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 18 },
    },
    exit: {
      y: '-100%',
      opacity: 0,
      transition: { duration: 0.25, ease: 'easeInOut' },
    },
  }

  const navItemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.06, type: 'spring', stiffness: 120, damping: 16 },
    }),
    hover: {
      x: 8,
      transition: { type: 'spring', stiffness: 400, damping: 15 },
    },
  }

  const mobileNavItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.06, type: 'spring', stiffness: 120, damping: 16 },
    }),
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const hamburgerVariants = {
    open: { rotate: 90, transition: { duration: 0.25 } },
    closed: { rotate: 0, transition: { duration: 0.25 } },
  }

  const line1Variants = {
    open: { rotate: 45, y: 7 },
    closed: { rotate: 0, y: 0 },
  }

  const line2Variants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  }

  const line3Variants = {
    open: { rotate: -45, y: -7 },
    closed: { rotate: 0, y: 0 },
  }

  return (
    <>
      {/* Main Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ${
          isScrolled ? 'shadow-lg py-3' : 'py-4'
        }`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10  overflow-hidden flex items-center justify-center">
                  <Image
                    src="/logo.webp"
                    alt="Hassan Builders Logo"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="hidden lg:block">
                  <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
                    HASSAN <span className="text-[#D4AF37]">BUILDERS</span>
                  </h1>
                  <p className="text-gray-500 text-xs tracking-[0.15em]">
                    YOUR DREAMS, OUR PRIORITIES
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Hamburger - Right (desktop & mobile) */}
            <motion.button
              className="text-gray-900 p-3"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              variants={hamburgerVariants}
              animate={isMenuOpen ? 'open' : 'closed'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle navigation menu"
            >
              {/* Bigger hamburger icon */}
              <div className="w-8 h-8 relative">
                <motion.span
                  className="absolute top-2 left-0 w-8 h-0.5 bg-black"
                  variants={line1Variants}
                  animate={isMenuOpen ? 'open' : 'closed'}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="absolute top-4 left-0 w-8 h-0.5 bg-black"
                  variants={line2Variants}
                  animate={isMenuOpen ? 'open' : 'closed'}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="absolute top-6 left-0 w-8 h-0.5 bg-black"
                  variants={line3Variants}
                  animate={isMenuOpen ? 'open' : 'closed'}
                  transition={{ duration: 0.25 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Desktop overlay + right panel */}
            <motion.div
              className="hidden lg:block fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.aside
              className="hidden lg:flex fixed top-0 right-0 h-screen w-80 bg-black border-l border-gray-800 z-40 flex-col"
              variants={desktopPanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Large font nav links */}
              <nav className="flex-1 flex flex-col justify-center px-6 space-y-4">
                {navItems.map((item, i) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== '/' && pathname?.startsWith(item.href))

                  return (
                    <motion.div
                      key={item.name}
                      custom={i}
                      variants={navItemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`block text-2xl font-medium tracking-wide py-2 ${
                          isActive
                            ? 'text-[#D4AF37]'
                            : 'text-gray-200 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>
            </motion.aside>

            {/* Mobile overlay + full-screen top panel */}
            <motion.div
              className="lg:hidden fixed inset-0 mt-4 z-40 bg-black/80 backdrop-blur-sm"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="absolute inset-0 bg-black"
                variants={mobilePanelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Top bar with close in same place as hamburger */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
                  {/* Left: logo small */}
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4AF37] flex items-center justify-center">
                      <Image
                        src="/logo.webp"
                        alt="Hassan Builders Logo"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-white text-sm font-semibold tracking-tight">
                      HASSAN <span className="text-[#D4AF37]">BUILDERS</span>
                    </span>
                  </div>

                  {/* Right: close icon */}
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 p-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Centered large nav links */}
                <div className="flex-1 flex flex-col items-center justify-center px-6">
                  <nav className="w-full space-y-4">
                    {navItems.map((item, i) => {
                      const isActive =
                        pathname === item.href ||
                        (item.href !== '/' && pathname?.startsWith(item.href))

                      return (
                        <motion.div
                          key={item.name}
                          custom={i}
                          variants={mobileNavItemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            aria-current={isActive ? 'page' : undefined}
                            className={`block text-center text-2xl font-medium tracking-wide py-2 ${
                              isActive
                                ? 'text-[#D4AF37]'
                                : 'text-gray-200 hover:text-white'
                            }`}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      )
                    })}
                  </nav>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  )
}