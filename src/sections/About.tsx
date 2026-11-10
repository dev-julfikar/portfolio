import SectionTitle from '../components/ui/SectionTitle'
import { CodeIcon } from '../components/ui/Icons'
import { sectorIcons } from '../components/ui/sectorIcons'
import { experience } from '../data/experience'
import { profile } from '../data/profile'
import { sectionContent } from '../data/sections'
import type { Experience } from '../types'

const content = sectionContent.about

const tileClass =
  'rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8 dark:border-gray-800 dark:bg-gray-900'
const labelClass = 'text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400'

function SectorIcon({ job, highlighted }: { job: Experience; highlighted?: boolean }) {
  const Icon = (job.sector && sectorIcons[job.sector]) || CodeIcon
  return (
    <span
      title={job.sector}
      className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl ${
        highlighted
          ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30 dark:bg-accent-400 dark:text-gray-900'
          : 'bg-primary-50 text-primary-600 ring-4 ring-white dark:bg-gray-800 dark:text-accent-400 dark:ring-gray-900'
      }`}
    >
      <Icon />
    </span>
  )
}

function About() {
  const { id, title } = content
  const currentJob = experience.find((job) => job.endDate === null)
  // Current role first, then earlier roles newest to oldest
  const timeline = currentJob ? [currentJob, ...experience.filter((job) => job !== currentJob)] : []

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle id={`${id}-heading`}>{title}</SectionTitle>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {/* Summary */}
          <div className="relative isolate flex flex-col justify-center overflow-hidden rounded-2xl bg-linear-to-br from-primary-600 via-primary-700 to-primary-900 p-8 text-white shadow-xl shadow-primary-900/20 md:p-10 lg:col-span-3">
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 -z-10 size-64 rounded-full bg-primary-400/40 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-16 -z-10 size-64 rounded-full bg-accent-400/20 blur-3xl"
            />
            {/* Oversized decorative quote mark */}
            <span
              aria-hidden="true"
              className="absolute top-2 right-8 -z-10 font-heading text-[10rem] leading-none font-bold text-white/10"
            >
              &rdquo;
            </span>

            <p className="text-lg leading-relaxed text-primary-50 md:text-xl md:leading-relaxed">{profile.summary}</p>
          </div>

          {/* Current role followed by earlier roles, joined as one timeline */}
          {currentJob && (
            <div className={`${tileClass} lg:col-span-2`}>
              <h3 className={labelClass}>{content.currentRoleLabel}</h3>
              <ol className="mt-5 space-y-6">
                {timeline.map((job, index) => {
                  const isCurrent = job === currentJob
                  return (
                    <li key={`${job.organization}-${job.startDate}`} className="relative flex gap-4">
                      {/* Line joining this icon to the next one */}
                      {index < timeline.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute top-10 -bottom-6 left-5 w-px -translate-x-1/2 bg-gray-200 dark:bg-gray-700"
                        />
                      )}
                      <SectorIcon job={job} highlighted={isCurrent} />
                      <div className="min-w-0">
                        <p
                          className={`font-semibold text-gray-900 dark:text-white ${isCurrent ? '' : 'text-sm'}`}
                        >
                          {job.role}
                        </p>
                        <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-300">{job.organization}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
          )}

          {/* Interests */}
          {profile.interests.length > 0 && (
            <div className={`${tileClass} lg:col-span-5`}>
              <h3 className={labelClass}>{content.interestsLabel}</h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {profile.interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 transition-colors hover:border-primary-400 hover:bg-primary-100 dark:border-primary-400/20 dark:bg-primary-400/10 dark:text-primary-200 dark:hover:border-primary-400/50"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
