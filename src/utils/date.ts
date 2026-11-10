/** Converts the CV's "MM/YYYY" into "YYYY-MM" for a <time dateTime> attribute. */
export function toDateTime(monthYear: string): string {
  const [month, year] = monthYear.split('/')
  return `${year}-${month}`
}

/** Whole years between the earliest "MM/YYYY" date and now, e.g. for "10+ years of experience". */
export function yearsSince(monthYears: string[]): number {
  if (monthYears.length === 0) return 0
  const earliest = monthYears.map(toDateTime).sort()[0]
  const [year, month] = earliest.split('-').map(Number)
  const now = new Date()
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month)
  return Math.floor(months / 12)
}
