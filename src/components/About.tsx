import { profile } from '../data/profile'
import { whatIDo, type Accent } from '../data/whatIDo'
import Reveal from './Reveal'

// Charcoal icons on mustard and coral keep good contrast.
const accentStyles: Record<Accent, string> = {
  teal: 'bg-deep-teal text-white',
  mustard: 'bg-mustard text-charcoal',
  coral: 'bg-coral text-charcoal',
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Text (comes first on phones, sits on the right on desktop) */}
        <Reveal className="lg:col-start-2 lg:row-start-1">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-deep-teal">
            About
          </p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            What I Do
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-lg text-charcoal/80">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        {/* The three cards */}
        <ul className="grid gap-4 lg:col-start-1 lg:row-start-1">
          {whatIDo.map((item, index) => {
            const Icon = item.icon
            return (
              <li key={item.title}>
                <Reveal delay={index * 0.1}>
                  <div className="flex items-center gap-5 rounded-2xl border border-charcoal/5 bg-white p-5 shadow-[0_8px_30px_rgb(24_38_43/0.08)]">
                    <span
                      aria-hidden="true"
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${accentStyles[item.accent]}`}
                    >
                      <Icon size={24} />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-1 text-base text-charcoal/75">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}