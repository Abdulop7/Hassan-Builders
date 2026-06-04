'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Target, Award, Users, ChevronRight } from 'lucide-react'

export default function ContactPage() {
  const heroRef = useRef(null)
  const contactRef = useRef(null)
  const faqRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const contactInView = useInView(contactRef, { once: true, margin: "-20%" })
  const faqInView = useInView(faqRef, { once: true, margin: "-20%" })

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

  return (
    <div className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative pt-48 pb-24 lg:pt-64 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-12 bg-[#D4AF37]" />
              <span className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase">Get in Touch</span>
            </div>
            
            <h1 className="text-6xl sm:text-8xl lg:text-[10vw] leading-[0.9] font-bold tracking-tighter uppercase mb-12">
              Start Your<br/>
              <span className="text-[#D4AF37] italic">Project</span>
            </h1>
            
            <p className="font-mono text-sm tracking-widest uppercase text-gray-500 leading-relaxed max-w-lg">
              Reach out to Hassan Builders for consultations, quotations, and complete construction solutions in Multan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT INFO & FORM --- */}
      <section ref={contactRef} className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Let's discuss your <span className="text-[#D4AF37] italic">requirements.</span>
              </h2>

              <div className="flex flex-col gap-8 font-mono text-sm uppercase tracking-widest text-gray-400">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                  <div>
                    <span className="block text-white mb-2">Call Us</span>
                    <span>+92 320 7700009<br/>+92 334 6000900</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                  <div>
                    <span className="block text-white mb-2">Email</span>
                    <span>ranahassan6000@icloud.com</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <div>
                    <span className="block text-white mb-2">Head Office</span>
                    <span>Near Green View Housing Scheme<br/>Multan Public School Road<br/>Multan, 60000, Pakistan</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 50 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8 bg-[#111113] p-8 md:p-12 border border-white/5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Full Name</label>
                <input type="text" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Email Address</label>
                <input type="email" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Phone Number</label>
                <input type="tel" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Project Details</label>
                <textarea rows={4} className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none" />
              </div>
              
              <button className="mt-4 bg-[#D4AF37] text-[#09090B] font-bold tracking-widest uppercase py-4 px-8 hover:bg-white transition-colors duration-300">
                Submit Inquiry
              </button>
            </motion.form>

          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section ref={faqRef} className="py-32 bg-white text-[#09090B]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 uppercase">
              Frequently Asked <span className="text-[#D4AF37] italic">Questions</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {faqs.map((faq, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold tracking-tight">{faq.question}</h3>
                  <p className="font-mono text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}