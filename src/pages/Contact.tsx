import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { MapPin, Phone, Clock, ArrowRight, ArrowLeft, CheckCircle, Send } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { siteConfig } from '@/data/siteConfig'

interface FormData {
  name: string
  phone: string
  interest: string
  message: string
}

export default function Contact() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, trigger } = useForm<FormData>()

  const onSubmit = (_data: FormData) => {
    // DEV NOTE: Integrate lead submission API/endpoints here
    setSubmitted(true)
  }

  const nextStep = async () => {
    const valid = await trigger(['name', 'phone'])
    if (valid) setStep(2)
  }

  // Animation configurations
  const fadeIn: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <PageTransition>
      <SEO
        title="Contact Us | CaliCore Academy — Laxmi Nagar Delhi"
        description="Connect with CaliCore Academy. Visit us at F215 Mangal Bazar, Laxmi Nagar. Book your free batch trial session via phone, WhatsApp, or form."
        url="/contact"
      />

      {/* Ambient Radial Background Shadows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-15">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
      </div>

      {/* Header Section */}
      <section className="relative z-10 bg-bg-primary" style={{ paddingTop: 'clamp(6rem, 10vw, 9rem)', paddingBottom: 'var(--section-py-sm)' }}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>Connect With Us</SectionLabel>
            <h1 className="mt-4 font-display font-black tracking-tighter text-text-primary uppercase leading-none" style={{ fontSize: 'var(--text-h1)', fontFamily: 'var(--font-display)' }}>
              LET'S <span className="text-accent orange-glow">FORGE</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Form & details section */}
      <section className="relative z-10 bg-bg-primary" style={{ paddingBottom: 'var(--section-py)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column: Details & Map */}
            <motion.div {...fadeIn} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Visit Us */}
                <div className="glass p-5 rounded-2xl border border-white/5 hover:border-accent/20 hover:bg-white/[0.01] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 border border-accent/20">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-text-primary uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-label)' }}>Visit Us</h3>
                  <p className="text-[11px] text-text-secondary leading-relaxed">
                    {siteConfig.address}
                  </p>
                  <a
                    href={siteConfig.mapDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent font-mono text-[9px] tracking-wider uppercase font-semibold mt-3 hover:underline"
                  >
                    Directions →
                  </a>
                </div>

                {/* Call Us */}
                <div className="glass p-5 rounded-2xl border border-white/5 hover:border-accent/20 hover:bg-white/[0.01] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 border border-accent/20">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-text-primary uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-label)' }}>Call Us</h3>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    className="block text-xs text-text-secondary hover:text-accent transition-colors"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                  <span className="text-[10px] text-text-muted mt-2 block font-mono">WhatsApp Enquiries Open</span>
                </div>

                {/* Hours */}
                <div className="glass p-5 rounded-2xl border border-white/5 hover:border-accent/20 hover:bg-white/[0.01] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 border border-accent/20">
                    <Clock size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-text-primary uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-label)' }}>Hours</h3>
                  <p className="text-[11px] text-text-secondary leading-tight">Mon – Sat:</p>
                  <p className="text-[10px] text-text-secondary mt-1 leading-none">06:00 – 11:00</p>
                  <p className="text-[10px] text-text-secondary mt-1 leading-none">16:00 – 22:00</p>
                  <p className="text-[10px] text-text-muted mt-2 leading-none font-mono">Sunday: Closed</p>
                </div>
              </div>

              {/* Embedded dark filter map */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden glass border border-white/5">
                <iframe
                  src={siteConfig.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.85)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CaliCore Academy location map"
                  className="grayscale opacity-75 contrast-125 transition-transform duration-700 hover:scale-[1.01]"
                />
              </div>
            </motion.div>

            {/* Right Column: Interactive multi-step form */}
            <motion.div {...fadeIn} className="glass rounded-2xl border border-white/5 p-8 md:p-10 flex flex-col h-full justify-between">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 flex flex-col items-center justify-center my-auto"
                >
                  <CheckCircle size={56} className="text-accent mb-4 orange-glow" />
                  <h3 className="font-display font-bold text-2xl text-text-primary uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                    Message Logged!
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-text-secondary leading-relaxed max-w-sm">
                    Thank you. We have received your batch enquiry request. A certified coach will reach out to you within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStep(1)
                      setSubmitted(false)
                    }}
                    className="mt-8 px-6 py-3 bg-accent text-white font-display font-bold text-xs uppercase tracking-widest rounded-lg glowing-cta"
                    style={{ fontFamily: 'var(--font-label)' }}
                  >
                    Submit Another Query
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Step progress bar */}
                  <div className="flex gap-4 mb-8">
                    <div className="flex-grow h-1 bg-white/5 rounded-full relative overflow-hidden">
                      <div className={`absolute top-0 left-0 bottom-0 right-0 bg-accent transition-transform duration-300 ${step >= 1 ? 'translate-x-0' : '-translate-x-full'}`} />
                      <div className={`absolute -top-6 left-0 font-mono text-[9px] font-bold uppercase tracking-wider ${step === 1 ? 'text-accent' : 'text-text-secondary/40'}`}>
                        01 / Info
                      </div>
                    </div>
                    <div className="flex-grow h-1 bg-white/5 rounded-full relative overflow-hidden">
                      <div className={`absolute top-0 left-0 bottom-0 right-0 bg-accent transition-transform duration-300 ${step >= 2 ? 'translate-x-0' : '-translate-x-full'}`} />
                      <div className={`absolute -top-6 left-0 font-mono text-[9px] font-bold uppercase tracking-wider ${step === 2 ? 'text-accent' : 'text-text-secondary/40'}`}>
                        02 / Interest
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 flex-1 flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 15 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <h3 className="font-display font-bold text-base text-text-primary uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-label)' }}>
                            Personal Details
                          </h3>
                          
                          {/* Name */}
                          <div className="flex flex-col gap-1.5 focus-within:text-accent">
                            <label htmlFor="name" className="font-mono text-[9px] text-text-secondary uppercase tracking-widest font-bold">
                              Name *
                            </label>
                            <input
                              id="name"
                              aria-required="true"
                              {...register('name', { required: 'Name is required' })}
                              className="w-full bg-transparent border-t-0 border-x-0 border-b border-white/10 focus:border-accent focus:ring-0 px-1 py-2 text-text-primary transition-colors text-sm focus:outline-none"
                              placeholder="Your full name"
                            />
                            {errors.name && <p role="alert" className="mt-1 text-[10px] text-red-400 font-mono">{errors.name.message}</p>}
                          </div>

                          {/* Phone */}
                          <div className="flex flex-col gap-1.5 focus-within:text-accent">
                            <label htmlFor="phone" className="font-mono text-[9px] text-text-secondary uppercase tracking-widest font-bold">
                              Phone / WhatsApp *
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              aria-required="true"
                              {...register('phone', {
                                required: 'Phone number is required',
                                pattern: { value: /^[0-9+\s-]{10,15}$/, message: 'Invalid phone number format' }
                              })}
                              className="w-full bg-transparent border-t-0 border-x-0 border-b border-white/10 focus:border-accent focus:ring-0 px-1 py-2 text-text-primary transition-colors text-sm focus:outline-none"
                              placeholder="+91 80762 41590"
                            />
                            {errors.phone && <p role="alert" className="mt-1 text-[10px] text-red-400 font-mono">{errors.phone.message}</p>}
                          </div>

                          <button
                            type="button"
                            onClick={nextStep}
                            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-display font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-accent-hover transition-all glowing-cta mt-4"
                            style={{ fontFamily: 'var(--font-label)' }}
                          >
                            Next <ArrowRight size={14} />
                          </button>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -15 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <h3 className="font-display font-bold text-base text-text-primary uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-label)' }}>
                            Discipline & Goals
                          </h3>
                          
                          {/* Interest Dropdown */}
                          <div className="flex flex-col gap-1.5 focus-within:text-accent">
                            <label htmlFor="interest" className="font-mono text-[9px] text-text-secondary uppercase tracking-widest font-bold">
                              Primary Discipline
                            </label>
                            <select
                              id="interest"
                              {...register('interest')}
                              className="w-full bg-transparent border-t-0 border-x-0 border-b border-white/10 focus:border-accent focus:ring-0 px-1 py-2 text-text-primary transition-colors text-sm cursor-pointer focus:outline-none"
                            >
                              <option value="" className="bg-bg-surface text-text-primary">Select a discipline</option>
                              <option value="calisthenics" className="bg-bg-surface text-text-primary">Calisthenics & Bodyweight</option>
                              <option value="gymnastics" className="bg-bg-surface text-text-primary">Gymnastics (Tumbling/Flips)</option>
                              <option value="mma-boxing" className="bg-bg-surface text-text-primary">MMA & Boxing</option>
                              <option value="yoga" className="bg-bg-surface text-text-primary">Yoga & Mobility</option>
                              <option value="kids-power" className="bg-bg-surface text-text-primary">Kids Power batch (Ages 4+)</option>
                              <option value="female-batch" className="bg-bg-surface text-text-primary">Female batch</option>
                              <option value="core-endurance" className="bg-bg-surface text-text-primary">Core Strength & Endurance</option>
                            </select>
                          </div>

                          {/* Message */}
                          <div className="flex flex-col gap-1.5 focus-within:text-accent">
                            <label htmlFor="message" className="font-mono text-[9px] text-text-secondary uppercase tracking-widest font-bold">
                              Message / Fitness Goals
                            </label>
                            <textarea
                              id="message"
                              rows={3}
                              {...register('message')}
                              className="w-full bg-transparent border-t-0 border-x-0 border-b border-white/10 focus:border-accent focus:ring-0 px-1 py-2 text-text-primary transition-colors text-sm resize-none focus:outline-none"
                              placeholder="Tell us what you are aiming to learn..."
                            />
                          </div>

                          <div className="flex gap-4 pt-4">
                            <button
                              type="button"
                              onClick={() => setStep(1)}
                              className="flex items-center justify-center gap-2 px-4 py-3 border border-white/10 text-text-secondary rounded-lg hover:border-white/20 hover:text-text-primary transition-all text-xs font-display font-bold uppercase tracking-wider"
                              style={{ fontFamily: 'var(--font-label)' }}
                            >
                              <ArrowLeft size={14} /> Back
                            </button>
                            <button
                              type="submit"
                              className="flex-grow flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-display font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-accent-hover transition-all glowing-cta"
                              style={{ fontFamily: 'var(--font-label)' }}
                            >
                              Send Enquiry <Send size={14} />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <p className="font-mono text-[8px] text-text-muted text-center uppercase tracking-widest pt-4 border-t border-white/5">
                      Expected response time: Under 2 hours via phone/WhatsApp
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
