import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function QuoteBlock() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="py-[var(--section-py)] bg-bg-surface relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="container-site relative z-10 text-center max-w-4xl mx-auto">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-text-primary leading-tight mb-8"
            style={{ fontSize: 'var(--text-h1)', fontFamily: 'var(--font-display)' }}
          >
            "FLY HIGH.
            <br />
            <span className="fire-gradient-text">LAND STRONG.</span>"
          </p>
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto"
        >
          CaliCore isn't just a gym — it's a community. Every session is about more than reps:
          it's about learning, connecting, and evolving together. Learn. Connect. Evolve.
        </motion.p>
      </div>
    </section>
  )
}
