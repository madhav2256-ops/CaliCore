import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth)
    let height = (canvas.height = canvas.offsetHeight || 350)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth || window.innerWidth
      height = canvas.height = canvas.offsetHeight || 350
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
    const particleCount = 70

    const colors = [
      'rgba(255, 77, 28, ',  // Ember Orange
      'rgba(244, 166, 35, ',  // Molten Gold
      'rgba(184, 41, 30, ',   // Flame Red
    ]

    const createParticle = (isInitial = false): Particle => {
      const maxLife = 80 + Math.random() * 80
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : height + 10,
        size: 1 + Math.random() * 2.5,
        speedY: -0.6 - Math.random() * 1.4,
        speedX: (Math.random() - 0.5) * 0.6,
        life: isInitial ? Math.random() * maxLife : 0,
        maxLife,
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    }

    // Initialize particles
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
        p.x += p.speedX + Math.sin(p.life * 0.03) * 0.15

        // Draw particle
        const alpha = 1 - p.life / p.maxLife
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color + alpha * 0.7 + ')'
        
        // Glowing sparks
        ctx.shadowBlur = p.size * 2
        ctx.shadowColor = p.color + alpha + ')'
        ctx.fill()

        // Reset dead particles
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

  return (
    <section ref={ref} className="py-24 md:py-36 bg-bg-surface relative overflow-hidden border-t border-white/5 flex items-center justify-center">
      {/* Styles local to FinalCTA for clean animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        .cta-fiery-title {
          animation: cta-fire-glow-flicker 1.5s infinite alternate ease-in-out;
        }

        @keyframes cta-fire-glow-flicker {
          0% {
            text-shadow: 0 0 10px rgba(255, 77, 28, 0.4), 0 0 20px rgba(255, 77, 28, 0.2);
          }
          100% {
            text-shadow: 0 0 15px rgba(255, 77, 28, 0.65), 0 0 30px rgba(255, 77, 28, 0.35);
          }
        }

        /* Hover animation on Call link */
        .hover-call-action {
          position: relative;
          transition: all 0.3s ease;
        }
        .hover-call-action:hover {
          color: var(--color-accent);
          text-shadow: 0 0 8px rgba(255, 77, 28, 0.3);
        }
        .hover-call-action .call-icon {
          transition: transform 0.3s ease;
        }
        .hover-call-action:hover .call-icon {
          transform: scale(1.15) rotate(15deg);
          animation: call-shake 0.5s infinite alternate ease-in-out;
        }
        
        @keyframes call-shake {
          0% { transform: scale(1.1) rotate(10deg); }
          100% { transform: scale(1.1) rotate(20deg); }
        }

        .hover-call-action::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: var(--color-accent);
          transform-origin: bottom right;
          transition: transform 0.35s ease-out;
        }
        .hover-call-action:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}} />

      {/* Background glow and canvas particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />
      <div className="noise-overlay" />

      <div className="container-site relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="mb-6 tracking-tighter uppercase font-black"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontFamily: 'var(--font-display)', lineHeight: 'none' }}
          >
            READY TO <span className="text-accent cta-fiery-title">RISE?</span>
          </h2>
        </motion.div>

        {/* Tagline details */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-secondary text-center text-sm md:text-base mb-12 max-w-md mx-auto leading-relaxed"
          style={{ textAlign: 'center' }}
        >
          Limited training slots. Special launch offer for the first 50 members — 15% OFF + FREE Official T-Shirt & Shaker Cup! Forge your discipline. Start your bodyweight mastery journey today.
        </motion.p>

        {/* CTA Actions - Perfectly aligned and centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-md mx-auto"
        >
          <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto shrink-0">
            <Button
              variant="primary"
              size="lg"
              className="w-full glowing-cta min-w-[200px]"
            >
              Book Free Trial
            </Button>
          </a>
          
          <a 
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} 
            className="flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase font-bold text-text-primary hover-call-action py-3 px-4 rounded sm:w-auto"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            <Phone size={14} className="text-accent call-icon shrink-0" />
            <span>Call {siteConfig.phoneDisplay}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
