import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Users, BookOpen, Zap } from 'lucide-react'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'

const actionStats = [
  { icon: Users, value: '1800+', label: 'Members Trained' },
  { icon: BookOpen, value: '9', label: 'Training Programs' },
  { icon: Zap, value: 'ZERO', label: 'Machines — Equipment-light' },
]

export function ActionSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="py-[var(--section-py)] bg-bg-primary">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <EyebrowLabel>See Us In Action</EyebrowLabel>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video thumbnail */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            <div className="aspect-video bg-bg-surface rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/logo.png" alt="CaliCore Training" className="w-20 h-20 opacity-20" />
              </div>
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent transition-all duration-300 ember-glow">
                  <Play size={28} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
            </div>
            <p className="text-text-muted text-xs mt-3 uppercase tracking-wider" style={{ fontFamily: 'var(--font-label)' }}>
              Watch our athletes train
            </p>
          </motion.div>

          {/* Stat callouts */}
          <div className="space-y-8">
            {actionStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-sm bg-bg-surface border border-border flex items-center justify-center shrink-0 group-hover:border-accent/30 transition-colors duration-300">
                  <stat.icon size={22} className="text-accent" />
                </div>
                <div>
                  <span
                    className="text-3xl md:text-4xl text-accent-gold block"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-text-secondary text-sm">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
