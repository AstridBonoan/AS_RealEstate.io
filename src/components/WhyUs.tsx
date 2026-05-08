const reasons = [
  {
    title: 'One accountable team',
    text: 'Construction and property decisions stay coordinated—fewer conflicting recommendations.',
  },
  {
    title: 'Licensed, insured work',
    text: 'Professional standards on site; documentation you can share with lenders or partners.',
  },
  {
    title: 'Plain-language updates',
    text: 'You should not need a glossary to understand your own project. We keep reporting practical.',
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-white py-20 sm:py-24" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-500">Why A&amp;S</p>
            <h2
              id="why-heading"
              className="font-display mt-2 text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl"
            >
              Enterprise-style organization with local, hands-on leadership
            </h2>
          </div>
          <p className="text-brand-700 lg:text-right lg:max-w-md lg:justify-self-end">
            Whether you are improving a home you live in or compounding equity through real estate, you
            deserve partners who treat the details as seriously as you do.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-3">
          {reasons.map((r) => (
            <li
              key={r.title}
              className="rounded-2xl border border-brand-800/10 bg-sand-50 p-6"
            >
              <h3 className="font-display text-lg font-semibold text-brand-950">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-700">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
