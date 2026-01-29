'use client'

import { Target, Eye, Heart, Shield, Award, Users, ChevronRight, Building2 } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
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

const staggerGrid: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const visionRef = useRef(null)
  const valuesRef = useRef(null)
  const statsRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" })
  const visionInView = useInView(visionRef, { once: true, margin: "-100px" })
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" })
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Quality Excellence",
      description: "Uncompromising commitment to quality in every project"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description: "Transparent practices and honest communication"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Your vision guides our every decision"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Innovation",
      description: "Adopting modern techniques for better results"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Sustainability",
      description: "Environmentally conscious construction practices"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 overflow-hidden">

        {/* Background */}
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
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-px w-16 bg-[#D4AF37] mr-4"></div>
              <span className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase">
                ABOUT US
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              About <span className="text-[#D4AF37]">Hassan Builders</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Building dreams with precision, quality, and trust since 2018.
              Transforming residential construction in Pakistan.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storyRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="flex items-center mb-8"
              variants={fadeInUp}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
            >
              <div className="h-px w-12 bg-[#D4AF37] mr-4"></div>
              <span className="text-gray-900 font-medium uppercase tracking-wider">Our Story</span>
            </motion.div>

            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 leading-tight"
              variants={fadeInUp}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
            >
              Building Excellence Since
              <br />
              <span className="text-[#D4AF37]">2018</span>
            </motion.h2>

            <motion.div
              className="space-y-8 text-gray-700"
              variants={containerVariants}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
            >
              <motion.p className="leading-relaxed text-lg" variants={itemVariants}>
                Founded in 2018, Hassan Builders emerged from a vision to transform
                residential construction in Pakistan by combining traditional craftsmanship with
                modern engineering excellence. What began as a family enterprise has grown
                into a trusted name known for reliability and uncompromising quality.
              </motion.p>

              <motion.p className="leading-relaxed text-lg" variants={itemVariants}>
                Over the years, we have successfully delivered numerous residential projects
                across major cities, each reflecting our commitment to superior construction
                standards. Our portfolio includes contemporary family homes, luxury villas,
                and premium apartment complexes—all built with meticulous attention to detail.
              </motion.p>

              <motion.p className="leading-relaxed text-lg" variants={itemVariants}>
                Our team comprises experienced architects, engineers, project managers,
                and skilled craftsmen who collaborate to ensure every project exceeds
                expectations. We believe in building relationships as strong as the structures
                we create, which is why many clients return for multiple projects and refer
                us to their networks.
              </motion.p>

              <motion.p className="leading-relaxed text-lg" variants={itemVariants}>
                At Hassan Builders, we understand that a home is more than architecture—it's
                where memories are created and lives unfold. This understanding guides our
                approach, ensuring we deliver spaces that truly enrich lives.
              </motion.p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              className="mt-16 pt-8 border-t border-gray-200"
              variants={fadeInUp}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center space-x-8 overflow-x-auto pb-4">
                {[
                  { year: '2018', event: 'Company Founded' },
                  { year: '2019', event: 'First Major Residential Project' },
                  { year: '2021', event: 'Expanded Services & Team' },
                  { year: '2023', event: 'Premium Projects Division' },
                  { year: '2024', event: 'Sustainability Initiative' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center mb-4">
                        <span className="text-gray-900 font-bold">{item.year}</span>
                      </div>
                      <span className="text-gray-600 text-sm text-center">{item.event}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={visionRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerGrid}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
          >
            {/* Vision */}
            <motion.div
              className="bg-white p-8 border border-gray-200 hover:border-black transition-colors duration-200"
              variants={fadeInScale}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div
                className="flex items-center mb-8"
                variants={containerVariants}
              >
                <motion.div
                  className="w-12 h-12 border border-gray-300 flex items-center justify-center mr-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Eye className="text-gray-700" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  <div className="h-px w-12 bg-[#D4AF37] mt-2"></div>
                </div>
              </motion.div>
              <motion.p
                className="text-gray-700 leading-relaxed"
                variants={fadeInUp}
              >
                To be Pakistan's most trusted residential construction company, recognized
                for transforming living spaces through innovative design, superior craftsmanship,
                and sustainable building practices that enrich lives and communities.
              </motion.p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-white p-8 border border-gray-200 hover:border-black transition-colors duration-200"
              variants={fadeInScale}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div
                className="flex items-center mb-8"
                variants={containerVariants}
              >
                <motion.div
                  className="w-12 h-12 border border-gray-300 flex items-center justify-center mr-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="text-gray-700" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  <div className="h-px w-12 bg-[#D4AF37] mt-2"></div>
                </div>
              </motion.div>
              <motion.p
                className="text-gray-700 leading-relaxed"
                variants={fadeInUp}
              >
                To deliver exceptional residential construction services that exceed client
                expectations through professional project management, quality materials,
                skilled craftsmanship, and transparent communication, while maintaining
                the highest standards of safety and environmental responsibility.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            <motion.div
              className="flex items-center justify-center mb-8"
              variants={fadeInUp}
            >
              <div className="h-px w-12 bg-[#D4AF37] mr-4"></div>
              <span className="text-gray-900 font-medium uppercase tracking-wider">Our Values</span>
              <div className="h-px w-12 bg-[#D4AF37] ml-4"></div>
            </motion.div>

            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              Core <span className="text-[#D4AF37]">Principles</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              variants={fadeInUp}
            >
              The guiding principles that shape our work and define our company culture
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={staggerGrid}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 border border-gray-200 hover:border-black transition-colors duration-200 group"
                variants={fadeInScale}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)"
                }}
              >
                <motion.div
                  className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-black transition-colors duration-200"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-[#D4AF37]">
                    {value.icon}
                  </div>
                </motion.div>
                <motion.h4
                  className="text-lg font-bold text-gray-900 mb-3 group-hover:text-black transition-colors duration-200"
                  variants={fadeInUp}
                >
                  {value.title}
                </motion.h4>
                <motion.p
                  className="text-gray-600 text-sm leading-relaxed"
                  variants={fadeInUp}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerGrid}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {[
              { number: '50+', label: 'Projects Completed', icon: Building2 },
              { number: '6+', label: 'Years Experience', icon: Award },
              { number: '40+', label: 'Happy Clients', icon: Users },
              { number: '100%', label: 'Client Satisfaction', icon: Heart }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInScale}
              >
                <motion.div
                  className="text-4xl font-bold text-[#D4AF37] mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative animated element */}
          <motion.div
            className="mt-20 pt-8 border-t border-gray-800 text-center"
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Since 2018, we have built a reputation for excellence in residential construction across Pakistan.
              Our commitment to quality and client satisfaction remains our guiding principle.
            </p>

          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="bg-black py-16 px-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >

            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Ready to Build with
              <br />
              <span className="text-[#D4AF37]">Confidence?</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Partner with a construction company that values quality, integrity, and your vision.
              Let's create something exceptional together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
              <Link href="/services">
              <motion.button
                className="bg-transparent border-2 border-white text-white px-8 py-4 font-semibold hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Services
              </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}