'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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

export default function ProjectClient({ project, nextProject }: { project: any, nextProject: any }) {
  // Hero Parallax
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const yText = useTransform(heroScroll, [0, 1], [0, 150])
  const opacityText = useTransform(heroScroll, [0, 1], [1, 0])
  const scaleImg = useTransform(heroScroll, [0, 1], [1, 1.1])

  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: "-20%" })

  // Use actual project images from JSON
  const galleryImages = project.images ? project.images.map((img: any) => img.url) : [project.preview]

  return (
    <div className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-[80vh] lg:h-screen w-full flex items-end pb-24 overflow-hidden border-b border-white/5">
        <motion.div style={{ scale: scaleImg }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent z-10" />
          <Image 
            src={project.preview} 
            alt={project.title} 
            fill 
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <motion.div 
            style={{ y: yText, opacity: opacityText }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#D4AF37]" />
              <Link href="/projects" className="font-mono text-xs tracking-widest text-gray-400 hover:text-[#D4AF37] transition-colors uppercase">
                Back to Projects
              </Link>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[8vw] leading-[0.9] font-bold tracking-tighter uppercase mb-6 text-white max-w-5xl">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- PROJECT INFO --- */}
      <section ref={contentRef} className="py-24 relative bg-[#09090B]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Description */}
            <motion.div 
              className="lg:col-span-8"
              initial={{ opacity: 0, x: -50 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-[#D4AF37] font-mono text-sm tracking-widest uppercase mb-8">Project Overview</h2>
              <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-300 font-light">
                {project.description}
              </p>
            </motion.div>

            {/* Right: Metadata */}
            <motion.div 
              className="lg:col-span-4 flex flex-col gap-8 font-mono text-sm uppercase tracking-widest"
              initial={{ opacity: 0, x: 50 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-2 pb-8 border-b border-white/10">
                <span className="text-gray-600">Client / Location</span>
                <span className="text-white">{project.location}</span>
              </div>
              <div className="flex flex-col gap-2 pb-8 border-b border-white/10">
                <span className="text-gray-600">Project Type</span>
                <span className="text-white">{project.type}</span>
              </div>
              <div className="flex flex-col gap-2 pb-8 border-b border-white/10">
                <span className="text-gray-600">Total Area</span>
                <span className="text-white">{project.area}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-600">Completion Year</span>
                <span className="text-white">{project.year}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- GALLERY (MASONRY/STAGGERED) --- */}
      <section className="pb-32 bg-[#09090B]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {galleryImages.map((src: string, index: number) => {
              // Stagger every second image to create a masonry-like feel
              const isEven = index % 2 === 0
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative w-full overflow-hidden bg-gray-900 group ${!isEven ? 'md:mt-24' : ''} ${index === galleryImages.length - 1 && isEven ? 'md:col-span-2 aspect-video' : 'aspect-video'}`}
                >
                  <Image 
                    src={src}
                    alt={`${project.title} - view ${index + 1}`}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- NEXT PROJECT CTA --- */}
      {nextProject && (
        <Link 
          href={`/projects/${slugify(nextProject.title, nextProject.id)}`} 
          className="block group relative h-[60vh] lg:h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
        >
          {/* Background Image with Cinematic Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#09090B]/80 group-hover:bg-[#09090B]/40 transition-colors duration-1000 z-10" />
            <Image 
              src={nextProject.preview}
              alt={nextProject.title}
              fill
              className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-80"
            />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-20 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="font-mono text-xs sm:text-sm tracking-widest text-[#D4AF37] uppercase mb-6 sm:mb-8 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                View Next Project
              </h4>
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7vw] font-bold tracking-tighter uppercase text-[#FAFAFA] group-hover:text-[#D4AF37] transition-all duration-700 group-hover:italic break-words whitespace-normal leading-[0.9] max-w-7xl mx-auto px-4">
                {nextProject.title}
              </h2>
            </motion.div>
          </div>
        </Link>
      )}

    </div>
  )
}
