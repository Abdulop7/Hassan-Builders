'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, ChevronRight, Building2, Wrench, DraftingCompass, PaintBucket } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

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

  const socialIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }),
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const contactItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      x: 5,
      transition: { type: "spring", stiffness: 400 }
    }
  }

  const linkVariants = {
    hover: {
      x: 5,
      color: "#D4AF37",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const services = [
    { icon: <DraftingCompass className="w-4 h-4" />, name: "Design & Planning" },
    { icon: <Building2 className="w-4 h-4" />, name: "Structure Construction" },
    { icon: <PaintBucket className="w-4 h-4" />, name: "Finishing & Interiors" },
    { icon: <Wrench className="w-4 h-4" />, name: "Project Supervision" }
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" }
  ]

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, text: "Lahore, Pakistan" },
    { icon: <Phone className="w-5 h-5" />, text: "+92 300 0000000" },
    { icon: <Mail className="w-5 h-5" />, text: "info@hassanbuilders.pk" }
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" }
  ]

  return (
    <footer ref={footerRef} className="bg-black text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="w-14 h-14  rounded-full flex items-center justify-center"
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/logo.webp"
                  alt="Hassan Builders Logo"
                  width={60}
                  height={60}
                  className="object-contain rounded-full"
                />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  HASSAN <span className="text-[#D4AF37]">BUILDERS</span>
                </h2>
                <p className="text-gray-400 text-sm tracking-wider mt-1">YOUR DREAMS, OUR PRIORITIES</p>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
              Building quality residential spaces across Pakistan with precision,
              responsibility, and long-term value. Transforming visions into
              exceptional living environments.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
          >
            <motion.h3
              className="text-lg font-semibold mb-6 pb-3 border-b border-gray-800 tracking-wider"
              variants={itemVariants}
            >
              QUICK LINKS
            </motion.h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <Link href={link.href}>
                    <motion.div
                      className="flex items-center text-gray-400 hover:text-[#D4AF37] transition-colors duration-200 group"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      <ChevronRight className="w-4 h-4 mr-3 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm tracking-wide">{link.name}</span>
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={itemVariants}
          >
            <motion.h3
              className="text-lg font-semibold mb-6 pb-3 border-b border-gray-800 tracking-wider"
              variants={itemVariants}
            >
              OUR SERVICES
            </motion.h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="flex items-center space-x-3 group">
                    <motion.div
                      className="w-8 h-8 border border-gray-700 rounded-sm flex items-center justify-center group-hover:border-[#D4AF37] transition-colors"
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-[#D4AF37]">
                        {service.icon}
                      </div>
                    </motion.div>
                    <span className="text-gray-400 text-sm tracking-wide group-hover:text-[#D4AF37] transition-colors">
                      {service.name}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
          >
            <motion.h3
              className="text-lg font-semibold mb-6 pb-3 border-b border-gray-800 tracking-wider"
              variants={itemVariants}
            >
              CONTACT US
            </motion.h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.text}
                  custom={index}
                  variants={contactItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex items-center space-x-4 text-gray-400 group"
                >
                  <motion.div
                    className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center group-hover:border-[#D4AF37] transition-colors"
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-[#D4AF37]">
                      {info.icon}
                    </div>
                  </motion.div>
                  <span className="text-sm tracking-wide group-hover:text-[#D4AF37] transition-colors">
                    {info.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <motion.h4
                className="text-sm font-semibold mb-4 tracking-wider text-gray-300"
                variants={itemVariants}
              >
                FOLLOW US
              </motion.h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    custom={index}
                    variants={socialIconVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 "
                  >
                    <div className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm tracking-wider">
              &copy; {new Date().getFullYear()} HASSAN BUILDERS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center space-x-6 text-gray-500 text-sm">
              <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors tracking-wide">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#D4AF37] transition-colors tracking-wide">
                Terms of Service
              </Link>
            </div>
          </div>

        </motion.div>
      </div>
    </footer>
  )
}