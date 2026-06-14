import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Clock, Send } from 'lucide-react'
import { Instagram } from '@/components/ui/Instagram'
import { SEO } from '@/lib/seo'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { PageTransition } from '@/components/layout/PageTransition'
import { siteConfig } from '@/data/siteConfig'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <PageTransition>
      <SEO
        title="Contact Us | CaliCore Academy — Laxmi Nagar, Delhi"
        description="Get in touch with CaliCore Academy. Visit us at F215, Mangal Bazar, Laxmi Nagar, Delhi. Call +91 80762 41590 or message on WhatsApp."
        url="/contact"
      />
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="py-[var(--section-py)] bg-bg-primary">
          <div className="container-site">
            <EyebrowLabel className="mb-8">Get In Touch</EyebrowLabel>
            <h1 style={{ fontSize: 'var(--text-hero)', fontFamily: 'var(--font-display)' }} className="mb-6">
              CONTACT <span className="fire-gradient-text">US</span>
            </h1>
            <p className="text-text-secondary text-xl max-w-3xl leading-relaxed">
              Ready to start? Have questions? Walk in, call, or message us — we're here to help you begin your journey.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section ref={ref} className="py-[var(--section-py)] bg-bg-surface">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Info */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-sm bg-bg-elevated border border-border flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>Location</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{siteConfig.address}</p>
                      <a
                        href={siteConfig.mapDirections}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent text-xs uppercase tracking-wider mt-2 inline-block hover:underline"
                        style={{ fontFamily: 'var(--font-label)' }}
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-sm bg-bg-elevated border border-border flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>Phone / WhatsApp</h3>
                      <a href={`tel:${siteConfig.phone}`} className="text-text-secondary text-sm hover:text-text-primary transition-colors">
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-sm bg-bg-elevated border border-border flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>Hours</h3>
                      <p className="text-text-secondary text-sm">Morning: {siteConfig.hours.morning}</p>
                      <p className="text-text-secondary text-sm">Evening: {siteConfig.hours.evening}</p>
                      <p className="text-text-muted text-sm mt-1">Sunday Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-sm bg-bg-elevated border border-border flex items-center justify-center shrink-0">
                      <Instagram size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>Follow Us</h3>
                      <a
                        href={siteConfig.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary text-sm hover:text-accent transition-colors"
                      >
                        @calicore1
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-bg-primary border border-border p-8 md:p-10 rounded-sm">
                  <h3 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                    SEND US A MESSAGE
                  </h3>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="text-text-secondary text-xs uppercase tracking-wider block mb-2" style={{ fontFamily: 'var(--font-label)' }}>
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-bg-elevated border border-border rounded-sm px-4 py-3 text-text-primary text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-text-secondary text-xs uppercase tracking-wider block mb-2" style={{ fontFamily: 'var(--font-label)' }}>
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-bg-elevated border border-border rounded-sm px-4 py-3 text-text-primary text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="+91"
                      />
                    </div>
                    <div>
                      <label className="text-text-secondary text-xs uppercase tracking-wider block mb-2" style={{ fontFamily: 'var(--font-label)' }}>
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full bg-bg-elevated border border-border rounded-sm px-4 py-3 text-text-primary text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                        placeholder="What are you interested in?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-accent text-white font-semibold uppercase tracking-wider rounded-sm text-sm ember-glow hover:bg-accent-hover transition-all duration-300 flex items-center justify-center gap-2"
                      style={{ fontFamily: 'var(--font-label)' }}
                    >
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-[400px] bg-bg-elevated">
          <iframe
            src={siteConfig.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.8)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CaliCore Academy location map"
          />
        </section>
      </main>
    </PageTransition>
  )
}
