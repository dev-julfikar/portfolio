import type { NavLink } from '../types'

export const navLinks: NavLink[] = [
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
]

// Hero call-to-action buttons; the first is the primary action.
export const heroLinks: NavLink[] = [
  { label: 'Get in touch', href: '/contact' },
  { label: 'View experience', href: '/experience' },
]
