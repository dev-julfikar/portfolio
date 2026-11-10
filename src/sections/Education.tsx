import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import SectionTitle from '../components/ui/SectionTitle'
import { profile } from '../data/profile'
import { sectionContent } from '../data/sections'
import { toDateTime } from '../utils/date'

function Education() {
  const { id, title, certificationsLabel } = sectionContent.education

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle id={`${id}-heading`} as="h1">{title}</SectionTitle>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {profile.education.map((item) => (
            <li key={`${item.institution}-${item.startDate}`}>
              <Card className="h-full p-6">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  <time dateTime={toDateTime(item.startDate)}>{item.startDate}</time>
                  {' – '}
                  <time dateTime={toDateTime(item.endDate)}>{item.endDate}</time>
                </p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">{item.degree}</h3>
                <p className="mt-1 font-medium text-primary-700 dark:text-primary-300">{item.institution}</p>
                {item.result && (
                  <div className="mt-4">
                    <Badge variant="accent">{item.result}</Badge>
                  </div>
                )}
              </Card>
            </li>
          ))}
        </ul>

        {profile.certifications.length > 0 && (
          <>
            <h3
              id={`${id}-certifications-heading`}
              className="mt-12 text-xl font-semibold text-gray-900 dark:text-white"
            >
              {certificationsLabel}
            </h3>
            <ul
              aria-labelledby={`${id}-certifications-heading`}
              className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {profile.certifications.map((cert) => (
                <li key={cert.title}>
                  <Card className="h-full p-5">
                    <p className="font-medium text-gray-900 dark:text-white">{cert.title}</p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  </Card>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}

export default Education
