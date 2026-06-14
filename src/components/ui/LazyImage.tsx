import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: string
  width?: number
  height?: number
  priority?: boolean
}

export function LazyImage({ src, alt, className, aspectRatio, width, height, priority = false }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(priority)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [priority])

  return (
    <div
      ref={ref}
      className={cn(
        'overflow-hidden bg-bg-elevated relative',
        className
      )}
      style={{
        aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : undefined),
      }}
    >
      {inView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setLoaded(true)}
          className={cn(
            'w-full h-full object-cover transition-all duration-700',
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          )}
        />
      )}
      {!loaded && (
        <div className="absolute inset-0 bg-bg-elevated animate-pulse" />
      )}
    </div>
  )
}
