'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence, animate } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import projectsData from './projects.json'

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
            <p className="font-mono text-sm md:text-base tracking-widest uppercase text-gray-300 max-w-xl mx-auto mb-12">
              As a leading consolidated construction company and premium home builders, we transform visions into exceptional living spaces across Pakistan.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/projects" className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-transparent border border-white/30 text-[#FAFAFA] overflow-hidden transition-all duration-500 hover:border-[#D4AF37] w-full sm:w-auto">
                <div className="absolute inset-0 w-full h-full bg-[#D4AF37] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 font-mono text-xs tracking-widest uppercase group-hover:text-[#09090B] group-hover:font-bold transition-all duration-500">
                  View Projects
                </span>
              </Link>
              <Link href="/contact" className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#FAFAFA] text-[#09090B] overflow-hidden transition-all duration-500 w-full sm:w-auto">
                <div className="absolute inset-0 w-full h-full bg-[#D4AF37] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 font-mono text-xs font-bold tracking-widest uppercase group-hover:text-[#09090B] transition-all duration-500">
                  Contact Us
                </span>
              </Link>
            </div>
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
                Hassan Builders is a premier construction company in Multan. Whether you are looking for top-tier home builders or searching for the best house designers near me, we specialize in creating exceptional spaces that blend <span className="text-[#D4AF37] italic">modern design</span> with traditional craftsmanship.
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 font-mono text-sm leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  With over a decade of experience as a consolidated construction company, we have established a stellar reputation. From ground-up builds to luxury renovations, our team of skilled professionals ensures every project meets the highest benchmarks.
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

      {/* --- IMPACT SECTION --- */}
      <ImpactSection />

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

            {/* Interactive Graphic Display */}
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[700px] overflow-hidden rounded-xl border border-white/5">
              <ExpertiseGraphic activeService={activeService} />
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <ProcessSection />

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

      {/* --- TESTIMONIALS SECTION --- */}
      <TestimonialsSection />

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

function slugify(title: string, id: number | string) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") +
    "-" +
    id
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  return (
    <Link href={`/projects/${slugify(project.title, project.id)}`} className="block">
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
            src={project.preview} 
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
    </Link>
  )
}

function ExpertiseGraphic({ activeService }: { activeService: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2 // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2 // -1 to 1
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full relative flex items-center justify-center bg-[#09090B] overflow-hidden group cursor-crosshair border border-white/5 rounded-xl"
    >
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.05] transition-opacity duration-1000 group-hover:opacity-[0.1]" 
        style={{ 
          backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
        }} 
      />

      <AnimatePresence mode="wait">
        {activeService === 0 && <DesignGraphic key="design" mousePosition={mousePosition} />}
        {activeService === 1 && <StructureGraphic key="structure" mousePosition={mousePosition} />}
        {activeService === 2 && <InteriorGraphic key="interior" mousePosition={mousePosition} />}
        {activeService === 3 && <SupervisionGraphic key="supervision" mousePosition={mousePosition} />}
      </AnimatePresence>

      {/* Dynamic Lighting Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen"
        style={{
          background: `radial-gradient(circle 300px at ${(mousePosition.x / 2 + 0.5) * 100}% ${(mousePosition.y / 2 + 0.5) * 100}%, rgba(212,175,55,0.1) 0%, transparent 100%)`
        }}
      />
    </div>
  )
}

// 0: Design & Planning - Interactive drafting board
function DesignGraphic({ mousePosition }: { mousePosition: { x: number, y: number } }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <svg width="60%" height="60%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
        {/* Static Blueprint House */}
        <motion.path
          d="M20 180 L20 100 L100 30 L180 100 L180 180 Z"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M60 180 L60 120 L100 120 L100 180"
          stroke="#D4AF37"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path
          d="M130 100 L160 100 L160 140 L130 140 Z"
          stroke="#D4AF37"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />

        {/* Interactive Drafting Pen/Compass */}
        <motion.g
          animate={{
            x: mousePosition.x * 100,
            y: mousePosition.y * 100,
            rotate: mousePosition.x * 20
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          {/* Pen Tool */}
          <path d="M0 0 L-20 -50 L-10 -60 L10 -10 Z" fill="#FAFAFA" />
          <path d="M0 0 L-5 -15 L5 -15 Z" fill="#D4AF37" />
          {/* Trail / Measurement lines following pen */}
          <line x1="0" y1="0" x2="-50" y2="0" stroke="white" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
          <line x1="0" y1="0" x2="0" y2="50" stroke="white" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
        </motion.g>
      </svg>
    </motion.div>
  )
}

// 1: Structure Construction - Interactive crane building a wall
function StructureGraphic({ mousePosition }: { mousePosition: { x: number, y: number } }) {
  // Constrain crane arm rotation between -45 and 45 degrees
  const craneRotation = Math.max(-45, Math.min(45, mousePosition.x * 60));
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-full flex items-end justify-center pb-20"
    >
      <svg width="80%" height="80%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
        {/* Building Foundation/Wall */}
        <path d="M50 200 L150 200 L150 160 L50 160 Z" fill="#111" stroke="#D4AF37" strokeWidth="2" />
        <path d="M70 160 L130 160 L130 130 L70 130 Z" fill="#111" stroke="#D4AF37" strokeWidth="2" />
        
        {/* Crane Tower (Static) */}
        <path d="M180 200 L180 50 L190 50 L190 200 Z" fill="#FAFAFA" />
        <path d="M180 180 L190 170 M180 160 L190 150 M180 140 L190 130 M180 120 L190 110" stroke="#09090B" strokeWidth="2" />

        {/* Interactive Crane Arm */}
        <motion.g
          style={{ originX: '185px', originY: '50px' }}
          animate={{ rotate: craneRotation }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        >
          {/* Crane Boom */}
          <path d="M200 50 L20 50 L20 40 L200 40 Z" fill="#FAFAFA" />
          <path d="M40 50 L30 40 M60 50 L50 40 M80 50 L70 40" stroke="#09090B" strokeWidth="2" />
          
          {/* Crane Hook & Cable moving along the arm based on Y mouse position */}
          <motion.g
            animate={{ x: mousePosition.y * 50 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <line x1="60" y1="50" x2="60" y2="100" stroke="white" strokeWidth="1" />
            <path d="M55 100 L65 100 L65 110 L55 110 Z" fill="#D4AF37" />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  )
}

// 2: Finishing & Interiors - Interactive room lighting
function InteriorGraphic({ mousePosition }: { mousePosition: { x: number, y: number } }) {
  // Calculate light beam rotation based on mouse
  const lightAngle = mousePosition.x * 40; // -40 to 40 degrees

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <svg width="70%" height="70%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
        {/* Room Walls */}
        <path d="M20 20 L20 180 L180 180" stroke="#FAFAFA" strokeWidth="2" strokeOpacity="0.2" />
        
        {/* Window */}
        <rect x="40" y="40" width="60" height="80" stroke="#D4AF37" strokeWidth="2" fill="none" />
        <line x1="40" y1="80" x2="100" y2="80" stroke="#D4AF37" strokeWidth="2" />
        <line x1="70" y1="40" x2="70" y2="120" stroke="#D4AF37" strokeWidth="2" />

        {/* Modern Sofa */}
        <path d="M120 160 L180 160 L180 130 L160 130 L160 140 L120 140 Z" fill="#111" stroke="#FAFAFA" strokeWidth="2" />
        
        {/* Floor Lamp (Static base) */}
        <path d="M100 180 L100 100" stroke="#FAFAFA" strokeWidth="2" />
        <path d="M90 180 L110 180" stroke="#FAFAFA" strokeWidth="2" />

        {/* Interactive Lamp Head & Light Beam */}
        <motion.g
          style={{ originX: '100px', originY: '100px' }}
          animate={{ rotate: lightAngle }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        >
          {/* Lamp Shade */}
          <path d="M90 100 L110 100 L105 80 L95 80 Z" fill="#FAFAFA" />
          
          {/* Glowing Light Beam */}
          <polygon points="95,80 105,80 160,0 40,0" fill="url(#lightGrad)" opacity="0.4" />
        </motion.g>

        <defs>
          <linearGradient id="lightGrad" x1="100" y1="80" x2="100" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}

// 3: Project Supervision - Interactive clipboard and checklist
function SupervisionGraphic({ mousePosition }: { mousePosition: { x: number, y: number } }) {
  // Determine which item is being hovered based on Y position
  const activeItemIndex = mousePosition.y < -0.3 ? 0 : mousePosition.y < 0.3 ? 1 : 2;

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: -90 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <svg width="50%" height="70%" viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
        {/* Clipboard Base */}
        <rect x="10" y="20" width="130" height="170" rx="5" fill="#111" stroke="#FAFAFA" strokeWidth="2" />
        
        {/* Clip */}
        <path d="M50 20 L50 10 C50 5 55 0 60 0 L90 0 C95 0 100 5 100 10 L100 20 Z" fill="#D4AF37" />
        <rect x="40" y="15" width="70" height="15" rx="2" fill="#FAFAFA" />

        {/* Checklist Items */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(25, ${50 + i * 40})`}>
            {/* Checkbox Box */}
            <rect x="0" y="0" width="15" height="15" rx="2" stroke={activeItemIndex >= i ? "#D4AF37" : "#555"} strokeWidth="2" />
            
            {/* Checkmark (Animated based on mouse position) */}
            <motion.path
              d="M3 8 L6 11 L12 4"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: activeItemIndex >= i ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Text Line */}
            <line x1="25" y1="7.5" x2="100" y2="7.5" stroke={activeItemIndex >= i ? "#FAFAFA" : "#555"} strokeWidth="4" strokeLinecap="round" />
            <line x1="25" y1="15" x2="80" y2="15" stroke={activeItemIndex >= i ? "#FAFAFA" : "#555"} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          </g>
        ))}

        {/* Interactive Pen hovering over active item */}
        <motion.g
          animate={{
            x: mousePosition.x * 30,
            y: 50 + activeItemIndex * 40
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          <path d="M10 10 L30 -10 L35 -5 L15 15 Z" fill="#D4AF37" />
          <path d="M10 10 L5 15 L15 15 Z" fill="#FAFAFA" />
        </motion.g>
      </svg>
    </motion.div>
  )
}

// --- NEW SECTIONS ---

function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  const stats = [
    { label: "Projects Delivered", value: 50, suffix: "+" },
    { label: "Sq. Ft. Constructed", value: 300, suffix: "k+" },
    { label: "Industry Awards", value: 15, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
  ]

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#D4AF37] text-[#09090B]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <div className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 flex items-center">
                <Counter from={0} to={stat.value} trigger={isInView} />
                <span>{stat.suffix}</span>
              </div>
              <div className="font-mono text-xs tracking-widest uppercase font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ from, to, trigger }: { from: number, to: number, trigger: boolean }) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (trigger) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.round(value))
        }
      })
      return () => controls.stop()
    }
  }, [from, to, trigger])

  return <span>{count}</span>
}

const processData = [
  { id: "01", title: "Concept & Blueprint", desc: "Translating vision into actionable architecture. We start with extensive consultations to understand your lifestyle and aesthetic preferences before crafting detailed blueprints." },
  { id: "02", title: "Pre-Construction", desc: "Securing permits, sourcing premium materials globally, and preparing the site. We handle all regulatory requirements to ensure a seamless build." },
  { id: "03", title: "Execution", desc: "Precision building with strict quality control. Our master craftsmen and site engineers work in harmony to bring the blueprints to life." },
  { id: "04", title: "Handover", desc: "Final detailing and comprehensive client walkthrough. We ensure every fixture is perfect before handing over the keys to your new home." },
]

function ProcessSection() {
  const containerRef = useRef(null)
  
  return (
    <section ref={containerRef} className="py-32 relative bg-[#09090B] border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Sticky Left */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-[#D4AF37] font-mono text-sm tracking-widest uppercase mb-4">Our Process</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
              How We<br/><span className="italic text-[#D4AF37]">Build</span>
            </h3>
          </div>
          
          {/* Scrolling Right */}
          <div className="lg:w-2/3 flex flex-col gap-24 mt-12 lg:mt-0">
            {processData.map((step, i) => (
              <ProcessStep key={step.id} step={step} index={i} />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, index }: { step: any, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-8 md:pl-12 border-l border-white/10"
    >
      <motion.div 
        className="absolute top-0 left-0 w-[2px] bg-[#D4AF37]"
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{ transform: "translateX(-1px)" }}
      />
      <div className="text-[#D4AF37] font-mono text-xl md:text-2xl mb-6">
        {step.id}
      </div>
      <h4 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{step.title}</h4>
      <p className="text-gray-400 leading-relaxed max-w-xl font-mono text-sm">{step.desc}</p>
    </motion.div>
  )
}

const testimonialsData = [
  { quote: "Hassan Builders didn't just build a house; they crafted a masterpiece that our family will cherish for generations. The attention to detail is unmatched.", author: "Ahmad Raza", project: "1.5 Kanal Villa" },
  { quote: "Their transparent process and commitment to using premium materials gave us complete peace of mind. A truly luxury construction experience from start to finish.", author: "Sarah Khalid", project: "Modern Renovation" },
  { quote: "The architectural finesse and structural integrity of our new home exceeded all expectations. They are the premier choice in Multan for high-end builds.", author: "Dr. Usman", project: "2 Kanal Residence" },
]

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="py-32 relative bg-[#111] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="text-[#D4AF37] font-mono text-sm tracking-widest uppercase mb-20 text-center">Client Voices</h2>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Giant Quotes Decoration */}
          <div className="absolute -top-12 -left-8 md:-top-24 md:-left-16 text-[#D4AF37] opacity-20 text-8xl md:text-[12rem] font-serif leading-none">
            &ldquo;
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 text-center"
            >
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-12">
                "{testimonialsData[currentIndex].quote}"
              </h3>
              <div className="flex flex-col items-center gap-2">
                <span className="font-mono text-sm font-bold tracking-widest uppercase text-[#D4AF37]">{testimonialsData[currentIndex].author}</span>
                <span className="font-mono text-xs tracking-widest uppercase text-gray-500">{testimonialsData[currentIndex].project}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-16">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#D4AF37] transition-colors duration-300"
              >
                <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === currentIndex ? 'bg-[#D4AF37]' : 'bg-white/20'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}