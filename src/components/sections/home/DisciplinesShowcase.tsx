import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { disciplines } from '@/data/disciplines'
import { siteConfig } from '@/data/siteConfig'

export function DisciplinesShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-[var(--section-py)] bg-bg-surface">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <EyebrowLabel className="mb-6">Our Disciplines</EyebrowLabel>
          <h2 style={{ fontSize: 'var(--text-h1)', fontFamily: 'var(--font-display)' }}>
            WHAT WE <span className="fire-gradient-text">TEACH</span>
          </h2>
        </motion.div>

        {/* Asymmetric editorial grid */}
        <div className="space-y-0">
          {/* Featured large item */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border mb-px group cursor-pointer hover:border-accent/30 transition-colors duration-500"
          >
            <div className="aspect-[16/10] bg-bg-elevated relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[120px] md:text-[180px] font-bold text-text-primary/[0.03]" style={{ fontFamily: 'var(--font-display)' }}>
                  {disciplines[0].number}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-surface/50" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-accent-gold text-xs uppercase tracking-[0.2em] mb-3" style={{ fontFamily: 'var(--font-label)' }}>
                {disciplines[0].number} / STRENGTH
              </span>
              <h3 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                {disciplines[0].name}
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                {disciplines[0].fullDescription}
              </p>
              <Link
                to="/classes"
                className="inline-flex items-center gap-2 text-accent text-sm uppercase tracking-wider group-hover:gap-3 transition-all duration-300"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Explore Program <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Alternating medium items */}
          {disciplines.slice(1).map((discipline, i) => (
            <motion.div
              key={discipline.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className={`grid grid-cols-1 md:grid-cols-3 gap-0 border border-border mb-px group cursor-pointer hover:border-accent/30 transition-colors duration-500 ${
                i % 2 === 0 ? '' : 'md:direction-rtl'
              }`}
            >
              {/* Number + visual block */}
              <div className={`aspect-[16/10] md:aspect-auto bg-bg-elevated relative overflow-hidden ${i % 2 !== 0 ? 'md:order-2 md:col-span-1' : ''}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[80px] md:text-[100px] font-bold text-text-primary/[0.03]" style={{ fontFamily: 'var(--font-display)' }}>
                    {discipline.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`md:col-span-2 p-6 md:p-8 flex flex-col justify-center ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                <span className="text-accent-gold text-xs uppercase tracking-[0.2em] mb-2" style={{ fontFamily: 'var(--font-label)' }}>
                  {discipline.number} / {discipline.name.toUpperCase().split(' ')[0]}
                </span>
                <h3 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {discipline.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {discipline.shortDescription}
                </p>
                <Link
                  to="/classes"
                  className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-wider group-hover:gap-3 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* CTA tile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="border border-accent/30 bg-gradient-to-br from-accent/10 to-bg-surface p-8 md:p-12 text-center"
          >
            <h3 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              START <span className="fire-gradient-text">TRAINING</span> TODAY
            </h3>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Join {siteConfig.stats.members} athletes who chose bodyweight mastery over machines.
            </p>
            <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-accent text-white font-semibold uppercase tracking-wider rounded-sm ember-glow hover:bg-accent-hover transition-all duration-300" style={{ fontFamily: 'var(--font-label)' }}>
                Book Free Trial
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
