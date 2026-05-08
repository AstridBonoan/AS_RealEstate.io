export function Footer() {
  return (
    <footer className="border-t border-brand-800/10 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-brand-950">A&amp;S Enterprises</p>
          <p className="mt-1 text-sm text-brand-700">
            Construction and real estate services. © {new Date().getFullYear()} A&amp;S Enterprises.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm font-medium text-brand-700">
          <a href="#services" className="hover:text-brand-950">
            Services
          </a>
          <a href="#process" className="hover:text-brand-950">
            Process
          </a>
          <a href="#contact" className="hover:text-brand-950">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
