// Replace these with your real projects — title, description, tags, and links.
//
// Screenshots are automatic: set `liveUrl` to the real site and a preview
// image is generated from it for you (via a free screenshot service) — no
// need to capture or upload one yourself. Only set `image` explicitly if you
// want to override that (e.g. a mobile app with no live URL, or a custom shot).
export type Project = {
  title: string
  description: string
  // Your role on this project — e.g. "Lead Frontend Engineer" or "Solo Full-Stack Developer".
  role?: string
  // 2-3 short bullets on what YOU built/decided, a specific technical challenge you solved,
  // and the outcome. This is what turns a project card into evidence of your work, not
  // just a description of the product. Leave unset until you have the real specifics.
  highlights?: string[]
  category: 'Website' | 'Web App' | 'Mobile App'
  tags: string[]
  image?: string
  liveUrl?: string
  codeUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Zuri Health',
    description:
      'A digital healthcare platform offering on-demand virtual doctor consultations, prescription delivery, lab testing, and a WhatsApp-based health assistant across Africa.',
    category: 'Website',
    tags: ['Healthtech', 'Telemedicine', 'WhatsApp API'],
    liveUrl: 'https://zuri.health/'
  },
  {
    title: 'ByZara',
    description:
      'A subscription lifestyle platform bundling home cleaning, chef-prepared meals, laundry, and errands into one service for busy households and offices.',
    category: 'Website',
    tags: ['Subscriptions', 'Lifestyle', 'Bookings'],
    liveUrl: 'https://byzara.life/'
  },
  {
    title: 'Temi',
    description:
      "An AI-powered companion app for relationships and community — connecting people, curating events, and offering emotional support and concierge help.",
    category: 'Mobile App',
    tags: ['AI', 'Social', 'Mobile'],
    liveUrl: 'https://www.temi.love/'
  },
  {
    title: 'Review Management',
    description:
      'A reputation management service helping businesses grow, manage, and repair their online reviews across Google, Facebook, and Instagram.',
    category: 'Website',
    tags: ['SaaS', 'Reputation Management'],
    liveUrl: 'https://reviewmanagement.uk/'
  },
  {
    title: 'Montoya',
    description:
      "A multiplayer party game platform with Truth or Dare, Charades, and more — playable pass-and-play on one phone or live across everyone's own device.",
    category: 'Web App',
    tags: ['Multiplayer', 'Games'],
    liveUrl: 'https://montoya.ke/'
  },
  {
    title: 'Zuri Health Doctors Portal',
    description:
      'An SMS-based consultation portal for Zuri Health doctors to manage and respond to patient messages for remote medical care.',
    category: 'Web App',
    tags: ['Healthtech', 'Telemedicine', 'SMS'],
    liveUrl: 'https://doctorsportal.zuri.health/'
  },
  {
    title: 'Zuri Health Impact Dashboard',
    description:
      "An internal analytics dashboard tracking patient screening, onboarding, and follow-up metrics across Zuri Health's community health camps.",
    category: 'Web App',
    tags: ['Healthtech', 'Analytics', 'Dashboard'],
    liveUrl: 'https://bi.zuri.health/'
  },
  {
    title: 'Halo Music',
    description:
      'A music streaming web app with curated playlists across moods and activities, from top hits to workout and chill vibes.',
    category: 'Web App',
    tags: ['Streaming', 'Media Player', 'Entertainment'],
    liveUrl: 'https://taurus-sand.vercel.app/'
  },
  {
    title: 'The Play Group',
    description:
      'A mobile content and digital solutions company delivering music streaming, gaming, and ring-back tone services for telecom operators across Africa.',
    category: 'Website',
    tags: ['Telecom', 'Digital Media', 'B2B'],
    liveUrl: 'https://theplaygroup.net/'
  },
  {
    title: 'Avicena Medical Aesthetics',
    description:
      'A medical tourism site for an Istanbul clinic offering aesthetic and plastic surgery to international patients, including travel logistics support.',
    category: 'Website',
    tags: ['Healthtech', 'Medical Tourism', 'Bookings'],
    liveUrl: 'https://avicenamedicalaesthetics.vercel.app/'
  },
  {
    title: 'Express Impress',
    description:
      'A Nairobi ground transportation company site offering taxi, car hire, and airport transfer bookings for corporate and individual clients.',
    category: 'Website',
    tags: ['Transportation', 'Bookings', 'B2B'],
    liveUrl: 'https://expressimpress.vercel.app/'
  },
  {
    title: 'Hiddenville Construction',
    description:
      'A construction company site for an East African firm offering design, project management, and sustainable building across residential, commercial, and healthcare projects.',
    category: 'Website',
    tags: ['Construction', 'B2B', 'Project Management'],
    liveUrl: 'https://gichamu.vercel.app/'
  },
  {
    title: 'Spiced Butter',
    description:
      'An artisanal condiment brand selling small-batch, handmade relishes and sauces made from locally sourced Kenyan ingredients.',
    category: 'Website',
    tags: ['E-commerce', 'Food & Beverage', 'Branding'],
    liveUrl: 'https://spiced-butter.vercel.app/'
  },
  {
    title: 'Ebonyi Diaspora Kenya',
    description:
      'A community platform connecting Ebonyi indigenes living in Kenya through networking, mentorship, and cultural events.',
    category: 'Website',
    tags: ['Community', 'Networking', 'Culture'],
    liveUrl: 'https://www.ebonyidiaspora.com/'
  },
  {
    title: 'Illchamus CBO',
    description:
      'A community platform for a Baringo County CBO supporting education, health, and cultural preservation for the Illchamus people.',
    category: 'Website',
    tags: ['Nonprofit', 'Community', 'Education'],
    liveUrl: 'https://illchamus.vercel.app/'
  },
  {
    title: 'Growth Centre Church',
    description:
      'The official site for a Kenyan congregation in Eldoret, sharing service times, ministries, and community outreach programs.',
    category: 'Website',
    tags: ['Faith-Based', 'Community', 'Events'],
    liveUrl: 'https://cgc-main-1.vercel.app/'
  }
]

export const categories = ['All', 'Website', 'Web App', 'Mobile App'] as const

const PLACEHOLDER_COLORS = ['6366f1', '8b5cf6', 'ec4899', '22d3ee']

function isRealUrl(url?: string): url is string {
  return !!url && /^https?:\/\//i.test(url)
}

// A free, keyless screenshot service (WordPress's mShots) — first request for
// a given URL can return a "capturing…" placeholder for a few seconds while it
// renders the page, then serves the real screenshot on subsequent loads.
function screenshotUrl(url: string, width = 800) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`
}

export function projectImage(project: Project, index = 0): string {
  if (project.image) return project.image
  if (isRealUrl(project.liveUrl)) return screenshotUrl(project.liveUrl)
  const color = PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length]
  return `https://placehold.co/640x420/0b1120/${color}?text=Add+a+Live+Link&font=inter`
}
