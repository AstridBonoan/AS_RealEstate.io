export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-950 text-sand-50"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 70% -20%, rgba(201,162,39,0.35), transparent), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(148,163,184,0.2), transparent)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
          One company. Two core strengths.
        </p>
        <h1
          id="hero-heading"
          className="font-display max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Construction excellence and real estate clarity—guided from first sketch to closing.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand-100/90">
          A&amp;S Enterprises helps homeowners, investors, and businesses move faster with a single
          accountable team for quality builds, property strategy, and seamless project delivery.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 shadow-lg transition hover:bg-accent-400"
          >
            Talk to a project advisor
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-sand-50/30 px-6 py-3 text-sm font-semibold text-sand-50 transition hover:border-sand-50/60 hover:bg-white/5"
          >
            Explore services
          </a>
        </div>
      </div>
    </section>
  )
}
