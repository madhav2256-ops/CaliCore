import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Clock, Users, Moon } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { schedule } from '@/data/schedule'
import { cn } from '@/lib/utils'
import { useActiveOnScroll } from '@/hooks/useActiveOnScroll'
import { siteConfig } from '@/data/siteConfig'

const ACTIVE_DISCIPLINE_COLORS: Record<string, { bg: string; text: string; dot: string; border: string }> = {
  calisthenics: { bg: 'bg-accent/10', text: 'text-accent', dot: 'bg-accent', border: 'border-accent/20' },
  gymnastics: { bg: 'bg-accent-gold/10', text: 'text-accent-gold', dot: 'bg-accent-gold', border: 'border-accent-gold/20' },
}

const DAYS_WITH_SLOTS = schedule.filter((d) => d.day !== 'Sunday')

export default function Schedule() {
  const activeSlots = useActiveOnScroll('.schedule-card')

  // Find current day of the week
  const todayIndex = (() => {
    const jsDay = new Date().getDay() // 0=Sun, 1=Mon...6=Sat
    if (jsDay === 0) return 0 // Sunday -> show Monday
    return jsDay - 1 // Mon=0 ... Sat=5
  })()

  const [activeIndex, setActiveIndex] = useState(todayIndex)
  const [direction, setDirection] = useState<1 | -1>(1)

  const activeDayData = DAYS_WITH_SLOTS[activeIndex]

  const goTo = (idx: number) => {
    if (idx === activeIndex) return
    setDirection(idx > activeIndex ? 1 : -1)
    setActiveIndex(idx)
  }

  const prev = () => { if (activeIndex > 0) goTo(activeIndex - 1) }
  const next = () => { if (activeIndex < DAYS_WITH_SLOTS.length - 1) goTo(activeIndex + 1) }

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d * 30 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -30 }),
  }

  return (
    <PageTransition>
      <SEO
        title="Class Schedule & Hours | CaliCore Academy Laxmi Nagar"
        description="View CaliCore Academy's weekly training hours. Morning split sessions 6-11 AM, evening sessions 4-10 PM. Monday to Saturday. Laxmi Nagar, Delhi."
        url="/schedule"
      />

      {/* Header Hero */}
      <section className="bg-bg-primary text-text-primary relative overflow-hidden" style={{ paddingTop: 'clamp(6.5rem, 10vw, 9.5rem)', paddingBottom: 'var(--section-py-sm)' }}>
        <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
        <div className="container-site relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <SectionLabel>Timetable</SectionLabel>
            <h1 className="font-display font-black text-5xl md:text-7xl uppercase leading-none tracking-tighter text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
              TRAINING <span className="text-accent orange-glow">HOURS</span>
            </h1>
            <p className="text-sm md:text-base text-text-secondary max-w-2xl leading-relaxed pt-2">
              We operate split-session batches daily. Review our general timing blocks below, and request current specific weekly timetable slots via WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule selector and timeline */}
      <section className="bg-bg-primary text-text-primary relative overflow-hidden pb-24">
        <div className="container-site">
          
          {/* Sticky day navigation pills */}
          <div className="mb-10 sticky top-16 bg-bg-primary/90 backdrop-blur-md z-40 py-4 border-b border-white/5">
            {/* Desktop pills */}
            <div className="hidden sm:flex items-center gap-3">
              {DAYS_WITH_SLOTS.map((d, i) => (
                <button
                  key={d.day}
                  onClick={() => goTo(i)}
                  className={cn(
                    'relative px-5 py-2.5 text-xs font-mono font-bold tracking-wider rounded-xl transition-all duration-300 overflow-hidden shrink-0 border border-white/5 active:scale-95',
                    activeIndex === i
                      ? 'text-text-primary border-accent/40 active-day-glow'
                      : 'text-text-secondary hover:text-text-primary bg-white/5'
                  )}
                >
                  {activeIndex === i && (
                    <motion.div
                      layoutId="activeDayTimetableBg"
                      className="absolute inset-0 bg-accent -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{d.day.toUpperCase()}</span>
                </button>
              ))}
            </div>

            {/* Mobile chevrons */}
            <div className="flex sm:hidden items-center justify-between">
              <button
                onClick={prev}
                disabled={activeIndex === 0}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-text-primary disabled:opacity-20 transition-all active:scale-90"
                aria-label="Previous day"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="text-center">
                <span className="font-mono text-[9px] text-accent tracking-widest uppercase block mb-1">
                  DAY {activeIndex + 1} OF 6
                </span>
                <span className="font-display font-black text-xl text-text-primary uppercase tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  {activeDayData.day}
                </span>
              </div>
              <button
                onClick={next}
                disabled={activeIndex === DAYS_WITH_SLOTS.length - 1}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-text-primary disabled:opacity-20 transition-all active:scale-90"
                aria-label="Next day"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Day indicator progress bar */}
            <div className="flex gap-2 items-center mt-6">
              {DAYS_WITH_SLOTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${DAYS_WITH_SLOTS[i].day}`}
                  className="group relative h-1 rounded-full transition-all duration-300 focus:outline-none flex-grow"
                  style={{ flexGrow: activeIndex === i ? 2.5 : 1 }}
                >
                  <span
                    className={cn(
                      'absolute inset-0 rounded-full transition-all duration-300',
                      activeIndex === i ? 'bg-accent' : 'bg-white/10 group-hover:bg-white/30'
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Active slots schedule dashboard list */}
          <div className="relative pl-6 sm:pl-8 min-h-[200px]">
            {/* Timeline line */}
            <div className="absolute left-[3px] sm:left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent to-transparent opacity-30 pointer-events-none" />
            
            {/* Pulse Indicator */}
            <div className="absolute left-[-1px] sm:left-[12px] w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)] z-10 top-10 animate-pulse" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeDayData.day}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="space-y-4"
              >
                {activeDayData.slots.map((slot, i) => {
                  const disciplineColor = ACTIVE_DISCIPLINE_COLORS[slot.discipline] || ACTIVE_DISCIPLINE_COLORS['calisthenics']
                  const isCardActive = activeSlots.includes(`${slot.time}-${slot.className}`)

                  return (
                    <motion.div
                      key={`${slot.time}-${slot.className}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className={`glass p-5 md:p-6 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 border transition-all duration-300 relative group active:scale-[0.995] schedule-card ${
                        isCardActive
                          ? 'border-accent/20 shadow-[0_8px_30px_rgba(255,77,28,0.08)] bg-white/[0.02]'
                          : 'border-white/5 hover:border-accent/20 hover:shadow-[0_8px_30px_rgba(255,77,28,0.08)]'
                      }`}
                      data-id={`${slot.time}-${slot.className}`}
                    >
                      <div className={cn('absolute left-0 top-0 bottom-0 w-1 rounded-l-xl', disciplineColor.dot)} />

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 flex-grow pl-2">
                        {/* Time Slot */}
                        <div className="flex items-center gap-2 text-accent shrink-0 w-44">
                          <Clock size={14} className="opacity-75" />
                          <span className="font-mono text-xs md:text-sm font-bold tracking-tight">
                            {slot.time}
                          </span>
                        </div>

                        {/* Session Name & Coach */}
                        <div className="space-y-1">
                          <h3 className={`font-display font-bold text-base md:text-lg transition-colors duration-300 ${
                            isCardActive ? 'text-accent' : 'text-text-primary group-hover:text-accent'
                          }`} style={{ fontFamily: 'var(--font-display)' }}>
                            {slot.className}
                          </h3>
                          <div className="flex items-center gap-2 text-text-secondary">
                            <Users size={12} className="opacity-60" />
                            <span className="text-[10px] font-mono uppercase tracking-wider">{slot.instructor}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tag label */}
                      <div className={cn(
                        'px-3 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider self-start sm:self-center border',
                        disciplineColor.bg,
                        disciplineColor.text,
                        disciplineColor.border
                      )}>
                        {slot.discipline}
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Timetable Callout details */}
          <div className="mt-12 max-w-4xl mx-auto border border-white/5 rounded-2xl glass p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <h3 className="font-display font-black text-xl text-text-primary uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                LOOKING FOR SPECIFIC TIMETABLES?
              </h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                Specific timings for Kids gymnastics batches, dedicated female strength batches, MMA conditioning, and advanced calisthenics holds vary weekly. Contact us directly to get matching batch recommendations based on your profile.
              </p>
            </div>
            <div className="flex gap-4 shrink-0 w-full md:w-auto">
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-6 py-3.5 bg-accent text-white font-display font-bold text-xs uppercase tracking-widest rounded-lg glowing-cta text-center"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Enquire Timetable
              </a>
            </div>
          </div>

          {/* Sunday Rest & Recovery Notice */}
          <div className="mt-8">
            <div className="glass border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-3 max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Moon size={20} className="text-accent" />
              </div>
              <div>
                <h4 className="font-display font-black text-base text-text-primary uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                  Sunday - Rest &amp; Recovery
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed max-w-md mt-1">
                  The academy remains closed on Sundays to allow our coaching staff and athletes to recuperate and rebuild after progressive weekly workouts.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  )
}
