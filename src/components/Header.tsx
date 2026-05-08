import { useEffect, useState } from 'react'

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Why A&S', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="sticky top-0 z-[80] border-b border-brand-800/10 bg-sand-50/90 backdrop-blur-md">
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
          className="inline-flex rounded-lg p-2 text-brand-800 transition hover:bg-brand-950/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile: overlay + slide-in panel (md:hidden) */}
      <div
        className={`fixed inset-0 z-[70] md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          className={`absolute inset-0 bg-brand-950/50 transition-opacity duration-300 ease-out ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        />

        <aside
          id="mobile-nav"
          className={`absolute top-0 right-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-brand-800/10 bg-sand-50 shadow-2xl transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between border-b border-brand-800/10 px-4 py-4">
            <span className="font-display text-base font-semibold text-brand-950">Menu</span>
            <button
              type="button"
              className="rounded-lg p-2 text-brand-800 transition hover:bg-brand-950/10"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 px-4 py-6" aria-label="Primary mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-brand-800 transition hover:bg-brand-950/5 hover:text-brand-950"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 rounded-full bg-brand-950 px-4 py-3 text-center text-sm font-semibold text-sand-50 shadow-sm transition hover:bg-brand-800"
              onClick={() => setOpen(false)}
            >
              Get started
            </a>
          </nav>
        </aside>
      </div>
    </header>
  )
}
