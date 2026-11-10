/** First letter of the first two words, e.g. "Payroll Management System" → "PM". */
export function getInitials(text: string): string {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')
}
