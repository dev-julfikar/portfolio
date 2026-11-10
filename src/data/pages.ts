import { profile } from './profile'

export interface PageMeta {
  title: string
  description: string
}

// <title> and meta description for each route (see usePageMeta)
export const pageMeta: Record<'home' | 'projects' | 'experience' | 'education' | 'skills' | 'contact', PageMeta> = {
  home: {
    title: `${profile.name} | AP, RUET`,
    description: profile.headline,
  },
  projects: {
    title: `Projects | ${profile.name}`,
    description:
      'Web applications built for RUET, including the undergraduate and post-graduate admission systems, career portal and guest house booking system.',
  },
  experience: {
    title: `Experience | ${profile.name}`,
    description: `Work history of ${profile.name} across Robi Axiata Limited, The City Bank Limited and RUET.`,
  },
  education: {
    title: `Education | ${profile.name}`,
    description: `Academic background and professional certifications of ${profile.name}.`,
  },
  skills: {
    title: `Skills | ${profile.name}`,
    description: `Frontend, backend, database, cloud and data engineering skills of ${profile.name}.`,
  },
  contact: {
    title: `Contact | ${profile.name}`,
    description: `Get in touch with ${profile.name} by email, phone or the contact form.`,
  },
}
