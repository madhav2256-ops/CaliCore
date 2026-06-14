import { SEO } from '@/lib/seo'
import { HeroSection } from '@/components/sections/home/HeroSection'
import { StatsBar } from '@/components/sections/home/StatsBar'
import { PhilosophySection } from '@/components/sections/home/PhilosophySection'
import { DisciplinesShowcase } from '@/components/sections/home/DisciplinesShowcase'
import { ActionSection } from '@/components/sections/home/ActionSection'
import { QuoteBlock } from '@/components/sections/home/QuoteBlock'
import { TestimonialsRow } from '@/components/sections/home/TestimonialsRow'
import { FinalCTA } from '@/components/sections/home/FinalCTA'

export default function Home() {
  return (
    <>
      <SEO
        title="CaliCore Academy — Where Strength Is Built | Delhi's Premier Calisthenics Academy"
        description="CaliCore Academy is Delhi's premier calisthenics, gymnastics & strength training center in Laxmi Nagar. No machines. Pure bodyweight mastery. All ages welcome."
        url="/"
      />
      <main id="main-content">
        <HeroSection />
        <StatsBar />
        <PhilosophySection />
        <DisciplinesShowcase />
        <ActionSection />
        <QuoteBlock />
        <TestimonialsRow />
        <FinalCTA />
      </main>
    </>
  )
}
