import { SEO } from '@/lib/seo'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { PageTransition } from '@/components/layout/PageTransition'
import { siteConfig } from '@/data/siteConfig'
import { Phone } from 'lucide-react'

export default function Schedule() {
  return (
    <PageTransition>
      <SEO
        title="Class Schedule | CaliCore Academy — Laxmi Nagar Delhi"
        description="View CaliCore Academy's class schedule. Morning batches 6-11 AM, evening batches 4-10 PM. Monday to Saturday. Laxmi Nagar, Delhi."
        url="/schedule"
      />
      <main id="main-content" className="pt-24">
        <section className="py-[var(--section-py)] bg-bg-primary">
          <div className="container-site">
            <EyebrowLabel className="mb-8">Schedule</EyebrowLabel>
            <h1 style={{ fontSize: 'var(--text-hero)', fontFamily: 'var(--font-display)' }} className="mb-6">
              TRAINING <span className="fire-gradient-text">HOURS</span>
            </h1>
            <p className="text-text-secondary text-xl max-w-3xl leading-relaxed mb-16">
              We run split-session batches to fit your schedule. Morning or evening — pick your forge time.
            </p>

            {/* Schedule blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-4xl">
              <div className="bg-bg-surface p-10">
                <span className="text-accent-gold text-xs uppercase tracking-[0.2em] block mb-4" style={{ fontFamily: 'var(--font-label)' }}>
                  Morning Batch
                </span>
                <h3 className="text-4xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {siteConfig.hours.morning}
                </h3>
                <p className="text-text-secondary text-sm">Monday through Saturday</p>
              </div>
              <div className="bg-bg-surface p-10">
                <span className="text-accent-gold text-xs uppercase tracking-[0.2em] block mb-4" style={{ fontFamily: 'var(--font-label)' }}>
                  Evening Batch
                </span>
                <h3 className="text-4xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {siteConfig.hours.evening}
                </h3>
                <p className="text-text-secondary text-sm">Monday through Saturday</p>
              </div>
            </div>

            <div className="mt-px bg-bg-surface border border-border p-10 max-w-4xl">
              <p className="text-text-secondary mb-6">
                For the full weekly timetable with specific discipline slots, contact us directly.
                We'll match you to the right batch based on your goals and level.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-accent text-white font-semibold uppercase tracking-wider rounded-sm text-sm ember-glow hover:bg-accent-hover transition-all duration-300"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  Get Full Schedule
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="px-6 py-3 border border-text-primary/20 text-text-primary font-semibold uppercase tracking-wider rounded-sm text-sm hover:border-accent hover:text-accent transition-all duration-300 flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  <Phone size={16} /> Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
