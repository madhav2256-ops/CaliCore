import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion()

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    },
  }


  return (
    <PageTransition>
      <SEO title="404 — Page Not Found | CaliCore Academy" description="The page you're looking for doesn't exist." />
      <main id="main-content" className="pt-24 min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="container-site text-center"
        >
          <motion.span
            variants={staggerItem}
            animate={shouldReduceMotion ? undefined : {
              y: [0, -12, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut' as const,
              },
            }}
            className="text-[120px] md:text-[200px] font-bold fire-gradient-text leading-none block select-none cursor-default"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            404
          </motion.span>
          <motion.h1
            variants={staggerItem}
            className="text-2xl md:text-3xl mb-4 mt-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            PAGE NOT FOUND
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-text-secondary mb-8 max-w-md mx-auto text-sm md:text-base"
          >
            The page you're looking for has moved or doesn't exist. Let's get you back on track.
          </motion.p>
          <motion.div variants={staggerItem}>
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-accent text-white font-semibold uppercase tracking-wider rounded-sm ember-glow hover:bg-accent-hover transition-all duration-300"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </PageTransition>
  )
}

