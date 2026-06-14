import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 font-medium uppercase tracking-[0.15em] text-accent text-xs font-mono',
        className
      )}
    >
      <span className="w-0.5 h-4 bg-accent rounded-full shrink-0" />
      <span>{children}</span>
    </div>
  )
}
