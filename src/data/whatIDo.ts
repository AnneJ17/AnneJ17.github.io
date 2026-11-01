import { Globe, Palette, Smartphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// The color of the round icon behind each card's symbol.
export type Accent = 'teal' | 'mustard' | 'coral'

export type WhatIDoItem = {
  title: string
  description: string
  icon: LucideIcon
  accent: Accent
}

// The three cards in the About section. Edit the words here.
export const whatIDo: WhatIDoItem[] = [
  {
    title: 'Mobile App Development',
    description:
      'My professional work: Kotlin and Java apps built with Jetpack Compose, MVVM, Coroutines, Flow, Retrofit, Room and Hilt.',
    icon: Smartphone,
    accent: 'teal',
  },
  {
    title: 'Web Development',
    description:
      'Websites I’ve studied and built, using modern tools, including AI-assisted coding.',
    icon: Globe,
    accent: 'mustard',
  },
  {
    title: 'Art & Craft',
    description:
      'Drawing, crochet and diamond art. The handmade side of what I make.',
    icon: Palette,
    accent: 'coral',
  },
]