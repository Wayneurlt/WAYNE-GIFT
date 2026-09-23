// Edit this list to match your real stack.
export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Dart', 'SQL']
  },
  {
    title: 'Frontend',
    items: ['Vue', 'Nuxt', 'React', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express', 'Laravel', 'Django', 'REST', 'GraphQL']
  },
  {
    title: 'Mobile',
    items: ['Flutter', 'React Native']
  },
  {
    title: 'Data & Infra',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Git', 'CI/CD']
  }
]
