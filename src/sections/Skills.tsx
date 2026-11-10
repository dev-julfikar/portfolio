import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import SectionTitle from '../components/ui/SectionTitle'
import { sectionContent } from '../data/sections'
import { skills } from '../data/skills'

function Skills() {
  const { id, title } = sectionContent.skills

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle id={`${id}-heading`} as="h1">{title}</SectionTitle>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <li key={group.category}>
              <Card className="h-full p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white">{group.category}</h3>
                <ul aria-label={group.category} className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge>{item}</Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
