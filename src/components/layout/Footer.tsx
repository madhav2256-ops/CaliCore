import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock } from 'lucide-react'
import { Instagram } from '@/components/ui/Instagram'
import { siteConfig } from '@/data/siteConfig'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Classes', path: '/classes' },
  { label: 'Schedule', path: '/schedule' },
  { label: 'Contact', path: '/contact' },
]

const services = [
  'Calisthenics',
  'Body Weight Training',
  'Gymnastics',
  'Kids Gymnastics',
  'Yoga',
  'Functional Strength Training',
  'Self Defence',
]

export function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-border relative overflow-hidden">
      {/* Styles local to Footer for clean animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        .footer-link {
          transition: all 0.3s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: var(--color-accent) !important;
          transform: translateX(6px);
        }

        .footer-contact-item {
          transition: all 0.3s ease;
        }
        .footer-contact-item:hover {
          color: var(--color-text-primary) !important;
        }
        .footer-contact-item:hover .footer-icon {
          transform: scale(1.15) rotate(15deg);
          color: var(--color-accent) !important;
        }
      `}} />

      <div className="container-site py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={siteConfig.logo} alt={siteConfig.fullName} className="h-12 w-12 object-contain" />
              <span className="text-2xl tracking-wider text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {siteConfig.shortTagline}
            </p>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300 text-sm"
            >
              <Instagram size={18} />
              <span>@calicore1</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-medium tracking-widest uppercase text-accent mb-6"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services / Programs */}
          <div>
            <h4
              className="text-sm font-medium tracking-widest uppercase text-accent mb-6"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Programs
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/classes"
                    className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm footer-link"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-medium tracking-widest uppercase text-accent mb-6"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-text-secondary footer-contact-item">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0 footer-icon transition-transform duration-300" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors footer-contact-item"
                >
                  <Phone size={16} className="text-accent shrink-0 footer-icon transition-transform duration-300" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary footer-contact-item">
                <Clock size={16} className="text-accent mt-0.5 shrink-0 footer-icon transition-transform duration-300" />
                <div>
                  <p>{siteConfig.hours.morning}</p>
                  <p>{siteConfig.hours.evening}</p>
                  <p className="text-text-muted">Sunday Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border relative z-10">
        <div className="container-site py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Train. Build. Rise.
          </p>
        </div>
      </div>
    </footer>
  )
}
