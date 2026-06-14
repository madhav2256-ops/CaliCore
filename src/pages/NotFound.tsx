import { Link } from 'react-router-dom'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="404 — Page Not Found | CaliCore Academy" description="The page you're looking for doesn't exist." />
      <main id="main-content" className="pt-24 min-h-screen flex items-center justify-center">
        <div className="container-site text-center">
          <span
            className="text-[120px] md:text-[200px] font-bold fire-gradient-text leading-none block"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            404
          </span>
          <h1 className="text-2xl md:text-3xl mb-4 mt-4" style={{ fontFamily: 'var(--font-display)' }}>
            PAGE NOT FOUND
          </h1>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            The page you're looking for has moved or doesn't exist. Let's get you back on track.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-accent text-white font-semibold uppercase tracking-wider rounded-sm ember-glow hover:bg-accent-hover transition-all duration-300"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Back to Home
          </Link>
        </div>
      </main>
    </PageTransition>
  )
}
