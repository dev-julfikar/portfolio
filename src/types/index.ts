export interface Project {
  title: string
  slug: string
  shortDescription: string
  /** Your role on the project, e.g. "Full Stack Developer" */
  role?: string
  /** As written, e.g. "2019-Present" or "2025" */
  period?: string
  tags: string[]
  /** Path to a WebP screenshot in src/assets/images */
  image?: string
  imageAlt?: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Experience {
  role: string
  organization: string
  /** MM/YYYY, as written in the CV */
  startDate: string
  /** MM/YYYY, or null for the current role */
  endDate: string | null
  /** Industry, e.g. "Telecom"; shown in the hero's career journey (icons in sectorIcons.ts) */
  sector?: string
  responsibilities: string[]
  achievements: string[]
}

export interface Skill {
  category: string
  items: string[]
}

export interface NavLink {
  label: string
  /** Router path, e.g. "/" or "/projects" */
  href: string
}

export interface SocialLink {
  label: string
  url: string
}

export interface Education {
  degree: string
  institution: string
  result?: string
  startDate: string
  endDate: string
}

export interface Certification {
  title: string
  issuer: string
}

export interface Profile {
  name: string
  /** Short name shown as the navbar logo, e.g. <Julfikar /> */
  brand: string
  title: string
  location: string
  phone: string
  email: string
  socials: SocialLink[]
  /** Imported WebP from src/assets/images (4:5 portrait) */
  photo: string
  photoAlt: string
  /** Alumni tag shown in the hero, e.g. "KUETian" */
  alumni?: string
  /** Shows the "Available / Open to new roles" card in the hero */
  openToWork?: boolean
  /** One-line intro for the hero; the first sentence of the CV summary */
  headline: string
  summary: string
  interests: string[]
  education: Education[]
  certifications: Certification[]
}
