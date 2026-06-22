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
    { number: '15+', label: 'Years Experience' },
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
            src="/about-hero.webp" 
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
                    into a highly trusted <strong className="text-white">consolidated construction company</strong>,
                    renowned for reliability, uncompromising quality, and luxury <strong className="text-white">renovations</strong>.
                  </p>
                  <p>
                    As leading <strong className="text-white">home builders</strong>, we have successfully delivered numerous 
                    premium residential projects. If you are searching for the best <strong className="text-white">house designers near me</strong>, 
                    our portfolio of contemporary family homes and luxury villas reflects our unmatched commitment to superior construction standards.
                  </p>
                  <p>
                    Proudly standing as the premier <strong className="text-white">construction company in Multan</strong>, 
                    we understand that a home is more than architecture—it's where memories are created and lives unfold. 
                    This understanding guides our approach, ensuring we deliver spaces that truly enrich lives.
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
                  src="/ceo.webp" 
                  alt="Construction Team" 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- VISION & MISSION SECTION (PRO-MAX STYLE) --- */}
      <section ref={visionRef} className="py-32 relative bg-[#09090B] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        
        {/* Massive Background Text Watermarks */}
        <motion.div 
          style={{ y: useTransform(heroScroll, [0, 1], [0, -100]) }}
          className="absolute top-20 left-0 text-[20vw] font-bold text-white/[0.02] leading-none whitespace-nowrap pointer-events-none"
        >
          VISION VISION
        </motion.div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={visionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group p-12 bg-white/[0.02] border border-white/5 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 bg-[#D4AF37]" />
                <h3 className="font-mono text-sm tracking-widest text-white uppercase">Our Vision</h3>
              </div>
              <p className="text-2xl md:text-4xl font-bold tracking-tight leading-tight text-gray-400">
                To be Pakistan's most trusted construction company, recognized for <span className="text-white">transforming living spaces</span> through <span className="text-[#D4AF37] italic">innovative design</span> and sustainable building practices.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={visionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group p-12 bg-white/[0.02] border border-white/5 backdrop-blur-sm overflow-hidden mt-0 lg:mt-24"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 bg-[#D4AF37]" />
                <h3 className="font-mono text-sm tracking-widest text-white uppercase">Our Mission</h3>
              </div>
              <p className="text-2xl md:text-4xl font-bold tracking-tight leading-tight text-gray-400">
                To deliver exceptional residential services that <span className="text-white">exceed client expectations</span> through professional management, quality materials, and <span className="text-[#D4AF37] italic">transparent communication.</span>
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section ref={statsRef} className="py-24 lg:py-32 border-y border-white/10 bg-[#09090B]">
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

      {/* --- MAP SECTION (PRO-MAX STYLE) --- */}
      <section className="py-32 relative bg-[#09090B]">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12 bg-[#D4AF37]" />
            <span className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase">Headquarters</span>
            <div className="h-px w-12 bg-[#D4AF37]" />
          </div>
          
          <div className="relative w-full h-[600px] border border-white/10 group overflow-hidden bg-[#111]">
            {/* Map iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.6270350545674!2d71.5051804!3d30.247710599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b3521259695e1%3A0x87685f36724d434b!2sHassan%20Builders!5e0!3m2!1sen!2s!4v1781157538075!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(100%) contrast(120%) opacity(60%)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
            ></iframe>
            
            {/* Inner Shadow to blend edges */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(9,9,11,1)] z-10" />
            
            {/* Technical Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] z-20 m-6" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] z-20 m-6" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37] z-20 m-6" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] z-20 m-6" />

            {/* Floating Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-12 left-12 lg:bottom-24 lg:left-24 z-30 max-w-sm p-8 bg-[#09090B]/80 backdrop-blur-md border border-white/10"
            >
              <h2 className="text-3xl font-bold tracking-tight uppercase leading-[1.1] text-white mb-4">
                Visit Our <br/>
                <span className="text-[#D4AF37] italic">Location</span>
              </h2>
              <div className="w-12 h-px bg-[#D4AF37] mb-6" />
              <p className="font-mono text-xs text-gray-400 leading-relaxed uppercase tracking-widest mb-4">
                Near Green View Housing Scheme, Multan Public School Road, Multan, Pakistan
              </p>
              <div className="font-mono text-[10px] text-[#D4AF37] tracking-widest mt-6">
                COORD: 30.2477° N, 71.5051° E
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}