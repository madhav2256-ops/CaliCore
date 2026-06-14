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
    glowColor: 'rgba(255, 77, 28, 0.12)',
  },
  {
    icon: Star,
    value: 50, // 5.0 represented as 50 for count animation
    suffix: '★',
    label: 'Google Rating',
    sublabel: `${siteConfig.rating.count} reviews`,
    glowColor: 'rgba(244, 166, 35, 0.12)',
    isDecimal: true,
  },
  {
    icon: Dumbbell,
    value: 8,
    suffix: '',
    label: 'Disciplines Offered',
    sublabel: 'Pure bodyweight focus',
    glowColor: 'rgba(255, 77, 28, 0.12)',
  },
  {
    icon: Calendar,
    value: 2026,
    suffix: '',
    label: 'Established Year',
    sublabel: 'March 2026 Launch',
    glowColor: 'rgba(244, 166, 35, 0.08)',
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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Orange vertical left glow line on hover */}
      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-[2px] h-10 bg-accent blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative overflow-hidden rounded-xl p-5 md:p-6 transition-all duration-300 h-full">
        {/* Soft radial reflection backglow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
          style={{ background: `radial-gradient(circle at 10% 50%, ${stat.glowColor}, transparent 70%)` }}
        />

        <div className="relative z-10 flex items-start gap-4">
          {/* Icon frame */}
          <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg text-accent bg-accent/10 group-hover:scale-110 transition-transform duration-300">
            <Icon size={18} />
          </div>

          <div>
            <div
              className="text-2xl md:text-3xl font-extrabold text-text-primary leading-none tracking-tight group-hover:text-accent transition-colors duration-300"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {displayVal}
              {stat.suffix}
            </div>
            <div className="font-semibold text-text-primary text-xs uppercase tracking-wider mt-2" style={{ fontFamily: 'var(--font-label)' }}>
              {stat.label}
            </div>
            <div className="text-text-muted text-[11px] mt-0.5 leading-none">
              {stat.sublabel}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function GoogleReviewsTrustBadge() {
  return (
    <div className="flex items-center gap-2 justify-center py-2">
      <svg width="15" height="15" viewBox="0 0 24 24" className="shrink-0">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((num) => (
          <Star key={num} size={10} className="fill-accent-gold text-accent-gold" />
        ))}
      </div>
      <span className="text-[10px] text-text-muted uppercase tracking-widest font-mono font-bold">
        {siteConfig.rating.score.toFixed(1)} Rating · {siteConfig.rating.count} Google Reviews
      </span>
    </div>
  )
}

export function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="bg-bg-surface border-t border-accent/15 border-b border-white/5 relative overflow-hidden"
    >
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-accent opacity-[0.02] blur-[90px] rounded-full pointer-events-none" />

      <div className="container-site relative z-10 py-6 md:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statsData.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        {/* Google Reviews Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 border-t border-white/5 pt-4"
        >
          <GoogleReviewsTrustBadge />
        </motion.div>
      </div>
    </section>
  )
}
