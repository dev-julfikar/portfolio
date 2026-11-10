import { pageMeta } from '../data/pages'
import { usePageMeta } from '../hooks/usePageMeta'
import Education from '../sections/Education'

function EducationPage() {
  usePageMeta(pageMeta.education)
  return <Education />
}

export default EducationPage
