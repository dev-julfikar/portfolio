import { pageMeta } from '../data/pages'
import { usePageMeta } from '../hooks/usePageMeta'
import Skills from '../sections/Skills'

function SkillsPage() {
  usePageMeta(pageMeta.skills)
  return <Skills />
}

export default SkillsPage
