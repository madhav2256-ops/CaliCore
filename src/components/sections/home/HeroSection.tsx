import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  
  // Mouse coordinates for spotlight effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Embers Particle System
    interface Particle {
      x: number
      y: number
      size: number
      speedY: number
      speedX: number
      life: number
      maxLife: number
      color: string
    }

    const particles: Particle[] = []
    const particleCount = 110

    const colors = [
      'rgba(255, 77, 28, ',  // Ember Orange
      'rgba(244, 166, 35, ',  // Molten Gold
      'rgba(184, 41, 30, ',   // Flame Red
    ]

    const createParticle = (isInitial = false): Particle => {
      const maxLife = 120 + Math.random() * 100
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : height + 10,
        size: 1 + Math.random() * 3,
        speedY: -0.5 - Math.random() * 1.5,
        speedX: (Math.random() - 0.5) * 0.7,
        life: isInitial ? Math.random() * maxLife : 0,
        maxLife,
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true))
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.life++
        
        // Update position
        p.y += p.speedY
        p.x += p.speedX + Math.sin(p.life * 0.02) * 0.2

        // Draw particle
        const alpha = 1 - p.life / p.maxLife
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color + alpha * 0.65 + ')'
        
        // Soft glowing shadows
        ctx.shadowBlur = p.size * 2
        ctx.shadowColor = p.color + alpha + ')'
        ctx.fill()

        // Reset if offscreen or dead
        if (p.y < -10 || p.life >= p.maxLife || p.x < -10 || p.x > width + 10) {
          particles[i] = createParticle()
        }
      }

      ctx.shadowBlur = 0
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const line1 = "WHERE STRENGTH IS"
  const line2 = "WHERE DISCIPLINE IS"
  const line3 = "WHERE CHAMPIONS"

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(9, 9, 9, 0.82) 0%, rgba(9, 9, 9, 0.98) 100%), url("https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1920&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* Styles local to Hero for clean advanced animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-spotlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          transition: opacity 0.5s ease;
          mix-blend-mode: screen;
        }

        .hero-orange-glow {
          text-shadow: 0 0 20px rgba(255, 77, 28, 0.65), 0 0 40px rgba(255, 77, 28, 0.3);
        }
        .hero-gold-glow {
          text-shadow: 0 0 20px rgba(244, 166, 35, 0.65), 0 0 40px rgba(244, 166, 35, 0.3);
        }
        .hero-red-glow {
          text-shadow: 0 0 20px rgba(184, 41, 30, 0.65), 0 0 40px rgba(184, 41, 30, 0.3);
        }

        .cta-glowing-ring {
          position: relative;
        }
        .cta-glowing-ring::before {
          content: '';
          position: absolute;
          inset: -3px;
          border: 1.5px solid var(--color-accent);
          border-radius: var(--radius-sm);
          animation: cta-ring-pulse 2s infinite ease-out;
          pointer-events: none;
        }

        @keyframes cta-ring-pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.12); opacity: 0; }
        }
      `}} />

      {/* Visual background overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-transparent to-bg-primary" />
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
      </div>

      {/* Interactive mouse spotlight reveal */}
      <div 
        className="hero-spotlight"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 280px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 77, 28, 0.09) 0%, rgba(244, 166, 35, 0.03) 40%, transparent 100%)`
        }}
      />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-45 z-1" />

      {/* Content Container */}
      <div className="relative z-10 container-site pt-28 pb-16 flex flex-col items-center text-center max-w-5xl mx-auto px-4">
        
        {/* Floating Google Rating eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-md mb-8 shadow-lg select-none"
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((num) => (
              <Star key={num} size={9} className="fill-accent-gold text-accent-gold" />
            ))}
          </div>
          <span className="text-[9px] text-text-primary uppercase tracking-[0.2em] font-mono font-bold leading-none">
            {siteConfig.rating.score.toFixed(1)} ★ Rating · {siteConfig.rating.count} reviews
          </span>
        </motion.div>

        {/* Display Heading Taglines */}
        <h1
          className="leading-[1.02] md:leading-[0.92] tracking-tighter uppercase mb-8 flex flex-col items-center"
          style={{ fontSize: 'clamp(2.2rem, 6.2vw, 4.8rem)', fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >
          {/* Line 1 */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="block text-text-primary/95"
          >
            {line1} <span className="text-accent hero-orange-glow font-black">BUILT.</span>
          </motion.span>

          {/* Line 2 */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="block text-text-primary/90 mt-1"
          >
            {line2} <span className="text-accent-gold hero-gold-glow font-black">FORGED.</span>
          </motion.span>

          {/* Line 3 */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block text-text-primary/95 mt-1"
          >
            {line3} <span className="text-accent-red hero-red-glow font-black">RISE.</span>
          </motion.span>
        </h1>

        {/* Dynamic, clean description layout */}
        <div className="flex justify-center w-full mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="border-l-2 border-accent/40 pl-5 text-left max-w-lg"
          >
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              {siteConfig.description} Delhi's premier movement forge invites you to master your bodyweight, build raw capability, and find your discipline under expert coach Abdul Sir.
            </p>
          </motion.div>
        </div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-sm sm:max-w-none"
        >
          <a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto cta-glowing-ring"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full group glowing-cta flex items-center justify-center gap-2 min-w-[200px]"
            >
              Book Free Trial
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </a>
          <Link to="/classes" className="w-full sm:w-auto">
            <Button variant="ghost" size="lg" className="w-full backdrop-blur-md border border-white/10 hover:border-accent/30 min-w-[200px]">
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
