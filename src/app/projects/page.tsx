'use client'

import { useState, useRef, useEffect } from 'react'
import {
  Filter,
  MapPin,
  Maximize,
  Calendar,
  ChevronRight,
  X,
  ExternalLink,
  Loader2,
  ChevronLeft,
} from 'lucide-react'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import projects from '../projects.json'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// --- animation variants (unchanged) ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}

const fadeInUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
}

const fadeInScale: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
}

const staggerGrid: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// helper to convert type string -> filter id ("Residential Project" -> "residential-project")
const normalizeType = (type: string) =>
  type.toLowerCase().replace(/\s+/g, '-')

// derive unique types from projects.json
const projectTypes = Array.from(
  new Set(
    (projects as { type?: string }[])
      .map((p) => p.type)
      .filter((t): t is string => Boolean(t))
  )
)

// build filters from project types (+ "All Projects")
const filters = [
  { id: 'all', label: 'All Projects' },
  ...projectTypes.map((type) => ({
    id: normalizeType(type),
    label: type,
  })),
]

// slug helper for project URL in modal CTA
function slugify(title: string, id: number | string) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') +
    '-' +
    id
  )
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filterAnimating, setFilterAnimating] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any | null>(null)

  const heroRef = useRef(null)
  const filterRef = useRef(null)
  const projectsRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const filterInView = useInView(filterRef, { once: true, margin: '-50px' })
  const projectsInView = useInView(projectsRef, { once: true, margin: '-100px' })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' })

  // use the normalized type to filter
  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(
          (project) => normalizeType(project.type) === activeFilter
        )

  const handleFilterChange = (filterId: string) => {
    setFilterAnimating(true)
    setActiveFilter(filterId)
    setTimeout(() => setFilterAnimating(false), 500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/about-hero.webp')" }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={
                heroInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-px w-16 bg-[#D4AF37] mr-4"></div>
              <span className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase">
                PORTFOLIO
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our <span className="text-[#D4AF37]">Projects</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Showcasing our commitment to quality construction and innovative design
              across residential projects in Pakistan.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section
        ref={filterRef}
        className="sticky top-0 z-10 bg-white border-b border-gray-100"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={filterInView ? 'visible' : 'hidden'}
          >
            <motion.div
              className="flex items-center"
              variants={itemVariants}
            >
              <motion.div
                className="w-8 h-8 flex items-center justify-center mr-3"
                transition={{ duration: 0.5 }}
              >
                <Filter className="text-gray-600" size={18} />
              </motion.div>
              <span className="text-gray-900 font-medium">
                Filter by Project Type
              </span>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2"
              variants={staggerGrid}
              initial="hidden"
              animate={filterInView ? 'visible' : 'hidden'}
            >
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => handleFilterChange(filter.id)}
                  variants={itemVariants}
                  className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-black text-white border border-black'
                      : 'text-gray-700 border border-gray-200 hover:border-gray-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={
                    filterAnimating && activeFilter === filter.id
                      ? {
                          scale: [1, 1.1, 1],
                          transition: { duration: 0.3 },
                        }
                      : {}
                  }
                >
                  {filter.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="mb-12 flex items-center justify-between"
            variants={fadeInUp}
            initial="hidden"
            animate={projectsInView ? 'visible' : 'hidden'}
          >
            <div>
              <motion.h2
                className="text-2xl font-bold text-gray-900"
                variants={fadeInUp}
              >
                Project Portfolio
              </motion.h2>
              <motion.p
                className="text-gray-600 mt-2"
                variants={fadeInUp}
              >
                Showing {filteredProjects.length} of {projects.length} projects
              </motion.p>
            </div>
            <motion.div
              className="text-sm text-gray-500"
              variants={fadeInUp}
            >
              Sorted by:{' '}
              <span className="text-gray-900 font-medium">Most Recent</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerGrid}
            initial="hidden"
            animate={projectsInView ? 'visible' : 'hidden'}
            key={activeFilter}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                onClick={() => setSelectedProject(project)} // open slider on click anywhere
                className="group border border-gray-200 hover:border-black transition-colors duration-200 cursor-pointer"
                variants={fadeInScale}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {/* Image */}
                <motion.div
                  className="relative h-64 bg-gray-100 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={project.preview}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      {project.type}
                    </span>
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 text-sm leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center text-gray-700">
                        <MapPin size={14} className="mr-1.5 text-gray-500" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Maximize
                          size={14}
                          className="mr-1.5 text-gray-500"
                        />
                        {project.area}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar
                          size={14}
                          className="mr-1.5 text-gray-500"
                        />
                        {project.year}
                      </div>
                      <div className="text-black font-medium text-sm flex items-center group">
                        View Details
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ChevronRight size={16} className="ml-1" />
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{
                  rotate: [0, 360],
                  transition: { duration: 2, repeat: Infinity, ease: 'linear' },
                }}
              >
                <Filter className="text-gray-400" size={24} />
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-gray-900 mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                No projects found
              </motion.h3>
              <motion.p
                className="text-gray-600 max-w-md mx-auto mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                There are no projects in the selected category. Please try a different
                filter.
              </motion.p>
              <motion.button
                onClick={() => handleFilterChange('all')}
                className="text-black font-medium hover:text-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                View All Projects
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section (unchanged) */}
      <section ref={ctaRef} className="py-20 bg-black overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            variants={fadeInScale}
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
              variants={fadeInUp}
            >
              Ready to Start Your
              <br />
              <span className="text-[#D4AF37]">Project?</span>
            </motion.h2>

            <motion.p
              className="text-gray-400 mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              Contact us for a consultation on your residential construction needs.
              We deliver quality, precision, and value.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
              initial="hidden"
              animate={ctaInView ? 'visible' : 'hidden'}
            >
              <Link href="/contact">
                <motion.button
                  className="bg-[#D4AF37] text-black px-8 py-3.5 font-medium hover:bg-[#C19C30] transition-colors duration-200"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  className="bg-transparent border border-gray-700 text-white px-8 py-3.5 font-medium hover:border-gray-500 transition-colors duration-200"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Slider Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

/* -------- ProjectModal (slider) -------- */

const PRIMARY = '#D4AF37'
const PRIMARY_SOFT = '#C19C30'

function ProjectModal({
  project,
  onClose,
}: {
  project: any
  onClose: () => void
}) {
  const swiperRef = useRef<any>(null)
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({})
  const [currentSlide, setCurrentSlide] = useState(0)

  // Build images array from project.images or fallback to preview
  const images =
    project?.images && Array.isArray(project.images) && project.images.length > 0
      ? project.images
      : project?.preview
      ? [{ url: project.preview, collage: false }]
      : []

  const collageImages = images.filter((img: any) => img.collage)
  const allImages = images
  const totalSlides = (collageImages.length > 0 ? 1 : 0) + allImages.length

  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  useEffect(() => {
    setImageLoaded({})
    setCurrentSlide(0)
  }, [project?.id])

  if (!project) return null

  const categoryLabel = project.category || project.type || 'Project'

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/90"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full md:w-[95vw] md:h-[90vh] md:max-w-[1600px] bg-black flex flex-col lg:flex-row text-white overflow-hidden"
          style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)' }}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-black border border-gray-700 text-white flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Gallery Section */}
          <div className="relative w-full lg:w-2/3 h-[50vh] lg:h-full bg-black">
            <Swiper
              modules={[Navigation, Pagination, Keyboard, EffectFade]}
              navigation={{
                prevEl: '.swiper-prev-custom',
                nextEl: '.swiper-next-custom',
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              keyboard={{ enabled: true }}
              loop
              className="w-full h-full"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            >
              {/* Collage Slide */}
              {collageImages.length > 0 && (
                <SwiperSlide>
                  <div
                    className={`grid gap-2 w-full h-full p-3 ${
                      collageImages.length === 2
                        ? 'grid-cols-2'
                        : collageImages.length === 3
                        ? 'grid-cols-3'
                        : collageImages.length >= 4
                        ? 'grid-cols-2 grid-rows-2'
                        : 'grid-cols-1'
                    }`}
                  >
                    {collageImages.slice(0, 4).map((img: any, i: number) => (
                      <div
                        key={`collage-${i}`}
                        className="relative w-full h-full overflow-hidden bg-gray-800"
                      >
                        {!imageLoaded[`collage-${i}`] && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Loader2
                              className="w-8 h-8 animate-spin"
                              style={{ color: PRIMARY }}
                            />
                          </div>
                        )}
                        <img
                          src={img.url}
                          alt={`${project.title} collage ${i + 1}`}
                          className={`w-full h-full object-cover transition-opacity duration-500 ${
                            imageLoaded[`collage-${i}`]
                              ? 'opacity-100'
                              : 'opacity-0'
                          }`}
                          onLoad={() =>
                            setImageLoaded((prev) => ({
                              ...prev,
                              [`collage-${i}`]: true,
                            }))
                          }
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              )}

              {/* Individual Image Slides */}
              {allImages.map((img: any, i: number) => (
                <SwiperSlide key={`main-${i}`}>
                  <div className="relative w-full h-full flex items-center justify-center bg-black">
                    {!imageLoaded[`main-${i}`] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2
                          className="w-10 h-10 animate-spin"
                          style={{ color: PRIMARY }}
                        />
                      </div>
                    )}
                    <img
                      src={img.url}
                      alt={`${project.title} ${i + 1}`}
                      className={`max-w-full max-h-full object-contain transition-opacity duration-500 ${
                        imageLoaded[`main-${i}`]
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                      onLoad={() =>
                        setImageLoaded((prev) => ({
                          ...prev,
                          [`main-${i}`]: true,
                        }))
                      }
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <button
              className="swiper-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/80 border border-gray-700 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="swiper-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/80 border border-gray-700 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-4 left-4 z-10 px-4 py-2 bg-black/80 border border-gray-700 text-sm font-medium text-white">
              {currentSlide + 1} / {totalSlides || 1}
            </div>
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full lg:w-1/3 h-[50vh] lg:h-full overflow-y-auto bg-white text-gray-900"
          >
            <div className="p-8 lg:p-10 space-y-8 h-full">
              {/* Header */}
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-3 py-1 text-xs font-semibold border border-[#D4AF37] text-[#D4AF37]"
                >
                  {categoryLabel}
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                >
                  {project.title}
                </motion.h2>
              </div>

              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3 text-sm"
              >
                <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 bg-white">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-medium text-gray-900">
                    {project.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 bg-white">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-medium text-gray-900">
                    {project.year}
                  </span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="space-y-3"
              >
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  About the Project
                </h4>
                <p className="text-gray-700 leading-relaxed text-base">
                  {project.description}
                </p>
              </motion.div>

              {/* Subcategory (optional) */}
              {project.subcategory && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#D4AF37]/10 text-[#D4AF37]">
                    {project.subcategory}
                  </span>
                </motion.div>
              )}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="pt-6"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={`/projects/${slugify(project.title, project.id)}`}
                    className="w-full py-3.5 bg-[#D4AF37] text-black font-semibold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-[#C19C30] transition-colors duration-200"
                  >
                    View Full Project
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Keyboard Hints */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-4"
              >
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-gray-100 text-gray-500 font-mono text-xs">
                    ←
                  </kbd>
                  <kbd className="px-2 py-1 bg-gray-100 text-gray-500 font-mono text-xs">
                    →
                  </kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-gray-100 text-gray-500 font-mono text-xs">
                    ESC
                  </kbd>
                  <span>Close</span>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}