'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How quickly will I hear back after I submit the contact form?',
    answer: 'Our team reviews all inquiries within one business day. For most residential projects, you will receive a detailed response and next steps within 24–48 hours.'
  },
  {
    question: 'What information should I share about my project?',
    answer: 'It helps to include your plot size, location, approximate budget range, preferred design style, and any specific requirements. The more detail you provide, the more accurate our initial estimate will be.'
  },
  {
    question: 'Do you offer on-site consultations?',
    answer: 'Yes. After an initial discussion, we can schedule a site visit to better understand the location, soil conditions, access, and any local regulations that may impact your project.'
  },
  {
    question: 'Which cities do Hassan Builders serve?',
    answer: 'We exclusively handle residential and commercial projects in Multan. Our work covers major housing societies and commercial areas within the city, including developments such as DHA Multan and Bahria Town Multan.'
  }
]

export default function ContactPage() {
  const containerRef = useRef(null)

  // Hero Parallax
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const yText = useTransform(heroScroll, [0, 1], [0, 200])
  const opacityText = useTransform(heroScroll, [0, 1], [1, 0])

  const contactRef = useRef(null)
  const contactInView = useInView(contactRef, { once: true, margin: "-10%" })

  const faqRef = useRef(null)
  const faqInView = useInView(faqRef, { once: true, margin: "-10%" })

  return (
    <div ref={containerRef} className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-[60vh] lg:h-[70vh] w-full flex flex-col justify-end pb-12 lg:pb-24 overflow-hidden border-b border-white/5">
        <motion.div 
          style={{ y: yText, opacity: opacityText }} 
          className="container mx-auto px-6 lg:px-12 z-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#D4AF37]" />
            <span className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase">Get In Touch</span>
          </div>
          
          <h1 className="text-[14vw] sm:text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase text-white mb-8">
            Let's <br />
            <span className="italic text-[#D4AF37]">Talk</span>
          </h1>
        </motion.div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section ref={contactRef} className="py-32 lg:py-48 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-12">
            
            {/* Left: Info */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col gap-16 lg:pr-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight uppercase">
                Let's discuss your <br/>
                <span className="text-[#D4AF37] italic">vision.</span>
              </h2>

              <div className="flex flex-col gap-12 font-mono text-sm uppercase tracking-widest text-gray-400">
                <div className="flex flex-col gap-4">
                  <span className="text-xs text-[#D4AF37]">Headquarters</span>
                  <span className="text-white">Near Green View Housing Scheme<br/>Multan Public School Road<br/>Multan, 60000, Pakistan</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-xs text-[#D4AF37]">Direct Line</span>
                  <a href="tel:+923346000900" className="text-white hover:text-[#D4AF37] transition-colors duration-300 w-max">+92 334 6000900</a>
                  <a href="tel:+923207700009" className="text-white hover:text-[#D4AF37] transition-colors duration-300 w-max">+92 320 7700009</a>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-xs text-[#D4AF37]">Email</span>
                  <a href="mailto:ranahassan6000@icloud.com" className="text-white hover:text-[#D4AF37] transition-colors duration-300 w-max">ranahassan6000@icloud.com</a>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-4 group">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">Name</label>
                    <input type="text" placeholder="John Doe" className="bg-transparent border-b border-white/20 py-2 text-white placeholder-white/10 focus:outline-none focus:border-[#D4AF37] transition-colors text-xl font-light" />
                  </div>
                  <div className="flex flex-col gap-4 group">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">Email</label>
                    <input type="email" placeholder="john@example.com" className="bg-transparent border-b border-white/20 py-2 text-white placeholder-white/10 focus:outline-none focus:border-[#D4AF37] transition-colors text-xl font-light" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-4 group">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">Phone</label>
                    <input type="tel" placeholder="+92 ..." className="bg-transparent border-b border-white/20 py-2 text-white placeholder-white/10 focus:outline-none focus:border-[#D4AF37] transition-colors text-xl font-light" />
                  </div>
                  <div className="flex flex-col gap-4 group">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">Location / Plot Size</label>
                    <input type="text" placeholder="DHA Multan, 1 Kanal" className="bg-transparent border-b border-white/20 py-2 text-white placeholder-white/10 focus:outline-none focus:border-[#D4AF37] transition-colors text-xl font-light" />
                  </div>
                </div>

                <div className="flex flex-col gap-4 group">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">Project Details</label>
                  <textarea rows={4} placeholder="Tell us about your project..." className="bg-transparent border-b border-white/20 py-2 text-white placeholder-white/10 focus:outline-none focus:border-[#D4AF37] transition-colors text-xl font-light resize-none" />
                </div>
                
                <div className="pt-8">
                  <button className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-transparent border border-white/20 text-[#FAFAFA] overflow-hidden transition-all duration-500 hover:border-[#D4AF37]">
                    <div className="absolute inset-0 w-full h-full bg-[#D4AF37] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                    <span className="relative z-10 font-mono text-xs tracking-widest uppercase group-hover:text-[#09090B] group-hover:font-bold transition-all duration-500">
                      Submit Inquiry
                    </span>
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-24 relative bg-[#09090B]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[21/9] md:aspect-[21/7] overflow-hidden bg-[#111111] border border-white/5"
          >
            {/* The CSS filters turn the standard Google Map into a dark mode map matching our theme */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.627035937768!2d71.50260547636411!3d30.24771057482191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b3521259695e1%3A0x87685f36724d434b!2sHassan%20Builders!5e0!3m2!1sen!2s!4v1782942004783!5m2!1sen!2s"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(105%) hue-rotate(180deg)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Overlay for interaction prevention or pure styling if needed, but we let users interact */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(9,9,11,1)]" />
            
            {/* Floating Info Badge */}
            <div className="absolute bottom-8 left-8 bg-[#09090B]/80 backdrop-blur-md border border-white/10 p-6 max-w-xs pointer-events-auto hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="font-mono text-[10px] tracking-widest text-[#D4AF37] uppercase">Headquarters</span>
              </div>
              <p className="font-mono text-xs uppercase text-gray-400 leading-relaxed">
                Near Green View Housing Scheme<br/>Multan Public School Road
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section ref={faqRef} className="py-32 lg:py-48 bg-[#09090B] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
            
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="sticky top-32"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-[#D4AF37]" />
                  <span className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase">Insights</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
                  Frequently <br />
                  <span className="text-[#D4AF37] italic">Asked</span>
                </h2>
              </motion.div>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              {faqs.map((faq, index) => (
                <FaqItem key={index} faq={faq} index={index} isInView={faqInView} />
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

function FaqItem({ faq, index, isInView }: { faq: any, index: number, isInView: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-white/10"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className={`text-xl md:text-2xl font-light pr-8 transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-white group-hover:text-gray-300'}`}>
          {faq.question}
        </span>
        <div className="flex-shrink-0 text-white/50 group-hover:text-[#D4AF37] transition-colors duration-300">
          {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 font-mono text-sm leading-relaxed text-gray-400 pl-4 border-l border-[#D4AF37]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}