import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'

export function HeroSection() {
  const words = ['WHERE', 'STRENGTH', 'IS', 'BUILT.']

  // Mouse coordinates for kinetic trails
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mouseX.set(x)
    mouseY.set(y)
  }

  // Transformations for background trails
  const trail1X = useTransform(mouseX, [0, 1], [-30, 30])
  const trail1Y = useTransform(mouseY, [0, 1], [-30, 30])
  const trail2X = useTransform(mouseX, [0, 1], [-60, 60])
  const trail2Y = useTransform(mouseY, [0, 1], [-60, 60])

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(13, 13, 13, 0.45) 0%, rgba(13, 13, 13, 0.95) 100%), url("https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="relative min-h-[90vh] md:min-h-screen py-16 md:py-0 flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* Visual background overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-transparent to-bg-primary" />
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Floating Kinetic Trails */}
      <motion.div
        style={{ x: trail1X, y: trail1Y }}
        className="kinetic-trail left-1/4 top-1/4 animate-float"
      />
      <motion.div
        style={{ x: trail2X, y: trail2Y, animationDelay: '3s' }}
        className="kinetic-trail right-1/4 bottom-1/4 animate-float"
      />

      {/* Content Container */}
      <div className="relative z-10 container-site pt-24 pb-16 flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionLabel className="mb-6 justify-center">CaliCore Academy</SectionLabel>
        </motion.div>

        {/* Word-by-word staggered reveal heading */}
        <h1
          className="leading-[1.1] md:leading-[0.95] tracking-tighter uppercase mb-6"
          style={{ fontSize: 'var(--text-hero)', fontWeight: 800 }}
        >
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              className={`inline-block mr-[0.3em] ${
                word === 'STRENGTH'
                  ? 'text-accent orange-glow'
                  : 'text-text-primary'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Short description card */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-text-secondary text-sm md:text-lg max-w-xl mx-auto leading-relaxed bg-black/60 backdrop-blur-md border border-white/5 px-6 py-4 rounded-xl mb-10"
        >
          {siteConfig.description}
          <span className="hidden md:inline"> Build structural power and capability with Delhi's elite machine-free coaching batch.</span>
        </motion.p>

        {/* Action Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xs sm:max-w-none"
        >
          <a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full group glowing-cta flex items-center justify-center gap-2"
            >
              Book Free Trial
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <Link to="/classes" className="w-full sm:w-auto">
            <Button variant="ghost" size="lg" className="w-full backdrop-blur-sm">
              Explore Programs
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator mouse */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border-2 border-text-muted rounded-full flex justify-center">
          <div className="w-1 h-2 bg-accent rounded-full mt-1.5" />
        </div>
      </motion.div>
    </section>
  )
}
