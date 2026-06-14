import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface EyebrowLabelProps {
  children: ReactNode
  className?: string
}

export function EyebrowLabel({ children, className }: EyebrowLabelProps) {
  return (
    <span className={cn('eyebrow-label', className)}>
      {children}
    </span>
  )
}
