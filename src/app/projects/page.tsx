'use client'

import { useState, useRef } from 'react'
import { Filter, MapPin, Maximize, Calendar, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
}

const fadeInScale = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
}

const staggerGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filterAnimating, setFilterAnimating] = useState(false)

  const heroRef = useRef(null)
  const filterRef = useRef(null)
  const projectsRef = useRef(null)
  const ctaRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true })
  const filterInView = useInView(filterRef, { once: true, margin: "-50px" })
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'houses', label: 'Houses' },
    { id: 'villas', label: 'Villas' },
    { id: 'apartments', label: 'Apartments' },
    { id: 'renovations', label: 'Renovations' }
  ]

  const projects = [
    { 
      id: 1, 
      type: 'houses', 
      title: 'Modern Family Residence', 
      location: 'Lahore', 
      area: '3,500 sq ft', 
      year: '2023',
      description: 'Contemporary design with sustainable features and premium finishes',
      status: 'Completed'
    },
    { 
      id: 2, 
      type: 'villas', 
      title: 'Luxury Villa Complex', 
      location: 'Islamabad', 
      area: '5,000 sq ft', 
      year: '2023',
      description: 'Premium villa with extensive landscape garden and modern amenities',
      status: 'Completed'
    },
    { 
      id: 3, 
      type: 'apartments', 
      title: 'High-end Apartment Block', 
      location: 'Karachi', 
      area: '2,500 sq ft', 
      year: '2023',
      description: 'Modern apartments with state-of-the-art amenities and security features',
      status: 'Completed'
    },
    { 
      id: 4, 
      type: 'renovations', 
      title: 'Heritage Building Restoration', 
      location: 'Lahore', 
      area: '2,800 sq ft', 
      year: '2022',
      description: 'Historic building modern renovation preserving original architectural elements',
      status: 'Completed'
    },
    { 
      id: 5, 
      type: 'houses', 
      title: 'Suburban Family Residence', 
      location: 'Rawalpindi', 
      area: '3,200 sq ft', 
      year: '2022',
      description: 'Spacious family home design with modern facilities and outdoor living spaces',
      status: 'Completed'
    },
    { 
      id: 6, 
      type: 'villas', 
      title: 'Hillside Luxury Villa', 
      location: 'Murree', 
      area: '4,500 sq ft', 
      year: '2022',
      description: 'Mountain view premium villa with panoramic views and luxury finishes',
      status: 'Completed'
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter)

  const handleFilterChange = (filterId: string) => {
    setFilterAnimating(true)
    setActiveFilter(filterId)
    // Reset animation state after transition
    setTimeout(() => setFilterAnimating(false), 500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
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
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
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
      <section ref={filterRef} className="sticky top-0 z-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={filterInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="flex items-center"
              variants={itemVariants}
            >
              <motion.div 
                className="w-8 h-8 flex items-center justify-center mr-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Filter className="text-gray-600" size={18} />
              </motion.div>
              <span className="text-gray-900 font-medium">Filter by Project Type</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={staggerGrid}
              initial="hidden"
              animate={filterInView ? "visible" : "hidden"}
            >
              {filters.map((filter, index) => (
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
                  animate={filterAnimating && activeFilter === filter.id ? {
                    scale: [1, 1.1, 1],
                    transition: { duration: 0.3 }
                  } : {}}
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
            animate={projectsInView ? "visible" : "hidden"}
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
              Sorted by: <span className="text-gray-900 font-medium">Most Recent</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerGrid}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            key={activeFilter}
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="group border border-gray-200 hover:border-black transition-colors duration-200"
                variants={fadeInScale}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20 
                }}
                custom={index}
              >
                {/* Image Placeholder */}
                <motion.div 
                  className="relative h-64 bg-gray-100 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div 
                        className="w-12 h-12 border-2 border-gray-300 rounded-sm flex items-center justify-center mx-auto mb-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Maximize className="text-gray-400" size={20} />
                      </motion.div>
                      <p className="text-gray-500 text-sm">Project Preview</p>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <motion.div 
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="bg-white text-gray-700 text-xs font-medium px-3 py-1.5 border border-gray-300">
                      {project.status}
                    </span>
                  </motion.div>
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
                      transition={{ type: "spring", stiffness: 400 }}
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
                        <Maximize size={14} className="mr-1.5 text-gray-500" />
                        {project.area}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar size={14} className="mr-1.5 text-gray-500" />
                        {project.year}
                      </div>
                      <motion.button 
                        className="text-black font-medium text-sm flex items-center group"
                        whileHover={{ x: 5 }}
                      >
                        View Details
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ChevronRight size={16} className="ml-1" />
                        </motion.span>
                      </motion.button>
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
                  transition: { duration: 2, repeat: Infinity, ease: "linear" }
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
                There are no projects in the selected category. Please try a different filter.
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

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-black overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            variants={fadeInScale}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
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
              animate={ctaInView ? "visible" : "hidden"}
            >
              <motion.button 
                className="bg-[#D4AF37] text-black px-8 py-3.5 font-medium hover:bg-[#C19C30] transition-colors duration-200"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button 
                className="bg-transparent border border-gray-700 text-white px-8 py-3.5 font-medium hover:border-gray-500 transition-colors duration-200"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Services
              </motion.button>
            </motion.div>

            {/* Animated decorative element */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-8">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-8 bg-[#D4AF37]"
                    animate={{
                      height: ['20px', '40px', '20px'],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}