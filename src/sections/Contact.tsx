import { useState, type ChangeEvent, type ComponentType, type FormEvent, type ReactNode } from 'react'
import {
  AlertCircleIcon,
  CheckCircleIcon,
  LockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
  TagIcon,
  UserIcon,
  type IconProps,
} from '../components/ui/Icons'
import SectionTitle from '../components/ui/SectionTitle'
import { socialIcons } from '../components/ui/socialIcons'
import { profile } from '../data/profile'
import { sectionContent } from '../data/sections'
import {
  CONTACT_FORM_NAME,
  HONEYPOT_FIELD,
  contactLimits,
  isCoolingDown,
  startCooldown,
  submitContact,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from '../utils/contactForm'

const content = sectionContent.contact

type Status = 'idle' | 'sending' | 'success' | 'error' | 'cooldown'

const emptyValues: ContactValues = { name: '', email: '', subject: '', message: '' }

// Input styling adapted from Flowbite's form components
const inputBaseClass =
  'block w-full rounded-lg border bg-gray-50 p-3 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:outline-none dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:bg-gray-900'
const inputStateClass = {
  valid:
    'border-gray-300 focus:border-primary-600 focus:ring-primary-600/15 dark:border-gray-700 dark:focus:border-primary-400 dark:focus:ring-primary-400/20',
  invalid:
    'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500/15 dark:border-red-400 dark:bg-red-400/5 dark:focus:ring-red-400/20',
}

interface ControlProps {
  id: string
  'aria-invalid': boolean
  'aria-describedby'?: string
  className: string
}

interface FieldProps {
  name: keyof ContactValues
  label: string
  optional?: boolean
  /** Leading icon inside the input */
  icon?: ComponentType<IconProps>
  /** Shown at the right of the label row, e.g. a character counter */
  aside?: ReactNode
  error?: string
  children: (props: ControlProps) => ReactNode
}

function Field({ name, label, optional, icon: Icon, aside, error, children }: FieldProps) {
  const id = `contact-${name}`
  const errorId = `${id}-error`
  const control = children({
    id,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    className: `${inputBaseClass} ${error ? inputStateClass.invalid : inputStateClass.valid} ${Icon ? 'ps-10' : ''}`,
  })

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-gray-900 dark:text-white">
          {label}
          {optional && (
            <span className="ml-1 font-normal text-gray-500 dark:text-gray-400">{content.fields.optional}</span>
          )}
        </label>
        {aside}
      </div>
      {Icon ? (
        <div className="relative">
          <div
            className={`pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 ${
              error ? 'text-red-500 dark:text-red-400' : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            <Icon className="size-4" />
          </div>
          {control}
        </div>
      ) : (
        control
      )}
      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

interface DetailProps {
  icon: ComponentType<IconProps>
  label: string
  children: ReactNode
}

function Detail({ icon: Icon, label, children }: DetailProps) {
  return (
    <li className="flex items-center gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/20">
        <Icon />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-primary-100">{label}</p>
        <div className="font-medium break-words text-white">{children}</div>
      </div>
    </li>
  )
}

const panelLinkClass =
  'rounded-sm underline-offset-4 hover:underline focus-visible:outline-white dark:focus-visible:outline-white'

function Contact() {
  const [values, setValues] = useState<ContactValues>(emptyValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name as keyof ContactValues
    setValues((current) => ({ ...current, [name]: event.target.value }))
    // Clear a field's error as soon as the visitor starts fixing it
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    const firstInvalid = (Object.keys(nextErrors) as (keyof ContactValues)[])[0]
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    if (isCoolingDown()) {
      setStatus('cooldown')
      return
    }

    // A filled honeypot means a bot: pretend it worked and send nothing.
    if (honeypot) {
      setStatus('success')
      setValues(emptyValues)
      return
    }

    setStatus('sending')
    try {
      await submitContact(values, honeypot)
      startCooldown()
      setStatus('success')
      setValues(emptyValues)
    } catch {
      setStatus('error')
    }
  }

  const statusMessage = {
    idle: '',
    sending: '',
    success: content.successMessage,
    error: content.errorMessage,
    cooldown: content.cooldownMessage,
  }[status]
  const isSuccess = status === 'success'
  const StatusIcon = isSuccess ? CheckCircleIcon : AlertCircleIcon

  return (
    <section id={content.id} aria-labelledby={`${content.id}-heading`} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle id={`${content.id}-heading`} as="h1">{content.title}</SectionTitle>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">{content.intro}</p>

        <div className="mt-10 grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-900/5 lg:grid-cols-5 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/30">
          {/* Contact details panel */}
          <div className="relative isolate overflow-hidden bg-linear-to-br from-primary-600 via-primary-700 to-primary-900 p-8 text-white md:p-10 lg:col-span-2">
            {/* Decorative glows */}
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 -z-10 size-64 rounded-full bg-primary-400/40 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-28 -left-20 -z-10 size-72 rounded-full bg-accent-400/20 blur-3xl"
            />

            <h3 className="text-2xl font-bold tracking-tight">{content.panelTitle}</h3>
            <p className="mt-3 text-primary-100">{content.panelText}</p>

            <ul aria-label={content.detailsLabel} className="mt-10 space-y-6">
              <Detail icon={MailIcon} label={content.emailLabel}>
                <a href={`mailto:${profile.email}`} className={panelLinkClass}>
                  {profile.email}
                </a>
              </Detail>
              <Detail icon={PhoneIcon} label={content.phoneLabel}>
                <a href={`tel:${profile.phone}`} className={panelLinkClass}>
                  {profile.phone}
                </a>
              </Detail>
              <Detail icon={MapPinIcon} label={content.locationLabel}>
                {profile.location}
              </Detail>
            </ul>

            <div className="mt-10 border-t border-white/15 pt-8">
              <p className="text-sm font-semibold tracking-wide text-primary-100 uppercase">{content.socialsLabel}</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {profile.socials.map((social) => {
                  const Icon = socialIcons[social.label]
                  return (
                    <li key={social.url}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 transition-colors hover:bg-white hover:text-primary-700 focus-visible:outline-white dark:focus-visible:outline-white"
                      >
                        {Icon && <Icon className="size-4" />}
                        {social.label}
                        <span className="sr-only">{content.newTabLabel}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Form */}
          <form
            name={CONTACT_FORM_NAME}
            aria-label={content.formLabel}
            noValidate
            onSubmit={handleSubmit}
            className="space-y-6 p-8 md:p-10 lg:col-span-3"
          >
            {/* Honeypot: hidden from people and screen readers; bots tend to fill every field */}
            <div className="hidden" aria-hidden="true">
              <label>
                {content.fields.honeypot}
                <input
                  name={HONEYPOT_FIELD}
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
              </label>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field name="name" label={content.fields.name} icon={UserIcon} error={errors.name}>
                {(props) => (
                  <input
                    {...props}
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={contactLimits.name.max}
                    placeholder={content.placeholders.name}
                    value={values.name}
                    onChange={handleChange}
                  />
                )}
              </Field>
              <Field name="email" label={content.fields.email} icon={MailIcon} error={errors.email}>
                {(props) => (
                  <input
                    {...props}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder={content.placeholders.email}
                    value={values.email}
                    onChange={handleChange}
                  />
                )}
              </Field>
            </div>

            <Field name="subject" label={content.fields.subject} optional icon={TagIcon} error={errors.subject}>
              {(props) => (
                <input
                  {...props}
                  name="subject"
                  type="text"
                  maxLength={contactLimits.subject.max}
                  placeholder={content.placeholders.subject}
                  value={values.subject}
                  onChange={handleChange}
                />
              )}
            </Field>

            <Field
              name="message"
              label={content.fields.message}
              error={errors.message}
              aside={
                <span aria-hidden="true" className="text-xs text-gray-500 tabular-nums dark:text-gray-400">
                  {values.message.length}/{contactLimits.message.max}
                </span>
              }
            >
              {(props) => (
                <textarea
                  {...props}
                  name="message"
                  rows={6}
                  required
                  maxLength={contactLimits.message.max}
                  placeholder={content.placeholders.message}
                  value={values.message}
                  onChange={handleChange}
                />
              )}
            </Field>

            {/* Announced to screen readers when the result changes */}
            <div role="status" aria-live="polite">
              {statusMessage && (
                <div
                  className={`flex items-start gap-3 rounded-lg border p-4 text-sm ${
                    isSuccess
                      ? 'border-green-300 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-400/10 dark:text-green-300'
                      : 'border-red-300 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-400/10 dark:text-red-300'
                  }`}
                >
                  <StatusIcon className="size-5 shrink-0" />
                  <p>{statusMessage}</p>
                </div>
              )}
            </div>

            <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <LockIcon className="size-3.5 shrink-0" />
                {content.privacyNote}
              </p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 motion-safe:hover:-translate-y-0.5 dark:shadow-primary-900/40 dark:focus:ring-primary-800"
              >
                {status === 'sending' ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                    />
                    {content.sendingLabel}
                  </>
                ) : (
                  <>
                    {content.submitLabel}
                    <SendIcon />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
