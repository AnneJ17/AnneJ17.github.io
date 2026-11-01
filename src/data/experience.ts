import type { Accent } from './whatIDo'

export type ExperienceItem = {
  company: string
  role: string
  period: string
  note?: string
  description: string
  tags: string[]
  accent: Accent
}

// Newest first. Edit the words here and the timeline updates.
export const experience: ExperienceItem[] = [
  {
    company: 'Concept Reply',
    role: 'Senior Consultant',
    period: 'Jun 2022 – Apr 2024',
    note: 'Client project: Stellantis Global Mobile App',
    description:
      'Investigated customer-reported issues, contributed to the app’s enrollment flow, and resolved wearable-related problems, validating the app across regions and vehicle brands.',
    tags: ['AWS', 'MQTT'],
    accent: 'teal',
  },
  {
    company: 'Fifth Third Bank',
    role: 'Android Engineer',
    period: 'Oct 2021 – May 2022',
    description:
      'Built goal flows, transaction features and smart savings in a multi-module banking app, shared Kotlin Coroutines and Flow knowledge with seven teams, and supported the adoption of Hilt.',
    tags: ['Coroutines', 'Flow', 'Hilt', 'Multi-module'],
    accent: 'mustard',
  },
  {
    company: 'Universal Orlando Resort',
    role: 'Android Engineer',
    period: 'Jul 2021 – Sep 2021',
    description:
      'Implemented push notifications, in-app messaging and deep links, and contributed to the app’s modularization.',
    tags: ['Retrofit', 'Room', 'MVVM'],
    accent: 'coral',
  },
  {
    company: 'The Church of Jesus Christ of Latter-day Saints',
    role: 'Android Engineer',
    period: 'Feb 2021 – Jun 2021',
    description:
      'Contributed to a beta release delivered within three months, with custom navigation, media-player views, animations and persistent downloads.',
    tags: ['Flow', 'WorkManager', 'Room', 'Coil', 'Hilt'],
    accent: 'teal',
  },
  {
    company: 'Georgia Gwinnett College',
    role: 'B.S. in Information Technology',
    period: '2017 – 2020',
    description:
      'Concentration in Software Development. Microsoft Technology Associate (MTA) certification, and the President’s List four years in a row.',
    tags: [],
    accent: 'mustard',
  },
]