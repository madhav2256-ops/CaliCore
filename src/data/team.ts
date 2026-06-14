import type { TeamMember } from '@/types'

// PRE-LAUNCH DEV CHECK: Verify all coaching team profiles and assets with the client.
export const team: TeamMember[] = [
  {
    id: 'abdul-sir',
    name: 'Abdul Sir',
    role: 'Head Coach',
    specialty: 'Gymnastics & Calisthenics Specialist',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
    bio: 'Renowned calisthenics and gymnastics expert with years of experience coaching and spotting athletes from kids batches to competitive advanced levels.',
    socials: {
      instagram: 'https://www.instagram.com/calicore1/',
    },
  },
  {
    id: 'placeholder-yoga',
    name: 'Certified Yoga Instructor',
    role: 'Mobility Coach',
    specialty: 'Core Mobility & Flow',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
    bio: 'Specialist in body awareness, deep range-of-motion flexibility, and breath control to aid in athletic recovery.',
    socials: {
      instagram: 'https://www.instagram.com/calicore1/',
    },
  },
  {
    id: 'placeholder-combat',
    name: 'Certified Combat Coach',
    role: 'MMA & Boxing Coach',
    specialty: 'Striking & Combat Conditioning',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop',
    bio: 'Expert in combat mechanics, boxing drills, and physical self-defense classes for intermediate to advanced athletes.',
    socials: {
      instagram: 'https://www.instagram.com/calicore1/',
    },
  },
]
