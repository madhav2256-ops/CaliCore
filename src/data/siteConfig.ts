export const siteConfig = {
  name: 'CALICORE',
  fullName: 'CaliCore Academy',
  tagline: 'Where Strength Is Built. Where Discipline Is Forged. Where Champions Rise.',
  shortTagline: 'Where Strength Is Built',
  description: 'Delhi\'s premier calisthenics, gymnastics & MMA academy. No machines. Pure bodyweight mastery.',
  phone: '+91 80762 41590',
  phoneDisplay: '+91 80762 41590',
  // PRE-LAUNCH DEV CHECK: Verify if there is an official business email before launch.
  email: '',
  address: 'F215, Near Bal Bhavan School, Mangal Bazar, Block F, Laxmi Nagar, Delhi – 110092',
  addressShort: 'Laxmi Nagar, Delhi',
  coordinates: { lat: 28.6357271, lng: 77.2797573 },
  hours: {
    morning: '6:00 AM – 11:00 AM',
    evening: '4:00 PM – 10:00 PM',
    closed: 'Sunday',
  },
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8!2d77.2797573!3d28.6357271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c5b5ec0d21%3A0x1!2sCaliCore%20Academy!5e0!3m2!1sen!2sin!4v1',
  mapDirections: 'https://maps.app.goo.gl/iU3XBP6M5CY19hN69',
  socials: {
    instagram: 'https://www.instagram.com/calicore1/',
    whatsapp: 'https://wa.me/918076241590',
  },
  logo: '/logo.png',
  rating: { score: 5.0, count: 46, platform: 'Google' },
  stats: {
    members: '1800+',
    rating: '5.0★',
    disciplines: '9',
    established: 'Est. 2026',
  },
} as const
