'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'

export default function ServicesPage() {
  const containerRef = useRef(null)

  // Hero Parallax
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const yText = useTransform(heroScroll, [0, 1], [0, 150])
  const opacityText = useTransform(heroScroll, [0, 1], [1, 0])
  const scaleImg = useTransform(heroScroll, [0, 1], [1, 1.1])

  const services = [
    {
      title: "Design & Planning",
      description: "Comprehensive architectural and structural design services tailored to your lifestyle.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
      features: [
        "Architectural Design & Concept Development",
        "Structural Engineering & Calculations",
        "3D Visualization & Renderings",
        "Building Permit Assistance",
        "Project Documentation & Specifications"
      ]
    },
    {
      title: "Structure Construction",
      description: "Robust and enduring structural work utilizing premium quality materials.",
      image: "https://images.unsplash.com/photo-1541888086950-ef8fd22e1189?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Foundation & Excavation Work",
        "Structural Framework & Columns",
        "Brickwork & Masonry",
        "Roof Construction & Waterproofing",
        "Building Envelope Completion"
      ]
    },
    {
      title: "Finishing & Interiors",
      description: "Exquisite final touches ensuring a complete, ready-to-move-in luxury home.",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
      features: [
        "Electrical & Plumbing Installations",
        "Premium Flooring & Wall Finishes",
        "Painting & Decorative Works",
        "Luxury Kitchen & Bathroom Fittings",
        "Bespoke Interior Design Consultation"
      ]
    },
    {
      title: "Project Supervision",
      description: "End-to-end project management ensuring flawless execution and quality control.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2000&auto=format&fit=crop",
      features: [
        "Professional Project Management",
        "Daily Site Supervision",
        "Strict Quality Control & Assurance",
        "Transparent Progress Reporting",
        "Final Handover & Documentation"
      ]
    }
  ]

  return (
    <div ref={containerRef} className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-[70vh] lg:h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: scaleImg }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090B] via-transparent to-[#09090B] z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop" 
            alt="Services Hero Background" 
            fill 
            className="object-cover opacity-40"
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
              <span className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase">Our Expertise</span>
              <div className="h-px w-12 bg-[#D4AF37]" />
            </div>
            
            <h1 className="text-[12vw] sm:text-[10vw] leading-[0.8] font-bold tracking-tighter uppercase text-white">
              Core <br />
              <span className="italic text-[#D4AF37]">Services</span>
            </h1>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SERVICES LIST (Sticky Layout) --- */}
      <section className="py-24 relative z-20 bg-[#09090B]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-32 lg:gap-64">
            {services.map((service, index) => (
              <ServiceBlock key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

function ServiceBlock({ service, index }: { service: any, index: number }) {
  const blockRef = useRef(null)
  const isInView = useInView(blockRef, { once: true, margin: "-20%" })

  return (
    <div ref={blockRef} className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
      
      {/* Left: Sticky Title */}
      <div className="w-full lg:w-5/12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:sticky lg:top-48 flex flex-col gap-6"
        >
          <span className="font-mono text-[10vw] lg:text-[6vw] leading-none text-white/5 font-bold tracking-tighter">
            0{index + 1}
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.9]">
            {service.title.split(' ').map((word: string, i: number) => (
              <span key={i} className={i % 2 !== 0 ? "text-[#D4AF37] italic block mt-2" : "block"}>
                {word}
              </span>
            ))}
          </h2>
          <p className="font-mono text-sm tracking-widest text-gray-400 mt-6 max-w-sm leading-relaxed border-l border-[#D4AF37] pl-6">
            {service.description}
          </p>
        </motion.div>
      </div>

      {/* Right: Scrolling Content */}
      <div className="w-full lg:w-7/12 flex flex-col gap-12 mt-12 lg:mt-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/3] w-full overflow-hidden"
        >
          <Image 
            src={service.image} 
            alt={service.title} 
            fill 
            className="object-cover transition-transform duration-1000 hover:scale-105" 
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#111111] border border-white/5 p-8 lg:p-12"
        >
          <h3 className="font-mono text-xs tracking-widest text-white uppercase mb-8 pb-4 border-b border-white/10">Deliverables</h3>
          <ul className="flex flex-col gap-6">
            {service.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start gap-4 text-sm font-mono text-gray-400 group">
                <span className="w-2 h-2 bg-[#D4AF37] mt-1.5 transition-transform duration-300 group-hover:scale-150" />
                <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

    </div>
  )
}