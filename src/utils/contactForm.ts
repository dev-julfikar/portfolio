import { sectionContent } from '../data/sections'

export interface ContactValues {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

/** Must match the hidden form in index.html so Netlify Forms detects it at deploy time. */
export const CONTACT_FORM_NAME = 'contact'
/** Honeypot field: hidden from people, so any value means a bot filled it in. */
export const HONEYPOT_FIELD = 'bot-field'

export const contactLimits = {
  name: { min: 2, max: 100 },
  subject: { max: 150 },
  message: { min: 10, max: 2000 },
}

const COOLDOWN_MS = 60_000
const COOLDOWN_KEY = 'contact:lastSent'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(values: ContactValues): ContactErrors {
  const messages = sectionContent.contact.errors
  const errors: ContactErrors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (name.length < contactLimits.name.min || name.length > contactLimits.name.max) errors.name = messages.name
  if (!EMAIL_PATTERN.test(email)) errors.email = messages.email
  if (values.subject.trim().length > contactLimits.subject.max) errors.subject = messages.subject
  if (message.length < contactLimits.message.min || message.length > contactLimits.message.max) {
    errors.message = messages.message
  }

  return errors
}

/** Posts the form to Netlify Forms (url-encoded, as Netlify expects). */
export async function submitContact(values: ContactValues, honeypot: string): Promise<void> {
  const body = new URLSearchParams({
    'form-name': CONTACT_FORM_NAME,
    [HONEYPOT_FIELD]: honeypot,
    name: values.name.trim(),
    email: values.email.trim(),
    subject: values.subject.trim(),
    message: values.message.trim(),
  })

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })
  if (!response.ok) throw new Error(`Contact form failed with ${response.status}`)
}

// Client-side cooldown between submissions. Netlify's spam filtering is the server-side guard;
// this only stops accidental or scripted repeat sends from the same browser.
export function isCoolingDown(): boolean {
  try {
    const lastSent = Number(localStorage.getItem(COOLDOWN_KEY))
    return Date.now() - lastSent < COOLDOWN_MS
  } catch {
    return false
  }
}

export function startCooldown(): void {
  try {
    localStorage.setItem(COOLDOWN_KEY, String(Date.now()))
  } catch {
    // Storage unavailable (private mode); skip the cooldown.
  }
}
