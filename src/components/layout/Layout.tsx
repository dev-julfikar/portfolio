import { Outlet } from 'react-router'
import { useScrollToHash } from '../../hooks/useScrollToHash'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout() {
  useScrollToHash()

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-primary-600 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
