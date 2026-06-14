import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { PageTransition } from '@/components/layout/PageTransition'
import { disciplines } from '@/data/disciplines'
import { siteConfig } from '@/data/siteConfig'

export default function Classes() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <PageTransition>
      <SEO
        title="Programs & Classes | CaliCore Academy — 9 Disciplines"
        description="Explore 9 disciplines at CaliCore: Calisthenics, Gymnastics, MMA, Yoga, Kids Power, Female Batch, Core Strength, Endurance, and Self-Defense. All levels. Laxmi Nagar, Delhi."
        url="/classes"
      />
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="py-[var(--section-py)] bg-bg-primary">
          <div className="container-site">
            <EyebrowLabel className="mb-8">Programs</EyebrowLabel>
            <h1 style={{ fontSize: 'var(--text-hero)', fontFamily: 'var(--font-display)' }} className="mb-6">
              OUR <span className="fire-gradient-text">DISCIPLINES</span>
            </h1>
            <p className="text-text-secondary text-xl max-w-3xl leading-relaxed">
              From bodyweight basics to advanced aerial skills, competition training to recovery yoga.
              Find your path to mastery.
            </p>
          </div>
        </section>

        {/* Full discipline list */}
        <section ref={ref} className="bg-bg-surface">
          <div className="container-site py-[var(--section-py)]">
            <div className="space-y-0">
              {disciplines.map((discipline, i) => (
                <motion.div
                  key={discipline.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`grid grid-cols-1 md:grid-cols-3 gap-0 border border-border mb-px group ${
                    i % 2 === 0 ? '' : ''
                  }`}
                >
                  <div className={`bg-bg-elevated relative overflow-hidden min-h-[200px] ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[100px] font-bold text-text-primary/[0.04]" style={{ fontFamily: 'var(--font-display)' }}>
                        {discipline.number}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-4xl">{discipline.icon}</span>
                    </div>
                  </div>
                  <div className={`md:col-span-2 p-8 md:p-10 ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                    <span className="text-accent-gold text-xs uppercase tracking-[0.2em] block mb-3" style={{ fontFamily: 'var(--font-label)' }}>
                      {discipline.number} / {discipline.slug.toUpperCase().replace('-', ' ')}
                    </span>
                    <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                      {discipline.name}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {discipline.fullDescription}
                    </p>
                    <a
                      href={siteConfig.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300"
                      style={{ fontFamily: 'var(--font-label)' }}
                    >
                      Join This Program <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
