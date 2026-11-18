// Add REAL quotes from clients or colleagues here. The Testimonials section
// stays hidden on the site until this list has at least one entry.
export type Testimonial = {
  quote: string
  name: string
  role: string // e.g. "Founder, ByZara"
  url?: string // optional: links the role to the project you built
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Wayne built our Review Management website from scratch and made the whole process easy. He listened, delivered a clean, professional site, and was quick to respond whenever I needed a change.',
    name: 'Sebastian',
    // Wording written by Wayne with Sebastian's permission. Add his surname if he's happy to show it.
    role: 'Review Management',
    url: 'https://reviewmanagement.uk/'
  },
  {
    quote: 'I loooooovvvveeee iiittttttt',
    name: 'Elsie Priscah',
    role: 'Prissy Plans Events',
    url: 'https://prissy-plans-events.vercel.app/'
  }
]
