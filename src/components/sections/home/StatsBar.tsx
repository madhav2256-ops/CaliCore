import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Users, Dumbbell, Calendar } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

const statsData = [
  {
    icon: Users,
    value: 1800,
    suffix: '+',
    label: 'Members Trained',
    sublabel: 'Ages 4 to advanced',
    glowColor: 'rgba(255, 77, 28, 0.15)',
  },
  {
    icon: Star,
    value: 50, // 5.0 represented as 50 for count animation
    suffix: '★',
    label: 'Google Rating',
    sublabel: `${siteConfig.rating.count} reviews`,
    glowColor: 'rgba(244, 166, 35, 0.15)',
    isDecimal: true,
  },
  {
    icon: Dumbbell,
    value: 7,
    suffix: '',
    label: 'Disciplines Offered',
    sublabel: 'Pure bodyweight focus',
    glowColor: 'rgba(255, 77, 28, 0.15)',
  },
  {
    icon: Calendar,
    value: 2026,
    suffix: '',
    label: 'Launch Year',
    sublabel: 'April 2026 · New & Growing',
    glowColor: 'rgba(244, 166, 35, 0.12)',
    noAnimate: true,
  },
]

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const durationMs = duration * 1000

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const easeOutQuad = (t: number) => t * (2 - t)
      setCount(Math.round(easeOutQuad(progress) * end))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [end, duration, start])

  return count
}

function StatCard({ stat, index, inView }: { stat: typeof statsData[number]; index: number; inView: boolean }) {
  const count = useCountUp(stat.value, 1.8, inView)
  const displayVal = stat.noAnimate
    ? stat.value.toString()
    : stat.isDecimal
      ? (count / 10).toFixed(1)
      : count.toLocaleString()

  const Icon = stat.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full"
    >
      {/* Orange vertical left indicator glow line on hover */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-12 bg-accent blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 rounded-r" />

      <div className="relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-accent/20 p-6 transition-all duration-500 h-full flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
        {/* Soft radial reflection backglow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ background: `radial-gradient(circle at 10% 50%, ${stat.glowColor}, transparent 70%)` }}
        />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Icon frame styled like a glowing shield */}
          <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl text-accent bg-accent/5 border border-accent/10 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,77,28,0.4)] group-hover:scale-105 transition-all duration-300">
            <Icon size={20} className="transition-transform duration-500 group-hover:rotate-[360deg]" />
          </div>

          <div>
            <div
              className="text-4xl md:text-5xl font-black text-text-primary leading-none tracking-tight transition-colors duration-500 font-display text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-text-primary to-text-primary/70 group-hover:from-accent group-hover:to-accent-gold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {displayVal}
              {stat.suffix}
            </div>
            <div className="font-semibold text-accent-gold text-xs uppercase tracking-widest mt-2" style={{ fontFamily: 'var(--font-label)' }}>
              {stat.label}
            </div>
            <div className="text-text-secondary text-[11px] mt-1 tracking-wide">
              {stat.sublabel}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section
      ref={ref}
      className="bg-bg-primary border-t border-accent/15 border-b border-white/5 relative overflow-hidden py-10 md:py-14"
    >
      {/* Background soft lighting glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-gold opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
