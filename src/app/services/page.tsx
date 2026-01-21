'use client'

import { Check, Home, DraftingCompass, Building, PaintBucket, Eye, ChevronRight } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Animation variants
const fadeInUp: Variants = {
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

const fadeInScale: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const staggerItem: Variants = {
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

export default function ServicesPage() {
  const heroRef = useRef(null)
  const overviewRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" })
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const processInView = useInView(processRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  const services = [
    {
      icon: <DraftingCompass className="w-6 h-6" />,
      title: "Design & Planning",
      description: "Comprehensive architectural and structural design services",
      features: [
        "Architectural Design & Concept Development",
        "Structural Engineering & Calculations",
        "3D Visualization & Renderings",
        "Building Permit Assistance",
        "Project Documentation & Specifications"
      ]
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Structure Construction",
      description: "Complete structural work with quality materials",
      features: [
        "Foundation & Excavation Work",
        "Structural Framework & Columns",
        "Brickwork & Masonry",
        "Roof Construction & Waterproofing",
        "Building Envelope Completion"
      ]
    },
    {
      icon: <PaintBucket className="w-6 h-6" />,
      title: "Finishing & Interiors",
      description: "Final touches for complete, ready-to-move-in homes",
      features: [
        "Electrical & Plumbing Installations",
        "Flooring, Tiling & Wall Finishes",
        "Painting & Decorative Works",
        "Kitchen & Bathroom Fittings",
        "Interior Design Consultation"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Project Supervision",
      description: "End-to-end project management and quality control",
      features: [
        "Professional Project Management",
        "Daily Site Supervision",
        "Quality Control & Assurance",
        "Progress Reporting & Updates",
        "Final Handover & Documentation"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24">
        {/* Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/service-hero.webp')" }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center">
                <div className="h-px w-12 bg-[#D4AF37] mr-4"></div>
                <Home className="w-5 h-5 text-[#D4AF37] mr-2" />
                <span className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase">
                  RESIDENTIAL CONSTRUCTION
                </span>
                <div className="h-px w-12 bg-[#D4AF37] ml-4"></div>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 }}
            >
              Our <span className="text-[#D4AF37]">Services</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              Comprehensive residential construction solutions tailored to meet your specific needs
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section ref={overviewRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate={overviewInView ? "visible" : "hidden"}
          >
            <motion.div
              className="flex items-center mb-8"
              variants={fadeInUp}
            >
              <div className="h-px w-12 bg-[#D4AF37] mr-4"></div>
              <span className="text-gray-900 font-medium uppercase tracking-wider">Overview</span>
            </motion.div>

            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8"
              variants={fadeInUp}
            >
              <span className="text-[#D4AF37]">Residential</span> Construction
            </motion.h2>

            <motion.p
              className="text-gray-700 text-lg"
              variants={fadeInUp}
            >
              At Hassan Builders, we specialize in creating exceptional residential spaces
              that combine modern design with traditional craftsmanship. Our comprehensive
              construction services ensure that every aspect of your project, from initial
              design to final finishing, is executed with precision and care.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Details - Timeline Layout */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-300 hidden md:block"></div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={fadeInScale}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 bg-[#D4AF37] rounded-full border-4 border-white z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                    <motion.div
                      className="bg-white border border-gray-200 p-8"
                      whileHover={{
                        borderColor: "#000000",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Service Header */}
                      <motion.div
                        className={`flex items-center mb-6 ${index % 2 === 0 ? 'md:justify-end' : ''}`}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-12 h-12 border border-gray-300 flex items-center justify-center mr-4"
                          variants={staggerItem}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="text-[#D4AF37]">
                            {service.icon}
                          </div>
                        </motion.div>
                        <div className={`${index % 2 === 0 ? 'md:order-first md:mr-4' : ''}`}>
                          <motion.h3
                            className="text-2xl font-bold text-gray-900"
                            variants={staggerItem}
                          >
                            {service.title}
                          </motion.h3>
                          <div className={`h-px w-12 bg-[#D4AF37] mt-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}></div>
                        </div>
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        className="text-gray-700 mb-6"
                        variants={staggerItem}
                      >
                        {service.description}
                      </motion.p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start p-2 hover:bg-gray-50 transition-colors"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Check className="w-4 h-4 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
          >
            <motion.div
              className="flex items-center justify-center mb-8"
              variants={fadeInUp}
            >
              <div className="h-px w-12 bg-[#D4AF37] mr-4"></div>
              <span className="text-gray-900 font-medium uppercase tracking-wider">Our Process</span>
              <div className="h-px w-12 bg-[#D4AF37] ml-4"></div>
            </motion.div>

            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              Systematic <span className="text-[#D4AF37]">Approach</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg"
              variants={fadeInUp}
            >
              A structured methodology ensuring quality and efficiency in every project
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
          >
            {[
              { step: "01", title: "Consultation", desc: "Understanding your requirements" },
              { step: "02", title: "Design", desc: "Creating architectural plans" },
              { step: "03", title: "Construction", desc: "Building with precision" },
              { step: "04", title: "Handover", desc: "Quality assurance & delivery" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInScale}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div
                  className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6"
                  whileHover={{
                    scale: 1.1,
                    borderColor: "#D4AF37",
                    backgroundColor: "rgba(212, 175, 55, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-gray-900">{item.step}</span>
                </motion.div>
                <motion.h4
                  className="text-lg font-bold text-gray-900 mb-3"
                  variants={fadeInUp}
                >
                  {item.title}
                </motion.h4>
                <motion.p
                  className="text-gray-600 text-sm"
                  variants={fadeInUp}
                >
                  {item.desc}
                </motion.p>
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
            variants={fadeInScale}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              Ready to Start Your
              <br />
              <span className="text-[#D4AF37]">Project?</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
              variants={fadeInUp}
            >
              Contact us today to discuss your residential construction needs and receive
              a detailed proposal tailored to your requirements.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
            >
              <motion.button
                className="bg-[#D4AF37] text-black px-8 py-4 font-semibold hover:bg-[#C19C30] transition-colors duration-200 flex items-center justify-center"
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
                <ChevronRight className="ml-3" size={20} />
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white text-white px-8 py-4 font-semibold hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200"
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Portfolio
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}