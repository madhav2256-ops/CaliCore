import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { LazyImage } from '@/components/ui/LazyImage'
import { disciplines } from '@/data/disciplines'
import { siteConfig } from '@/data/siteConfig'
import { useActiveOnScroll } from '@/hooks/useActiveOnScroll'

export function DisciplinesShowcase() {
  const activeSlugs = useActiveOnScroll('.discipline-card')

  // Helper categories index matching for metadata
  const categories: Record<string, string> = {
    calisthenics: 'STRENGTH',
    'body-weight-training': 'CONDITIONING',
    gymnastics: 'BALANCE',
    'kids-gymnastics': 'YOUTH',
    yoga: 'FLEXIBILITY',
    'functional-strength-training': 'ATHLETIC',
    'self-defence': 'COMBAT',
  }

  return (
    <section className="py-[var(--section-py)] bg-bg-primary border-b border-white/5 relative overflow-hidden">
      <div className="container-site">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <SectionLabel>Classes</SectionLabel>
          <h2
            className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-text-primary leading-[1.1] mt-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            DISCIPLINE{' '}
            <span className="font-serif italic lowercase text-accent font-normal">
              showcases
            </span>.
          </h2>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {disciplines.map((d, i) => {
            const isFeatured = d.slug === 'calisthenics' || d.slug === 'gymnastics' || d.slug === 'body-weight-training'
            const isActive = activeSlugs.includes(d.slug)
            const category = categories[d.slug] || 'PERFORMANCE'

            return (
              <motion.div
                key={d.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`${isFeatured ? 'col-span-2' : 'col-span-1'}`}
              >
                <Link
                  to="/classes"
                  className="group block cursor-pointer h-full relative discipline-card animate-duration"
                  data-slug={d.slug}
                >
                  <div className={`h-full flex flex-col justify-between rounded-xl transition-all duration-300 relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] md:shadow-none ${
                    isFeatured ? 'lg:flex-row lg:items-stretch' : ''
                  } ${
                    isActive
                      ? 'border-accent/30 bg-white/[0.03]'
                      : 'bg-white/[0.01] border border-white/5 hover:border-accent/20'
                  }`}>
                    {/* Visual Container */}
                    <div className={`relative overflow-hidden bg-bg-elevated shrink-0 ${
                      isFeatured ? 'aspect-[4/3] lg:aspect-auto lg:w-1/2' : 'aspect-[4/3] w-full'
                    }`}>
                      {d.heroImage && (
                        <LazyImage
                          src={d.heroImage}
                          alt={d.name}
                          width={isFeatured ? 600 : 400}
                          height={isFeatured ? 450 : 300}
                          className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                            isActive
                              ? 'scale-105 grayscale-0'
                              : 'grayscale group-hover:scale-105 group-hover:grayscale-0'
                          }`}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      
                      {isFeatured && (
                        <div className="absolute top-0 left-0 w-1 h-full bg-accent hidden lg:block" />
                      )}
                    </div>

                    {/* Description Container */}
                    <div className={`p-5 md:p-6 flex flex-col justify-between flex-grow ${
                      isFeatured ? 'lg:w-1/2 lg:p-7' : ''
                    }`}>
                      <div>
                        {/* Eyebrow badge metadata */}
                        <div className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase mb-2 font-bold flex items-center gap-1.5">
                          <span>{d.number}</span>
                          <span>/</span>
                          <span>{category}</span>
                          {isFeatured && (
                            <span className="ml-auto bg-accent/10 text-accent text-[9px] font-extrabold px-2 py-0.5 rounded tracking-normal">
                              FLAGSHIP
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className={`font-display font-extrabold text-lg md:text-xl uppercase mb-2 tracking-tight transition-colors duration-300 ${
                          isActive
                            ? 'text-accent'
                            : 'text-text-primary group-hover:text-accent'
                        }`}
                        style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {d.name}
                        </h3>

                        {/* Summary description */}
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {d.shortDescription}
                        </p>
                      </div>

                      {/* Explore CTA action trigger */}
                      <div className={`mt-5 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                        isActive
                          ? 'text-accent'
                          : 'text-text-secondary/50 group-hover:text-accent'
                      }`}
                      style={{ fontFamily: 'var(--font-label)' }}
                      >
                        <span>EXPLORE PROGRAM</span>
                        <ArrowRight size={12} className={`transform transition-transform duration-300 ${
                          isActive ? 'translate-x-1' : 'group-hover:translate-x-1'
                        }`} />
                      </div>
                    </div>

                    {/* Bottom accent bar on hover */}
                    <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-accent transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </div>
                </Link>
              </motion.div>
            )
          })}

          {/* 8th Free Trial Lead Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-2"
          >
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer h-full relative"
            >
              <div className="h-full flex flex-col justify-between rounded-xl bg-bg-surface border border-accent-gold/20 p-6 md:p-8 text-text-primary relative overflow-hidden transition-all duration-300 min-h-[220px] lg:min-h-0 hover:border-accent-gold/50 hover:shadow-[0_10px_35px_rgba(244,166,35,0.12)] hover:scale-[1.015]">
                {/* Diagonal lines pattern overlay in subtle gold */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(244,166,35,0.02)_25%,transparent_25%,transparent_50%,rgba(244,166,35,0.02)_50%,rgba(244,166,35,0.02)_75%,transparent_75%,transparent)] bg-[length:30px_30px] opacity-20 pointer-events-none" />

                <div className="relative z-10">
                  <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-accent-gold uppercase mb-3 font-bold">
                    08 / LAUNCH PROMOTION
                  </div>
                  <h3 className="font-display font-black text-2xl md:text-3xl uppercase leading-[1.1] tracking-tight text-text-primary mb-2 transition-colors group-hover:text-accent-gold" style={{ fontFamily: 'var(--font-display)' }}>
                    START TRAINING TODAY
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed max-w-sm">
                    Book your free trial batch session. Get a special 15% discount for the first 50 members + a FREE Welcome Kit! Delhi's premier movement forge is waiting.
                  </p>
                </div>

                <div className="relative z-10 mt-6 flex items-center gap-3 font-display font-bold text-xs tracking-widest uppercase text-accent-gold transition-colors duration-300" style={{ fontFamily: 'var(--font-label)' }}>
                  <span>CLAIM FREE TRIAL NOW</span>
                  <div className="w-7 h-7 rounded-full bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center transition-all duration-300 group-hover:bg-accent-gold group-hover:text-bg-primary group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(244,166,35,0.4)]">
                    <ArrowRight size={14} className="text-accent-gold group-hover:text-bg-primary" />
                  </div>
                </div>

                {/* Bottom accent bar on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
              </div>
            </a>
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}
