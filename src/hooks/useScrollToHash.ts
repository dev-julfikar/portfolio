import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Client-side navigation doesn't scroll on its own: jump to the #section in the
// URL, or to the top of the page when there is no hash.
export function useScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
    } else {
      // A new page should start at the top immediately, not smooth-scroll there.
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])
}
