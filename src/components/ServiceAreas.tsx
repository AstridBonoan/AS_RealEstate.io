const areas = [
  'Metro core',
  'Inner suburbs',
  'Growing corridors',
  'Regional investors',
]

export function ServiceAreas() {
  return (
    <section className="bg-brand-950 py-16 text-sand-50" aria-labelledby="areas-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="areas-heading" className="font-display text-2xl font-semibold sm:text-3xl">
          Proudly serving our region and nearby communities
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sand-100/85">
          Update this section with your primary cities and counties. Local presence keeps response times
          short and relationships direct.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {areas.map((a) => (
            <li
              key={a}
              className="rounded-full border border-sand-50/20 bg-white/5 px-4 py-2 text-sm font-medium"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
