import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export function FinalCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="py-[var(--section-py)] bg-bg-surface relative overflow-hidden">
      {/* Ember glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 blur-[120px] rounded-full" />
      <div className="noise-overlay" />

      <div className="container-site relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-4"
            style={{ fontSize: 'var(--text-hero)', fontFamily: 'var(--font-display)' }}
          >
            READY TO <span className="fire-gradient-text">RISE?</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-lg mb-10 max-w-xl mx-auto"
        >
          Limited spots available. Special launch offer for first 50 members — 15% OFF.
          Don't wait. Start your transformation today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer">
            <button
              className="px-8 py-4 bg-accent text-white font-semibold uppercase tracking-wider rounded-sm ember-glow hover:bg-accent-hover transition-all duration-300"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Book Free Trial
            </button>
          </a>
          <a href={`tel:${siteConfig.phone}`}>
            <button
              className="px-8 py-4 bg-transparent border border-text-primary/20 text-text-primary font-semibold uppercase tracking-wider rounded-sm hover:border-accent hover:text-accent transition-all duration-300 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              <Phone size={18} />
              Call Now
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
