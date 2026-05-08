import { useState } from 'react'

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Why A&S', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-800/10 bg-sand-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-brand-950 sm:text-xl"
        >
          A&amp;S{' '}
          <span className="text-brand-700 font-sans text-sm font-medium tracking-wide">
            Enterprises
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-700 transition hover:text-brand-950"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-brand-950 px-4 py-2 text-sm font-semibold text-sand-50 shadow-sm transition hover:bg-brand-800"
          >
            Get started
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-brand-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-brand-800/10 bg-sand-50 px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-medium text-brand-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-brand-950 py-3 text-center text-sm font-semibold text-sand-50"
              onClick={() => setOpen(false)}
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
