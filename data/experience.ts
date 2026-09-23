// Edit this file to keep your work history current. Most recent role first.
export type ExperienceItem = {
  period: string
  title: string
  company: string
  highlights?: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: 'Sept 2024 to Present',
    title: 'Software Developer',
    company: 'Play Communications',
    highlights: [
      'Built and shipped products including Temi, Hema Connect, and ByZara.',
      'In 2025, moved onto the team helping build Zuri Health.'
    ]
  },
  {
    period: 'Jan 2024 to Sept 2024',
    title: 'Frontend Software Developer',
    company: 'BorrowBuddiez'
  },
  {
    period: 'Sept 2023 to Dec 2023',
    title: 'Full-Stack Software Developer',
    company: 'FarMight'
  },
  {
    period: 'Jan 2023 to Sept 2023',
    title: 'Customer Care',
    company: 'Zuri Health'
  },
  {
    period: 'Sept 2022 to Dec 2022',
    title: 'Social Media Manager',
    company: 'Zuri Health'
  }
]
