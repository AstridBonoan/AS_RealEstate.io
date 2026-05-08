const steps = [
  {
    title: 'Discover & align',
    text:
      'We clarify goals, budget, and timing—whether you are remodeling a home you love or shaping a deal around a property’s potential.',
  },
  {
    title: 'Plan with numbers',
    text:
      'Scope, allowances, and contingencies are spelled out early so decisions are confident, not reactive.',
  },
  {
    title: 'Build & communicate',
    text:
      'Weekly rhythm, documented changes, and proactive updates—so you always know what is happening on site.',
  },
  {
    title: 'Finish & transition',
    text:
      'Punch lists closed with care; for real estate clients, we support a smooth handoff to closing or leasing.',
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-y border-brand-800/10 bg-sand-100 py-20 sm:py-24"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-500">Our process</p>
            <h2
              id="process-heading"
              className="font-display mt-2 text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl"
            >
              A clear path from intent to keys in hand
            </h2>
            <p className="mt-4 text-brand-700">
              The same discipline applies to a kitchen renovation or a portfolio play: fewer surprises,
              clearer ownership, and respect for your time.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-brand-950 px-5 py-2.5 text-sm font-semibold text-sand-50 transition hover:bg-brand-800"
            >
              Start a conversation
            </a>
          </div>
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative flex gap-4 rounded-xl bg-white/80 p-5 shadow-sm ring-1 ring-brand-800/5"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-950 font-display text-sm font-semibold text-accent-400"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-950">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-700">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
