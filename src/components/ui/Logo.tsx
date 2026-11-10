import { profile } from '../../data/profile'

const bracketClass = 'text-primary-600 dark:text-accent-400'

// Code-style brand mark, <Julfikar />, with tinted brackets. Screen readers hear the full name instead.
function Logo() {
  return (
    <>
      <span aria-hidden="true">
        <span className={bracketClass}>&lt;</span>
        {profile.brand}
        <span className={bracketClass}>{' />'}</span>
      </span>
      <span className="sr-only">{profile.name}</span>
    </>
  )
}

export default Logo
