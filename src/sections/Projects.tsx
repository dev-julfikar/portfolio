import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import { CodeIcon, ExternalLinkIcon, GitHubIcon } from '../components/ui/Icons'
import SectionTitle from '../components/ui/SectionTitle'
import { projects } from '../data/projects'
import { sectionContent } from '../data/sections'
import type { Project } from '../types'
import { getInitials } from '../utils/text'

const content = sectionContent.projects

const linkClass =
  'inline-flex items-center gap-1.5 rounded-md text-sm font-semibold transition-colors'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden shadow-sm transition duration-300 hover:shadow-xl hover:shadow-primary-600/10 motion-safe:hover:-translate-y-1 dark:hover:border-gray-700 dark:hover:shadow-black/40">
      <div className="relative aspect-video overflow-hidden border-b border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt ?? `Screenshot of ${project.title}`}
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
          />
        ) : (
          // Decorative fallback banner until a screenshot is added
          <div
            aria-hidden="true"
            className="flex size-full items-center justify-center bg-linear-to-br from-primary-500 via-primary-700 to-primary-950"
          >
            <span className="font-heading text-5xl font-bold tracking-tight text-white/90">
              {getInitials(project.title)}
            </span>
          </div>
        )}

        {project.featured && (
          <span className="absolute top-3 left-3 rounded-full bg-accent-400 px-2.5 py-0.5 text-xs font-semibold text-gray-900 shadow">
            {content.featuredLabel}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {(project.role || project.period) && (
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            {project.role && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white shadow-sm shadow-primary-600/30 dark:bg-accent-400 dark:text-gray-900 dark:shadow-none">
                <CodeIcon className="size-3.5" />
                {project.role}
              </span>
            )}
            {project.period && (
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{project.period}</span>
            )}
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{project.shortDescription}</p>

        {project.tags.length > 0 && (
          <ul aria-label={`${project.title} technologies`} className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
        )}

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} text-primary-700 hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-200`}
              >
                {content.liveLabel}
                <ExternalLinkIcon />
                <span className="sr-only">{content.newTabLabel}</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white`}
              >
                <GitHubIcon className="size-4" />
                {content.sourceLabel}
                <span className="sr-only">{content.newTabLabel}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}

function Projects() {
  const { id, title, emptyMessage } = content

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle id={`${id}-heading`} as="h1">{title}</SectionTitle>

        {projects.length > 0 ? (
          <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-600 dark:border-gray-700 dark:text-gray-400">
            {emptyMessage}
          </p>
        )}
      </div>
    </section>
  )
}

export default Projects
