import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { Flame, GraduationCap, Users } from 'lucide-react'

const pillars = [
  {
    number: '01',
    title: 'Calisthenics First',
    description: 'Master your own bodyweight before reaching for a machine. Build raw, functional strength that transfers to every movement.',
    icon: Flame,
  },
  {
    number: '02',
    title: 'Expert Coaching',
    description: 'Professional coaching for every level. Structured, skill-based programs designed to push your limits safely.',
    icon: GraduationCap,
  },
  {
    number: '03',
    title: 'Community Driven',
    description: 'Every session is about learning, connecting, and evolving together. A high-energy environment where champions rise.',
    icon: Users,
  },
]

export function PhilosophySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="py-[var(--section-py)] bg-bg-primary">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <EyebrowLabel className="mb-8">Our Philosophy</EyebrowLabel>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'var(--text-h1)', fontFamily: 'var(--font-display)' }}
              className="mb-2"
            >
              WE DON'T JUST
              <br />
              TRAIN <span className="fire-gradient-text">BODIES.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-secondary text-2xl md:text-3xl italic mb-12"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              we forge discipline.
            </motion.p>

            <div className="space-y-8">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="flex gap-5"
                >
                  <div className="shrink-0">
                    <span
                      className="text-accent-gold text-3xl font-bold"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {pillar.number}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-text-primary text-lg mb-2"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image placeholder — industrial gym interior */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-bg-surface rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <img src="/logo.png" alt="CaliCore" className="w-24 h-24 mx-auto mb-4 opacity-30" />
                  <p className="text-text-muted text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-label)' }}>
                    Training facility
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 blur-[60px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
