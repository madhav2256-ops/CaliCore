import type { DaySchedule } from '@/types'

// PRE-LAUNCH DEV CHECK: Confirm specific class slot breakdowns with the client before replacing this with a granular timetable.
export const schedule: DaySchedule[] = [
  {
    day: 'Monday',
    slots: [
      { time: '06:00 AM – 11:00 AM', className: 'Morning Split Sessions', instructor: 'Abdul Sir & Coaches', discipline: 'calisthenics' },
      { time: '04:00 PM – 10:00 PM', className: 'Evening Split Sessions', instructor: 'Abdul Sir & Coaches', discipline: 'gymnastics' },
    ],
  },
  {
    day: 'Tuesday',
    slots: [
      { time: '06:00 AM – 11:00 AM', className: 'Morning Split Sessions', instructor: 'Abdul Sir & Coaches', discipline: 'calisthenics' },
      { time: '04:00 PM – 10:00 PM', className: 'Evening Split Sessions', instructor: 'Abdul Sir & Coaches', discipline: 'gymnastics' },
    ],
  },
  {
    day: 'Wednesday',
    slots: [
      { time: '06:00 AM – 11:00 AM', className: 'Morning Split Sessions', instructor: 'Abdul Sir & Coaches', discipline: 'calisthenics' },
      { time: '04:00 PM – 10:00 PM', className: 'Evening Split Sessions', instructor: 'Abdul Sir & Coaches', discipline: 'gymnastics' },
    ],
  },
  {
    day: 'Thursday',
    slots: [
      { time: '06:00 AM – 11:00 AM', className: 'Morning Split Sessions', instructor: 'Abdul Sir & Coaches', discipline: 'calisthenics' },
      { time: '04:00 PM – 10:00 PM', className: 'Evening Split Sessions', instructor: 'Abdul Sir & Coaches', discipline: 'gymnastics' },
    ],
  },
  {
    day: 'Friday',
    slots: [
      { time: '06:00 AM – 11:00 AM', className: 'Morning Split Sessions', instructor: 'Abdul Sir & Coaches', discipline: 'calisthenics' },
      { time: '04:00 PM – 10:00 PM', className: 'Evening Split Sessions', instructor: 'Abdul Sir & Coaches', discipline: 'gymnastics' },
    ],
  },
  {
    day: 'Saturday',
    slots: [
      { time: '06:00 AM – 11:00 AM', className: 'Morning Split Sessions', instructor: 'Abdul Sir & Coaches', discipline: 'calisthenics' },
      { time: '04:00 PM – 10:00 PM', className: 'Evening Split Sessions', instructor: 'Abdul Sir & Coaches', discipline: 'gymnastics' },
    ],
  },
  {
    day: 'Sunday',
    slots: [],
  },
]
