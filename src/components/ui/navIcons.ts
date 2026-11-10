import type { ComponentType } from 'react'
import {
  BriefcaseIcon,
  FolderIcon,
  GraduationCapIcon,
  LayersIcon,
  MailIcon,
  UserIcon,
  type IconProps,
} from './Icons'

// Icons for navLinks, keyed by NavLink.label
export const navIcons: Record<string, ComponentType<IconProps>> = {
  About: UserIcon,
  Projects: FolderIcon,
  Experience: BriefcaseIcon,
  Education: GraduationCapIcon,
  Skills: LayersIcon,
  Contact: MailIcon,
}
