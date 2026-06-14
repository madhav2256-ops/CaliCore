import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SEO } from '@/lib/seo'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { PageTransition } from '@/components/layout/PageTransition'

export default function About() {
  const { ref: storyRef, inView: storyInView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: facilityRef, inView: facilityInView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <PageTransition>
      <SEO
        title="About CaliCore Academy — Our Story | Calisthenics, Gymnastics & MMA Delhi"
        description="CaliCore Academy is Laxmi Nagar's home for calisthenics, gymnastics, and strength training. Built for anyone who wants to master their own bodyweight."
        url="/about"
      />
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="py-[var(--section-py)] bg-bg-primary">
          <div className="container-site">
            <EyebrowLabel className="mb-8">About Us</EyebrowLabel>
            <h1 style={{ fontSize: 'var(--text-hero)', fontFamily: 'var(--font-display)' }} className="mb-6">
              THE <span className="fire-gradient-text">FORGE</span>
            </h1>
            <p className="text-text-secondary text-xl max-w-3xl leading-relaxed">
              CaliCore Academy is Laxmi Nagar's home for calisthenics, gymnastics, and strength training —
              built for anyone who wants to master their own bodyweight before reaching for a machine.
            </p>
          </div>
        </section>

        {/* Brand Story */}
        <section ref={storyRef} className="py-[var(--section-py)] bg-bg-surface">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <EyebrowLabel className="mb-6">Our Origin</EyebrowLabel>
                <h2 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  CALI + <span className="fire-gradient-text">CORE</span>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  "CaliCore" = "Calisthenics" + "Core" — not a California reference but literally
                  rooted in calisthenics and bodyweight training culture, with "core" doubling as
                  both core strength and the core philosophy of the academy.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  The fire-shield logo and our tagline "Where strength is built. Where discipline
                  is forged. Where champions rise" position this as a warrior/academy brand —
                  disciplined, intense, almost martial-arts dojo energy rather than a commercial gym.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={storyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="aspect-square bg-bg-elevated rounded-sm flex items-center justify-center"
              >
                <img src="/logo.png" alt="CaliCore Logo" className="w-48 h-48 object-contain opacity-60" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section ref={missionRef} className="py-[var(--section-py)] bg-bg-primary">
          <div className="container-site max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <EyebrowLabel className="mb-8 justify-center">Our Mission</EyebrowLabel>
              <h2 className="mb-8" style={{ fontSize: 'var(--text-h1)', fontFamily: 'var(--font-display)' }}>
                LEARN. CONNECT. <span className="fire-gradient-text">EVOLVE.</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                From kids learning their first flip to advanced athletes training for MMA, CaliCore
                brings together calisthenics, gymnastics, yoga, weight training, self-defense, and
                functional strength under one roof.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Set inside a striking fire-and-steel training space in Mangal Bazar, CaliCore
                isn't just a gym — it's a community. Every session is about more than reps:
                it's about learning, connecting, and evolving together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Facility */}
        <section ref={facilityRef} className="py-[var(--section-py)] bg-bg-surface">
          <div className="container-site">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={facilityInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <EyebrowLabel className="mb-6">The Space</EyebrowLabel>
              <h2 style={{ fontFamily: 'var(--font-display)' }}>
                FORGED IN <span className="fire-gradient-text">FIRE & STEEL</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
              {[
                { title: 'Industrial Interior', desc: 'Exposed concrete walls, dark moody lighting, and raw steel rigs create the perfect training atmosphere.' },
                { title: 'Signature Mural', desc: 'A massive flame mural with anatomical detail serves as the backdrop for every training session and reel.' },
                { title: 'Full Rig Setup', desc: 'Pull-up bars, gymnastic rings, parallettes, and custom rigs designed for calisthenics progression.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={facilityInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-bg-surface p-8"
                >
                  <span className="text-accent-gold text-xs uppercase tracking-[0.2em] block mb-3" style={{ fontFamily: 'var(--font-label)' }}>
                    0{i + 1}
                  </span>
                  <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem' }}>
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
