import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { testimonials } from '@/data/testimonials'

export function TestimonialsRow() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  const cardHover = {
    scale: 1.02,
    borderColor: 'rgba(255, 77, 28, 0.2)',
    boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.6)',
    transition: { duration: 0.3 }
  }

  return (
    <section ref={ref} className="py-[var(--section-py)] bg-bg-primary relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-radial-glow opacity-10 pointer-events-none" />

      <div className="container-site relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <SectionLabel>Community</SectionLabel>
          <h2
            className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-text-primary mt-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            REAL <span className="text-accent">REVIEWS</span>.
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={cardHover}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:bg-white/[0.01] transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Quote Icon watermark */}
              <Quote size={40} className="absolute top-4 right-4 text-white/[0.02] pointer-events-none" />

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={13} className="fill-accent-gold text-accent-gold" />
                  ))}
                </div>

                {/* Text Quote */}
                <p className="text-text-primary text-sm md:text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author footer info */}
              <div className="border-t border-white/5 pt-4 mt-auto">
                <span
                  className="text-text-secondary text-xs uppercase tracking-wider font-bold block"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  — {t.author}
                </span>
                <span className="text-text-muted text-[10px] uppercase font-mono block mt-0.5">
                  {t.role} · Google Business Rating
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
