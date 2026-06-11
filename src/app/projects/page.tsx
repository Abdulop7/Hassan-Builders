'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import projects from '../projects.json'

// helper to convert type string -> filter id ("Residential Project" -> "residential-project")
const normalizeType = (type: string) => type.toLowerCase().replace(/\s+/g, '-')

// derive unique types from projects.json
const projectTypes = Array.from(
  new Set(
    (projects as { type?: string }[])
      .map((p) => p.type)
      .filter((t): t is string => Boolean(t))
  )
)

const filters = [
  { id: 'all', label: 'All Projects' },
  ...projectTypes.map((type) => ({
    id: normalizeType(type),
    label: type,
  })),
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const containerRef = useRef(null)

  // Hero Parallax
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const yText = useTransform(heroScroll, [0, 1], [0, 300])
  const opacityText = useTransform(heroScroll, [0, 1], [1, 0])

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => normalizeType(project.type) === activeFilter)



  return (
    <div ref={containerRef} className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen selection:bg-[#D4AF37] selection:text-[#09090B]">
      
      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-[60vh] lg:h-[80vh] w-full flex flex-col justify-end pb-12 lg:pb-24 overflow-hidden">
        <motion.div 
          style={{ y: yText, opacity: opacityText }} 
          className="container mx-auto px-6 lg:px-12 z-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#D4AF37]" />
            <span className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase">Portfolio</span>
          </div>
          
          <h1 className="text-[14vw] sm:text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase text-white mb-12">
            Selected <br />
            <span className="italic text-[#D4AF37]">Work</span>
          </h1>
        </motion.div>
      </section>

      {/* --- FILTERS & GRID SECTION --- */}
      <section className="pb-32 lg:pb-48 relative bg-[#09090B] z-30">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Sticky Filters */}
          <div className="sticky top-24 z-40 bg-[#09090B]/80 backdrop-blur-md py-6 mb-16 border-b border-white/10">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="font-mono text-xs tracking-widest uppercase text-gray-600 mr-4 hidden md:block">Filter By:</span>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative px-6 py-3 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-500 overflow-hidden group ${
                    activeFilter === filter.id
                      ? 'text-[#09090B]'
                      : 'text-gray-400 hover:text-white border border-white/10'
                  }`}
                >
                  {/* Background Fill for Active State */}
                  <div className={`absolute inset-0 w-full h-full bg-[#D4AF37] transition-transform duration-500 ease-[0.16,1,0.3,1] ${activeFilter === filter.id ? 'scale-100' : 'scale-0 group-hover:scale-100'}`} />
                  <span className={`relative z-10 ${activeFilter === filter.id ? 'font-bold' : 'group-hover:text-[#09090B] transition-colors duration-500'}`}>
                    {filter.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-48">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                image={project.preview} 
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-48 border border-white/5 rounded-3xl mt-12 bg-white/5">
              <p className="font-mono text-sm tracking-widest text-gray-400 uppercase">No projects match the selected criteria.</p>
              <button 
                onClick={() => setActiveFilter('all')}
                className="mt-6 text-[#D4AF37] font-mono text-xs uppercase tracking-widest hover:italic transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}

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

function ProjectCard({ project, index, image }: { project: any, index: number, image: string }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-10%" })

  // Parallax effect for the image inside the container
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <Link href={`/projects/${slugify(project.title, project.id)}`} className={`block ${index % 2 !== 0 ? 'md:mt-48' : ''}`}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-8 group cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative w-full aspect-video overflow-hidden bg-[#111111]">
          <motion.div style={{ y: imgY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
            <Image 
              src={image} 
              alt={project.title || "Project"} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[#09090B]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
          
          {/* Hover Overlay "View Project" */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
            <div className="w-32 h-32 rounded-full bg-[#D4AF37] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 ease-[0.16,1,0.3,1]">
              <span className="font-mono text-[10px] tracking-widest text-[#09090B] uppercase font-bold text-center">
                View <br/> Project
              </span>
            </div>
          </div>
        </div>

        {/* Text Container */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center font-mono text-[10px] tracking-widest uppercase text-gray-500 border-b border-white/10 pb-4">
            <span className="text-[#D4AF37]">{project.type}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight group-hover:text-[#D4AF37] transition-colors duration-500 leading-none">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mt-2">
            {project.location} &bull; {project.area}
          </p>
        </div>
      </motion.div>
    </Link>
  )
}