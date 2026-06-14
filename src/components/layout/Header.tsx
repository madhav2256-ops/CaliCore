import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { cn } from '@/lib/utils'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useScrollProgress } from '@/hooks/useScrollProgress'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Classes', path: '/classes' },
  { label: 'Schedule', path: '/schedule' },
  { label: 'Contact', path: '/contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollDirection, scrollY } = useScrollDirection()
  const scrollProgress = useScrollProgress()
  const location = useLocation()

  const isScrolled = scrollY > 50
  const isHidden = scrollDirection === 'down' && scrollY > 300 && !mobileOpen

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'glass shadow-lg border-b border-white/5'
            : 'bg-transparent border-transparent',
          isHidden ? '-translate-y-full' : 'translate-y-0'
        )}
        style={isScrolled ? { backgroundColor: 'rgba(13, 13, 13, 0.85)' } : undefined}
      >
        <nav className="container-site flex items-center justify-between h-16 md:h-20" aria-label="Primary navigation">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0" aria-label="CaliCore Home">
            <img
              src={siteConfig.logo}
              alt={siteConfig.fullName}
              width="40"
              height="40"
              className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span
              className="text-xl md:text-2xl tracking-wider text-text-primary transition-colors group-hover:text-accent"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-md transition-all duration-200 relative',
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                )}
                style={{ fontFamily: 'var(--font-label)' }}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeHeaderIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 text-xs font-bold uppercase tracking-widest bg-accent text-white rounded-md glowing-cta"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Join Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-text-primary hover:text-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-48 bg-bg-primary/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 35 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'text-3xl font-semibold uppercase tracking-wider transition-colors',
                      location.pathname === link.path
                        ? 'text-accent'
                        : 'text-text-primary hover:text-accent'
                    )}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-block px-8 py-3.5 text-sm font-bold uppercase tracking-widest bg-accent text-white rounded-md glowing-cta"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  Join Now
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
