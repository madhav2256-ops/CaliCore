import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SEO } from '@/lib/seo'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { PageTransition } from '@/components/layout/PageTransition'
import { team } from '@/data/team'
import { LazyImage } from '@/components/ui/LazyImage'
import { useActiveOnScroll } from '@/hooks/useActiveOnScroll'
import { Dumbbell, Star, Heart } from 'lucide-react'

export default function About() {
  const activePillarIds = useActiveOnScroll('.about-pillar-card')
  const activeCoachIds = useActiveOnScroll('.about-coach-card')

  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: storyRef, inView: storyInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: coachesRef, inView: coachesInView } = useInView({ triggerOnce: true, threshold: 0.15 })

  const cardHover: any = {
    scale: 1.02,
    borderColor: 'rgba(255, 77, 28, 0.25)',
    boxShadow: '0 10px 30px -10px rgba(255, 77, 28, 0.15)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }

  const storySteps = [
    {
      phase: '01 / THE SPARK',
      title: 'Bodyweight Over Machines',
      desc: 'The vision was born to create a technical movement academy in Laxmi Nagar — stripping away heavy equipment to build real, raw athletic capability using only gravity and bodyweight.'
    },
    {
      phase: '02 / THE FORGE',
      title: 'Fire & Steel Buildout',
      desc: 'We transformed an industrial space near Bal Bhavan School in Mangal Bazar. With raw steel rigs, gymnastic rings, and our signature fire-and-anatomical mural, the forge took shape.'
    },
    {
      phase: '03 / THE LAUNCH',
      title: 'April 2026 Opening',
      desc: 'Opening our doors with a commitment to build a motivating, beginner-friendly community batch. A space where beginners build strength and advanced athletes master holds.'
    }
  ]

  return (
    <PageTransition>
      <SEO
        title="Our Story | CaliCore Academy — Laxmi Nagar Delhi"
        description="Learn about CaliCore Academy's machine-free training philosophy, our story so far from vision to our April 2026 launch in Laxmi Nagar, and meet our coaching staff led by Abdul Sir."
        url="/about"
      />

      <main id="main-content" className="bg-bg-primary overflow-hidden">
        {/* Header Hero */}
        <section ref={headerRef} className="relative h-[65vh] flex flex-col justify-center items-center text-center px-4 pt-20">
          <div className="absolute inset-0 z-0">
            <LazyImage
              src="https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=1200&auto=format&fit=crop"
              alt="Calisthenics bar training"
              priority={true}
              className="w-full h-full object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-bg-primary" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel className="justify-center">About Us</SectionLabel>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-black text-5xl sm:text-7xl leading-[0.95] tracking-tighter text-text-primary uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              FORGED IN <br />
              <span className="text-accent orange-glow">FIRE & STEEL</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto text-sm md:text-base text-text-secondary leading-relaxed pt-2"
            >
              CaliCore is Laxmi Nagar's dedicated home for calisthenics, gymnastics, and combat training. We believe in bodyweight sovereignty — unlocking capability without mechanical shortcuts.
            </motion.p>
          </div>
        </section>

        {/* Our Story So Far Narrative */}
        <section ref={storyRef} className="py-20 bg-bg-surface border-t border-white/5 relative">
          <div className="container-site relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Sticky Header */}
            <div className="lg:col-span-4 flex flex-col justify-start lg:sticky lg:top-28 h-fit">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="mt-4 font-display font-black text-3xl md:text-4xl uppercase tracking-tight text-text-primary leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                THE FORGE <br />
                <span className="text-accent">SO FAR</span>
              </h2>
              <p className="mt-4 text-text-secondary text-xs md:text-sm leading-relaxed">
                A brief overview of how we conceptualized, built, and launched CaliCore Academy as Laxmi Nagar's premier movement laboratory.
              </p>
            </div>

            {/* Right Story narrative cards */}
            <div className="lg:col-span-8 space-y-12">
              {storySteps.map((step, idx) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: 20 }}
                  animate={storyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative pl-8 border-l border-white/10 group hover:border-accent/30 transition-colors duration-300"
                >
                  <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-bg-surface border-2 border-white/20 group-hover:border-accent group-hover:bg-accent transition-all duration-300" />
                  
                  <span className="font-mono text-[10px] text-accent font-bold tracking-widest block uppercase mb-1">
                    {step.phase}
                  </span>
                  <h3 className="font-display font-bold text-lg text-text-primary uppercase tracking-tight mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Machine-Free Philosophy Cards */}
        <section ref={missionRef} className="py-20 bg-bg-primary border-t border-white/5 relative">
          <div className="container-site">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 space-y-4"
            >
              <SectionLabel className="justify-center">Core Pillars</SectionLabel>
              <h2 className="font-display font-black text-4xl md:text-5xl text-text-primary uppercase tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                WHY MACHINE-FREE?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { id: 'p1', stat: '0%', title: 'Machines', desc: 'No mechanical belts. No mechanical weight stacks. We use raw gravity and dynamic holds to build real athletic strength.', icon: Dumbbell },
                { id: 'p2', stat: '5.0★', title: 'Google Rating', desc: 'A motivating, highly supportive community built from reviews highlighting beginner-friendly progression.', icon: Star },
                { id: 'p3', stat: '100%', title: 'Human Effort', desc: 'Every program is skill-based. You earn your capabilities through structured bodyweight coordination and discipline.', icon: Heart }
              ].map((pillar, idx) => {
                const isActive = activePillarIds.includes(pillar.id)
                const Icon = pillar.icon
                return (
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={missionInView ? { opacity: 1, y: 0 } : {}}
                    whileHover={cardHover}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`glass p-6 md:p-8 rounded-2xl border text-center flex flex-col items-center group relative overflow-hidden about-pillar-card ${
                      isActive ? 'border-accent/30 bg-white/[0.01]' : 'border-white/5 hover:border-accent/20'
                    }`}
                    data-id={pillar.id}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                      <Icon size={18} />
                    </div>
                    <span className="font-display font-black text-4xl text-accent block" style={{ fontFamily: 'var(--font-display)' }}>
                      {pillar.stat}
                    </span>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-text-primary mt-2 font-bold">
                      {pillar.title}
                    </h3>
                    <p className="text-text-secondary text-xs mt-3 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Founder's Manifesto Quote block */}
        <section className="py-20 bg-bg-surface border-t border-white/5 relative">
          <div className="container-site max-w-4xl text-center">
            <div className="relative">
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 font-serif text-8xl text-accent/5 select-none pointer-events-none">“</span>
              <p className="font-serif italic text-lg md:text-2xl text-text-secondary leading-relaxed relative z-10">
                "We don't rely on machines to build power. Our academy is a forge where discipline is hammered out. Whether you're a child learning their first flip, a woman in our dedicated batches, or an advanced calisthenics athlete, we build natural capabilities from the ground up."
              </p>
              <div className="flex items-center justify-center gap-4 pt-6">
                <div className="h-[1px] w-8 bg-accent" />
                <span className="font-mono text-xs text-text-primary uppercase tracking-widest font-bold">
                  CALICORE ACADEMY MANIFESTO
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* The Coaching Force (Abdul Sir & Placeholders) */}
        <section ref={coachesRef} className="py-20 bg-bg-primary border-t border-white/5 relative">
          <div className="container-site">
            <div className="mb-12 space-y-4">
              <SectionLabel>Coaching Staff</SectionLabel>
              <h2 className="font-display font-black text-3xl md:text-4xl text-text-primary uppercase tracking-tight mt-4" style={{ fontFamily: 'var(--font-display)' }}>
                THE <span className="text-accent">INSTRUCTORS</span>
              </h2>
              <p className="text-text-secondary text-xs md:text-sm">
                Certified movement professionals dedicated to safely scaling your physical coordination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {team.map((member, idx) => {
                const isActive = activeCoachIds.includes(member.id)
                return (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={coachesInView ? { opacity: 1, y: 0 } : {}}
                    whileHover={cardHover}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`glass rounded-2xl overflow-hidden border transition-all duration-300 relative group flex flex-col h-full about-coach-card ${
                      isActive ? 'border-accent/20 bg-white/[0.01]' : 'border-white/5 hover:border-accent/20'
                    }`}
                    data-id={member.id}
                  >
                    {member.image && (
                      <div className="aspect-[4/3] relative overflow-hidden bg-bg-elevated">
                        <LazyImage
                          src={member.image}
                          alt={member.name}
                          width={400}
                          height={300}
                          className={`w-full h-full object-cover grayscale transition-transform duration-500 ${
                            isActive ? 'scale-102 grayscale-0' : 'grayscale group-hover:scale-102 group-hover:grayscale-0'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 to-transparent opacity-60" />
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-accent text-white text-[9px] font-mono font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                            {member.role}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className={`font-display font-bold text-lg transition-colors duration-300 ${
                          isActive ? 'text-accent' : 'text-text-primary group-hover:text-accent'
                        }`} style={{ fontFamily: 'var(--font-display)' }}>
                          {member.name}
                        </h3>
                        {member.specialty && (
                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span className="font-mono text-[10px] text-text-secondary uppercase tracking-wider">
                              {member.specialty}
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed mt-4">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
