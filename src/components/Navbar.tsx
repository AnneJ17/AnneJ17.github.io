import { Mail, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '../data/navigation'
import { social } from '../data/social'
import { scrollToSection } from '../lib/scroll'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu when the Escape key is pressed.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const goTo = (id: string) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      {/* Same width and side padding as the page sections, so everything lines up */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <button
          type="button"
          onClick={() => goTo('home')}
          className="font-display text-3xl font-extrabold tracking-tight text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-teal"
          aria-label="Anne Joseph, back to top"
        >
          Anne<span className="text-coral">.</span>
        </button>

        {/* Desktop navigation */}
        <nav
          aria-label="Main"
          className="hidden items-center gap-1 rounded-full bg-white/85 p-1.5 shadow-md backdrop-blur md:flex"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(item.id)}
              className="rounded-full px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-deep-teal/10 hover:text-deep-teal focus-visible:outline-2 focus-visible:outline-deep-teal"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop email icon */}
        <a
          href={`mailto:${social.email}`}
          aria-label="Email Anne"
          className="hidden h-11 w-11 items-center justify-center rounded-full bg-white/85 text-deep-teal shadow-md backdrop-blur transition-colors hover:bg-deep-teal hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-teal md:inline-flex"
        >
          <Mail size={20} aria-hidden="true" />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-charcoal shadow-md backdrop-blur focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-teal md:hidden"
        >
          {open ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="mx-auto mt-3 max-w-6xl px-6 md:hidden">
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="rounded-3xl bg-white p-3 shadow-lg"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className="flex min-h-12 w-full items-center rounded-2xl px-4 text-left font-display text-xl font-semibold text-charcoal hover:bg-deep-teal/10 focus-visible:outline-2 focus-visible:outline-deep-teal"
              >
                {item.label}
              </button>
            ))}
            <a
              href={`mailto:${social.email}`}
              className="mt-1 flex min-h-12 w-full items-center gap-3 rounded-2xl px-4 font-medium text-deep-teal hover:bg-deep-teal/10 focus-visible:outline-2 focus-visible:outline-deep-teal"
            >
              <Mail size={20} aria-hidden="true" />
              {social.email}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}