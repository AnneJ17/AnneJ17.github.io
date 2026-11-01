import { FileText, Mail } from 'lucide-react'
import { MotionConfig, motion } from 'motion/react'
import { profile } from '../data/profile'
import { social } from '../data/social'
import BrushStroke from './BrushStroke'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

const links = [
  { label: 'GitHub', href: social.github, icon: GithubIcon, external: true },
  {
    label: 'LinkedIn',
    href: social.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  { label: 'Résumé', href: social.resume, icon: FileText, external: true },
  {
    label: 'Email',
    href: `mailto:${social.email}`,
    icon: Mail,
    external: false,
  },
]

// Shown until you add your real photo in src/data/profile.ts
function PortraitPlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-end bg-gradient-to-b from-mustard/30 to-cream">
      <svg
        viewBox="0 0 200 220"
        className="w-3/4 text-deep-teal/25"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="100" cy="78" r="44" />
        <path d="M10 220c0-52 40-84 90-84s90 32 90 84z" />
      </svg>
      <span className="absolute top-[38%] rounded-full bg-white px-4 py-1.5 text-sm font-medium text-charcoal shadow">
        Your photo goes here
      </span>
    </div>
  )
}

export default function Hero() {
  const Portrait = profile.portrait

  return (
    <MotionConfig reducedMotion="user">
      <section id="home" className="relative scroll-mt-24 overflow-hidden">
        <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pt-28">
          {/* Left: headline, intro, links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-[clamp(3rem,8vw,5.25rem)] font-extrabold leading-[0.95] tracking-tight">
              Hey There,
              <br />
              I’m <span className="text-deep-teal">Anne!</span>
            </h1>

            <p className="mt-7 text-balance font-display text-xl font-semibold text-deep-teal sm:text-2xl">
              {profile.subtitle}
            </p>

            <p className="mt-4 max-w-md text-lg text-charcoal/80">
              {profile.intro}
            </p>

            <ul className="-ml-3 mt-8 flex flex-wrap gap-x-2 gap-y-1">
              {links.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-base font-medium text-charcoal transition-colors hover:bg-deep-teal/10 hover:text-deep-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-teal"
                    >
                      <span aria-hidden="true" className="text-deep-teal">
                        <Icon size={18} />
                      </span>
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* Right: brushstroke and portrait */}
          <motion.div
            className="relative mx-auto aspect-square w-full max-w-[32rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <BrushStroke className="absolute inset-0 h-full w-full text-deep-teal" />

            {/* Small decorative details */}
            <span
              aria-hidden="true"
              className="absolute right-[6%] top-[8%] h-6 w-6 rounded-full bg-coral"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-[14%] left-[2%] h-4 w-4 rounded-full bg-mustard"
            />
            <svg
              viewBox="0 0 24 24"
              className="absolute left-[4%] top-[10%] h-10 w-10 text-mustard"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 0c0 7 5 12 12 12-7 0-12 5-12 12 0-7-5-12-12-12 7 0 12-5 12-12z" />
            </svg>

            {/* Portrait frame */}
            <div className="absolute bottom-0 left-[53%] aspect-[3/4] w-[62%] -translate-x-1/2 overflow-hidden rounded-t-full rounded-b-[2rem] bg-white shadow-xl">
              {Portrait ? (
                <img
                  src={Portrait}
                  alt={profile.portraitAlt}
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
              ) : (
                <PortraitPlaceholder />
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  )
}