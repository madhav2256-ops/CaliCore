import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { LazyImage } from '@/components/ui/LazyImage'
import { useActiveOnScroll } from '@/hooks/useActiveOnScroll'


export function ActionSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const activeVideoIds = useActiveOnScroll('.video-wrapper-card')
  const activeStatIds = useActiveOnScroll('.video-stat-card')
  
  const isVideoActive = activeVideoIds.includes('action-video')

  const stats = [
    {
      value: '1,800+',
      label: 'ACTIVE ATHLETES',
      desc: 'From absolute beginners to elite competitive athletes training under one roof.',
    },
    {
      value: '9 Programs',
      label: 'TRAINING DISCIPLINES',
      desc: 'Covering calisthenics, advanced gymnastics skills, MMA, yoga, and youth fitness batches.',
    },
    {
      value: 'ZERO',
      label: 'WEIGHT MACHINES',
      desc: 'No shortcuts. No isolation mechanical rigs. Your bodyweight is the ultimate forge.',
    },
  ]

  return (
    <section className="py-[var(--section-py)] relative overflow-hidden bg-bg-primary text-text-primary border-b border-white/5">
      <div className="container-site relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <SectionLabel>Watch</SectionLabel>
          <h2
            className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-text-primary leading-[1.1] mt-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            SEE US IN <span className="text-accent">ACTION</span>.
          </h2>
        </motion.div>

        {/* 2-Column Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Mock Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            {/* Ambient orange background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,77,28,0.15)_0%,transparent_70%)] blur-3xl scale-110 -z-10 pointer-events-none" />

            <div
              onClick={() => setIsPlaying(true)}
              className={`relative rounded-xl overflow-hidden aspect-video bg-black group/video cursor-pointer border transition-all duration-500 video-wrapper-card ${
                isVideoActive
                  ? 'border-accent/40 shadow-[0_15px_45px_-10px_rgba(255,77,28,0.3)]'
                  : 'border-white/10 hover:border-accent/30 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.8)]'
              }`}
              data-id="action-video"
            >
              {!isPlaying ? (
                <>
                  <LazyImage
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1280&auto=format&fit=crop"
                    alt="CaliCore Training Showcase Preview"
                    width={1280}
                    height={720}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isVideoActive ? 'scale-102' : 'group-hover/video:scale-102'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Pulsing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full backdrop-blur-md border text-white transition-all duration-300 shadow-2xl ${
                      isVideoActive
                        ? 'bg-accent border-transparent scale-110'
                        : 'bg-white/10 border-white/20 group-hover/video:bg-accent group-hover/video:border-transparent group-hover/video:scale-110'
                    }`}>
                      <span className={`absolute -inset-4 rounded-full bg-accent animate-ping transition-opacity duration-300 ${
                        isVideoActive ? 'opacity-20' : 'opacity-10 group-hover/video:opacity-20'
                      }`} />
                      <Play size={26} className="fill-current ml-1" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/SDt1b6QZKj4?autoplay=1&mute=0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    title="CaliCore Training Video"
                  />
                  <div className="absolute inset-0 z-10 pointer-events-none" />
                </>
              )}
            </div>
          </motion.div>

          {/* Right Column: Key metrics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-8 md:gap-10"
          >
            {stats.map((stat, idx) => {
              const isStatActive = activeStatIds.includes(idx.toString())
              return (
                <div
                  key={idx}
                  className={`border-l-2 pl-6 transition-all duration-300 video-stat-card ${
                    isStatActive
                      ? 'border-accent bg-white/[0.01]'
                      : 'border-white/10 hover:border-accent'
                  }`}
                  data-id={idx.toString()}
                >
                  <div
                    className={`font-display font-black text-3xl md:text-4xl tracking-tight leading-none mb-1.5 transition-colors duration-300 ${
                      isStatActive ? 'text-accent' : 'text-text-primary'
                    }`}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-display text-[10px] tracking-[0.2em] font-bold text-accent uppercase mb-2" style={{ fontFamily: 'var(--font-label)' }}>
                    {stat.label}
                  </div>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Brand Manifesto block */}
        <div className="relative border-t border-white/5 pt-16 md:pt-20 mt-16 overflow-hidden">
          {/* Giant low-opacity background "MANIFESTO" word */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none -z-10 opacity-[0.02] md:opacity-[0.03]">
            <span
              className="font-display font-black text-[15vw] tracking-[0.15em] uppercase leading-none text-transparent"
              style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)', fontFamily: 'var(--font-display)' }}
            >
              MANIFESTO
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-serif italic text-2xl md:text-3xl text-text-primary leading-tight">
                &ldquo;Where strength is built. <br />Where discipline is forged. <br />Where <span className="text-accent">champions</span> rise.&rdquo;
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center"
            >
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                CaliCore Academy is designed for individuals who view their bodies as their primary canvas. By stripping away heavy machinery and isolation pulleys, we restore raw, functional somatic integrity.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
