import type { ReactNode } from 'react'
import { Link } from 'react-router'

type Variant = 'primary' | 'secondary'

const baseClass =
  'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors'

const variantClass: Record<Variant, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  secondary:
    'border border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800',
}

interface ButtonProps {
  to: string
  variant?: Variant
  children: ReactNode
}

function Button({ to, variant = 'primary', children }: ButtonProps) {
  return (
    <Link to={to} className={`${baseClass} ${variantClass[variant]}`}>
      {children}
    </Link>
  )
}

export default Button
