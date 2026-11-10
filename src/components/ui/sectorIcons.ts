import type { ComponentType } from 'react'
import { AntennaIcon, BankIcon, LandmarkIcon, type IconProps } from './Icons'

// Icons for Experience.sector, keyed by the sector name
export const sectorIcons: Record<string, ComponentType<IconProps>> = {
  Telecom: AntennaIcon,
  Banking: BankIcon,
  'Public Service': LandmarkIcon,
}
