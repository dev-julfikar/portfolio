import type { Project } from '../types'
import ugAdmission from '../assets/images/ug-admission.webp'
import poc from '../assets/images/poc.webp'
import certificateVerification from '../assets/images/certificate-verification.webp'
import guestHouseBooking from '../assets/images/guest-house-booking.webp'
import pgAutomation from '../assets/images/pg-automation.webp'
import careerPortal from '../assets/images/career-portal.webp'
import libraryFrontend from '../assets/images/library-frontend.webp'

// Titles, periods, descriptions and URLs copied from https://ict-cell.ruet.ac.bd/projects/list.
// Banner images: save a 16:9 WebP (e.g. 1280x720) in src/assets/images, import it
// (`import myShot from '../assets/images/my-shot.webp'`) and pass it as `image`.
// TODO: verify tags — the per-project stacks below are a best guess from the overall
// stack (PHP, Laravel 8+, MySQL, jQuery, JavaScript, SSL Commerz, SMS Gateway, Teletalk API).
const coreStack = ['PHP', 'Laravel 8+', 'MySQL', 'jQuery', 'JavaScript']
// Your role on each project; shown as a highlighted pill on the card.
const fullStack = 'Full Stack Developer'

export const projects: Project[] = [
  {
    title: 'Undergraduate Admission System',
    slug: 'undergraduate-admission-system',
    // Co-developed with a senior developer
    role: 'Co-Developer',
    period: '2023-Present',
    shortDescription:
      'It is a platform that manages the end-to-end process of admissions for undergraduate programs from application submission, merit list generation and fee payment.',
    tags: [...coreStack, 'SSL Commerz', 'SMS Gateway', 'Teletalk API'],
    image: ugAdmission,
    imageAlt: 'Illustration of a smiling student holding a book and wearing a backpack',
    liveUrl: 'https://admission.ruet.ac.bd',
    featured: false,
  },
  {
    title: 'PoC (Points of Contacts)',
    slug: 'points-of-contacts',
    role: fullStack,
    period: '2025',
    shortDescription:
      'It is a central database of connecting the Campus Community to internal people of RUET as well as for external people thorough an Android/iOS app service.',
    tags: coreStack,
    image: poc,
    imageAlt: 'Illustration of people profiles connected along a line',
    liveUrl: 'https://poc.ruet.ac.bd',
    featured: false,
  },
  {
    title: 'Certificate Verification System',
    slug: 'certificate-verification-system',
    role: fullStack,
    period: '2025',
    shortDescription:
      'It is a system that manages the end-to-end process of certificate verifications for the students from application submission, online payment and receiving the documents.',
    tags: [...coreStack, 'SSL Commerz', 'SMS Gateway'],
    image: certificateVerification,
    imageAlt: 'Illustration of a magnifying glass over checked documents',
    // TODO: verify — the source page links this project to the PoC URL
    liveUrl: 'https://poc.ruet.ac.bd',
    featured: false,
  },
  {
    title: 'Guest House Booking System',
    slug: 'guest-house-booking-system',
    role: fullStack,
    period: '2025',
    shortDescription:
      'This system manages the end-to-end process of booking, approval and payments for Dhaka guest house. It also implements the compliance rules for the visitors of RUET.',
    tags: [...coreStack, 'SSL Commerz', 'SMS Gateway'],
    image: guestHouseBooking,
    imageAlt: 'Illustration of a traveller with a suitcase beside a booking web page',
    liveUrl: 'https://services.ruet.ac.bd',
    featured: true,
  },
  {
    title: 'Post Graduate Automation',
    slug: 'post-graduate-automation',
    role: fullStack,
    period: '2025',
    shortDescription:
      'The solution manages the process of admission for post-graduate programs from application submission and scrutiny to merit list generation and fee payment.',
    tags: [...coreStack, 'SSL Commerz', 'SMS Gateway'],
    image: pgAutomation,
    imageAlt: 'Illustration of a group of post-graduate students with books and a laptop',
    liveUrl: 'https://pg.ruet.ac.bd',
    featured: true,
  },
  {
    title: 'RUET Career Portal',
    slug: 'ruet-career-portal',
    role: fullStack,
    period: '2026',
    shortDescription:
      'The software simplifies recruitment process for RUET administration and provides a smooth experience for applicants from online application submission to payments.',
    tags: [...coreStack, 'SSL Commerz', 'SMS Gateway'],
    image: careerPortal,
    imageAlt: 'Illustration of a person with a laptop sitting on an online application page',
    liveUrl: 'https://career.ruet.ac.bd',
    featured: true,
  },
  {
    title: 'RUET Library Front-end',
    slug: 'ruet-library-front-end',
    role: fullStack,
    period: '2023-Current',
    shortDescription:
      'This is a user-oriented web interface developed to work seamlessly with the KOHA.This platform serves as the base public-facing portal for the users.',
    tags: coreStack,
    image: libraryFrontend,
    imageAlt: 'Illustration of a person reading beside a stack of books',
    liveUrl: 'https://library.ruet.ac.bd',
    featured: false,
  },
]
