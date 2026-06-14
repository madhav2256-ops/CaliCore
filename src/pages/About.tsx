import { motion } from 'framer-motion'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { LazyImage } from '@/components/ui/LazyImage'
import { siteConfig } from '@/data/siteConfig'
import { ArrowDown, ArrowRight } from 'lucide-react'

export default function About() {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <PageTransition>
      <SEO
        title="Our Story & Philosophy | CaliCore Academy"
        description="Discover how CaliCore Academy returned to raw bodyweight sovereignty in Laxmi Nagar, Delhi. Meet founder Head Coach Abdul Sir and explore our machine-free philosophy."
        url="/about"
      />

      <main id="main-content" className="bg-[#0D0D0D] text-[#F5F2EC] font-sans relative overflow-x-hidden selection:bg-[#FF4D1C] selection:text-[#0D0D0D] pb-32">
        {/* Custom CSS overrides for Stitch Typography & Layout */}
        <style dangerouslySetInnerHTML={{ __html: `
          .text-hero {
            font-family: 'Bebas Neue', sans-serif;
            text-transform: uppercase;
            letter-spacing: -0.04em;
            line-height: 0.85;
          }
          .text-h2 {
            font-family: 'Bebas Neue', sans-serif;
            text-transform: uppercase;
            letter-spacing: -0.02em;
            line-height: 1;
          }
          .text-label {
            font-family: 'Oswald', sans-serif;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
          .noise-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
            z-index: 40;
            opacity: 0.02;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          }
          .text-glow-ember {
            text-shadow: 0 0 20px rgba(255, 77, 28, 0.5), 0 0 40px rgba(255, 77, 28, 0.2);
          }
        `}} />

        {/* Gritty Texture Overlay */}
        <div className="noise-overlay"></div>

        {/* Ambient background glows */}
        <div className="absolute top-[15%] left-[-10%] w-[60%] aspect-square bg-[radial-gradient(circle,rgba(255,77,28,0.04)_0%,transparent_70%)] pointer-events-none z-0" />
        <div className="absolute top-[50%] right-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle,rgba(244,166,35,0.03)_0%,transparent_70%)] pointer-events-none z-0" />

        {/* 1. Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-end pb-24 pt-32 px-6 md:px-12 lg:px-24 border-b border-[#2E2E30]">
          <div className="absolute inset-0 z-0">
            <LazyImage
              src="https://lh3.googleusercontent.com/aida/AP1WRLvg6agQnvGHWsC0_ki-rnGIbsHrQiJaTDAmVja3jOrzLXDNZfQ9P38wiK0y9JwucEuIBbsYhG3ozP26dzJc49ojeN0L7gI4V4cCyEN0x9I6-RAMXnMco_C340fXTqOGERsTUiS7jMlACN0eOJG88BqvPBh6PFt4huuxsGdC2XwlUvm_wLhUc1Vf1HeLTUxhvspNhw8O6AMnDpWUPaoHp9Nmoq6zRa9KqFbDmRBpAL6cLqLt3YN15A1xpho"
              alt="Gritty cinematic gym interior in Delhi"
              priority={true}
              className="w-full h-full object-cover object-center opacity-40 grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 to-transparent"></div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl relative z-10 w-full"
          >
            <motion.span variants={revealVariants} className="text-label text-[#F4A623] text-xs md:text-sm mb-6 block flex items-center gap-2">
              <span className="w-8 h-px bg-[#F4A623]"></span>
              ESTABLISHED IN DELHI
            </motion.span>
            
            <motion.h1
              variants={revealVariants}
              className="text-hero text-6xl md:text-8xl lg:text-[120px] text-[#F5F2EC] mb-6 drop-shadow-2xl"
            >
              FORGED IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D1C] to-[#B8291E] text-glow-ember font-black">FIRE</span><br />
              &amp; STEEL
            </motion.h1>
            
            <motion.p
              variants={revealVariants}
              className="font-body text-[#8C8C8C] text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            >
              We strip away the artificial. We reject the machine. At CaliCore Academy, your body is the only equipment you need to forge true strength, resilience, and discipline.
            </motion.p>
            
            <motion.div variants={revealVariants}>
              <a className="group inline-flex items-center gap-3 text-label text-[#F5F2EC] hover:text-[#FF4D1C] transition-colors" href="#story">
                SCROLL TO DISCOVER
                <ArrowDown className="text-[#FF4D1C] group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* 2. Origin Story / The Forge So Far */}
        <section id="story" className="relative py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            
            {/* Image Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={revealVariants}
              className="w-full md:w-5/12"
            >
              <div className="relative group">
                <div className="absolute -inset-4 border border-[#2E2E30]/50 translate-x-4 translate-y-4 z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500 rounded-sm"></div>
                <LazyImage
                  src="https://lh3.googleusercontent.com/aida/AP1WRLszpRWLHADx9oktd_9k_BGjttvbgYPqXX2huCTv7Ayh2B7FO_71NZUgRooUK72cG0sDXd1p8HEF6-GXKCp1KFRX4LtajaS-IIRl1GKpmSD3bzz29I6f4f98EgqU-EfjtCe8nd38inQ--QUQMU97RuTS0Ty0ssZR0uWe8XjKoTvJ8Q1Qbx-0iWAnkOZyCfD3RSu8S-17Z7cSoc6RvuUeHKigq94-G1Qd-npUKX_59GcxBhLX5KlBhaSLiMU"
                  alt="Industrial calisthenics equipment against a dark concrete wall"
                  width={1280}
                  height={720}
                  className="relative z-10 w-full h-[500px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-[#2E2E30]"
                />
                <div className="absolute bottom-6 left-6 z-20 bg-[#0D0D0D]/90 backdrop-blur border border-[#2E2E30] p-4 rounded-sm shadow-xl flex items-center gap-4">
                  <img
                    alt="CaliCore Mark"
                    className="w-8 h-8 object-contain"
                    src={siteConfig.logo}
                  />
                  <span className="text-h2 text-xl md:text-2xl text-[#F5F2EC]">EST. 2018</span>
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={revealVariants}
              className="w-full md:w-7/12 space-y-6"
            >
              <span className="text-label text-[#8C8C8C] text-sm block">| THE FORGE SO FAR</span>
              <h2 className="text-h2 text-5xl md:text-6xl text-[#F5F2EC] leading-none">
                BORN FROM THE <span className="text-[#FF4D1C] text-glow-ember">CONCRETE</span>
              </h2>
              <div className="space-y-6 text-[#8C8C8C] text-lg font-body leading-relaxed border-l border-[#2E2E30]/30 pl-6">
                <p>
                  What started as a small group of dedicated athletes training in a Delhi park has evolved into a sanctuary for movement mastery. We didn't want mirrors. We didn't want air conditioning. We wanted resistance.
                </p>
                <p>
                  Our Laxmi Nagar academy was built with raw determination and grit. Every pull-up bar, every parallel bar carries the sweat of our founding practitioners. It is a space designed not for comfort, but for transformation.
                </p>
                <p className="text-[#F5F2EC] font-semibold">
                  We are more than a gym. We are a crucible where willpower is tested and true athletes are forged.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 3. Philosophy Milestones */}
        <section className="relative py-32 bg-[#1A1A1D] border-y border-[#2E2E30]/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            
            <div className="text-center mb-20">
              <span className="text-label text-[#FF4D1C] text-sm block mb-4">| PHILOSOPHY</span>
              <h2 className="text-h2 text-5xl md:text-7xl text-[#F5F2EC] leading-none">
                WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D1C] to-[#B8291E] text-glow-ember">MACHINE-FREE?</span>
              </h2>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-b border-[#2E2E30]/30 py-12"
            >
              {/* Milestone 1 */}
              <motion.div variants={revealVariants} className="text-center">
                <div className="text-hero text-7xl md:text-9xl text-[#F4A623] mb-4 opacity-90 leading-none">0%</div>
                <h3 className="text-label text-[#F5F2EC] text-xl mb-4 tracking-widest">MACHINES</h3>
                <p className="text-[#8C8C8C] font-body text-sm md:text-base px-4 leading-relaxed">
                  Isolating muscles on a padded seat builds illusion, not capability. We teach you to move your body through space, engaging every stabilizing muscle group.
                </p>
              </motion.div>
              
              {/* Milestone 2 */}
              <motion.div variants={revealVariants} className="text-center border-y md:border-y-0 md:border-x border-[#2E2E30]/30 py-12 md:py-0">
                <div className="text-hero text-7xl md:text-9xl text-[#FF4D1C] mb-4 opacity-90 flex justify-center items-baseline leading-none">
                  5.0<span className="text-5xl ml-2 font-bold">★</span>
                </div>
                <h3 className="text-label text-[#F5F2EC] text-xl mb-4 tracking-widest">GOOGLE RATING</h3>
                <p className="text-[#8C8C8C] font-body text-sm md:text-base px-4 leading-relaxed">
                  Tested and proven by hundreds of athletes in Delhi. A community forged in mutual effort and shared movement progression.
                </p>
              </motion.div>
              
              {/* Milestone 3 */}
              <motion.div variants={revealVariants} className="text-center">
                <div className="text-hero text-7xl md:text-9xl text-[#F5F2EC] mb-4 opacity-80 leading-none">100%</div>
                <h3 className="text-label text-[#F5F2EC] text-xl mb-4 tracking-widest">HUMAN EFFORT</h3>
                <p className="text-[#8C8C8C] font-body text-sm md:text-base px-4 leading-relaxed">
                  No shortcuts. No assistance. Just gravity, leverage, and sheer force of will. The ultimate test of human movement mechanics.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* 4. Coaches Timeline Narrative */}
        <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0D0D0D]">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-left mb-20">
              <span className="text-label text-[#8C8C8C] text-sm block mb-4">| LEADERSHIP</span>
              <h2 className="text-h2 text-5xl md:text-6xl text-[#F5F2EC] leading-none">
                THE <span className="text-[#F4A623]">MASTERS</span> OF MOVEMENT
              </h2>
            </div>

            {/* Continuous Timeline Flow */}
            <div className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop Center, Mobile Left) */}
              <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF4D1C] via-[#2E2E30] to-transparent -translate-x-1/2"></div>

              {/* Coach 1: Head Coach Abdul Sir */}
              <div className="relative flex flex-col md:flex-row items-center justify-between mb-24 w-full">
                {/* Node */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-sm bg-[#FF4D1C] border-4 border-[#0D0D0D] -translate-x-1/2 mt-6 md:mt-0 z-10 shadow-[0_0_15px_rgba(255,77,28,0.5)]"></div>
                
                {/* Content Left */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={revealVariants}
                  className="w-full md:w-5/12 pl-8 md:pl-0 md:text-right md:pr-12"
                >
                  <h3 className="text-h2 text-3xl text-[#F5F2EC] mb-2">ABDUL SIR</h3>
                  <h4 className="text-label text-[#FF4D1C] text-sm mb-4">HEAD COACH &amp; FOUNDER</h4>
                  <p className="font-body text-[#8C8C8C] text-sm md:text-base leading-relaxed">
                    A pioneer of street calisthenics in India. Abdul forged his strength on raw bars before formalizing his methods. His coaching philosophy centers on brutal basics and uncompromising form.
                  </p>
                </motion.div>
                
                {/* Spacer */}
                <div className="hidden md:block w-2/12"></div>
                
                {/* Image Right */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={revealVariants}
                  className="w-full md:w-5/12 pl-8 md:pl-0 mt-8 md:mt-0"
                >
                  <div className="aspect-square bg-[#1A1A1D] border border-[#2E2E30] p-2 rounded-sm grayscale hover:grayscale-0 transition duration-500">
                    <LazyImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeZ3tErmoW_-WCVMQtdwIGFgj1K2hYIGQ4Dl-Af2uYO7sTlxERWDiwY1BdjowGAbMu2uST1RUs8Yv-QG-nvd5EBi5euy_byAt3mz1oW6d7RpKjVQrEDwndBUGJmH6XPUUSKB6Y2pd-heqhvSg4BwLYLARaS8Xr46MghQFJTHDNkpRy_95jrM9oWOzYCh71e_FpRzK3bJaL8k4ru-zsghd14AOQK_355TZs8fsTCL_nyV8Qu8HVbqTF0-d3YrAzqQAgL00KpYxOBfU"
                      alt="Head Coach Abdul Sir"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-sm border border-[#2E2E30]"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Coach 2: Visiting Coaches */}
              <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full">
                {/* Node */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-sm bg-[#2E2E30] border-4 border-[#0D0D0D] -translate-x-1/2 mt-6 md:mt-0 z-10"></div>
                
                {/* Content Right */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={revealVariants}
                  className="w-full md:w-5/12 pl-8 md:pl-0 md:pl-12"
                >
                  <h3 className="text-h2 text-3xl text-[#F5F2EC] mb-2">THE BROTHERHOOD</h3>
                  <h4 className="text-label text-[#F4A623] text-sm mb-4">VISITING MASTERS</h4>
                  <p className="font-body text-[#8C8C8C] text-sm md:text-base leading-relaxed">
                    CaliCore regularly hosts street workout specialists and gymnastics experts. We believe in constantly evolving our methodology by learning from the best practitioners globally.
                  </p>
                </motion.div>
                
                {/* Spacer */}
                <div className="hidden md:block w-2/12"></div>
                
                {/* Image Left */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={revealVariants}
                  className="w-full md:w-5/12 pl-8 md:pl-0 mt-8 md:mt-0"
                >
                  <div className="aspect-[4/3] bg-[#1A1A1D] border border-[#2E2E30] p-2 rounded-sm grayscale hover:grayscale-0 transition duration-500">
                    <LazyImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr0_ccPYla-btdF9_YCmoJ0Yg43IKZ5NINyJ8fqgRtp1lfwZr_ITSE_j0dUGDyWX5eceXHFOUq_DuH25Hf8Et752HB5O2HinqxKz1T-Ib-r2tMQi1IAy0l1GPnGSGs3EfWAskDYja_YEhS8SlGt51XgKc80Zr1Lw2KT8hvG6GLYchodXBBjR-6iN3EmD0lCFx3-aoF_FsYOt3KNcYrdo4-7spUC7NCioHZLN78twFLYv4YOp3mOE7Bj5976jo04VAl9idecWjRx8M"
                      alt="CaliCore training rig team"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover rounded-sm border border-[#2E2E30]"
                    />
                  </div>
                </motion.div>
              </div>

            </div>

          </div>
        </section>

        {/* 5. Brand Creed / Final CTA */}
        <section className="relative py-40 flex items-center justify-center text-center px-6 border-t border-[#2E2E30]/30 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-[#FF4D1C]/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="relative z-10 max-w-4xl"
          >
            <img
              alt="CaliCore Shield"
              className="w-16 h-16 object-contain mx-auto mb-8 opacity-80"
              src={siteConfig.logo}
            />
            
            <h2 className="text-hero text-6xl md:text-8xl lg:text-9xl text-[#F5F2EC] mb-10 leading-none">
              WE DON'T USE MACHINES.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D1C] to-[#B8291E] text-glow-ember font-black">WE BECOME THEM.</span>
            </h2>
            
            <a
              className="inline-flex items-center gap-3 font-label text-xl tracking-widest bg-[#FF4D1C] text-[#0D0D0D] px-10 py-5 rounded-sm hover:bg-[#F5F2EC] hover:text-[#0D0D0D] transition-all duration-300 transform hover:scale-105 group font-bold shadow-[0_0_20px_rgba(255,77,28,0.3)]"
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN THE FORGE
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </section>

      </main>
    </PageTransition>
  )
}
