import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { testimonials } from '@/data/testimonials'

export function TestimonialsRow() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="py-[var(--section-py)] bg-bg-primary">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <EyebrowLabel className="mb-6">What They Say</EyebrowLabel>
          <h2 style={{ fontSize: 'var(--text-h1)', fontFamily: 'var(--font-display)' }}>
            REAL <span className="fire-gradient-text">REVIEWS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="bg-bg-primary p-8 md:p-10 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={14} className="text-accent-gold" fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-primary text-base leading-relaxed mb-8 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <span
                  className="text-text-secondary text-xs uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  — {t.author}
                </span>
                <span className="text-text-muted text-xs block mt-1">
                  {t.role} · Google Review
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
