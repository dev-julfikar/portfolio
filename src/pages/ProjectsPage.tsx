import { pageMeta } from '../data/pages'
import { usePageMeta } from '../hooks/usePageMeta'
import Projects from '../sections/Projects'

function ProjectsPage() {
  usePageMeta(pageMeta.projects)
  return <Projects />
}

export default ProjectsPage
