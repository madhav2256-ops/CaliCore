import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm',
        {
          'bg-accent text-white ember-glow hover:bg-accent-hover': variant === 'primary',
          'bg-transparent border border-text-primary/20 text-text-primary hover:border-accent hover:text-accent': variant === 'ghost',
          'bg-accent-gold text-bg-primary ember-glow hover:brightness-110': variant === 'gold',
        },
        {
          'px-4 py-2 text-xs': size === 'sm',
          'px-6 py-3 text-sm': size === 'md',
          'px-8 py-4 text-base': size === 'lg',
        },
        className
      )}
      style={{ fontFamily: 'var(--font-label)' }}
      {...props}
    >
      {children}
    </button>
  )
}
