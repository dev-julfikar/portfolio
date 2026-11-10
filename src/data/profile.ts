import type { Profile } from '../types'
import photo from '../assets/images/profile.webp'

export const profile: Profile = {
  name: 'Md. Julfikar Islam',
  brand: 'Julfikar',
  title: 'Assistant Computer Programmer',
  location: 'Computer Center (L-3), RUET',
  phone: '+8801736889934',
  email: 'julfikar.islam.khan@gmail.com',
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/coder-julfikar' },
    { label: 'GitHub', url: 'https://github.com/dev-julfikar' },
  ],
  photo,
  photoAlt: 'Portrait of Md. Julfikar Islam wearing a white shirt and blue tie',
  alumni: 'KUETian',
  openToWork: true,
  headline:
    'An engineer who thinks in data, with 10+ years of building dependable enterprise systems across telecom, banking and public service, and a growing focus on AI.',
  summary:
    'IT Engineer with 10+ years of experience bridging technical operations, data analytics and application development to drive enterprise efficiency. Skilled in end-to-end problem resolution, system optimization and building automated solutions that cut operational expenses. Combines strong analytical acumen with hands-on technical support to translate complex stakeholder requirements into high-impact software and data-driven results.',
  interests: [
    'Software Architecture',
    'System Design',
    'Data Analytics',
    'Big Data',
    'Machine Learning',
    'Artificial Intelligence',
    'Generative AI',
  ],
  education: [
    {
      degree: 'B.Sc. in Computer Science and Engineering',
      institution: 'Khulna University of Engineering & Technology (KUET)',
      result: 'CGPA 3.66/4.00',
      startDate: '02/2012',
      endDate: '04/2016',
    },
  ],
  certifications: [
    { title: 'Oracle 12c Database: Administration', issuer: 'Linkedin LEARNING' },
    { title: 'Agile Software Development: Scrum for Developers', issuer: 'Linkedin LEARNING' },
    { title: 'AWS for Developers: RDS Mysql Database with Lambdas', issuer: 'Linkedin LEARNING' },
    { title: 'Amazon Web Services: Exploring Business Solutions', issuer: 'Linkedin LEARNING' },
    { title: 'Blockchain Basics', issuer: 'Linkedin LEARNING' },
    { title: 'Kafka Essential Training', issuer: 'Linkedin LEARNING' },
  ],
}
