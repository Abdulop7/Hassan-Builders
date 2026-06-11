'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  const containerRef = useRef(null)

  // Hero Parallax
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const yText = useTransform(heroScroll, [0, 1], [0, 200])
  const opacityText = useTransform(heroScroll, [0, 1], [1, 0])
  const scaleImg = useTransform(heroScroll, [0, 1], [1, 1.1])

  // Stats
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: "-20%" })
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '6+', label: 'Years Experience' },
    { number: '40+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction' }
  ]

  // Vision
  const visionRef = useRef(null)
  const visionInView = useInView(visionRef, { once: true, margin: "-20%" })

  return (
    <div ref={containerRef} className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-[80vh] lg:h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: scaleImg }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="About Hero Background" 
            fill 
            className="object-cover opacity-60"
            priority
          />
        </motion.div>

        <motion.div 
          style={{ y: yText, opacity: opacityText }} 
          className="relative z-20 container mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#D4AF37]" />
              <span className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase">Our Legacy</span>
              <div className="h-px w-12 bg-[#D4AF37]" />
            </div>
            
            <h1 className="text-[12vw] sm:text-[10vw] leading-[0.8] font-bold tracking-tighter uppercase text-white mb-6">
              Who <span className="italic text-[#D4AF37]">We Are</span>
            </h1>
          </motion.div>
        </motion.div>
      </section>

      {/* --- STORY SECTION (Sticky Layout) --- */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-24 relative">
            
            {/* Sticky Left: Copy */}
            <div className="w-full lg:w-1/2">
              <div className="sticky top-40 flex flex-col gap-12">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] uppercase">
                  Traditional <br />
                  <span className="text-[#D4AF37] italic">Craftsmanship,</span><br />
                  Modern <br />
                  <span className="text-gray-500">Engineering.</span>
                </h2>
                
                <div className="space-y-8 font-mono text-sm text-gray-400 leading-relaxed max-w-md">
                  <p>
                    Founded in 2018, Hassan Builders emerged from a vision to transform
                    residential construction in Pakistan. What began as a family enterprise has grown
                    into a trusted name known for reliability and uncompromising quality.
                  </p>
                  <p>
                    Over the years, we have successfully delivered numerous residential projects
                    across major cities, each reflecting our commitment to superior construction
                    standards. Our portfolio includes contemporary family homes, luxury villas,
                    and premium apartment complexes—all built with meticulous attention to detail.
                  </p>
                  <p>
                    At Hassan Builders, we understand that a home is more than architecture—it's
                    where memories are created and lives unfold. This understanding guides our
                    approach, ensuring we deliver spaces that truly enrich lives.
                  </p>
                </div>
              </div>
            </div>

            {/* Scrolling Right: Imagery */}
            <div className="w-full lg:w-1/2 flex flex-col gap-12 lg:gap-32 mt-12 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] w-full overflow-hidden bg-gray-900"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1541888082006-2580df0a42c5?q=80&w=2000&auto=format&fit=crop" 
                  alt="Construction Team" 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-square w-full md:w-3/4 ml-auto overflow-hidden bg-gray-900"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
                  alt="Architecture Planning" 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section ref={statsRef} className="py-32 lg:py-48 border-y border-white/10 bg-[#09090B]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center text-center group"
              >
                <div className="text-7xl md:text-[6vw] font-bold tracking-tighter text-white group-hover:text-[#D4AF37] transition-colors duration-500 mb-4">
                  {stat.number}
                </div>
                <div className="font-mono text-sm tracking-widest uppercase text-gray-500 border-t border-white/10 pt-4 w-1/2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-24 relative bg-[#09090B]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#D4AF37]" />
                <span className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase">Our Location</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.1]">
                Visit Our <br/>
                <span className="text-[#D4AF37] italic">Headquarters</span>
              </h2>
              <p className="font-mono text-sm text-gray-400 leading-relaxed max-w-sm mt-4">
                Near Green View Housing Scheme, Multan Public School Road, Multan, Pakistan
              </p>
            </div>
            
            <div className="lg:w-2/3 w-full">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-[#111111] border border-white/5"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.6270350545674!2d71.5051804!3d30.247710599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b3521259695e1%3A0x87685f36724d434b!2sHassan%20Builders!5e0!3m2!1sen!2s!4v1781157538075!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(105%) hue-rotate(180deg)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(9,9,11,1)]" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION SECTION --- */}
      <section ref={visionRef} className="py-32 lg:py-48">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-32">
            
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={visionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start"
            >
              <div className="lg:w-1/4 flex items-center gap-4">
                <div className="h-px w-8 bg-[#D4AF37]" />
                <h3 className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase">Our Vision</h3>
              </div>
              <p className="lg:w-3/4 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-gray-400">
                To be Pakistan's most trusted construction company, recognized for <span className="text-white">transforming living spaces</span> through <span className="text-white italic">innovative design</span> and sustainable building practices.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={visionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start"
            >
              <div className="lg:w-1/4 flex items-center gap-4">
                <div className="h-px w-8 bg-[#D4AF37]" />
                <h3 className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase">Our Mission</h3>
              </div>
              <p className="lg:w-3/4 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-gray-400">
                To deliver exceptional residential services that <span className="text-white">exceed client expectations</span> through professional management, quality materials, and <span className="text-white italic">transparent communication.</span>
              </p>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}