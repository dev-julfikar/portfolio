import { pageMeta } from '../data/pages'
import { usePageMeta } from '../hooks/usePageMeta'
import Experience from '../sections/Experience'

function ExperiencePage() {
  usePageMeta(pageMeta.experience)
  return <Experience />
}

export default ExperiencePage
