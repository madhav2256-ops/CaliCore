import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/60 to-bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/80 to-transparent" />
        {/* Radial ember glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px]" />
      </div>
      <div className="noise-overlay" />

      {/* Content */}
      <div className="container-site relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <EyebrowLabel className="mb-8">Forge Your Body</EyebrowLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="leading-none mb-6"
            style={{ fontSize: 'var(--text-hero)', fontFamily: 'var(--font-display)' }}
          >
            WHERE{' '}
            <span className="fire-gradient-text">STRENGTH</span>
            <br />
            IS BUILT.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">Book Free Trial</Button>
            </a>
            <Link to="/classes">
              <Button variant="ghost" size="lg">Explore Programs</Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border-2 border-text-muted rounded-full flex justify-center">
          <div className="w-1 h-2 bg-accent rounded-full mt-1.5" />
        </div>
      </motion.div>
    </section>
  )
}
