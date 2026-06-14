import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { PageTransition } from '@/components/layout/PageTransition'
import { disciplines } from '@/data/disciplines'
import { siteConfig } from '@/data/siteConfig'
import { LazyImage } from '@/components/ui/LazyImage'
import { useActiveOnScroll } from '@/hooks/useActiveOnScroll'

export default function Classes() {
  const activeSlugs = useActiveOnScroll('.discipline-list-card')

  // Categories helper mapping
  const categories: Record<string, string> = {
    calisthenics: 'STRENGTH',
    gymnastics: 'BALANCE',
    'mma-boxing': 'COMBAT',
    yoga: 'FLEXIBILITY',
    'kids-power': 'YOUTH',
    'female-batch': 'WOMEN ONLY',
    'core-strength': 'FOUNDATION',
    endurance: 'METABOLIC',
  }

  const cardHover: any = {
    scale: 1.015,
    borderColor: 'rgba(255, 77, 28, 0.25)',
    boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.7)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }

  return (
    <PageTransition>
      <SEO
        title="Programs & Classes | CaliCore Academy — 8 Disciplines"
        description="Explore CaliCore Academy's 8 machine-free disciplines in Laxmi Nagar: Calisthenics, Gymnastics, MMA & Boxing, Yoga, Kids Power, Female Batch, Core Strength, and Endurance."
        url="/classes"
      />

      <main id="main-content" className="bg-bg-primary overflow-hidden">
        {/* Header Hero */}
        <section className="bg-bg-primary text-text-primary relative overflow-hidden" style={{ paddingTop: 'clamp(6.5rem, 10vw, 9.5rem)', paddingBottom: 'var(--section-py-sm)' }}>
          <div className="absolute inset-0 bg-radial-glow opacity-25 pointer-events-none" />
          <div className="container-site relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <SectionLabel>Our Programs</SectionLabel>
              <h1 className="font-display font-black text-5xl md:text-7xl uppercase leading-none tracking-tighter text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                MASTER YOUR <br />
                <span className="text-accent orange-glow">BODYWEIGHT</span>
              </h1>
              <p className="text-sm md:text-base text-text-secondary max-w-2xl leading-relaxed pt-2">
                8 Elite Disciplines. Zero Machines. We build natural capability and structural force through bodyweight gymnastics, calisthenics, and combat training.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Classes List Grid */}
        <section className="bg-bg-primary text-text-primary relative overflow-hidden" style={{ paddingBottom: 'var(--section-py)' }}>
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {disciplines.map((d) => {
                const category = categories[d.slug] || 'PERFORMANCE'
                const isActive = activeSlugs.includes(d.slug)
                const isFlagship = d.slug === 'calisthenics' || d.slug === 'gymnastics'

                return (
                  <motion.div
                    key={d.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    whileHover={cardHover}
                    animate={isActive ? cardHover : undefined}
                    className={`glass rounded-2xl overflow-hidden border transition-all duration-300 relative flex flex-col h-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] discipline-list-card ${
                      isActive ? 'border-accent/25 bg-white/[0.01]' : 'border-white/5 hover:border-accent/20'
                    }`}
                    data-slug={d.slug}
                  >
                    <a
                      href={siteConfig.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col sm:flex-row h-full cursor-pointer"
                    >
                      {/* Left Image Area */}
                      {d.heroImage && (
                        <div className="relative sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden bg-bg-elevated">
                          <LazyImage
                            src={d.heroImage}
                            alt={d.name}
                            width={350}
                            height={350}
                            className={`w-full h-full object-cover transition-all duration-700 ${
                              isActive
                                ? 'scale-103 grayscale-0 opacity-90'
                                : 'opacity-40 grayscale group-hover:scale-103 group-hover:grayscale-0 group-hover:opacity-90'
                            }`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-surface/60 hidden sm:block pointer-events-none" />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-surface/60 sm:hidden pointer-events-none" />
                        </div>
                      )}

                      {/* Right Content Area */}
                      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                        <div>
                          {/* Eyebrow details */}
                          <div className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase mb-3 font-bold flex items-center gap-2 leading-none">
                            <span>{d.number}</span>
                            <span>/</span>
                            <span>{category}</span>
                            {isFlagship && (
                              <span className="ml-auto bg-accent/15 text-accent text-[9px] font-extrabold px-2 py-0.5 rounded tracking-normal">
                                FLAGSHIP
                              </span>
                            )}
                          </div>

                          {/* Title Header */}
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">{d.icon}</span>
                            <h2 className={`font-display font-black text-xl uppercase tracking-tight transition-colors duration-300 ${
                              isActive ? 'text-accent' : 'text-text-primary group-hover:text-accent'
                            }`} style={{ fontFamily: 'var(--font-display)' }}>
                              {d.name}
                            </h2>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-text-secondary leading-relaxed mb-4">
                            {d.fullDescription}
                          </p>
                        </div>

                        {/* Levels & Enquire */}
                        <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-4">
                          <div className="flex flex-wrap gap-1.5">
                            {d.levels?.map((lvl) => (
                              <span
                                key={lvl}
                                className={`px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider rounded border transition-colors ${
                                  isActive
                                    ? 'border-accent/30 text-text-primary bg-accent/5'
                                    : 'text-text-secondary border-white/5 group-hover:border-accent/30 group-hover:text-text-primary'
                                }`}
                              >
                                {lvl}
                              </span>
                            ))}
                          </div>
                          
                          <div className={`inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                            isActive ? 'text-text-primary' : 'text-accent group-hover:text-text-primary'
                          }`}>
                            Join This Program
                            <ArrowRight size={14} className={`transform transition-transform ${
                              isActive ? 'translate-x-1' : 'group-hover:translate-x-1'
                            }`} />
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
