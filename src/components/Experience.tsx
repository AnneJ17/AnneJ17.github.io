import { experience } from '../data/experience'
import type { Accent } from '../data/whatIDo'
import Reveal from './Reveal'

const dotStyles: Record<Accent, string> = {
  teal: 'bg-deep-teal',
  mustard: 'bg-mustard',
  coral: 'bg-coral',
}

export default function Experience() {
  return (
    <div className="mt-24 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <Reveal>
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-deep-teal">
          Experience
        </p>
        <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Where I’ve worked
        </h3>
        <p className="mt-4 max-w-sm text-lg text-charcoal/80">
          Android apps across banking, automotive, entertainment and education.
        </p>
      </Reveal>

      <ol className="relative ml-1.5 border-l-2 border-charcoal/10">
        {experience.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            className="relative pb-10 pl-8 last:pb-0"
          >
            <span
              aria-hidden="true"
              className={`absolute -left-[7px] top-2 h-3 w-3 rounded-full ${dotStyles[item.accent]}`}
            />
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-charcoal/70">
                {item.period}
              </p>
              <h4 className="mt-1 text-xl font-bold">{item.company}</h4>
              <p className="font-semibold text-deep-teal">{item.role}</p>
              {item.note && (
                <p className="text-sm text-charcoal/70">{item.note}</p>
              )}
              <p className="mt-2 text-base text-charcoal/80">
                {item.description}
              </p>
              {item.tags.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-cream px-3 py-1 text-sm font-medium text-charcoal/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  )
}