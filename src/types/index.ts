export interface Discipline {
  id: string
  number: string
  name: string
  shortDescription: string
  fullDescription: string
  icon: string
  slug: string
  size: 'large' | 'medium' | 'small'
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
  socials: {
    instagram?: string
  }
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
