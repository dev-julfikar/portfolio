import { pageMeta } from '../data/pages'
import { usePageMeta } from '../hooks/usePageMeta'
import About from '../sections/About'
import Hero from '../sections/Hero'

function Home() {
  usePageMeta(pageMeta.home)

  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export default Home
