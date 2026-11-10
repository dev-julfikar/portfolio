import { pageMeta } from '../data/pages'
import { usePageMeta } from '../hooks/usePageMeta'
import Contact from '../sections/Contact'

function ContactPage() {
  usePageMeta(pageMeta.contact)
  return <Contact />
}

export default ContactPage
