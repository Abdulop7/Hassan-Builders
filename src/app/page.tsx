'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projectsData = [
  { id: 1, type: 'House', title: '4 KANAL RESIDENTIAL', location: 'CANTT, Multan', area: '3,500 sq ft', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop' },
  { id: 2, type: 'Villa', title: 'Luxury Villa Complex', location: 'Islamabad', area: '5,000 sq ft', src: 'https://images.unsplash.com/photo-1613490908677-74ea02244a95?q=80&w=2081&auto=format&fit=crop' },
  { id: 3, type: 'Apartment', title: 'High-end Apartment Block', location: 'Karachi', area: '2,500 sq ft', src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop' },
  { id: 4, type: 'Renovation', title: 'Heritage Building Restoration', location: 'Lahore', area: '2,800 sq ft', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop' },
]

const servicesData = [
  { 
    title: "Design & Planning", 
    desc: "Architectural design, structural planning, and project documentation to ensure your vision is perfectly captured in buildable plans.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
  },
  { 
    title: "Structure Construction", 
    desc: "Complete structural work including foundation, framework, and building envelope using premium materials and advanced techniques.",
    image: "https://images.unsplash.com/photo-1541888086950-ef8fd22e1189?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    title: "Finishing & Interiors", 
    desc: "Complete interior finishing including electrical, plumbing, flooring, painting, and custom cabinetry for turnkey residential solutions.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    title: "Project Supervision", 
    desc: "End-to-end management of the construction site to ensure quality, safety, and timely delivery.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2081&auto=format&fit=crop"
  }
]

export default function Home() {
  const [activeService, setActiveService] = useState(0)

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  // Hero Parallax
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const yText = useTransform(heroScroll, [0, 1], [0, 200])
  const opacityText = useTransform(heroScroll, [0, 1], [1, 0])
  const scaleImg = useTransform(heroScroll, [0, 1], [1, 1.2])

  // About Section InView
  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, { once: true, margin: "-20%" })

  return (
    <div ref={container} className="relative bg-[#09090B] text-[#FAFAFA]">
      
      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: scaleImg }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#09090B]/60 z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            {/* Using a high-quality free stock video for architecture/construction */}
            <source src="hero.mp4" type="video/mp4" />
          </video>
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
            <h1 className="text-[12vw] sm:text-[10vw] leading-[0.9] font-bold tracking-tighter uppercase mb-6">
              Building<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] italic">Quality</span>
            </h1>
            <p className="font-mono text-sm md:text-base tracking-widest uppercase text-gray-300 max-w-xl mx-auto">
              Transforming visions into exceptional living spaces across Pakistan with precision and long-term value.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
            <motion.div 
              className="w-full h-full bg-[#D4AF37]"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            />
          </div>
        </motion.div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section ref={aboutRef} className="py-32 lg:py-48 relative z-10 bg-[#09090B]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
            <div className="lg:col-span-4 flex flex-col justify-between">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-[#D4AF37] font-mono text-sm tracking-widest uppercase mb-4">Who We Are</h2>
                <div className="text-6xl font-bold tracking-tighter">10+</div>
                <div className="font-mono text-xs uppercase tracking-widest text-gray-500 mt-2">Years of Excellence</div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-8">
              <motion.h3 
                className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Hassan Builders is a premier residential construction company based in Multan, specializing in creating exceptional living spaces that blend <span className="text-[#D4AF37] italic">modern design</span> with traditional craftsmanship.
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 font-mono text-sm leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  With over a decade of experience, we have established a reputation for delivering projects with precision, reliability, and uncompromising quality standards. Our team of skilled professionals ensures every project meets the highest construction benchmarks.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  We understand that your home is more than just a structure—it's where memories are made and lives are built. That's why we approach every project with the care and attention it deserves.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-32 relative bg-[#09090B] overflow-hidden">
        {/* Horizontal Line Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent absolute top-0" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
              Our <br/><span className="text-[#D4AF37] italic">Expertise</span>
            </h2>
            <p className="font-mono text-sm tracking-widest uppercase text-gray-500 max-w-xs mt-6 md:mt-0 text-left md:text-right">
              Hover to explore our premium construction solutions.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Interactive List */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              {servicesData.map((service, i) => (
                <div 
                  key={i} 
                  className={`group py-8 lg:py-10 border-b transition-colors duration-500 cursor-pointer ${activeService === i ? 'border-[#D4AF37]' : 'border-white/10 hover:border-white/40'}`}
                  onMouseEnter={() => setActiveService(i)}
                >
                  <div className="flex items-center gap-6 lg:gap-8">
                    <span className={`font-mono text-sm transition-colors duration-500 ${activeService === i ? 'text-[#D4AF37]' : 'text-gray-600 group-hover:text-gray-400'}`}>
                      0{i + 1}
                    </span>
                    <h3 className={`text-3xl lg:text-5xl font-bold tracking-tight transition-colors duration-500 ${activeService === i ? 'text-white' : 'text-gray-600 group-hover:text-gray-300'}`}>
                      {service.title}
                    </h3>
                  </div>
                  
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: activeService === i ? 'auto' : 0, opacity: activeService === i ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-mono text-sm text-gray-400 mt-6 lg:ml-12 max-w-md leading-relaxed">
                      {service.desc}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Dynamic Image Display */}
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[700px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full bg-gray-900"
                >
                  <Image 
                    src={servicesData[activeService].image}
                    alt={servicesData[activeService].title}
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-60" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="py-32 relative bg-white text-[#09090B]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Selected Work</h2>
            <Link href="/projects" className="font-mono text-sm tracking-widest uppercase border-b border-black pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {projectsData.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <CtaSection />

    </div>
  )
}

// --- Subcomponents for animations ---

function CtaSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const yText = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#09090B]">
      <motion.div style={{ scale: scaleImg }} className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd64bd15?q=80&w=2070&auto=format&fit=crop" 
          alt="CTA Background" 
          fill 
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-[#09090B]" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
        <motion.div style={{ y: yText }} className="flex flex-col items-center">
          <span className="font-mono text-sm tracking-widest text-[#D4AF37] uppercase mb-8">Next Steps</span>
          <h2 className="text-[12vw] sm:text-[10vw] leading-[0.8] font-bold tracking-tighter uppercase mb-12 text-transparent bg-clip-text bg-white">
            START A <br />
            <span className="italic text-[#D4AF37]">PROJECT</span>
          </h2>
          
          <Link href="/contact" className="group relative inline-flex items-center justify-center w-40 h-40 rounded-full bg-[#FAFAFA] text-[#09090B] overflow-hidden transition-transform duration-500 hover:scale-110">
            <div className="absolute inset-0 w-full h-full bg-[#D4AF37] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 font-bold tracking-widest uppercase text-xs text-center px-4 group-hover:text-white transition-colors duration-500">
              Get In<br/>Touch
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Removed ServiceCard because it was replaced by the interactive inline list

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-6 group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
        <motion.div 
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image 
            src={project.src} 
            alt={project.title} 
            fill 
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center font-mono text-xs tracking-widest uppercase text-gray-500">
          <span>{project.type}</span>
          <span>{project.year || "2024"}</span>
        </div>
        <h3 className="text-2xl font-bold tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-mono text-sm text-gray-600">{project.location} &bull; {project.area}</p>
      </div>
    </motion.div>
  )
}