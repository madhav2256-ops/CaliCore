import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useActiveOnScroll } from '@/hooks/useActiveOnScroll'

const pillars = [
  {
    id: '0',
    stat: '0%',
    label: 'WEIGHT MACHINES',
    desc: 'No treadmills. No isolation weight pulleys. Gravity is your resistance, your body is the engine.',
  },
  {
    id: '1',
    stat: '100%',
    label: 'HUMAN CAPABILITY',
    desc: 'Unlocking raw structural force. We train kinetic movement patterns, not isolated parts.',
  },
  {
    id: '2',
    stat: '360°',
    label: 'DYNAMIC MOBILITY',
    desc: 'Restoring functional joint range. Move without limitation in every physical direction.',
  },
]

export function PhilosophySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const activeIds = useActiveOnScroll('.philosophy-card')

  const fadeIn: any = {
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }

  const cardHover: any = {
    scale: 1.03,
    borderColor: 'rgba(255, 77, 28, 0.25)',
    boxShadow: '0 10px 30px -10px rgba(255, 77, 28, 0.15)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }

  return (
    <section ref={ref} className="py-[var(--section-py)] bg-bg-primary overflow-hidden border-b border-white/5 relative">
      <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Title Block */}
        <motion.div
          {...fadeIn}
          className="text-center mb-16 space-y-4"
        >
          <SectionLabel className="justify-center">Philosophy</SectionLabel>
          <h2
            className="font-display font-black text-4xl md:text-6xl text-text-primary uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            MACHINE-FREE <span className="text-accent">FORGE</span>
          </h2>
          <p className="text-accent-gold font-mono text-xs uppercase tracking-widest font-bold">
            Pure Bodyweight Mastery · Delhi's New Home for Strength
          </p>
        </motion.div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {pillars.map((item, index) => {
            const isActive = activeIds.includes(item.id)
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                whileHover={cardHover}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass p-8 md:p-10 rounded-2xl text-center flex flex-col items-center border transition-all duration-300 relative group overflow-hidden philosophy-card ${
                  isActive
                    ? 'border-accent/30 shadow-[0_10px_30px_-10px_rgba(255,77,28,0.15)] bg-white/[0.02]'
                    : 'border-white/5 hover:border-accent/20'
                }`}
                data-id={item.id}
              >
                {/* Radial Glow Highlight */}
                <div className={`absolute inset-0 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,var(--color-accent),transparent_70%)] pointer-events-none ${
                  isActive ? 'opacity-10' : 'opacity-0 group-hover:opacity-10'
                }`} />

                {/* Big Stat Metric */}
                <span
                  className={`font-display font-black text-5xl md:text-7xl text-accent block transition-transform duration-300 ${
                    isActive ? 'scale-105' : 'group-hover:scale-105'
                  }`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.stat}
                </span>

                {/* Title */}
                <h3 className="font-mono text-xs md:text-sm uppercase tracking-widest text-text-primary mt-4 font-bold">
                  {item.label}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-text-secondary mt-3 leading-relaxed max-w-xs">
                  {item.desc}
                </p>

                {/* Bottom line separator */}
                <div className={`bg-accent mt-6 transition-all duration-500 ${
                  isActive ? 'h-[2px] w-20 opacity-100' : 'h-[2px] w-12 opacity-30 group-hover:opacity-100 group-hover:w-20'
                }`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
