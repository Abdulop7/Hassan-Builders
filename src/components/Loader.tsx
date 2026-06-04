'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden'

    // Simulate loading progress
    const duration = 2000 // 2 seconds loader
    const intervalTime = 30
    const steps = duration / intervalTime
    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      // Add slight easing to the number counter by calculating a curve
      const rawProgress = currentStep / steps
      const easeOutQuart = 1 - Math.pow(1 - rawProgress, 4)
      const newProgress = Math.min(Math.round(easeOutQuart * 100), 100)
      
      setProgress(newProgress)

      if (currentStep >= steps) {
        clearInterval(interval)
        setTimeout(() => {
          setIsLoading(false)
          document.body.style.overflow = ''
        }, 400) // Brief pause at 100%
      }
    }, intervalTime)

    return () => {
      clearInterval(interval)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#09090B] flex flex-col justify-end p-6 lg:p-12 text-[#FAFAFA]"
        >
          <div className="flex justify-between items-end overflow-hidden">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs sm:text-sm tracking-widest uppercase text-gray-500 pb-2"
            >
              Hassan Builders <br />
              <span className="text-[#D4AF37]">Multan, PK</span>
            </motion.div>
            
            <div className="text-6xl sm:text-[12vw] font-bold tracking-tighter leading-none relative overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {progress}%
              </motion.div>
            </div>
          </div>
          
          <div className="w-full h-px bg-white/10 mt-6 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#D4AF37]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
