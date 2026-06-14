import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function QuoteBlock() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth)
    let height = (canvas.height = canvas.offsetHeight || 380)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth || window.innerWidth
      height = canvas.height = canvas.offsetHeight || 380
    }
    window.addEventListener('resize', handleResize)

    // Particle system
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
    const particleCount = 65

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
        
        // Soft glowing shadows
        ctx.shadowBlur = p.size * 2
        ctx.shadowColor = p.color + alpha + ')'
        ctx.fill()

        // Reset particle if it dies or goes off screen
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
    <section ref={ref} className="py-24 md:py-36 bg-[#0D0D0D] relative overflow-hidden flex items-center justify-center border-b border-white/5">
      {/* Styles local to QuoteBlock for clean modular animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        .fiery-burn-text {
          animation: fire-glow-flicker 1.5s infinite alternate ease-in-out, fire-gradient-drift 4s infinite linear;
          background-size: 200% auto;
          filter: drop-shadow(0 2px 8px rgba(255, 77, 28, 0.4));
        }
        
        @keyframes fire-glow-flicker {
          0% {
            text-shadow: 
              0 -1px 3px rgba(255, 77, 28, 0.6), 
              0 -3px 8px rgba(244, 166, 35, 0.4), 
              0 -8px 16px rgba(184, 41, 30, 0.2);
          }
          100% {
            text-shadow: 
              0 -3px 6px rgba(255, 77, 28, 0.85), 
              0 -5px 12px rgba(244, 166, 35, 0.6), 
              0 -10px 22px rgba(184, 41, 30, 0.4);
          }
        }

        @keyframes fire-gradient-drift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .text-glow-subtle {
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.05);
        }
      `}} />

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      
      {/* Canvas for Particle Embers */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50" />

      <div className="container-site relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="uppercase tracking-tighter leading-none select-none"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 6rem)', 
              fontFamily: 'var(--font-display)',
              fontWeight: 900
            }}
          >
            <span className="block text-text-primary/95 text-glow-subtle font-black">
              "FLY HIGH.
            </span>
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#F4A623] to-[#B8291E] fiery-burn-text font-black">
              LAND STRONG."
            </span>
          </h2>
        </motion.blockquote>
      </div>
    </section>
  )
}
