export interface Discipline {
  id: string
  number: string
  name: string
  shortDescription: string
  fullDescription: string
  icon: string
  slug: string
  size: 'large' | 'medium' | 'small'
  heroImage?: string
  features?: string[]
  levels?: ('Beginner' | 'Intermediate' | 'Advanced')[]
}

export interface Testimonial {
  id: string
  text: string
  author: string
  role: string
  rating: number
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  specialty?: string
  image?: string
  socials: {
    instagram?: string
    youtube?: string
  }
}

export interface BatchSlot {
  time: string
  className: string
  instructor: string
  discipline: string
}

export interface DaySchedule {
  day: string
  slots: BatchSlot[]
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  date: string
  category: string
  readTime: string
}
