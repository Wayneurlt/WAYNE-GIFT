export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'SQL']
  },
  {
    title: 'Frontend',
    items: ['Vue', 'Nuxt', 'React', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Backend & APIs',
    items: ['Spring Boot', 'Node.js', 'Express', 'Django', 'REST', 'GraphQL']
  },
  {
    title: 'Mobile',
    items: ['Flutter', 'React Native']
  },
  {
    title: 'Data & Infra',
    items: ['PostgreSQL', 'MySQL', 'Docker', 'Git']
  }
]
