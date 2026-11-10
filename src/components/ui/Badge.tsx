import type { ReactNode } from 'react'

type Variant = 'neutral' | 'accent'

const variantClass: Record<Variant, string> = {
  neutral: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  accent: 'bg-accent-100 text-accent-800 dark:bg-accent-400/10 dark:text-accent-300',
}

interface BadgeProps {
  variant?: Variant
  children: ReactNode
}

function Badge({ variant = 'neutral', children }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClass[variant]}`}>
      {children}
    </span>
  )
}

export default Badge
