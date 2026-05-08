const cards = [
  {
    title: 'Construction & renovation',
    tag: 'Build',
    body:
      'Renovations, additions, and upgrades executed with clear schedules, licensed trades, and workmanship you can stand behind—whether it is a primary home or an investment flip.',
    bullets: ['Design-build coordination', 'Transparent milestones', 'Quality-focused finishes'],
  },
  {
    title: 'Real estate & property solutions',
    tag: 'Advise',
    body:
      'Guidance for buyers, sellers, and owners who want practical market context, disciplined timelines, and a partner who respects both the numbers and the people involved.',
    bullets: ['Buy / sell strategy', 'Investment planning', 'Vendor coordination'],
  },
  {
    title: 'Turnkey project partnership',
    tag: 'Deliver',
    body:
      'For investors and busy owners: we align acquisition, renovation scope, and exit or rental strategy so you are not juggling disconnected contractors and agents.',
    bullets: ['Single point of contact', 'Scope-to-budget alignment', 'Exit options discussed upfront'],
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-sand-50 py-20 sm:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-500">Our services</p>
          <h2
            id="services-heading"
            className="font-display mt-2 text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl"
          >
            Built for people who want fewer handoffs and more follow-through
          </h2>
          <p className="mt-4 text-brand-700">
            Inspired by integrated operators who combine craft and property expertise—without the
            noise of juggling unrelated vendors.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-2xl border border-brand-800/10 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent-500">
                {card.tag}
              </span>
              <h3 className="font-display mt-3 text-xl font-semibold text-brand-950">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-700">{card.body}</p>
              <ul className="mt-6 space-y-2 border-t border-sand-100 pt-6 text-sm text-brand-800">
                {card.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
