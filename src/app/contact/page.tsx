'use client'

import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    Building2,
    Award,
    Users,
    Heart,
    Target,
    ChevronRight,
    MessageCircle
} from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

// Shared animation variants (same style as your About page)
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
            type: 'spring',
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


const faqs = [
    {
        question: 'How quickly will I hear back after I submit the contact form?',
        answer:
            'Our team reviews all inquiries within one business day. For most residential projects, you will receive a detailed response and next steps within 24–48 hours.'
    },
    {
        question: 'What information should I share about my project?',
        answer:
            'It helps to include your plot size, location, approximate budget range, preferred design style, and any specific requirements (number of rooms, floors, basement, etc.). The more detail you provide, the more accurate our initial estimate will be.'
    },
    {
        question: 'Do you offer on-site consultations?',
        answer:
            'Yes. After an initial discussion, we can schedule a site visit to better understand the location, soil conditions, access, and any local regulations that may impact your project.'
    },
    {
        question: 'Which cities do Hassan Builders serve?',
        answer:
            'We exclusively handle residential and commercial projects in Multan. Our work covers major housing societies and commercial areas within the city, including developments such as DHA Multan, Bahria Town Multan, and other well-known local communities.'
    },
    {
        question: 'Can you work with my existing architect or drawings?',
        answer:
            'Absolutely. We can work with approved drawings from your architect or offer complete design-and-build services if you prefer a single-point solution.'
    },
    {
        question: 'Do you provide turnkey construction services?',
        answer:
            'Yes, we specialize in turnkey residential construction, managing the entire project from grey structure to finishing, including interiors, fixtures, and landscaping on request.'
    }
]

export default function ContactPage() {
    const heroRef = useRef(null)
    const contactRef = useRef(null)
    const officesRef = useRef(null)
    const mapRef = useRef(null)
    const faqRef = useRef(null)
    const ctaRef = useRef(null)

    const heroInView = useInView(heroRef, { once: true })
    const contactInView = useInView(contactRef, { once: true, margin: '-100px' })
    const officesInView = useInView(officesRef, { once: true, margin: '-100px' })
    const mapInView = useInView(mapRef, { once: true, margin: '-100px' })
    const faqInView = useInView(faqRef, { once: true, margin: '-100px' })
    const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' })

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section ref={heroRef} className="relative py-24 overflow-hidden">
                {/* Background */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/contact-hero.webp')" }}
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
                            <div className="h-px w-16 bg-[#D4AF37] mr-4" />
                            <span className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase">
                                Contact Us
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
                            initial={{ opacity: 0, y: 50 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Let&apos;s Build Your
                            <span className="text-[#D4AF37]"> Dream Project</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-gray-300 max-w-2xl leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            Reach out to Hassan Builders for consultations, quotations, and complete
                            construction solutions in Multan. We typically respond
                            within 24–48 hours.
                        </motion.p>

                        {/* Quick Contact Highlights */}
                        <motion.div
                            className="mt-10 grid gap-6 sm:grid-cols-3"
                            variants={staggerGrid}
                            initial="hidden"
                            animate={heroInView ? 'visible' : 'hidden'}
                        >
                            <motion.div
                                className="flex items-center gap-3 text-gray-200"
                                variants={itemVariants}
                            >
                                <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-[#D4AF37]">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold">Call for New Projects</div>
                                    <div className="text-xs text-gray-300">+92 320 7700009</div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-3 text-gray-200"
                                variants={itemVariants}
                            >
                                <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-[#D4AF37]">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold">Email Our Team</div>
                                    <div className="text-xs text-gray-300">ranahassan6000@icloud.com</div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-3 text-gray-200"
                                variants={itemVariants}
                            >
                                <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-[#D4AF37]">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold">Response Time</div>
                                    <div className="text-xs text-gray-300">Within 24–48 business hours</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Main Contact + Form */}
            <section
                id="contact"
                ref={contactRef}
                className="py-20 bg-gray-50"
            >
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Header */}
                    <motion.div
                        className="text-center max-w-2xl mx-auto mb-16"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={contactInView ? 'visible' : 'hidden'}
                    >
                        <div className="flex items-center justify-center mb-4">
                            <div className="h-px w-12 bg-[#D4AF37] mr-4" />
                            <span className="text-xs font-medium tracking-[0.3em] text-gray-800 uppercase">
                                Get In Touch
                            </span>
                            <div className="h-px w-12 bg-[#D4AF37] ml-4" />
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Share Your Project
                            <span className="text-[#D4AF37]"> Requirements</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Whether you&apos;re planning a new home, a complete renovation, or finishing
                            work, send us your details and we&apos;ll help you move forward with clarity
                            and confidence.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid gap-10 lg:grid-cols-3"
                        variants={staggerGrid}
                        initial="hidden"
                        animate={contactInView ? 'visible' : 'hidden'}
                    >
                        {/* Contact Info Cards */}
                        <motion.div
                            className="space-y-6"
                            variants={containerVariants}
                        >
                            <motion.div
                                className="bg-white border border-gray-200 p-6 flex gap-4 items-start hover:border-black transition-colors duration-200"
                                variants={fadeInScale}
                                whileHover={{
                                    y: -5,
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.08)'
                                }}
                            >
                                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#D4AF37] mt-1">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                                    <p className="text-sm text-gray-600">
                                        +92 320 7700009
                                        <br />
                                        +92 334 6000900
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-white border border-gray-200 p-6 flex gap-4 items-start hover:border-black transition-colors duration-200"
                                variants={fadeInScale}
                                whileHover={{
                                    y: -5,
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.08)'
                                }}
                            >
                                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#D4AF37] mt-1">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                    <p className="text-sm text-gray-600">
                                        Support: ranahassan6000@icloud.com
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-white border border-gray-200 p-6 flex gap-4 items-start hover:border-black transition-colors duration-200"
                                variants={fadeInScale}
                                whileHover={{
                                    y: -5,
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.08)'
                                }}
                            >
                                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#D4AF37] mt-1">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Head Office</h3>
                                    <p className="text-sm text-gray-600">
                                        ANU Architects
                                        <br />
                                        Near Green View Housing Scheme, Multan Public School Road
                                        <br />
                                        Multan, 60000, Pakistan
                                    </p>
                                </div>
                            </motion.div>


                            <motion.div
                                className="bg-gray-900 text-gray-100 p-6 flex gap-4 items-center"
                                variants={fadeInScale}
                            >
                                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-[#D4AF37]">
                                    <Building2 size={18} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Service Types</h3>
                                    <p className="text-sm text-gray-300">
                                        Turnkey Construction • Grey Structure • Finishing &amp; Interiors • Renovation
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.form
                            id="contact-form"
                            className="lg:col-span-2 bg-white border border-gray-200 p-8 lg:p-10"
                            variants={fadeInScale}
                            onSubmit={(e) => {
                                e.preventDefault()
                                // TODO: handle form submit (API call / email service)
                            }}
                        >
                            <div className="grid gap-6 md:grid-cols-2 mb-6">
                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                        placeholder="Enter your full name"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                        placeholder="you@example.com"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                        placeholder="+92 ..."
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Project Type
                                    </label>
                                    <select
                                        className="w-full border border-gray-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                        defaultValue=""
                                        required
                                    >
                                        <option value="" disabled>
                                            Select project type
                                        </option>
                                        <option>New House Construction</option>
                                        <option>Renovation / Remodeling</option>
                                        <option>Grey Structure Only</option>
                                        <option>Finishing &amp; Interiors</option>
                                        <option>Commercial Project</option>
                                        <option>Other</option>
                                    </select>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        City / Project Location
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                        placeholder="e.g. DHA Lahore, Bahria Town Karachi"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Approximate Budget (PKR)
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                        placeholder="e.g. 2–3 Crore"
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                className="mb-8"
                                variants={itemVariants}
                            >
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Project Details
                                </label>
                                <textarea
                                    rows={6}
                                    required
                                    className="w-full border border-gray-200 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                    placeholder="Share your plot size, number of floors, preferred style, and any specific requirements..."
                                />
                            </motion.div>

                            <motion.div
                                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between"
                                variants={containerVariants}
                            >
                                <motion.button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3 text-sm font-semibold tracking-wide uppercase hover:bg-gray-900 transition-colors duration-200"
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.35)'
                                    }}
                                    whileTap={{ scale: 0.96 }}
                                >
                                    <Send size={18} />
                                    Submit Inquiry
                                </motion.button>

                                <motion.p
                                    className="text-xs text-gray-500 max-w-sm"
                                    variants={itemVariants}
                                >
                                    By submitting this form, you agree to be contacted by Hassan Builders
                                    regarding your project. Your information is kept strictly confidential
                                    and is never shared with third parties.
                                </motion.p>
                            </motion.div>
                        </motion.form>
                    </motion.div>
                </div>
            </section>


            {/* Map / Visit Us */}
            <section
                ref={mapRef}
                className="py-20 bg-gray-50"
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="grid gap-10 lg:grid-cols-2 items-center"
                        variants={staggerGrid}
                        initial="hidden"
                        animate={mapInView ? 'visible' : 'hidden'}
                    >
                        <motion.div variants={fadeInUp}>
                            <div className="flex items-center mb-4">
                                <div className="h-px w-12 bg-[#D4AF37] mr-4" />
                                <span className="text-gray-900 font-medium uppercase tracking-wider">
                                    Visit Us
                                </span>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                Plan a Visit to Our
                                <span className="text-[#D4AF37]"> Office</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Prefer an in-person discussion? You&apos;re welcome to visit our Lahore head
                                office. Schedule an appointment in advance so our team can prepare a
                                tailored presentation for your project.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex gap-2">
                                    <span className="mt-1 text-[#D4AF37]">
                                        <Target size={16} />
                                    </span>
                                    <span>Review sample drawings, finishes, and completed project photos.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 text-[#D4AF37]">
                                        <Award size={16} />
                                    </span>
                                    <span>Discuss budget ranges, timelines, and construction options.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 text-[#D4AF37]">
                                        <Users size={16} />
                                    </span>
                                    <span>Meet directly with our architects, engineers, and project leads.</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="bg-white border border-gray-200 h-80 lg:h-96 relative overflow-hidden"
                            variants={fadeInScale}
                        >
                            {/* Map placeholder – replace src with your actual Google Maps embed */}
                            <iframe
                                title="Hassan Builders Head Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.6266912888213!2d71.50519609999999!3d30.247720400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b35e601584c4b%3A0xf50bae70e807137e!2sANU%20Architects%20(Aakif%20%26%20Usama%20Architects)%20%7C%20ANU%20Architects%20%7C%20Top%20Architecture%20%26%20Interior%20Designer%20Firm%20in%20Multan!5e0!3m2!1sen!2s!4v1769682349685!5m2!1sen!2s"
                                className="absolute inset-0 w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section
                ref={faqRef}
                className="py-20 bg-white"
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-14"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={faqInView ? 'visible' : 'hidden'}
                    >
                        <div className="flex items-center justify-center mb-4">
                            <div className="h-px w-12 bg-[#D4AF37] mr-4" />
                            <span className="text-gray-900 font-medium uppercase tracking-wider">
                                FAQ
                            </span>
                            <div className="h-px w-12 bg-[#D4AF37] ml-4" />
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Questions About
                            <span className="text-[#D4AF37]"> Getting Started?</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Here are answers to some of the most common questions clients ask
                            when they first contact Hassan Builders.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid gap-6 md:grid-cols-2"
                        variants={staggerGrid}
                        initial="hidden"
                        animate={faqInView ? 'visible' : 'hidden'}
                    >
                        {faqs.map((faq) => (
                            <motion.div
                                key={faq.question}
                                variants={fadeInScale}
                            >
                                <details className="group bg-gray-50 border border-gray-200 p-5 cursor-pointer">
                                    <summary className="flex items-center justify-between gap-4 list-none">
                                        <span className="text-sm font-semibold text-gray-900">
                                            {faq.question}
                                        </span>
                                        <ChevronRight
                                            size={18}
                                            className="text-gray-500 transition-transform duration-200 group-open:rotate-90"
                                        />
                                    </summary>
                                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </details>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                ref={ctaRef}
                className="py-20"
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="bg-black py-16 px-8 text-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
                            variants={fadeInUp}
                            initial="hidden"
                            animate={ctaInView ? 'visible' : 'hidden'}
                        >
                            Ready to Schedule a
                            <br />
                            <span className="text-[#D4AF37]"> Consultation or Site Visit?</span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
                            variants={fadeInUp}
                            initial="hidden"
                            animate={ctaInView ? 'visible' : 'hidden'}
                        >
                            Share your project details through our contact form or connect with us
                            directly via phone or WhatsApp. Our team will guide you through the
                            next steps and help you plan with confidence.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            variants={containerVariants}
                            initial="hidden"
                            animate={ctaInView ? 'visible' : 'hidden'}
                        >
                            <motion.a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-[#C19C30] transition-colors duration-200"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 20px 40px rgba(212,175,55,0.3)'
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Target size={18} />
                                Request a Call Back
                            </motion.a>

                            <motion.a
                                href="tel:+923346000900"
                                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 20px 40px rgba(255,255,255,0.1)'
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Phone size={18} />
                                Call Now
                            </motion.a>

                            <motion.a
                                href="https://wa.me/923346000900?text=Hi%2C%20I%27m%20interested"
                                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-gray-100 transition-colors duration-200"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 20px 40px rgba(255,255,255,0.1)'
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <MessageCircle size={18} />
                                WhatsApp Us
                            </motion.a>
                        </motion.div>

                        <motion.div
                            className="mt-10 flex flex-wrap justify-center gap-6 text-gray-400 text-xs"
                            variants={fadeInUp}
                            initial="hidden"
                            animate={ctaInView ? 'visible' : 'hidden'}
                        >
                            <div className="flex items-center gap-2">
                                <Award size={14} className="text-[#D4AF37]" />
                                <span>Premium Quality Construction</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={14} className="text-[#D4AF37]" />
                                <span>Dedicated Project Teams</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Heart size={14} className="text-[#D4AF37]" />
                                <span>Client-First Approach</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}