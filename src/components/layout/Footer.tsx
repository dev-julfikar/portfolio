import { profile } from '../../data/profile'
import { MailIcon } from '../ui/Icons'
import Logo from '../ui/Logo'
import { socialIcons } from '../ui/socialIcons'

const iconLinkClass =
  'rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-primary-400'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {year} <Logo />
        </p>

        <ul className="flex items-center gap-1">
          {profile.socials.map((social) => {
            const Icon = socialIcons[social.label]
            return (
              <li key={social.url}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`${iconLinkClass} flex text-sm`}
                >
                  {Icon ? <Icon /> : social.label}
                </a>
              </li>
            )
          })}
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email" className={`${iconLinkClass} flex`}>
              <MailIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
