import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { navLinks } from '../../data/navigation'
import { profile } from '../../data/profile'
import { CloseIcon, MenuIcon } from '../ui/Icons'
import { navIcons } from '../ui/navIcons'
import Logo from '../ui/Logo'
import ThemeToggle from '../ui/ThemeToggle'

const linkClass =
  'flex items-center rounded-md px-3 py-2 font-medium transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-gray-800 dark:hover:text-primary-400'
const idleClass = 'text-gray-700 dark:text-gray-300'
const activeClass = 'bg-primary-50 text-primary-700 dark:bg-primary-400/10 dark:text-primary-300'

interface NavItemProps {
  to: string
  className: string
  onClick?: () => void
  children: ReactNode
}

// "/" only highlights on the home page itself (`end`), not on every route beneath it.
// Re-clicking the current page's link returns to the top, since the URL doesn't change.
function NavItem({ to, className, onClick, children }: NavItemProps) {
  const { pathname } = useLocation()

  const handleClick = () => {
    if (pathname === to) window.scrollTo({ top: 0 })
    onClick?.()
  }

  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={handleClick}
      className={({ isActive }) => `${className} ${isActive ? activeClass : idleClass}`}
    >
      {children}
    </NavLink>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-gray-800 dark:bg-gray-950/90">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          to="/"
          onClick={closeMenu}
          aria-label={`${profile.name}, home`}
          className="rounded-md font-heading text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          <Logo />
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 text-sm md:flex">
            {navLinks.map((link) => {
              const Icon = navIcons[link.label]
              return (
                <li key={link.href}>
                  <NavItem to={link.href} className={`gap-1.5 ${linkClass}`}>
                    {/* Icons only from lg: at md the six links barely fit as text */}
                    {Icon && <Icon className="hidden size-4 opacity-70 lg:block" />}
                    {link.label}
                  </NavItem>
                </li>
              )
            })}
          </ul>

          <ThemeToggle />

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-gray-200 md:hidden dark:border-gray-800">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => {
              const Icon = navIcons[link.label]
              return (
                <li key={link.href}>
                  <NavItem to={link.href} onClick={closeMenu} className={`gap-3 ${linkClass}`}>
                    {Icon && <Icon className="size-5 opacity-70" />}
                    {link.label}
                  </NavItem>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
