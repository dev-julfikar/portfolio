import type { Skill } from '../types'

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'jQuery', 'React', 'Redux Toolkit', 'Material UI', 'Tailwind CSS', 'Flowbite'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Prisma', 'TypeScript', 'GraphQL', 'Laravel', 'Kafka'],
  },
  {
    category: 'Databases',
    items: ['Oracle Exadata', 'MS SQL Server', 'MySQL', 'Mongo DB', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'Github Actions', 'Nginx'],
  },
  {
    category: 'Mobile App',
    items: ['Flutter'],
  },
  {
    category: 'UI/UX Design',
    items: ['Figma'],
  },
  {
    category: 'Workflow',
    items: ['Git', 'Github', 'Scrum (Jira)'],
  },
  {
    category: 'Data Engineering & BI',
    items: ['Linux', 'Shell Scripting', 'Python', 'ODI 12c', 'OBI 12c', 'OEM 13c'],
  },
]
