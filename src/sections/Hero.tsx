import Button from '../components/ui/Button'
import { CodeIcon, GraduationCapIcon } from '../components/ui/Icons'
import { sectorIcons } from '../components/ui/sectorIcons'
import { heroLinks } from '../data/navigation'
import { experience } from '../data/experience'
import { profile } from '../data/profile'
import { sectionContent } from '../data/sections'
import { yearsSince } from '../utils/date'

const content = sectionContent.hero

const floatCardClass =
  'absolute w-44 rounded-2xl border border-gray-200 bg-white/90 px-4 py-3 shadow-xl shadow-gray-900/10 backdrop-blur motion-safe:animate-float dark:border-gray-800 dark:bg-gray-900/90 dark:shadow-black/40'
const cardLabelClass = 'text-xs font-medium text-gray-500 dark:text-gray-400'
const cardValueClass = 'font-heading text-2xl font-bold text-primary-600 dark:text-accent-400'

function Hero() {
  const years = yearsSince(experience.map((job) => job.startDate))
  // Oldest job first, each sector once: e.g. Telecom → Banking → Public Service
  const journey = [...experience]
    .reverse()
    .map((job) => job.sector)
    .filter((sector, index, all): sector is string => Boolean(sector) && all.indexOf(sector) === index)

  return (
    <section aria-labelledby="hero-heading" className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 motion-safe:animate-fade-up lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="text-sm font-semibold tracking-wide text-primary-600 uppercase dark:text-accent-400">
            {profile.title}
          </p>
          <h1
            id="hero-heading"
            className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white"
          >
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-300">
            {profile.headline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {heroLinks.map((link, index) => (
              <Button key={link.href} to={link.href} variant={index === 0 ? 'primary' : 'secondary'}>
                {link.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Portrait with floating stats */}
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-sm">
          <div className="relative aspect-square">
            {/* Glow */}
            <div
              aria-hidden="true"
              className="absolute inset-[6%] rounded-full bg-linear-to-br from-primary-500 to-accent-400 opacity-40 blur-3xl dark:opacity-30"
            />
            {/* Dashed orbit */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary-300/70 dark:border-primary-400/30"
            />
            {/* Gradient ring + photo */}
            <div className="absolute inset-[9%] rounded-full bg-linear-to-br from-primary-500 via-primary-600 to-accent-400 p-1.5 shadow-2xl shadow-primary-900/20">
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width={640}
                height={800}
                fetchPriority="high"
                className="size-full rounded-full bg-white object-cover object-[center_15%] ring-4 ring-white dark:ring-gray-950"
              />
            </div>

            {/* Floating cards; each bobs at its own phase so they don't move in sync */}
            <dl>
              <div className={`${floatCardClass} top-[8%] -left-2 flex flex-col-reverse sm:-left-6`}>
                <dt className={cardLabelClass}>{content.experienceLabel}</dt>
                <dd className={cardValueClass}>{years}+</dd>
              </div>

              {profile.alumni && (
                <div
                  className={`${floatCardClass} top-[30%] -right-2 flex flex-col-reverse [animation-delay:-2s] sm:-right-10 lg:-right-14`}
                >
                  <dt className={cardLabelClass}>{content.alumniLabel}</dt>
                  <dd className={`${cardValueClass} flex items-center gap-2`}>
                    <GraduationCapIcon className="size-6" />
                    {profile.alumni}
                  </dd>
                </div>
              )}

              {profile.openToWork && (
                <div className={`${floatCardClass} bottom-[8%] -left-2 flex flex-col-reverse [animation-delay:-4s] sm:-left-6`}>
                  <dt className={cardLabelClass}>{content.availableLabel}</dt>
                  <dd className="flex items-center gap-2.5 font-heading text-2xl font-bold text-green-600 dark:text-green-400">
                    <span aria-hidden="true" className="relative flex size-3">
                      <span className="absolute inline-flex size-full rounded-full bg-green-400 opacity-75 motion-safe:animate-ping" />
                      <span className="relative inline-flex size-3 rounded-full bg-green-500" />
                    </span>
                    {content.availableValue}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Career journey: one card per sector, current one highlighted */}
          {journey.length > 0 && (
            <ol aria-label={content.journeyLabel} className="mt-10 grid grid-cols-3 gap-6 lg:-mx-8 lg:mt-6">
              {journey.map((sector, index) => {
                const Icon = sectorIcons[sector] ?? CodeIcon
                const isCurrent = index === journey.length - 1
                return (
                  <li
                    key={sector}
                    className={`relative flex flex-col items-center gap-2 rounded-2xl border px-2 py-4 text-center lg:gap-1.5 lg:py-3 shadow-lg ${
                      isCurrent
                        ? 'border-transparent bg-linear-to-br from-primary-600 to-primary-800 text-white shadow-primary-600/30 dark:from-accent-400 dark:to-accent-500 dark:text-gray-900 dark:shadow-accent-400/20'
                        : 'border-gray-200 bg-white text-gray-900 shadow-gray-900/5 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:shadow-black/30'
                    }`}
                  >
                    {index > 0 && (
                      <span
                        aria-hidden="true"
                        className="absolute top-1/2 -left-5 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                      >
                        →
                      </span>
                    )}
                    <span
                      className={`flex size-10 items-center justify-center rounded-xl lg:size-9 ${
                        isCurrent
                          ? 'bg-white/15 dark:bg-gray-900/10'
                          : 'bg-primary-50 text-primary-600 dark:bg-primary-400/10 dark:text-accent-400'
                      }`}
                    >
                      <Icon />
                    </span>
                    <span className="text-sm leading-tight font-semibold">{sector}</span>
                    {isCurrent && (
                      <span className="text-[0.65rem] font-semibold tracking-wider uppercase opacity-80">
                        {content.currentLabel}
                      </span>
                    )}
                  </li>
                )
              })}
            </ol>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
