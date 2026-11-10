import type { ComponentType } from 'react'
import { GitHubIcon, LinkedInIcon, type IconProps } from './Icons'

// Icons for profile.socials, keyed by SocialLink.label
export const socialIcons: Record<string, ComponentType<IconProps>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
}
