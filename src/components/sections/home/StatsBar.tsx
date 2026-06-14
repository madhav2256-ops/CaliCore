import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Star, Users, Dumbbell, Calendar } from 'lucide-react'

const stats = [
  { icon: Users, value: 1800, suffix: '+', label: 'Members', color: 'text-accent-gold' },
  { icon: Star, value: 5.0, decimals: 1, suffix: '★', label: 'Google Rating', color: 'text-accent-gold' },
  { icon: Dumbbell, value: 9, suffix: '', label: 'Disciplines', color: 'text-accent-gold' },
  { icon: Calendar, value: 2026, suffix: '', label: 'Established', color: 'text-accent-gold', noAnimate: true },
]

export function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="bg-bg-surface border-y border-border">
      <div className="container-site py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <stat.icon size={20} className="text-accent mb-3" />
              <span
                className={`text-3xl md:text-4xl font-bold ${stat.color}`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {inView && !stat.noAnimate ? (
                  <CountUp
                    end={stat.value}
                    decimals={stat.decimals || 0}
                    duration={2}
                    suffix={stat.suffix}
                  />
                ) : stat.noAnimate ? (
                  `${stat.value}`
                ) : (
                  '0'
                )}
              </span>
              <span className="text-text-secondary text-xs uppercase tracking-wider mt-1" style={{ fontFamily: 'var(--font-label)' }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
