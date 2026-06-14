import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 })

  return (
    <section ref={ref} className="py-[var(--section-py)] bg-bg-surface relative overflow-hidden border-t border-white/5">
      {/* Background glow and diagonal patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.02)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.02)_50%,rgba(0,0,0,0.02)_75%,transparent_75%,transparent)] bg-[length:30px_30px] opacity-10 pointer-events-none" />
      <div className="noise-overlay" />

      <div className="container-site relative z-10 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-4 tracking-tighter uppercase"
            style={{ fontSize: 'var(--text-hero)', fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            READY TO <span className="text-accent orange-glow">RISE?</span>
          </h2>
        </motion.div>

        {/* Tagline details */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-sm md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Limited training slots. Special launch offer for the first 50 members — 15% OFF.
          Forge your discipline. Start your bodyweight mastery journey today.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full glowing-cta"
            >
              Book Free Trial
            </Button>
          </a>
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="w-full sm:w-auto">
            <Button
              variant="ghost"
              size="lg"
              className="w-full flex items-center justify-center gap-2 border border-white/10 hover:border-accent/40"
            >
              <Phone size={16} />
              Call {siteConfig.phoneDisplay}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
