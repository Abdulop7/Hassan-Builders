'use client'

import { ArrowRight, CheckCircle, House, Wrench, PaintBucket } from 'lucide-react'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

// Animation variants
const containerVariants : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants : Variants = {
  hidden: { y: 20, opacity: 0 },
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

const fadeInUp : Variants = {
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

const fadeInRight : Variants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
}

const fadeInLeft : Variants = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
}

const scaleUp : Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

export default function Home() {
  const projects = [
    { id: 1, type: 'House', title: 'Modern Family Residence', location: 'Lahore', area: '3,500 sq ft',
      src: "/modern.jpeg" },
    { id: 2, type: 'Villa', title: 'Luxury Villa Complex', location: 'Islamabad', area: '5,000 sq ft',
      src: "/complex.jpeg" },
    { id: 3, type: 'Apartment', title: 'High-end Apartment Block', location: 'Karachi', area: '2,500 sq ft',
      src: "/appartment.jpeg" },
    {
      id: 4, type: 'Renovation', title: 'Heritage Building Restoration', location: 'Lahore', area: '2,800 sq ft',
      src: "/restoration.jpeg"
    },
  ]

  // Refs for scroll animations
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const projectsRef = useRef(null)
  const ctaRef = useRef(null)

  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.webp')" }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="h-px w-16 bg-[#D4AF37] mr-4"></div>
              <span className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase">
                CONSTRUCTION
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Building Quality
              <br />
              <span className="text-[#D4AF37]">Spaces</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              We help turn your ideas into solid foundations with precision, responsibility, and long-term value.
              Transforming visions into exceptional living spaces across Pakistan.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/projects">
                <motion.button
                  className="bg-[#D4AF37] text-black px-8 py-4 font-semibold hover:bg-[#C19C30] transition-colors duration-200 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                  <ArrowRight className="ml-3" size={20} />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-8 py-4 font-semibold hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section ref={aboutRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
            >
              <motion.div
                className="flex items-center mb-8"
                variants={fadeInUp}
              >
                <div className="h-px w-12 bg-[#D4AF37] mr-4"></div>
                <span className="text-gray-900 font-medium uppercase tracking-wider">Who We Are</span>
              </motion.div>

              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight"
                variants={fadeInUp}
              >
                Building Excellence in
                <br />
                <span className="text-[#D4AF37]">Construction</span>
              </motion.h2>

              <motion.div
                className="space-y-6 text-gray-700 mb-8"
                variants={containerVariants}
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
              >
                <motion.p className="leading-relaxed" variants={itemVariants}>
                  Hassan Builders is a premier residential construction company based in Multan,
                  specializing in creating exceptional living spaces that blend modern design with
                  traditional craftsmanship.
                </motion.p>
                <motion.p className="leading-relaxed" variants={itemVariants}>
                  With over a decade of experience, we have established a reputation for delivering
                  projects with precision, reliability, and uncompromising quality standards.
                  Our team of skilled professionals ensures every project meets the highest
                  construction benchmarks.
                </motion.p>
                <motion.p className="leading-relaxed" variants={itemVariants}>
                  We understand that your home is more than just a structure—it's where memories
                  are made and lives are built. That's why we approach every project with the
                  care and attention it deserves.
                </motion.p>
              </motion.div>

              <Link href="/about">
                <motion.button
                  className="text-gray-900 font-semibold hover:text-[#D4AF37] transition-colors duration-200 flex items-center group"
                  whileHover={{ x: 10 }}
                  variants={fadeInUp}
                >
                  Learn More About Us
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              variants={fadeInLeft}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
            >
              <motion.div
                className="bg-gray-100 h-[500px] relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/who-we-are.webp"
                    alt="Hassan Builders Logo"
                    fill
                    className="object-cover "
                  />
                </div>
              </motion.div>

              {/* Stats Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-black text-white p-8"
                initial={{ scale: 0, rotate: -90 }}
                animate={aboutInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.5
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">10+</div>
                <div className="text-sm uppercase tracking-wider">Years Experience</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            <motion.div
              className="flex items-center justify-center mb-8"
              variants={fadeInUp}
            >
              <div className="h-px w-12 bg-[#D4AF37] mr-4"></div>
              <span className="text-gray-900 font-medium uppercase tracking-wider">Our Expertise</span>
              <div className="h-px w-12 bg-[#D4AF37] ml-4"></div>
            </motion.div>

            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              Comprehensive <span className="text-[#D4AF37]">Construction Services</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              variants={fadeInUp}
            >
              End-to-end construction solutions ensuring quality and precision at every stage.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {/* Service 1 */}
            <motion.div
              className="bg-white p-8 border border-gray-200 hover:border-black transition-colors duration-200"
              variants={scaleUp}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div
                className="w-12 h-12 border border-gray-300 flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <House className="text-gray-700" size={24} />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design & Planning</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Architectural design, structural planning, and project documentation to ensure
                your vision is perfectly captured in buildable plans.
              </p>
              <ul className="space-y-3">
                {['Architectural Design', 'Structural Engineering', 'Project Documentation'].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <CheckCircle className="text-[#D4AF37] mr-3 flex-shrink-0" size={16} />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="bg-white p-8 border border-gray-200 hover:border-black transition-colors duration-200"
              variants={scaleUp}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div
                className="w-12 h-12 border border-gray-300 flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Wrench className="text-gray-700" size={24} />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Structure Construction</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete structural work including foundation, framework, and building envelope
                using premium materials and advanced techniques.
              </p>
              <ul className="space-y-3">
                {['Foundation Work', 'Structural Framework', 'Building Envelope'].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <CheckCircle className="text-[#D4AF37] mr-3 flex-shrink-0" size={16} />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="bg-white p-8 border border-gray-200 hover:border-black transition-colors duration-200"
              variants={scaleUp}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div
                className="w-12 h-12 border border-gray-300 flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <PaintBucket className="text-gray-700" size={24} />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Finishing & Interiors</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete interior finishing including electrical, plumbing, flooring, painting,
                and custom cabinetry for turnkey residential solutions.
              </p>
              <ul className="space-y-3">
                {['Electrical & Plumbing', 'Flooring & Painting', 'Interior Design'].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="text-[#D4AF37] mr-3 flex-shrink-0" size={16} />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <div className="text-center">
            <Link href="/services">
              <motion.button
                className="bg-black text-white px-8 py-4 font-semibold hover:bg-[#D4AF37] hover:text-black transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={servicesInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 }}
              >
                View All Services
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section ref={projectsRef} className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12"
            variants={fadeInUp}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
          >
            <div>
              <motion.div
                className="flex items-center mb-4"
                variants={fadeInUp}
              >
                <div className="h-px w-12 bg-[#D4AF37] mr-4"></div>
                <span className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase">Our Work</span>
              </motion.div>
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-white mb-4"
                variants={fadeInUp}
              >
                Featured <span className="text-[#D4AF37]">Projects</span>
              </motion.h2>
              <motion.p
                className="text-gray-400"
                variants={fadeInUp}
              >
                A showcase of our construction excellence across Pakistan
              </motion.p>
            </div>

            <Link href="/projects" className="mt-6 lg:mt-0">
              <motion.button
                className="text-white font-medium hover:text-[#D4AF37] transition-colors duration-200 flex items-center"
                whileHover={{ x: 10 }}
              >
                View All Projects
                <ArrowRight className="ml-3" size={20} />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group"
                variants={scaleUp}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="bg-gray-900 h-64 mb-4 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={project.src}
                      alt="Hassan Builders Logo"
                      fill
                      className="object-cover "
                    />
                  </div>
                  <motion.div
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="bg-black text-white text-xs font-medium px-3 py-1.5">
                      {project.type}
                    </span>
                  </motion.div>
                </motion.div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>{project.location}</span>
                    <span>{project.area}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="bg-black py-20 px-8 text-center"
            variants={scaleUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight"
              variants={fadeInUp}
            >
              Ready to Build Your
              <br />
              <span className="text-[#D4AF37]">Dream Residence?</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
              variants={fadeInUp}
            >
              Contact us for a comprehensive consultation. Let's discuss how we can transform
              your vision into reality with our expertise and commitment to quality.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
            >
              <Link href="/contact">
                <motion.button
                  className="bg-[#D4AF37] text-black px-8 py-4 font-semibold hover:bg-[#C19C30] transition-colors duration-200"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-8 py-4 font-semibold hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Portfolio
                </motion.button>
              </Link>
            </motion.div>

            {/* Decorative animated element */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, scale: 0 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-8">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-[#D4AF37] rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
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