import type { ReactNode } from 'react'

interface SectionTitleProps {
  /** Used by the section's aria-labelledby */
  id: string
  /** h1 when the section is a page of its own, h2 inside a longer page */
  as?: 'h1' | 'h2'
  children: ReactNode
}

function SectionTitle({ id, as: Heading = 'h2', children }: SectionTitleProps) {
  return (
    <Heading id={id} className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
      {children}
    </Heading>
  )
}

export default SectionTitle
