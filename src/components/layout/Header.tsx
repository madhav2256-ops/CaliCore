import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Classes', path: '/classes' },
  { label: 'Schedule', path: '/schedule' },
  { label: 'Contact', path: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="container-site flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="CaliCore Home">
          <img
            src={siteConfig.logo}
            alt={siteConfig.fullName}
            className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span
            className="text-xl md:text-2xl tracking-wider text-text-primary"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide uppercase transition-colors duration-300',
                location.pathname === link.path
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-text-primary'
              )}
              style={{ fontFamily: 'var(--font-label)' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-6 py-2.5 bg-accent text-white text-sm font-semibold uppercase tracking-wider rounded-sm ember-glow transition-all duration-300 hover:bg-accent-hover"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Join Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="container-site py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-lg uppercase tracking-wider py-2 transition-colors',
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-text-secondary'
                  )}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-6 py-3 bg-accent text-white text-center font-semibold uppercase tracking-wider rounded-sm"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
