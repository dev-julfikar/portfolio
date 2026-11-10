import SectionTitle from '../components/ui/SectionTitle'
import { experience } from '../data/experience'
import { sectionContent } from '../data/sections'
import { toDateTime } from '../utils/date'

const subheadingClass = 'text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-gray-100'

function Experience() {
  const { id, title, responsibilitiesLabel, achievementsLabel, currentLabel } = sectionContent.experience

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle id={`${id}-heading`} as="h1">{title}</SectionTitle>

        <ol className="mt-10">
          {experience.map((job) => {
            const isCurrent = job.endDate === null
            return (
              <li
                key={`${job.organization}-${job.startDate}`}
                className="relative border-l border-gray-200 pb-12 pl-6 last:pb-0 md:ml-40 md:pl-8 dark:border-gray-800"
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-1.5 -left-[5px] size-2.5 rounded-full ring-4 ring-white dark:ring-gray-950 ${
                    isCurrent ? 'bg-primary-600 dark:bg-accent-400' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />

                {/* On wide screens the dates sit in the gutter left of the timeline line */}
                <p className="text-sm font-medium text-gray-600 md:absolute md:top-0.5 md:-left-40 md:w-32 md:text-right dark:text-gray-400">
                  <time dateTime={toDateTime(job.startDate)}>{job.startDate}</time>
                  {' – '}
                  {job.endDate ? <time dateTime={toDateTime(job.endDate)}>{job.endDate}</time> : currentLabel}
                </p>

                <h3 className="mt-1 text-xl font-semibold text-gray-900 md:mt-0 dark:text-white">{job.role}</h3>
                <p className="mt-1 font-medium text-primary-700 dark:text-primary-300">{job.organization}</p>

                <div className="max-w-3xl">
                  <h4 className={`mt-6 ${subheadingClass}`}>{responsibilitiesLabel}</h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600 marker:text-gray-400 dark:text-gray-300 dark:marker:text-gray-600">
                    {job.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  {job.achievements.length > 0 && (
                    <div className="mt-6 rounded-lg bg-accent-50 p-4 dark:bg-accent-400/10">
                      <h4 className={subheadingClass}>{achievementsLabel}</h4>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700 marker:text-accent-600 dark:text-gray-200 dark:marker:text-accent-400">
                        {job.achievements.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Experience
